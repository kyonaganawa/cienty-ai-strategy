# Data Infrastructure & Integration Architecture

## Overview

This document outlines Cienty's data infrastructure, integration architecture, and data flow patterns that enable AI agents and analytics capabilities.

---

## Architecture Principles

### Core Principles
1. **Single Source of Truth**: Operational database as primary data source
2. **Real-time & Batch**: Support both real-time and batch data processing
3. **Scalability**: Handle growing data volumes efficiently
4. **Data Quality**: Ensure accuracy, consistency, and completeness
5. **Security**: Protect sensitive business and customer data
6. **Observability**: Monitor data flows and quality

---

## Data Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Application Layer                        │
│  (Web App, Mobile App, Internal Tools, AI Agents)          │
└────────────────┬────────────────────────────────────────────┘
                 │
┌────────────────▼────────────────────────────────────────────┐
│                    API Gateway Layer                        │
│  - Authentication / Authorization                           │
│  - Rate limiting                                            │
│  - Request routing                                          │
└────────────────┬────────────────────────────────────────────┘
                 │
    ┌────────────┴────────────┐
    │                         │
┌───▼──────────────┐  ┌──────▼────────────────────────────────┐
│   Write APIs     │  │         Read APIs                     │
│                  │  │  (Separate read replicas for scale)   │
└───┬──────────────┘  └──────┬────────────────────────────────┘
    │                        │
┌───▼────────────────────────▼───────────────────────────────┐
│              Operational Database (Primary)                │
│                    PostgreSQL / MySQL                      │
│  - Orders, Products, Customers, Inventory                  │
│  - Transactional data                                      │
│  - Master data                                             │
└────────────────┬───────────────────────────────────────────┘
                 │
                 │ (Change Data Capture / ETL)
                 │
┌────────────────▼───────────────────────────────────────────┐
│                    ETL Pipeline                            │
│  - Data extraction (CDC, batch)                            │
│  - Transformation (cleaning, enrichment)                   │
│  - Loading (incremental, full)                             │
│                                                             │
│  Tools: Airbyte, Fivetran, dbt, custom scripts            │
└────────────────┬───────────────────────────────────────────┘
                 │
    ┌────────────┴────────────────┐
    │                             │
┌───▼──────────────┐    ┌─────────▼──────────────────────────┐
│   Vector DB      │    │      Data Warehouse               │
│   (for AI)       │    │       (BigQuery)                  │
│                  │    │                                    │
│  - Embeddings    │    │  - Historical data                 │
│  - Product docs  │    │  - Aggregated metrics              │
│  - Policies      │    │  - Analytics models                │
│  - FAQs          │    │  - Reporting tables                │
└───┬──────────────┘    └─────────┬──────────────────────────┘
    │                             │
    │                             │
┌───▼─────────────────────────────▼──────────────────────────┐
│              Consumption Layer                             │
│                                                             │
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ AI Agents   │  │  BI Tools    │  │  Analytics Apps  │  │
│  │             │  │  (Looker,    │  │                  │  │
│  │ - Customer  │  │   Tableau)   │  │  - Dashboards    │  │
│  │ - Internal  │  │              │  │  - Reports       │  │
│  └─────────────┘  └──────────────┘  └──────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

---

## Operational Database

### Database Schema (High-Level)

#### Core Entities

**Customers (Pharmacies)**
```sql
customers
  - id (PK)
  - name
  - cnpj (Brazilian tax ID)
  - email
  - phone
  - address
  - credit_limit
  - payment_terms
  - status (active, inactive, suspended)
  - created_at
  - updated_at
```

**Products**
```sql
products
  - id (PK)
  - sku
  - name
  - description
  - category_id (FK)
  - manufacturer_id (FK)
  - active_ingredient
  - dosage
  - package_size
  - regulatory_code (Anvisa)
  - status (active, discontinued)
  - created_at
  - updated_at
```

**Inventory**
```sql
inventory
  - id (PK)
  - product_id (FK)
  - warehouse_id (FK)
  - quantity_available
  - quantity_reserved
  - quantity_incoming
  - reorder_point
  - last_updated
```

**Orders**
```sql
orders
  - id (PK)
  - customer_id (FK)
  - order_date
  - status (pending, confirmed, processing, shipped, delivered, cancelled)
  - subtotal
  - tax
  - shipping_cost
  - total
  - payment_method
  - payment_status
  - shipping_address
  - notes
  - created_at
  - updated_at
```

**Order Items**
```sql
order_items
  - id (PK)
  - order_id (FK)
  - product_id (FK)
  - quantity
  - unit_price
  - discount
  - tax
  - total
```

**Suppliers/Manufacturers**
```sql
suppliers
  - id (PK)
  - name
  - cnpj
  - type (manufacturer, distributor)
  - contact_info
  - payment_terms
  - status
  - created_at
  - updated_at
```

**Pricing**
```sql
pricing
  - id (PK)
  - product_id (FK)
  - customer_tier_id (FK, nullable for default pricing)
  - price
  - effective_from
  - effective_to
  - created_at
```

### Database Access Patterns

#### For AI Agents
- **Read replicas** for query workloads
- **Indexed queries** for fast lookups
- **Materialized views** for common aggregations
- **Connection pooling** for efficient resource usage

#### For Analytics
- **ETL pipelines** to data warehouse
- **Change Data Capture (CDC)** for real-time sync
- **Batch exports** for full refreshes

---

## BigQuery Data Warehouse

### Design Approach
- **Star Schema**: Fact and dimension tables for efficient analytics
- **Partitioning**: By date for query performance
- **Clustering**: By commonly filtered columns
- **Incremental Loading**: Only new/changed data

### Data Warehouse Schema

#### Fact Tables

**fact_orders**
```sql
- order_id
- customer_id
- order_date
- product_id
- quantity
- unit_price
- discount
- tax
- total_amount
- order_status
- payment_method
- partition: order_date
```

**fact_inventory_snapshots**
```sql
- snapshot_date
- product_id
- warehouse_id
- quantity_available
- quantity_reserved
- partition: snapshot_date
```

**fact_customer_interactions**
```sql
- interaction_id
- customer_id
- interaction_date
- channel (whatsapp, email, phone, web)
- type (inquiry, complaint, order, support)
- resolved (boolean)
- resolution_time_minutes
- agent_type (human, ai)
- partition: interaction_date
```

#### Dimension Tables

**dim_customers**
```sql
- customer_id
- customer_name
- cnpj
- region
- tier (bronze, silver, gold, platinum)
- signup_date
- status
```

**dim_products**
```sql
- product_id
- sku
- product_name
- category
- subcategory
- manufacturer
- active_ingredient
- is_generic (boolean)
```

**dim_time**
```sql
- date
- year
- quarter
- month
- week
- day_of_week
- is_holiday (boolean)
```

**dim_suppliers**
```sql
- supplier_id
- supplier_name
- supplier_type
- region
```

### Analytical Models (dbt)

#### Customer Analytics
- Customer lifetime value (CLV)
- Customer segmentation (RFM analysis)
- Churn prediction features
- Purchase patterns

#### Product Analytics
- Product performance metrics
- Inventory turnover rates
- Demand forecasting features
- Price elasticity analysis

#### Operational Analytics
- Order fulfillment metrics
- Supplier performance
- Inventory optimization
- Revenue and margin analysis

---

## ETL Pipeline Architecture

### ETL Tools
**Primary Option: Airbyte or Fivetran**
- Managed connectors
- Change Data Capture (CDC)
- Scheduling and orchestration
- Error handling and monitoring

**Alternative: Custom ETL**
- Python scripts with Airflow
- Greater control and customization
- Cost-effective for simple pipelines

### Data Flow Patterns

#### Real-time (CDC)
```
Operational DB → CDC (Debezium) → Kafka → Stream Processing → BigQuery
```

**Use Cases:**
- Critical inventory updates
- Order status changes
- Real-time dashboards

#### Batch (Daily/Hourly)
```
Operational DB → ETL Job → Staging → Transformation → BigQuery
```

**Use Cases:**
- Historical data loads
- Complex transformations
- Aggregated reports

### Data Transformation (dbt)

#### Staging Layer
- Raw data from source
- Minimal transformation (renaming, type casting)
- 1:1 mapping with source tables

#### Intermediate Layer
- Business logic application
- Data cleaning and enrichment
- Joining related tables

#### Mart Layer
- Final models for consumption
- Aggregated metrics
- Optimized for specific use cases

**Example dbt Model: Customer 360**
```sql
-- models/marts/customer_360.sql
WITH customer_orders AS (
  SELECT
    customer_id,
    COUNT(DISTINCT order_id) AS total_orders,
    SUM(total_amount) AS total_revenue,
    MAX(order_date) AS last_order_date,
    MIN(order_date) AS first_order_date
  FROM {{ ref('fact_orders') }}
  WHERE order_status != 'cancelled'
  GROUP BY customer_id
),

customer_metrics AS (
  SELECT
    c.customer_id,
    c.customer_name,
    c.region,
    c.tier,
    co.total_orders,
    co.total_revenue,
    co.last_order_date,
    co.first_order_date,
    ROUND(co.total_revenue / NULLIF(co.total_orders, 0), 2) AS avg_order_value,
    DATE_DIFF(CURRENT_DATE(), co.last_order_date, DAY) AS days_since_last_order
  FROM {{ ref('dim_customers') }} c
  LEFT JOIN customer_orders co ON c.customer_id = co.customer_id
)

SELECT * FROM customer_metrics
```

---

## Vector Database (for AI)

### Purpose
Store embeddings for semantic search and retrieval-augmented generation (RAG).

### Technology Options
1. **Pinecone**: Fully managed, fast, simple
2. **Weaviate**: Open-source, feature-rich
3. **pgvector**: PostgreSQL extension, cost-effective
4. **Qdrant**: Open-source, high performance

### Data Indexed

#### Product Information
- Product descriptions
- Usage guidelines
- Regulatory information
- FAQs about products

#### Business Policies
- Return/exchange policies
- Payment terms
- Shipping policies
- SLAs

#### Customer Communications
- Past support interactions
- Email templates
- Response patterns

#### Internal Documentation
- Process documentation
- Troubleshooting guides
- Best practices

### Embedding Pipeline

```
1. Document Collection
   ↓
2. Text Processing
   - Cleaning
   - Chunking (512-1024 tokens)
   - Metadata extraction
   ↓
3. Embedding Generation
   - Use OpenAI ada-002 or similar
   - Generate vector representations
   ↓
4. Index in Vector DB
   - Store vectors + metadata
   - Build search indices
   ↓
5. Keep Updated
   - Incremental updates
   - Re-indexing as needed
```

---

## Data Integration APIs

### API Layer for AI Agents

#### Customer Data API
```
GET /api/customers/:id
GET /api/customers/:id/orders
GET /api/customers/:id/interactions
GET /api/customers/:id/insights
```

#### Product Data API
```
GET /api/products/:id
GET /api/products/search?q=...
GET /api/products/:id/availability
GET /api/products/:id/pricing
```

#### Order Data API
```
GET /api/orders/:id
GET /api/orders/:id/status
POST /api/orders/:id/update
GET /api/orders?customer_id=...&status=...
```

#### Analytics API
```
POST /api/analytics/query
  - Natural language to SQL
  - Return structured data

GET /api/analytics/reports/:report_id
  - Pre-built reports
```

### API Design Principles
- **RESTful**: Standard HTTP methods
- **Versioning**: /api/v1/...
- **Authentication**: JWT tokens
- **Rate Limiting**: Protect against abuse
- **Caching**: Redis for frequently accessed data
- **Pagination**: For large result sets

---

## Data Security & Compliance

### Access Control

#### Role-Based Access Control (RBAC)
- **Admin**: Full access
- **Sales**: Customer and order data
- **Operations**: Inventory and supplier data
- **Support**: Customer interactions
- **AI Agent**: Limited read access with specific scopes

#### Row-Level Security
- Users only see data they're authorized for
- Implemented at database or API level

### Data Encryption

#### At Rest
- Database encryption (TDE)
- Backup encryption
- File encryption for data exports

#### In Transit
- TLS 1.3 for all connections
- API gateway SSL termination
- VPN for internal services

### LGPD Compliance

#### Data Minimization
- Only collect necessary data
- Retention policies (auto-delete old data)

#### User Rights
- Right to access their data
- Right to correction
- Right to deletion
- Data portability

#### Audit Logging
- Log all data access
- Track who accessed what and when
- Immutable audit logs

---

## Data Quality & Monitoring

### Data Quality Checks

#### Automated Tests
- Schema validation
- Null checks on critical fields
- Range checks (e.g., price > 0)
- Referential integrity
- Duplicate detection

#### Data Quality Dashboard
- Metrics on data freshness
- Completeness scores
- Accuracy metrics
- Anomaly detection

### Monitoring & Alerting

#### Pipeline Monitoring
- ETL job success/failure
- Data latency (freshness)
- Row counts and volumes
- Error rates

#### Query Performance
- Slow query detection
- Query volume trends
- Resource utilization

#### Alerts
- Failed ETL jobs
- Data quality issues
- Unusual patterns
- System downtime

---

## Cost Optimization

### BigQuery Cost Management
- **Partitioning**: Reduce scanned data
- **Clustering**: Improve query efficiency
- **Materialized Views**: Pre-aggregate common queries
- **Query Caching**: Reuse recent results
- **Scheduled Queries**: Batch processing during off-peak

### Database Optimization
- **Indexing**: Speed up common queries
- **Connection Pooling**: Reduce overhead
- **Read Replicas**: Distribute read load
- **Archiving**: Move old data to cheaper storage

---

## Disaster Recovery & Backup

### Backup Strategy
- **Operational DB**: Daily full backups, continuous transaction logs
- **BigQuery**: Automatic backups, point-in-time recovery
- **Vector DB**: Periodic snapshots

### Recovery Objectives
- **RTO** (Recovery Time Objective): < 4 hours
- **RPO** (Recovery Point Objective): < 1 hour
- Test recovery procedures quarterly

---

## Future Enhancements

### Real-time Streaming
- Kafka or Pub/Sub for event streaming
- Real-time analytics and dashboards
- Event-driven architecture

### Machine Learning Features
- Feature store for ML models
- Model training pipelines
- Prediction serving infrastructure

### Data Catalog
- Automated metadata management
- Data lineage tracking
- Self-service data discovery

### Advanced Analytics
- Predictive analytics (demand forecasting, churn prediction)
- Recommendation engines
- Anomaly detection

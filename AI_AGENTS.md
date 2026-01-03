# AI Agents Architecture

## Overview

This document details the architecture and capabilities of Cienty's AI agents, designed to support both customer-facing and internal operations.

---

## Architecture Principles

### Core Design Principles
1. **Modularity**: Reusable components across different agents
2. **Scalability**: Handle increasing conversation volume
3. **Context Awareness**: Maintain conversation state and business context
4. **Reliability**: Graceful degradation and error handling
5. **Observability**: Comprehensive logging and monitoring

### Technology Stack

#### LLM Providers
- **Primary**: Anthropic Claude (Sonnet/Opus)
- **Alternative**: OpenAI GPT-4
- **Local Option**: Llama 3 for cost-sensitive operations

#### Supporting Infrastructure
- **Vector Database**: Pinecone, Weaviate, or pgvector
- **Message Queue**: Redis or RabbitMQ
- **Cache**: Redis
- **Storage**: PostgreSQL for conversation history

---

## Agent Architecture

### Common Agent Framework

```
┌─────────────────────────────────────────────┐
│           User Interface Layer              │
│     (WhatsApp, Slack, Web, API)            │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│         Message Router & Queue              │
│    (Webhook handling, Rate limiting)        │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│        Conversation Manager                 │
│  - Session management                       │
│  - Context tracking                         │
│  - Multi-turn handling                      │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│         Intent Classification               │
│  - Query understanding                      │
│  - Route to appropriate handler             │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│          RAG System                         │
│  ┌─────────────────────────────────┐       │
│  │    Knowledge Base Retrieval     │       │
│  │  - Semantic search              │       │
│  │  - Context ranking              │       │
│  └─────────────────────────────────┘       │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│         Tool & Function Calling             │
│  - Database queries                         │
│  - API calls                                │
│  - Business logic execution                 │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│         LLM Processing                      │
│  - Prompt construction                      │
│  - Response generation                      │
│  - Safety filtering                         │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│         Response Formatter                  │
│  - Language adaptation                      │
│  - Media formatting                         │
│  - Platform-specific formatting             │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│         Monitoring & Analytics              │
│  - Performance metrics                      │
│  - Conversation analytics                   │
│  - Error tracking                           │
└─────────────────────────────────────────────┘
```

---

## Customer Service AI Agent (WhatsApp)

### Purpose
Provide 24/7 automated customer support for pharmacy partners via WhatsApp.

### Target Users
- Pharmacy owners
- Pharmacy purchasing managers
- Pharmacy staff

### Core Capabilities

#### 1. Order Management
- Check order status
- Track deliveries
- View order history
- Modify pending orders (with business rules)
- Reorder previous purchases

**Example Interactions:**
```
User: "Qual o status do meu pedido?"
Agent: "Deixa eu verificar para você. Qual o número do pedido ou você gostaria de ver os pedidos recentes?"

User: "Os pedidos de hoje"
Agent: "Você tem 2 pedidos hoje:
1. Pedido #12345 - R$ 1.250,00 - Em separação
2. Pedido #12346 - R$ 890,00 - Aguardando pagamento

Sobre qual pedido você gostaria de mais informações?"
```

#### 2. Product Information
- Product availability
- Pricing information
- Product specifications
- Similar product recommendations
- Stock alerts

**Example Interactions:**
```
User: "Tem dipirona 500mg disponível?"
Agent: "Sim! Temos dipirona 500mg em estoque:
- Genérico: R$ 3,50 (500 unid. disponíveis)
- Novalgina: R$ 8,90 (200 unid. disponíveis)

Gostaria de adicionar ao carrinho ou fazer um pedido?"
```

#### 3. Account & Invoicing
- Account balance inquiries
- Invoice requests
- Payment status
- Credit limit information

#### 4. Support & Troubleshooting
- Common issues resolution
- Return/exchange processes
- Complaint registration
- Documentation requests

#### 5. Escalation & Handoff
- Detect when human intervention is needed
- Collect relevant context
- Seamless handoff to support team
- Follow-up after resolution

### Technical Implementation

#### WhatsApp Integration
- **Platform**: WhatsApp Business API
- **Message Types**: Text, media, templates, interactive buttons
- **Webhooks**: Real-time message processing
- **Rate Limits**: Respect WhatsApp limits (1000 msg/sec per business)

#### Conversation Flow
1. Greeting and identification
2. Intent classification
3. Information gathering
4. Action execution or information retrieval
5. Response generation
6. Confirmation and follow-up

#### Safety & Compliance
- LGPD compliance for data handling
- Secure customer data access
- No storage of sensitive information in logs
- PII redaction in analytics

---

## Internal AI Agent

### Purpose
Empower internal teams with AI-powered assistance for daily operations, data insights, and decision support.

### Target Users
- Sales team
- Operations team
- Customer support team
- Management and executives

### Core Capabilities by Team

#### Sales Team Agent

**Capabilities:**
- Lead scoring and qualification
- Customer insights and history
- Revenue analytics and forecasting
- Proposal and quote generation
- Competitor intelligence
- Sales pipeline analysis

**Example Use Cases:**
```
Sales Rep: "Give me a summary of Farmácia São Paulo's purchasing behavior"
Agent: "Farmácia São Paulo - Purchase Analysis:
- Customer since: Jan 2023
- Total purchases: R$ 125K (last 12 months)
- Average order: R$ 10.4K
- Order frequency: 2.3x per month
- Top categories: Analgesics (35%), Antibiotics (28%)
- Payment: Always on time, 30-day terms
- Growth trend: +15% vs last year

Recommendation: They're growing steadily. Consider offering volume discounts on analgesics to increase basket size."
```

**Tools & Integrations:**
- CRM data access
- Sales analytics
- Email drafting
- Meeting summarization

#### Operations Team Agent

**Capabilities:**
- Inventory management insights
- Supplier performance analysis
- Order processing assistance
- Logistics coordination
- Demand forecasting
- Exception handling

**Example Use Cases:**
```
Ops Manager: "Which suppliers are causing delivery delays?"
Agent: "Supplier Performance - Last 30 Days:

Concerning Suppliers:
1. Distribuidor ABC - 45% late deliveries (avg 3 days late)
   - Affected orders: 23
   - Categories: Generic medications

2. Pharma XYZ - 30% late deliveries (avg 2 days late)
   - Affected orders: 12
   - Categories: Antibiotics

Recommendation: Schedule calls with both suppliers. Consider diversifying suppliers for high-demand categories."
```

**Tools & Integrations:**
- Inventory database
- Supplier systems
- Logistics tracking
- Order management system

#### Customer Support Team Agent

**Capabilities:**
- Customer history lookup
- Issue resolution suggestions
- Ticket analysis and categorization
- Knowledge base search
- Response template generation
- Escalation routing

**Example Use Cases:**
```
Support Agent: "Customer is complaining about wrong items in order #12345"
Agent: "Order #12345 Analysis:

Order Details:
- Customer: Farmácia Boa Saúde
- Date: Dec 28, 2025
- Items: 15
- Status: Delivered

Previous Issues: None in last 12 months (excellent track record)

Suggested Resolution:
1. Apologize for the error
2. Verify which items are incorrect
3. Offer immediate replacement (express shipping)
4. Apply 10% discount on next order

Would you like me to draft a response email?"
```

**Tools & Integrations:**
- Support ticket system
- Order management
- Customer database
- Knowledge base

#### Management & Analytics Agent

**Capabilities:**
- Business metrics on demand
- Custom report generation
- Trend analysis
- Predictive insights
- Natural language to SQL
- Data visualization

**Example Use Cases:**
```
Executive: "What were our top-selling products last quarter and how do they compare to Q3?"
Agent: "Q4 2025 vs Q3 2025 - Top Products:

Q4 Top 5:
1. Dipirona 500mg - R$ 450K (+12% vs Q3)
2. Paracetamol 750mg - R$ 380K (+5% vs Q3)
3. Amoxicilina 500mg - R$ 320K (-3% vs Q3)
4. Ibuprofeno 600mg - R$ 280K (+18% vs Q3)
5. Omeprazol 20mg - R$ 250K (+8% vs Q3)

Key Insights:
- Pain relievers growing strong (seasonal)
- Antibiotics slightly down (expected post-winter)
- Ibuprofen surge: investigate campaign effectiveness

Would you like a detailed breakdown by region or customer segment?"
```

**Tools & Integrations:**
- BigQuery analytics
- Business intelligence tools
- Data visualization
- Report generation

---

## RAG (Retrieval-Augmented Generation) System

### Knowledge Base Components

#### 1. Product Catalog
- Product descriptions and specifications
- Pricing information
- Stock levels
- Regulatory information
- Usage guidelines

#### 2. Business Policies
- Return and exchange policies
- Payment terms
- Shipping policies
- Service level agreements
- Compliance requirements

#### 3. Customer Data
- Purchase history
- Preferences
- Communication history
- Account status
- Special terms

#### 4. Internal Documentation
- Process documentation
- Best practices
- Training materials
- FAQs
- Troubleshooting guides

### RAG Pipeline

```
1. Document Ingestion
   ├─ Text extraction
   ├─ Chunking (512-1024 tokens)
   ├─ Metadata tagging
   └─ Quality validation

2. Embedding Generation
   ├─ Use embedding model (ada-002 or similar)
   ├─ Generate vector representations
   └─ Store in vector database

3. Query Processing
   ├─ Query understanding
   ├─ Query expansion
   └─ Embedding generation

4. Retrieval
   ├─ Semantic search
   ├─ Hybrid search (semantic + keyword)
   ├─ Ranking and filtering
   └─ Context selection (top-k results)

5. Response Generation
   ├─ Prompt construction with context
   ├─ LLM generation
   ├─ Citation and source linking
   └─ Quality filtering
```

### Retrieval Strategies

#### Semantic Search
- Vector similarity search
- Dense retrieval for conceptual matching
- Best for "meaning-based" queries

#### Hybrid Search
- Combine semantic + keyword search
- Better precision and recall
- BM25 + vector search

#### Metadata Filtering
- Pre-filter by category, date, source
- Reduce search space
- Improve relevance

---

## Monitoring & Analytics

### Key Metrics

#### Performance Metrics
- Response time (p50, p95, p99)
- Throughput (messages/second)
- Error rate
- Availability/uptime

#### Quality Metrics
- Resolution rate (% resolved without human)
- Customer satisfaction (CSAT)
- Accuracy (correct information provided)
- Handoff rate

#### Business Metrics
- Cost per conversation
- Conversation volume
- Peak usage times
- User engagement

### Observability Stack

#### Logging
- Structured logging (JSON)
- Log aggregation (ELK, Datadog, etc.)
- Conversation logs (with PII redaction)
- Error and exception tracking

#### Monitoring
- APM (Application Performance Monitoring)
- Uptime monitoring
- Alert and notification system
- Dashboard for real-time metrics

#### Analytics
- Conversation analytics
- Intent distribution
- User journey analysis
- A/B testing framework

---

## Continuous Improvement

### Feedback Loops
1. **Explicit Feedback**: User ratings and comments
2. **Implicit Feedback**: Conversation outcomes, handoff rates
3. **Manual Review**: Sample conversation review by team
4. **A/B Testing**: Test prompt variations, flows

### Model Fine-Tuning
- Collect high-quality conversation examples
- Fine-tune for domain-specific tasks
- Periodic retraining with new data
- Version control for models and prompts

### Knowledge Base Updates
- Regular content review and updates
- Automated freshness checks
- User-reported inaccuracies
- Business policy changes

---

## Security & Privacy

### Data Protection
- Encrypt data in transit (TLS)
- Encrypt data at rest
- Access control (RBAC)
- Audit logging

### LGPD Compliance
- Data minimization
- User consent management
- Right to deletion
- Data portability
- Privacy by design

### AI Safety
- Content filtering
- Harmful content detection
- Rate limiting
- Abuse prevention

---

## Cost Optimization

### LLM Cost Management
- Use smaller models for simple tasks
- Implement caching for common queries
- Batch processing when possible
- Monitor token usage

### Infrastructure Optimization
- Auto-scaling based on load
- Efficient vector search indexing
- Cache frequently accessed data
- Optimize database queries

---

## Future Enhancements

### Advanced Features (Future Roadmap)
- **Voice Support**: Voice messages on WhatsApp
- **Proactive Outreach**: Automated alerts and recommendations
- **Multi-language**: Support for Spanish, English
- **Sentiment Analysis**: Detect customer frustration early
- **Predictive Support**: Anticipate customer needs
- **Multi-agent Collaboration**: Agents working together on complex tasks

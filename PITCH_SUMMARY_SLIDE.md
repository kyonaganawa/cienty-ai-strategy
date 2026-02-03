# Series B Pitch Summary Slide

## The One-Pager

---

### **CIENTY: The AI Buying Agent for Pharmacies**

---

#### THE OPPORTUNITY

Brazil's 80,000+ pharmacies waste **15+ hours/week** on procurement:
- Fragmented supplier landscape (manufacturers, distributors, promotions)
- Manual price comparison across dozens of sources
- No unified view of inventory, demand, and best deals

---

#### WHAT WE'VE BUILT

**Deep Infrastructure Connecting Pharmacies ↔ Industry ↔ Distributors**

```
┌─────────────────────────────────────────────────────────────────┐
│                     CIENTY PLATFORM                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐     │
│   │  PHARMACIES  │◄──►│  AI BUYING   │◄──►│  SUPPLIERS   │     │
│   │   (Buyers)   │    │    AGENT     │    │ (Industry &  │     │
│   │              │    │              │    │ Distributors)│     │
│   └──────────────┘    └──────────────┘    └──────────────┘     │
│          │                   │                   │              │
│          ▼                   ▼                   ▼              │
│   ┌─────────────────────────────────────────────────────┐      │
│   │              UNIFIED DATA LAYER                      │      │
│   │  • Real-time pricing  • Inventory  • Order history  │      │
│   │  • Promotions         • Demand signals  • Credit    │      │
│   └─────────────────────────────────────────────────────┘      │
│                              │                                  │
│                              ▼                                  │
│   ┌─────────────────────────────────────────────────────┐      │
│   │              AGENTIC AI LAYER                        │      │
│   │  • Autonomous purchasing  • Price optimization      │      │
│   │  • Demand forecasting     • Supplier negotiation    │      │
│   └─────────────────────────────────────────────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

#### WHY WE WIN

| Moat | Description |
|------|-------------|
| **Data Network Effects** | Every transaction improves pricing intelligence for all pharmacies |
| **Deep Integrations** | Direct connections to manufacturers & distributors others can't replicate |
| **Agentic Infrastructure** | Built for autonomous decision-making, not retrofitted chatbots |
| **Vertical Expertise** | 100% focused on pharma supply chain (LGPD, ANVISA, Brazilian market) |

---

#### THE BUYING AGENT VISION

**From:** Pharmacy owner manually checking 10+ suppliers, comparing prices, placing orders

**To:** "Cienty, restock my store" → Agent handles everything

```
WHAT THE AGENT DOES:
├── Analyzes inventory & demand patterns
├── Scans all connected suppliers for best prices
├── Considers promotions, payment terms, delivery times
├── Optimizes order across multiple suppliers
├── Executes purchase (with approval workflows)
└── Learns and improves with every transaction
```

**Target: Save pharmacies 10+ hours/week while reducing procurement costs by 8-15%**

---

#### EXECUTION EXCELLENCE

We've adopted **best-in-class tooling** to accelerate development:

| Layer | Choice | Why |
|-------|--------|-----|
| **AI/LLM** | Claude 3.5 + LangChain | Best reasoning, Portuguese fluency, low hallucination |
| **Data** | PostgreSQL + BigQuery + pgvector | Operational + Analytics + AI-ready |
| **Infra** | AWS São Paulo + Terraform | Low latency, scalable, reproducible |
| **Dev** | TypeScript + CI/CD + Feature Flags | Fast iteration, safe deployments |

---

#### TRACTION & ROADMAP

| Phase | Timeline | Milestone |
|-------|----------|-----------|
| ✅ **Now** | Complete | Core marketplace + pharmacy/supplier network |
| 🔄 **Phase 1** | Q1-Q2 | Analytics dashboards + data infrastructure |
| 🎯 **Phase 2** | Q2-Q3 | Buying Agent MVP (pilot with 20 pharmacies) |
| 📈 **Phase 3** | Q3-Q4 | Full agent rollout + supplier automation |

---

#### THE ASK

**Series B to accelerate the Buying Agent and become the one-stop shop for pharmacies**

- Expand AI/ML team
- Scale supplier integrations
- Grow pharmacy network
- Build autonomous purchasing capabilities

---

## Supporting Notes (Appendix)

### Why "Buying Agent" is the Killer Feature

1. **Highest Pain Point**: Procurement is #1 time sink for pharmacy owners
2. **Clear ROI**: Measurable savings in time AND money
3. **Defensible**: Requires deep data + integrations (years to replicate)
4. **Expandable**: Once we own purchasing, we own the pharmacy relationship

### Competitive Landscape

| Player | Approach | Gap |
|--------|----------|-----|
| **Traditional Distributors** | Manual ordering, sales reps | No AI, no optimization |
| **Generic B2B Marketplaces** | Price comparison | No vertical expertise, no agent |
| **ERP/POS Systems** | Inventory management | No purchasing intelligence |
| **Cienty** | **Agentic buying + deep integrations** | **Full stack solution** |

### Unit Economics Potential

```
Average Pharmacy Monthly Procurement: R$ 150,000
Cienty Savings (10%):                 R$ 15,000/month
Time Saved:                           40+ hours/month
Cienty Take Rate (2-3%):              R$ 3,000-4,500/month potential revenue
```

### Technology Differentiation

**Why "Agentic" Matters:**

Traditional AI assistants: User asks → AI suggests → User acts

Agentic AI: User sets goals → AI plans → AI acts → AI learns

```
AGENTIC CAPABILITIES WE'RE BUILDING:
├── Multi-step reasoning (compare 50+ products across 10+ suppliers)
├── Autonomous execution (place orders within approval limits)
├── Learning loops (improve recommendations from outcomes)
├── Tool use (query databases, call APIs, generate reports)
└── Human-in-the-loop (escalate edge cases, respect approval workflows)
```

### Key Metrics We Track

| Metric | Current | Target (12mo) |
|--------|---------|---------------|
| Active Pharmacies | [X] | [3X] |
| Connected Suppliers | [Y] | [2Y] |
| Orders via Platform | [Z]/month | [5Z]/month |
| Agent-Assisted Orders | 0% | 40% |
| Avg. Savings per Pharmacy | - | 10%+ |

### Risk Mitigation

| Risk | Mitigation |
|------|------------|
| LLM costs at scale | Semantic caching, tiered models, cost caps |
| Agent errors | Human approval workflows, gradual autonomy increase |
| Supplier pushback | Value prop = more orders, better demand visibility |
| Regulatory (LGPD) | Compliance-first architecture, data residency in Brazil |

---

*"We're not building another marketplace. We're building the AI that runs pharmacy procurement."*

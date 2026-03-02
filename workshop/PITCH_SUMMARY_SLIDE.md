# AI Strategy: Building the Buying Agent

## Slide Summary

---

### **CIENTY: Agentic Infrastructure for Pharmacy Procurement**

---

#### WHY AGENTIC AI MATTERS

Traditional AI assistants require constant human input:
```
User asks → AI suggests → User evaluates → User acts → Repeat
```

**Agentic AI operates autonomously within defined boundaries:**
```
User sets goals → Agent plans → Agent acts → Agent learns → Agent improves
```

This is the difference between a **tool** and a **teammate**.

---

#### THE INFRASTRUCTURE WE'VE BUILT

**Deep connections enabling autonomous decision-making:**

```
┌─────────────────────────────────────────────────────────────────┐
│                    CIENTY AGENTIC PLATFORM                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐     │
│   │  PHARMACIES  │◄══►│  AI BUYING   │◄══►│  SUPPLIERS   │     │
│   │   (Buyers)   │    │    AGENT     │    │ (Industry &  │     │
│   │              │    │              │    │ Distributors)│     │
│   └──────────────┘    └──────────────┘    └──────────────┘     │
│          │                   │                   │              │
│          ▼                   ▼                   ▼              │
│   ┌─────────────────────────────────────────────────────┐      │
│   │              UNIFIED DATA LAYER                      │      │
│   │  • Real-time pricing    • Inventory levels          │      │
│   │  • Order history        • Demand signals            │      │
│   │  • Promotions           • Supplier reliability      │      │
│   └─────────────────────────────────────────────────────┘      │
│                              │                                  │
│                              ▼                                  │
│   ┌─────────────────────────────────────────────────────┐      │
│   │              AGENTIC AI LAYER                        │      │
│   │  • Multi-step reasoning   • Autonomous execution    │      │
│   │  • Learning from outcomes • Tool use (APIs, DBs)    │      │
│   │  • Human-in-the-loop      • Approval workflows      │      │
│   └─────────────────────────────────────────────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Key insight:** The infrastructure existed before the AI. We built deep supplier integrations, unified data pipelines, and pharmacy relationships over years. Now we add intelligence on top.

---

#### AGENTIC CAPABILITIES

What the buying agent can do:

```
AUTONOMOUS PURCHASING WORKFLOW:
├── Analyzes inventory + demand patterns
├── Scans all connected suppliers
├── Evaluates: price, promotions, payment terms, delivery time
├── Optimizes order across multiple suppliers
├── Executes within approval limits
└── Learns from every transaction outcome
```

**Graduated autonomy model:**
1. **Observe** — Agent monitors, human decides
2. **Suggest** — Agent recommends, human approves
3. **Act** — Agent executes within limits, human reviews
4. **Automate** — Agent handles routine, escalates exceptions

---

#### WHY WE'RE POSITIONED TO WIN

| Advantage | What It Means |
|-----------|---------------|
| **Data network effects** | Every transaction improves predictions for all pharmacies |
| **Deep integrations** | Direct supplier connections = real-time data, not scraped |
| **Vertical-native AI** | Built for pharma from day one, not a generic LLM wrapper |
| **Trust infrastructure** | Years of pharmacy relationships enable AI adoption |

---

#### TECHNOLOGY CHOICES

| Layer | Choice | Why |
|-------|--------|-----|
| **LLM** | Claude Opus 4.5 + GPT 5.2 | Opus leads coding/agents (80.9% SWE-bench), GPT 5.2 for math reasoning |
| **Orchestration** | LangGraph | Stateful multi-agent workflows, cyclic graphs, enterprise-grade |
| **Vector DB** | Redis + pgvector | Redis for fast in-memory retrieval, pgvector for semantic search |
| **Analytics** | BigQuery | Scale for aggregate insights across network |
| **Operational** | PostgreSQL | ACID compliance for transactions |
| **Infra** | AWS São Paulo | Data residency, low latency |
| **Deployment** | Feature flags + CI/CD | Gradual rollout, safe iteration |

**Multi-model strategy:** Claude Opus 4.5 for complex agentic workflows (best-in-class for agents and computer use), GPT 5.2 Instant for speed-critical tasks, Haiku/Sonnet for routing and classification. Semantic caching reduces costs by up to 90%.

---

#### THE BUYING AGENT VISION

**From:** Pharmacy owner manually checking 10+ suppliers, comparing prices, placing orders

**To:** *"Cienty, restock my store"* → Agent handles everything

**Target outcomes:**
- 10+ hours/week saved per pharmacy
- 8-15% reduction in procurement costs
- 40% of orders agent-assisted within 12 months

---

*"We're not building another marketplace. We're building the AI that runs pharmacy procurement."*

---

## Supporting: Agentic AI Deep Dive

### Traditional AI vs Agentic AI

| Aspect | Traditional AI | Agentic AI |
|--------|----------------|------------|
| **Interaction** | Query-response | Goal-oriented |
| **Scope** | Single task | Multi-step workflows |
| **Memory** | Session-based | Persistent learning |
| **Action** | Suggests | Executes (with guardrails) |
| **Improvement** | Manual retraining | Continuous from outcomes |

### Agentic Capabilities We're Building

```
MULTI-STEP REASONING
├── Compare 50+ products across 10+ suppliers
├── Weigh trade-offs: price vs. delivery time vs. payment terms
├── Consider pharmacy-specific constraints (budget, storage, demand)
└── Synthesize into optimal order recommendation

AUTONOMOUS EXECUTION
├── Place orders within pre-approved limits
├── Split orders across suppliers for optimization
├── Schedule deliveries around pharmacy operations
└── Handle payment terms negotiation

LEARNING LOOPS
├── Track: Did the prediction match reality?
├── Adjust: Supplier reliability scores
├── Improve: Demand forecasting models
└── Personalize: Per-pharmacy preferences

TOOL USE
├── Query inventory databases
├── Call supplier APIs for real-time pricing
├── Generate purchase orders
├── Update pharmacy dashboards

HUMAN-IN-THE-LOOP
├── Escalate edge cases (new products, unusual quantities)
├── Respect approval workflows (manager sign-off thresholds)
├── Provide explanations for all decisions
└── Allow human override at any point
```

### Why This Requires Deep Infrastructure

An agentic buying agent can't work with surface-level integrations:

| Requirement | Why Surface Integration Fails |
|-------------|-------------------------------|
| **Real-time pricing** | Screen scraping breaks, APIs need partnerships |
| **Inventory visibility** | Suppliers don't expose this to unknown parties |
| **Order execution** | Requires authenticated, transactional connections |
| **Historical data** | Need years of transaction history for learning |
| **Trust** | Pharmacies won't let unknown AI buy for them |

**Cienty has built this over years.** The AI layer is the capstone, not the foundation.

---

## Supporting: Technical Architecture

### Data Flow

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Pharmacy   │     │   Cienty    │     │  Supplier   │
│   System    │     │  Platform   │     │   Systems   │
└──────┬──────┘     └──────┬──────┘     └──────┬──────┘
       │                   │                   │
       │   Inventory       │   Real-time       │
       │   updates    ───► │   pricing    ◄─── │
       │                   │                   │
       │   Order           │   Availability    │
       │   history    ───► │   data       ◄─── │
       │                   │                   │
       │                   ▼                   │
       │           ┌───────────────┐           │
       │           │  Unified Data │           │
       │           │     Layer     │           │
       │           └───────┬───────┘           │
       │                   │                   │
       │                   ▼                   │
       │           ┌───────────────┐           │
       │           │  AI Buying    │           │
       │           │    Agent      │           │
       │           └───────┬───────┘           │
       │                   │                   │
       │   Recommendations │   Purchase        │
       │   & actions  ◄─── │   orders     ───► │
       │                   │                   │
       ▼                   ▼                   ▼
```

### Cost Management Strategy

| Strategy | Implementation |
|----------|----------------|
| **Semantic caching** | Redis vector cache for similar queries — up to 90% cost reduction, 15x faster responses |
| **Tiered models** | GPT 5.2 Instant for speed, Opus 4.5 for complex reasoning, Haiku for routing |
| **Query estimation** | Estimate token cost before execution, respect budgets |
| **Batching** | Aggregate similar operations to reduce API calls |
| **Memory tiers** | Short-term (JSON), long-term (vector DB), episodic (semantic search) |

### Safety & Compliance

| Concern | Mitigation |
|---------|------------|
| **LGPD compliance** | Data residency in Brazil, consent management, audit trails |
| **ANVISA regulations** | Product validation, controlled substance handling |
| **Agent errors** | Approval limits, human review, reversible actions |
| **Audit requirements** | Full decision logging, explainability for every action |

---

## Q&A: AI-Focused Questions

### Why build an agentic AI instead of a recommendation engine?

Recommendations require human action for every decision. At scale, this creates fatigue — pharmacy owners ignore suggestions, revert to habits. Agentic AI crosses the threshold from "tool I check" to "system that handles it." The ROI difference is 10x: saved time from not reviewing vs. slightly better decisions from reviewing.

### How do you prevent the agent from making costly mistakes?

Three layers of protection:
1. **Guardrails** — Hard limits on order sizes, spend, and product types
2. **Graduated autonomy** — Agent earns trust through successful actions
3. **Reversibility** — All actions can be cancelled within a window

We start with low-risk, high-frequency decisions (reordering established products) before tackling edge cases.

### What's your moat against generic AI solutions?

Generic LLMs can't:
- Access our supplier pricing APIs (no integration)
- Know pharmacy-specific demand patterns (no data)
- Execute purchases (no transaction rails)
- Understand ANVISA/LGPD requirements (no vertical expertise)

Our moat is the infrastructure beneath the AI, not the AI itself.

### How do you handle LLM costs at scale?

Current LLM economics work for high-value decisions (procurement is high-value). Our strategy:
- **Semantic caching via Redis**: Up to 90% cost reduction for repeated patterns
- **Tiered models**: GPT 5.2 Instant for speed, Opus 4.5 for complex reasoning, Haiku for routing
- **Per-pharmacy cost caps**: Budget controls with graceful degradation
- **LangGraph abstraction**: Model-agnostic orchestration enables seamless switching

Opus 4.5 pricing ($5/$25 per million tokens) is viable for high-value procurement decisions. As costs continue dropping, unit economics improve automatically.

### What happens when the LLM hallucinates?

Hallucination risk is bounded by design:
- Agent can only act on real products in our database
- Prices come from supplier APIs, not LLM generation
- Order execution is deterministic code, not LLM output
- LLM handles reasoning/planning, not data retrieval

The LLM decides *what* to buy and *why*. Databases provide *what's available* and *at what price*.

### Why Claude Opus 4.5 as the primary model?

Claude Opus 4.5 leads for agentic workflows:
- **SWE-bench Verified**: 80.9% (first model to exceed 80%, vs GPT 5.2's 80.0%)
- **Terminal-Bench**: 59.3% vs GPT 5.2's 47.6% — critical for tool use
- **Hybrid reasoning**: Effort parameter lets us control compute per query
- **Context continuity**: Preserves thinking across multi-turn conversations
- **Portuguese fluency**: Native speaker quality, critical for Brazil

We use **GPT 5.2** for tasks requiring superior math reasoning (100% on AIME 2025) and abstract reasoning. Our LangGraph orchestration layer makes model switching seamless.

### How do pharmacies trust AI to buy for them?

Trust is built progressively:
1. Start with dashboards (visibility)
2. Graduate to suggestions (prove value)
3. Enable auto-order for staples (low risk)
4. Expand autonomy as trust grows

We never force automation. Pharmacies opt in at their comfort level.

---

## Narrative: The AI Strategy

### The Agentic Opportunity

The difference between AI that assists and AI that acts is the difference between incremental improvement and transformational change.

Traditional AI in procurement looks like this: show the pharmacy owner a dashboard of recommended purchases, let them review each one, require them to click approve. Better than nothing, but still requires their time and attention.

Agentic AI looks like this: the pharmacy owner sets their goals ("keep stock levels healthy, minimize costs, prioritize fast delivery"). The agent handles the rest. The owner reviews a summary, sees what was ordered, and gets on with their day.

This isn't a chatbot. It's a buyer that works 24/7, never forgets to check a promotion, and gets better with every transaction.

### Why Infrastructure Comes First

You can't bolt agentic capabilities onto a shallow platform. The agent needs:

- **Real data** — Live pricing, actual inventory, genuine transaction history
- **Execution ability** — APIs to place orders, not just display information
- **Trust relationships** — Suppliers who accept automated orders, pharmacies who grant permission

Cienty has spent years building this infrastructure. The marketplace was never the endgame — it was the foundation for intelligence.

Now we add the AI layer. Not as an experiment, but as the natural evolution of a platform designed for autonomous operation.

### The Technical Bet

We're betting that:

1. **LLMs are production-ready** — Opus 4.5 achieves 80.9% on real-world coding benchmarks; GPT 5.2 shows 65% fewer hallucinations than previous generations
2. **Multi-model is the future** — Different models excel at different tasks; LangGraph orchestration makes this seamless
3. **Costs will continue dropping** — Opus 4.5 at $5/$25 per million tokens is already viable for high-value decisions
4. **Trust can be built** — Through graduated autonomy and transparency
5. **Vertical expertise matters** — Generic solutions won't capture pharma nuances

These bets inform every technical decision: model selection, LangGraph orchestration, safety mechanisms, and rollout strategy.

### What We're Building

An AI buying agent that:

- **Understands** inventory levels, demand patterns, and pharmacy preferences
- **Evaluates** all available suppliers, prices, promotions, and terms
- **Decides** the optimal purchasing strategy across multiple dimensions
- **Executes** within defined limits, with full auditability
- **Learns** from every outcome to improve future decisions

This is the one-stop shop vision: a single AI that handles procurement end-to-end, turning hours of manual work into seconds of review.

---

*"We're not building another marketplace. We're building the AI that runs pharmacy procurement."*

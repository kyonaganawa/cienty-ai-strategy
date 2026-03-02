# Claude Code Quick Reference Card
**Print Format:** 1-page, double-sided, A4 or Letter size

---

## FRONT SIDE

### CLAUDE CODE ESSENTIALS

#### Essential Commands
```
/init       Initialize project documentation
/review     Code review with severity ratings
/coach      Adversarial review (fresh context)
/agents     Create specialized sub-agents
/clear      Clear context window
/resume     Resume previous conversation
```

#### 5-Phase Workflow: Your Path to 5-10x Productivity

```
1. PLANNING (You, 2 min)
   Define requirements, context, constraints

2. AUTONOMOUS IMPLEMENTATION (Claude, 15 min)
   Fully autonomous code generation

3. ADVERSARIAL REVIEW (Fresh Claude, 5 min)
   Critical analysis, find security/performance issues

4. REFINEMENT (Claude, 10 min)
   Fix issues identified in review

5. HUMAN VALIDATION (You, 3 min)
   Spot-check business logic, approve merge
```

**Total:** ~35 min vs 3-4 hours traditional = **5-7x faster**

---

#### The Good Prompt Formula

```
[GOAL] + [REQUIREMENTS] + [CONTEXT] + [CONSTRAINTS] + [SUCCESS CRITERIA]
```

**Example:**
```
Implement JWT authentication.

Requirements:
- POST /auth/login (email, password)
- bcrypt hashing (cost 12)
- Access token: 15 min, Refresh: 7 days
- Rate limit: 5 attempts/15 min
- Include tests

Context:
- Express + TypeScript
- PostgreSQL with Prisma

Constraints:
- Backward compatible
- Zero downtime deploy

Success Criteria:
- Tests pass
- Follows our patterns
```

---

#### 5 Key Prompt Principles

**1. Be Specific**
❌ "Handle errors"
✓ "Return 400 for invalid email, 429 for rate limit"

**2. Reference Patterns**
❌ "Create endpoint"
✓ "Follow service layer pattern like user-service.ts"

**3. Non-Functional Requirements**
❌ "Make it fast"
✓ "Query <100ms, cache with 5-min TTL"

**4. Specify Test Coverage**
❌ "Write tests"
✓ "Tests for success, invalid input, rate limiting, edge cases"

**5. Define "Done"**
❌ Implied
✓ "Tests pass, docs updated, follows style guide"

---

#### Context Management (60% Rule)

**Never exceed 60% of context window**

**Why:**
- Agent needs room to respond
- Prevents quality degradation

**How:**
- Use `/clear` between major phases
- Split large tasks into subtasks
- Track progress in `claude-progress.txt`

**Example claude-progress.txt:**
```
## Last Session
- Implemented order history endpoint
- Tests passing

## Next
- Adversarial review
- Then add caching

## Context
- Working on Phase 4.3 BigQuery agent
```

---

#### Thinking Depth Control

```
think               Basic reasoning (fast)
think hard          Deeper analysis
think harder        Complex problems
ultra think         Maximum reasoning (slower, $$)
```

**Use strategically:** Architecture decisions = "think harder", simple bugs = normal

---

## BACK SIDE

### COMMON PITFALLS & SOLUTIONS

#### ❌ Pitfall → ✓ Solution

**1. Vague Prompts**
❌ "Add login"
✓ "Implement JWT auth with bcrypt (cost 12), 15-min access tokens, rate limiting 5/15min"

**2. Over-Specifying**
❌ "Create file orders.ts, add function getOrders..."
✓ "Implement order retrieval, follow our service layer pattern"

**3. Skipping Adversarial Review**
❌ Trust implementation blindly
✓ ALWAYS adversarial review for production (catches SQL injection, N+1, etc.)

**4. Reviewing Every Line**
❌ Read 500 lines of generated code
✓ Spot-check critical paths (auth, payments), trust agent for boilerplate

**5. Not Iterating**
❌ "Not perfect, I'll rewrite manually"
✓ "Fix these adversarial findings" and iterate

**6. Ignoring Suggestions**
❌ "Just do what I said"
✓ "Why did you suggest this?" - agent sees patterns you might miss

**7. Poor Task Boundaries**
❌ "Build entire e-commerce platform"
✓ "Build product catalog module: CRUD, search, images, tests"

**8. Exceeding 60% Context**
❌ Keep adding files to context
✓ `/clear` between phases, use claude-progress.txt

**9. Not Learning from Agent**
❌ Never read generated code
✓ Occasionally review to learn new patterns

---

### When to Use: AUTONOMOUS vs MANUAL

#### ✓ Use Autonomous Agent:
- CRUD operations
- API endpoints
- Tests (unit, integration)
- Database migrations
- Refactoring across multiple files
- Type definitions
- Documentation
- Bug fixes with clear reproduction
- Configuration files

#### ✓ Use Manual Development:
- Quick console debugging (<5 min)
- Experimental prototypes
- Learning new tech (hands-on)
- Tasks faster to write yourself

---

### Adversarial Review Checklist

**Extract for Review:**
✓ Changed/new files
✓ Related tests
✗ Original task (avoid bias)
✗ Implementation reasoning

**Adversarial Prompt Template:**
```
"You are a senior security reviewer with adversarial mindset.
Your job is to FIND PROBLEMS, not validate.

Analyze this code critically:
[PASTE CODE]

Review for:
1. SECURITY (SQL injection, XSS, auth bypass)
2. PERFORMANCE (N+1, missing indexes, memory leaks)
3. EDGE CASES (null, boundaries, race conditions)
4. CODE QUALITY (complexity, coupling, tests)
5. SCALABILITY (resource exhaustion, bottlenecks)

Prioritize: CRITICAL > HIGH > MEDIUM > LOW
DO NOT just say 'looks good' - find real issues."
```

**Triage:**
- **CRITICAL** → Fix immediately, block deploy
- **HIGH** → Fix before merge
- **MEDIUM** → Fix in PR or next sprint
- **LOW** → Backlog

---

### Advanced Features

#### CLAUDE.md - Project Context File
**Location:** Project root
**Auto-read:** Every conversation

**Include:**
```markdown
## Tech Stack
- Backend: FastAPI (Python 3.11+)
- Database: PostgreSQL + pgvector

## Patterns
- Service + Repository layers
- Zod validation, JWT auth

## Branch Strategy
- Feature branches: feature/description
- Rebase, don't merge

## Known Issues
- DB pool: max 20 connections
- Redis TTL: 5 min default
```

---

#### Research → Plan → Execute Pattern
```
1. RESEARCH
   "Analyze notification system, research approaches"
   → Claude reads code, researches options

2. PLAN
   "Create implementation plan"
   → Claude proposes architecture, you approve

3. EXECUTE
   "Approved - implement the plan"
   → Claude builds it
```

**Why:** Better upfront thinking = better implementation

---

#### Sub-Agents for Parallel Work
```
/agents

Main Agent: Implements feature
Security Sub-Agent: Reviews vulnerabilities (parallel)
Performance Sub-Agent: Analyzes scalability (parallel)
Main: Addresses findings
```

**Benefit:** Specialized expertise, parallel execution

---

#### Custom Commands
**Location:** `.claude/commands/api-endpoint.md`

```markdown
Build REST API endpoint:
- CRUD operations
- Zod validation
- Tests
- Follow service layer pattern
```

**Usage:** `/api-endpoint`

**Benefit:** Team-wide consistency, capture best practices

---

### Quick Wins

**First Week:**
- Install Claude Code
- Create CLAUDE.md
- Complete 3-5 simple tasks
- First adversarial review

**Success Metrics:**
- Week 1: Comfortable with basics
- Week 2: Multi-file tasks
- Week 3: Ship production feature
- Week 4: 5-10x productivity

---

### Support Resources

**Slack:**
- #claude-code-help (questions)
- #claude-code-wins (share successes)
- #claude-code-tips (tips & tricks)

**Office Hours:**
- Daily (Week 1): 4-4:30pm
- Weekly (ongoing): Wednesdays 4pm

**Materials:**
- AI Development Best Practices (complete guide)
- Prompt Template Library
- 30-Day Adoption Plan
- Resources & Links

**Official:**
- Anthropic Best Practices: anthropic.com/engineering/claude-code-best-practices
- DeepLearning.AI Course (free): deeplearning.ai/short-courses/claude-code

---

### ROI at a Glance

**Traditional:** 3-4 hours for feature
**AI-Assisted:** 35 minutes
**Time Saved:** ~3 hours per feature

**For 5 developers, 20 features/year:**
- Hours saved: 5 × 20 × 3 = 300 hours/year
- At R$ 150/hour = R$ 45,000/year
- AI cost: ~R$ 12,000/year
- **Net savings: R$ 33,000/year**
- **ROI: 275%**

*(Conservative estimate - actual gains typically 5-10x)*

---

### Remember

**The Goal:** Move fast, build great software

**AI Agents:** Tools to amplify abilities, not replace judgment

**Workflow:**
1. You define WHAT and WHY
2. Claude handles HOW
3. Adversarial review catches issues
4. You validate business logic

**Quality:** Higher (adversarial review) + Faster = Competitive advantage

---

**Questions?** #claude-code-help | [facilitator]@cienty.com

**Last Updated:** 2026-01-05 | **Version:** 1.0 | **Cienty Engineering**

---

## PRINTING INSTRUCTIONS

**Format:** A4 or Letter (8.5" × 11")
**Orientation:** Portrait
**Print:** Double-sided (flip on long edge)
**Paper:** Heavy stock (100-110 lb) for durability
**Color:** Full color recommended
**Finish:** Optional lamination for frequent reference

**Distribution:** 1 per workshop attendee

**Digital Format:** Also provide PDF for easy access on devices

---

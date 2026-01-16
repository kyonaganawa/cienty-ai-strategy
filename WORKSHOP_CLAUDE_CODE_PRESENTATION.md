# Claude Code Workshop - Presentation Outline with Speaker Notes

**Duration:** 60 minutes
**Format:** Two parts (30 min general + 30 min developers)
**Audience:** Mixed technical/non-technical Cienty team

---

## PART 1: AI Fundamentals & Claude Code Basics (30 minutes)

---

### SLIDE 1: Title Slide (30 seconds)

**Title:** Claude Code: 10x Your Productivity
**Subtitle:** From AI Basics to Production Workflows
**Presenter:** Luciano Naganawa from Cienty
**Date:** Jan/2026

**Speaker Notes:**
- Welcome everyone
- Brief intro of yourself
- Set tone: practical, hands-on, actionable

---

### SLIDE 1.1: Presenter

**Title:** Who am I
**Content:** 
Developer for 10 years
Working with Claude Code for 3 months, other AI Agents for 1 year
Headlining AI Initiatives in Cienty

---

### SLIDE 1.2: Setting Expectations

**Title:** Alining Expectations
**Content**

https://x.com/karpathy/status/2004607146781278521?s=46&t=DKOU6mgXWcif3E1YG83yuw

I'm not an expert, just that found out what the best are doing and trying myself
Things are changing, and it has never been so fast
Everything is just suggestions, find your own path

---

### SLIDE 2: Opening Poll (1 minute)

**Title:** Quick Poll

**Content:**
"Who has used AI tools for work?"
- Raise your hand / Type in chat

**Speaker Notes:**
- Get audience participation immediately
- Gauge current AI familiarity
- Set stage for "you're not alone" or "you're ahead of curve"
- Transition: "Today we'll show you how to go from casual use to 10x productivity"

---

### SLIDE 3: The Productivity Promise (2 minutes)

**Title:** Why are we talking about Claude Code?

**Content:**
**2-3x Productivity Increase**

Real Example:
- Traditional Development: **3-4 hours**
- AI-Assisted with Claude Code: **35 minutes**

Feature: Customer Order History API
- Pagination, filtering, tests, documentation
- Full production-ready code
- Higher quality (adversarial review caught issues)

**Visual:** Before/After timeline comparison

**Speaker Notes:**
- This isn't hype - it's measurable
- We'll show you exactly how
- Quality actually improves (counterintuitive)
- By end of today, you'll know how to achieve this

---

### SLIDE 4: Today's Agenda (1 minute)

**Title:** What We'll Cover

**Part 1 (Next 40 min) - Everyone:**
- ✓ AI Fundamentals Demystified
- ✓ Claude Code Capabilities (Live Demos!)
- ✓ Use Cases Beyond Coding

**Part 2 (Last 20 min) - Developers:**
- ✓ Complete Development Workflow
- ✓ Prompt Engineering Mastery
- ✓ Adversarial Code Review
- ✓ Advanced Techniques

**Takeaways:**
- Quick Reference Card
- Prompt Templates
- 30-Day Adoption Plan

**Speaker Notes:**
- Part 1 for everyone - no coding required
- Part 2 gets technical
- Everyone leaves with actionable materials

---

### SLIDE 5: Section Break (5 seconds)

**Title:** AI Fundamentals
**Subtitle:** Demystifying the Technology

**Visual:** Simple, modern background

---

### SLIDE 6: Concept 1 - LLMs (1.5 minutes)

**Title:** Large Language Models (LLMs)

**How it works:**
- Trained on massive amounts of code and text
- Predicts what comes next, intelligently
- Different models = different capabilities (but similar)
- 

**Examples:**
- **Claude Opus 4.5**: Superior reasoning, complex tasks ($$$)
- **Claude Sonnet**: Faster, good for simpler tasks ($$)
##TODO add other models, gpt, gemini... 

##TODO add link to expanded LLM explanation

**Visual:** Simple diagram showing text prediction

**Speaker Notes:**
- Don't need to understand the math
- Think of it like really smart autocomplete
- Opus 4.5 is what we use for development (worth the cost)
- Demo: Show Claude completing a function

---

### SLIDE 7: Concept 3 - Prompts (1.5 minutes)

**Title:** Prompts: Instructions to a Literal Assistant

**Quality of Input = Quality of Output**

**Side-by-side Comparison:**

**❌ Bad Prompt:**
```
"Add login functionality"
```

**✅ Good Prompt:**
```
"Implement user authentication with JWT tokens.

Requirements:
- POST /auth/login (email, password)
- Password hashing with bcrypt (cost 12)
- Access token: 15 min expiry
- Refresh token: 7 days
- Rate limiting: 5 attempts/15 min
- Include tests for success/failure
- Follow our error handling patterns"
```

**Speaker Notes:**
- Specific = better results
- We'll deep dive on prompts in Part 2
- For now: be detailed, be specific
- Think "requirements doc" not "vague request"

---

### SLIDE 8: Concept 2 - Context (1.5 minutes)

**Title:** Context: The AI's Working Memory

**Analogy:** "Giving a colleague all relevant files before asking for help"

**Visual:** Filing cabinet → AI brain diagram

**Key Concepts:**
- Context = everything the AI knows about your task
- More relevant context = better results
- **Critical Rule: Never exceed 60% context**

**Why it matters:**
- Better context → better code
- Too much → AI gets confused
- Like trying to remember 100 things at once

**Speaker Notes:**
- Context is like short-term memory
- Show visual of context window filling
- 60% rule from production experience
- We'll show how to manage this later

---

### SLIDE 9: Concept 4 - Agents (1.5 minutes)

**Title:** Agents: AI That Acts, Not Just Answers

**Analogy:** "Chatbot vs Co-worker"

**Chatbot (Passive):**
- You: "How do I create a file?"
- Bot: "Here's the code you can use..."
- You: *copies, pastes, runs manually*

**Agent (Active):**
##TODO change to a more general example
- You: "Create a health check endpoint"
- Agent: *reads project structure*
- Agent: *creates file, writes code, writes test*
- Agent: *runs test, fixes issues*
- Agent: *commits to git*
- Done!

**Visual:** Chatbot icon vs Robot with tools icon

**Autonomous Mode:**
- Give high-level task
- Agent figures out how
- You review the result

**Speaker Notes:**
- This is the key difference
- Agent can read files, write code, run commands
- Autonomous = set it and forget it (mostly)
- Sounds scary, but we have safety nets

---

### SLIDE 9.1 - Tools

**Title:** Agents make stuff using tools

##TODO explain what tools are and give examples, read files, write files, search web, 

---

### SLIDE 10: Concept 5 - Skills (1 minute)

##TODO change slide to explain that skills are context specific prompts, diferent from slash commands. Skills save context by being loaded only when needed. Example: frontend development, backend development

**Title:** Skills: Shortcuts for Common Tasks

**What are Skills:**
- Pre-programmed capabilities
- Reusable workflows
- Team can create custom skills

**Examples:**
- `/review` - Analyze code for issues
- `/init` - Set up project documentation
- `/agents` - Create specialized sub-agents

**Custom Skills:**
- `/api-endpoint` - Generate REST API boilerplate
- `/database-migration` - Create migration with best practices
- Team-specific patterns

**Speaker Notes:**
- Think keyboard shortcuts for AI
- Pre-packaged best practices
- We'll create custom ones for Cienty

---

### SLIDE 11: Concept 6 - IDE vs CLI (1 minute)

**Title:** IDE vs CLI: Why Claude Code Uses Terminal

**IDE (Integrated Development Environment):**
- VSCode, IntelliJ, etc.
- Where most coding happens
- Visual interface

**CLI (Command Line Interface):**
- Terminal
- Text-based commands
- Full system access

**Why Claude Code = CLI:**
- ✓ Full system access (read/write files anywhere)
- ✓ Run commands, scripts, tests
- ✓ Git integration (commits, PRs)
- ✓ Automation and integration
- ✓ No UI limitations

**Visual:** Side-by-side IDE vs Terminal screenshot

**Speaker Notes:**
- CLI might seem old-school
- Actually more powerful for automation
- Agent can do everything you can in terminal
- Don't need to be CLI expert - Claude handles it

---

### SLIDE 13: Section Break (5 seconds)

**Title:** Claude Code in Action
**Subtitle:** Live Demonstrations

**Visual:** Demo/Video icon

---

### SLIDE 13.1: List of uses of Claude Code

##TODO List some examples. Include:
Code
Create an presentation (this)
Explain the code
Data analysis (ex: All my genetic data )

---

### SLIDE 14: Demo 1 - Read & Understand (2 minutes + demo)

**Title:** Demo 1: Read & Understand Code

**Prompt:**
```
"Analyze this project structure and tell me
what patterns you see"
```

**What Claude Does:**
- Reads multiple files
- Identifies service + repository pattern
- Suggests where new feature should go
- Shows context awareness

**Key Takeaway:** Claude understands your codebase

**Speaker Notes:**
- Open terminal, show live
- Claude reads 5-10 files instantly
- Identifies patterns humans would take hours to document
- This is foundation for good code generation

---

### SLIDE 15: Demo 2 - Write & Create (3 minutes + demo)

**Title:** Demo 2: Write Production-Ready Code

**Prompt:**
```
"Create a health check endpoint at GET /health
that returns status and timestamp. Include a test."
```

**What Claude Does:**
1. Creates route handler
2. Writes proper TypeScript types
3. Generates test automatically
4. Runs test
5. Verifies it passes

**Time:** ~90 seconds total

**Key Takeaway:** From idea to tested code in under 2 minutes

**Speaker Notes:**
- Show timer
- No hand-holding - fully autonomous
- Code is clean, follows patterns
- Test actually runs and passes
- This is real production code

---

### SLIDE 16: Demo 3 - Web Search & Research (2 minutes + demo)

**Title:** Demo 3: Current Best Practices Research

**Prompt:**
```
"What are the current best practices for
rate limiting APIs in 2026?"
```

**What Claude Does:**
- Real-time web search
- Synthesizes multiple sources
- Provides code examples
- Stays current with latest practices

**Key Takeaway:** Always up-to-date, never outdated

**Speaker Notes:**
- Traditional: search, read 5 articles, synthesize
- Claude: instant, comprehensive answer
- Includes code examples
- This is beyond training data

---

### SLIDE 17: Demo 4 - Multi-File Refactoring (3 minutes + demo)

**Title:** Demo 4: Refactor Across Entire Codebase

**Prompt:**
```
"Refactor authentication to use refresh tokens
across all endpoints. Maintain backward compatibility."
```

**What Claude Does:**
- Analyzes 10+ files
- Updates route handlers
- Modifies auth middleware
- Updates tests across files
- Maintains consistency
- Generates commit message

**Time:** 3-4 minutes (vs 2-3 hours manually)

**Key Takeaway:** Consistency across entire codebase

**Speaker Notes:**
- This is where agents shine
- Human would need checklist, might miss files
- Claude ensures consistency
- Backward compatible (as specified)
- What would take hours

---

### SLIDE 18: Demo 5 - Debug & Fix (2 minutes + demo)

**Title:** Demo 5: Find and Fix Security Vulnerabilities

**Scenario:** "There's a SQL injection vulnerability in this query"

**Code:**
```typescript
const query = `SELECT * FROM users WHERE id = '${userId}'`;
```

**What Claude Does:**
- Identifies SQL injection risk
- Explains the security implication
- Fixes with parameterized queries
- Adds input validation
- Updates tests to prevent regression

**Key Takeaway:** Security built-in, not bolted-on

**Speaker Notes:**
- Show vulnerable code
- Claude explains WHY it's dangerous
- Provides secure alternative
- This catches issues before code review
- Security without being security expert

---

### SLIDE 19: Bonus Demo - Audience Choice (Interactive)

**Title:** You Choose the Next Demo!

**Suggestions:**
- Generate documentation
- Create database migration
- Write integration test
- Optimize slow query
- [Your idea!]

**Speaker Notes:**
- Take suggestion from chat/raise hands
- Live demo on the spot (if reasonable)
- Shows adaptability
- Builds confidence it can handle real tasks
- If too complex: "Great idea, let's add to advanced topics"

---

### SLIDE 20: Section Break (5 seconds)

**Title:** Beyond Coding
**Subtitle:** Use Cases for Everyone

---

### SLIDE 21: Use Case 1 - Documentation & Writing (1 minute)

**Title:** Documentation That Writes Itself

**What Claude Can Do:**
- Generate process documentation from code
- Create training materials
- Write API docs automatically
- Draft technical specifications

**Example Prompt:**
```
"Document this authentication flow for new hires.
Include diagrams and step-by-step explanation."
```

**Result:** Complete onboarding doc in minutes

**Speaker Notes:**
- Not just for developers
- Anyone can use for documentation
- Maintains consistency
- Demo quickly if time

---

### SLIDE 22: Use Case 2 - Data Analysis (1.5 minutes)

**Title:** BigQuery Analytics Agent (Coming Soon!)

**Natural Language to SQL:**
```
You: "Which customers haven't ordered in 2 months?"

Claude: "Here's the query and results:
        [SQL query shown]
        [Results table shown]

        Found 47 customers..."
```

**No SQL Knowledge Required!**

**Use Cases:**
- Sales reports on demand
- Customer analytics
- Inventory insights
- Performance dashboards

**Speaker Notes:**
- Reference ROADMAP.md Phase 4.3
- This is on our roadmap
- Game-changer for non-technical teams
- Ask database questions in plain Portuguese

---

### SLIDE 23: Use Case 3 - Automation (1 minute)

**Title:** Automate the Repetitive Stuff

**What You Can Automate:**
- Scripts for repetitive tasks
- Data extraction and transformation
- Report generation
- File processing

**Example:**
```
"Create a script to export monthly sales by region
to Excel with charts"
```

**Result:** One-click monthly reports

**Speaker Notes:**
- Think about your repetitive tasks
- Claude can script them
- Run monthly/weekly automatically
- Free up time for valuable work

---

### SLIDE 24: Use Case 4 - Learning & Research (1 minute)

**Title:** Your Personal AI Tutor

**Learning Use Cases:**
- Explain complex technical concepts
- Research industry best practices
- Learn new technologies
- Understand legacy code

**Example:**
```
"Explain how OAuth2 works in simple terms,
with a diagram and example"
```

**Result:** Clear explanation with visuals

**Speaker Notes:**
- Great for professional development
- No judgment for "basic" questions
- Explains at your level
- Saves hours of googling

---

### SLIDE 25: Interactive Question (1.5 minutes)

**Title:** Your Turn!

**Question:**
"What's ONE repetitive task in your role that you'd want AI to automate?"

**Instructions:**
- Type in chat
- Or raise hand to share

**Share 2-3 interesting answers**

**Speaker Notes:**
- Read out loud interesting ones
- Show breadth of applications
- Build excitement
- "Great ideas - many of these are possible today"
- Transition to Part 2

---

### SLIDE 26: Part 1 Wrap-Up (1 minute)

**Title:** Part 1 Recap

**What We Covered:**
- ✓ AI Fundamentals (LLMs, Context, Prompts, Agents, Skills)
- ✓ Live Demos (Read, Write, Research, Refactor, Debug)
- ✓ Use Cases Beyond Coding

**Key Takeaway:**
Claude Code is accessible to everyone, not just developers

**Next:**
Part 2 - Deep dive into development workflows

**5-minute break**

**Speaker Notes:**
- Quick recap
- Answer any questions
- 5-minute break
- Non-developers can leave or stay
- Part 2 gets technical

---

## PART 2: Developer Best Practices & Workflow (30 minutes)

---

### SLIDE 27: Part 2 Title (30 seconds)

**Title:** Developer Best Practices
**Subtitle:** The 5x-10x Productivity Workflow

**Speaker Notes:**
- Welcome back
- Now we get technical
- This is the methodology for 5-10x gains
- Everything evidence-based

---

### SLIDE 28: Section Break (5 seconds)

**Title:** The Complete Workflow
**Subtitle:** 5 Phases to Production

---

### SLIDE 29: The 5-Phase Workflow Overview (1 minute)

**Title:** The Complete Autonomous Development Workflow

**The 5 Phases:**
1. **PLANNING** (Human-led, 2 min) → Clear requirements
2. **AUTONOMOUS IMPLEMENTATION** (Claude, 15 min) → Code generation
3. **ADVERSARIAL REVIEW** (Fresh Claude, 5 min) → Critical analysis
4. **REFINEMENT** (Claude, 10 min) → Fix issues
5. **HUMAN VALIDATION** (You, 3 min) → Final approval

**Total Time:** ~35 minutes
**Traditional:** 3-4 hours
**Speedup:** 5-7x

**Visual:** Workflow diagram with time estimates

**Speaker Notes:**
- This is the complete process
- Each phase has specific role
- We'll walk through real example
- Times are real, measured

---

### SLIDE 30: Phase 1 - Planning (1.5 minutes)

**Title:** Phase 1: Planning (Human-Led)

**Your Responsibilities:**
- ✓ Define clear requirements
- ✓ Set acceptance criteria
- ✓ Specify constraints
- ✓ Provide context

**Example (Customer Order History):**
```
"Build customer order history endpoint.

Requirements:
- GET /api/customers/:id/orders
- Pagination (page, limit)
- Filter by date range and status
- Include order items with product details
- Write comprehensive tests
- Follow our existing API patterns

Context:
- Tech stack: Express + TypeScript
- Database: PostgreSQL with Prisma
- Authentication: JWT (already implemented)

Success criteria:
- Tests pass
- Follows our service layer pattern
- Response time <100ms"
```

**Key:** Be specific, not prescriptive

**Speaker Notes:**
- This is the foundation
- Garbage in = garbage out
- Spend time here (only 2 min!)
- Example from real Cienty project
- We'll cover prompts in detail soon

---

### SLIDE 31: Phase 2 - Autonomous Implementation (1.5 minutes)

**Title:** Phase 2: Autonomous Implementation (Claude)

**What Claude Does (No Human Intervention):**
1. Analyzes existing patterns in codebase
2. Creates route handler: `src/routes/customers.ts`
3. Creates service layer: `src/services/orderHistory.ts`
4. Creates repository: `src/repositories/orders.ts`
5. Adds TypeScript types: `src/types/orders.ts`
6. Writes validation middleware
7. Creates comprehensive tests
8. Runs tests, fixes any issues
9. Updates API documentation
10. Commits with detailed message

**Time:** ~15 minutes
**What You Do:** Watch and learn

**Speaker Notes:**
- This is fully autonomous
- No hand-holding
- Claude decides file structure
- Follows patterns it discovered
- You don't write a single line
- Just review the result

---

### SLIDE 32: Phase 3 - Adversarial Review (Critical!) (1.5 minutes)

**Title:** Phase 3: Adversarial Review (NEW CLAUDE SESSION)

**Why New Session?**
- Original Claude will defend its code (confirmation bias)
- Fresh context = objective analysis

**Adversarial Prompt:**
```
"Review this code for security vulnerabilities,
performance issues, and edge cases.
Be critical and adversarial."

[Paste: route handler, service, repository, types]
```

**What Adversarial Claude Found (Real Example):**
- ❌ SQL injection risk in date filter
- ❌ N+1 query problem loading order items
- ❌ Missing input validation for page/limit
- ❌ No rate limiting consideration
- ❌ Edge case: deleted products in order items
- ❌ Performance: missing index on order_date

**Without This:** All of these would go to production!

**Speaker Notes:**
- This is non-negotiable
- Separate session is crucial
- Real findings from real code
- Security issues caught before review
- This is the secret weapon

---

### SLIDE 33: Phase 4 - Refinement (1 minute)

**Title:** Phase 4: Refinement (Back to Original Claude)

**Process:**
```
Feed adversarial findings back to implementation agent:

"Adversarial review found these issues:
[Paste 6 findings]

Fix all critical and high-severity issues."
```

**Claude Fixes:**
- ✓ Uses parameterized queries (SQL injection fixed)
- ✓ Implements eager loading (N+1 fixed)
- ✓ Adds Zod validation (input validation)
- ✓ Documents rate limiting requirements
- ✓ Handles deleted products gracefully
- ✓ Adds database migration for composite index

**Time:** ~10 minutes

**Speaker Notes:**
- Simple feedback loop
- Claude fixes its own issues
- Much faster than manual
- Quality improved significantly

---

### SLIDE 34: Phase 5 - Human Validation (1 minute)

**Title:** Phase 5: Human Validation (You Review)

**What You Review:**
- ✓ Adversarial findings were addressed?
- ✓ Tests pass?
- ✓ Follows project patterns?
- ✓ Business logic is correct?

**What You DON'T Review:**
- ✗ Every line of implementation
- ✗ Syntax and formatting
- ✗ Test structure

**Trust but Verify:**
- Spot-check critical paths (auth, payments, data access)
- Validate business logic
- Ensure integration points work

**Result:** Approve and merge

**Speaker Notes:**
- Quality gate, not full review
- Trust the agent for details
- Adversarial review caught code issues
- You focus on business correctness
- 3 minutes vs 30+ minutes traditional review

---

### SLIDE 35: Complete Example - Timeline (1 minute)

**Title:** Real Example: Order History API Endpoint

**Complete Timeline:**

| Phase | Time | Who |
|-------|------|-----|
| Planning | 2 min | Human writes requirements |
| Implementation | 15 min | Claude codes autonomously |
| Adversarial Review | 5 min | Fresh Claude finds 6 issues |
| Refinement | 10 min | Original Claude fixes issues |
| Validation | 3 min | Human approves |
| **TOTAL** | **35 min** | **vs 3-4 hours traditional** |

**Quality:** Higher (issues caught by adversarial review)
**Speedup:** 5-7x
**Code:** Production-ready

**Speaker Notes:**
- These are real measured times
- Not theoretical - this is from production
- Quality is higher, not lower
- The workflow is repeatable

---

### SLIDE 36: Interactive Exercise (2 minutes)

**Title:** You Try: Feature "Add Password Reset Flow"

**Scenario:**
```
Feature: Users can reset forgotten passwords
- Email reset link
- Token expires in 1 hour
- Update password securely
- Send confirmation email
```

**Question:**
What goes in **PLANNING** (you specify) vs **AUTONOMOUS** (Claude implements)?

**Discuss in chat/audience**

**Answer:**
- **Planning:** Requirements above, constraints, success criteria
- **Autonomous:** File structure, code, tests, commit message, etc.

**Speaker Notes:**
- Get audience thinking
- Reinforce Planning vs Implementation split
- High-level requirements vs implementation details
- This is the mindset shift

---

### SLIDE 37: Section Break (5 seconds)

**Title:** Mastering Prompts
**Subtitle:** The Art of Effective Communication

---

### SLIDE 38: The Good Prompt Formula (1 minute)

**Title:** The Good Prompt Formula

**Formula:**
```
[GOAL] + [REQUIREMENTS] + [CONTEXT] + [CONSTRAINTS] + [SUCCESS CRITERIA]
```

**Example:**
```
[GOAL]
Implement user authentication with JWT tokens.

[REQUIREMENTS]
Functional:
- POST /auth/login (email, password)
- POST /auth/register (email, password, name)
- POST /auth/refresh (refresh_token)

Non-functional:
- Password hashing with bcrypt (cost factor 12)
- Access token expiry: 15 minutes
- Refresh token expiry: 7 days
- Rate limiting: 5 login attempts per 15 min per IP

[CONTEXT]
- We use Express + TypeScript
- Database: PostgreSQL with Prisma
- Current auth is basic, this replaces it

[CONSTRAINTS]
- Backward compatible with existing sessions
- Zero downtime deployment

[SUCCESS CRITERIA]
- All tests pass
- Can login/register/refresh
- Rate limiting works
- Follows our API patterns
```

**Speaker Notes:**
- Template to use every time
- Comprehensive but not prescriptive
- Notice what's specified vs what's not
- Claude decides implementation details

---

### SLIDE 39: Bad vs Good Examples (2 minutes)

**Title:** Prompt Quality: Before & After

**❌ Poor Prompt:**
```
"Add login functionality"
```

**Problems:**
- Too vague
- No context
- Missing requirements
- No success criteria
- Agent makes assumptions

---

**✅ Good Prompt:**
```
"Implement user authentication with JWT tokens.

Requirements:
- POST /auth/login (email, password)
- POST /auth/register (email, password, name)
- POST /auth/refresh (refresh_token)
- Password hashing with bcrypt (cost factor 12)
- Access token expiry: 15 minutes
- Refresh token expiry: 7 days
- Store refresh tokens in database
- Include user role in JWT payload
- Rate limiting: 5 login attempts per 15 min per IP
- Write tests covering success and failure cases
- Follow our existing error handling patterns"
```

**Why it works:**
- Specific inputs/outputs
- Security requirements clear
- Test coverage specified
- References existing patterns

**Speaker Notes:**
- Night and day difference
- Poor = mediocre results, many iterations
- Good = great results, first try
- Worth spending time on prompt

---

### SLIDE 40: The 5 Key Principles (2 minutes)

**Title:** 5 Principles of Great Prompts

**1. Be Specific**
❌ "Handle errors"
✓ "Return 400 for invalid email, 429 for rate limit, 500 for server errors"

**2. Reference Patterns**
❌ "Create an API endpoint"
✓ "Follow our service layer pattern like in user-service.ts"

**3. Include Non-Functional Requirements**
❌ "Make it fast"
✓ "Query should complete in <100ms, add caching with 5-min TTL"

**4. Specify Test Coverage**
❌ "Write tests"
✓ "Write tests for success, invalid input, rate limiting, and edge cases"

**5. Define "Done"**
❌ Implied
✓ "Tests pass, documentation updated, follows style guide"

**Speaker Notes:**
- Print this out, keep it handy
- Check your prompts against these
- Each principle improves quality
- Together they're transformative

---

### SLIDE 41: Common Anti-Patterns (1.5 minutes)

**Title:** Avoid These Common Mistakes

**❌ Over-Specifying:**
```
"Create a file called orders.ts in src/services
Add a function called getOrders that takes customerId
Use async/await and return Promise<Order[]>..."
```
**Problem:** Micromanaging = slower than writing yourself

**✓ Right Level:**
```
"Implement customer order retrieval service.
Follow our existing service layer pattern.
Include error handling and tests."
```

---

**❌ No Context:**
```
"Add caching"
```
**Problem:** Where? What data? What TTL? What invalidation?

**✓ With Context:**
```
"Add Redis caching to product catalog API.
TTL: 5 minutes
Invalidate on product updates
Fallback to database on cache miss"
```

**Speaker Notes:**
- Over-specifying defeats the purpose
- Trust Claude to figure out details
- But do provide context
- Balance is key

---

### SLIDE 42: Interactive: Rate These Prompts (1.5 minutes)

**Title:** Quick Exercise: Rate These Prompts (1-5 stars)

**Prompt 1:**
"Fix the bug"

**Prompt 2:**
"Optimize database queries"

**Prompt 3:**
```
"Optimize the getOrders query - current N+1 problem loading items.
Use eager loading with Prisma's include.
Target <50ms response time.
Add test to verify performance."
```

**Vote in chat: Which is best?**

**Answer:** Prompt 3 (specific, contextual, measurable)

**Speaker Notes:**
- Audience participation
- Obvious which is best
- Discuss why
- Reinforces principles

---

### SLIDE 43: Section Break (5 seconds)

**Title:** Adversarial Code Review
**Subtitle:** The Secret Weapon

---

### SLIDE 44: The Critical Insight (1 minute)

**Title:** Why Adversarial Review is Non-Negotiable

**The Problem: Confirmation Bias**

**Same Agent:**
```
You: "Is this code secure?"
Claude: "Yes, I implemented it following security best practices."
```
*Misses SQL injection vulnerability*

**Fresh Adversarial Agent:**
```
You: "Find problems with this code. Be adversarial."
New Claude: "CRITICAL: SQL injection vulnerability on line 6.
              Direct string interpolation in query allows...
              [detailed analysis]

              Found 7 issues total."
```

**Message:** Same code, different context = different analysis

**Speaker Notes:**
- This is counterintuitive
- Same AI, different results
- Fresh context is objective
- This catches production bugs

---

### SLIDE 45: The 3-Step Process (1.5 minutes)

**Title:** Adversarial Review: 3-Step Process

**Step 1: Extract Code for Review**

**Include:**
- ✓ Changed/new files
- ✓ Related tests
- ✓ Relevant configuration

**DO NOT Include:**
- ✗ Original task description
- ✗ Implementation reasoning
- ✗ Previous iterations

**Why:** You want fresh eyes, not biased context

---

**Step 2: Use Adversarial Prompt Template**
```
"You are a senior security and code quality reviewer
with an adversarial mindset.
Your job is to find problems, not validate code.

Analyze the following code critically:
[PASTE CODE]

Review for:
1. SECURITY VULNERABILITIES
2. PERFORMANCE ISSUES
3. EDGE CASES & BUGS
4. CODE QUALITY
5. SCALABILITY CONCERNS

Prioritize: CRITICAL > HIGH > MEDIUM > LOW
DO NOT just say 'looks good' - find real issues."
```

---

**Step 3: Triage & Act**
- **CRITICAL** → Fix immediately, block deployment
- **HIGH** → Fix before merge
- **MEDIUM** → Fix in same PR or next sprint
- **LOW** → Backlog

**Speaker Notes:**
- Simple 3-step process
- Repeatable workflow
- Template in handouts
- Severity determines urgency

---

### SLIDE 46: Real Example - SQL Injection (2 minutes)

**Title:** Real Example: SQL Injection Caught by Adversarial Review

**Original Code:**
```typescript
export async function getCustomerOrders(customerId: string, filters: any) {
  const query = `
    SELECT * FROM orders
    WHERE customer_id = '${customerId}'  // ❌ SQL INJECTION!
    ${startDate ? `AND order_date >= '${startDate}'` : ''}
  `;
  return db.query(query);
}
```

**Adversarial Agent Found:**
- **CRITICAL:** SQL injection (customerId = `"1' OR '1'='1"`)
- **HIGH:** Type safety issue (`filters: any`)
- **HIGH:** Missing error handling
- **HIGH:** No pagination metadata
- **MEDIUM:** Unbounded limit parameter

**Result:** 5 issues, 2 critical - would have gone to production

**Speaker Notes:**
- This is real code
- Implementation Claude missed this
- Adversarial Claude caught it immediately
- One review saved potential data breach

---

### SLIDE 47: The Secure Version (1.5 minutes)

**Title:** After Refinement: Secure, Performant Code

```typescript
import { z } from 'zod';

const OrderFiltersSchema = z.object({
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  status: z.enum(['pending', 'confirmed', 'shipped']).optional(),
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(10)
});

export async function getCustomerOrders(
  customerId: string,
  filters: z.infer<typeof OrderFiltersSchema>,
  userId: string
) {
  const parsed = OrderFiltersSchema.parse(filters);
  const hasAccess = await checkUserAccessToCustomer(userId, customerId);
  if (!hasAccess) throw new UnauthorizedError();

  try {
    const results = await db.query(
      `SELECT * FROM orders
       WHERE customer_id = $1                    -- ✓ Parameterized
       AND ($2::timestamp IS NULL OR order_date >= $2)
       LIMIT $3 OFFSET $4`,
      [customerId, parsed.startDate, parsed.limit, offset]
    );
    return { results, total, page, limit };     // ✓ Metadata
  } catch (error) {
    logger.error('Failed to fetch orders', { customerId, error });
    throw new DatabaseError('Failed to fetch orders');
  }
}
```

**All Issues Fixed!**

**Speaker Notes:**
- Parameterized queries
- Input validation with Zod
- Authorization check
- Error handling
- Proper types
- Pagination metadata
- This is production-ready

---

### SLIDE 48: Interactive: Find the Issues (2 minutes)

**Title:** Your Turn: Find the Issues

**Code:**
```typescript
async function updateUserEmail(userId, newEmail) {
  await db.query(`UPDATE users SET email = '${newEmail}' WHERE id = ${userId}`);
  return { success: true };
}
```

**What's wrong? (Type in chat)**

**Audience guesses, then reveal:**
- ❌ SQL injection (both userId and newEmail)
- ❌ No validation (is email format valid?)
- ❌ No error handling
- ❌ No authorization check (can user update this email?)
- ❌ No verification (send confirmation email?)
- ❌ No audit log
- ❌ No rate limiting (prevent spam)

**Compare with Claude's adversarial analysis**

**Speaker Notes:**
- Fun, interactive
- Shows how many issues in 2 lines
- Humans miss things
- Adversarial review catches them
- This is why it's non-negotiable

---

### SLIDE 49: Section Break (5 seconds)

**Title:** Advanced Techniques
**Subtitle:** Power User Features

---

### SLIDE 50: Feature 1 - CLAUDE.md (1.5 minutes)

**Title:** CLAUDE.md: Project Context File

**What:** Special file Claude automatically reads on every conversation

**Why:** Provides project context without repeating yourself

**What to Include:**
```markdown
# Cienty Development Guidelines

## Tech Stack
- Backend: FastAPI (Python 3.11+)
- Database: PostgreSQL 15 with pgvector
- Frontend: React + TypeScript + Vite

## Patterns
- Service layer + Repository pattern
- REST API with OpenAPI documentation
- Zod for validation
- JWT authentication

## Branch Strategy
- Feature branches: feature/description
- Always rebase, never merge
- Squash commits before PR

## Known Issues
- Database connection pooling: max 20 connections
- Redis cache TTL: 5 minutes default
```

**Benefit:** Claude knows your patterns without explanation every time

**Speaker Notes:**
- Create this once
- Benefits entire team
- Automatic context
- Living document - keep updated

---

### SLIDE 51: Feature 2 - Research → Plan → Execute (1 minute)

**Title:** Research → Plan → Execute Pattern

**Critical Finding from Anthropic Engineering:**

> "Steps involving research and planning are crucial—without them, Claude tends to jump straight to coding a solution."

**The Pattern:**

**1. RESEARCH:**
```
"Analyze our notification system and research approaches"
```
→ Claude reads code, researches options

**2. PLAN:**
```
"Based on research, create implementation plan"
```
→ Claude proposes architecture, you approve

**3. EXECUTE:**
```
"Approved - implement the plan"
```
→ Claude builds it

**Why it works:** Better upfront thinking = better implementation

**Speaker Notes:**
- Official Anthropic recommendation
- Prevents "jumping to code"
- Forces architectural thinking
- Especially important for complex features

---

### SLIDE 52: Feature 3 - The 60% Context Rule (1 minute)

**Title:** Context Management: The 60% Rule

**Rule:** Never exceed 60% of context window

**Why:**
- Agent needs room to respond
- Prevents context thrashing
- Maintains quality

**How to Manage:**
1. Use `/clear` between phases
2. Split large tasks into subtasks
3. Use `claude-progress.txt` to track state

**Example claude-progress.txt:**
```
## Last Session (2026-01-05 14:30)
- Implemented order history endpoint
- Tests passing
- Ready for adversarial review

## Next
- Waiting for review feedback
- Then: Add caching layer

## Context
- Working on Phase 4.3 BigQuery Analytics
```

**Speaker Notes:**
- Production best practice
- Watch context indicator
- Don't be afraid to /clear
- Progress file maintains continuity

---

### SLIDE 53: Feature 4 - Thinking Depth Control (1 minute)

**Title:** Thinking Depth Control

**Syntax for Deeper Reasoning:**
```
think          ← Basic (fast, cheaper)
think hard     ← Deeper analysis
think harder   ← Complex problems
ultra think    ← Maximum reasoning (slower, expensive)
```

**When to Use:**
- Architecture decisions: `"think harder"`
- Simple bugs: normal
- Algorithm design: `"ultra think"`
- Code generation: normal

**Example:**
```
"think harder - Design a caching strategy for BigQuery queries
that balances freshness vs cost"
```

**Trade-off:** More thinking = more tokens = higher cost (but better results)

**Speaker Notes:**
- Use strategically
- Not for everything
- Complex decisions benefit most
- Measure cost vs value

---

### SLIDE 54: Feature 5 - Sub-Agents (1 minute)

**Title:** Sub-Agents for Specialized Work

**Create Specialized Agents:**

Use `/agents` command:
```
Main Agent: "Create sub-agent for security review"

Security Agent: Specialized prompt, adversarial review
Performance Agent: Analyzes scalability
Test Agent: Generates edge case tests
```

**Benefit:** Parallel execution, specialized expertise

**Example Workflow:**
1. Main: Implements feature
2. Security Sub-Agent: Reviews for vulnerabilities (parallel)
3. Performance Sub-Agent: Analyzes queries (parallel)
4. Main: Addresses findings

**Speaker Notes:**
- Advanced technique
- Week 3-4 skill
- Powerful for complex features
- Manage multiple agents

---

### SLIDE 55: Feature 6 - Custom Commands (1 minute)

**Title:** Custom Commands: Team Knowledge

**Store Reusable Prompts:**

Create `.claude/commands/api-endpoint.md`:
```markdown
Build a complete REST API endpoint:

Requirements:
- CRUD operations
- Input validation (Zod)
- Error handling
- Unit + integration tests
- TypeScript types
- Follow our service layer pattern
- Rate limiting: 100 req/min
```

**Usage:** Just type `/api-endpoint`

**Benefits:**
- Team-wide consistency
- Faster task specification
- Capture best practices
- Version controlled (in git)

**Speaker Notes:**
- Build team library
- Everyone uses same patterns
- Knowledge doesn't live in one person's head
- Checked into git

---

### SLIDE 56: Common Pitfalls Summary (1.5 minutes)

**Title:** 7 Common Pitfalls to Avoid

**1. Over-Specifying Tasks**
✗ "Create file orders.ts, add function getOrders..."
✓ "Implement order retrieval, follow our patterns"

**2. Not Using Adversarial Review**
✗ Trust implementation blindly
✓ Always adversarial review for production code

**3. Reviewing Every Line**
✗ Read 500 lines of generated code
✓ Spot-check critical paths, trust agent for details

**4. Not Iterating**
✗ "This isn't perfect, I'll rewrite manually"
✓ "Fix these issues" and iterate

**5. Ignoring Agent Suggestions**
✗ "Just do what I said"
✓ "Why did you suggest this?" and consider it

**6. Poor Task Boundaries**
✗ "Build the entire e-commerce platform"
✓ "Build product catalog (CRUD, search, images)"

**7. Not Learning from Agent**
✗ Never read generated code
✓ Occasionally review to learn new patterns

**Speaker Notes:**
- Print this, reference often
- We all make these mistakes
- Learn from community experience
- Avoid months of trial and error

---

### SLIDE 57: 2-Minute Power Demo (2 minutes)

**Title:** Power User Workflow Demo

**Live Demo Showing:**
1. `/init` to setup project
2. Create custom command `/api-endpoint`
3. Use it to generate endpoint
4. `/clear` context
5. Adversarial review in fresh session
6. Show result

**Time:** 2 minutes
**What This Replaces:** Hours of work

**Speaker Notes:**
- Fast-paced demo
- Show all techniques together
- This is Week 3 skill level
- Everyone will get here with practice

---

### SLIDE 58: Interactive Poll (1 minute)

**Title:** Which Technique Will You Try First?

**Options:**
- A) CLAUDE.md (project context)
- B) Research → Plan → Execute
- C) Sub-agents
- D) Custom commands
- E) Thinking depth control

**Vote in chat!**

**Share results, discuss most popular**

**Speaker Notes:**
- Creates commitment
- Personalizes learning
- Share results
- "Great choice because..."

---

### SLIDE 59: Recap - Part 2 (1.5 minutes)

**Title:** Part 2 Recap: Developer Best Practices

**What We Covered:**

**✓ 5-Phase Workflow**
- Planning → Implementation → Adversarial → Refinement → Validation
- 5-7x faster, higher quality

**✓ Prompt Engineering**
- [GOAL] + [REQUIREMENTS] + [CONTEXT] + [CONSTRAINTS] + [SUCCESS]
- 5 key principles
- Common anti-patterns

**✓ Adversarial Code Review**
- Fresh context = objective analysis
- Real SQL injection example
- Non-negotiable for production

**✓ Advanced Techniques**
- CLAUDE.md, Research→Plan→Execute, 60% rule
- Thinking depth, sub-agents, custom commands

**Speaker Notes:**
- Comprehensive coverage
- All evidence-based
- Ready to start today
- Materials support continued learning

---

### SLIDE 60: Your 30-Day Journey (2 minutes)

**Title:** Your 30-Day Adoption Journey

**Week 1: FOUNDATIONS**
- Setup Claude Code
- Complete 5+ simple tasks
- First adversarial review
- **Goal:** Get comfortable with basics

**Week 2: BUILDING CONFIDENCE**
- Multi-file tasks
- Create custom commands
- Use full workflow
- **Goal:** Trust the agent

**Week 3: REAL FEATURES**
- End-to-end feature with full 5-phase workflow
- Measure time saved
- Advanced techniques
- **Goal:** Ship production code

**Week 4: MASTERY & MENTORING**
- Work autonomously
- Help team members
- Contribute best practices
- **Goal:** 5-10x productivity

**Full plan in your handouts!**

**Speaker Notes:**
- Progressive learning
- Realistic timeline
- Concrete milestones
- Support structure in place

---

### SLIDE 61: Support & Resources (1.5 minutes)

**Title:** You're Not Alone - Support Structure

**Immediate Support:**
- Daily Office Hours (Week 1): [Calendar link]
- Slack Channels:
  - #claude-code-help (questions)
  - #claude-code-wins (share successes)
  - #claude-code-tips (tips & tricks)

**Materials:**
- ✓ Quick Reference Card (in your hands!)
- ✓ Prompt Template Library
- ✓ 30-Day Adoption Plan
- ✓ Resources & Links

**Official Resources:**
- Anthropic Best Practices Guide
- DeepLearning.AI Free Course
- Community guides

**Internal:**
- AI Development Best Practices (complete doc)
- Team Prompt Library (growing)

**Speaker Notes:**
- Support structure is robust
- Don't struggle alone
- Ask questions in Slack
- Office hours daily first week
- We're all learning together

---

### SLIDE 62: Success Metrics (1 minute)

**Title:** How We'll Measure Success

**Week 1:**
- 80% install Claude Code
- 60% complete first task

**Week 2-4:**
- 70% using regularly
- 5+ hours saved per person per week

**3 Months:**
- 3x productivity increase
- 70%+ autonomous work ratio

**ROI:**
- Hours saved × developer rate
- Target: R$ 840,000/year saved (5 developers)
- AI cost: ~R$ 60,000/year
- **ROI: 1,300%**

**Speaker Notes:**
- We will track this
- Data-driven approach
- Prove the value
- Celebrate wins together

---

### SLIDE 63: Your First Assignment (1 minute)

**Title:** First Assignment: This Week

**Choose ONE simple task:**

**Option 1:** Add health check endpoint
```
GET /health → { status: 'ok', timestamp: '...' }
Include test
```

**Option 2:** Write utility function
```
Format Brazilian phone number
Include tests for edge cases
```

**Option 3:** Generate documentation
```
Document an existing function/API
Create onboarding guide
```

**Share Your Win:**
- Complete by Friday
- Post in #claude-code-wins
- Tell us: Time saved, what surprised you

**Speaker Notes:**
- Start small
- Build confidence
- Share experience
- Community learning

---

### SLIDE 64: Call to Action (1 minute)

**Title:** Let's Build Something Amazing

**What You Learned Today:**
- ✓ AI fundamentals (accessible to everyone)
- ✓ Claude Code capabilities (live demos)
- ✓ 5-phase workflow (5-10x productivity)
- ✓ Prompt engineering (quality input → quality output)
- ✓ Adversarial review (catch issues before production)
- ✓ Advanced techniques (power user features)

**What You Have:**
- ✓ Materials to reference
- ✓ 30-day plan to follow
- ✓ Support structure
- ✓ Team to learn with

**What's Next:**
- Install Claude Code this week
- Complete first task
- Join #claude-code-help
- We're in this together!

**Speaker Notes:**
- Inspiring close
- Reinforce value
- Clear next steps
- Team approach

---

### SLIDE 65: Q&A (5-7 minutes)

**Title:** Questions & Discussion

**Common Questions:**
- "What if Claude writes insecure code?"
  → Adversarial review catches it

- "How much does it cost?"
  → ~$200/month/developer, 1,300% ROI

- "Will it work with our codebase?"
  → Yes, it learns your patterns

- "What if I don't know how to code?"
  → Part 1 showed non-coding use cases

- "How long to become proficient?"
  → Week 1: basics, Week 3: productive, Week 4+: mastery

**Open floor for questions**

**Speaker Notes:**
- Answer honestly
- Share uncertainties
- "Great question, let's discuss"
- Connect people with similar questions

---

### SLIDE 66: Thank You (30 seconds)

**Title:** Thank You!

**Contact:**
- Slack: #claude-code-help
- Email: [facilitator]@cienty.com
- Office Hours: Daily 4-4:30pm (Week 1)

**Materials:**
- Slides: [Link]
- Recording: [Link]
- Handouts: [Distributed/Emailed]

**See you in #claude-code-wins!**

**Speaker Notes:**
- Thank everyone
- Remind of first assignment
- Point to materials
- Encourage questions offline
- End on high note

---

## END OF PRESENTATION

**Total Slides:** 66
**Total Time:** ~60 minutes (30+30)
**Format:** PDF/PowerPoint/Google Slides

---

## Facilitator Notes

### Pre-Workshop Checklist
- [ ] Test all 5 demos in clean environment
- [ ] Prepare fallback recordings if demos fail
- [ ] Print Quick Reference Cards (1 per person)
- [ ] Print Prompt Templates (1 per person)
- [ ] Print 30-Day Plans (1 per person)
- [ ] Print Resources sheet (1 per person)
- [ ] Set up Slack channels
- [ ] Schedule office hours
- [ ] Prepare feedback form
- [ ] Test screen sharing/recording setup

### During Workshop
- [ ] Start recording
- [ ] Share slides
- [ ] Engage chat/questions throughout
- [ ] Watch time carefully (strict 30-30 split)
- [ ] Save chat log for follow-up
- [ ] Note common questions for FAQ

### Post-Workshop
- [ ] Send thank you email with materials (within 2 hours)
- [ ] Post recording link
- [ ] Start daily office hours
- [ ] Monitor #claude-code-help
- [ ] Track completion of first assignments
- [ ] Collect feedback form responses

### Demo Scripts (Pre-Test These!)

**Demo 1: Read & Understand (2 min)**
```bash
claude "Analyze the project structure in ./src and tell me what architectural patterns you see"
# Shows: service layer, repository pattern, middleware structure
```

**Demo 2: Write & Create (3 min)**
```bash
claude "Create a health check endpoint at GET /health that returns { status: 'ok', timestamp: ISO datetime }. Include a test that verifies the endpoint returns 200 and correct structure. Use our existing Express patterns."
# Timer: show it completes in ~90 seconds
# Run test to show it passes
```

**Demo 3: Web Search (2 min)**
```bash
claude "What are the current best practices for rate limiting APIs in 2026? Include code examples for Express.js"
# Shows real-time web search, synthesis, examples
```

**Demo 4: Multi-File Refactor (3 min)**
```bash
claude "Refactor our authentication to support refresh tokens. Current: single access token. New: access token (15 min) + refresh token (7 days). Update all affected endpoints and middleware. Maintain backward compatibility. Update tests."
# Shows analysis of multiple files, consistent updates
# This is pre-staged for reliability
```

**Demo 5: Debug & Fix (2 min)**
```bash
# Show vulnerable code:
cat vulnerable-code.ts
# Contains: const query = `SELECT * FROM users WHERE id = '${userId}'`;

claude "Review this code for security issues and fix any vulnerabilities"
# Shows identification of SQL injection, explanation, fix
```

### Backup Plans

**If Demo Fails:**
- Have pre-recorded video ready
- Acknowledge: "Network issue, let's see the recording"
- Keep moving, don't dwell

**If Time Runs Over:**
- Skip interactive exercises (keep moving)
- Shorten Q&A
- Send detailed materials for self-study

**If Time Runs Under:**
- Extend Q&A
- Do bonus demo
- Show additional examples
- Preview advanced topics

---

## Slide Design Guidelines

**Visual Style:**
- Clean, modern, professional
- Cienty brand colors
- High contrast for readability
- Large fonts (min 24pt for body)

**Code Blocks:**
- Syntax highlighting
- Maximum 15 lines per slide
- Use `...` for truncation
- Highlight key lines

**Diagrams:**
- Simple, clear
- Arrows for flow
- Icons for concepts
- Consistent style

**Images:**
- Screenshots of Claude Code in action
- Terminal output (clean, readable)
- Before/After comparisons
- Visual metaphors for concepts

**Transitions:**
- Minimal, professional
- No sound effects
- Consistent throughout
- Fast (don't slow down flow)

---

## Accessibility Considerations

- **Screen readers:** Alt text on all images
- **Color blind:** Don't rely on color alone (use icons + color)
- **Font size:** Large enough for back of room
- **Contrast:** High contrast text/background
- **Captions:** If recorded, add captions
- **Materials:** Provide digital versions for screen readers

---

**Last Updated:** 2026-01-05
**Version:** 1.0
**Author:** Cienty Strategy Team

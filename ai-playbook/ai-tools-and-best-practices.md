# Cienty AI Tools & Best Practices Playbook

This guide helps everyone at Cienty leverage AI tools effectively, regardless of technical background. Start with the section that matches your comfort level.

---

## Table of Contents

1. [Getting Started (Beginners)](#getting-started-beginners)
2. [Core AI Tools Overview](#core-ai-tools-overview)
3. [Best Practices for Everyone](#best-practices-for-everyone)
4. [Advanced Usage (Technical Users)](#advanced-usage-technical-users)
   - [Session Management for Development Work](#session-management-for-development-work)
5. [Security & Privacy Guidelines](#security--privacy-guidelines)
6. [Quick Reference Cheat Sheet](#quick-reference-cheat-sheet)

---

## Getting Started (Beginners)

### What is AI and Why Should I Use It?

Think of AI assistants as very capable interns who can help you with tasks like:
- Drafting emails and documents
- Summarizing long reports
- Brainstorming ideas
- Answering questions
- Organizing information

**You don't need to be technical to use these tools.** If you can have a conversation, you can use AI.

### Your First Steps

#### 1. Choose a Tool to Start With

**ChatGPT** (by OpenAI) - Best for beginners
- Visit: chat.openai.com
- Create a free account
- Start typing questions or requests

**Claude** (by Anthropic) - Great for longer documents and nuanced conversations
- Visit: claude.ai
- Create a free account
- Excellent for writing and analysis tasks

**Microsoft Copilot** - If you use Microsoft 365
- Built into Word, Excel, Outlook, Teams
- Uses your existing Microsoft account

#### 2. How to Talk to AI (Prompting Basics)

The key to getting good results is being clear about what you want. Here's a simple formula:

```
[Role] + [Task] + [Context] + [Format]
```

**Example - Bad prompt:**
> "Write about sales"

**Example - Good prompt:**
> "You are a sales analyst. Write a brief summary of our Q3 sales performance. We exceeded targets by 15%. Format it as 3 bullet points for a team meeting."

#### 3. Simple Tasks to Try First

| Task | Example Prompt |
|------|----------------|
| Email drafting | "Help me write a professional email to a client apologizing for a delayed delivery" |
| Meeting summary | "Summarize these meeting notes into 5 key action items: [paste notes]" |
| Document review | "Review this paragraph and suggest improvements: [paste text]" |
| Brainstorming | "Give me 10 creative ideas for our team building event" |
| Explanation | "Explain what a CRM system is in simple terms" |

### Common Beginner Mistakes (and How to Avoid Them)

| Mistake | Better Approach |
|---------|-----------------|
| Being too vague | Be specific about what you need |
| Accepting first response | Ask for revisions or alternatives |
| Sharing sensitive data | Never include passwords, financials, or personal info |
| Not providing context | Explain your situation and audience |
| One-and-done | Have a conversation - refine your request |

---

## Core AI Tools Overview

### Conversational AI Assistants

| Tool | Best For | Cost | Ease of Use |
|------|----------|------|-------------|
| **ChatGPT** | General tasks, coding, creative writing | Free tier available, Plus $20/mo | Very Easy |
| **Claude** | Long documents, analysis, writing | Free tier available, Pro $20/mo | Very Easy |
| **Microsoft Copilot** | Office integration, enterprise use | Included in M365 Copilot license | Easy |
| **Google Gemini** | Google Workspace integration | Free tier available | Easy |
| **Perplexity** | Research with citations | Free tier available, Pro $20/mo | Easy |

### Specialized Tools

#### For Writing & Content
- **Grammarly** - Grammar, tone, and style suggestions
- **Jasper** - Marketing copy and content generation
- **Copy.ai** - Quick marketing copy

#### For Images & Design
- **DALL-E** (via ChatGPT Plus) - Generate images from descriptions
- **Midjourney** - High-quality artistic images
- **Canva AI** - Design with AI assistance

#### For Meetings & Productivity
- **Otter.ai** - Meeting transcription and summaries
- **Fireflies.ai** - Meeting notes and action items
- **Notion AI** - Document and project management with AI

#### For Data & Analysis
- **ChatGPT Code Interpreter** - Analyze data, create charts
- **Julius AI** - Data analysis without coding
- **Tableau AI** - Business intelligence with AI

---

## Best Practices for Everyone

### The CRAFT Framework for Better Prompts

**C**ontext - Set the scene
> "I'm preparing for a board presentation..."

**R**ole - Define who the AI should be
> "Act as a financial analyst..."

**A**ction - State what you need
> "Create a summary of..."

**F**ormat - Specify the output
> "Format as bullet points / a table / 3 paragraphs..."

**T**one - Set the style
> "Use a professional but friendly tone..."

### Iterative Refinement

Don't expect perfection on the first try. Use follow-up prompts:

1. "Make this more concise"
2. "Add more detail to point #2"
3. "Rewrite this for a non-technical audience"
4. "Give me 3 alternative versions"
5. "What questions should I be asking about this topic?"

### When to Use AI (and When Not To)

#### Great Uses
- First drafts and brainstorming
- Summarizing and organizing information
- Explaining complex concepts
- Repetitive writing tasks
- Learning new topics
- Code assistance and debugging

#### Use With Caution
- Facts and figures (always verify)
- Legal or medical advice
- Highly sensitive decisions
- Content that will be published without review

#### Avoid
- Sharing confidential company data
- Personal identifiable information (PII)
- Passwords or credentials
- Financial account details

---

## Advanced Usage (Technical Users)

### Prompt Engineering Techniques

#### Chain-of-Thought Prompting
Force the model to reason step-by-step:
```
Analyze this code for potential bugs. Think through each function
step by step, explaining your reasoning before giving your final assessment.
```

#### Few-Shot Learning
Provide examples of desired output:
```
Convert these requirements to user stories:

Example:
Requirement: "Users need to reset passwords"
User Story: "As a user, I want to reset my password so that I can regain access if I forget it."

Now convert:
Requirement: "Admins need to view user activity logs"
```

#### System Prompts (API Usage)
When using APIs, leverage system prompts for consistent behavior:
```python
messages = [
    {"role": "system", "content": "You are a senior code reviewer. Always check for security vulnerabilities, performance issues, and code style. Be concise but thorough."},
    {"role": "user", "content": "Review this function: ..."}
]
```

### Development Tools

#### AI-Powered IDEs and Extensions

| Tool | Description | Best For |
|------|-------------|----------|
| **GitHub Copilot** | Code completion and generation | All development |
| **Cursor** | AI-first code editor | Rapid development |
| **Claude Code** | CLI-based coding assistant | Terminal workflows |
| **Codeium** | Free Copilot alternative | Budget-conscious teams |
| **Tabnine** | Privacy-focused code completion | Sensitive codebases |

#### Using GitHub Copilot Effectively

```python
# Good: Descriptive comment triggers better suggestions
# Calculate the compound interest for a principal amount over n years
# with annual interest rate r, compounded monthly
def calculate_compound_interest(principal, rate, years):
    # Copilot will generate accurate implementation

# Better: Include type hints and docstring structure
def calculate_compound_interest(
    principal: float,
    rate: float,
    years: int
) -> float:
    """
    Calculate compound interest.

    Args:
        principal: Initial investment amount
        rate: Annual interest rate (as decimal, e.g., 0.05 for 5%)
        years: Number of years

    Returns:
        Final amount after compound interest
    """
    # Copilot now has full context
```

#### Claude Code CLI Best Practices

```bash
# Start with clear context
claude "In this Python FastAPI project, add input validation
to the /users endpoint using Pydantic models"

# Reference specific files
claude "Review src/auth/jwt.py for security issues"

# Use for refactoring
claude "Refactor the database connection logic in db.py
to use connection pooling"
```

### Session Management for Development Work

**Keep sessions short.** Longer sessions with AI agents tend to produce worse results due to two key issues:

1. **Context degradation**: As conversations grow, the model has more context to juggle, leading to inconsistencies, forgotten requirements, and reduced quality
2. **Confirmation bias**: Agents tend to reinforce their earlier decisions rather than critically re-evaluating them, compounding mistakes over time

#### The Short Session Principle

| Session Length | Typical Quality | Best For |
|----------------|-----------------|----------|
| Short (1-5 exchanges) | Highest | Single focused tasks |
| Medium (5-15 exchanges) | Good | Related tasks with clear scope |
| Long (15+ exchanges) | Degraded | Avoid for implementation work |

#### Breaking Down Complex Tasks

For demanding work like large refactors or new features, split the work across sessions:

```
Session 1: Planning
├── Analyze current codebase
├── Identify all files that need changes
├── Create detailed implementation plan
└── Output: Written plan document

Session 2: Implementation (Part 1)
├── Start fresh with the plan as context
├── Implement first component/module
└── Output: Working code for part 1

Session 3: Implementation (Part 2)
├── New session, reference the plan
├── Implement next component
└── Output: Working code for part 2

Session 4: Testing & Review
├── Fresh perspective on the code
├── Write tests, identify issues
└── Output: Test suite + bug list

Session 5: Fixes & Polish
├── Address issues from review
├── Final integration
└── Output: Completed feature
```

#### Phase Separation Strategy

For complex projects, separate these phases into distinct sessions:

| Phase | Goal | Why Separate? |
|-------|------|---------------|
| **Planning** | Design approach and architecture | Fresh context for big-picture thinking |
| **Development** | Write the code | Focus on implementation details |
| **Testing** | Verify correctness | Unbiased by implementation decisions |
| **Analysis** | Review for issues | Fresh eyes catch more problems |
| **Deployment** | Ship safely | Focused attention on release concerns |

#### Practical Tips

**Before starting a new session:**
- Write down key context and decisions from the previous session
- Create a clear, self-contained prompt with all necessary background
- Reference specific files or code rather than expecting the agent to "remember"

**During a session:**
- If quality starts to degrade, start fresh rather than pushing through
- Be explicit when the agent makes a mistake—don't let errors compound
- Save important outputs (plans, code) outside the conversation

**Model and tool variations:**
Different models and agents have different context handling characteristics. What works well with one may not work with another.

| Tool | Context Handling | Session Recommendation |
|------|------------------|------------------------|
| Claude Code | Good extended context | Medium sessions OK |
| ChatGPT | Moderate | Keep shorter |
| Cursor | Optimized for code | Can handle longer coding sessions |
| GitHub Copilot | Per-completion | N/A (no conversation) |

**Test your workflow:** When starting with a new model or project, experiment with session length and observe where quality degrades. Adjust your process accordingly.

### API Integration Patterns

#### Basic API Call (Python)
```python
import anthropic

client = anthropic.Anthropic()

def analyze_document(document: str) -> str:
    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        messages=[
            {"role": "user", "content": f"Analyze this document and extract key insights:\n\n{document}"}
        ]
    )
    return message.content[0].text
```

#### Structured Output with Tool Use
```python
tools = [{
    "name": "extract_entities",
    "description": "Extract named entities from text",
    "input_schema": {
        "type": "object",
        "properties": {
            "people": {"type": "array", "items": {"type": "string"}},
            "organizations": {"type": "array", "items": {"type": "string"}},
            "locations": {"type": "array", "items": {"type": "string"}}
        },
        "required": ["people", "organizations", "locations"]
    }
}]

# Use tools to get structured JSON responses
```

#### Handling Long Documents
```python
def process_long_document(document: str, chunk_size: int = 50000) -> list:
    """Process documents that exceed context limits."""
    chunks = [document[i:i+chunk_size] for i in range(0, len(document), chunk_size)]

    summaries = []
    for i, chunk in enumerate(chunks):
        summary = analyze_chunk(chunk, i, len(chunks))
        summaries.append(summary)

    # Final synthesis
    return synthesize_summaries(summaries)
```

### Automation & Workflows

#### GitHub Actions with AI
```yaml
name: AI Code Review
on: [pull_request]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: AI Review
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          # Get diff and send to Claude for review
          git diff origin/main > changes.diff
          python scripts/ai_review.py changes.diff
```

#### Batch Processing
```python
import asyncio
from anthropic import AsyncAnthropic

async def process_batch(items: list[str]) -> list[str]:
    client = AsyncAnthropic()

    async def process_item(item: str) -> str:
        response = await client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=500,
            messages=[{"role": "user", "content": f"Process: {item}"}]
        )
        return response.content[0].text

    return await asyncio.gather(*[process_item(item) for item in items])
```

---

## Security & Privacy Guidelines

### Data Classification for AI Use

| Data Type | Can Use with AI? | Notes |
|-----------|------------------|-------|
| Public information | Yes | No restrictions |
| Internal docs (non-sensitive) | Yes, with caution | Remove identifying details |
| Client names/details | No | Use placeholders like "Client A" |
| Financial data | No | Never share actual figures |
| Personal information (PII) | No | Names, emails, addresses, etc. |
| Credentials/passwords | Never | Obvious but critical |
| Source code (proprietary) | Check policy | May need enterprise tier |

### Safe Practices

1. **Anonymize before sharing**: Replace real names, companies, and numbers
2. **Use enterprise versions**: When available, they offer better data protection
3. **Review before sending**: Re-read your prompt for sensitive content
4. **Understand data retention**: Know how long providers keep your data
5. **Local alternatives**: Consider self-hosted options for sensitive work

### Enterprise Considerations

- **Claude Enterprise / ChatGPT Enterprise**: No training on your data
- **Azure OpenAI**: Data stays in your Azure tenant
- **Self-hosted models**: Complete data control (Llama, Mistral)

---

## Quick Reference Cheat Sheet

### Prompt Templates

#### Email Writing
```
Write a [tone: professional/friendly/formal] email to [recipient] about [topic].
Key points to include:
- [point 1]
- [point 2]
Keep it [length: brief/detailed].
```

#### Document Summary
```
Summarize the following document in [number] bullet points.
Focus on [specific aspects].
Audience: [who will read this]

[paste document]
```

#### Problem Solving
```
I'm facing this challenge: [describe problem]
Context: [relevant background]
Constraints: [limitations or requirements]
What are my options?
```

#### Code Review (Technical)
```
Review this code for:
- Security vulnerabilities
- Performance issues
- Best practice violations
- Edge cases

[paste code]
```

### Keyboard Shortcuts

| Platform | New Chat | Stop Generation | Copy Response |
|----------|----------|-----------------|---------------|
| ChatGPT | Ctrl/Cmd + Shift + O | Escape | Click copy icon |
| Claude | Ctrl/Cmd + / | Escape | Click copy icon |

### Model Selection Guide

| Need | Recommended Model |
|------|-------------------|
| Quick questions | GPT-4o mini, Claude Haiku |
| Complex analysis | GPT-4o, Claude Sonnet |
| Long documents | Claude (200K context) |
| Coding | Claude Sonnet, GPT-4o |
| Creative writing | Claude Opus, GPT-4o |
| Research | Perplexity Pro |

---

## Getting Help

- **Internal questions**: Reach out to the AI tools working group
- **Tool-specific issues**: Check the tool's help documentation
- **Best practices discussion**: Bring it up in team meetings
- **New tool requests**: Submit through IT request process

---

*Last updated: January 2025*
*Maintainer: AI Strategy Team*

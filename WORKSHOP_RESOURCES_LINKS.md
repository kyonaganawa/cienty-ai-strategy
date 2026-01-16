# Claude Code Resources & Links
**Print Format:** 1-page reference guide

Your complete guide to learning resources, documentation, and support

---

## OFFICIAL ANTHROPIC RESOURCES

### Claude Code Documentation
**Main Docs:** https://docs.anthropic.com/claude-code
- Complete product documentation
- Installation guides
- Feature references
- Troubleshooting

### Best Practices Guide (MUST READ!)
**URL:** https://www.anthropic.com/engineering/claude-code-best-practices
- Official engineering recommendations
- Research → Plan → Execute pattern
- CLAUDE.md usage
- Context management
- Production workflows

### Claude Agent SDK
**URL:** https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk
- Building custom agents
- Advanced integrations
- API usage
- Tool development

### Free Course: Claude Code Fundamentals
**URL:** https://www.deeplearning.ai/short-courses/claude-code-a-highly-agentic-coding-assistant/
- Free, 2-hour course
- Hands-on exercises
- Real examples
- Certificate of completion
- **Highly recommended for beginners!**

---

## COMMUNITY RESOURCES

### Awesome Claude Code (Curated List)
**URL:** https://github.com/hesreallyhim/awesome-claude-code
- Commands and shortcuts
- Workflow patterns
- Integration examples
- Community plugins
- Best practices collection
- Updated regularly

### sankalp's Complete Guide
**URL:** https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/
**Highlights:**
- 4-phase development methodology
- 60% context rule
- Think depth control
- Real-world experience
- Production tips

### Vladimir's Production Workflow Guide
**URL:** https://vladimirsiedykh.com/blog/ai-development-workflow-claude-code-production-complete-guide-2025
**Highlights:**
- Complete development workflow
- Team collaboration
- CI/CD integration
- Production best practices

### Armin Ronacher's Agentic Coding Philosophy
**URL:** https://lucumr.pocoo.org/2025/6/12/agentic-coding/
**Highlights:**
- Philosophy of AI-assisted development
- Context management strategies
- When to use AI vs manual coding
- Long-term implications

### PubNub Sub-Agents Guide
**URL:** https://www.pubnub.com/blog/best-practices-for-claude-code-sub-agents/
**Highlights:**
- Creating specialized sub-agents
- Parallel workflows
- Hook-based reproducible pipelines
- Agent orchestration

### Skywork AI Best Practices
**URL:** https://skywork.ai/blog/claude-code-2-0-best-practices-ai-coding-workflow-2025/
**Highlights:**
- /init command usage
- Custom commands
- Test-driven development
- Workflow optimization

---

## CIENTY INTERNAL RESOURCES

### Complete Best Practices Guide
**Location:** `/ai-strategy/AI_DEVELOPMENT_BEST_PRACTICES.md`
**What's Inside:**
- Complete 5-phase workflow
- Adversarial review guide
- Prompt engineering
- Community best practices
- Onboarding strategy
- ROI calculations
**This is your bible - bookmark it!**

### Team Prompt Library
**Location:** `[GitHub Repo]/prompts/`
- Team-approved prompts
- Tested templates
- Cienty-specific patterns
- Growing collection
**Contribute your best prompts!**

### Success Stories & Case Studies
**Location:** `[Internal Wiki]/claude-code-wins`
- Real Cienty examples
- Time saved metrics
- Lessons learned
- Before/after comparisons
**Add your story!**

### Workshop Materials
**This Package Includes:**
- ✓ Presentation slides
- ✓ Quick Reference Card
- ✓ Prompt Template Library
- ✓ 30-Day Adoption Plan
- ✓ This resources guide

**Recording:** [Link will be added]

---

## SUPPORT CHANNELS

### Slack Channels (Join All!)

**#claude-code-help** (Questions & Support)
- Ask any questions
- Get unstuck
- Share error messages
- Monitored daily
**Response time:** <2 hours during business hours

**#claude-code-wins** (Celebrate Successes!)
- Share your wins
- Post time saved
- Celebrate milestones
- Inspire others
**Required:** Post your first win here!

**#claude-code-tips** (Tips & Tricks)
- Share discoveries
- Workflow optimizations
- Useful prompts
- Shortcuts
**Be generous:** Share what you learn

### Office Hours

**Week 1 (Daily):**
- Time: 4:00-4:30pm
- Where: [Zoom Link / Meeting Room]
- Who: Everyone welcome
- Format: Open Q&A, live help

**Ongoing (Weekly):**
- Time: Wednesdays 4:00-5:00pm
- Where: [Zoom Link / Meeting Room]
- Format: Q&A, advanced topics
- Recordings posted to [Wiki]

### Email Support
**Contact:** [facilitator]@cienty.com
**Response time:** Within 24 hours
**Use for:** Detailed questions, private concerns, setup issues

---

## QUICK COMMAND REFERENCE

### Essential Commands
```
/init       Initialize project docs (run once per project)
/review     Code review with severity ratings
/coach      Adversarial review (fresh context)
/agents     Create specialized sub-agents
/clear      Clear context window
/resume     Resume previous conversation
```

### Thinking Depth
```
think               Basic reasoning
think hard          Deeper analysis
think harder        Complex problems
ultra think         Maximum reasoning (slower, expensive)
```

### File Paths to Create

**CLAUDE.md**
- Location: Project root
- Purpose: Auto-read project context
- Contents: Tech stack, patterns, known issues

**claude-progress.txt**
- Location: Project root
- Purpose: Session state tracking
- Update: After each session

**.claude/commands/**
- Location: Project root
- Purpose: Custom reusable prompts
- Example: `.claude/commands/api-endpoint.md`

**.claude/hooks.yml**
- Location: Project root
- Purpose: Automation hooks
- Example: on_feature_complete → run review

---

## TOOLS & INTEGRATIONS

### Hyperbrowser (Browser Automation)
**URL:** https://docs.hyperbrowser.ai/agents/claude-computer-use
- E2E testing with Claude
- Web scraping
- Browser automation
- Computer use integration

### MCP Servers (Model Context Protocol)
**URL:** https://github.com/modelcontextprotocol/servers
- Extend Claude capabilities
- Custom integrations
- Community servers
- Protocol documentation

### Claude Desktop App
**URL:** https://claude.ai/download
- GUI alternative to CLI
- Chat interface
- File upload
- Project management

---

## LEARNING PATH

### Beginners (Week 1)
**Start Here:**
1. DeepLearning.AI course (2 hours) ✓
2. Official best practices guide ✓
3. Complete Week 1 of 30-day plan ✓

### Intermediate (Weeks 2-3)
**Continue With:**
1. sankalp's complete guide ✓
2. Prompt template library ✓
3. Complete Weeks 2-3 of plan ✓

### Advanced (Week 4+)
**Master These:**
1. Sub-agents guide (PubNub) ✓
2. Custom hooks and automation ✓
3. Community contributions ✓

---

## PRODUCTIVITY TRACKING

### Metrics to Track

**Time Saved:**
- Task: [description]
- Traditional time: [hours]
- AI-assisted time: [minutes]
- Time saved: [hours]

**Quality Metrics:**
- Issues caught by adversarial review: [count]
- Bugs in production: [count]
- Test coverage: [percentage]

**Adoption Metrics:**
- Tasks completed: [count]
- Autonomous tasks: [count]
- Adversarial reviews: [count]

**Template Spreadsheet:**
[Link to Google Sheet template]

---

## GETTING HELP

### Troubleshooting Decision Tree

**Problem: Installation / Setup Issues**
→ Check official docs first
→ Post in #claude-code-help with error message
→ Attend daily office hours (Week 1)

**Problem: Claude Not Following Patterns**
→ Ensure CLAUDE.md exists and is complete
→ Reference specific files in prompt
→ Check prompt template library

**Problem: Context Fills Up Too Fast**
→ Use /clear between phases
→ Reference files instead of pasting content
→ Break task into smaller subtasks
→ Review 60% context rule

**Problem: Code Quality Issues**
→ Always use adversarial review
→ Use exact template from handout
→ Check prompt was specific enough
→ Iterate based on findings

**Problem: Not Getting Expected Results**
→ Review prompt formula (GOAL + REQUIREMENTS + CONTEXT + CONSTRAINTS + SUCCESS)
→ Check examples in prompt library
→ Post prompt in #claude-code-help for feedback

---

## CONTRIBUTING BACK

### How to Help the Team

**Share Prompts:**
- Add to team prompt library
- Pull request with template
- Document when to use

**Write Case Studies:**
- Document your success
- Include before/after metrics
- Share lessons learned
- Post in #claude-code-wins

**Answer Questions:**
- Monitor #claude-code-help
- Share your experience
- Help newcomers
- Build team knowledge

**Improve Documentation:**
- Suggest edits to guides
- Add examples
- Clarify confusing sections
- Keep it current

---

## IMPORTANT NOTES

### API Keys & Security
**Do:**
- ✓ Keep API key secure
- ✓ Store in environment variables
- ✓ Never commit to git
- ✓ Rotate if compromised

**Don't:**
- ✗ Share your API key
- ✗ Hardcode in files
- ✗ Post in public channels

### Cost Management
**Opus 4.5 Usage:**
- Typical cost: ~$200/month/developer
- Monitor usage: [Dashboard URL]
- Budget alerts at 80%
- Use "think harder" judiciously

**Cost Optimization:**
- Use /clear to manage context
- Don't paste unnecessary code
- Use Sonnet for simple tasks
- Monitor your spending

### Security Best Practices
**Always:**
- ✓ Adversarial review production code
- ✓ Never commit secrets
- ✓ Use parameterized queries
- ✓ Validate all inputs
- ✓ Check OWASP Top 10

**Never:**
- ✗ Trust AI blindly for security
- ✗ Skip adversarial review
- ✗ Paste sensitive data to Claude
- ✗ Deploy without testing

---

## QUICK WINS CHECKLIST

**First Day:**
- [ ] Install Claude Code
- [ ] Join Slack channels
- [ ] Complete first simple task
- [ ] Post win in #claude-code-wins

**First Week:**
- [ ] Create CLAUDE.md
- [ ] Complete 5+ tasks
- [ ] Perform first adversarial review
- [ ] Attend office hours

**First Month:**
- [ ] Ship production feature
- [ ] Measure time saved
- [ ] Help another team member
- [ ] Contribute to prompt library

---

## FEEDBACK & IMPROVEMENT

### Workshop Feedback
**Form:** [Google Form URL]
**Takes:** 3 minutes
**Helps:** Improve future training
**Your Input Matters!**

### Suggest Improvements
**For Best Practices Doc:**
- GitHub Issues: [Repo URL]
- Email: [facilitator]@cienty.com

**For Prompt Library:**
- Pull request: [Repo URL]
- Share in: #claude-code-tips

**For This Guide:**
- Suggest additions
- Report broken links
- Clarify confusing sections

---

## STAY UPDATED

### Official Channels
- Anthropic Blog: https://www.anthropic.com/news
- Twitter: @AnthropicAI
- LinkedIn: Anthropic

### Community
- Reddit: r/ClaudeAI
- Discord: [Community Server]
- GitHub Discussions: awesome-claude-code

### Cienty Updates
- #announcements (Slack)
- Engineering Newsletter
- Monthly All-Hands

---

## BOOKMARK THIS PAGE

**Print and keep handy** or **save PDF to desktop**

All links tested as of 2026-01-05

---

## FINAL TIPS

**Learn by Doing:**
Theory is helpful, practice is essential

**Don't Go It Alone:**
Use team support, ask questions

**Share Your Wins:**
Your success inspires others

**Iterate and Improve:**
Refine your prompts and workflow

**Have Fun:**
This should make work more enjoyable!

---

**Questions?**
#claude-code-help | [facilitator]@cienty.com | Office Hours: Wed 4pm

---

**Last Updated:** 2026-01-05
**Version:** 1.0
**Cienty Engineering Team**

---

## PRINTING INSTRUCTIONS

**Format:** A4 or Letter size
**Pages:** 1 (single-sided)
**Orientation:** Portrait
**Print:** High quality for readability
**Paper:** Standard (24lb)
**Color:** Full color for link clarity
**Distribution:** 1 per workshop attendee

**Digital Format:** Provide PDF with clickable hyperlinks

**Note:** This is a living document - check [Wiki] for latest version

---

# Converting Workshop Outline to HTML Slides

This guide shows you how to convert the `WORKSHOP_CLAUDE_CODE_PRESENTATION.md` outline into HTML slides for the website.

---

## Quick Reference

**Markdown Structure → HTML Structure:**

```
### SLIDE N: Title    →    <section>
Content               →      <h2>Title</h2>
**Speaker Notes:**    →      <p>Content...</p>
Notes text            →      <aside class="notes">Notes...</aside>
                      →    </section>
```

---

## Step-by-Step Conversion

### Example 1: Simple Text Slide

**Markdown (from outline):**
```markdown
### SLIDE 2: Opening Poll (1 minute)

**Title:** Quick Poll

**Content:**
"Who has used AI tools for work?"
- Raise your hand / Type in chat

**Speaker Notes:**
Get audience participation immediately. Gauge current AI familiarity.
```

**HTML:**
```html
<section>
    <h2>Quick Poll</h2>
    <h3 class="poll-question">Who has used AI tools for work?</h3>
    <div class="poll-options">
        <div class="poll-option">🙋 Raise your hand</div>
        <div class="poll-option">💬 Type in chat</div>
    </div>

    <aside class="notes">
        Get audience participation immediately. Gauge current AI familiarity.
    </aside>
</section>
```

---

### Example 2: Slide with Lists

**Markdown:**
```markdown
### SLIDE 4: Agenda

**Part 1 (30 min) - Everyone:**
- AI Fundamentals Demystified
- Claude Code Capabilities (Live Demos!)
- Use Cases Beyond Coding

**Part 2 (30 min) - Developers:**
- Complete Development Workflow
- Prompt Engineering Mastery
```

**HTML:**
```html
<section>
    <h2>Today's Agenda</h2>

    <div class="agenda">
        <div class="agenda-section">
            <h3>Part 1: Everyone (30 min)</h3>
            <ul>
                <li>✓ AI Fundamentals Demystified</li>
                <li>✓ Claude Code Capabilities (Live Demos!)</li>
                <li>✓ Use Cases Beyond Coding</li>
            </ul>
        </div>

        <div class="agenda-section">
            <h3>Part 2: Developers (30 min)</h3>
            <ul>
                <li>✓ Complete Development Workflow</li>
                <li>✓ Prompt Engineering Mastery</li>
            </ul>
        </div>
    </div>
</section>
```

---

### Example 3: Slide with Code

**Markdown:**
```markdown
### SLIDE 8: Bad vs Good Prompts

**❌ Bad Prompt:**
```
"Add login functionality"
```

**✅ Good Prompt:**
```
"Implement user authentication with JWT tokens.
Requirements:
- POST /auth/login (email, password)
```
```

**HTML:**
```html
<section>
    <h2>Prompts: Bad vs Good</h2>

    <div class="side-by-side">
        <div class="bad-example">
            <div class="label bad">❌ Bad Prompt</div>
            <pre><code class="language-text">"Add login functionality"</code></pre>
        </div>

        <div class="good-example">
            <div class="label good">✅ Good Prompt</div>
            <pre><code class="language-text">"Implement user authentication with JWT tokens.

Requirements:
- POST /auth/login (email, password)"</code></pre>
        </div>
    </div>
</section>
```

---

### Example 4: Slide with Highlights

**Markdown:**
```markdown
### SLIDE 3: The Bold Claim

**5-10x Productivity Increase**

Traditional Development: 3-4 hours
AI-Assisted: 35 minutes

Feature: Customer Order History API
```

**HTML:**
```html
<section>
    <h2>The Bold Claim</h2>

    <div class="highlight-box">
        <h1 class="big-number">5-10x</h1>
        <h3>Productivity Increase</h3>
    </div>

    <div class="comparison">
        <div class="comparison-item before">
            <div class="comparison-label">Traditional Development</div>
            <div class="comparison-value">3-4 hours</div>
        </div>
        <div class="comparison-arrow">→</div>
        <div class="comparison-item after">
            <div class="comparison-label">AI-Assisted</div>
            <div class="comparison-value">35 minutes</div>
        </div>
    </div>

    <div class="example-box">
        <strong>Feature:</strong> Customer Order History API
    </div>
</section>
```

---

### Example 5: Section Break

**Markdown:**
```markdown
### SLIDE 5: Section Break

**Title:** AI Fundamentals
**Subtitle:** Demystifying the Technology
```

**HTML:**
```html
<section data-background-color="#667eea" class="section-break">
    <h1>AI Fundamentals</h1>
    <h3>Demystifying the Technology</h3>
</section>
```

---

## Component Reference

### Title Slide
```html
<section data-background-gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
    <h1 class="title-main">Claude Code</h1>
    <h2 class="title-sub">10x Your Productivity</h2>
    <p class="title-byline">From AI Basics to Production Workflows</p>
    <p class="title-meta">Cienty Engineering • 2026</p>
</section>
```

### Poll
```html
<section>
    <h2>Poll Title</h2>
    <h3 class="poll-question">Question?</h3>
    <div class="poll-options">
        <div class="poll-option">Option A</div>
        <div class="poll-option">Option B</div>
        <div class="poll-option">Option C</div>
    </div>
</section>
```

### Comparison
```html
<div class="comparison">
    <div class="comparison-item before">
        <div class="comparison-label">Before</div>
        <div class="comparison-value">Value</div>
    </div>
    <div class="comparison-arrow">→</div>
    <div class="comparison-item after">
        <div class="comparison-label">After</div>
        <div class="comparison-value">Value</div>
    </div>
</div>
```

### Highlight Box
```html
<div class="highlight-box">
    <h1 class="big-number">5-10x</h1>
    <h3>Subheading</h3>
</div>
```

### Example Box
```html
<div class="example-box">
    <strong>Example:</strong> Description here
</div>
```

### Concept Card
```html
<div class="concept-card">
    <div class="analogy">"Analogy text"</div>

    <div class="how-it-works">
        <h4>How it works:</h4>
        <ul>
            <li>Point 1</li>
            <li>Point 2</li>
        </ul>
    </div>
</div>
```

### Side-by-Side Layout
```html
<div class="side-by-side">
    <div>
        <h3>Left Column</h3>
        <p>Content...</p>
    </div>
    <div>
        <h3>Right Column</h3>
        <p>Content...</p>
    </div>
</div>
```

### Agenda
```html
<div class="agenda">
    <div class="agenda-section">
        <h3>Section Title</h3>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
    <div class="agenda-section">
        <h3>Section Title</h3>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
</div>
```

### Workflow Diagram
```html
<div class="workflow">
    <div class="workflow-step">
        <div class="workflow-number">1</div>
        <div class="workflow-title">Step Name</div>
        <div class="workflow-time">2 min</div>
    </div>
    <div class="workflow-arrow">→</div>
    <div class="workflow-step">
        <div class="workflow-number">2</div>
        <div class="workflow-title">Step Name</div>
        <div class="workflow-time">15 min</div>
    </div>
</div>
```

### Checklist
```html
<div class="checklist">
    <div class="checklist-item">
        <div class="checklist-checkbox"></div>
        <div>Checklist item text</div>
    </div>
    <div class="checklist-item checked">
        <div class="checklist-checkbox"></div>
        <div>Completed item</div>
    </div>
</div>
```

### Code Block
```html
<pre><code class="language-javascript">
function example() {
    console.log("Hello, World!");
}
</code></pre>
```

Supported languages:
- `language-javascript`
- `language-python`
- `language-typescript`
- `language-bash`
- `language-json`
- `language-text` (plain text)

### Speaker Notes
```html
<aside class="notes">
    Your speaker notes here.
    Can include multiple paragraphs.

    Key points to remember:
    - Point 1
    - Point 2
</aside>
```

---

## Special Features

### Fragments (Progressive Reveal)
```html
<ul>
    <li class="fragment">Appears first</li>
    <li class="fragment">Appears second</li>
    <li class="fragment">Appears third</li>
</ul>
```

### Background Images
```html
<section data-background-image="path/to/image.jpg">
    <h2>Title overlaid on image</h2>
</section>
```

### Background Colors
```html
<section data-background-color="#667eea">
    <h2>Colored background</h2>
</section>
```

### Vertical Slides (Sub-slides)
```html
<section>
    <!-- Main slide -->
    <section>
        <h2>Main Topic</h2>
    </section>

    <!-- Sub-slide 1 (navigate with ↓) -->
    <section>
        <h2>Subtopic 1</h2>
    </section>

    <!-- Sub-slide 2 -->
    <section>
        <h2>Subtopic 2</h2>
    </section>
</section>
```

### Auto-advance
```html
<section data-auto-advance="5000">
    <h2>This slide auto-advances in 5 seconds</h2>
</section>
```

---

## Conversion Workflow

### Option 1: Manual Conversion

1. Open `WORKSHOP_CLAUDE_CODE_PRESENTATION.md`
2. Open `index.html`
3. For each slide in the markdown:
   - Copy the content
   - Create a `<section>` in HTML
   - Format using component templates above
   - Add speaker notes in `<aside class="notes">`

### Option 2: Use Claude Code to Convert

Prompt:
```
Convert this markdown slide to HTML using the Reveal.js format.
Use the component templates from SLIDES_CONVERSION_GUIDE.md.
Include speaker notes as <aside class="notes">.

Markdown slide:
[paste slide content]
```

### Option 3: Batch Conversion Script

Create a Node.js script to automate:

```javascript
// convert-slides.js
const fs = require('fs');
const marked = require('marked');

// Read markdown
const markdown = fs.readFileSync('WORKSHOP_CLAUDE_CODE_PRESENTATION.md', 'utf8');

// Split into slides
const slides = markdown.split(/^### SLIDE \d+:/gm);

// Convert each slide
const htmlSlides = slides.map(slide => {
    // Parse and convert to HTML
    // Apply component templates
    // Return <section>...</section>
});

// Output HTML
fs.writeFileSync('slides-output.html', htmlSlides.join('\n'));
```

---

## Tips

### 1. Start with Key Slides

Don't convert all 66 slides at once. Start with:
- Title slide
- 2-3 content slides from Part 1
- Section break
- 2-3 slides from Part 2

Test these, ensure they look good, then continue.

### 2. Use Consistent Formatting

- All section breaks: same background color
- All code examples: same style
- All comparisons: same layout

### 3. Test Frequently

After adding 5-10 slides:
- Open in browser
- Navigate through
- Check responsive design
- Verify speaker notes work

### 4. Optimize for Performance

- Keep code blocks under 50 lines
- Compress images before adding
- Don't add too many animations

### 5. Preserve Speaker Notes

Every slide should have speaker notes, even if brief:
```html
<aside class="notes">
    Key point to remember during presentation.
</aside>
```

---

## Common Patterns

### Pattern 1: Concept Introduction

```html
<section>
    <h2>Concept Name</h2>

    <div class="concept-card">
        <div class="analogy">"Simple analogy"</div>

        <div class="how-it-works">
            <h4>How it works:</h4>
            <ul>
                <li>Point 1</li>
                <li>Point 2</li>
                <li>Point 3</li>
            </ul>
        </div>
    </div>

    <aside class="notes">
        Explain concept simply. Use analogy.
        Demo if applicable.
    </aside>
</section>
```

### Pattern 2: Before/After Comparison

```html
<section>
    <h2>Improvement Example</h2>

    <div class="comparison">
        <div class="comparison-item before">
            <div class="comparison-label">Traditional</div>
            <div class="comparison-value">3-4 hours</div>
        </div>
        <div class="comparison-arrow">→</div>
        <div class="comparison-item after">
            <div class="comparison-label">AI-Assisted</div>
            <div class="comparison-value">35 min</div>
        </div>
    </div>

    <aside class="notes">
        Real measured times from production use.
    </aside>
</section>
```

### Pattern 3: Interactive Exercise

```html
<section>
    <h2>Your Turn!</h2>

    <h3 class="poll-question">Question here?</h3>

    <div class="poll-options">
        <div class="poll-option">Option A</div>
        <div class="poll-option">Option B</div>
        <div class="poll-option">Option C</div>
    </div>

    <aside class="notes">
        Get audience participation.
        Discuss results.
    </aside>
</section>
```

---

## Quality Checklist

Before considering a slide "done":

- [ ] Content matches markdown outline
- [ ] Speaker notes included
- [ ] Code syntax highlighting working (if applicable)
- [ ] Responsive on mobile (test with DevTools)
- [ ] No spelling errors
- [ ] Links work (if any)
- [ ] Images have alt text
- [ ] Color contrast is readable
- [ ] Animations are smooth

---

## Need Help?

**See these files:**
- `index.html` - Current example slides
- `styles.css` - All available component styles
- `README.md` - Full documentation

**Resources:**
- Reveal.js docs: https://revealjs.com/
- Markdown reference: `WORKSHOP_CLAUDE_CODE_PRESENTATION.md`

**Contact:**
[facilitator]@cienty.com

---

**Version:** 1.0
**Last Updated:** 2026-01-05

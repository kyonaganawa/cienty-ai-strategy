# Cienty Visual Style Guide

<skill-description>
Use this skill when creating HTML pages, slides, dashboards, or any visual content for Cienty. This ensures brand consistency across all materials.
</skill-description>

<user-invocable>
true
</user-invocable>

<command-name>
cienty-style
</command-name>

---

## Brand Colors

### Primary Palette
```css
:root {
    /* Primary - Purple/Blue gradient anchor */
    --cienty-primary: #667eea;
    --cienty-secondary: #764ba2;
    --cienty-accent: #f093fb;

    /* Semantic Colors */
    --cienty-success: #48bb78;
    --cienty-warning: #ed8936;
    --cienty-danger: #f56565;
    --cienty-highlight: #e94560;

    /* Text Colors */
    --cienty-text-dark: #2d3748;
    --cienty-text-light: #ffffff;
    --cienty-text-muted: #666666;

    /* Background Colors */
    --cienty-bg-light: #ffffff;
    --cienty-bg-dark: #1a202c;
    --cienty-bg-card: #ffffff;
    --cienty-bg-section: #f7fafc;

    /* Dark Theme (for hero sections) */
    --cienty-dark-primary: #1a1a2e;
    --cienty-dark-secondary: #16213e;
    --cienty-dark-accent: #0f3460;
}
```

### Gradient Presets
```css
/* Primary brand gradient - use for hero sections, CTAs, highlights */
.cienty-gradient-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Dark theme gradient - use for main slides, headers */
.cienty-gradient-dark {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

/* Accent gradient - use sparingly for special elements */
.cienty-gradient-accent {
    background: linear-gradient(135deg, #e94560, #ff6b6b);
}

/* Success gradient - progress bars, positive metrics */
.cienty-gradient-success {
    background: linear-gradient(90deg, #48bb78, #68d391);
}
```

---

## Typography

### Font Stack
```css
font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
```

### Heading Hierarchy
```css
h1 { font-size: 3em; font-weight: 700; }      /* 48px - Page titles */
h2 { font-size: 2.2em; font-weight: 700; }    /* 35px - Section titles */
h3 { font-size: 1.5em; font-weight: 600; }    /* 24px - Subsections */
h4 { font-size: 1.2em; font-weight: 600; }    /* 19px - Card titles */
h5 { font-size: 1em; font-weight: 600; }      /* 16px - Labels */

/* Body text */
p { font-size: 1rem; line-height: 1.6; }      /* 16px */
small { font-size: 0.875rem; }                 /* 14px */
.text-xs { font-size: 0.75rem; }              /* 12px */
```

### Text Styling
```css
/* Emphasis */
strong { color: var(--cienty-primary); font-weight: 600; }
em { color: var(--cienty-secondary); }

/* Uppercase labels */
.label-caps {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.7;
}
```

---

## Component Patterns

### Cards
```html
<!-- Standard Card -->
<div class="cienty-card">
    <h4>Card Title</h4>
    <p>Card content goes here.</p>
</div>

<style>
.cienty-card {
    background: var(--cienty-bg-card);
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

/* Card with accent border */
.cienty-card-accent {
    border-left: 4px solid var(--cienty-highlight);
}

/* Card with top border */
.cienty-card-top-border {
    border-top: 5px solid var(--cienty-primary);
}

/* Glass card (for dark backgrounds) */
.cienty-card-glass {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px;
    padding: 25px;
}
</style>
```

### Buttons
```html
<!-- Primary Button -->
<button class="cienty-btn-primary">Get Started</button>

<!-- Secondary Button -->
<button class="cienty-btn-secondary">Learn More</button>

<!-- Pill/Badge Button -->
<span class="cienty-badge">AI STRATEGY</span>

<style>
.cienty-btn-primary {
    background: var(--cienty-highlight);
    color: white;
    padding: 12px 30px;
    border-radius: 25px;
    font-weight: 600;
    font-size: 14px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.cienty-btn-primary:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(233, 69, 96, 0.3);
}

.cienty-btn-secondary {
    background: transparent;
    color: var(--cienty-primary);
    padding: 12px 30px;
    border-radius: 25px;
    font-weight: 600;
    font-size: 14px;
    border: 2px solid var(--cienty-primary);
    cursor: pointer;
    transition: all 0.3s ease;
}

.cienty-btn-secondary:hover {
    background: var(--cienty-primary);
    color: white;
}

.cienty-badge {
    background: var(--cienty-highlight);
    padding: 8px 20px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 14px;
    color: white;
}
</style>
```

### Highlight Box
```html
<div class="cienty-highlight-box">
    <h1 class="big-number">80.9%</h1>
    <h3>SWE-bench Score</h3>
</div>

<style>
.cienty-highlight-box {
    background: linear-gradient(135deg, var(--cienty-primary), var(--cienty-secondary));
    color: white;
    padding: 50px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.cienty-highlight-box .big-number {
    font-size: 4em;
    font-weight: 900;
    margin: 0;
}

.cienty-highlight-box h3 {
    color: rgba(255,255,255,0.9);
    font-weight: 300;
    margin-top: 10px;
}
</style>
```

### Quote/Callout Box
```html
<div class="cienty-callout">
    "Infrastructure first, then intelligence. We built the rails; now we add the brain."
</div>

<style>
.cienty-callout {
    background: linear-gradient(90deg, rgba(233, 69, 96, 0.1), transparent);
    border-left: 4px solid var(--cienty-highlight);
    padding: 20px 25px;
    margin: 30px 0;
    font-size: 17px;
    font-style: italic;
    color: var(--cienty-text-dark);
}
</style>
```

### Data Tags
```html
<div class="cienty-tags">
    <span class="cienty-tag">Real-time Pricing</span>
    <span class="cienty-tag">Inventory</span>
    <span class="cienty-tag">Demand Signals</span>
</div>

<style>
.cienty-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.cienty-tag {
    background: rgba(255,255,255,0.1);
    padding: 5px 12px;
    border-radius: 12px;
    font-size: 11px;
}

/* Accent variant */
.cienty-tag-accent {
    background: rgba(233, 69, 96, 0.2);
    border: 1px solid rgba(233, 69, 96, 0.3);
}
</style>
```

### Status Badges
```html
<span class="cienty-status green">Active</span>
<span class="cienty-status yellow">Pending</span>
<span class="cienty-status red">Error</span>

<style>
.cienty-status {
    display: inline-block;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
}

.cienty-status.green { background: #e8f5e9; color: #2e7d32; }
.cienty-status.yellow { background: #fff8e1; color: #f57c00; }
.cienty-status.red { background: #ffe5e5; color: #d32f2f; }
</style>
```

### Moat/Feature Items
```html
<div class="cienty-moat-item">
    <div class="cienty-moat-icon">&#128202;</div>
    <div class="cienty-moat-text">
        <strong>Data Network Effects</strong>
        <span>Every transaction improves predictions for all</span>
    </div>
</div>

<style>
.cienty-moat-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 15px;
}

.cienty-moat-icon {
    width: 28px;
    height: 28px;
    background: var(--cienty-success);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    flex-shrink: 0;
}

.cienty-moat-text {
    font-size: 13px;
}

.cienty-moat-text strong {
    display: block;
    margin-bottom: 2px;
    color: var(--cienty-text-dark);
}

.cienty-moat-text span {
    opacity: 0.7;
    font-size: 12px;
}
</style>
```

---

## Layout Patterns

### Section Container
```html
<section class="cienty-section">
    <h2 class="cienty-section-title">Section Title</h2>
    <!-- Content -->
</section>

<style>
.cienty-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 40px;
}

.cienty-section-title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 40px;
    color: var(--cienty-text-dark);
    position: relative;
    padding-bottom: 15px;
}

.cienty-section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: var(--cienty-highlight);
    border-radius: 2px;
}
</style>
```

### Grid Layouts
```css
/* 2-column grid */
.cienty-grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

/* 3-column grid */
.cienty-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

/* 4-column grid */
.cienty-grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

/* Responsive */
@media (max-width: 1024px) {
    .cienty-grid-2, .cienty-grid-3, .cienty-grid-4 {
        grid-template-columns: 1fr;
    }
}
```

### Hero Section (Dark Theme)
```html
<section class="cienty-hero">
    <div class="cienty-hero-header">
        <div class="cienty-logo">CIENTY<span>.</span></div>
        <div class="cienty-badge">AI STRATEGY</div>
    </div>
    <div class="cienty-hero-title">
        <h1><span>Agentic Infrastructure</span> for Pharmacy Procurement</h1>
        <p>Building the buying agent on deep connections to industry and distributors</p>
    </div>
</section>

<style>
.cienty-hero {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    color: white;
    min-height: 100vh;
    padding: 40px 60px;
}

.cienty-hero-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.cienty-logo {
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 2px;
}

.cienty-logo span {
    color: var(--cienty-highlight);
}

.cienty-hero-title {
    text-align: center;
    margin-bottom: 40px;
}

.cienty-hero-title h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
}

.cienty-hero-title h1 span {
    color: var(--cienty-highlight);
}

.cienty-hero-title p {
    font-size: 20px;
    opacity: 0.9;
}
</style>
```

---

## Tables

```html
<table class="cienty-table">
    <thead>
        <tr>
            <th>Feature</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>AI Agent</td>
            <td><span class="cienty-status green">Active</span></td>
        </tr>
    </tbody>
</table>

<style>
.cienty-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.cienty-table th, .cienty-table td {
    padding: 18px 24px;
    text-align: left;
}

.cienty-table th {
    background: var(--cienty-dark-primary);
    color: white;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.cienty-table tr:nth-child(even) {
    background: #f8f9fa;
}

/* Highlight row (for Cienty in competitive tables) */
.cienty-table tr.highlight {
    background: linear-gradient(90deg, rgba(233, 69, 96, 0.1), rgba(233, 69, 96, 0.05));
}

.cienty-table tr.highlight td {
    font-weight: 600;
}
</style>
```

---

## Q&A Cards

```html
<div class="cienty-qa-card">
    <h4>Why build an agentic AI instead of a recommendation engine?</h4>
    <p>Answer content here...</p>
</div>

<style>
.cienty-qa-card {
    background: white;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    border-left: 4px solid var(--cienty-highlight);
}

.cienty-qa-card h4 {
    font-size: 15px;
    color: var(--cienty-text-dark);
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.cienty-qa-card h4::before {
    content: 'Q';
    background: var(--cienty-highlight);
    color: white;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700;
    flex-shrink: 0;
}

.cienty-qa-card p {
    color: #555;
    font-size: 13px;
    line-height: 1.7;
}
</style>
```

---

## Architecture Diagrams

```html
<div class="cienty-arch-diagram">
    <div class="cienty-arch-node">
        <div class="icon">&#127978;</div>
        <div class="name">Pharmacies</div>
    </div>
    <div class="cienty-arch-arrow">&#10231;</div>
    <div class="cienty-arch-node agent">
        <div class="icon">&#129302;</div>
        <div class="name">AI Agent</div>
    </div>
    <div class="cienty-arch-arrow">&#10231;</div>
    <div class="cienty-arch-node">
        <div class="icon">&#127981;</div>
        <div class="name">Suppliers</div>
    </div>
</div>

<style>
.cienty-arch-diagram {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 25px 0;
}

.cienty-arch-node {
    background: rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 18px 25px;
    text-align: center;
    min-width: 110px;
}

.cienty-arch-node.agent {
    background: linear-gradient(135deg, #e94560, #ff6b6b);
    transform: scale(1.15);
    box-shadow: 0 10px 40px rgba(233, 69, 96, 0.3);
}

.cienty-arch-node .icon {
    font-size: 28px;
    margin-bottom: 6px;
}

.cienty-arch-node .name {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.cienty-arch-arrow {
    font-size: 20px;
    opacity: 0.5;
}
</style>
```

---

## Footer

```html
<footer class="cienty-footer">
    <div class="cienty-logo">CIENTY<span>.</span></div>
    <p>Agentic Infrastructure for Pharmacy Procurement</p>
</footer>

<style>
.cienty-footer {
    background: var(--cienty-dark-primary);
    color: white;
    padding: 40px;
    text-align: center;
}

.cienty-footer .cienty-logo {
    margin-bottom: 15px;
}

.cienty-footer p {
    opacity: 0.7;
    font-size: 14px;
}
</style>
```

---

## Complete CSS Variables Template

Copy this block to start any new Cienty-branded HTML file:

```css
:root {
    /* Primary Palette */
    --cienty-primary: #667eea;
    --cienty-secondary: #764ba2;
    --cienty-accent: #f093fb;
    --cienty-highlight: #e94560;

    /* Semantic */
    --cienty-success: #48bb78;
    --cienty-warning: #ed8936;
    --cienty-danger: #f56565;

    /* Text */
    --cienty-text-dark: #2d3748;
    --cienty-text-light: #ffffff;
    --cienty-text-muted: #666666;

    /* Backgrounds */
    --cienty-bg-light: #ffffff;
    --cienty-bg-dark: #1a202c;
    --cienty-bg-card: #ffffff;
    --cienty-bg-section: #f7fafc;

    /* Dark Theme */
    --cienty-dark-primary: #1a1a2e;
    --cienty-dark-secondary: #16213e;
    --cienty-dark-accent: #0f3460;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
    background: var(--cienty-bg-light);
    color: var(--cienty-text-dark);
    line-height: 1.6;
}
```

---

## Usage Instructions

When creating content with this skill:

1. **Always start with the CSS variables template** - Paste it at the top of your `<style>` block
2. **Use semantic color names** - `var(--cienty-primary)` instead of `#667eea`
3. **Follow the gradient conventions**:
   - Hero sections: `cienty-gradient-dark`
   - CTAs and highlights: `cienty-gradient-primary`
   - Agent/AI elements: `cienty-gradient-accent` (red/pink)
4. **Maintain consistency**:
   - Border radius: 16px for cards, 20px for large elements, 12px for small
   - Box shadows: `0 4px 20px rgba(0,0,0,0.08)` for cards
   - Padding: 30px for cards, 40-60px for sections
5. **Typography hierarchy**: Use the defined font sizes, don't improvise
6. **The highlight color (#e94560)** is reserved for:
   - CTAs and badges
   - Accent borders
   - "Agent" or AI-related elements
   - Important metrics

---

## Examples in This Repository

- `docs/pitch-summary.html` - Full slide deck with dark hero + light supporting sections
- `workshop-website/index.html` - Reveal.js presentation with Cienty styling
- `workshop-website/styles.css` - Complete CSS reference implementation

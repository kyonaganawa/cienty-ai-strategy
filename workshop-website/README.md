# Claude Code Workshop Website

Modern, interactive web-based presentation for the Claude Code workshop. Works perfectly for both live screen sharing and self-paced navigation.

## Features

✅ **Dual Purpose Design**
- Screen sharing mode for live presentations
- Self-navigation mode for individual learning
- Responsive on all devices

✅ **Interactive Elements**
- Live polls and quizzes
- Clickable checklists
- Animated transitions
- Code syntax highlighting

✅ **Presenter Tools**
- Speaker notes (press `S`)
- Timer and progress tracking
- Overview mode (press `Esc`)
- Fullscreen support

✅ **Professional Design**
- Clean, modern interface
- Cienty brand colors (customizable)
- Smooth animations
- Print-friendly

---

## Quick Start

### Option 1: Simple Local Setup (Recommended)

1. **Open the file directly:**
   ```bash
   cd workshop-website
   open index.html
   ```

   Or double-click `index.html` in your file browser.

2. **That's it!** The presentation uses CDN links, so no installation needed.

### Option 2: Local Web Server (Best for Development)

If you're editing the slides and want live reload:

```bash
# Using Python 3
cd workshop-website
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

### Option 3: Deploy to Web (For Sharing)

**GitHub Pages (Free):**
1. Create a GitHub repository
2. Push the `workshop-website` folder
3. Enable GitHub Pages in repository settings
4. Share the URL: `https://your-username.github.io/repository-name/`

**Netlify/Vercel (Free, even easier):**
1. Drag and drop the `workshop-website` folder
2. Get instant URL
3. Share with team

---

## How to Use

### For Live Presentation (Screen Sharing)

1. **Open the presentation:**
   - Open `index.html` in your browser
   - Press `F` for fullscreen
   - Press `S` to open speaker notes in separate window

2. **Navigate:**
   - Press `→` or click arrows to advance
   - Press `←` to go back
   - Press `Esc` for overview mode

3. **During Presentation:**
   - Speaker notes show on separate screen/window
   - Progress bar shows at bottom
   - Slide numbers show current position

### For Self-Paced Learning

1. **Open the presentation:**
   - Just open `index.html` in browser
   - No fullscreen needed

2. **Navigate:**
   - Click arrows at bottom right
   - Use arrow keys on keyboard
   - Swipe on mobile devices

3. **Learn at your own pace:**
   - Click interactive elements
   - Read speaker notes (press `?` for help)
   - Use overview mode to jump around

---

## Keyboard Shortcuts

### Navigation
| Key | Action |
|-----|--------|
| `←` `→` | Previous/Next slide |
| `↑` `↓` | Navigate vertical slides |
| `Home` | First slide |
| `End` | Last slide |
| `Esc` or `O` | Overview mode |
| `1-8` | Jump to section 1-8 |

### Presenter Tools
| Key | Action |
|-----|--------|
| `S` | Speaker notes mode |
| `P` | Open notes in new window |
| `B` | Blackout (hide slides) |
| `F` | Fullscreen |
| `T` | Start/stop timer |
| `R` | Reset timer |
| `X` | Export slide timings |

### Other
| Key | Action |
|-----|--------|
| `?` | Show help |
| `Alt + Click` | Zoom in/out |

---

## URL Parameters

Add these to the URL for special modes:

- `?notes=true` - Show speaker notes in console
- `?print-pdf` - Enable print mode (for PDF export)
- `#/5` - Jump to slide 5
- `#/5/2` - Jump to slide 5, vertical slide 2

**Examples:**
```
index.html?notes=true
index.html?print-pdf
index.html#/10
```

---

## File Structure

```
workshop-website/
├── index.html          # Main presentation file
├── styles.css          # Custom styles (Cienty branding)
├── script.js           # Configuration & interactions
├── README.md           # This file
└── slides/             # (Optional) Organized slide content
```

---

## Customization

### Change Brand Colors

Edit `styles.css`:

```css
:root {
    --primary-color: #667eea;    /* Your primary color */
    --secondary-color: #764ba2;  /* Your secondary color */
    --accent-color: #f093fb;     /* Accent color */
    /* ... other colors ... */
}
```

### Add Your Logo

In `index.html`, add to title slide:

```html
<section data-background-gradient="...">
    <img src="path/to/logo.png" alt="Company Logo" style="width: 200px; margin-bottom: 40px;">
    <h1 class="title-main">Claude Code</h1>
    ...
</section>
```

### Modify Transitions

In `script.js`, change:

```javascript
Reveal.initialize({
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    transitionSpeed: 'default', // default/fast/slow
    ...
});
```

---

## Creating More Slides

### Basic Slide Template

```html
<section>
    <h2>Slide Title</h2>
    <p>Your content here</p>

    <aside class="notes">
        Speaker notes go here (press S to view)
    </aside>
</section>
```

### Slide with Code

```html
<section>
    <h2>Code Example</h2>
    <pre><code class="language-javascript">
function hello() {
    console.log("Hello, World!");
}
    </code></pre>
</section>
```

### Two-Column Layout

```html
<section>
    <h2>Comparison</h2>
    <div class="side-by-side">
        <div>
            <h3>Before</h3>
            <p>Content...</p>
        </div>
        <div>
            <h3>After</h3>
            <p>Content...</p>
        </div>
    </div>
</section>
```

### Interactive Poll

```html
<section>
    <h2>Poll Question</h2>
    <h3 class="poll-question">What do you think?</h3>
    <div class="poll-options">
        <div class="poll-option">Option A</div>
        <div class="poll-option">Option B</div>
        <div class="poll-option">Option C</div>
    </div>
</section>
```

### Vertical Slides (Sub-slides)

```html
<section>
    <section>
        <h2>Main Topic</h2>
    </section>
    <section>
        <h2>Subtopic 1</h2>
    </section>
    <section>
        <h2>Subtopic 2</h2>
    </section>
</section>
```

Navigate with `↑` and `↓` keys.

---

## Converting Presentation Outline to HTML

The file `WORKSHOP_CLAUDE_CODE_PRESENTATION.md` contains all 66 slides with speaker notes.

**To convert:**

1. Each `### SLIDE N:` becomes a `<section>`
2. Slide title becomes `<h2>`
3. Content becomes HTML
4. `**Speaker Notes:**` becomes `<aside class="notes">`

**Example:**

Markdown:
```markdown
### SLIDE 5: The Bold Claim

**The Bold Claim**

5-10x Productivity Increase

Traditional: 3-4 hours
AI-Assisted: 35 minutes

**Speaker Notes:**
This isn't hype - it's measurable.
```

HTML:
```html
<section>
    <h2>The Bold Claim</h2>
    <div class="highlight-box">
        <h1 class="big-number">5-10x</h1>
        <h3>Productivity Increase</h3>
    </div>
    <!-- ... rest of content ... -->

    <aside class="notes">
        This isn't hype - it's measurable.
    </aside>
</section>
```

**See `SLIDES_CONVERSION_GUIDE.md` for complete examples.**

---

## Exporting to PDF

### Method 1: Print from Browser

1. Add `?print-pdf` to URL:
   ```
   index.html?print-pdf
   ```

2. Press `Ctrl/Cmd + P` to print

3. Select "Save as PDF"

4. Settings:
   - Layout: Portrait
   - Margins: None
   - Background graphics: Yes

### Method 2: Using decktape (Recommended for Quality)

```bash
# Install decktape
npm install -g decktape

# Generate PDF
decktape reveal index.html slides.pdf

# With custom size
decktape reveal --size 1920x1080 index.html slides.pdf
```

---

## Troubleshooting

### Slides don't load

**Issue:** Blank page or error
**Fix:** Check browser console (F12) for errors. Ensure you're using a modern browser (Chrome, Firefox, Safari, Edge).

### Speaker notes don't show

**Issue:** Pressing `S` doesn't open notes
**Fix:** Allow pop-ups in your browser. Try `P` key instead for new window.

### Code syntax highlighting not working

**Issue:** Code appears plain text
**Fix:** Ensure you're using `<pre><code class="language-xxx">` with correct language class.

### Animations not smooth

**Issue:** Laggy transitions
**Fix:** Close other applications. Use Chrome for best performance. Reduce `transitionSpeed` in script.js.

### Print mode looks weird

**Issue:** PDF export has odd formatting
**Fix:** Use `?print-pdf` URL parameter before printing. Check print settings (margins: none, background graphics: yes).

---

## Browser Support

✅ **Fully Supported:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

⚠️ **Partial Support:**
- Internet Explorer: Not supported (use modern browser)

📱 **Mobile:**
- iOS Safari 14+
- Chrome Mobile 90+

---

## Performance Tips

1. **Optimize Images:**
   - Compress before adding
   - Use appropriate file formats (WebP for photos, SVG for diagrams)
   - Max width: 1920px

2. **Limit Video:**
   - Use external embed links
   - Don't autoplay multiple videos

3. **Code Blocks:**
   - Keep under 50 lines per slide
   - Use `...` for truncation

---

## Accessibility

This presentation follows WCAG 2.1 guidelines:

- ✓ Keyboard navigation
- ✓ Screen reader support
- ✓ High contrast mode
- ✓ Alt text on images (add your own)
- ✓ Readable font sizes

**To improve accessibility:**
1. Add alt text to all images
2. Use semantic HTML
3. Ensure color contrast ratios meet WCAG AA
4. Test with screen reader

---

## Advanced Features

### Auto-advance Slides (for Demos)

```html
<section data-auto-advance="5000">
    <h2>This slide auto-advances in 5 seconds</h2>
</section>
```

### Custom Backgrounds

```html
<!-- Gradient background -->
<section data-background-gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
    ...
</section>

<!-- Image background -->
<section data-background-image="path/to/image.jpg">
    ...
</section>

<!-- Video background -->
<section data-background-video="path/to/video.mp4">
    ...
</section>
```

### Fragments (Progressive Reveal)

```html
<section>
    <h2>Points Revealed One by One</h2>
    <ul>
        <li class="fragment">First point</li>
        <li class="fragment">Second point</li>
        <li class="fragment">Third point</li>
    </ul>
</section>
```

### Speaker Notes with HTML

```html
<aside class="notes">
    <h3>Key Points:</h3>
    <ul>
        <li>Important detail 1</li>
        <li>Important detail 2</li>
    </ul>
    <strong>Remember to mention the demo!</strong>
</aside>
```

---

## Tips for Great Presentations

### Before Workshop

1. **Practice with timer:**
   - Press `T` to start timer
   - Track how long each section takes
   - Adjust content if over time

2. **Test all interactive elements:**
   - Click poll options
   - Test code examples
   - Verify all links work

3. **Prepare backup:**
   - Export to PDF as backup
   - Test on presentation computer
   - Have offline copy

### During Workshop

1. **Use presenter mode:**
   - Open speaker notes (`S`)
   - Keep one screen for you, one for audience
   - Track time with timer (`T`)

2. **Engage audience:**
   - Use interactive polls
   - Ask for raise of hands
   - Encourage questions

3. **Navigate efficiently:**
   - Use number keys (1-8) to jump sections
   - Use overview mode (`Esc`) to see all slides
   - Use `B` to blackout during breaks

---

## Support & Resources

**Reveal.js Documentation:**
https://revealjs.com/

**Customization Help:**
https://github.com/hakimel/reveal.js/wiki

**Questions?**
Contact: [facilitator]@cienty.com

---

## License

This workshop presentation is property of Cienty.
Reveal.js is licensed under the MIT license.

---

## Changelog

**v1.0 (2026-01-05)**
- Initial release
- 66 slides with speaker notes
- Interactive elements
- Presenter tools
- Mobile responsive

---

**Ready to present!** Open `index.html` and press `F` for fullscreen.

For questions or issues, contact the workshop facilitator.

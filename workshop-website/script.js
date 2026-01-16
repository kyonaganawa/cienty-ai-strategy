// ===================================
// Claude Code Workshop - JavaScript
// Reveal.js Configuration & Custom Interactions
// ===================================

// Initialize Reveal.js
Reveal.initialize({
    // Display options
    width: 1920,
    height: 1080,
    margin: 0.04,

    // Display controls in the bottom right corner
    controls: true,

    // Display a presentation progress bar
    progress: true,

    // Display the page number of the current slide
    slideNumber: 'c/t',

    // Show speaker notes
    showNotes: false,

    // Add the current slide number to the URL hash
    hash: true,

    // Enable keyboard shortcuts for navigation
    keyboard: true,

    // Enable the slide overview mode
    overview: true,

    // Center slides on the screen
    center: true,

    // Enable touch navigation on devices with touch input
    touch: true,

    // Loop the presentation
    loop: false,

    // Change the presentation direction to be RTL
    rtl: false,

    // Randomize the order of slides each time the presentation loads
    shuffle: false,

    // Turns fragments on and off globally
    fragments: true,

    // Flags whether to include the current fragment in the URL
    fragmentInURL: true,

    // Flags if the presentation is running in an embedded mode
    embedded: false,

    // Flags if we should show a help overlay when the questionmark key is pressed
    help: true,

    // Flags if speaker notes should be visible to all viewers
    showNotes: false,

    // Global override for autoplaying embedded media (video/audio/iframe)
    autoPlayMedia: null,

    // Global override for preloading lazy-loaded iframes
    preloadIframes: null,

    // Number of milliseconds between automatically proceeding to the next slide
    autoSlide: 0,

    // Stop auto-sliding after user input
    autoSlideStoppable: true,

    // Use this method for navigation when auto-sliding
    autoSlideMethod: null,

    // Specify the average time in seconds that you think you will spend
    // presenting each slide
    defaultTiming: null,

    // Enable slide navigation via mouse wheel
    mouseWheel: false,

    // Apply a 3D roll to links on hover
    rollingLinks: false,

    // Opens links in an iframe preview overlay
    previewLinks: false,

    // Transition style
    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Transition speed
    transitionSpeed: 'default', // default/fast/slow

    // Transition style for full page slide backgrounds
    backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

    // Number of slides away from the current that are visible
    viewDistance: 3,

    // Number of slides away from the current that are visible on mobile
    mobileViewDistance: 2,

    // Parallax background image
    parallaxBackgroundImage: '',

    // Parallax background size
    parallaxBackgroundSize: '',

    // Plugins
    plugins: [
        RevealMarkdown,
        RevealHighlight,
        RevealNotes,
        RevealZoom
    ]
});

// ===================================
// CUSTOM INTERACTIONS
// ===================================

// Track current section for progress indicator
Reveal.on('slidechanged', (event) => {
    updateProgress();
    highlightCurrentSection();
});

// Update progress bar
function updateProgress() {
    const indices = Reveal.getIndices();
    const totalSlides = Reveal.getTotalSlides();
    const progress = (indices.h / (totalSlides - 1)) * 100;

    // You can add a custom progress bar here
    console.log(`Progress: ${Math.round(progress)}%`);
}

// Highlight current section in navigation
function highlightCurrentSection() {
    const indices = Reveal.getIndices();
    console.log(`Current slide: ${indices.h}, Vertical: ${indices.v}`);
}

// ===================================
// KEYBOARD SHORTCUTS
// ===================================

// Add custom keyboard shortcuts
Reveal.addKeyBinding({ keyCode: 66, key: 'B' }, () => {
    // B key - Toggle blackout (useful for presenter)
    toggleBlackout();
});

Reveal.addKeyBinding({ keyCode: 80, key: 'P' }, () => {
    // P key - Open presenter notes in new window
    openPresenterNotes();
});

let blackoutActive = false;
function toggleBlackout() {
    const slides = document.querySelector('.slides');
    if (blackoutActive) {
        slides.style.opacity = '1';
        blackoutActive = false;
    } else {
        slides.style.opacity = '0';
        blackoutActive = true;
    }
}

function openPresenterNotes() {
    // Open speaker notes in a new window
    const notesWindow = window.open('', 'RevealNotes', 'width=1100,height=700');
    notesWindow.document.write('<html><head><title>Speaker Notes</title>');
    notesWindow.document.write('<style>body{font-family:sans-serif;padding:20px;}</style>');
    notesWindow.document.write('</head><body>');
    notesWindow.document.write('<h1>Speaker Notes</h1>');

    const currentSlide = Reveal.getCurrentSlide();
    const notes = currentSlide.querySelector('.notes');
    if (notes) {
        notesWindow.document.write(notes.innerHTML);
    } else {
        notesWindow.document.write('<p>No notes for this slide.</p>');
    }

    notesWindow.document.write('</body></html>');
}

// ===================================
// INTERACTIVE ELEMENTS
// ===================================

// Poll interaction
document.addEventListener('DOMContentLoaded', () => {
    const pollOptions = document.querySelectorAll('.poll-option');
    pollOptions.forEach(option => {
        option.addEventListener('click', function() {
            this.classList.toggle('selected');
            this.style.background = this.classList.contains('selected')
                ? 'var(--primary-color)'
                : 'var(--bg-light)';
            this.style.color = this.classList.contains('selected')
                ? 'white'
                : 'var(--text-dark)';
        });
    });

    // Checklist items
    const checklistItems = document.querySelectorAll('.checklist-item');
    checklistItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('checked');
        });
    });
});

// ===================================
// TIMER FUNCTIONALITY
// ===================================

let timerInterval;
let timerSeconds = 0;
let timerRunning = false;

// Start/stop timer with T key
Reveal.addKeyBinding({ keyCode: 84, key: 'T' }, () => {
    toggleTimer();
});

function toggleTimer() {
    if (timerRunning) {
        clearInterval(timerInterval);
        timerRunning = false;
        console.log(`Timer stopped at: ${formatTime(timerSeconds)}`);
    } else {
        timerInterval = setInterval(() => {
            timerSeconds++;
            console.log(`Elapsed time: ${formatTime(timerSeconds)}`);
        }, 1000);
        timerRunning = true;
        console.log('Timer started');
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Reset timer with R key
Reveal.addKeyBinding({ keyCode: 82, key: 'R' }, () => {
    timerSeconds = 0;
    console.log('Timer reset');
});

// ===================================
// FULLSCREEN TOGGLE
// ===================================

// F key for fullscreen
Reveal.addKeyBinding({ keyCode: 70, key: 'F' }, () => {
    toggleFullScreen();
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// ===================================
// AUTO-ADVANCE FOR DEMOS
// ===================================

// Mark slides that should auto-advance for demos
function setupAutoAdvance() {
    const autoSlides = document.querySelectorAll('[data-auto-advance]');
    autoSlides.forEach(slide => {
        const delay = parseInt(slide.getAttribute('data-auto-advance')) || 5000;
        slide.addEventListener('slidechanged', () => {
            setTimeout(() => {
                Reveal.next();
            }, delay);
        });
    });
}

// ===================================
// CONTEXT WINDOW ANIMATION
// ===================================

// Animate context bar when slide is shown
Reveal.on('slidechanged', (event) => {
    const currentSlide = event.currentSlide;
    const contextFill = currentSlide.querySelector('.context-fill');

    if (contextFill) {
        // Reset and animate
        contextFill.style.width = '0%';
        setTimeout(() => {
            contextFill.style.width = contextFill.getAttribute('data-width') || '60%';
        }, 100);
    }
});

// ===================================
// SLIDE NOTES
// ===================================

// Log speaker notes to console for easy reference
Reveal.on('slidechanged', (event) => {
    const notes = event.currentSlide.querySelector('.notes');
    if (notes && window.location.search.includes('notes=true')) {
        console.log('--- SPEAKER NOTES ---');
        console.log(notes.textContent.trim());
        console.log('---------------------');
    }
});

// ===================================
// EXPORT TO PDF HELPER
// ===================================

// Add ?print-pdf to URL to enable print mode
if (window.location.search.match(/print-pdf/gi)) {
    document.body.classList.add('print-pdf');
}

// ===================================
// HELP OVERLAY
// ===================================

// Show help overlay with ? key
Reveal.on('overviewshown', () => {
    console.log('Overview mode active');
});

// ===================================
// NAVIGATION HELPERS
// ===================================

// Jump to specific sections
const sectionMap = {
    '1': 0,   // Intro
    '2': 5,   // AI Fundamentals
    '3': 15,  // Demos
    '4': 27,  // Part 2: Workflow
    '5': 37,  // Prompts
    '6': 44,  // Adversarial Review
    '7': 50,  // Advanced Techniques
    '8': 59   // Wrap-up
};

// Number keys 1-8 jump to sections
for (let i = 1; i <= 8; i++) {
    Reveal.addKeyBinding({ keyCode: 48 + i, key: i.toString() }, () => {
        if (sectionMap[i]) {
            Reveal.slide(sectionMap[i]);
        }
    });
}

// ===================================
// CONSOLE HELP
// ===================================

console.log(`
╔══════════════════════════════════════════════════════════╗
║        Claude Code Workshop - Keyboard Shortcuts         ║
╠══════════════════════════════════════════════════════════╣
║ Navigation:                                              ║
║   ← →          Navigate slides                           ║
║   ↑ ↓          Navigate vertical slides                  ║
║   Home/End     First/Last slide                          ║
║   Esc/O        Overview mode                             ║
║   1-8          Jump to section                           ║
║                                                          ║
║ Presenter Tools:                                         ║
║   S            Speaker notes mode                        ║
║   P            Open notes in new window                  ║
║   B            Blackout (hide slides)                    ║
║   F            Fullscreen                                ║
║   T            Start/stop timer                          ║
║   R            Reset timer                               ║
║                                                          ║
║ Other:                                                   ║
║   ?            Show help                                 ║
║   Alt+Click    Zoom in/out                              ║
║                                                          ║
║ URL Parameters:                                          ║
║   ?notes=true  Show notes in console                    ║
║   ?print-pdf   Enable print mode                        ║
╚══════════════════════════════════════════════════════════╝
`);

// ===================================
// ACCESSIBILITY
// ===================================

// Ensure all images have alt text
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img:not([alt])');
    if (images.length > 0) {
        console.warn(`⚠️ ${images.length} images missing alt text`);
    }
});

// ===================================
// SLIDE TIMING TRACKER
// ===================================

let slideTimings = [];
let slideStartTime;

Reveal.on('ready', () => {
    slideStartTime = Date.now();
});

Reveal.on('slidechanged', (event) => {
    if (slideStartTime) {
        const duration = (Date.now() - slideStartTime) / 1000;
        slideTimings.push({
            slide: event.indexh,
            duration: duration
        });
    }
    slideStartTime = Date.now();
});

// Export timings with X key
Reveal.addKeyBinding({ keyCode: 88, key: 'X' }, () => {
    console.log('=== SLIDE TIMINGS ===');
    console.table(slideTimings);
    console.log(`Total time: ${slideTimings.reduce((sum, t) => sum + t.duration, 0).toFixed(1)}s`);
});

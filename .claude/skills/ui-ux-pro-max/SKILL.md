---
name: ui-ux-pro-max
description: "UI/UX design intelligence for web and mobile. Includes 50+ styles, 161 color palettes, 57 font pairings, 161 product types, 99 UX guidelines, and 25 chart types across 10 stacks (React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui, and HTML/CSS). Actions: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, and check UI/UX code. Projects: website, landing page, dashboard, admin panel, e-commerce, SaaS, portfolio, blog, and mobile app. Elements: button, modal, navbar, sidebar, card, table, form, and chart. Styles: glassmorphism, claymorphism, minimalism, brutalism, neumorphism, bento grid, dark mode, responsive, skeuomorphism, and flat design. Topics: color systems, accessibility, animation, layout, typography, font pairing, spacing, interaction states, shadow, and gradient. Integrations: shadcn/ui MCP for component search and examples."
---

## When to Apply

Deploy this resource when tasks involve interface structure, visual design choices, interaction mechanics, or user experience quality assurance.

### Must Use

Activate for:
- New page designs (Landing, Dashboard, Admin, SaaS, Mobile)
- Component creation/refactoring (buttons, modals, forms, tables, charts)
- Visual system decisions (color, type, spacing, layout)
- UX code reviews (accessibility, consistency, usability)
- Navigation, animation, or responsive implementation
- Product-level design direction and brand alignment
- Interface clarity, discoverability, or perceived quality

### Recommended

Consider for:
- Unclear UI quality issues
- Usability or experience feedback
- Pre-launch optimization
- Cross-platform design alignment
- Design system or component library development

### Skip

Not required for:
- Backend/API/database architecture
- Infrastructure or DevOps tasks
- Non-visual automation or scripting
- Performance unrelated to user interface

**Key principle:** Apply if the task affects how features "look, feel, move, or get used."

## Rule Categories by Priority

| Priority | Category | Impact | Domain | Key Checks | Anti-Patterns |
|----------|----------|--------|--------|------------|---------------|
| 1 | Accessibility | CRITICAL | `ux` | 4.5:1 contrast, Alt text, Keyboard nav, Aria-labels | Removed focus rings, Icon-only buttons without text |
| 2 | Touch & Interaction | CRITICAL | `ux` | 44×44px minimum, 8px+ spacing, Load feedback | Hover-dependent interactions, Instant state changes |
| 3 | Performance | HIGH | `ux` | WebP/AVIF, Lazy load, CLS < 0.1 | Layout thrashing, Cumulative Layout Shift |
| 4 | Style Selection | HIGH | `style`, `product` | Match product type, Consistency, SVG icons | Random style mixing, Emoji as icons |
| 5 | Layout & Responsive | HIGH | `ux` | Mobile-first, Viewport meta, No horizontal scroll | Horizontal scroll, Fixed px widths, Zoom disabled |
| 6 | Typography & Color | MEDIUM | `typography`, `color` | 16px base, 1.5 line-height, Semantic tokens | Undersized body text, Gray-on-gray, Raw hex values |
| 7 | Animation | MEDIUM | `ux` | 150–300ms duration, Meaningful motion, Spatial flow | Purely decorative animation, Width/height animation |
| 8 | Forms & Feedback | MEDIUM | `ux` | Visible labels, Error placement, Helper text, Disclosure | Placeholder labels, Top-only errors, Overwhelming forms |
| 9 | Navigation Patterns | HIGH | `ux` | Predictable back, ≤5 bottom nav items, Deep linking | Overloaded nav, Broken back, No deep links |
| 10 | Charts & Data | LOW | `chart` | Legends, Tooltips, Accessible colors | Color-only meaning, Inaccessible tables |

## Quick Reference

### 1. Accessibility (CRITICAL)

Minimum 4.5:1 ratio for normal text (large text 3:1), visible focus rings (2–4px), descriptive alt text for meaningful images, aria-label for icon-only buttons, tab order matching visual flow, form labels with associated inputs, skip-to-main-content links, sequential heading hierarchy without gaps, non-color-based information conveyance, system text scaling support, prefers-reduced-motion respect, screen reader optimization, cancel/back options in modals, and preserved keyboard shortcuts.

### 2. Touch & Interaction (CRITICAL)

Minimum 44×44pt touch targets (Apple) or 48×48dp (Material), maintain 8px/8dp gaps between targets, avoid hover-only interactions, provide loading button states with spinner or progress, show error messages adjacent to the problem field, add cursor-pointer styling on clickable elements, prevent horizontal-swipe conflicts on main content, use touch-action: manipulation to reduce mobile delay, follow platform gesture standards, deliver 100ms tap feedback, employ haptic feedback selectively, provide non-gesture alternatives, keep primary targets away from notches and gesture bars, avoid requiring precision taps, indicate swipe actions clearly, and use movement threshold to prevent accidental drags.

### 3. Performance (HIGH)

Optimize with WebP/AVIF and responsive images (srcset/sizes), declare image width/height or aspect-ratio to prevent layout shift, use font-display: swap/optional and preload only critical fonts, inline critical CSS, lazy-load non-hero components via dynamic import, split bundles by route/feature, load third-party scripts async/defer, batch DOM operations, reserve space for async content, virtualize lists exceeding 50 items, keep per-frame work under ~16ms for 60fps, maintain input latency under ~100ms, apply debounce/throttle to high-frequency events, provide offline messaging, and offer degraded experiences for slow networks.

### 4. Style Selection (HIGH)

Align style to product category, maintain consistency across all pages, use SVG icons instead of emojis, select color palettes matching product/industry, match effects (shadows, blur, radius) to chosen aesthetic, respect platform idioms (iOS HIG vs Material), clarify hover/pressed/disabled states while staying on-brand, use consistent elevation scales, design light/dark variants together, standardize icon visual language, prefer native controls over custom ones unless branding requires it, use blur intentionally for modal background dismissal, and establish one primary call-to-action per screen.

### 5. Layout & Responsive (HIGH)

Include viewport meta tag (width=device-width initial-scale=1, no zoom disable), design mobile-first then scale upward, use systematic breakpoints (e.g., 375/768/1024/1440), maintain minimum 16px body text on mobile, limit line length (mobile 35–60 characters, desktop 60–75), eliminate horizontal scroll on mobile, implement 4pt/8dp spacing increments, maintain touch-friendly component spacing, define consistent max-width on desktop, establish layered z-index scale, reserve safe padding for fixed elements, avoid nested scroll regions, prefer min-h-dvh over 100vh on mobile, support landscape orientation, prioritize core content on mobile, and establish visual hierarchy through size, spacing, and contrast.

### 6. Typography & Color (MEDIUM)

Apply 1.5-1.75 line-height for body text, limit lines to 65-75 characters, match heading/body font personalities, use consistent type scale (e.g., 12/14/16/18/24/32), maintain darker text on light backgrounds, implement platform type systems (iOS Dynamic Type, Material type roles), reinforce hierarchy via font-weight (bold headings 600–700, regular body 400, medium labels 500), define semantic color tokens (not raw hex), design dark mode with desaturated/lighter variants, verify foreground/background contrast pairs meet 4.5:1 (AA) or 7:1 (AAA), include icons/text alongside functional colors, prefer wrapping over truncation with ellipsis as fallback, respect default letter-spacing, use tabular figures for data columns, and balance whitespace intentionally.

### 7. Animation (MEDIUM)

Keep micro-interactions within 150–300ms; complex transitions ≤400ms; avoid exceeding 500ms. Use transform/opacity exclusively; avoid animating width/height/top/left. Show skeleton or progress for loading beyond 300ms. Animate only 1-2 key elements per view. Apply ease-out for entry, ease-in for exit; avoid linear for UI transitions. Ensure every animation expresses cause-effect, not mere decoration. Transition state changes (hover/active/expanded/collapsed/modal) smoothly. Maintain spatial continuity across page transitions. Use parallax sparingly and support reduced-motion. Prefer spring/physics-based curves for natural feel. Exit animations should be 60–70% of entry duration. Stagger list/grid items by 30–50ms. Use shared element transitions for visual continuity. Ensure animations are interruptible by user input. Never block user interaction during animation. Use crossfade for content replacement. Apply subtle scale (0.95–1.05) on press. Provide real-time visual response during drag/swipe/pinch. Use translate/scale direction to express hierarchy. Maintain consistent duration/easing globally. Keep fading elements visible or fully transparent. Animate modals/sheets from their trigger source. Forward navigation animates left/up; backward animates right/down. Avoid layout reflow during animation.

### 8. Forms & Feedback (MEDIUM)

Use visible labels per input (not placeholder-only), show errors below related fields, provide loading then success/error state on submit, mark required fields with asterisk or indicator, display helpful empty-state messages with actions, auto-dismiss toasts in 3-5 seconds, confirm before destructive actions, add persistent helper text below complex inputs, use reduced opacity (0.38–0.5) and cursor change for disabled elements, reveal complex options progressively, validate on blur (not keystroke), show errors only after user input completion, use semantic input types (email, tel, number) for appropriate mobile keyboards, provide password show/hide toggle, support system autofill via autocomplete/textContentType, enable undo for destructive/bulk actions, confirm completed actions with brief visual feedback, include clear recovery paths in error messages, show step indicators for multi-step flows with back navigation, auto-save long-form drafts, confirm dismissal of sheets with unsaved changes, state cause and fix method in error messages, group related fields logically, distinguish read-only from disabled visually, auto-focus the first invalid field after submission error, provide error summary at top with field anchors, maintain ≥44px mobile input height, emphasize destructive actions in semantic danger color, use aria-live="polite" for toast notifications, apply aria-live region or role="alert" to form errors, meet 4.5:1 contrast for error/success state colors, show clear timeout feedback with retry option, and offer CSV/image export for data-heavy products.

### 9. Navigation Patterns (HIGH)

Limit bottom navigation to 5 items maximum with labels and icons; use drawer/sidebar for secondary navigation. Ensure back navigation is predictable and preserves scroll/state. Make all key screens reachable via deep link/URL. Use iOS Tab Bar for top-level (Apple HIG); Android Top App Bar with navigation icon (Material Design). Include both icon and text label in nav items. Highlight current location visually (color, weight, indicator). Clearly separate primary (tabs/bottom bar) from secondary (drawer/settings) navigation. Provide clear close affordance in modals/sheets; support swipe-down dismissal on mobile. Make search easily accessible (top bar or tab); provide recent/suggested queries. Use breadcrumbs for 3+ level deep hierarchies on web. Restore scroll position, filter state, and input when navigating back. Support system gestures (iOS swipe-back, Android predictive back) without conflict. Use badges on nav items sparingly to indicate unread/pending; clear after visit. Use overflow/more menu when actions exceed available space. Reserve bottom nav for top-level screens only; avoid nested sub-navigation. Prefer sidebar on large screens (≥1024px); use bottom/top nav on small screens. Never silently reset navigation stack or unexpectedly jump to home. Keep navigation placement consistent across pages. Avoid mixing Tab + Sidebar + Bottom Nav at the same hierarchy level. Never use modals for primary navigation flows. Move focus to main content region after page transition for screen reader users. Keep core navigation reachable from deep pages. Separate dangerous actions (delete account, logout) visually and spatially from normal nav items. Explain why nav destinations are unavailable rather than silently hiding them.

### 10. Charts & Data (LOW)

Match chart type to data (trend → line, comparison → bar, proportion → pie/donut). Use accessible color palettes; avoid red/green-only pairs for colorblind users. Provide table alternative for accessibility. Supplement color with patterns, textures, or shapes for color-blind users. Always display legend positioned near chart, not below scroll fold. Provide tooltips/data labels on hover (Web) or tap (mobile) with exact values. Label axes with units and readable scale; avoid truncation/rotation on mobile. Reflow or simplify charts on small screens. Show meaningful empty state ("No data yet" + guidance) when absent. Use skeleton/shimmer while data loads; don't show empty axis frame. Respect prefers-reduced-motion; data remains readable immediately. Aggregate or sample datasets exceeding 1000 points; provide drill-down for detail. Use locale-aware formatting for numbers, dates, currencies. Ensure interactive chart elements (points, segments) have ≥44pt tap area or expand on touch. Avoid pie/donut for >5 categories; switch to bar chart. Maintain ≥3:1 data/background contrast; data labels ≥4.5:1. Make legends clickable to toggle series visibility. Label values directly on charts for small datasets. Make tooltip content keyboard-reachable and non-hover-dependent. Support sorting in data tables with aria-sort indicating current state. Maintain readable axis tick spacing; auto-skip on small screens. Limit information density per chart to avoid cognitive overload. Emphasize data trends over decoration; avoid heavy gradients/shadows obscuring data. Use low-contrast grid lines (e.g., gray-200) so they don't compete with data. Make interactive chart elements keyboard-navigable. Provide text summary or aria-label describing chart's key insight for screen readers. Show error message with retry action on data load failure, not broken/empty chart. Maintain clear back-path and hierarchy breadcrumb in drill-down interactions. Clearly label time granularity (day/week/month) and allow switching in time series.

## How to Use

### Step 1: Analyze User Requirements

Extract from user request:
- **Product type**: Entertainment, Tool, Productivity, or hybrid
- **Target audience**: Age group, usage context (commute, leisure, work)
- **Style keywords**: playful, vibrant, minimal, dark mode, content-first, immersive
- **Stack**: React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui, or HTML/CSS

### Step 2: Generate Design System (REQUIRED)

Always start with `--design-system`:

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<product_type> <industry> <keywords>" --design-system [-p "Project Name"]
```

This returns: pattern, style, colors, typography, effects, and anti-patterns.

**Example:**
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "beauty spa wellness service" --design-system -p "Serenity Spa"
```

### Step 2b: Persist Design System (Master + Overrides)

Save design system for hierarchical retrieval:

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name"
```

Creates `design-system/MASTER.md` and optional `design-system/pages/<page-name>.md` for page-specific overrides.

### Step 3: Supplement with Detailed Searches

After design system, search specific domains:

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

| Need | Domain | Example |
|------|--------|---------|
| Product patterns | `product` | `--domain product "entertainment social"` |
| Style options | `style` | `--domain style "glassmorphism dark"` |
| Color palettes | `color` | `--domain color "entertainment vibrant"` |
| Font pairings | `typography` | `--domain typography "playful modern"` |
| Chart types | `chart` | `--domain chart "real-time dashboard"` |
| UX practices | `ux` | `--domain ux "animation accessibility"` |
| Google Fonts | `google-fonts` | `--domain google-fonts "sans serif popular"` |
| Landing structure | `landing` | `--domain landing "hero social-proof"` |
| React best practices | `react` | `--domain react "rerender memo list"` |
| App interface | `web` | `--domain web "accessibility touch safe-areas"` |
| CSS keywords | `prompt` | `--domain prompt "minimalism"` |

### Step 4: Stack Guidelines

```bash
python3 skills/ui-ux-pro-max/scripts/search.py "<keyword>" --stack <stack>
```

Available stacks: React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter, Tailwind, shadcn/ui, HTML/CSS.

## Output Formats

```bash
# ASCII (terminal display)
python3 skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system

# Markdown (documentation)
python3 skills/ui-ux-pro-max/scripts/search.py "fintech crypto" --design-system -f markdown
```

## Common Rules for Professional UI

### Icons & Visual Elements

| Rule | Standard | Avoid | Why |
|------|----------|-------|-----|
| **No Emoji Icons** | Vector icons (Lucide, Heroicons, @expo/vector-icons) | Emojis for nav/settings | Inconsistent across platforms; poor theming control |
| **Vector Assets Only** | SVG or platform vectors, scalable and themable | Raster PNG that blurs/pixelates | Ensures crispness and dark/light mode adaptability |
| **Stable States** | Color, opacity, elevation transitions | Layout-shifting transforms | Prevents visual jitter; maintains quality on mobile |
| **Brand Compliance** | Official assets; follow usage guidelines | Guessing paths; recoloring; modifying proportions | Prevents brand misuse; ensures legal/platform compliance |
| **Consistent Icon Size** | Design tokens (icon-sm, icon-md = 24pt) | Arbitrary values like 20pt/24pt/28pt | Maintains rhythm and visual hierarchy |
| **Stroke Consistency** | Same width within visual layer (1.5–2px) | Mixing thick and thin arbitrarily | Reduces perceived polish |
| **Filled vs Outline** | One style per hierarchy level | Mixing styles at same level | Maintains semantic clarity and cohesion |
| **Touch Target** | Minimum 44×44pt (use hitSlop if smaller) | Small icons without expanded area | Meets accessibility and platform standards |
| **Icon Alignment** | Align to text baseline; consistent padding | Misaligned icons; inconsistent spacing | Prevents subtle visual imbalance |
| **Icon Contrast** | WCAG: 4.5:1 for small, 3:1 minimum for glyphs | Low-contrast icons blending into background | Ensures accessibility in both light and dark |

### Interaction (App)

| Rule | Do | Don't |
|------|----|----- |
| **Tap Feedback** | Clear pressed response (ripple/opacity/elevation) within 80-150ms | No visual response |
| **Animation Timing** | Micro-interactions 150-300ms; platform-native easing | Instant transitions or slow (>500ms) |
| **Accessibility Focus** | Focus order matches visual order; descriptive labels | Unlabeled controls; confusing traversal |
| **Disabled Clarity** | Disabled semantics, reduced emphasis, no tap action | Tappable-looking but inactive controls |
| **Touch Targets** | ≥44×44pt (iOS) or ≥48×48dp (Android); expand hit area if small | Tiny targets; icon-only without padding |
| **Gesture Conflicts** | One primary gesture per region; no nested conflicts | Overlapping gestures causing accidents |
| **Native Controls** | Prefer native primitives with accessibility roles | Generic containers as primary controls |

### Light/Dark Mode Contrast

| Rule | Do | Don't |
|------|----|----- |
| **Surface Readability (Light)** | Cards/surfaces clearly separated; sufficient opacity/elevation | Overly transparent surfaces; blurred hierarchy |
| **Text Contrast (Light)** | Body text ≥4.5:1 against light surfaces | Low-contrast gray text |
| **Text Contrast (Dark)** | Primary ≥4.5:1; secondary ≥3:1 on dark surfaces | Dark mode text blending into background |
| **Border/Divider Visibility** | Separators visible in both themes | Theme-specific disappearing dividers |
| **State Contrast Parity** | Pressed/focused/disabled equally clear in both themes | States defined for one theme only |
| **Token-Driven Theming** | Semantic tokens mapped per theme | Hardcoded hex values per screen |
| **Modal Scrim Legibility** | Scrim strong enough to isolate foreground (40-60% black) | Weak scrim leaving background competing |

### Layout & Spacing

| Rule | Do | Don't |
|------|----|----- |
| **Safe-Area Compliance** | Respect top/bottom for headers, tab bars, CTA bars | Fixed UI under notch, status bar, gesture area |
| **System Bar Clearance** | Spacing for status/navigation bars and home indicator | Tappable content colliding with OS chrome |
| **Content Width** | Predictable per device (phone/tablet) | Arbitrary width mixing between screens |
| **8dp Spacing Rhythm** | Consistent 4/8dp increments for padding/gaps/sections | Random spacing with no rhythm |
| **Text Measure** | Long-form readable on large devices | Edge-to-edge paragraphs on tablets |
| **Section Spacing Hierarchy** | Clear tiers (e.g., 16/24/32/48) by hierarchy | Similar levels with inconsistent spacing |
| **Adaptive Gutters** | Increase insets on larger widths and landscape | Same narrow gutter on all sizes/orientations |
| **Scroll & Fixed Coexistence** | Content insets prevent list obstruction | Scroll content hidden behind sticky bars |

## Pre-Delivery Checklist

### Visual Quality
- [ ] No emojis used as icons (SVG instead)
- [ ] Consistent icon family and style
- [ ] Official brand assets with correct proportions
- [ ] Pressed states don't shift layout or cause jitter
- [ ] Semantic theme tokens used consistently

### Interaction
- [ ] Tappable elements show clear pressed feedback
- [ ] Touch targets ≥44×44pt iOS or ≥48×48dp Android
- [ ] Micro-interaction timing 150-300ms with native easing
- [ ] Disabled states visually clear and non-interactive
- [ ] Focus order matches visual order; descriptive labels
- [ ] No gesture region conflicts (tap/drag/back-swipe)

### Light/Dark Mode
- [ ] Primary text ≥4.5:1 contrast in both modes
- [ ] Secondary text ≥3:1 in both modes
- [ ] Dividers/borders and states distinguishable in both
- [ ] Modal scrim preserves foreground legibility (40-60% black)
- [ ] Both themes tested before delivery

### Layout
- [ ] Safe areas respected for headers, tabs, CTA bars
- [ ] Scroll content not hidden behind fixed bars
- [ ] Tested on small phone, large phone, tablet (portrait + landscape)
- [ ] Gutters/insets adapt by size and orientation
- [ ] 4/8dp spacing rhythm maintained
- [ ] Long-form text measure readable on large devices

### Accessibility
- [ ] Meaningful images/icons have accessibility labels
- [ ] Form fields have labels, hints, error messages
- [ ] Color not sole indicator
- [ ] Reduced motion and dynamic text size without breakage
- [ ] Accessibility traits/roles/states announced correctly

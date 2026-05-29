---
name: ckm:design-system
description: Token architecture, component specifications, and slide generation. Three-layer tokens (primitive→semantic→component), CSS variables, spacing/typography scales, component specs, strategic slide creation. Use for design tokens, systematic design, brand-compliant presentations.
argument-hint: "[component or token]"
license: MIT
metadata:
  author: claudekit
  version: "1.0.0"
---

# Design System

Token architecture, component specifications, systematic design, slide generation.

## When to Use

- Design token creation and component state definitions
- CSS variable systems with spacing/typography scales
- Design-to-code handoff and Tailwind theme configuration
- Slide/presentation generation

## Token Architecture

Three-layer structure:
1. **Primitive** — raw values (e.g., `--color-blue-600: #2563EB`)
2. **Semantic** — purpose aliases (e.g., `--color-primary: var(--color-blue-600)`)
3. **Component** — component-specific variables (e.g., `--button-bg: var(--color-primary)`)

## Quick Start

Generate tokens via `generate-tokens.cjs` script with JSON config and validate usage across source directories.

## Component Spec Pattern

Standard property table defining styling across Default, Hover, Active, and Disabled states for background, text, border, and shadow.

## Scripts

| Script | Purpose |
|--------|---------|
| `generate-tokens.cjs` | Token generation from JSON config |
| `validate-tokens.cjs` | Validate token usage, prevent hardcoded values |
| `search-slides.py` | BM25 search across slide templates |
| `check-compliance.cjs` | Token compliance checking |
| `fetch-images.cjs` | Image fetching for presentations |

## Slide System

Brand-compliant presentations using design tokens + Chart.js + contextual decision system.

### Source of Truth

- `docs/brand-guidelines.md` — brand foundation
- `assets/design-tokens.json` — token definitions
- `assets/design-tokens.css` — CSS variables
- Animation library

### Slide Search (BM25)

Python-based BM25 search with domain-specific and contextual capabilities supporting position-aware recommendations.

### Decision System CSVs

Eight CSV files guide decisions across strategies, layouts, typography, colors, backgrounds, copy formulas, and chart types.

### Contextual Decision Flow

Five-step process from goal parsing through strategy selection to HTML generation with token validation.

### Pattern Breaking (Duarte Sparkline)

Premium decks alternate between emotions for engagement, cycling between frustration and hope states at 1/3 and 2/3 positions.

### Slide Requirements

All slides must:
- Import `design-tokens.css` as single source of truth
- Use CSS variables exclusively — never hardcoded hex values or font names
- Integrate Chart.js for visualizations
- Include navigation
- Center content
- Emphasize persuasion over decoration

### Token Compliance

Correct: `var(--slide-bg)`
Incorrect: `#ffffff` or `"Inter"`

### Command

```
/slides:create "10-slide investor pitch for ClaudeKit Marketing"
```

## Best Practices

1. Use token-based design throughout
2. Leverage semantic layer for theme switching
3. Customize at component level without breaking globals
4. Use HSL format for color tokens
5. Document token intent, not just value
6. Mandatory CSS variable usage in all slides

## Integration

**Dependencies:** brand, ui-styling skills
**Tailwind:** Generate `tailwind.config.js` theme from token JSON

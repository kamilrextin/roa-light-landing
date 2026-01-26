# ROA Landing Page — Project Instructions

## Overview

This is the landing page for 42 Agency's Revenue Opportunity Analysis (ROA) offer, targeting MKT1 newsletter subscribers. Single `index.html` file with Tailwind CSS via CDN.

## Architecture

- **Single file:** Everything lives in `index.html` — no components, no build step
- **Tailwind CDN:** Custom config inline with brand color `#5BD675` as `brand-green`
- **No React/Vue/etc:** Plain HTML. Vite config exists from the original scaffold but isn't needed
- **Integrations:** HubSpot tracking (portal 20664080), RevenueHero scheduling, Mida A/B testing, Hotjar, Vector pixel

## When Editing

- All sections are clearly commented in `index.html` (e.g., `<!-- Hero -->`, `<!-- Problem -->`, `<!-- Form -->`)
- Tailwind responsive breakpoint is `md:` (768px) — all layouts stack on mobile
- Brand green is available as `text-brand-green`, `bg-brand-green`, `border-brand-green` via Tailwind config
- The form POSTs to HubSpot via their forms API (portal ID and form ID are in the script at the bottom)
- After form submit, RevenueHero opens a scheduling modal

## Design Principles

- **Scannable over thorough** — CMOs scroll fast. Short paragraphs, bold titles, visual hierarchy
- **Selection framing** — "See If It's A Fit" not "Buy Now." The prospect is qualifying themselves
- **Diagnostic not salesy** — White background (not 42's typical dark theme) to feel clinical/editorial
- **Escalating logic** — Problem section builds: symptom → cause → resolution (red → red → green)

## Local Development

```bash
python3 -m http.server 8765
# http://localhost:8765/index.html
```

## Deployment

Push to `master` — hosted via GitHub Pages at `kamilrextin/roa-light-landing`.

## Related Assets

| Asset | Location |
|-------|----------|
| ROA Analysis Agent | `~/.claude/agents/roa-analyst.md` |
| Discovery Call Script | `~/Documents/ROA/discovery-call-script.md` |
| 42 Agency Logo | `~/Desktop/42logo_green-01.png` |
| Sample slide image | `sample-slide.png` in this repo |
| OG image | `og-image.png` in this repo |

# ROA Landing Page — 42 Agency

Landing page for the **Revenue Opportunity Analysis** offer, built for the MKT1 newsletter sponsorship.

**Live:** Hosted via GitHub Pages from `master` branch.

## What This Is

A single-page site that sells the ROA — a paid diagnostic where a senior strategist spends 10+ hours in a prospect's ad accounts and CRM to find pipeline leaks. Target: B2B marketing teams spending $25K+/month on paid media.

**Offer details:**
- Standard price: $2,500
- MKT1 price: $2,125 (15% off)
- 100% credits toward execution if they become a client
- 10 business day turnaround

## Tech Stack

- Static HTML + Tailwind CSS (CDN)
- No framework — single `index.html`
- Vite config exists but page runs standalone
- HubSpot tracking script embedded
- RevenueHero scheduling integration on form submit

## Page Structure

1. **Nav** — Logo + CTA
2. **Hero** — Headline, value props (4 bullet points), 3-step process, CTA
3. **Problem** — "Why Pipeline Stalls" — 2-column layout with escalating logic (reporting gap → channel-only thinking → green resolution card) + closing question
4. **What We Review** — 2-column: left copy, right 3 analysis areas (Paid Media, CRM & Pipeline, Closed-Lost)
5. **Deliverable** — Sample slide mockup + 4 deliverable cards (Efficiency Gaps, Attribution Truth, 90-Day Roadmap, Live Walkthrough)
6. **Credibility break** — "This isn't a free audit" positioning
7. **Social proof** — Logo bar (TeleVox, Unily, Ethyca, GrowthLoop, Evolve IP, Pocus, Charma, Steno)
8. **Case Studies** — 3 metric cards + 3 testimonial quotes
9. **Pricing** — MKT1 exclusive offer with strikethrough pricing
10. **Form** — Name, email, company, spend range, GTM challenge → triggers RevenueHero
11. **Footer** — Links, services, Canadian flag

## Brand

- **Background:** White (`#FFFFFF`)
- **Text:** Zinc-900 primary, Zinc-500/600 secondary
- **Accent:** `#5BD675` (42 Agency green)
- **Font:** Inter (Google Fonts)
- **Style:** Clean, professional, editorial — not salesy

## Related Files (not in this repo)

- **ROA Agent:** `~/.claude/agents/roa-analyst.md` — Claude agent that produces the actual ROA analysis given client data inputs
- **Discovery Call Script:** `~/Documents/ROA/discovery-call-script.md` — 15-minute fit call script for BD team
- **Logo:** `~/Desktop/42logo_green-01.png`

## Development

```bash
# Local preview
python3 -m http.server 8765
# Open http://localhost:8765/index.html

# Or with Vite
npm install
npm run dev
```

## Key Decisions

- **No JS framework** — Static page, fast load, no build step needed for deployment
- **Tailwind CDN** — Acceptable for a single landing page; avoids build complexity
- **White background** — Chose light theme over 42's typical dark brand to feel more "diagnostic/clinical" and less "agency pitch"
- **Form submits to RevenueHero** — Schedules a 15-min fit call immediately after submission
- **"See If It's A Fit" framing** — Selection language throughout (not "buy now") to match the diagnostic positioning

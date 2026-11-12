# H&S Plumbing — Brand & Web Design System v1.0

Client design system for modernizing **hsplumbinginc.com** (H & S Plumbing, Herndon, VA).
Prepared by Arperture, July 2026. Not part of the arperture.io app — reference material only.

## Files

| File | What it is |
|---|---|
| `design-system.html` | The full visual style guide — self-contained, fonts embedded, works offline. Open in any browser. Supports light and dark themes. |
| `tokens.css` | Production-ready CSS custom properties (light + dark + `data-theme` overrides). Drop into any stack. |

## The client

H & S Plumbing is one of the oldest plumbing contractors in Northern Virginia — family
owned, operating out of Herndon **since 1965**. Residential and commercial repair, sewer &
drain, water heaters, and kitchen/bath remodeling, serving Herndon, Reston, Sterling,
Ashburn, McLean, Great Falls, and Oakton.

- **Address:** 501 Grove St, Herndon, VA 20170
- **Phone:** 703-437-6966
- **Hours:** Mon–Fri 8:30am–6pm · Sat 9am–2pm

> Business facts were sourced from hsplumbinginc.com and public listings — **verify with
> the owner before launch** (their site blocks automated fetching, so colors/logo of the
> current site were not extracted; this system is a fresh direction, not a restyle).

## Design direction in one paragraph

The story is *sixty years of trust*, told in the materials of the trade: deep water navy,
galvanized steel greys, porcelain white, and a single **copper** accent used the way copper
is used in a wall — sparingly, where it matters (the phone number, the primary button, the
active state). Type is the Barlow superfamily: Barlow Condensed for uppercase display
(highway-signage/van-door register), Barlow for everything read at length. Corners are
modest, shadows are navy-tinted, and the signature graphic device is the "union joint"
divider (hairline — copper ring — hairline).

## Core palette

| Token | Hex | Role |
|---|---|---|
| Deep Water `navy-800` | `#12304E` | hero/footer grounds, headings |
| Midnight Main `navy-900` | `#0C1D30` | footer, dark-theme ground |
| Service Blue `blue-600` | `#1D5C8F` | icons, secondary emphasis, info |
| Copper `copper-600` | `#A85A27` | primary buttons, key accents |
| Copper Deep `copper-700` | `#8F4A1E` | text links on light |
| Copper Bright `copper-300` | `#E8A468` | accents on dark grounds |
| Ink `ink-900` | `#1A2530` | body text |
| Steel `steel-600` | `#475A6B` | secondary text |
| Porcelain | `#F3F5F7` | page ground (cards sit on white) |

Ratio guidance: ~60% neutrals, 30% blues, 10% copper. Semantic colors (success/warn/danger)
communicate *state*; copper communicates *action* — they never trade jobs.

## Type

- **Display:** Barlow Condensed 700 (uppercase, ≤6 words) / 600 for H3
- **Body:** Barlow 400/500/600, 17px/1.6, 55–68ch measure
- **Labels:** Barlow 600, 13px, uppercase, +16% tracking
- Google Fonts in production; the HTML guide embeds latin subsets for portability.

## Non-negotiables (from the guide's accessibility section)

- WCAG 2.2 AA verified — all documented pairs pass (white on Copper `#A85A27` = 5.1:1).
- 48px touch targets; phone number always a `tel:` link and always reachable.
- Focus: 2px copper ring, 2px offset, everywhere.
- Motion respects `prefers-reduced-motion`.
- LocalBusiness/Plumber JSON-LD on every page for local SEO.

## Published preview

The style guide is also published as a Claude artifact for easy sharing:
https://claude.ai/code/artifact/1d306973-f894-41f2-a64a-37c85d40e0b1

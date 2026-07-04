# Arperture Media — Design System · "The Aperture" v2.1

A cinematic, retro-futurist visual language for **Arperture Media**, an AI creative production studio that makes film-grade video, sound design, and branded stories for brands, artists & storytellers. Every screen is treated like a frame: deliberate, lit, composed in the dark.

- **What they make:** Cinematic AI video — music videos, branded/DTC spots, episodic shorts — produced with generative video models (e.g. Veo 3.1) plus human direction and sound design.
- **Tone:** Cinematic dark · retro-futurist · refined, confident, atmospheric.
- **Tagline:** *Media Marketing for Small Businesses.*
- **Home base:** Arcola, Virginia · **Domain:** arperture.io
- **The name:** "Arperture" is a play on *aperture* — the iris of a camera lens. The logo is a six-blade camera shutter holding a white "A".

> **v2.1 note (from source):** The system was rebuilt on the *official* six-color palette (Soft Coral, Deep Black, Electric Cyan, Neon Purple, Metallic Silver, Main Blue) and the *actual* shutter logo. An earlier draft used a partial palette and an invented iris mark; both were corrected.

---

## Products / surfaces represented

This system describes a **single primary product surface**: the **arperture.io marketing website** — a dark, cinematic studio site (hero, work/case-study grid, services, booking CTA). There is no separate web app or mobile app in the provided materials. The UI kit in `ui_kits/website/` is a high-fidelity recreation of that marketing site, including a lightweight "studio / render queue" dashboard pattern implied by the system's badges, alerts, and project cards.

If a production dashboard or client portal exists elsewhere, it was **not** included in the source — that surface is intentionally left out rather than invented.

---

## Sources I was given

All sources arrived as a single `files.zip` (extracted into `_import/`):

| File | What it is |
|------|-----------|
| `arperture-design.md` | The written design spec (palette, type, tokens, components, patterns, migration notes). Verbatim copy at `_import/arperture-design.md`. |
| `arperture-design-system.html` | A living styleguide page with the full `:root{}` token block, the inline-SVG shutter mark (`#shutter`/`#theA`/`#mark`/`#markGrad` symbols), and rendered component examples. At `_import/arperture-design-system.html`. |
| `logo-primary-blue.svg` | Shutter mark, Main-Blue blades + white "A". |
| `logo-cyan.svg` | Shutter mark, Electric-Cyan blades + white "A" (digital/UI use). |
| `logo-on-white.svg` | Shutter mark, Main-Blue blades + Deep-Black "A" (light backgrounds). |
| `logo-spectrum.svg` | Shutter mark, cyan→purple→coral gradient blades (hero/accent only). |

No Figma file, GitHub repo, or live codebase was provided — the design spec + styleguide HTML are the source of truth. No slide template was provided, so no sample slides were generated.

---

## Fonts

All three families are **free** and loaded via CDN (`@import` in `colors_and_type.css`):

| Role | Family | Source | CDN |
|------|--------|--------|-----|
| Display | **Clash Display** | Fontshare | `api.fontshare.com` |
| Body | **Hanken Grotesk** | Google Fonts | `fonts.googleapis.com` |
| Mono | **Space Mono** | Google Fonts | `fonts.googleapis.com` |

> ⚠️ **Substitution flag:** No local `.ttf`/`.woff2` files were included in the source, so `fonts/` is **not** self-hosted — the CSS pulls the *exact* specified families from their official free CDNs. If you need offline/self-hosted fonts (or a `fonts/` folder for an air-gapped build), download Clash Display from Fontshare and Hanken Grotesk + Space Mono from Google Fonts and drop them in `fonts/` with matching `@font-face` rules. None of these are paid or substituted look-alikes — they are the real specified faces.

---

## CONTENT FUNDAMENTALS

How Arperture writes. The copy voice is **cinematic, confident, and economical** — it sounds like a director's note, not a SaaS landing page.

**Voice & vibe**
- Cinematic and atmospheric, with the texture of a film set / editing suite. Words borrowed from filmmaking: *frame, shot, reel, roll camera, 24 frames a second, master, cut, lit, composed in the dark.*
- Confident and declarative. Short sentences. No hedging, no hype-stacking, no exclamation-mark energy.
- Premium but human — "warm grotesque" body type matches a warm-but-precise tone.

**Person & address**
- Speaks to the client as **"you / your"** ("Your story, at 24 frames a second"), and refers to the studio as **"we / the studio"** ("Tell us about the story…").
- Audience is named explicitly and repeatedly: **"brands, artists & storytellers."**

**Casing & punctuation**
- **Headlines:** sentence case, not title case ("Frame the story", "Your story, at 24 frames a second."). Often end with a period — a deliberate "shutter-click" full stop. The wordmark itself is **"Arperture."** with a cyan period.
- **Kickers / labels / tags / metadata:** `UPPERCASE` mono with wide tracking ("NOW BOOKING · Q3", "MUSIC VIDEO", "00:14:22:08").
- Uses the middot **·** as a separator constantly ("Arcola, VA · arperture.io", "v2.1 · Official palette").
- The ampersand **&** is preferred in the audience phrase ("brands, artists & storytellers").

**Examples of real copy from the system**
- Hero: *"Cinematic AI, shot through the aperture."* / *"Your story, at 24 frames a second."*
- Lead: *"From script to screen — cinematic AI video, sound design, and branded content for brands, artists & storytellers."*
- Status badges: *"● Now booking · Q3"*, *"● Veo 3.1"*, *"✦ Featured"*, *"◆ AI generate"*.
- System alerts (editing-suite texture): *"Render queued. Your 8-shot sequence is processing at 2K. Est. 6 minutes."* · *"Delivered. Final master uploaded to the client drive."* · *"Generation failed. Prompt exceeded shot length. Trim and retry."*
- CTAs: *"Start a project"*, *"Book a discovery call"*, *"Watch the reel →"*, *"Open case study"*.
- Project titles are evocative and specific: *"Late Fee"*, *"10 Extra Hours"*, *"A Day with Death"* — each with a one-line, concrete description ("46-shot road narrative for The Delta Pines, generated in Veo 3.1").

**Emoji & glyphs**
- **No emoji.** Instead, geometric glyph accents are used as bullets/markers inside mono labels: **●** (dot), **✦** (spark / featured), **◆** (diamond / AI), and arrows **→**. These read as "technical UI", not "playful".

---

## VISUAL FOUNDATIONS

The whole system is **dark-first, cinematic, and lit from within**. Think a color-grading suite at night: a near-black room, a few saturated signal colors, soft atmospheric blooms, and fine film grain over everything.

**Color vibe**
- **Deep Black `#1C1C1C` / ink-950 `#0E0E0F` is "the room"** — almost everything sits on near-black layered ink surfaces.
- **Electric Cyan leads** as the primary signal (CTAs, focus, links, active). **Soft Coral** is the warm secondary, reserved for high-intent moments ("Book a call", "Featured"). **Neon Purple** is tertiary — it mostly lives inside gradients for "AI / generate / depth." **Main Blue** does calm structural work; **Metallic Silver** is the chrome neutral and the light end of the ink ramp.
- Rule of restraint: *cyan dominant; coral & purple are emphasis and atmosphere — a little goes far.*
- **Imagery color vibe:** warm-to-cinematic, graded. Thumbnails are rendered as brand **gradients** (Signal / Dusk / Spectrum) with a bottom fade, not flat photos. When real footage is used, expect a darkened/scrimmed, color-graded look so the mark and text stay legible.

**Type**
- Display = **Clash Display** (cinematic confidence, tracking −2% to −3.5%, line-height 0.94–1.1, sentence case).
- Body = **Hanken Grotesk** (warm, human; 60–75 char measure).
- Mono = **Space Mono** (uppercase, 0.18–0.28em tracking) for all kickers, tags, timecodes, metadata. This mono texture is what sells the retro-future / editing-suite concept.

**Spacing & layout**
- 4px base grid; tokens `--sp-1`…`--sp-10` (4 → 128px). Generous section padding (`--sp-9` 96px) gives the dark canvas room to breathe.
- Max content width ~1180px, centered, with `0 24px` gutters.
- **Sticky translucent nav** (`backdrop-filter: blur(14px)` over `rgba(14,14,15,.74)`) — a fixed element that stays through scroll.
- Responsive grids use `repeat(auto-fit, minmax(...))` for work/case-study cards (min ~240px).

**Backgrounds (signature)**
- **Film grain:** a fixed full-viewport fractal-noise SVG overlay at ~4.5% opacity (`body::before`) sits over the entire page — subtle, never crunchy.
- **Atmospheric corner blooms:** large soft radial gradients in cyan (top-left), coral (top-right), purple (bottom-center) at 7–18% opacity (`body::after` and `.pattern::before`) — the "lit in the dark" glow. These are the canonical hero backdrop.
- No flat solid sections — surfaces are layered ink + grain + bloom.

**Gradients**
- **Signal** `linear-gradient(120deg, cyan → coral)` — primary accents, "generate" buttons, text fills.
- **Dusk** `linear-gradient(135deg, blue → purple → coral)` — cinematic blooms, card thumbnails.
- **Spectrum** `conic-gradient(from 210deg, cyan → purple → coral → cyan)` — the mark, iris motifs, hero glow. Used sparingly.

**Borders, cards & shadows**
- Hairline borders: `rgba(255,255,255,.08)` default, `rgba(192,192,192,.20)` strong (silver-tinted).
- **Cards:** surface `--ink-900`, 1px border, radius `--r-lg` (16px), overflow hidden. Thumbnails use a brand gradient with a bottom `--grad-fade`. On hover the card **lifts −4px** and gains `--shadow-lg` + a stronger border. No colored left-border accent cards.
- **Shadow system** is dark and deep (built for a black canvas): `--shadow-sm/md/lg` are pure-black at 45–60% alpha. Elevation reads as depth in the dark, not as a drop shadow on white.
- **Glow** replaces colored shadow for interactive emphasis: `--glow-cyan` (focus/active/primary hover) and `--glow-coral` (coral/spectrum hover) are a 1px colored ring + soft outer bloom.

**Corner radii**
- `--r-sm` 6 · `--r-md` 10 (inputs) · `--r-lg` 16 (cards) · `--r-xl` 24 (large panels) · `--r-full` pill (buttons, badges). Buttons and badges are **fully pill-shaped**; surfaces are softly rounded, never sharp.

**Transparency & blur**
- Blur is used deliberately: the **nav** (translucent + blur) and bloom overlays. Tinted translucent fills (`rgba(accent, .06–.12)`) back badges and alerts. Not a glassmorphism-everywhere look — blur is for the fixed chrome and atmosphere only.

**Hover / press / focus states**
- **Hover:** buttons gain a **glow** (not a darker fill); primary also lightens one step (cyan-400 → cyan-300). Cards lift and brighten their border. Links shift cyan-300 → cyan-200. Ghost buttons get a faint cyan tint wash.
- **Press / active:** a tight **1px downward translate** (`translateY(1px)`) — a physical "click", no scale.
- **Focus-visible:** always a visible `--glow-cyan` ring. Real `<button>`/`<input>` elements; never style-only disabled (use the `disabled` attribute).
- **Disabled:** `--ink-700` fill, `--ink-400` text, `not-allowed` cursor.

**Animation / motion**
- Easing: `--ease-out` `cubic-bezier(.16,1,.3,1)` for entrances/transitions; `--ease-spring` `cubic-bezier(.34,1.56,.64,1)` for the playful mark overshoot (e.g. the logo rotates ~30° on brand hover).
- Durations: `--dur-1` 140ms (micro) → `--dur-4` 640ms (reveals).
- Signature motions: **content reveal** (fade + 22px rise, staggered `.d1–.d4`), and a **slow 80s continuous spin** of the spectrum mark behind the hero (the "aperture turning"). Fades and gentle rises dominate — no harsh bounces except the spring on the mark. Always respects `prefers-reduced-motion`.

---

## ICONOGRAPHY

Arperture's icon approach is **minimal and glyph-led**, not a heavy multi-icon UI.

- **The mark is the hero icon.** The official, polished mark is **`assets/arperture-mark.png`** (2000×2000, transparent) — a six-blade camera shutter with **black blade outlines + outer ring**, **teal `#0097B2` blades**, and a **custom peaked white "A"** in the opening. This is the canonical lockup and the source of truth for the "A" letterform; use it as `<img>`. The earlier inline-SVG marks in `assets/logo-*.svg` (and `mark-symbols.svg`) used a generic "A" and the documented blue/cyan and are kept only as historical reference — **prefer `arperture-mark.png`.**
- ⚠️ **Palette note (flag):** the official mark's teal is **`#0097B2`**, which is deeper than the design spec's documented Electric Cyan `#2ECCFA` / Main Blue `#397F9E`. The written system still leads with Electric Cyan for UI accents; the logo sits slightly apart in true teal. **This is worth reconciling** — see the caveat at delivery.
- **No emoji**, ever. The "icons" in the system are a small set of **geometric Unicode glyphs** used inside mono labels and badges: **●** status dot, **✦** featured/spark, **◆** AI/generate, **→** forward/play. Semantic states pair a **colored dot** with a label (never color alone).
- **There is no bundled icon font or SVG icon set** in the source. For the broader UI (play, arrows, menu, settings, upload, etc.) the system needs line icons that match its precise, technical, retro-future feel.

> ⚠️ **Substitution flag (icons):** Because no icon set was provided, the UI kits use **[Lucide](https://lucide.dev)** (loaded from CDN) as the working icon library — a thin, even-stroke, geometric line set that matches Arperture's precise/technical character and pairs cleanly with the shutter mark. This is a documented substitute, **not** an official Arperture asset. If you have a canonical icon set, drop it into `assets/icons/` and swap the Lucide references.

---

## Index — what's in this design system

**Root files**
- `README.md` — this file (product context, content + visual foundations, iconography, sources).
- `colors_and_type.css` — all foundational tokens (color ramps, semantic colors, type families + scale, spacing, radius, elevation, motion) plus opt-in semantic element styles under `.arperture`.
- `SKILL.md` — Agent-Skills-compatible entry point for using this system.
- `_import/` — verbatim source files (`arperture-design.md`, `arperture-design-system.html`, original logo SVGs).

**`assets/`** — brand visual assets
- `arperture-mark.png` — **the official polished mark** (teal `#0097B2` blades, black outlines + ring, custom white "A"). Canonical; use this.
- `logo-primary-blue.svg`, `logo-cyan.svg`, `logo-on-white.svg`, `logo-spectrum.svg` — earlier inline-SVG lockups (generic "A"); historical reference only.
- `mark-symbols.svg` — inline-able SVG defs (`#mark`, `#markGrad`) for the older recolorable mark.

**`preview/`** — small HTML specimen cards that populate the Design System tab (colors, type, spacing, components, brand).

**`ui_kits/website/`** — high-fidelity recreation of the arperture.io marketing site
- `README.md`, `index.html` (interactive demo), and JSX components.

---

*Arperture Media · Design System "The Aperture" · v2.1 · Arcola, Virginia · arperture.io*

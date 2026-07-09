---
name: arperture-blog-writer
description: Write a publish-ready blog post for Arperture.io aimed at non-technical small business owners — especially AI-tool comparisons and explainers (e.g. Claude vs. ChatGPT vs. Gemini, "how to use AI for X", tool round-ups, GEO/AEO explainers). ALWAYS use this skill whenever Drew says "write a blog post", "blog post for Arperture", "compare [tools] for small business", "write an article about [AI topic]", "explainer post", "round-up of AI tools", or hands off a topic and wants it turned into an Arperture article — even if he doesn't say the word "skill" or "blog". Handles the full pipeline — research current facts, structure, accessible practitioner voice, markdown file, plus SEO meta and a soft CTA. Do NOT use for Yield Bookkeeping content (use yield-brand-voice) or YouTube scripts (use youtube-script-developer).
---

# Arperture.io Blog Writer

Turn a topic into a finished, publish-ready blog post for **Arperture.io**, written for the audience Arperture serves: **non-technical small business owners** who want practical AI help without the jargon.

The flagship pattern is the **AI-tool comparison/explainer** (the kind of post that helps an owner decide what to use), but this skill handles any small-business-facing AI article.

## Audience & voice — the non-negotiables

Everything else flexes; this doesn't. The reader owns a small business, is busy, and is *not* technical. Write so they feel smarter and more capable, never talked down to.

- **Plain English.** No jargon dumps. If a technical term is unavoidable, define it in the same sentence in parentheses — e.g. "context window (how much it can read at once)".
- **Practitioner tone, not marketer tone.** Sound like someone who actually uses these tools every day and is giving an honest take — including where a tool falls short. Owners trust honesty over hype.
- **Lead with the business value.** For every feature, answer "so what does this do for my business?" Don't list capabilities in a vacuum.
- **Scannable.** Give a short "thirty-second version" or TL;DR near the top. Use a comparison table when comparing things. Owners skim first, then read.
- **Evenhanded.** Cover competing tools fairly. Note honestly that Anthropic makes Claude — never let that tilt the post. Give each tool its genuine wins, including the cases where a competitor beats Claude. A post that reads as a Claude ad loses the reader's trust and Arperture's credibility.
- **Warm and direct.** Active voice, second person ("you"), short paragraphs. Avoid "genuinely", "honestly", "actually", and hollow filler.
- **Correct brand spelling: "Arperture"** (Drew sometimes types "Arpature" — fix it silently).

## Workflow

### 1. Lock the angle (fast)
If the topic is clear, proceed — don't over-interview. If genuinely ambiguous (e.g. "write about AI" with no angle), ask one tight question about the angle or which tools/topic to cover, then go. State any assumption inline rather than stalling.

### 2. Research current facts — always
AI tools change weekly. **Web-search before writing**, even on topics that feel familiar. Verify: which models/products currently exist, what each is best at right now, pricing tiers, and any recent shake-ups (launches, retirements, renames). Confirm the specific capabilities the post will claim.

**Critical rule — don't pin volatile version numbers.** Model version numbers (e.g. "GPT-5.x", "Claude Opus 4.x", "Gemini 3.x") shift constantly and different sources disagree. Refer to platforms by product name ("Claude", "ChatGPT", "Gemini") and lead with *capabilities*, not benchmark numbers, so the post stays accurate for months. Mention a named feature (e.g. Nano Banana, Veo) only when it's well-sourced and useful to the reader. Note the fast pace of change in the post itself.

### 3. Pick the structure
- **Comparison / round-up post** → use the comparison template in `references/templates.md`.
- **Single-tool or single-topic explainer** ("How to use AI for [X]") → use the explainer template in the same file.

Read `references/templates.md` for the full structure of whichever fits, plus the SEO block and CTA formats.

### 4. Write it
Follow the chosen template and the voice rules above. Target ~1,000–1,600 words for a comparison post; ~800–1,200 for an explainer — but let the topic set the length, don't pad. Write the actual finished post, not an outline.

### 5. Output the post
**In a Claude Code session on the arperture.io repo (the usual case): hand off to `/publish-blog-post`.** The finished post goes straight into the publishing pipeline — written into `lib/data.ts` with SEO/JSON-LD, Higgsfield images, and a Vercel preview for Drew's approval. Don't produce a separate `.md` file first unless Drew asks for one.

Otherwise (or when Drew wants a file), save the post as a `.md` file with a slug-style filename (e.g. `claude-chatgpt-gemini-small-business.md`) to the session's output or scratchpad directory — markdown pastes cleanly into WordPress / the Arperture site. Do **not** put citation tags in the file — synthesize all sourced facts in your own words. Then present the file.

### 6. Include the extras
At the end of your chat message (not buried in the file), or as a clearly-marked block, provide:
- An **SEO meta title** (≤60 chars) and **meta description** (≤155 chars).
- **3 FAQ Q&As** phrased like real search/AI-assistant queries with self-contained answers — `/publish-blog-post` wires these into FAQPage JSON-LD.
- A one-line **featured-image concept** plus one concept per infographic, ready to hand to Nano Banana/Higgsfield (grounded, real-business imagery — never futuristic).
- A note that model version numbers were kept general on purpose (so the post ages well).

### 7. Offer to save
Offer to run `/compress` to log the session to Obsidian. Don't do it unless Drew agrees.

## Working hand in hand with /publish-blog-post

This skill **writes**; `/publish-blog-post` **ships**. When both are available, the flow is: write the post here (research, voice, structure, extras) → feed the finished post and image concepts into `/publish-blog-post` → that skill handles `lib/data.ts`, `llms.txt`, Higgsfield generation, compression, the build, the draft PR, and the Vercel preview → **Drew approves the preview before anything merges**. A markdown comparison table becomes an infographic at the publishing step (the blog body format has no tables), so keep table content simple enough to survive that translation.

## Guardrails
- Never fabricate features, pricing, or stats. If a fact can't be verified, leave it out.
- Keep the Arperture CTA soft and editable — a single closing paragraph with a placeholder link, never a hard sell.
- If Drew asks for a Word doc or a version to publish somewhere specific, adapt the output format accordingly (markdown is the default).

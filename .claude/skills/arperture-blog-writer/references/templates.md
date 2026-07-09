# Arperture blog templates

Two proven structures, plus the SEO block and CTA formats. Both are modeled on
published posts: the comparison template on "Claude vs. ChatGPT vs. Gemini: A
Plain-English Guide for Small Business Owners" and the explainer/data template
on "The 159.8% ROI Number: Why Small AI Projects Are Beating the Giants".

## Comparison / round-up template

1. **Title** — "[A] vs. [B] vs. [C]: A Plain-English Guide for Small Business
   Owners", or another title that names the decision the reader is facing.
2. **Opening (2 short paragraphs)** — name the decision the reader has been
   putting off, then reassure: there's no wrong answer / the playing field is
   level (price, availability). End para 2 with "here's the thirty-second
   version, then the detail."
3. **The Thirty-Second Version** — one sentence per option, each anchored to a
   one-word identity (the "Breadth / Depth / Ecosystem" pattern). Close with a
   single bolded-in-spirit decision rule: "pick the tool that touches your
   highest-volume task." *(This section pairs with the comparison
   infographic at publish time.)*
4. **What They All Have In Common** — defuse the anxiety; list the shared
   capabilities and shared structure (free tier, ~$20 paid tier, team plans),
   so the differences that follow feel decidable rather than overwhelming.
5. **One H2 per tool** — for each: what it brings to a small business
   (business value, not feature specs), a "Worth knowing:" honest limitation,
   and a "Best for:" one-liner. Keep the per-tool sections the same shape so
   they read as fair.
6. **Comparison table** — markdown table with rows like "In one word / Best
   at / Standout feature / Pick it if…". Keep cells to a few words: at publish
   time this becomes an infographic, not a table.
7. **So Which One Should You Actually Buy?** — the honest answer ("most small
   businesses shouldn't pay for all three"), then a numbered decision path:
   start with your biggest recurring task → test free tiers on real work for
   two weeks → pay for the winner → set ground rules (business accounts, data
   rules, human review of customer-facing output). *(Pairs with the
   decision-path infographic.)*
8. **Adoption close** — the best tool is the one the team actually uses;
   adoption is the strategy.
9. **Soft CTA** — see CTA format below.

## Explainer / data-driven template

1. **Title** — outcome- or number-led ("The 159.8% ROI Number: Why…").
2. **Hook (1–2 paragraphs)** — the problem in the owner's own terms; if
   there's one headline number or claim, put it to work immediately.
3. **TL;DR / thesis paragraph** — what the post will show and why it matters
   to a small business specifically. State Arperture's stance in one line if
   relevant (e.g. "AI as infrastructure, not a stand-in for human judgment").
4. **Themed H2 sections (4–7)** — each makes one point, backed by one
   verified stat or concrete example, and each answers "what does this do for
   my business?" Put the strongest quantitative sections early; they're the
   infographic candidates.
5. **A real-world mini-case** — a client story or named example if one
   exists (e.g. the Yield Bookkeeping content-system story); this is usually
   the most persuasive section in the post.
6. **Common mistakes / what to avoid** — optional but strong for explainers.
7. **Closing** — a question or action the reader can sit with, then the soft
   CTA.

## SEO block format

Provide with every post (these map 1:1 onto `/publish-blog-post` fields):

- **Meta title** ≤60 chars, keyword up front.
- **Meta description** ~150–155 chars, keyword + concrete benefit.
- **Slug** — hyphenated, keyword-rich, no filler words.
- **3 FAQs** — phrased the way a real person asks a search engine or AI
  assistant ("Which AI tool is best for a small business in 2026?"), with
  self-contained 2–4 sentence answers that stand alone out of context. These
  become FAQPage JSON-LD, so no "as mentioned above" references.
- **Category** — "Small Business AI" for owner-facing AI content; match an
  existing site category otherwise.

## Image-concept format

One line each, ready for Higgsfield/Nano Banana:

- **Cover**: a documentary-style photo concept of a real small-business
  moment tied to the post's theme (a specific owner, a specific workplace, a
  specific action). Never futuristic, no robots/holograms, no readable
  signage.
- **Infographic(s)**: name the exact stat or framework to visualize and list
  every word/number the graphic must contain. Brand style: dark charcoal
  #1C1C1C, off-white type, coral #FF6F61 / cyan #2ECCFA / purple #B98CE8
  accents, flat vector, no gradients.

## CTA format

A single closing paragraph, plain text, soft:

> Not sure which of these fits your business — or how to actually build AI
> into your day-to-day without the overwhelm? That's what we do at Arperture.
> Reach out through the contact page and we'll help you [specific promise
> matched to the post's topic].

Never a hard sell, never more than one CTA, always editable by Drew.

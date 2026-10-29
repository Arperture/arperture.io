import type { Metadata } from "next";
import { Kicker } from "@/components/ui";

export const metadata: Metadata = {
  alternates: { canonical: "/brands/" },
  title: "AI Ad Creative & SaaS Demo Videos for DTC and SaaS Brands",
  description:
    "Always-on AI ad creative for DTC brands on Meta and TikTok, plus product demo videos for SaaS teams. Flat monthly or per-video pricing.",
};

const MAILTO = "mailto:contact@arperture.io?subject=DTC%20%2F%20SaaS%20inquiry";

type Tier = { name: string; price: string; note: string };
const OFFER_A: Tier[] = [
  { name: "Pilot", price: "$1.5k", note: "One-time. A batch of test hooks so you can see if it works before committing." },
  { name: "Starter", price: "$2k/mo", note: "A steady monthly batch of new hooks and cutdowns in 9:16 and 4:5." },
  { name: "Growth", price: "$4k/mo", note: "More volume, more angles, faster turnaround for accounts testing weekly." },
];
const OFFER_B: Tier[] = [
  { name: "Hero demo", price: "$2.5k", note: "One polished walkthrough of your product, voiceover and captions included." },
  { name: "Refresh", price: "$3k/mo", note: "Keep demos current as the UI ships, plus short feature cuts each month." },
  { name: "Variant", price: "+$750", note: "Another length, aspect ratio, or audience version of an existing demo." },
];

type Sample = { file: string; title: string; ratio: "9/16" | "4/5" | "16/9"; tag: string };
const SAMPLES: Sample[] = [
  { file: "ondrafy-hook1-9x16", title: "Ondrafy — question hook", ratio: "9/16", tag: "DTC ad · 9:16" },
  { file: "ondrafy-hook3-9x16", title: "Ondrafy — pain-point hook", ratio: "9/16", tag: "DTC ad · 9:16" },
  { file: "ondrafy-hook4-4x5", title: "Ondrafy — pattern interrupt", ratio: "4/5", tag: "DTC ad · 4:5" },
  { file: "terrac-hook1-9x16", title: "Terra-C — question hook", ratio: "9/16", tag: "DTC ad · 9:16" },
  { file: "terrac-hook2-4x5", title: "Terra-C — bold claim", ratio: "4/5", tag: "DTC ad · 4:5" },
  { file: "wovrin-walkthrough-16x9", title: "Wovrin — product walkthrough", ratio: "16/9", tag: "SaaS demo · 16:9" },
  { file: "notion-hero-16x9", title: "Workspace app — hero demo", ratio: "16/9", tag: "SaaS demo · 16:9" },
];

function TierCard({ t, accent }: { t: Tier; accent: string }) {
  return (
    <div className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: accent }}>{t.name}</span>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.6rem" }}>{t.price}</span>
      <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: 0 }}>{t.note}</p>
    </div>
  );
}

function SampleCard({ s }: { s: Sample }) {
  return (
    <figure className="card" style={{ margin: 0, padding: 12, display: "flex", flexDirection: "column", gap: 10, gridColumn: s.ratio === "16/9" ? "span 2" : undefined }}>
      <video
        src={`/media/dtc/${s.file}.mp4`}
        poster={`/media/dtc/${s.file}.jpg`}
        controls
        playsInline
        preload="none"
        style={{ width: "100%", aspectRatio: s.ratio, objectFit: "cover", borderRadius: 10, background: "#000" }}
      />
      <figcaption style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "baseline", flexWrap: "wrap" }}>
        <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{s.title}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-faint)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          {s.tag} · spec concept
        </span>
      </figcaption>
    </figure>
  );
}

const h2: React.CSSProperties = { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.8rem", letterSpacing: "-.02em", margin: "16px 0 12px" };
const lede: React.CSSProperties = { color: "var(--text-muted)", maxWidth: "62ch", margin: "0 0 24px" };
const grid3: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 };

export default function BrandsPage() {
  return (
    <div className="wrap">
      <section style={{ padding: "80px 0 16px" }}>
        <Kicker color="var(--cyan-300)">For DTC &amp; SaaS brands</Kicker>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.2rem,5vw,3.4rem)", letterSpacing: "-.02em", margin: "16px 0 12px", textTransform: "uppercase" }}>
          Ad Creative &amp; Product Demos
        </h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "62ch", fontSize: "1.15rem" }}>
          Same studio, different job. We make AI-assisted ad hooks for paid social and clear demo videos for software. Flat pricing, no long contracts.
        </p>
        <a href={MAILTO} className="btn btn-primary" style={{ marginTop: 12, display: "inline-block" }}>Email contact@arperture.io</a>
      </section>

      <section id="ad-creative" style={{ padding: "40px 0 56px", scrollMarginTop: 100 }}>
        <Kicker>Offer A</Kicker>
        <h2 style={h2}>Always-On AI Ad Creative</h2>
        <p style={lede}>For DTC brands running Meta and TikTok. A fresh supply of hooks and cutdowns every month so your ads don&apos;t go stale.</p>
        <div style={grid3}>{OFFER_A.map((t) => <TierCard key={t.name} t={t} accent="var(--cyan-300)" />)}</div>
      </section>

      <section id="demos" style={{ padding: "32px 0 56px", borderTop: "1px solid var(--border)", scrollMarginTop: 100 }}>
        <Kicker color="var(--purple-300)">Offer B</Kicker>
        <h2 style={h2}>SaaS Product Demo Factory</h2>
        <p style={lede}>Walkthroughs and feature videos for your site, onboarding, and sales team. Easy to update when the product changes.</p>
        <div style={grid3}>{OFFER_B.map((t) => <TierCard key={t.name} t={t} accent="var(--purple-300)" />)}</div>
      </section>

      <section id="samples" style={{ padding: "32px 0 56px", borderTop: "1px solid var(--border)", scrollMarginTop: 100 }}>
        <Kicker color="var(--coral-300)">Samples</Kicker>
        <h2 style={h2}>Recent Work</h2>
        <p style={lede}>These are spec concepts made to show the format, not paid client work.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 16, alignItems: "start" }}>
          {SAMPLES.map((s) => <SampleCard key={s.file} s={s} />)}
        </div>
      </section>

      <section style={{ padding: "56px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <h2 style={{ ...h2, fontSize: "2rem", margin: "0 0 12px" }}>Want To Try It?</h2>
        <p style={{ color: "var(--text-muted)", margin: "0 0 20px" }}>Send a link to your brand or product and what you&apos;re running now.</p>
        <a href={MAILTO} className="btn btn-primary btn-lg">contact@arperture.io</a>
      </section>
    </div>
  );
}

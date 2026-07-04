import type { Metadata } from "next";
import Link from "next/link";
import { Kicker } from "@/components/ui";
import { IMAGE_TIERS, VIDEO_TIERS, ENHANCE_ADDONS, ENHANCE_STEPS, ENHANCE_WHY, ENHANCE_FAQS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Image & Video Enhancement, Restoration & Colorization",
  description:
    "Studio-grade photo and video restoration, upscaling, and black-and-white colorization — professional post-house quality, delivered in days, quoted up front.",
};

type TierData = {
  name: string; tag: string; price: string; unit: string; highlight: boolean;
  borderColor: string; features: string[]; sub?: string; extra?: string;
};

function Tier({ tier }: { tier: TierData }) {
  return (
    <div style={{ position: "relative", background: "var(--surface)", border: `1px solid ${tier.borderColor}`, borderRadius: 16, padding: 28, display: "flex", flexDirection: "column", gap: 12 }}>
      {tier.highlight && (
        <span style={{ position: "absolute", top: -12, left: 24, fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 999, background: "var(--cyan-400)", color: "var(--on-accent)" }}>Most popular</span>
      )}
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.3rem", margin: "4px 0 0" }}>{tier.name}</h3>
      <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: 0 }}>{tier.tag}</p>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 4 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.8rem", color: "var(--cyan-300)" }}>{tier.price}</span>
        <span style={{ color: "var(--text-faint)", fontSize: "0.85rem" }}>{tier.unit}</span>
      </div>
      {tier.sub && <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-faint)" }}>{tier.sub}</span>}
      <ul style={{ margin: tier.sub ? "4px 0 0" : "8px 0 0", paddingLeft: 18, color: "var(--ink-200)", fontSize: "0.85rem", display: "flex", flexDirection: "column", gap: 4 }}>
        {tier.features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      {tier.extra && <span style={{ color: "var(--text-faint)", fontSize: "0.78rem", marginTop: 4 }}>Beyond the package: {tier.extra}</span>}
    </div>
  );
}

export default function EnhancementPage() {
  return (
    <div className="wrap">
      <section style={{ padding: "80px 0 16px" }}>
        <Kicker color="var(--purple-300)">Specialized services · Enhancement, Restoration &amp; Colorization</Kicker>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.2rem,5vw,3.4rem)", letterSpacing: "-.02em", margin: "16px 0 12px", textTransform: "uppercase" }}>
          Bring It Back Sharper Than It Ever Was.
        </h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "65ch", fontSize: "1.15rem", lineHeight: 1.6 }}>
          Studio-grade photo and video restoration, upscaling, and black-and-white colorization — powered by the same enhancement models used by professional post houses, delivered in days, not weeks.
        </p>
        <div style={{ display: "flex", gap: 16, marginTop: 28, flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn-primary btn-lg">Get a Free Quote</Link>
          <a href="#enhancement-tiers" className="btn btn-ghost btn-lg">See the Tiers</a>
        </div>
      </section>

      <section style={{ padding: "32px 0", maxWidth: "72ch" }}>
        <p style={{ color: "var(--text)", fontSize: "1.05rem", lineHeight: 1.7 }}>
          There&apos;s the free app that mangles your grandmother&apos;s face, and there&apos;s the $75-an-hour studio with a three-week backlog. We&apos;re the middle you actually want: professional detail recovery, denoise, and colorization at prices built for real projects — turned around fast, and quoted up front. You send the file. We hand back the version you wish you&apos;d always had.
        </p>
      </section>

      <section id="enhancement-tiers" style={{ padding: "40px 0 8px", borderTop: "1px solid var(--border)", scrollMarginTop: 100 }}>
        <Kicker>Image enhancement &amp; restoration</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2rem", letterSpacing: "-.02em", margin: "16px 0 12px" }}>Old, Faded, Low-Res, or Black &amp; White — Brought Back.</h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "65ch", marginBottom: 32 }}>We clean it up, size it up, and bring the color back.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
          {IMAGE_TIERS.map((t) => <Tier key={t.name} tier={t} />)}
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: 24 }}>
          <strong style={{ color: "var(--text)" }}>Bulk pricing:</strong> 25+ images drops the per-image rate ~35%. Perfect for a whole box of family photos or an archive. Not sure which tier? Send the file — we&apos;ll tell you exactly what it needs before you pay a cent.
        </p>
      </section>

      <section style={{ padding: "56px 0 8px", borderTop: "1px solid var(--border)" }}>
        <Kicker>Video enhancement &amp; restoration</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2rem", letterSpacing: "-.02em", margin: "16px 0 12px" }}>Home Movies and Old Footage, Upscaled To 4K.</h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "65ch", marginBottom: 32 }}>Cleaned up, stabilized, and colorized if you want it — priced by the package, with a simple per-minute rate if you run long.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
          {VIDEO_TIERS.map((t) => <Tier key={t.name} tier={t} />)}
        </div>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: 24 }}>
          Why per minute <em>and</em> per package? The package covers the setup, model-testing, export, and quality-check every job needs no matter how short — the per-minute rate keeps things fair when your footage runs long. Badly degraded source may carry a restoration surcharge; we&apos;ll always tell you in the quote first.
        </p>
      </section>

      <section style={{ padding: "56px 0", borderTop: "1px solid var(--border)" }}>
        <Kicker color="var(--coral-300)">Add-ons &amp; à la carte</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.6rem", letterSpacing: "-.02em", margin: "16px 0 24px" }}>Mix These Into Any Tier</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)" }}>
          {ENHANCE_ADDONS.map((ad) => (
            <div key={ad.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "16px 0", borderBottom: "1px solid var(--border)" }}>
              <span style={{ color: "var(--text)", fontSize: "0.95rem" }}>{ad.label}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--cyan-300)", whiteSpace: "nowrap" }}>{ad.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "56px 0", borderTop: "1px solid var(--border)" }}>
        <Kicker>How it works</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2rem", letterSpacing: "-.02em", margin: "16px 0 32px" }}>From Upload To Unforgettable</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24 }}>
          {ENHANCE_STEPS.map((st) => (
            <div key={st.num} style={{ borderLeft: "2px solid var(--cyan-400)", paddingLeft: 16, display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-faint)" }}>{st.num}</span>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>{st.title}</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{st.body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/contact" className="btn btn-coral btn-lg">Start My Project</Link>
        </div>
      </section>

      <section style={{ padding: "56px 0", borderTop: "1px solid var(--border)" }}>
        <Kicker color="var(--purple-300)">Why Arperture</Kicker>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24, marginTop: 24 }}>
          {ENHANCE_WHY.map((w) => (
            <div key={w.title} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem", margin: 0, color: "var(--text)" }}>{w.title}</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0, lineHeight: 1.6 }}>{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "56px 0", borderTop: "1px solid var(--border)", maxWidth: "72ch" }}>
        <Kicker>FAQ</Kicker>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
          {ENHANCE_FAQS.map((faq) => (
            <div key={faq.q}>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem", margin: "0 0 6px", color: "var(--text)" }}>{faq.q}</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "72px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.2rem", letterSpacing: "-.02em", margin: "0 0 12px" }}>Got Something Worth Saving?</h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "55ch", margin: "0 auto 28px" }}>Send it over for a free, no-obligation quote. We&apos;ll tell you exactly what it needs.</p>
        <Link href="/contact" className="btn btn-primary btn-lg">Get My Free Quote</Link>
      </section>
    </div>
  );
}

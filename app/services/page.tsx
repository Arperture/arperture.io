import type { Metadata } from "next";
import Link from "next/link";
import { Kicker } from "@/components/ui";
import { CORE_OFFERINGS, VERTICALS, PROCESS_STEPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Video Services & Production",
  description:
    "Concept-to-completion AI video production using industry-leading generative video models — film direction, creative direction, and specialized AI verticals.",
};

export default function ServicesPage() {
  return (
    <div className="wrap">
      <section style={{ padding: "80px 0 40px" }}>
        <Kicker>Core offerings</Kicker>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.2rem,5vw,3.4rem)", letterSpacing: "-.02em", margin: "16px 0 12px", textTransform: "uppercase" }}>
          AI video services &amp; production
        </h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "65ch", fontSize: "1.15rem" }}>
          Concept-to-completion AI video production using industry-leading generative video models. Cinematic storytelling reimagined for the AI era.
        </p>
      </section>

      <section style={{ padding: "24px 0 64px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
        {CORE_OFFERINGS.map((o) => (
          <div key={o.title} className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 12 }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.3rem", margin: 0 }}>{o.title}</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", margin: 0 }}>{o.body}</p>
          </div>
        ))}
      </section>

      <section style={{ padding: "40px 0", borderTop: "1px solid var(--border)" }}>
        <Kicker color="var(--purple-300)">Specialized services</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.2rem", letterSpacing: "-.02em", margin: "16px 0 32px" }}>AI-Powered Verticals</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
          {VERTICALS.map((v) => (
            <div key={v.title} className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 10 }}>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>{v.title}</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", margin: 0, flex: 1 }}>{v.body}</p>
              {v.href && (
                <Link href={v.href} className="link-cyan" style={{ alignSelf: "flex-start", fontWeight: 600, fontSize: "0.85rem", padding: "4px 0 0", textDecoration: "none" }}>
                  Learn more →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "56px 0", borderTop: "1px solid var(--border)" }}>
        <Kicker>The process</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.2rem", letterSpacing: "-.02em", margin: "16px 0 32px" }}>From Brief To Screen</h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "60ch", marginBottom: 32 }}>
          A 14-step production pipeline engineered for cinematic AI video — from client brief to final deliverable.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
          {PROCESS_STEPS.map((p) => (
            <div key={p.num} style={{ borderLeft: "2px solid var(--cyan-400)", paddingLeft: 16, display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--text-faint)" }}>{p.num}</span>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem", margin: 0 }}>{p.title}</h4>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--text-muted)", fontSize: "0.85rem", display: "flex", flexDirection: "column", gap: 2 }}>
                {p.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "72px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.4rem", letterSpacing: "-.02em", margin: "0 0 24px" }}>Let&apos;s Build Something Extraordinary.</h2>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn-primary btn-lg">Get in touch</Link>
          <Link href="/portfolio" className="btn btn-ghost btn-lg">View my work</Link>
        </div>
      </section>
    </div>
  );
}

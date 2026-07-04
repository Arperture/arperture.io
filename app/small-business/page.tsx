import type { Metadata } from "next";
import { Kicker } from "@/components/ui";
import CalendlyButton from "@/components/CalendlyButton";
import { CONSULTING_SERVICES, VISIBILITY_SERVICES, CALENDLY_30MIN, CALENDLY_GEO } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Consulting & AI Search Visibility",
  description:
    "AI consulting and Web Visibility audits for small businesses — a real AI roadmap plus SEO, GEO & AEO scoring to find out whether ChatGPT and Google AI Overviews recommend you.",
};

function ServiceCard({ s, accent }: { s: (typeof CONSULTING_SERVICES)[number]; accent: string }) {
  return (
    <div className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 10 }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: accent }}>{s.tag}</span>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.2rem", margin: "4px 0 0" }}>{s.title}</h3>
      <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: 0 }}>{s.body}</p>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-faint)", marginTop: 4 }}>{s.price}</span>
      <ul style={{ margin: "8px 0 0", paddingLeft: 18, color: "var(--ink-200)", fontSize: "0.8rem", display: "flex", flexDirection: "column", gap: 2 }}>
        {s.items.map((it) => <li key={it}>{it}</li>)}
      </ul>
    </div>
  );
}

export default function SmallBusinessPage() {
  return (
    <div className="wrap">
      <section style={{ padding: "80px 0 16px" }}>
        <Kicker color="var(--coral-300)">For small businesses</Kicker>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.2rem,5vw,3.4rem)", letterSpacing: "-.02em", margin: "16px 0 12px", textTransform: "uppercase" }}>
          AI Consulting &amp; AI Search Visibility
        </h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "65ch", fontSize: "1.15rem" }}>
          Cut through the AI hype with a real roadmap, or find out whether ChatGPT and Google AI Overviews recommend you at all.
        </p>
      </section>

      <section id="consulting" style={{ padding: "24px 0 56px", scrollMarginTop: 100 }}>
        <Kicker>Consulting</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.8rem", letterSpacing: "-.02em", margin: "16px 0 24px" }}>Hands-On AI Strategy for Your Operations</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
          {CONSULTING_SERVICES.map((s) => <ServiceCard key={s.title} s={s} accent="var(--coral-300)" />)}
        </div>
        <div style={{ marginTop: 24 }}>
          <a href="https://www.youtube.com/@DrewDoesAI" target="_blank" rel="noopener noreferrer" className="link-cyan" style={{ fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
            Backed by Drew Does AI on YouTube →
          </a>
        </div>
      </section>

      <section id="visibility" style={{ padding: "32px 0 56px", borderTop: "1px solid var(--border)", scrollMarginTop: 100 }}>
        <Kicker color="var(--purple-300)">Search Visibility</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.8rem", letterSpacing: "-.02em", margin: "16px 0 24px" }}>Find Out If AI Recommends You</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
          {VISIBILITY_SERVICES.map((s) => <ServiceCard key={s.title} s={s} accent="var(--purple-300)" />)}
        </div>
      </section>

      <section style={{ padding: "56px 0", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2rem", letterSpacing: "-.02em", margin: "0 0 20px" }}>Ready To Talk?</h2>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <CalendlyButton url={CALENDLY_30MIN} className="btn btn-primary btn-lg">Book a Call</CalendlyButton>
          <CalendlyButton url={CALENDLY_GEO} className="link-cyan" style={{ background: "none", border: "none", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", padding: 0, textDecoration: "underline" }}>
            Or book a GEO Foundation Audit call →
          </CalendlyButton>
        </div>
      </section>
    </div>
  );
}

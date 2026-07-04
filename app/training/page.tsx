import type { Metadata } from "next";
import Link from "next/link";
import { TRAINING_TRACKS } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/training/" },
  title: "Training & Consulting",
  description:
    "Hands-on AI workshops and consulting for creators, brands, and teams integrating AI into their creative workflow — 1:1 sessions, team workshops, and custom curriculum.",
};

export default function TrainingPage() {
  return (
    <div className="wrap">
      <section style={{ padding: "80px 0 16px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.2rem,5vw,3.4rem)", letterSpacing: "-.02em", margin: "16px 0 12px", textTransform: "uppercase" }}>
          Training &amp; consulting
        </h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "65ch", fontSize: "1.15rem" }}>
          Hands-on workshops and consulting for creators, brands, and teams wanting to integrate AI into their creative workflow. Custom curriculum available.
        </p>
      </section>
      <section style={{ padding: "24px 0 64px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
        {TRAINING_TRACKS.map((t) => (
          <div key={t.title} className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 10 }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.2rem", margin: 0 }}>{t.title}</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>{t.body}</p>
          </div>
        ))}
      </section>
      <section style={{ padding: "0 0 80px" }}>
        <Link href="/contact" className="btn btn-coral btn-lg">Ask about a workshop</Link>
      </section>
    </div>
  );
}

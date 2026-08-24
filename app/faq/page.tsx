import type { Metadata } from "next";
import Link from "next/link";
import { Kicker } from "@/components/ui";
import { FAQ_ITEMS } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/faq/" },
  title: "Frequently Asked Questions",
  description:
    "Answers on Arperture's AI video production — cost, timelines, tools, and ownership — plus our small-business AI consulting, fluency training, and Web Visibility services.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: "80px 0 16px" }}>
        <Kicker>Answers</Kicker>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.2rem,5vw,3.4rem)", letterSpacing: "-.02em", margin: "16px 0 12px", textTransform: "uppercase" }}>
          Frequently Asked Questions
        </h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "65ch", fontSize: "1.15rem" }}>
          How our AI video production works — pricing, timelines, tools, and ownership — plus consulting, training, and Web Visibility for small businesses. Don&apos;t see your question? <Link href="/contact" className="link-cyan" style={{ textDecoration: "none" }}>Ask us directly →</Link>
        </p>
      </section>

      <section style={{ padding: "24px 0 56px", maxWidth: "78ch" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {FAQ_ITEMS.map((f, i) => (
            <div
              key={f.q}
              style={{
                padding: "28px 0",
                borderTop: i === 0 ? "1px solid var(--border)" : "none",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.3rem", letterSpacing: "-.01em", margin: "0 0 10px", color: "var(--text)" }}>
                {f.q}
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, margin: 0, maxWidth: "70ch" }}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "48px 0 80px", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <Kicker color="var(--coral-400)">Still have questions?</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.2rem", letterSpacing: "-.02em", margin: "16px 0 24px" }}>Let&apos;s Talk Through Your Project.</h2>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn-primary btn-lg">Get in touch</Link>
          <Link href="/services" className="btn btn-ghost btn-lg">View services</Link>
        </div>
      </section>
    </div>
  );
}

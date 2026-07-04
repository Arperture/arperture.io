import type { Metadata } from "next";
import Link from "next/link";
import { Kicker } from "@/components/ui";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  alternates: { canonical: "/portfolio/" },
  title: "AI Film & Video Production Portfolio",
  description:
    "AI-directed films, music videos, branded content, and experimental work from Arperture Media — including Pick Up Gerald, Yield Bookkeeping, and Judge Silverback's Court.",
};

export default function PortfolioPage() {
  return (
    <div className="wrap">
      <section style={{ padding: "80px 0 16px" }}>
        <Kicker>AI film · creative direction · visual work</Kicker>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.2rem,5vw,3.4rem)", letterSpacing: "-.02em", margin: "16px 0 12px", textTransform: "uppercase" }}>
          AI film &amp; video production portfolio
        </h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "65ch", fontSize: "1.15rem", marginBottom: 48 }}>
          AI-directed films, music videos, branded content, and experimental work.
        </p>
      </section>

      <PortfolioGrid />

      <section style={{ padding: "48px 0 80px", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <Kicker color="var(--text-faint)">More in production</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2rem", letterSpacing: "-.02em", margin: "16px 0 24px" }}>This Portfolio Is Always Growing.</h2>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn btn-coral btn-lg">Work with me</Link>
          <Link href="/services" className="btn btn-ghost btn-lg">View services</Link>
        </div>
      </section>
    </div>
  );
}

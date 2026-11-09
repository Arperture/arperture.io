import type { Metadata } from "next";
import Link from "next/link";
import WorkGrid from "@/components/WorkGrid";
import CalendlyButton from "@/components/CalendlyButton";
import { CALENDLY_30MIN } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/portfolio/" },
  title: "AI Film & Video Production Portfolio",
  description:
    "Client campaigns, spec ads, original films and music videos from Arperture Media, including Yield Bookkeeping, Pick Up Gerald and Judge Silverback's Court.",
};

export default function PortfolioPage() {
  return (
    <div className="wrap">
      <section style={{ padding: "clamp(56px,8vw,104px) 0 40px" }}>
        <h1 className="display" style={{ fontSize: "clamp(3.25rem,9vw,6rem)" }}>The Work</h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "58ch", fontSize: "1.15rem", margin: "20px 0 0" }}>
          Client campaigns, spec ads, original films and music videos. Hover a piece to play it,
          click for the full film. Spec work is labeled spec.
        </p>
      </section>

      <WorkGrid filters />

      <section className="section" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 32, flexWrap: "wrap" }}>
        <div>
          <h2 className="h-section">Want Yours on This Wall?</h2>
          <p style={{ color: "var(--text-muted)", margin: "14px 0 0", maxWidth: "46ch" }}>
            Book a call or send a message. Case studies for{" "}
            <Link href="/portfolio/yield/" className="text-link">Yield Bookkeeping</Link> and{" "}
            <Link href="/portfolio/judge/" className="text-link">Judge Silverback&apos;s Court</Link> go deeper.
          </p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <CalendlyButton url={CALENDLY_30MIN} className="btn btn-primary btn-lg">Book a discovery call</CalendlyButton>
          <Link href="/contact/" className="btn btn-line btn-lg">Contact</Link>
        </div>
      </section>
    </div>
  );
}

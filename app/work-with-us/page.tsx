import type { Metadata } from "next";
import { Kicker, H1 } from "@/components/ui";
import CalendlyButton from "@/components/CalendlyButton";
import { CALENDLY_30MIN } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/work-with-us/" },
  title: "Work With Us — Arperture Media",
  description:
    "AI-powered video production for local businesses and DTC brands. Download the offer sheet or the UGC creative retainer sheet — or start with a free 30-second spec video of your business.",
};

function DownloadCard({
  tag,
  title,
  body,
  points,
  href,
  cta,
  accent,
}: {
  tag: string;
  title: string;
  body: string;
  points: string[];
  href: string;
  cta: string;
  accent: string;
}) {
  return (
    <div className="card" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 10 }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: accent }}>{tag}</span>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.6rem", letterSpacing: "-.02em", margin: "4px 0 0" }}>{title}</h2>
      <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", margin: 0, maxWidth: "52ch" }}>{body}</p>
      <ul style={{ margin: "8px 0 0", paddingLeft: 18, color: "var(--ink-200)", fontSize: "0.85rem", display: "flex", flexDirection: "column", gap: 4 }}>
        {points.map((p) => <li key={p}>{p}</li>)}
      </ul>
      <div style={{ marginTop: 16 }}>
        <a href={href} className="btn btn-primary" style={{ textDecoration: "none" }}>
          {cta}
        </a>
      </div>
    </div>
  );
}

export default function WorkWithUsPage() {
  return (
    <div className="wrap">
      <section style={{ padding: "80px 0 16px" }}>
        <Kicker color="var(--cyan-300)">Work with us</Kicker>
        <H1>Video that looks like it cost ten times more.</H1>
        <p style={{ color: "var(--text-muted)", maxWidth: "65ch", fontSize: "1.15rem" }}>
          Arperture is an AI-powered video production company for local small businesses and
          direct-to-consumer brands. AI does the heavy lifting, so you get the quality of a
          full production crew at a fraction of the cost — and every video ships optimized
          so AI search can find and cite your business.
        </p>
      </section>

      <section style={{ padding: "32px 0 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 20 }}>
          <DownloadCard
            tag="For local businesses"
            title="The Offer Sheet"
            body="Everything we make for Loudoun County–area small businesses, on one page. Start with a free 30-second spec video of your own business — made before you pay anything."
            points={[
              "Free 30-second spec demo of your business",
              "Launch / brand video — $2,500–$5,000",
              "Monthly content retainer — $1,500–$2,000/mo",
              "Visibility Engine (video + AI-search optimization) — $2,500–$3,000/mo",
            ]}
            href="/downloads/arperture-offer-sheet.pdf"
            cta="Download the offer sheet (PDF)"
            accent="var(--cyan-300)"
          />
          <DownloadCard
            tag="For DTC & e-commerce brands"
            title="The UGC Retainer Sheet"
            body="A creative department for brands that run Meta ads. Fresh UGC-style ad creative every month — concepts, hook variations, and a readout on what won."
            points={[
              "Monthly creative sprints: concepts × hook matrix",
              "UGC presenters, product demos, testimonial-style spots",
              "9:16, 1:1, and 16:9 cuts of every winner",
              "Starter $1,500/mo · Growth $2,500/mo · Scale $4,000/mo",
            ]}
            href="/downloads/arperture-ugc-retainer-sheet.pdf"
            cta="Download the retainer sheet (PDF)"
            accent="var(--coral-300)"
          />
        </div>
      </section>

      <section style={{ padding: "56px 0 72px", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <Kicker color="var(--cyan-300)">Start with the free one</Kicker>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2rem", letterSpacing: "-.02em", margin: "16px 0 12px" }}>
          We&apos;ll make you a 30-second video. Free.
        </h2>
        <p style={{ color: "var(--text-muted)", maxWidth: "58ch", margin: "0 auto 24px", fontSize: "1rem" }}>
          Pick a business, any business — we&apos;ll produce a 30-second spec spot for it before
          you spend a dollar. If you love it, we&apos;ll talk about what comes next. If not,
          keep the video anyway.
        </p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <CalendlyButton url={CALENDLY_30MIN} className="btn btn-primary btn-lg">Book a Call</CalendlyButton>
          <a href="mailto:drew@arperture.io" className="link-cyan" style={{ fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
            Or email drew@arperture.io →
          </a>
        </div>
      </section>
    </div>
  );
}

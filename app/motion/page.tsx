import type { Metadata } from "next";
import Link from "next/link";
import CalendlyButton from "@/components/CalendlyButton";
import HeroPhone from "@/components/motion/HeroPhone";
import Marquee from "@/components/motion/Marquee";
import PackageCard from "@/components/motion/PackageCard";
import StyleGallery from "@/components/motion/StyleGallery";
import { MOTION_STYLES_READY, styleNumber, styleForWhom } from "@/lib/motion-styles";
import FoundingOffer, { FoundingSwap } from "@/components/motion/Founding";
import {
  MOTION_PACKAGES, MOTION_BUMPER, MOTION_FROM, MOTION_ADDON, MOTION_FOUNDING, MOTION_STEPS, MOTION_TERMS, MOTION_FAQS,
  motionCalendlyUrl, SITE_URL,
} from "@/lib/data";

// The gallery section only renders once at least one style has its clip on disk.
const READY_STYLE_COUNT = MOTION_STYLES_READY.length;
const DESCRIPTION =
  `Feed in Motion turns your social posts into short motion graphics videos, from $${MOTION_FROM}. For Loudoun County small businesses, by Arperture Media in Leesburg, VA.`;

// Service, price and FAQ structured data for this page. Monthly plans carry a
// per-month price specification; one-offs a plain price.
const PAGE_URL = `${SITE_URL}/motion/`;
const offer = (name: string, description: string, price: number, monthly: boolean) => ({
  "@type": "Offer",
  name,
  url: `${PAGE_URL}#packages`,
  priceCurrency: "USD",
  ...(monthly
    ? { priceSpecification: { "@type": "UnitPriceSpecification", price, priceCurrency: "USD", unitCode: "MON", unitText: "month" } }
    : { price }),
  itemOffered: { "@type": "Service", name, description },
});
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Feed in Motion",
      serviceType: "Motion graphics video for social media",
      description:
        "Social media posts rebuilt as 10 to 15 second motion graphics videos with music and sound, plus logo animations and 30-second promos, for small businesses.",
      url: PAGE_URL,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Loudoun County, Virginia" },
        { "@type": "City", name: "Leesburg, Virginia" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Feed in Motion packages",
        itemListElement: [
          offer(MOTION_BUMPER.name, `${MOTION_BUMPER.body} ${MOTION_BUMPER.features.join(". ")}.`, MOTION_BUMPER.price, false),
          ...MOTION_PACKAGES.map((p) => offer(p.name, `${p.features.join(". ")}.`, p.price, p.unit.includes("month"))),
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: MOTION_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export const metadata: Metadata = {
  alternates: { canonical: "/motion/" },
  title: "Feed in Motion: Motion Video Posts for Loudoun Small Businesses",
  description: DESCRIPTION,
  openGraph: {
    title: "Feed in Motion: your social posts, rebuilt as motion video",
    description: DESCRIPTION,
    url: "/motion/",
    images: [{ url: "/assets/og-motion.jpg", width: 1200, height: 630, alt: "A phone showing a bakery's social post rebuilt as a motion piece: Warm by 7am." }],
  },
  twitter: { card: "summary_large_image", title: "Feed in Motion", description: DESCRIPTION, images: ["/assets/og-motion.jpg"] },
};

export default function MotionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      <div className="wrap">
        {/* HERO */}
        <section className="fim-hero">
          <div className="fim-hero-copy">
            <p className="fim-label">
              <FoundingSwap
                open={<>Now booking · {MOTION_FOUNDING.total} founding spots · Leesburg, VA</>}
                closed={<>Now booking · Leesburg, VA</>}
              />
            </p>
            <h1 className="display fim-h1">Your feed, in motion.</h1>
            <p className="fim-lede">
              We turn the posts you already make into short motion pieces people stop scrolling for.
              Built for Loudoun County small businesses.
            </p>
            <div className="fim-actions">
              <FoundingSwap
                open={<a href="#founding" className="btn btn-primary btn-lg">Claim a founding spot</a>}
                closed={<CalendlyButton url={motionCalendlyUrl("hero")} className="btn btn-primary btn-lg">Book a discovery call</CalendlyButton>}
              />
              <a href="#packages" className="btn btn-line btn-lg">See the packages</a>
            </div>
            <ul className="fim-meta">
              <li>From ${MOTION_FROM}</li>
              <li>5 business days</li>
              <li>Vertical + square</li>
            </ul>
          </div>
          <HeroPhone />
        </section>
      </div>

      <Marquee />

      <div className="wrap">
        {/* HOW IT WORKS */}
        <section id="how" className="section" style={{ borderTop: 0, scrollMarginTop: 90 }}>
          <div className="section-head">
            <h2 className="h-section">Same Shop. Same Offer. Now It Moves.</h2>
            <p>
              A motion post is one of your social media posts rebuilt as a 10 to 15 second animated
              video. It is motion graphics: moving type, your product and your logo, with music and
              sound, sized for Instagram, Facebook and TikTok.
            </p>
          </div>
          <ol className="fim-steps">
            {MOTION_STEPS.map((s) => (
              <li key={s.n} className="card">
                <span className="fim-step-n">Step {s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* PACKAGES */}
        <section id="packages" className="section" style={{ scrollMarginTop: 90 }}>
          <div className="section-head">
            <h2 className="h-section">Packages and Prices</h2>
            <p>
              Each sample below starts as a flat post and comes alive as you reach it. That is the
              whole service in one move.
            </p>
          </div>
          <article className="fim-bumper">
            <div className="fim-bumper-main">
              <span className="fim-badge">{MOTION_BUMPER.badge}</span>
              <h3>{MOTION_BUMPER.name}</h3>
              <p>{MOTION_BUMPER.body}</p>
            </div>
            <ul>
              {MOTION_BUMPER.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <div className="fim-bumper-buy">
              <p className="fim-price">
                <span>${MOTION_BUMPER.price}</span>
                <small> {MOTION_BUMPER.unit}</small>
              </p>
              <CalendlyButton url={motionCalendlyUrl("logo-bumper")} className="btn btn-line btn-sm">
                {MOTION_BUMPER.cta}
              </CalendlyButton>
            </div>
          </article>
          <div className="fim-packs">
            {MOTION_PACKAGES.map((p) => <PackageCard key={p.id} pkg={p} />)}
          </div>
          <p className="fim-addon"><b>{MOTION_ADDON.title}</b> {MOTION_ADDON.body}</p>
          <p className="fim-note">
            The shops in these samples are made up for demonstration. Your version gets your name,
            your offer and your town.
          </p>
        </section>

        {/* STYLE GALLERY */}
        {READY_STYLE_COUNT > 0 && (
          <section id="styles" className="section" style={{ scrollMarginTop: 90 }}>
            <div className="section-head">
              <h2 className="h-section">Pick a Motion Graphics Style</h2>
              <p>
                Every style is a 15-second sample made for a kind of business. Search for yours,
                hover or tap a tile to wake it, and open one to watch it full size.
              </p>
            </div>
            <StyleGallery />
            <details className="fim-index">
              <summary>All {READY_STYLE_COUNT} styles as a list</summary>
              <ul>
                {MOTION_STYLES_READY.map((st) => (
                  <li key={st.n}>
                    <a href={`#style-${styleNumber(st)}`}>{st.name}</a> for {styleForWhom(st)}
                  </li>
                ))}
              </ul>
            </details>
          </section>
        )}

        <FoundingOffer />

        {/* TERMS */}
        <section id="terms" className="section" style={{ scrollMarginTop: 90 }}>
          <div className="section-head">
            <h2 className="h-section">Simple Terms</h2>
            <p>The fine print, up front.</p>
          </div>
          <dl className="fim-terms">
            {MOTION_TERMS.map((t) => (
              <div key={t.title}>
                <dt>{t.title}</dt>
                <dd>{t.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* FAQ */}
        <section id="faq" className="section" style={{ scrollMarginTop: 90 }}>
          <div className="section-head">
            <h2 className="h-section">Common Questions</h2>
          </div>
          <div className="fim-faq">
            {MOTION_FAQS.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOOK */}
        <section id="book" className="section" style={{ paddingBottom: "clamp(72px,10vw,128px)", scrollMarginTop: 90 }}>
          <h2 className="display" style={{ fontSize: "clamp(3rem,8vw,6rem)", maxWidth: "12ch" }}>
            Start With One Post.
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", maxWidth: "46ch", margin: "20px 0 32px" }}>
            Book a free 30-minute discovery call. Bring one post you wish had done better.
          </p>
          <div className="fim-actions">
            <CalendlyButton url={motionCalendlyUrl("book-section")} className="btn btn-primary btn-lg">
              Book a discovery call
            </CalendlyButton>
            <Link href="/portfolio/" className="btn btn-line btn-lg">See more work</Link>
          </div>
        </section>
      </div>
    </>
  );
}

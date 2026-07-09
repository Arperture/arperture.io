import type { Metadata } from "next";
import Script from "next/script";
import "./colors_and_type.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_URL, DEFAULT_OG_IMAGE, ORG_JSONLD } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arperture — AI Consulting, Training & Web Visibility for Small Businesses",
    template: "%s · Arperture",
  },
  description:
    "Arperture helps small businesses put AI to work — hands-on AI consulting, team fluency training, and Web Visibility audits (SEO, GEO & AEO). Plus cinematic AI video production from the studio.",
  keywords: [
    "AI consulting for small business", "AI fluency training", "web visibility audit",
    "SEO GEO AEO", "AI adoption", "AI implementation consulting",
    "AI video production", "cinematic AI video", "video restoration",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Arperture",
    title: "Arperture — AI Consulting, Training & Web Visibility for Small Businesses",
    description:
      "Hands-on AI consulting, team fluency training, and Web Visibility audits for small businesses — plus cinematic AI video production.",
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 670, alt: "Arperture — AI consulting, training & visibility for small businesses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arperture — AI Consulting, Training & Web Visibility for Small Businesses",
    description:
      "Hands-on AI consulting, team fluency training, and Web Visibility audits for small businesses — plus cinematic AI video production.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body
        className="arperture"
        style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)", minHeight: "100vh", position: "relative" }}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }} />
        <div className="bloom" />
        <Nav />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

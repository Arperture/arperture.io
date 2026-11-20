import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./colors_and_type.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_URL, DEFAULT_OG_IMAGE, ORG_JSONLD } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arperture Media — Digital Video Production for Small Businesses",
    template: "%s · Arperture Media",
  },
  description:
    "Digital video production for small businesses: motion graphics for social media, brand films, ads and short-form content from a Leesburg, Virginia studio.",
  keywords: [
    "digital video production for small business", "motion graphics for small business",
    "animated social media posts", "logo animation", "brand films", "social video ads",
    "AI ad creative", "Leesburg VA video production", "Loudoun County video production",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Arperture Media",
    title: "Arperture Media — Digital Video Production for Small Businesses",
    description:
      "Motion graphics for social media, brand films and ads for small businesses, made in Leesburg, Virginia at small-business prices.",
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "The Arperture Media homepage: Motion video for Main Street, with a phone showing a bakery post in motion." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arperture Media — Digital Video Production for Small Businesses",
    description:
      "Motion graphics for social media, brand films and ads for small businesses, made in Leesburg, Virginia at small-business prices.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body
        className="arperture"
        style={{ background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)", minHeight: "100vh", position: "relative" }}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }} />
        <a href="#main" className="skip-link">Skip to content</a>
        <Nav />
        <main id="main" style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
        <Analytics />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
        <Script
          id="hs-script-loader"
          src="https://js-na2.hs-scripts.com/246923256.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

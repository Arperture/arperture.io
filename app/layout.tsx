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
    default: "Arperture Media — AI Video Production for Small Businesses",
    template: "%s · Arperture Media",
  },
  description:
    "Cinematic AI video production for small businesses — brand films, ads, and short-form social content, scripted, directed, and scored like a full production crew at small-business prices.",
  keywords: [
    "AI video production for small business", "cinematic AI video", "brand films",
    "social video ads", "AI video studio", "AI commercials", "AI music videos",
    "AI ad creative", "Leesburg VA video production",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Arperture Media",
    title: "Arperture Media — AI Video Production for Small Businesses",
    description:
      "Cinematic brand films, ads, and social content, directed and scored like a full production crew, at small-business prices.",
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 670, alt: "Arperture Media — AI video production for small businesses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arperture Media — AI Video Production for Small Businesses",
    description:
      "Cinematic brand films, ads, and social content, directed and scored like a full production crew, at small-business prices.",
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

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
    default: "Arperture Media — Cinematic AI Video Production",
    template: "%s · Arperture Media",
  },
  description:
    "Arperture Media is a cinematic AI creative studio — film-grade video, sound design, and branded stories for brands, artists & storytellers.",
  keywords: [
    "AI video production", "cinematic AI video", "AI film", "generative video",
    "AI creative studio", "AI consulting", "SEO GEO AEO", "video restoration",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Arperture Media",
    title: "Arperture Media — Cinematic AI Video Production",
    description:
      "Film-grade AI video, sound design, and branded stories for brands, artists & storytellers.",
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, width: 2000, height: 1116, alt: "Arperture Media — cinematic AI video" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arperture Media — Cinematic AI Video Production",
    description:
      "Film-grade AI video, sound design, and branded stories for brands, artists & storytellers.",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: { icon: "/assets/arperture-mark.webp" },
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

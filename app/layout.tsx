import type { Metadata } from "next";
import Script from "next/script";
import "./colors_and_type.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SITE_URL = "https://arperture.io";

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
  openGraph: {
    type: "website",
    siteName: "Arperture Media",
    title: "Arperture Media — Cinematic AI Video Production",
    description:
      "Film-grade AI video, sound design, and branded stories for brands, artists & storytellers.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Arperture Media — Cinematic AI Video Production",
    description:
      "Film-grade AI video, sound design, and branded stories for brands, artists & storytellers.",
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
        <div className="bloom" />
        <Nav />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

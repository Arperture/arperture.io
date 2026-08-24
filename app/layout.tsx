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
    default: "Arperture — AI Video Production for Small Businesses",
    template: "%s · Arperture",
  },
  description:
    "Cinematic AI video production for small businesses — brand films, ads, and social content at small-business prices. Plus AI consulting, team fluency training, and Web Visibility audits (SEO, GEO & AEO).",
  keywords: [
    "AI video production for small business", "cinematic AI video", "brand films",
    "social video ads", "AI video studio", "AI consulting for small business",
    "AI fluency training", "web visibility audit", "SEO GEO AEO",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Arperture",
    title: "Arperture — AI Video Production for Small Businesses",
    description:
      "Cinematic brand films, ads, and social content at small-business prices — plus AI consulting, team training, and Web Visibility audits.",
    url: SITE_URL,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 670, alt: "Arperture — AI video production for small businesses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arperture — AI Video Production for Small Businesses",
    description:
      "Cinematic brand films, ads, and social content at small-business prices — plus AI consulting, team training, and Web Visibility audits.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}}catch(e){}",
          }}
        />
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
        <Script
          id="hs-script-loader"
          src="https://js-na2.hs-scripts.com/246923256.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

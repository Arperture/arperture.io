import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS_A, FOOTER_LINKS_B, EMAIL, PHONE, PHONE_TEL, SOCIAL_LINKS } from "@/lib/data";

const footerLinkStyle: React.CSSProperties = {
  color: "var(--text-muted)", fontSize: "0.9rem", textDecoration: "none", textAlign: "left",
};
const colLabel: React.CSSProperties = {
  fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.18em",
  textTransform: "uppercase", color: "var(--cyan-300)", margin: "0 0 4px",
};

export default function Footer() {
  return (
    <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid var(--border)", marginTop: 40 }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 24px 32px", display: "flex", justifyContent: "space-between", gap: 48, flexWrap: "wrap" }}>
        <div style={{ maxWidth: 320, display: "flex", flexDirection: "column", gap: 12 }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            <Image src="/assets/arperture-mark.webp" alt="Arperture" width={26} height={26} style={{ display: "block" }} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.05rem", color: "var(--text)" }}>
              Arperture<b style={{ color: "var(--cyan-400)" }}>.</b>
            </span>
          </Link>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>
            Cinematic AI video for small businesses — brand films, ads, and social content. Plus AI consulting, training, and visibility audits.
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-faint)", margin: 0 }}>
            Based in USA · Working Globally
          </p>
        </div>
        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={colLabel}>Quick links</p>
            {FOOTER_LINKS_A.map((f) => (
              <Link key={f.label} href={f.href} style={footerLinkStyle}>{f.label}</Link>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={colLabel}>More</p>
            {FOOTER_LINKS_B.map((f) => (
              <Link key={f.label} href={f.href} style={footerLinkStyle}>{f.label}</Link>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p style={colLabel}>Connect</p>
            <a href={`mailto:${EMAIL}`} style={footerLinkStyle}>{EMAIL}</a>
            <a href={`tel:${PHONE_TEL}`} style={footerLinkStyle}>{PHONE}</a>
            {SOCIAL_LINKS.map((soc) => (
              <a key={soc.key} href={soc.url} target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>
                {soc.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: 24, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-faint)", margin: 0 }}>
          © 2026 Arperture Media. All rights reserved.
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-faint)", margin: 0 }}>
          AI Video Production · Consulting · Training · Visibility
        </p>
      </div>
    </footer>
  );
}

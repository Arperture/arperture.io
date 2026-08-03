import Link from "next/link";
import { EMAIL, PHONE, PHONE_TEL, SOCIAL_LINKS } from "@/lib/data";
import { Wordmark } from "./Workbench";

const colLabel: React.CSSProperties = {
  fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.08em",
  textTransform: "uppercase", color: "var(--text-faint)", margin: "0 0 4px",
};
const footA: React.CSSProperties = { fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--text-muted)", textDecoration: "none" };

export default function Footer() {
  return (
    <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid var(--border)", background: "var(--surface)", marginTop: 40 }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "52px 24px 40px", display: "flex", gap: 40, flexWrap: "wrap" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 300, flex: "1 1 260px" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Wordmark size={20} />
          </Link>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
            Hands-on AI for local business — consulting, fluency training, and web-visibility audits. Plus a cinematic AI film studio.
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.03em", color: "var(--text-faint)", margin: 0 }}>
            LEESBURG, VA · WORKING GLOBALLY
          </p>
        </div>

        <div style={{ display: "flex", gap: 48, flexWrap: "wrap", flex: "2 1 480px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 150 }}>
            <p style={colLabel}>Small business</p>
            <Link href="/small-business#consulting" style={footA}>AI Consulting</Link>
            <Link href="/small-business" style={footA}>AI Fluency Training</Link>
            <Link href="/small-business#visibility" style={footA}>Web Visibility Audit</Link>
            <Link href="/about" style={footA}>About</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 150 }}>
            <p style={colLabel}>Studio</p>
            <Link href="/portfolio" style={footA}>Portfolio</Link>
            <Link href="/portfolio" style={footA}>Pick Up Gerald</Link>
            <Link href="/portfolio/yield" style={footA}>Yield Bookkeeping</Link>
            <Link href="/contact" style={footA}>Work with us</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 150 }}>
            <p style={colLabel}>Connect</p>
            <a href={`mailto:${EMAIL}`} style={footA}>{EMAIL}</a>
            <a href={`tel:${PHONE_TEL}`} style={footA}>{PHONE}</a>
            <div style={{ display: "flex", gap: 14, marginTop: 2, flexWrap: "wrap" }}>
              {SOCIAL_LINKS.map((soc) => (
                <a key={soc.key} href={soc.url} target="_blank" rel="noopener noreferrer" style={footA}>
                  {soc.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-faint)", margin: 0 }}>
            © 2026 ARPERTURE MEDIA · ALL RIGHTS RESERVED
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.04em", color: "var(--ember)", margin: 0 }}>
            AI CONSULTING · TRAINING · VISIBILITY · FILM
          </p>
        </div>
      </div>
    </footer>
  );
}

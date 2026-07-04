import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { EMAIL, PHONE, PHONE_TEL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. We'll get back to you within two business days with a treatment direction and a quote.",
};

export default function ContactPage() {
  return (
    <div className="wrap">
      <section className="grid-contact" style={{ padding: "80px 0 40px", display: "grid", gap: 48, alignItems: "start" }}>
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 999, background: "rgba(46,204,250,.12)", color: "var(--cyan-300)" }}>● Now booking · Q3</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.2rem,5vw,3rem)", letterSpacing: "-.02em", margin: "16px 0 12px", textTransform: "uppercase" }}>
            Your story,<br />at 24 frames a second.
          </h1>
          <p style={{ color: "var(--text-muted)", maxWidth: "44ch", fontSize: "1.05rem", lineHeight: 1.6 }}>
            Tell us about the project. We&apos;ll get back to you within two business days with a treatment direction and a quote.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", padding: "8px 14px", borderRadius: 999, background: "rgba(255,111,97,.12)", color: "var(--coral-300)" }}>Based in USA · Working Globally</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", padding: "8px 14px", borderRadius: 999, background: "rgba(46,204,250,.12)", color: "var(--cyan-300)" }}>{EMAIL}</span>
            <a href={`tel:${PHONE_TEL}`} style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", padding: "8px 14px", borderRadius: 999, background: "rgba(46,204,250,.12)", color: "var(--cyan-300)", textDecoration: "none" }}>{PHONE}</a>
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}

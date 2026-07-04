import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy/" },
  title: "Privacy Policy",
  description: "How Arperture Media collects, uses, and protects information submitted through arperture.io.",
};

export default function PrivacyPage() {
  return (
    <div className="wrap">
      <section style={{ padding: "80px 0", maxWidth: "70ch" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.4rem", letterSpacing: "-.02em", margin: "16px 0 24px", textTransform: "uppercase" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
          Arperture Media (&quot;we&quot;, &quot;us&quot;) respects your privacy. This page describes what information we collect through arperture.io, how we use it, and the choices you have.
        </p>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.2rem", margin: "32px 0 8px" }}>Information we collect</h3>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
          Contact details you submit through our booking and contact forms (name, email, project brief), and standard analytics data (pages visited, referring source).
        </p>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.2rem", margin: "32px 0 8px" }}>How we use it</h3>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
          To respond to inquiries, scope and deliver projects, and improve this site. We do not sell your information.
        </p>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.2rem", margin: "32px 0 8px" }}>Contact</h3>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>Questions about this policy: contact@arperture.io.</p>
      </section>
    </div>
  );
}

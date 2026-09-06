import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/about/" },
  title: "About Arperture Media",
  description:
    "Arperture Media is a Leesburg, Virginia AI video production and consulting studio founded by Andrew Dallons — treating generative video as a filmmaking tool, not a shortcut.",
};

export default function AboutPage() {
  return (
    <div className="wrap">
      <section className="grid-about" style={{ padding: "80px 0 40px", display: "grid", gap: 40, alignItems: "start" }}>
        <Image
          src="/assets/about-headshot.jpg"
          alt="Andrew Dallons, founder of Arperture Media"
          width={220}
          height={220}
          style={{ width: 220, height: 220, borderRadius: "50%", objectFit: "cover", border: "1px solid var(--border)" }}
        />
        <div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2rem,4.5vw,3rem)", letterSpacing: "-.02em", margin: "16px 0 12px", textTransform: "uppercase" }}>
            About Arperture Media
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", maxWidth: "60ch", lineHeight: 1.6 }}>
            Arperture Media is a Leesburg, Virginia AI video production and consulting studio founded by Andrew Dallons. Often shortened to Arperture, the studio treats generative video as a filmmaking tool, not a shortcut — every project is directed, scored, and graded like a real production.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: "60ch", lineHeight: 1.6, marginTop: 16 }}>
            Work spans music videos, branded spots, documentary trailers, and original series — built with Veo, Kling, Runway, Midjourney, Eleven Labs, and Suno, then finished in a traditional edit and color pipeline. Arperture also runs hands-on AI consulting, team fluency training, and Web Visibility audits for small businesses.
          </p>
        </div>
      </section>
      <section style={{ padding: "0 0 80px" }}>
        <Link href="/contact" className="btn btn-coral btn-lg">Get in touch</Link>
      </section>
    </div>
  );
}

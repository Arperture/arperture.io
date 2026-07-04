import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from the edit bay — process, tools, and craft behind cinematic AI video production from Arperture Media.",
};

export default function BlogPage() {
  return (
    <div className="wrap">
      <section style={{ padding: "80px 0 16px" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.2rem,5vw,3.2rem)", letterSpacing: "-.02em", margin: "16px 0 12px", textTransform: "uppercase" }}>
          Blog
        </h1>
        <p style={{ color: "var(--text-muted)", maxWidth: "60ch", fontSize: "1.1rem" }}>
          Notes from the edit bay — process, tools, and the occasional rant about prompt grammar.
        </p>
      </section>
      <section style={{ padding: "24px 0 80px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
        {BLOG_POSTS.map((b) => (
          <div key={b.id} className="card" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <Link href={`/blog/${b.slug}`} aria-label={`Read ${b.title}`} style={{ display: "block", width: "100%", height: 140, position: "relative" }}>
              <Image src={b.coverSrc} alt={b.title} fill sizes="(max-width: 640px) 100vw, 33vw" style={{ objectFit: "cover" }} />
            </Link>
            <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.08em", color: "var(--text-faint)" }}>{b.date}</span>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.1rem", margin: 0 }}>
                <Link href={`/blog/${b.slug}`} className="blog-title-link">{b.title}</Link>
              </h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", margin: 0 }}>{b.excerpt}</p>
              <Link href={`/blog/${b.slug}`} className="link-cyan" style={{ alignSelf: "flex-start", fontWeight: 600, fontSize: "0.85rem", padding: "4px 0 0", textDecoration: "none" }}>Read post →</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

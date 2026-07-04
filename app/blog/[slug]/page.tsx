import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/data";
import BlogShare from "@/components/BlogShare";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      images: [post.coverSrc],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  // Structured data for SEO / GEO / answer engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        image: `https://arperture.io${post.coverSrc}`,
        articleSection: post.category,
        author: { "@type": "Organization", name: "Arperture Media" },
        publisher: { "@type": "Organization", name: "Arperture Media" },
        url: `https://arperture.io/blog/${post.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="wrap">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ padding: "64px 0 32px", maxWidth: "72ch" }}>
        <Link href="/blog" style={{ display: "inline-block", color: "var(--text-faint)", fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", marginBottom: 20 }}>
          ← Back to Blog
        </Link>
        <div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 999, background: "rgba(46,204,250,.12)", color: "var(--cyan-300)" }}>{post.category}</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2rem,4.6vw,2.8rem)", letterSpacing: "-.02em", margin: "16px 0 8px", lineHeight: 1.15, textTransform: "uppercase" }}>{post.title}</h1>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-faint)" }}>{post.date} · {post.readTime}</p>
      </section>

      <section style={{ padding: "8px 0 0", maxWidth: "72ch" }}>
        <div style={{ position: "relative", width: "100%", height: 320, borderRadius: 16, overflow: "hidden" }}>
          <Image src={post.coverSrc} alt={post.title} fill sizes="(max-width: 760px) 100vw, 72ch" style={{ objectFit: "cover" }} priority />
        </div>
      </section>

      <article style={{ padding: "40px 0 0", maxWidth: "72ch", display: "flex", flexDirection: "column", gap: 20 }}>
        {post.body.map((blk, i) =>
          blk.h2 ? (
            <h2 key={i} style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.4rem", letterSpacing: "-.01em", margin: "12px 0 0", color: "var(--text)" }}>{blk.text}</h2>
          ) : (
            <p key={i} style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>{blk.text}</p>
          )
        )}
      </article>

      <BlogShare title={post.title} />

      <section style={{ padding: "56px 0 40px", maxWidth: "72ch", borderTop: "1px solid var(--border)", marginTop: 32, paddingTop: 40 }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.2rem", margin: "0 0 20px" }}>Frequently asked questions</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {post.faqs.map((faq) => (
            <div key={faq.q}>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1rem", margin: "0 0 6px", color: "var(--text)" }}>{faq.q}</h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 0 80px", maxWidth: "72ch", borderTop: "1px solid var(--border)", paddingTop: 40 }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.2rem", margin: "0 0 20px" }}>Related posts</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
          {related.map((rp) => (
            <Link key={rp.id} href={`/blog/${rp.slug}`} className="card card-lift" style={{ textAlign: "left", overflow: "hidden", display: "flex", flexDirection: "column", textDecoration: "none", borderRadius: 14 }}>
              <div style={{ position: "relative", width: "100%", height: 110 }}>
                <Image src={rp.coverSrc} alt={rp.title} fill sizes="(max-width: 760px) 100vw, 220px" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 6 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.08em", color: "var(--text-faint)" }}>{rp.date}</span>
                <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.98rem", margin: 0, color: "var(--text)" }}>{rp.title}</h4>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/blog" className="btn btn-ghost btn-sm" style={{ marginTop: 32 }}>← All posts</Link>
      </section>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function BlogShare({ title }: { title: string }) {
  const [url, setUrl] = useState("https://www.arperture.io");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const u = encodeURIComponent(url);
  const text = encodeURIComponent(title);
  const links = {
    twitter: `https://twitter.com/intent/tweet?text=${text}&url=${u}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
  };

  const copy = () => {
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(url).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pill: React.CSSProperties = {
    display: "flex", alignItems: "center", gap: 8, textDecoration: "none",
    fontFamily: "var(--font-mono)", fontSize: "0.8rem", padding: "9px 16px", borderRadius: 999,
    background: "rgba(46,204,250,.12)", color: "var(--cyan-300)",
  };

  return (
    <section style={{ padding: "40px 0 0", maxWidth: "72ch", borderTop: "1px solid var(--border)", marginTop: 40, paddingTop: 32 }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-faint)" }}>Share this post</span>
      <div style={{ display: "flex", gap: 10, marginTop: 12, flexWrap: "wrap" }}>
        <a href={links.twitter} target="_blank" rel="noopener noreferrer" style={pill}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-7.1L4.7 22H1.6l8.1-9.3L1 2h7.1l4.9 6.5L18.9 2zm-1.2 18h1.9L7.4 4h-2l12.3 16z" /></svg>
          X
        </a>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer" style={pill}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56z" /></svg>
          LinkedIn
        </a>
        <a href={links.facebook} target="_blank" rel="noopener noreferrer" style={pill}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.65 15.4 3.56 14.24 3.56c-2.4 0-4.05 1.47-4.05 4.16V9.9H7.5V13h2.69v8z" /></svg>
          Facebook
        </a>
        <button onClick={copy} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: "0.8rem", padding: "9px 16px", borderRadius: 999, background: "transparent", border: "1px solid var(--border-strong)", color: "var(--text)", cursor: "pointer" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
          <span>{copied ? "Copied!" : "Copy link"}</span>
        </button>
      </div>
    </section>
  );
}

import Link from "next/link";

// Quiet section label. The old mono, letter-spaced eyebrow is retired; this
// renders as a plain dim line so legacy pages keep their context without the
// "kicker" costume. `color` is accepted for back-compat and ignored.
export function Kicker({ children }: { color?: string; children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 600,
        color: "var(--text-muted)", display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

export function H1({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h1
      style={{
        fontFamily: "var(--font-display)", fontWeight: 800, fontStretch: "62%",
        fontSize: "clamp(2.75rem,7vw,5rem)", lineHeight: 0.92, letterSpacing: "-.005em",
        margin: "12px 0 16px", textTransform: "uppercase", ...style,
      }}
    >
      {children}
    </h1>
  );
}

export function H2({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-display)", fontWeight: 800, fontStretch: "72%",
        fontSize: "clamp(2rem,4vw,2.75rem)", lineHeight: 1, letterSpacing: "-.005em",
        margin: "12px 0 14px", ...style,
      }}
    >
      {children}
    </h2>
  );
}

export function GhostLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="btn btn-ghost btn-sm">
      {children}
    </Link>
  );
}

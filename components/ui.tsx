import Link from "next/link";

export function Kicker({ color = "var(--cyan-300)", children }: { color?: string; children: React.ReactNode }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.22em",
        textTransform: "uppercase", color,
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
        fontFamily: "var(--font-display)", fontWeight: 600,
        fontSize: "clamp(2.2rem,5vw,3.4rem)", letterSpacing: "-.02em", margin: "16px 0 12px",
        textTransform: "uppercase", ...style,
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
        fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "2.4rem",
        letterSpacing: "-.02em", margin: "16px 0 12px", ...style,
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

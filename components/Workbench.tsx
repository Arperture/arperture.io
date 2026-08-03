// ============================================================
// "The Workbench" — Arperture's tool-UI component primitives.
// Ported 1:1 from the DrewDoesAI Workbench design system used
// to approve the homepage redesign, retargeted to this site's
// existing design tokens (colors_and_type.css).
// ============================================================
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

// ---------------- Wordmark ----------------
export function Wordmark({ size = 23, style }: { size?: number; style?: CSSProperties }) {
  const dot = Math.round(size * 0.35);
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", fontFamily: "var(--font-display)",
        fontWeight: 900, fontSize: size, letterSpacing: "-0.02em", color: "var(--text)", ...style,
      }}
    >
      Arperture
      <span
        style={{
          width: dot, height: dot, borderRadius: "50%", background: "var(--safety-amber)",
          boxShadow: "0 0 8px rgba(255,166,26,.6)", marginLeft: 5, flex: "none",
        }}
      />
    </span>
  );
}

// ---------------- Button ----------------
export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const buttonSizes: Record<ButtonSize, CSSProperties> = {
  sm: { padding: "7px 12px", fontSize: 13, gap: 6, borderRadius: "var(--r-sm)" },
  md: { padding: "10px 16px", fontSize: 14, gap: 8, borderRadius: "var(--r-md)" },
  lg: { padding: "13px 22px", fontSize: 16, gap: 9, borderRadius: "var(--r-md)" },
};
const buttonVariants: Record<ButtonVariant, CSSProperties> = {
  primary: { background: "var(--safety-amber)", color: "var(--on-accent)", border: "1px solid var(--safety-amber)" },
  secondary: { background: "transparent", color: "var(--text)", border: "1px solid var(--border-strong)" },
  ghost: { background: "transparent", color: "var(--text-muted)", border: "1px solid transparent" },
};
export function wbButtonStyle(variant: ButtonVariant = "primary", size: ButtonSize = "md"): CSSProperties {
  return {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    fontFamily: "var(--font-body)", fontWeight: 600, lineHeight: 1, letterSpacing: "0.01em",
    whiteSpace: "nowrap", cursor: "pointer", textDecoration: "none",
    transition: "background var(--dur-1) var(--ease-out), border-color var(--dur-1) var(--ease-out), color var(--dur-1) var(--ease-out)",
    ...buttonSizes[size], ...buttonVariants[variant],
  };
}

export function WButton({
  variant = "primary", size = "md", children, onClick, type = "button", style,
}: {
  variant?: ButtonVariant; size?: ButtonSize; children: ReactNode; onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit"; style?: CSSProperties;
}) {
  return (
    <button type={type} onClick={onClick} style={{ ...wbButtonStyle(variant, size), ...style }}>
      {children}
    </button>
  );
}

// Link-rendered button — for navigational CTAs inside server components
// (WButton's onClick can't cross the server/client boundary as a prop).
export function WLinkButton({
  href, variant = "primary", size = "md", children, style,
}: { href: string; variant?: ButtonVariant; size?: ButtonSize; children: ReactNode; style?: CSSProperties }) {
  return (
    <Link href={href} style={{ ...wbButtonStyle(variant, size), ...style }}>
      {children}
    </Link>
  );
}

// ---------------- Badge ----------------
type BadgeTone = "neutral" | "amber" | "live" | "pos" | "neg";
const badgeTones: Record<BadgeTone, { fg: string; bg: string; bd: string }> = {
  neutral: { fg: "var(--text-muted)", bg: "var(--amber-tint)", bd: "var(--border)" },
  amber: { fg: "var(--ember)", bg: "var(--amber-tint)", bd: "rgba(217,126,0,.45)" },
  live: { fg: "var(--ember)", bg: "var(--amber-tint)", bd: "rgba(217,126,0,.45)" },
  pos: { fg: "var(--success)", bg: "rgba(21,145,90,.12)", bd: "var(--success)" },
  neg: { fg: "var(--danger)", bg: "rgba(220,38,38,.12)", bd: "var(--danger)" },
};

export function Badge({
  tone = "neutral", variant = "soft", children, style,
}: { tone?: BadgeTone; variant?: "soft" | "outline"; children: ReactNode; style?: CSSProperties }) {
  const t = badgeTones[tone];
  const base: CSSProperties =
    variant === "outline"
      ? { color: t.fg, background: "transparent", border: `1px solid ${t.bd}` }
      : { color: t.fg, background: t.bg, border: "1px solid transparent" };
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 9px",
        fontFamily: "var(--font-mono)", fontSize: 11.5, fontWeight: 600, letterSpacing: "0.04em",
        textTransform: "uppercase", lineHeight: 1, borderRadius: "var(--r-sm)", ...base, ...style,
      }}
    >
      {tone === "live" && (
        <span
          style={{
            width: 7, height: 7, borderRadius: "50%", background: "var(--safety-amber)",
            boxShadow: "0 0 8px rgba(255,166,26,.7)", animation: "wbDotPulse 1.2s ease-in-out infinite", flex: "none",
          }}
        />
      )}
      {children}
    </span>
  );
}

// ---------------- Panel ----------------
export function Panel({
  title, amberDot = false, children, style, bodyStyle,
}: { title?: string; amberDot?: boolean; children: ReactNode; style?: CSSProperties; bodyStyle?: CSSProperties }) {
  return (
    <div
      style={{
        background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-md)",
        overflow: "hidden", boxShadow: "var(--shadow-md)", ...style,
      }}
    >
      <div
        style={{
          display: "flex", alignItems: "center", gap: 10, padding: "10px 14px",
          borderBottom: "1px solid var(--border)", background: "rgba(18,20,23,.035)",
        }}
      >
        <span style={{ display: "inline-flex", gap: 6 }}>
          <i style={dotStyle("#FF4D4D")} />
          <i style={dotStyle(amberDot ? "var(--safety-amber)" : "#C9C4B8")} />
          <i style={dotStyle("#C9C4B8")} />
        </span>
        {title && (
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5, color: "var(--text-muted)", letterSpacing: "0.02em" }}>
            {title}
          </span>
        )}
      </div>
      <div style={{ padding: 16, ...bodyStyle }}>{children}</div>
    </div>
  );
}
const dotStyle = (color: string): CSSProperties => ({ width: 10, height: 10, borderRadius: "50%", background: color, display: "block" });

// ---------------- MetricRow ----------------
export function MetricRow({
  label, value, tone = "plain", divider = false,
}: { label: string; value: string; tone?: "plain" | "amber" | "pos" | "neg"; divider?: boolean }) {
  const toneColor = { plain: "var(--text)", amber: "var(--ember)", pos: "var(--success)", neg: "var(--danger)" }[tone];
  return (
    <div
      style={{
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
        padding: "7px 0", borderTop: divider ? "1px solid var(--hairline-soft)" : "none",
      }}
    >
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--text-muted)" }}>{label}</span>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600, color: toneColor, fontVariantNumeric: "tabular-nums" }}>
        {value}
      </span>
    </div>
  );
}

// ---------------- StatNumber ----------------
type StatSize = "sm" | "md" | "lg" | "xl";
const statSizes: Record<StatSize, number> = { sm: 22, md: 32, lg: 48, xl: 80 };

export function StatNumber({
  value, label, tone = "amber", size = "lg", align = "left", style,
}: {
  value: string; label?: string; tone?: "amber" | "pos" | "neg" | "plain"; size?: StatSize;
  align?: "left" | "center" | "right"; style?: CSSProperties;
}) {
  const toneColor = { amber: "var(--ember)", pos: "var(--success)", neg: "var(--danger)", plain: "var(--text)" }[tone];
  const items = align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start";
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: items, gap: 6, ...style }}>
      {label && (
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>
          {label}
        </span>
      )}
      <span
        style={{
          fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: statSizes[size], lineHeight: 1,
          letterSpacing: "-0.01em", color: toneColor, fontVariantNumeric: "tabular-nums lining-nums",
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ---------------- Tag ----------------
export function Tag({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex", alignItems: "center", gap: 7, padding: "5px 11px",
        fontFamily: "var(--font-mono)", fontSize: 12.5, fontWeight: 500, letterSpacing: "0.01em",
        lineHeight: 1, borderRadius: "var(--r-full)", color: active ? "var(--ember)" : "var(--text-muted)",
        background: active ? "var(--amber-tint)" : "var(--surface)",
        border: `1px solid ${active ? "rgba(217,126,0,.45)" : "var(--border)"}`,
      }}
    >
      {children}
    </span>
  );
}

// ---------------- ImageSlot (placeholder until real art is dropped in) ----------------
export function ImageSlot({ label }: { label: string }) {
  return (
    <div
      style={{
        width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", padding: 12, color: "var(--text-faint)", fontFamily: "var(--font-mono)",
        fontSize: 11, letterSpacing: "0.03em",
        background: "repeating-linear-gradient(135deg, var(--surface), var(--surface) 10px, var(--surface-2) 10px, var(--surface-2) 20px)",
      }}
    >
      {label}
    </div>
  );
}

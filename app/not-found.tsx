import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap">
      <section style={{ padding: "120px 0", textAlign: "center", maxWidth: "56ch", margin: "0 auto" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--coral-300)" }}>Error 404</span>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.2rem,5vw,3rem)", letterSpacing: "-.02em", margin: "16px 0 16px", textTransform: "uppercase" }}>
          Cut. That Frame Doesn&apos;t Exist.
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.6 }}>
          The page you were looking for isn&apos;t in this reel. Let&apos;s get you back to something worth watching.
        </p>
        <div style={{ marginTop: 32 }}>
          <Link href="/" className="btn btn-primary btn-lg">Back to home</Link>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/booking-confirmed/" },
  title: "Booking Confirmed",
  description: "Your discovery call with Arperture Media is confirmed.",
  robots: { index: false },
};

export default function BookingConfirmedPage() {
  return (
    <div className="wrap">
      <section style={{ padding: "120px 0", textAlign: "center", maxWidth: "60ch", margin: "0 auto" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--success)" }}>● Confirmed</span>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2.2rem,5vw,3rem)", letterSpacing: "-.02em", margin: "16px 0 16px", textTransform: "uppercase" }}>
          You&apos;re booked.
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.6 }}>
          Thanks for booking a discovery call. A confirmation is on its way to your inbox — we&apos;ll see you soon.
        </p>
        <div style={{ marginTop: 32 }}>
          <Link href="/" className="btn btn-coral btn-lg">Back to home</Link>
        </div>
      </section>
    </div>
  );
}

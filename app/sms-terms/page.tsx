import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/sms-terms/" },
  title: "SMS Terms & Conditions",
  description: "Terms and conditions for the Arperture Media text messaging program, including opt-in, opt-out, message frequency, and rates.",
};

export default function SmsTermsPage() {
  return (
    <div className="wrap">
      <section style={{ padding: "90px 0 100px", maxWidth: "75ch", margin: "0 auto" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan-300)" }}>
          Legal
        </span>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2rem,4.5vw,2.75rem)", letterSpacing: "-.02em", margin: "14px 0 10px", textTransform: "uppercase" }}>
          SMS Terms &amp; Conditions
        </h1>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-faint)", margin: "0 0 8px" }}>
          Effective August 17, 2026
        </p>

        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>These terms govern the Arperture Media text messaging program. By opting in, you agree to the terms below.</p>
        <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "40px 0 0" }} />

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>Program description</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>
          Arperture Media (571-200-1186) operates a text messaging program that sends appointment reminders and confirmations, project and production status updates, responses to inquiries you have initiated, account and billing notices, and — where you have separately consented — occasional promotional messages about our AI video production, AI consulting, and web visibility services.
        </p>

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>How to opt in</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>You may opt in by:</p>
        <ul style={{ margin: "0 0 20px", paddingLeft: "22px" }}>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Checking the SMS consent box on a form at arperture.io</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Replying to a message from us confirming enrollment</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Providing express written consent during a consultation or onboarding</li>
        </ul>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>Consent to receive text messages is <strong style={{ color: "var(--text)" }}>not</strong> a condition of purchasing any goods or services from Arperture Media.</p>

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>Message frequency</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>Message frequency varies based on your interaction with us. You will typically receive no more than 4 messages per month for marketing communications. Transactional messages, such as appointment reminders, are sent as needed.</p>

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>Cost</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}><strong style={{ color: "var(--text)" }}>Message and data rates may apply.</strong> Arperture Media does not charge for these messages, but your mobile carrier may. Contact your carrier for details about your plan.</p>

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>How to opt out</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>Reply <strong style={{ color: "var(--text)" }}>STOP</strong> to any message to cancel. You will receive one confirmation message, after which we will send no further messages unless you opt in again.</p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>You may also opt out by emailing contact@arperture.io or calling (571) 200-1186.</p>

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>How to get help</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>Reply <strong style={{ color: "var(--text)" }}>HELP</strong> to any message for assistance, or contact us:</p>
        <ul style={{ margin: "0 0 20px", paddingLeft: "22px" }}>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Email: contact@arperture.io</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Phone: (571) 200-1186</li>
        </ul>

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>Supported carriers</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>Messages are supported on major U.S. carriers including AT&amp;T, Verizon Wireless, T-Mobile, and their affiliates and resellers. Carriers are not liable for delayed or undelivered messages.</p>

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>Privacy</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}><strong style={{ color: "var(--text)" }}>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</strong> Text messaging originator opt-in data and consent will not be shared with any third parties.</p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>Full details are in our <Link href="/privacy/" style={{ color: "var(--cyan-400)" }}>Privacy Policy</Link>.</p>

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>Eligibility</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>You must be at least 18 years old and the account holder or authorized user of the mobile number you enroll.</p>

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>Changes</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>We may modify these terms at any time. Continued participation after changes are posted constitutes acceptance.</p>
        <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "40px 0 0" }} />

        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "16px 0 0" }}>
          <strong style={{ color: "var(--text)" }}>Arperture Media</strong>
          <br />Leesburg, VA, United States
          <br />contact@arperture.io · (571) 200-1186
        </p>
      </section>
    </div>
  );
}

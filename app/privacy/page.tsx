import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy/" },
  title: "Privacy Policy",
  description: "How Arperture Media collects, uses, and protects your information, including our SMS and mobile opt-in practices.",
};

export default function PrivacyPage() {
  return (
    <div className="wrap">
      <section style={{ padding: "90px 0 100px", maxWidth: "75ch", margin: "0 auto" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cyan-300)" }}>
          Legal
        </span>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(2rem,4.5vw,2.75rem)", letterSpacing: "-.02em", margin: "14px 0 10px", textTransform: "uppercase" }}>
          Privacy Policy
        </h1>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-faint)", margin: "0 0 8px" }}>
          Effective August 17, 2026 · Last updated August 17, 2026
        </p>

        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>
          Arperture Media (&quot;Arperture,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy explains what information we collect through arperture.io and our related services, how we use it, who we share it with, and the choices available to you.
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>
          By using our website, submitting a form, or opting in to receive text messages from us, you agree to the practices described in this policy.
        </p>
        <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "40px 0 0" }} />

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>1. Who we are</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>
          Arperture Media is an AI video production, AI consulting, and web visibility company operating from Leesburg, Virginia, United States, and serving clients worldwide.
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>
          <strong style={{ color: "var(--text)" }}>Contact for privacy questions:</strong>
          <br />Arperture Media
          <br />Leesburg, VA, United States
          <br />Email: contact@arperture.io
          <br />Phone: (571) 200-1186
        </p>
        <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "40px 0 0" }} />

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>2. Information we collect</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>We collect the following categories of information:</p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}><strong style={{ color: "var(--text)" }}>Information you provide directly</strong></p>
        <ul style={{ margin: "0 0 20px", paddingLeft: "22px" }}>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Name, email address, and phone number submitted through our contact forms, booking forms, and consultation requests</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Project details, business information, and any other content you choose to include in an inquiry</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Mobile phone number and consent record when you opt in to receive text messages from us</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Billing and payment details when you engage us for paid services (payment card data is processed by our payment providers and is not stored by Arperture)</li>
        </ul>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}><strong style={{ color: "var(--text)" }}>Information collected automatically</strong></p>
        <ul style={{ margin: "0 0 20px", paddingLeft: "22px" }}>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Standard analytics data including pages visited, referring source, approximate location, browser type, device type, and IP address</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Cookies and similar technologies used to operate the site, remember your preferences, and measure site performance</li>
        </ul>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}><strong style={{ color: "var(--text)" }}>Information from third-party tools</strong></p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>
          We use HubSpot (CRM and forms), Calendly (scheduling), and Formspree (form handling) to operate parts of this website. These providers may collect information on our behalf under their own privacy policies.
        </p>
        <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "40px 0 0" }} />

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>3. How we use your information</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>We use the information we collect to:</p>
        <ul style={{ margin: "0 0 20px", paddingLeft: "22px" }}>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Respond to inquiries and consultation requests</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Scope, deliver, and support client projects</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Schedule and confirm calls and appointments</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Send transactional and service-related text messages and emails, where you have consented</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Send marketing communications, where you have consented</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Operate, secure, maintain, and improve our website and services</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Comply with legal, tax, and regulatory obligations</li>
        </ul>
        <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "40px 0 0" }} />

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>4. SMS and text messaging</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>This section describes how we handle information related to our text messaging program. <strong style={{ color: "var(--text)" }}>These terms apply specifically to mobile data and consent.</strong></p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}><strong style={{ color: "var(--text)" }}>Consent and opt-in</strong></p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>
          We send text messages only to individuals who have expressly opted in to receive them. Opt-in occurs when you check the SMS consent box on one of our web forms, reply to a message confirming enrollment, or otherwise provide written consent to be contacted by text. Consent to receive text messages is not a condition of purchasing any product or service from Arperture Media.
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}><strong style={{ color: "var(--text)" }}>No sharing or sale of mobile opt-in data</strong></p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>
          <strong style={{ color: "var(--text)" }}>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</strong> All of the above categories of information exclude text messaging originator opt-in data and consent; <strong style={{ color: "var(--text)" }}>this information will not be shared with any third parties.</strong>
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>We do not sell, rent, lease, or trade mobile phone numbers or SMS consent records under any circumstances.</p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>
          We may share your mobile number only with the licensed communications providers strictly necessary to transmit the messages you have requested — for example, our telephony carrier and messaging platform. These providers are contractually restricted to using the information solely to deliver messages on our behalf and may not use it for their own marketing purposes.
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}><strong style={{ color: "var(--text)" }}>Types of messages you may receive</strong></p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>
          Appointment reminders and confirmations, project and production status updates, responses to inquiries you initiated, account and billing notices, and — if you have separately consented to marketing messages — occasional promotional messages about Arperture Media services.
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}><strong style={{ color: "var(--text)" }}>Message frequency and cost</strong></p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>Message frequency varies based on your interaction with us. Message and data rates may apply. Arperture Media is not responsible for charges assessed by your mobile carrier.</p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}><strong style={{ color: "var(--text)" }}>How to opt out</strong></p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>
          You may cancel text messages at any time by replying <strong style={{ color: "var(--text)" }}>STOP</strong> to any message from us. After you send STOP, we will send one confirmation message and will not send further text messages unless you opt in again. You may also email contact@arperture.io to be removed.
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>For assistance, reply <strong style={{ color: "var(--text)" }}>HELP</strong> to any message or email contact@arperture.io.</p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}><strong style={{ color: "var(--text)" }}>Carrier disclaimer</strong></p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>Mobile carriers are not liable for delayed or undelivered messages.</p>
        <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "40px 0 0" }} />

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>5. How we share information</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>We do not sell your personal information.</p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>We share information only in these limited circumstances:</p>
        <ul style={{ margin: "0 0 20px", paddingLeft: "22px" }}>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}><strong style={{ color: "var(--text)" }}>Service providers.</strong> Vendors who perform functions on our behalf — hosting, CRM, scheduling, analytics, email delivery, payment processing, and telephony — under agreements that restrict their use of the information to providing services to us.</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}><strong style={{ color: "var(--text)" }}>Legal requirements.</strong> When required by law, subpoena, court order, or other valid legal process, or to protect the rights, safety, and property of Arperture Media, our clients, or the public.</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}><strong style={{ color: "var(--text)" }}>Business transfer.</strong> In connection with a merger, acquisition, or sale of assets, in which case we will provide notice before your information becomes subject to a different privacy policy.</li>
        </ul>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>As stated in Section 4, mobile opt-in and SMS consent data is excluded from all sharing other than the transmission providers required to deliver the messages you requested.</p>
        <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "40px 0 0" }} />

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>6. Data retention</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>We retain personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.</p>
        <ul style={{ margin: "0 0 20px", paddingLeft: "22px" }}>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Contact and inquiry records: retained for up to 3 years from last contact</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Client project records: retained for 7 years to meet tax and contractual obligations</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Mobile numbers and SMS consent records: retained while you remain opted in, and for up to 4 years after opt-out solely to honor your opt-out request and to document consent as required by federal regulations</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}>Analytics data: retained in aggregate or de-identified form</li>
        </ul>
        <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "40px 0 0" }} />

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>7. Your choices and rights</h2>
        <ul style={{ margin: "0 0 20px", paddingLeft: "22px" }}>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}><strong style={{ color: "var(--text)" }}>Email.</strong> Unsubscribe using the link in any marketing email.</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}><strong style={{ color: "var(--text)" }}>Text messages.</strong> Reply STOP to any message, as described in Section 4.</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}><strong style={{ color: "var(--text)" }}>Cookies.</strong> Adjust your browser settings to refuse or delete cookies. Some site features may not function properly if cookies are disabled.</li>
          <li style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 10px" }}><strong style={{ color: "var(--text)" }}>Access, correction, and deletion.</strong> You may request a copy of the personal information we hold about you, ask us to correct it, or ask us to delete it by emailing contact@arperture.io. We will respond within the timeframe required by applicable law.</li>
        </ul>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>Depending on where you live, you may have additional rights under laws such as the Virginia Consumer Data Protection Act, the California Consumer Privacy Act, or the GDPR. We honor verified requests from residents of jurisdictions where these rights apply.</p>
        <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "40px 0 0" }} />

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>8. Data security</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>We use commercially reasonable administrative, technical, and physical safeguards to protect the information we hold, including encrypted transmission (HTTPS), access controls, and reputable third-party processors. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
        <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "40px 0 0" }} />

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>9. Children&apos;s privacy</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>Our website and services are not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us information, contact us at contact@arperture.io and we will delete it.</p>
        <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "40px 0 0" }} />

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>10. Third-party links</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>Our site links to third-party websites and platforms, including Calendly, YouTube, Instagram, TikTok, and Facebook. We are not responsible for the privacy practices of those sites. Review their policies before providing information.</p>
        <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "40px 0 0" }} />

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>11. Changes to this policy</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>We may update this Privacy Policy from time to time. When we do, we will revise the &quot;Last updated&quot; date at the top of this page. Material changes affecting how we use your information will be communicated by email or a notice on this site.</p>
        <hr style={{ border: 0, borderTop: "1px solid var(--border)", margin: "40px 0 0" }} />

        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "1.35rem", letterSpacing: "-.01em", margin: "48px 0 14px", color: "var(--text)" }}>12. Contact us</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>Questions, requests, or complaints about this policy:</p>
        <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 16px" }}>
          <strong style={{ color: "var(--text)" }}>Arperture Media</strong>
          <br />Leesburg, VA, United States
          <br />Email: contact@arperture.io
          <br />Phone: (571) 200-1186
        </p>
      </section>
    </div>
  );
}

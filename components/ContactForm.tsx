"use client";

import { useState } from "react";
import { FORMSPREE_ENDPOINT, EMAIL } from "@/lib/data";

const inputStyle: React.CSSProperties = {
  width: "100%", boxSizing: "border-box", background: "var(--ink-850)", border: "1px solid var(--border)",
  borderRadius: 10, padding: "12px 14px", color: "var(--text)", fontSize: "0.95rem",
};
const labelStyle: React.CSSProperties = { display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: 6 };

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", brief: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, brief } = form;
    if (!name.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !brief.trim()) {
      setError("Please fill in your name, a valid email, and a short brief.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, brief }),
      });
      if (!res.ok) throw new Error("Formspree request failed");
      setSubmitting(false);
      setSent(true);
    } catch {
      setSubmitting(false);
      setError(`Something went wrong sending your brief — email us directly at ${EMAIL}.`);
    }
  };

  return (
    <div style={{ background: "rgba(14,14,15,.4)", border: "1px solid var(--border)", borderRadius: 16, padding: 32 }}>
      {sent ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "rgba(63,217,164,.1)", border: "1px solid rgba(63,217,164,.3)", borderRadius: 12, padding: 16 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--success)", marginTop: 6, flexShrink: 0 }} />
            <div style={{ color: "var(--text)", fontSize: "0.95rem" }}>
              <strong>Brief received.</strong> Thanks — we&apos;ll be in touch within two business days.
            </div>
          </div>
          <button
            onClick={() => { setForm({ name: "", email: "", brief: "" }); setSent(false); setError(""); }}
            className="btn btn-ghost"
            style={{ fontSize: "0.9rem", padding: "12px 22px" }}
          >
            Send another brief
          </button>
        </div>
      ) : (
        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }} noValidate>
          <div>
            <label style={labelStyle}>Your name</label>
            <input type="text" placeholder="Jane Director" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input type="email" placeholder="hello@yourbrand.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Brief</label>
            <textarea rows={4} placeholder="Tell us about the story…" value={form.brief} onChange={(e) => setForm({ ...form, brief: e.target.value })} style={{ ...inputStyle, fontFamily: "var(--font-body)" }} />
          </div>
          {error && <div style={{ color: "var(--danger)", fontSize: "0.85rem" }}>{error}</div>}
          <button type="submit" disabled={submitting} className="btn btn-primary btn-lg" style={{ opacity: submitting ? 0.7 : 1 }}>
            {submitting ? "Sending…" : "Book a discovery call"}
          </button>
        </form>
      )}
    </div>
  );
}

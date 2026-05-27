"use client";

import { useState } from "react";
import { useLang } from "@/lib/LangContext";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "",
    area: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(176,141,87,0.2)",
    borderRadius: 8,
    color: "#F5F0E8",
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "rgba(245,240,232,0.55)",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: 8,
  };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 24px",
        background: "#212121",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Info */}
          <div>
            <p
              style={{
                color: "#B08D57",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              ALOQA
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
                color: "#F5F0E8",
                letterSpacing: "-0.02em",
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              {t.contact.title}
            </h2>
            <p
              style={{
                color: "rgba(245,240,232,0.5)",
                fontSize: 16,
                lineHeight: 1.7,
                marginBottom: 48,
              }}
            >
              {t.contact.subtitle}
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Address */}
              <div style={{ display: "flex", gap: 16 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "rgba(176,141,87,0.12)",
                    border: "1px solid rgba(176,141,87,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: "rgba(245,240,232,0.4)", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>
                    {lang_label("Manzil", "Адрес")}
                  </div>
                  <div style={{ color: "#F5F0E8", fontSize: 15 }}>
                    {t.contact.info.address}
                  </div>
                </div>
              </div>

              {/* Phones */}
              <div style={{ display: "flex", gap: 16 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "rgba(176,141,87,0.12)",
                    border: "1px solid rgba(176,141,87,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.09 6.09l1.27-.542a2 2 0 012.11.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: "rgba(245,240,232,0.4)", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>
                    Telefon
                  </div>
                  {t.contact.info.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      style={{
                        display: "block",
                        color: "#C9A96E",
                        fontSize: 15,
                        textDecoration: "none",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                        lineHeight: 1.8,
                      }}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div style={{ display: "flex", gap: 16 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: "rgba(176,141,87,0.12)",
                    border: "1px solid rgba(176,141,87,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: "rgba(245,240,232,0.4)", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>
                    Email
                  </div>
                  <a
                    href={`mailto:${t.contact.info.email}`}
                    style={{ color: "#C9A96E", fontSize: 15, textDecoration: "none", fontWeight: 600 }}
                  >
                    {t.contact.info.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{
              padding: "40px",
              borderRadius: 16,
              border: "1px solid rgba(176,141,87,0.18)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(176,141,87,0.15)",
                    border: "2px solid #B08D57",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                    fontSize: 28,
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#C9A96E",
                    marginBottom: 12,
                  }}
                >
                  {t.contact.form.success}
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 16,
                  }}
                  className="form-grid"
                >
                  <div>
                    <label style={labelStyle}>{t.contact.form.name}</label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.form.namePlaceholder}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#B08D57")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(176,141,87,0.2)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{t.contact.form.phone}</label>
                    <input
                      type="tel"
                      required
                      placeholder={t.contact.form.phonePlaceholder}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#B08D57")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(176,141,87,0.2)")}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                    marginBottom: 16,
                  }}
                  className="form-grid"
                >
                  <div>
                    <label style={labelStyle}>{t.contact.form.category}</label>
                    <input
                      type="text"
                      placeholder={t.contact.form.categoryPlaceholder}
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#B08D57")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(176,141,87,0.2)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{t.contact.form.area}</label>
                    <input
                      type="text"
                      placeholder={t.contact.form.areaPlaceholder}
                      value={form.area}
                      onChange={(e) => setForm({ ...form, area: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#B08D57")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(176,141,87,0.2)")}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>{t.contact.form.message}</label>
                  <textarea
                    rows={4}
                    placeholder={t.contact.form.messagePlaceholder}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
                    onFocus={(e) => (e.target.style.borderColor = "#B08D57")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(176,141,87,0.2)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: submitting
                      ? "rgba(176,141,87,0.4)"
                      : "linear-gradient(135deg, #B08D57, #C9A96E)",
                    color: "#1A1A1A",
                    border: "none",
                    borderRadius: 8,
                    fontSize: 15,
                    fontWeight: 700,
                    cursor: submitting ? "not-allowed" : "pointer",
                    transition: "all 0.25s",
                    letterSpacing: "0.02em",
                    fontFamily: "inherit",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  {submitting ? (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ animation: "spin 1s linear infinite" }}
                      >
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeOpacity="0.3" />
                        <path d="M21 12a9 9 0 00-9-9" />
                      </svg>
                      {t.contact.form.submitting}
                    </>
                  ) : (
                    t.contact.form.submit
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

function lang_label(uz: string, ru: string) {
  return uz;
}

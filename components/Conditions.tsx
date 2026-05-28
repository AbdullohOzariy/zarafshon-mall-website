"use client";

import { useLang } from "@/lib/LangContext";

export default function Conditions() {
  const { t } = useLang();

  const icons = [
    // calendar (ijara muddati)
    <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>,
    // coins (narx)
    <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="6"/>
      <path d="M18.09 10.37A6 6 0 1 1 10.34 18"/>
      <path d="M7 6h1v4"/>
      <path d="m16.71 13.88.7.71-2.82 2.82"/>
    </svg>,
    // hammer (remont)
    <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 12-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9"/>
      <path d="M17.64 15 22 10.64"/>
      <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91"/>
    </svg>,
    // shield (depozit / xavfsizlik)
    <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>
    </svg>,
    // zap (kommunal)
    <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>,
    // ruler (maydon)
    <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/>
      <path d="m14.5 12.5 2-2m-5-5 2-2m-3 8 2-2m-5-5 2-2"/>
    </svg>,
  ];

  return (
    <section
      id="conditions"
      className="conditions-section"
      style={{
        padding: "120px 24px",
        background: "#212121",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ maxWidth: 600, marginBottom: 64 }}>
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
            B2B HAMKORLIK
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "#F5F0E8",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            {t.conditions.title}
          </h2>
          <p style={{ color: "rgba(245,240,232,0.5)", fontSize: 16 }}>
            {t.conditions.subtitle}
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="conditions-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {t.conditions.items.map((item, i) => (
            <div
              key={i}
              className="conditions-card"
              style={{
                padding: "32px",
                borderRadius: 12,
                border: "1px solid rgba(176,141,87,0.12)",
                background: "rgba(255,255,255,0.02)",
                transition: "all 0.3s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(176,141,87,0.4)";
                e.currentTarget.style.background = "rgba(176,141,87,0.05)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(176,141,87,0.12)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Accent corner */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 3,
                  height: "100%",
                  background: "linear-gradient(to bottom, #B08D57, transparent)",
                  borderRadius: "12px 0 0 12px",
                }}
              />

              <div style={{ marginBottom: 16, color: "#B08D57" }}>{icons[i]}</div>

              <div
                style={{
                  color: "rgba(245,240,232,0.4)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {item.label}
              </div>

              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#C9A96E",
                  marginBottom: 8,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.value}
              </div>

              <div
                style={{
                  color: "rgba(245,240,232,0.5)",
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                {item.note}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div
          style={{
            marginTop: 48,
            padding: "40px 48px",
            borderRadius: 16,
            background: "linear-gradient(135deg, rgba(176,141,87,0.15) 0%, rgba(176,141,87,0.05) 100%)",
            border: "1px solid rgba(176,141,87,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#F5F0E8",
                marginBottom: 8,
              }}
            >
              Shartlar bo'yicha savol bormi?
            </h3>
            <p style={{ color: "rgba(245,240,232,0.55)", fontSize: 15 }}>
              Mutaxassislarimiz bilan shaxsiy uchrashuvga taklif qilamiz
            </p>
          </div>
          <a
            href="#contact"
            style={{
              padding: "14px 28px",
              background: "linear-gradient(135deg, #B08D57, #C9A96E)",
              color: "#1A1A1A",
              textDecoration: "none",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Bog'lanish →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .conditions-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px;
          }
        }
        @media (max-width: 480px) {
          .conditions-section {
            padding: 80px 16px;
          }
          .conditions-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px;
          }
          .conditions-card {
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

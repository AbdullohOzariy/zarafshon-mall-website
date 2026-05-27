"use client";

import { useLang } from "@/lib/LangContext";

export default function Conditions() {
  const { t } = useLang();

  const icons = ["📅", "💰", "🔨", "🔒", "⚡", "📐"];

  return (
    <section
      id="conditions"
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
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 16,
          }}
        >
          {t.conditions.items.map((item, i) => (
            <div
              key={i}
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

              <div style={{ fontSize: 28, marginBottom: 16 }}>{icons[i]}</div>

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
    </section>
  );
}

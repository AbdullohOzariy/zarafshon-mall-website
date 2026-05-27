"use client";

import { useState } from "react";
import { useLang } from "@/lib/LangContext";

export default function Floors() {
  const { t } = useLang();
  const [active, setActive] = useState(0);

  const floorColors = ["#6B5B4E", "#4A7C5E", "#4A6B7C", "#7C4A6B"];

  return (
    <section
      id="floors"
      style={{
        padding: "120px 24px",
        background: "#1A1A1A",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
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
            ZARAFSHON MALL
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
            {t.floors.title}
          </h2>
          <p style={{ color: "rgba(245,240,232,0.5)", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
            {t.floors.subtitle}
          </p>
        </div>

        {/* Floor Visual */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            alignItems: "start",
          }}
          className="floors-grid"
        >
          {/* Left: Floor selector */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {t.floors.items.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "20px 24px",
                  borderRadius: 12,
                  border: active === i
                    ? "1px solid rgba(176,141,87,0.6)"
                    : "1px solid rgba(176,141,87,0.1)",
                  background: active === i
                    ? "rgba(176,141,87,0.1)"
                    : "rgba(255,255,255,0.02)",
                  cursor: "pointer",
                  transition: "all 0.25s",
                  textAlign: "left",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  if (active !== i) {
                    e.currentTarget.style.background = "rgba(176,141,87,0.05)";
                    e.currentTarget.style.borderColor = "rgba(176,141,87,0.25)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== i) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.borderColor = "rgba(176,141,87,0.1)";
                  }
                }}
              >
                <span style={{ fontSize: 28 }}>{item.icon}</span>
                <div>
                  <div
                    style={{
                      color: active === i ? "#C9A96E" : "#F5F0E8",
                      fontWeight: 700,
                      fontSize: 15,
                      marginBottom: 4,
                      letterSpacing: "0.01em",
                    }}
                  >
                    {item.floor}
                  </div>
                  <div
                    style={{
                      color: "rgba(245,240,232,0.45)",
                      fontSize: 13,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.description}
                  </div>
                </div>
                {active === i && (
                  <div
                    style={{
                      marginLeft: "auto",
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#B08D57",
                      flexShrink: 0,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right: Detail card */}
          <div
            style={{
              position: "sticky",
              top: 100,
              padding: "40px",
              borderRadius: 16,
              border: "1px solid rgba(176,141,87,0.2)",
              background: "linear-gradient(135deg, rgba(176,141,87,0.07) 0%, rgba(255,255,255,0.02) 100%)",
            }}
          >
            {/* Floor visual indicator */}
            <div
              style={{
                display: "flex",
                flexDirection: "column-reverse",
                gap: 4,
                marginBottom: 32,
              }}
            >
              {t.floors.items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    height: 36,
                    borderRadius: 6,
                    background: active === i
                      ? `rgba(176,141,87,0.4)`
                      : "rgba(255,255,255,0.04)",
                    border: active === i
                      ? "1px solid rgba(176,141,87,0.5)"
                      : "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px",
                    transition: "all 0.3s",
                    cursor: "pointer",
                  }}
                  onClick={() => setActive(i)}
                >
                  <span style={{ fontSize: 14, marginRight: 8 }}>{item.icon}</span>
                  <span
                    style={{
                      fontSize: 12,
                      color: active === i ? "#C9A96E" : "rgba(245,240,232,0.3)",
                      fontWeight: 600,
                    }}
                  >
                    {item.floor}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ fontSize: 40, marginBottom: 16 }}>
              {t.floors.items[active].icon}
            </div>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#C9A96E",
                marginBottom: 12,
                letterSpacing: "-0.01em",
              }}
            >
              {t.floors.items[active].floor}
            </h3>
            <p
              style={{
                color: "rgba(245,240,232,0.65)",
                fontSize: 15,
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              {t.floors.items[active].description}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {t.floors.items[active].tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    padding: "5px 14px",
                    borderRadius: 100,
                    border: "1px solid rgba(176,141,87,0.35)",
                    color: "#B08D57",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              style={{
                marginTop: 32,
                paddingTop: 24,
                borderTop: "1px solid rgba(176,141,87,0.15)",
              }}
            >
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#B08D57",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                Bu qavatda joy bron qilish
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .floors-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

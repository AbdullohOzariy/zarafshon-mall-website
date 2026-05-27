"use client";

import { useRef, useEffect, useState } from "react";
import { useLang } from "@/lib/LangContext";

export default function Advantages() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="advantages"
      style={{
        padding: "120px 24px",
        background: "#1A1A1A",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(176,141,87,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
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
            USTUNLIKLAR
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
            {t.advantages.title}
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.5)",
              fontSize: 16,
              maxWidth: 440,
              margin: "0 auto",
            }}
          >
            {t.advantages.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {t.advantages.items.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "36px 32px",
                borderRadius: 16,
                border: "1px solid rgba(176,141,87,0.1)",
                background: "rgba(255,255,255,0.02)",
                transition: "all 0.3s ease",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 0.08}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(176,141,87,0.35)";
                e.currentTarget.style.background = "rgba(176,141,87,0.06)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(176,141,87,0.1)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.transform = inView ? "translateY(0)" : "translateY(30px)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: "rgba(176,141,87,0.12)",
                  border: "1px solid rgba(176,141,87,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  marginBottom: 20,
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#F5F0E8",
                  marginBottom: 10,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "rgba(245,240,232,0.5)",
                  fontSize: 14,
                  lineHeight: 1.7,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/LangContext";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
}

export default function Stats() {
  const { t } = useLang();
  const { ref, inView } = useInView();

  return (
    <section className="stats-section">
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <p
          style={{
            textAlign: "center",
            color: "#B08D57",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 48,
          }}
        >
          {t.stats.title}
        </p>

        <div
          ref={ref}
          className="stats-grid"
          style={{
            background: "rgba(176,141,87,0.1)",
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {t.stats.items.map((item, i) => (
            <div
              key={i}
              className="stats-item"
              style={{
                background: "#1A1A1A",
                textAlign: "center",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#222")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#1A1A1A")
              }
            >
              <div
                style={{
                  fontSize: "clamp(40px, 5vw, 60px)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(135deg, #B08D57, #C9A96E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  color: "rgba(245,240,232,0.55)",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-section {
          background: linear-gradient(135deg, #1A1A1A 0%, #2C2C2C 100%);
          border-top: 1px solid rgba(176,141,87,0.15);
          border-bottom: 1px solid rgba(176,141,87,0.15);
          padding: 80px 24px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2px;
        }
        .stats-item {
          padding: 48px 32px;
        }
        @media (max-width: 480px) {
          .stats-section {
            padding: 60px 16px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stats-item {
            padding: 28px 16px;
          }
        }
      `}</style>
    </section>
  );
}

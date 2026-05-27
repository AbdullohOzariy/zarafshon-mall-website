"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";

const photos = [
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/6.jpg",
  "/images/8.jpg",
];

export default function Hero() {
  const { t } = useLang();
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
        setVisible(true);
      }, 600);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image Slideshow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transition: "opacity 0.6s ease",
          opacity: visible ? 1 : 0,
        }}
      >
        <Image
          src={photos[currentPhoto]}
          alt="Zarafshon Mall"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.75) 50%, rgba(26,26,26,0.4) 100%)",
        }}
      />

      {/* Bronze accent line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: "linear-gradient(to bottom, transparent, #B08D57, transparent)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "120px 24px 80px",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 680 }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              border: "1px solid rgba(176,141,87,0.4)",
              borderRadius: 100,
              marginBottom: 28,
              background: "rgba(176,141,87,0.08)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#B08D57",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                color: "#C9A96E",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.06em",
              }}
            >
              {t.hero.badge}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 24,
              color: "#F5F0E8",
            }}
          >
            {t.hero.title}{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #B08D57, #C9A96E, #B08D57)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(245,240,232,0.7)",
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 560,
            }}
          >
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                padding: "16px 32px",
                background: "linear-gradient(135deg, #B08D57, #C9A96E)",
                color: "#1A1A1A",
                textDecoration: "none",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "0.02em",
                transition: "all 0.25s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 4px 24px rgba(176,141,87,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(176,141,87,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(176,141,87,0.3)";
              }}
            >
              {t.hero.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#floors"
              style={{
                padding: "16px 32px",
                border: "1px solid rgba(176,141,87,0.4)",
                color: "#C9A96E",
                textDecoration: "none",
                borderRadius: 8,
                fontSize: 15,
                fontWeight: 600,
                transition: "all 0.25s",
                background: "rgba(176,141,87,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(176,141,87,0.12)";
                e.currentTarget.style.borderColor = "rgba(176,141,87,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(176,141,87,0.05)";
                e.currentTarget.style.borderColor = "rgba(176,141,87,0.4)";
              }}
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Address */}
          <div
            style={{
              marginTop: 48,
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "rgba(245,240,232,0.45)",
              fontSize: 13,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t.hero.address}
          </div>
        </div>

        {/* Photo indicator dots */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 24,
            display: "flex",
            gap: 8,
          }}
        >
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPhoto(i)}
              style={{
                width: i === currentPhoto ? 24 : 6,
                height: 6,
                borderRadius: 3,
                background: i === currentPhoto ? "#B08D57" : "rgba(176,141,87,0.3)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 480px) {
          .hero-section {
            min-height: 100svh;
            padding-top: 80px;
          }
        }
      `}</style>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#floors", label: t.nav.floors },
    { href: "#conditions", label: t.nav.conditions },
    { href: "#advantages", label: t.nav.advantages },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(26,26,26,0.97)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(176,141,87,0.2)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? 64 : 80,
          transition: "height 0.3s ease",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.svg"
            alt="Zarafshon Mall"
            width={180}
            height={40}
            style={{ height: 36, width: "auto", filter: "invert(1) sepia(1) saturate(2) hue-rotate(10deg) brightness(0.85)" }}
          />
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "rgba(245,240,232,0.75)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.02em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#B08D57")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(245,240,232,0.75)")
              }
            >
              {link.label}
            </a>
          ))}

          {/* Lang switcher */}
          <div style={{ display: "flex", gap: 4 }}>
            {(["uz", "ru"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: "4px 10px",
                  borderRadius: 4,
                  border: lang === l ? "1px solid #B08D57" : "1px solid rgba(176,141,87,0.3)",
                  background: lang === l ? "rgba(176,141,87,0.15)" : "transparent",
                  color: lang === l ? "#B08D57" : "rgba(245,240,232,0.5)",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  textTransform: "uppercase",
                }}
              >
                {l}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            style={{
              padding: "10px 20px",
              background: "linear-gradient(135deg, #B08D57, #C9A96E)",
              color: "#1A1A1A",
              textDecoration: "none",
              borderRadius: 6,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.03em",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {t.nav.apply}
          </a>
        </nav>

        {/* Mobile: lang + burger */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }} className="show-mobile">
          <div style={{ display: "flex", gap: 4 }}>
            {(["uz", "ru"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: "3px 8px",
                  borderRadius: 4,
                  border: lang === l ? "1px solid #B08D57" : "1px solid rgba(176,141,87,0.3)",
                  background: lang === l ? "rgba(176,141,87,0.15)" : "transparent",
                  color: lang === l ? "#B08D57" : "rgba(245,240,232,0.5)",
                  fontSize: 11,
                  fontWeight: 600,
                  cursor: "pointer",
                  textTransform: "uppercase",
                }}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              color: "#F5F0E8",
            }}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(26,26,26,0.98)",
            borderTop: "1px solid rgba(176,141,87,0.2)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
          className="show-mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(245,240,232,0.8)",
                textDecoration: "none",
                fontSize: 16,
                fontWeight: 500,
                padding: "12px 0",
                borderBottom: "1px solid rgba(176,141,87,0.1)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 16,
              padding: "14px 20px",
              background: "linear-gradient(135deg, #B08D57, #C9A96E)",
              color: "#1A1A1A",
              textDecoration: "none",
              borderRadius: 6,
              fontSize: 15,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            {t.nav.apply}
          </a>
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

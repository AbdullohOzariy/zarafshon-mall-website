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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "#floors", label: t.nav.floors },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#conditions", label: t.nav.conditions },
    { href: "#advantages", label: t.nav.advantages },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#" className="navbar-logo">
          <Image
            src="/logo.svg"
            alt="Zarafshon Mall"
            width={180}
            height={40}
            style={{ height: 34, width: "auto", filter: "invert(1) sepia(1) saturate(2) hue-rotate(10deg) brightness(0.85)" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: lang + CTA */}
        <div className="navbar-right">
          <div className="lang-switcher">
            {(["uz", "ru"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`lang-btn${lang === l ? " lang-btn--active" : ""}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#contact" className="navbar-cta">
            {t.nav.apply}
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className={`navbar-burger${menuOpen ? " navbar-burger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={menuOpen}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="burger-icon burger-icon--menu"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="burger-icon burger-icon--close"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile menu — always in DOM, shown via class toggle */}
      <div className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div className="mobile-footer">
          <div className="lang-switcher">
            {(["uz", "ru"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`lang-btn${lang === l ? " lang-btn--active" : ""}`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#contact" className="navbar-cta" onClick={() => setMenuOpen(false)}>
            {t.nav.apply}
          </a>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: background 0.3s, border-color 0.3s, height 0.3s;
          border-bottom: 1px solid transparent;
        }
        .navbar--scrolled {
          background: rgba(18,18,18,0.96);
          backdrop-filter: blur(14px);
          border-bottom-color: rgba(176,141,87,0.18);
        }
        .navbar-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 28px;
          display: flex;
          align-items: center;
          gap: 40px;
          height: 72px;
          transition: height 0.3s;
        }
        .navbar--scrolled .navbar-inner {
          height: 62px;
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          text-decoration: none;
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 28px;
          flex: 1;
        }
        .navbar-link {
          color: rgba(245,240,232,0.65);
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .navbar-link:hover { color: #C9A96E; }

        .navbar-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        /* Lang switcher */
        .lang-switcher {
          display: flex;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(176,141,87,0.2);
          border-radius: 8px;
          overflow: hidden;
        }
        .lang-btn {
          padding: 5px 12px;
          background: transparent;
          border: none;
          color: rgba(245,240,232,0.4);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.18s;
        }
        .lang-btn:hover { color: rgba(245,240,232,0.75); }
        .lang-btn--active {
          background: rgba(176,141,87,0.2);
          color: #C9A96E;
        }

        /* CTA */
        .navbar-cta {
          padding: 9px 20px;
          background: linear-gradient(135deg, #B08D57, #C9A96E);
          color: #111;
          text-decoration: none;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.02em;
          white-space: nowrap;
          transition: opacity 0.2s, transform 0.2s;
          display: inline-block;
        }
        .navbar-cta:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        /* Burger — hidden on desktop */
        .navbar-burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #F5F0E8;
          padding: 10px;
          margin: -6px;
          margin-left: auto;
          position: relative;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
        }
        .burger-icon {
          position: absolute;
          transition: opacity 0.2s, transform 0.2s;
        }
        .burger-icon--menu {
          opacity: 1;
          transform: rotate(0deg);
        }
        .burger-icon--close {
          opacity: 0;
          transform: rotate(-90deg);
        }
        .navbar-burger--open .burger-icon--menu {
          opacity: 0;
          transform: rotate(90deg);
        }
        .navbar-burger--open .burger-icon--close {
          opacity: 1;
          transform: rotate(0deg);
        }

        /* Mobile menu — always in DOM, transition via max-height */
        .mobile-menu {
          background: rgba(14,14,14,0.98);
          border-top: 1px solid transparent;
          padding: 0 28px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.32s ease, opacity 0.24s ease, border-color 0.24s, padding 0.24s;
        }
        .mobile-menu--open {
          max-height: 500px;
          opacity: 1;
          border-top-color: rgba(176,141,87,0.15);
          padding: 8px 28px 24px;
        }
        .mobile-link {
          color: rgba(245,240,232,0.75);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          padding: 16px 0;
          border-bottom: 1px solid rgba(176,141,87,0.08);
          display: block;
        }
        .mobile-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 16px;
        }

        @media (max-width: 768px) {
          .navbar-links { display: none; }
          .navbar-right { display: none; }
          .navbar-burger { display: flex; }
        }
      `}</style>
    </header>
  );
}

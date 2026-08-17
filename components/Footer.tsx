"use client";

import Image from "next/image";
import { useLang } from "@/lib/LangContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer
      style={{
        background: "#111",
        borderTop: "1px solid rgba(176,141,87,0.15)",
        padding: "60px 24px 32px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Image
              src="/logo.svg"
              alt="Zarafshon Mall"
              width={200}
              height={45}
              style={{
                height: 38,
                width: "auto",
                marginBottom: 16,
                filter:
                  "invert(1) sepia(1) saturate(2) hue-rotate(10deg) brightness(0.85)",
              }}
            />
            <p
              style={{
                color: "rgba(245,240,232,0.4)",
                fontSize: 14,
                lineHeight: 1.7,
                marginBottom: 8,
              }}
            >
              {t.footer.tagline}
            </p>
            {/* Social links */}
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {[
                {
                  href: "https://t.me/zarafshonmall",
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  ),
                },
                {
                  href: "https://instagram.com/zarafshonmall",
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    border: "1px solid rgba(176,141,87,0.2)",
                    background: "rgba(176,141,87,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#B08D57",
                    transition: "all 0.2s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(176,141,87,0.15)";
                    e.currentTarget.style.borderColor = "rgba(176,141,87,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(176,141,87,0.05)";
                    e.currentTarget.style.borderColor = "rgba(176,141,87,0.2)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{
                color: "rgba(245,240,232,0.35)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Navigation
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { href: "#gallery", label: t.nav.gallery },
                { href: "#conditions", label: t.nav.conditions },
                { href: "#advantages", label: t.nav.advantages },
                { href: "#contact", label: t.nav.contact },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "rgba(245,240,232,0.45)",
                    textDecoration: "none",
                    fontSize: 14,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#B08D57")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(245,240,232,0.45)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4
              style={{
                color: "rgba(245,240,232,0.35)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              {t.contact.info.title}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  color: "rgba(245,240,232,0.45)",
                  fontSize: 13,
                  lineHeight: 1.5,
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B08D57"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0, marginTop: 1 }}
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                {t.contact.info.address}
              </div>
              {t.contact.info.phones.map((p, i) => (
                <a
                  key={i}
                  href={`tel:${p.replace(/\s/g, "")}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: "#C9A96E",
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#B08D57"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.8 19.79 19.79 0 0 1 .22 1.18 2 2 0 0 1 2.18 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.91 7.91a16 16 0 0 0 6.09 6.09l1.27-.54a2 2 0 0 1 2.11.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {p}
                </a>
              ))}
              <a
                href={`mailto:${t.contact.info.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "rgba(245,240,232,0.45)",
                  fontSize: 13,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#B08D57")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(245,240,232,0.45)")
                }
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B08D57"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {t.contact.info.email}
              </a>
              <a
                href={`https://${t.contact.info.website}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  color: "rgba(245,240,232,0.45)",
                  fontSize: 13,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#B08D57")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(245,240,232,0.45)")
                }
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B08D57"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 1 0 20A14.5 14.5 0 0 1 12 2" />
                  <path d="M2 12h20" />
                </svg>
                {t.contact.info.website}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 24,
            borderTop: "1px solid rgba(176,141,87,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "rgba(245,240,232,0.25)", fontSize: 13 }}>
            {t.footer.rights}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "rgba(245,240,232,0.2)",
              fontSize: 12,
            }}
          >
            <span>Zarafshon shahri, 2026</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}

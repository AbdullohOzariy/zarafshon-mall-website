"use client";

import { useLang } from "@/lib/LangContext";

const advantageIcons = [
  <svg key="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>,
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="12" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <circle cx="8.5" cy="13.5" r="1.5"/>
    <circle cx="15.5" cy="13.5" r="1.5"/>
  </svg>,
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
  <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
  </svg>,
  <svg key="4" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 12 2 2 4-4"/>
    <path d="M12 3a9 9 0 1 0 0 18A9 9 0 0 0 12 3Z"/>
  </svg>,
  <svg key="5" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>,
];

export default function Advantages() {
  const { t } = useLang();

  return (
    <section id="advantages" className="adv-section">
      <div className="adv-container">

        {/* Header */}
        <div className="adv-header">
          <p className="adv-eyebrow">USTUNLIKLAR</p>
          <h2 className="adv-title">{t.advantages.title}</h2>
          <p className="adv-subtitle">{t.advantages.subtitle}</p>
        </div>

        {/* Cards grid */}
        <div className="adv-grid">
          {t.advantages.items.map((item, i) => (
            <div key={i} className="adv-card">
              <div className="adv-icon-wrap">
                {advantageIcons[i]}
              </div>
              <h3 className="adv-card-title">{item.title}</h3>
              <p className="adv-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .adv-section {
          padding: 120px 24px;
          background: #181818;
          position: relative;
          overflow: hidden;
        }
        .adv-section::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(176,141,87,0.3), transparent);
        }
        .adv-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .adv-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .adv-eyebrow {
          color: #B08D57;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .adv-title {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          color: #F5F0E8;
          letter-spacing: -0.02em;
          margin-bottom: 14px;
        }
        .adv-subtitle {
          color: rgba(245,240,232,0.45);
          font-size: 16px;
          max-width: 440px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* 3-column grid */
        .adv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          border: 1px solid rgba(176,141,87,0.12);
          border-radius: 20px;
          overflow: hidden;
          background: rgba(176,141,87,0.08);
        }

        .adv-card {
          padding: 40px 36px;
          background: #181818;
          transition: background 0.22s;
          position: relative;
        }
        .adv-card:hover {
          background: rgba(176,141,87,0.05);
        }

        /* top accent line on hover */
        .adv-card::after {
          content: '';
          position: absolute;
          top: 0; left: 36px; right: 36px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #B08D57, transparent);
          opacity: 0;
          transition: opacity 0.25s;
        }
        .adv-card:hover::after {
          opacity: 1;
        }

        .adv-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: rgba(176,141,87,0.1);
          border: 1px solid rgba(176,141,87,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #B08D57;
          margin-bottom: 24px;
          transition: background 0.22s, border-color 0.22s;
        }
        .adv-card:hover .adv-icon-wrap {
          background: rgba(176,141,87,0.18);
          border-color: rgba(176,141,87,0.45);
        }

        .adv-card-title {
          font-size: 17px;
          font-weight: 700;
          color: #F5F0E8;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .adv-card-desc {
          color: rgba(245,240,232,0.48);
          font-size: 14px;
          line-height: 1.7;
        }

        @media (max-width: 1024px) {
          .adv-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .adv-grid {
            grid-template-columns: 1fr;
          }
          .adv-section {
            padding: 80px 16px;
          }
          .adv-card {
            padding: 28px 20px;
          }
        }
        @media (max-width: 480px) {
          .adv-card {
            padding: 28px 16px;
          }
          .adv-card::after {
            left: 16px;
            right: 16px;
          }
        }
      `}</style>
    </section>
  );
}

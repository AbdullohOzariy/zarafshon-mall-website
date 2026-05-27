"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";

const floorImages = ["/floor-minus1.png", "/floor-1.svg", "/floor-2.svg", "/floor-3.png"];

const floorIcons = [
  // Podval (-1): sofa / home furnishing
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3"/>
    <path d="M3 10a2 2 0 0 0-2 2v3h22v-3a2 2 0 0 0-2-2H3Z"/>
    <path d="M5 15v3m14-3v3"/>
  </svg>,
  // 1-qavat: shopping bag
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
    <path d="M3 6h18"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>,
  // 2-qavat: clothes hanger
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.38 18H3.62a1 1 0 0 1-.7-1.71L12 8"/>
    <path d="M12 8V5"/>
    <path d="M10 5a2 2 0 1 1 4 0"/>
  </svg>,
  // 3-qavat: game controller
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="12" x2="10" y2="12"/>
    <line x1="8" y1="10" x2="8" y2="14"/>
    <line x1="15" y1="13" x2="15.01" y2="13"/>
    <line x1="18" y1="11" x2="18.01" y2="11"/>
    <rect x="2" y="8" width="20" height="10" rx="4"/>
  </svg>,
];

export default function Floors() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const item = t.floors.items[active];

  return (
    <section id="floors" className="floors-section">
      <div className="floors-container">

        {/* Header */}
        <div className="floors-header">
          <p className="floors-eyebrow">ZARAFSHON MALL</p>
          <h2 className="floors-title">{t.floors.title}</h2>
          <p className="floors-subtitle">{t.floors.subtitle}</p>
        </div>

        {/* Tab bar */}
        <div className="floors-tabs">
          {t.floors.items.map((fl, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`floors-tab${active === i ? " floors-tab--active" : ""}`}
            >
              <span className="floors-tab-icon">{floorIcons[i]}</span>
              <span className="floors-tab-label">{fl.floor}</span>
            </button>
          ))}
        </div>

        {/* Content: image left, info right */}
        <div className="floors-content">
          {/* Floor plan image */}
          <div className="floors-image-wrap">
            <div className="floors-image-badge">{floorIcons[active]} {item.floor}</div>
            <Image
              key={active}
              src={floorImages[active]}
              alt={item.floor}
              width={800}
              height={560}
              className="floors-image"
            />
          </div>

          {/* Info panel */}
          <div className="floors-info">
            <h3 className="floors-info-title">{item.floor}</h3>
            <p className="floors-info-desc">{item.description}</p>

            <div className="floors-tags">
              {item.tags.map((tag, i) => (
                <span key={i} className="floors-tag">{tag}</span>
              ))}
            </div>

            {/* Floor number indicator */}
            <div className="floors-levels">
              {[...t.floors.items].reverse().map((fl, ri) => {
                const idx = t.floors.items.length - 1 - ri;
                return (
                  <div
                    key={ri}
                    className={`floors-level${active === idx ? " floors-level--active" : ""}`}
                    onClick={() => setActive(idx)}
                  >
                    <span className="floors-level-icon">{floorIcons[idx]}</span>
                    <span className="floors-level-name">{fl.floor}</span>
                  </div>
                );
              })}
            </div>

            <a href="#contact" className="floors-cta">
              Bu qavatda joy bron qilish
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .floors-section {
          padding: 120px 24px;
          background: #141414;
        }
        .floors-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header */
        .floors-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .floors-eyebrow {
          color: #B08D57;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .floors-title {
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 700;
          color: #F5F0E8;
          letter-spacing: -0.02em;
          margin-bottom: 14px;
        }
        .floors-subtitle {
          color: rgba(245,240,232,0.45);
          font-size: 16px;
          max-width: 460px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Tabs */
        .floors-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 32px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(176,141,87,0.12);
          border-radius: 14px;
          padding: 6px;
        }
        .floors-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 10px;
          border: none;
          background: transparent;
          cursor: pointer;
          transition: all 0.2s;
          color: rgba(245,240,232,0.45);
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
        }
        .floors-tab:hover {
          background: rgba(176,141,87,0.07);
          color: rgba(245,240,232,0.75);
        }
        .floors-tab--active {
          background: rgba(176,141,87,0.15);
          border: 1px solid rgba(176,141,87,0.35) !important;
          color: #C9A96E !important;
        }
        .floors-tab-icon {
          font-size: 18px;
        }
        .floors-tab-label {
          font-size: 13px;
        }

        /* Content grid */
        .floors-content {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 28px;
          align-items: start;
        }

        /* Image */
        .floors-image-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(176,141,87,0.18);
          background: rgba(255,255,255,0.97);
          min-height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .floors-image-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
          background: rgba(20,20,20,0.82);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(176,141,87,0.3);
          color: #C9A96E;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.03em;
          padding: 6px 12px;
          border-radius: 8px;
        }
        .floors-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }

        /* Info panel */
        .floors-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 32px;
          border-radius: 16px;
          border: 1px solid rgba(176,141,87,0.15);
          background: linear-gradient(160deg, rgba(176,141,87,0.06) 0%, rgba(255,255,255,0.01) 100%);
        }
        .floors-info-title {
          font-size: 24px;
          font-weight: 700;
          color: #C9A96E;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .floors-info-desc {
          color: rgba(245,240,232,0.6);
          font-size: 15px;
          line-height: 1.7;
          margin: 0;
        }

        /* Tags */
        .floors-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .floors-tag {
          padding: 5px 14px;
          border-radius: 100px;
          border: 1px solid rgba(176,141,87,0.3);
          color: #B08D57;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        /* Floor level list */
        .floors-levels {
          display: flex;
          flex-direction: column;
          gap: 4px;
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(176,141,87,0.1);
        }
        .floors-level {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          cursor: pointer;
          transition: background 0.18s;
          background: rgba(255,255,255,0.02);
          border-bottom: 1px solid rgba(176,141,87,0.07);
        }
        .floors-level:last-child {
          border-bottom: none;
        }
        .floors-level:hover {
          background: rgba(176,141,87,0.06);
        }
        .floors-level--active {
          background: rgba(176,141,87,0.12) !important;
        }
        .floors-level-icon {
          font-size: 15px;
        }
        .floors-level-name {
          font-size: 12px;
          font-weight: 600;
          color: rgba(245,240,232,0.5);
        }
        .floors-level--active .floors-level-name {
          color: #C9A96E;
        }

        /* CTA */
        .floors-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #B08D57;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          padding-top: 16px;
          border-top: 1px solid rgba(176,141,87,0.12);
          transition: gap 0.2s;
        }
        .floors-cta:hover {
          gap: 12px;
          color: #C9A96E;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .floors-content {
            grid-template-columns: 1fr;
          }
          .floors-tab-label {
            display: none;
          }
          .floors-tab {
            padding: 12px;
          }
        }
        @media (max-width: 540px) {
          .floors-section {
            padding: 80px 16px;
          }
          .floors-info {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
}

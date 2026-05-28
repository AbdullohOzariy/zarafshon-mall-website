"use client";

import Image from "next/image";
import { useLang } from "@/lib/LangContext";

const allImages = [
  "/gallery/ext-1.jpg",
  "/gallery/int-1.jpg",
  "/gallery/int-2.jpg",
  "/gallery/ext-2.jpg",
  "/gallery/int-3.jpg",
  "/gallery/int-4.jpg",
  "/gallery/ext-3.jpg",
  "/gallery/int-5.jpg",
  "/gallery/int-6.jpg",
  "/gallery/ext-4.jpg",
  "/gallery/int-7.jpg",
  "/gallery/int-8.jpg",
  "/gallery/ext-5.jpg",
  "/gallery/int-9.jpg",
  "/gallery/int-10.jpg",
  "/gallery/int-11.jpg",
  "/gallery/int-12.jpg",
  "/gallery/int-13.jpg",
  "/gallery/int-14.jpg",
  "/gallery/int-15.jpg",
  "/gallery/int-16.jpg",
  "/gallery/int-17.jpeg",
  "/gallery/int-18.png",
];

const mid = Math.ceil(allImages.length / 2);
const row1Images = allImages.slice(0, mid);
const row2Images = allImages.slice(mid);

function ScrollRow({
  images,
  reverse = false,
  speed = 40,
}: {
  images: string[];
  reverse?: boolean;
  speed?: number;
}) {
  // Duplicate for seamless loop
  const doubled = [...images, ...images];

  return (
    <div className="gallery-track-wrap">
      <div
        className={`gallery-track${reverse ? " gallery-track--reverse" : ""}`}
        style={{ "--speed": `${speed}s` } as React.CSSProperties}
      >
        {doubled.map((src, i) => (
          <div key={i} className="gallery-item">
            <Image
              src={src}
              alt=""
              width={480}
              height={320}
              className="gallery-img"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  const { lang } = useLang();

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <p className="gallery-eyebrow">ZARAFSHON MALL</p>
        <h2 className="gallery-title">
          {lang === "ru" ? "Дизайн проекта" : "Loyiha dizayni"}
        </h2>
        <p className="gallery-subtitle">
          {lang === "ru"
            ? "Интерьер и экстерьер современного торгового центра"
            : "Zamonaviy savdo markazining ichki va tashqi ko'rinishi"}
        </p>
      </div>

      {/* Row 1 — left to right */}
      <ScrollRow images={row1Images} speed={90} />

      {/* Row 2 — right to left */}
      <ScrollRow images={row2Images} reverse speed={90} />

      <style>{`
        .gallery-section {
          padding: 100px 0 0;
          background: #111;
          overflow: hidden;
        }

        .gallery-header {
          text-align: center;
          padding: 0 24px;
          margin-bottom: 52px;
        }
        .gallery-eyebrow {
          color: #B08D57;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .gallery-title {
          font-size: clamp(26px, 4vw, 46px);
          font-weight: 700;
          color: #F5F0E8;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
        }
        .gallery-subtitle {
          color: rgba(245,240,232,0.45);
          font-size: 16px;
          line-height: 1.6;
        }

        /* Scroll track */
        .gallery-track-wrap {
          overflow: hidden;
          margin-bottom: 16px;
          /* fade edges */
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .gallery-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: gallery-scroll var(--speed, 40s) linear infinite;
        }
        .gallery-track--reverse {
          animation-direction: reverse;
        }
        .gallery-track:hover {
          animation-play-state: paused;
        }

        @keyframes gallery-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .gallery-item {
          flex-shrink: 0;
          width: 420px;
          height: 280px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(176,141,87,0.12);
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .gallery-item:hover .gallery-img {
          transform: scale(1.04);
        }

        @media (max-width: 768px) {
          .gallery-section { padding-top: 72px; }
          .gallery-item { width: 280px; height: 190px; }
          .gallery-track-wrap { margin-bottom: 12px; }
        }
        @media (max-width: 480px) {
          .gallery-item { width: 220px; height: 150px; }
        }
      `}</style>
    </section>
  );
}

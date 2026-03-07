"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/siteConfig";

const highlights: { zh: string; en: string }[] = [
  {
    zh: "六大板块能力雷达（代数/几何/数论/计数/应用/序列）",
    en: "Skill radar (6 domains)",
  },
  {
    zh: "速度 × 正确率画像（快对/慢对/快错/慢错）",
    en: "Speed & accuracy matrix",
  },
  {
    zh: "薄弱点定位 + 自动生成错题集（练习包）",
    en: "Weak topics → auto-generated practice pack",
  },
  {
    zh: "逐题用时分析（是否犹豫、时间分配）",
    en: "Per-question time analysis",
  },
  {
    zh: "同级对比与排名概览（可选）",
    en: "Ranking / cohort summary (optional)",
  },
];

/**
 * Single source of truth: tab labels, slide image (via imageIndex into reportImages), and description.
 * imageIndex maps to siteConfig.reportImages: report1=0, report2=1, report3=2, report4=3.
 */
const slides: { zh: string; en: string; hint: string; imageIndex: number }[] = [
  { zh: "总览报告", en: "Overview", hint: "分数、正确率、用时与关键结论一页看懂", imageIndex: 0 },
  { zh: "错题集", en: "Practice Pack", hint: "薄弱点定位后，一键生成错题集与练习包", imageIndex: 3 },
  { zh: "能力画像", en: "Skill Profile", hint: "雷达图 + 薄弱知识点 + 时间/得分曲线", imageIndex: 2 },
  { zh: "逐题诊断", en: "Question Review", hint: "正误分布、标签、解析与错因定位", imageIndex: 1 },
];

export function PlatformPreviewCarousel() {
  const [index, setIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const images = siteConfig.reportImages;
  const currentSlide = slides[index];
  const currentImage =
    currentSlide != null && images[currentSlide.imageIndex] != null
      ? images[currentSlide.imageIndex]
      : images[0];

  const goTo = (i: number) => {
    setIndex(Math.max(0, Math.min(i, slides.length - 1)));
    setImageError(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (dx < -50) goTo(index + 1);
    else if (dx > 50) goTo(index - 1);
    setTouchStartX(null);
  };

  return (
    <section className="bg-white py-10 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
            See what parents receive after every test
          </h2>
          <p className="mt-2 text-base font-normal text-navy-500 sm:text-lg">
            每次测评后，家长都会收到一份清晰、可执行的学习报告
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h.en} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div>
                    <span className="text-navy-800 text-sm leading-snug sm:text-base">
                      {h.zh}
                    </span>
                    <p className="mt-0.5 text-xs text-navy-500">{h.en}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-navy-600">
              报告重点：不仅是分数，更能自动生成错题集与练习包。
            </p>
            <p className="mt-1 text-xs text-navy-500">
              Not just a score — diagnosis + auto-generated practice.
            </p>
          </div>

          <div className="relative">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-navy-200 bg-navy-100"
              onClick={() => setZoomOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setZoomOpen(true)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative flex h-full w-full items-center justify-center"
                >
                  {!imageError ? (
                    <Image
                      src={currentImage}
                      alt={currentSlide ? `${currentSlide.zh} report screenshot` : "Report screenshot"}
                      fill
                      className="cursor-pointer object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                      onError={() => setImageError(true)}
                    />
                  ) : null}
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-navy-100 text-navy-500 ${
                      imageError ? "" : "pointer-events-none opacity-0"
                    }`}
                  >
                    Report screenshot {index + 1}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Tabs: full-bleed so left/right pills are not cut off (extend into section padding) */}
            <div className="mt-4 overflow-visible -mx-4 sm:-mx-6 lg:-mx-8">
              <div className="flex flex-nowrap justify-center gap-2 overflow-visible">
                {slides.map((slide, i) => (
                  <button
                    key={slide.en}
                    type="button"
                    onClick={() => goTo(i)}
                    className={`shrink-0 rounded-full border px-3 py-1.5 text-center text-sm font-medium transition sm:px-4 sm:py-2 ${
                      i === index
                        ? "border-accent bg-accent text-white"
                        : "border-navy-200 bg-white text-navy-600 hover:border-navy-300 hover:bg-navy-50"
                    }`}
                  >
                    <span className="whitespace-nowrap">{slide.zh}</span>
                    <span className="ml-1.5 text-xs opacity-90">/ {slide.en}</span>
                  </button>
                ))}
              </div>
              {currentSlide && (
                <p className="mt-2 text-center text-xs text-navy-500">
                  {currentSlide.hint}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Click to zoom modal */}
      <AnimatePresence>
        {zoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/80 p-4"
            onClick={() => setZoomOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-h-[90vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {!imageError ? (
                <Image
                  src={currentImage}
                  alt="Report zoomed"
                  width={800}
                  height={600}
                  className="max-h-[90vh] w-auto rounded-lg object-contain"
                  unoptimized
                />
              ) : (
                <div className="rounded-lg bg-navy-100 px-12 py-8 text-navy-500">
                  Report screenshot placeholder
                </div>
              )}
              <button
                type="button"
                className="absolute -right-2 -top-2 rounded-full bg-white p-1 text-navy-900 shadow-lg hover:bg-navy-100"
                onClick={() => setZoomOpen(false)}
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

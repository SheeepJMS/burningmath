"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/siteConfig";

const heroBodyCopy =
  "Personalized coaching for G4–G12 across AMC, COMC, and the Waterloo contest pathway — supported by a data-driven system that turns each test into clear next steps.";

export function Hero() {
  const [coachCardError, setCoachCardError] = useState(false);
  const [coachCardFallbackError, setCoachCardFallbackError] = useState(false);
  const coachCardSrc = coachCardError ? siteConfig.coachPortraitImage : siteConfig.heroCoachCardImage;
  const showCoachPlaceholder = coachCardError && coachCardFallbackError;

  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Full-width mobile container; desktop keeps max-w-7xl two-column grid */}
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 gap-8 px-4 py-12 sm:px-5 sm:py-16 md:gap-10 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        {/* A. Brand/title block → B. Chips → C. CTAs (mobile: vertical stack); desktop: left column */}
        <div className="flex min-w-0 flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
              {siteConfig.brand.name}
            </h1>
            <p className="mt-1.5 text-sm font-normal tracking-tight text-navy-300 sm:mt-2 sm:text-base md:text-lg">
              烧脑数学 / 专业数学竞赛培训与成长平台
            </p>
            <p className="mt-2 text-base font-medium text-accent sm:mt-3 sm:text-lg md:text-xl">
              {siteConfig.brand.tagline}
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="mt-3 max-w-xl text-navy-200 text-sm leading-snug sm:mt-4 sm:text-base sm:leading-relaxed md:leading-relaxed"
          >
            {heroBodyCopy}
          </motion.p>
          <p className="mt-2 text-sm text-navy-300 sm:text-base">
            Competition math coaching for students in Vancouver, Richmond, and Greater Vancouver.
          </p>
          <p className="mt-0.5 text-xs text-navy-400">
            面向温哥华、列治文及大温地区学生的竞赛数学培训与诊断平台。
          </p>

          {/* B. Results chips – wrap into 2 rows, tight spacing on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="mt-4 flex flex-wrap gap-2 sm:mt-6"
          >
            {siteConfig.heroMetrics.map((m) => (
              <span
                key={m}
                className="rounded-full border border-navy-500/60 bg-navy-800/60 px-3 py-1 text-xs font-medium text-navy-100"
              >
                {m}
              </span>
            ))}
          </motion.div>

          {/* C. CTAs – mobile: vertical stack, full-width buttons; desktop: row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 flex flex-col gap-3 sm:mt-8 md:flex-row md:flex-wrap md:items-center md:gap-4"
          >
            <Link
              href="/contact#booking"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-accent-dark md:w-auto"
            >
              Book a Trial
            </Link>
            <Link
              href={siteConfig.diagnosticUrl}
              className="inline-flex w-full items-center justify-center rounded-full border border-navy-500 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800 md:w-auto"
            >
              Take a Diagnostic Test
            </Link>
            <Link
              href={siteConfig.platformUrl}
              className="text-center text-sm font-medium text-accent-light hover:underline md:text-left"
            >
              Explore the Platform
            </Link>
          </motion.div>
        </div>

        {/* D. Coach profile card – mobile: full width below CTAs; desktop: right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex w-full items-center justify-center lg:justify-center"
        >
          <Link
            href="/coach"
            className="block w-full max-w-full rounded-2xl border border-navy-700/30 bg-navy-900/90 p-3 shadow-xl backdrop-blur-sm transition hover:border-navy-600/50 sm:p-4 lg:max-w-[380px] lg:p-5"
          >
            {/* Portrait – mobile-friendly aspect, no fixed width */}
            <div className="relative w-full overflow-hidden rounded-xl bg-slate-100/95">
              <div className="relative mx-auto flex aspect-[4/3] max-w-full items-center justify-center px-2 py-2 sm:aspect-[5/3] sm:px-4 sm:py-3">
                <div className="relative h-full w-full overflow-hidden rounded-lg">
                  {showCoachPlaceholder ? (
                    <div className="flex h-full w-full items-center justify-center bg-slate-200 text-slate-500 text-xs">
                      Coach
                    </div>
                  ) : (
                    <Image
                      src={coachCardSrc}
                      alt="James Zeng, Coach"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1023px) 100vw, 360px"
                      unoptimized
                      onError={() =>
                        coachCardError
                          ? setCoachCardFallbackError(true)
                          : setCoachCardError(true)
                      }
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Text block – tighter on mobile */}
            <div className="mt-3 space-y-1 text-left sm:mt-4 sm:space-y-1.5">
              <p className="text-sm font-bold leading-tight text-white sm:text-base md:text-lg">
                James Zeng
              </p>
              <p className="text-xs font-medium leading-snug text-navy-300 sm:text-sm">
                Competition Math Coach
              </p>
              <p className="text-[11px] leading-relaxed text-navy-400 sm:text-xs">
                CMO Silver · National Math League First Prize · NJU Dual Degree (Math + Electronics)
              </p>
              <p className="mt-1.5 text-xs font-medium text-accent/90 sm:mt-2">Meet the Coach →</p>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

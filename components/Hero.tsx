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
      {/* Mobile: compact single column, 16px padding; desktop: max-w-7xl two-column */}
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 gap-5 px-4 py-8 sm:gap-6 sm:py-10 md:gap-10 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        {/* A. Text block → B. Chips → C. CTAs (mobile: compact); desktop: left column */}
        <div className="flex min-w-0 flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl md:text-4xl lg:text-5xl">
              {siteConfig.brand.name}
            </h1>
            <p className="mt-1 text-xs font-normal tracking-tight text-navy-300 sm:mt-1.5 sm:text-sm md:text-lg">
              烧脑数学 / 专业数学竞赛培训与成长平台
            </p>
            <p className="mt-1.5 text-sm font-medium text-accent sm:mt-2 md:text-lg lg:text-xl">
              {siteConfig.brand.tagline}
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="mt-2 max-w-xl text-navy-200 text-xs leading-snug sm:mt-3 sm:text-sm md:text-base md:leading-relaxed"
          >
            {heroBodyCopy}
          </motion.p>
          <p className="mt-1.5 text-xs text-navy-300 sm:text-sm">
            Serving students across Vancouver, Richmond, Burnaby, West Vancouver, and Delta, including Vancouver West and Vancouver East.
          </p>
          <p className="mt-0.5 text-[11px] text-navy-400">
            服务温哥华、列治文、本拿比、西温及三角洲地区学生，包括温西和温东。
          </p>

          {/* B. Results chips – compact pills on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 md:mt-6 md:gap-2"
          >
            {siteConfig.heroMetrics.map((m) => (
              <span
                key={m}
                className="rounded-full border border-navy-500/60 bg-navy-800/60 px-2.5 py-0.5 text-[11px] font-medium text-navy-100 sm:px-3 sm:py-1 sm:text-xs"
              >
                {m}
              </span>
            ))}
          </motion.div>

          {/* C. CTAs – mobile: full-width, slimmer buttons; desktop: row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-4 flex flex-col gap-2.5 sm:mt-5 md:mt-8 md:flex-row md:flex-wrap md:items-center md:gap-4"
          >
            <Link
              href="/contact#booking"
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-accent-dark md:w-auto md:px-6 md:py-3"
            >
              Book a Trial
            </Link>
            <Link
              href={siteConfig.diagnosticUrl}
              className="inline-flex w-full items-center justify-center rounded-full border border-navy-500 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800 md:w-auto md:px-6 md:py-3"
            >
              Take a Diagnostic Test
            </Link>
            <Link
              href={siteConfig.platformUrl}
              className="text-center text-xs font-medium text-accent-light hover:underline md:text-left md:text-sm"
            >
              Explore the Platform
            </Link>
          </motion.div>
        </div>

        {/* D. Coach card – mobile: compact trust element; desktop: right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex w-full items-center justify-center lg:justify-center"
        >
          <Link
            href="/coach"
            className="block w-full max-w-full rounded-[18px] border border-navy-700/30 bg-navy-900/90 p-2.5 shadow-xl backdrop-blur-sm transition hover:border-navy-600/50 sm:p-3 md:rounded-2xl md:p-4 lg:max-w-[380px] lg:p-5"
          >
            <div className="relative w-full overflow-hidden rounded-lg bg-slate-100/95 md:rounded-xl">
              <div className="relative mx-auto flex aspect-[8/4] max-w-full items-center justify-center px-1.5 py-1.5 sm:aspect-[5/3] sm:px-3 sm:py-2 md:px-4 md:py-3">
                <div className="relative h-full w-full overflow-hidden rounded-md sm:rounded-lg">
                  {showCoachPlaceholder ? (
                    <div className="flex h-full w-full items-center justify-center bg-slate-200 text-slate-500 text-[10px]">
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
            <div className="mt-2 space-y-0.5 text-left sm:mt-3 sm:space-y-1 md:mt-4 md:space-y-1.5">
              <p className="text-xs font-bold leading-tight text-white sm:text-sm md:text-base lg:text-lg">
                James Zeng
              </p>
              <p className="text-[11px] font-medium leading-snug text-navy-300 sm:text-xs md:text-sm">
                Competition Math Coach
              </p>
              <p className="text-[10px] leading-relaxed text-navy-400 sm:text-[11px] md:text-xs">
                CMO Silver · National Math League First Prize · NJU Dual Degree (Math + Electronics)
              </p>
              <p className="mt-1 text-[11px] font-medium text-accent/90 sm:mt-1.5 sm:text-xs md:mt-2">Meet the Coach →</p>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

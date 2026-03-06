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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:px-8">
        {/* Left: headline, subtitle, body, 3 chips, CTAs only */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {siteConfig.brand.name}
            </h1>
            <p className="mt-2 text-base font-normal tracking-tight text-navy-300 sm:text-lg">
              烧脑数学 / 专业数学竞赛培训与成长平台
            </p>
            <p className="mt-3 text-lg font-medium text-accent sm:text-xl">
              {siteConfig.brand.tagline}
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="mt-4 max-w-xl text-navy-200 text-base leading-relaxed"
          >
            {heroBodyCopy}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="mt-6 flex flex-wrap gap-2"
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

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact#booking"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-accent-dark"
            >
              Book a Trial
            </Link>
            <Link
              href={siteConfig.diagnosticUrl}
              className="inline-flex items-center justify-center rounded-full border border-navy-500 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
            >
              Take a Diagnostic Test
            </Link>
            <Link
              href={siteConfig.platformUrl}
              className="text-sm font-medium text-accent-light hover:underline"
            >
              Explore the Platform
            </Link>
          </motion.div>
        </div>

        {/* Right: single premium coach profile card — links to /coach */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center"
        >
          <Link
            href="/coach"
            className="block w-full max-w-[380px] rounded-2xl border border-navy-700/30 bg-navy-900/90 p-4 shadow-xl backdrop-blur-sm transition hover:border-navy-600/50 sm:p-5"
          >
            {/* Portrait area – slightly shorter, more breathing room, softer background */}
            <div className="relative w-full overflow-hidden rounded-xl bg-slate-100/95">
              <div className="relative mx-auto flex aspect-[5/3] max-w-full items-center justify-center px-3 py-2.5 sm:px-4 sm:py-3">
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
                      sizes="360px"
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

            {/* Text block under portrait – clear hierarchy, relaxed spacing */}
            <div className="mt-4 space-y-1.5 text-left">
              <p className="text-base font-bold leading-tight text-white sm:text-lg">
                James Zeng
              </p>
              <p className="text-sm font-medium leading-snug text-navy-300">
                Competition Math Coach
              </p>
              <p className="text-xs leading-relaxed text-navy-400">
                CMO Silver · National Math League First Prize · NJU Dual Degree (Math + Electronics)
              </p>
              <p className="mt-2 text-xs font-medium text-accent/90">Meet the Coach →</p>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/siteConfig";

const heroSupport =
  "Professional competition math training. Develop rigorous thinking. Reach Olympiad National-level results.";
const contestTags = ["AMC", "AIME", "Euclid", "CMO"];

export function Hero() {
  const [imageError, setImageError] = useState(false);
  const heroImage = imageError ? "/assets/coach.png" : siteConfig.heroBannerImage;

  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10">
        <div className="relative overflow-hidden rounded-2xl min-h-[420px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[540px]">
          {/* Full-width hero background image */}
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt=""
              fill
              className="object-cover object-[78%_32%] scale-[1.06]"
              sizes="100vw"
              priority
              unoptimized
              onError={() => setImageError(true)}
            />
          </div>

          {/* Dark gradient overlay: stronger on mobile for readability, smoother on desktop */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-navy-950/98 via-navy-950/70 to-navy-950/15 sm:from-navy-950/96 sm:via-navy-950/60 sm:to-navy-950/12"
            aria-hidden
          />

          {/* Text overlay – left side */}
          <div className="relative z-10 flex h-full items-center">
            <div className="max-w-xl px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16">
              {/* A. Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent sm:text-xs"
              >
                Competition Math Coaching + AI Analytics
              </motion.p>

              {/* B. Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="mt-1.5 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.75rem]"
              >
                <span className="block sm:inline">Burning Math</span>{" "}
                <span className="block sm:inline">Academy</span>
              </motion.h1>

              {/* C. Chinese subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-1 text-sm font-normal text-white/80 sm:text-base"
              >
                烧脑数学 / 专业数学竞赛培训与成长平台
              </motion.p>

              {/* D. Supporting line */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.12 }}
                className="mt-2.5 text-sm leading-relaxed text-white/80 sm:text-[15px]"
              >
                {heroSupport}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.13 }}
                className="mt-1.5 text-xs leading-relaxed text-white/65 sm:text-sm"
              >
                专业数学竞赛培训 · 培养严谨思维能力 · 冲击奥林匹克与国家队级目标
              </motion.p>

              {/* E. Contest tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.14 }}
                className="mt-3 flex flex-wrap gap-1.5"
              >
                {contestTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium tracking-wide text-white/75 sm:text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* F. CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.16 }}
                className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
              >
                <Link
                  href="/contact#booking"
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-accent-dark sm:w-auto sm:px-6 sm:py-3"
                >
                  Book a Trial
                </Link>
                <Link
                  href="/contact#booking"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto sm:px-6 sm:py-3"
                >
                  Take a Diagnostic Test
                </Link>
                <Link
                  href="/coach"
                  className="text-center text-sm font-medium text-white/80 hover:text-white hover:underline sm:text-left"
                >
                  Meet the Coach →
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

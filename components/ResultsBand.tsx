"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/siteConfig";

const disclaimer =
  "Results vary by student level and training duration; metrics reflect cumulative outcomes from coached cohorts.";

export function ResultsBand() {
  const [bgError, setBgError] = useState(false);
  const resultsYear = new Date().getFullYear() - 1;

  return (
    <section className="relative min-h-[420px] overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Full-section background: medal photo */}
      <div className="absolute inset-0">
        {!bgError ? (
          <>
            <Image
              src={siteConfig.resultsMedalImage}
              alt=""
              fill
              className="object-cover object-center brightness-[0.45] saturate-[0.85]"
              sizes="100vw"
              unoptimized
              onError={() => setBgError(true)}
              priority={false}
            />
            {/* Dark navy overlay for readability */}
            <div
              className="absolute inset-0 bg-navy-950/70"
              aria-hidden
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-navy-900" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            真实成绩，持续产出
          </h2>
          <p className="mt-2 text-base font-normal text-white/85 sm:text-lg">
            Proven outcomes in {resultsYear}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6">
          {siteConfig.resultsMetrics.map((metric, i) => (
            <motion.div
              key={metric}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="min-w-[160px] flex-1 rounded-xl border border-white/20 bg-white/95 px-4 py-4 text-center shadow-lg backdrop-blur sm:min-w-[172px] sm:px-5 sm:py-5"
            >
              <p className="whitespace-nowrap text-sm font-semibold text-navy-900">{metric}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/75 max-w-2xl mx-auto">
          {disclaimer}
        </p>
      </div>
    </section>
  );
}

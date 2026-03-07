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
    <section className="relative min-h-[260px] overflow-hidden py-7 sm:min-h-[320px] sm:py-10 md:min-h-[420px] md:py-20 lg:py-24">
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

      {/* Content – full mobile width, same content alignment */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-bold text-white sm:text-xl md:text-3xl lg:text-4xl">
            真实成绩，持续产出
          </h2>
          <p className="mt-1 text-sm font-normal text-white/85 sm:mt-1.5 md:mt-2 md:text-base lg:text-lg">
            Proven outcomes in {resultsYear}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-6 sm:gap-3 md:mt-10 md:gap-5 lg:gap-6">
          {siteConfig.resultsMetrics.map((metric, i) => (
            <motion.div
              key={metric}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="min-w-[120px] flex-1 rounded-lg border border-white/20 bg-white/95 px-3 py-2.5 text-center shadow-lg backdrop-blur sm:min-w-[160px] sm:rounded-xl sm:px-4 sm:py-4 md:min-w-[172px] md:px-5 md:py-5"
            >
              <p className="whitespace-nowrap text-xs font-semibold text-navy-900 sm:text-sm">{metric}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-5 text-center text-[11px] text-white/75 max-w-2xl mx-auto sm:mt-6 md:mt-8 md:text-xs">
          {disclaimer}
        </p>
      </div>
    </section>
  );
}

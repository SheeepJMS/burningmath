"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/siteConfig";

const bio =
  "Senior Mathematical Olympiad Coach. Built a local reputation rapidly in Vancouver through high-ranking contest outcomes and a full-stack AI analytics platform for competition training.";

const credentials = [
  "CMO Silver Medalist (China Mathematical Olympiad)",
  "National Math League — First Prize (China)",
  "Nanjing University — Dual Degree (Math + Electronics)",
];

export function CoachSection() {
  const [imgError, setImgError] = useState(false);
  return (
    <section className="bg-white py-7 sm:py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-bold text-navy-900 sm:text-xl md:text-3xl lg:text-4xl">
          Meet the Coach
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 flex flex-col items-center gap-5 sm:mt-8 sm:gap-6 md:mt-12 md:gap-8 lg:flex-row lg:items-start lg:justify-center"
        >
          <div className="relative h-40 w-32 shrink-0 overflow-hidden rounded-[18px] border-2 border-navy-200 shadow-md sm:h-48 sm:w-40 md:h-56 md:w-44 md:rounded-xl lg:h-64 lg:w-52">
            {!imgError ? (
              <Image
                src={siteConfig.coachPortraitImage}
                alt="Burning Math Academy Coach"
                fill
                className="object-cover"
                sizes="208px"
                unoptimized
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-navy-100 text-navy-500 text-sm">
                Coach
              </div>
            )}
          </div>
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-sm leading-relaxed text-navy-700 md:text-base">{bio}</p>
            <div className="mt-3 flex flex-wrap justify-center gap-1.5 lg:mt-6 lg:justify-start lg:gap-2">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-navy-100 px-2.5 py-1 text-[11px] font-medium text-navy-800 md:px-4 md:py-2 md:text-sm"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-4 md:mt-6">
              <Link
                href="/coach"
                className="font-semibold text-accent hover:underline"
              >
                View full profile →
              </Link>
              <span className="ml-1.5 text-sm text-navy-500">查看完整介绍 →</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

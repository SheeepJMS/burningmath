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
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
          Meet the Coach
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center"
        >
          <div className="relative h-56 w-44 shrink-0 overflow-hidden rounded-xl border-2 border-navy-200 shadow-md sm:h-64 sm:w-52">
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
            <p className="text-navy-700 leading-relaxed">{bio}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-navy-100 px-4 py-2 text-sm font-medium text-navy-800"
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-6">
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

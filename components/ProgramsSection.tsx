"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Waterloo Track",
    subtitle: "Gauss → Pascal/Cayley/Fermat → Euclid",
    description:
      "For Canadian curriculum + Waterloo contests. Focus: reasoning + proof + contest pacing.",
  },
  {
    title: "AMC Track",
    subtitle: "AMC8 → AMC10/12 → AIME",
    description:
      "For US-style contests and higher ceiling problems. Focus: speed + strategy + advanced topics.",
  },
];

export function ProgramsSection() {
  return (
    <section className="border-t border-navy-200 bg-navy-50 py-7 sm:py-12 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-bold text-navy-900 sm:text-xl md:text-3xl lg:text-4xl">
          Programs
        </h2>
        <p className="mt-1 text-center text-xs text-navy-600 sm:mt-1.5 sm:text-sm md:text-base">
          Choose the track based on grade and goals.
        </p>
        <div className="mt-5 grid gap-4 sm:mt-8 sm:gap-6 md:mt-12 md:gap-8 sm:grid-cols-2">
          {programs.map((program, i) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="rounded-[18px] border border-navy-200 bg-white p-4 shadow-sm md:rounded-2xl md:p-6"
            >
              <h3 className="text-base font-semibold text-navy-900 md:text-lg">
                {program.title}
              </h3>
              <p className="mt-0.5 text-xs font-medium text-accent md:mt-1 md:text-sm">
                {program.subtitle}
              </p>
              <p className="mt-2 text-xs leading-snug text-navy-600 md:mt-3 md:text-sm">{program.description}</p>
            </motion.article>
          ))}
        </div>
        <p className="mt-6 text-center md:mt-8">
          <Link
            href="/programs"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
          >
            See full Programs →
          </Link>
        </p>
      </div>
    </section>
  );
}

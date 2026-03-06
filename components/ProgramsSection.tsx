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
    <section className="border-t border-navy-200 bg-navy-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
          Programs
        </h2>
        <p className="mt-2 text-center text-navy-600">
          Choose the track based on grade and goals.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {programs.map((program, i) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="rounded-2xl border border-navy-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-navy-900">
                {program.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {program.subtitle}
              </p>
              <p className="mt-3 text-sm text-navy-600">{program.description}</p>
            </motion.article>
          ))}
        </div>
        <p className="mt-8 text-center">
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

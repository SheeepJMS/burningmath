"use client";

import { useState } from "react";

export type FAQItem = {
  questionEn: string;
  questionZh: string;
  answer: string;
};

type FAQSectionProps = {
  items: FAQItem[];
};

export function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="border-t border-navy-200 bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-1 text-center text-navy-500 sm:text-lg">
          常见问题
        </p>
        <div className="mt-8 space-y-2">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-navy-200/80 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-start gap-3 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-100 text-sm font-semibold text-navy-700">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-navy-900">{item.questionEn}</p>
                    <p className="mt-0.5 text-sm text-navy-500">{item.questionZh}</p>
                  </div>
                  <svg
                    className={`h-5 w-5 shrink-0 text-navy-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="border-t border-navy-100 px-5 pb-5 pt-3">
                    <p className="text-sm leading-relaxed text-navy-700">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

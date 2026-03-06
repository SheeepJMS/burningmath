"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

/**
 * Awards & Certificates marquee.
 * Images are auto-loaded from public/assets/awards/ via GET /api/awards.
 * To add new certificates: drop images (.png, .jpg, .jpeg, .webp) into public/assets/awards/
 */
export function AwardsMarquee() {
  const [urls, setUrls] = useState<string[]>([]);
  const [paused, setPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/awards")
      .then((r) => r.json())
      .then((arr: string[]) => setUrls(Array.isArray(arr) ? arr : []))
      .catch(() => setUrls([]));
  }, []);

  if (urls.length === 0) return null;

  const duplicated = [...urls, ...urls];

  return (
    <section className="border-t border-navy-200 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">
            Awards & Certificates
            <span className="ml-2 text-base font-normal text-navy-500 sm:text-lg">证书与奖状</span>
          </h2>
          <p className="mt-1 text-sm text-navy-500">
            Some past certificates
            <span className="ml-1 text-navy-400">部分以往证书</span>
          </p>
        </div>

        <div
          ref={scrollRef}
          className="relative mt-10 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex gap-4 animate-marquee"
            style={{ width: "max-content", animationPlayState: paused ? "paused" : "running" }}
          >
            {duplicated.map((src, i) => (
              <a
                key={`${src}-${i}`}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[160px] w-[220px] shrink-0 overflow-hidden rounded-xl border border-navy-200 bg-white p-2 shadow-sm transition hover:border-navy-300 hover:shadow-md"
              >
                <Image
                  src={src}
                  alt="Award or certificate"
                  width={220}
                  height={160}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  sizes="220px"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

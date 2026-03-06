"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/siteConfig";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-200/50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-lg font-semibold text-navy-900 transition hover:text-navy-700"
          aria-label="Burning Math Academy – Home"
        >
          {!logoError && siteConfig.logoPath && (
            <span className="relative h-8 w-8 shrink-0 sm:h-9 sm:w-9">
              <Image
                src={siteConfig.logoPath}
                alt=""
                fill
                className="object-contain"
                sizes="36px"
                unoptimized
                onError={() => setLogoError(true)}
              />
            </span>
          )}
          <span>{siteConfig.brand.name}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((item) => {
            if (item.label === "Contact / Book a Trial") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-navy-800"
                >
                  Book a Trial
                </Link>
              );
            }
            const navItem = item as { href: string; label: string; labelZh?: string; platformIsExternal?: boolean };
            const openInNewTab = item.label === "Platform" && navItem.platformIsExternal;
            return (
              <Link
                key={item.href}
                href={item.href}
                {...(openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex flex-col items-center gap-0 leading-tight text-navy-700 transition hover:text-navy-900"
              >
                <span className="text-sm font-medium">{item.label}</span>
                {navItem.labelZh && (
                  <span className="text-[11px] text-navy-500">{navItem.labelZh}</span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-navy-700 hover:bg-navy-100 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-navy-200/50 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {siteConfig.nav.map((item) => {
                const navItem = item as { href: string; label: string; labelZh?: string };
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex flex-col gap-0 rounded-lg px-3 py-2.5 text-navy-700 hover:bg-navy-50"
                  >
                    <span className="text-sm font-medium">
                      {item.label === "Contact / Book a Trial" ? "Book a Trial" : item.label}
                    </span>
                    {navItem.labelZh && (
                      <span className="text-xs text-navy-500">{navItem.labelZh}</span>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

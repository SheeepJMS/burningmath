import Link from "next/link";
import { siteConfig } from "@/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-navy-200 bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
          {/* Left: brand + tagline + nav */}
          <div className="space-y-6">
            <div>
              <p className="text-lg font-semibold text-white">
                {siteConfig.brand.name}
              </p>
              <p className="mt-2 leading-relaxed text-navy-300">
                {siteConfig.brand.shortLine}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {siteConfig.nav.map((item) => {
                const ext = (item as { platformIsExternal?: boolean }).platformIsExternal;
                return ext ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-navy-300 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-navy-300 transition hover:text-white"
                  >
                    {item.label === "Contact / Book a Trial" ? "Contact" : item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          {/* Right: contact */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-white">Contact</p>
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-navy-300">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="transition hover:text-white"
              >
                {siteConfig.contact.email}
              </a>
              <span className="transition hover:text-white">
                WeChat: {siteConfig.contact.wechat}
              </span>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp: +1 306 914 4849
              </a>
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-navy-700 pt-8 text-xs text-navy-500">
          © {new Date().getFullYear()} Burning Math Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

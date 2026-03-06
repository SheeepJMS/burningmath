import Link from "next/link";
import { siteConfig } from "@/siteConfig";

export default function PlatformPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-navy-900">Platform</h1>
      <p className="mt-2 text-navy-600">
        AI-driven assessment and analytics for competition math training.
      </p>
      <div className="mt-8 rounded-xl border border-navy-200 bg-navy-50 p-8 text-center">
        <p className="text-navy-700">
          One-click entry to the analytics platform.
        </p>
        <p className="mt-4 text-sm text-navy-500">
          Configure <code className="rounded bg-navy-200 px-1">siteConfig.platformUrl</code> to point to your external platform URL if needed.
        </p>
        <Link
          href={siteConfig.platformUrl}
          className="mt-6 inline-block rounded-full bg-accent px-6 py-3 font-semibold text-white hover:bg-accent-dark"
        >
          Enter Platform
        </Link>
      </div>
    </div>
  );
}

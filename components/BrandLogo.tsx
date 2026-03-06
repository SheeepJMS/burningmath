"use client";

/**
 * BMA Logo: lightbulb + pencil + infinity. Premium monoline icon.
 * Assets: /public/brand/bma-logo-icon.svg, bma-logo-icon-light.svg, bma-favicon.svg
 * Size: pass `size` (px) or use container (icon wrapper uses h-6 sm:h-7 when size not set).
 * Theme: "dark" = dark stroke (light bg), "light" = light stroke (dark bg).
 */

export type BrandLogoVariant = "icon" | "horizontal";
export type BrandLogoTheme = "light" | "dark";

interface BrandLogoProps {
  variant?: BrandLogoVariant;
  theme?: BrandLogoTheme;
  /** Icon height in px. If not set, uses responsive h-6 (24px) / sm:h-7 (28px). */
  size?: number;
  className?: string;
}

function LogoIcon({
  theme,
  size,
  className,
}: {
  theme: BrandLogoTheme;
  size?: number;
  className?: string;
}) {
  const gold = theme === "dark" ? "#B8962E" : "#C9A227";

  return (
    <span
      className={
        size == null
          ? "flex h-6 shrink-0 sm:h-7 [&>svg]:h-full [&>svg]:w-auto [&>svg]:min-w-0"
          : undefined
      }
      style={size != null ? { width: (size * 32) / 40, height: size } : undefined}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className={className}
        style={
          size != null
            ? { height: size, width: (size * 32) / 40, minWidth: (size * 32) / 40 }
            : undefined
        }
      >
        <circle cx="16" cy="14" r="10" fill={gold} opacity="0.8" />
        <path d="M16 4c5 0 10 3 10 9s-3 9-10 9c-7 0-10-4-10-9S11 4 16 4zm0 18v2l-2 8 2 2 2-2-2-8v-2" />
        <path
          d="M10 14a3 3 0 1 1 6 0 3 3 0 1 1-6 0m10 0a3 3 0 1 1 6 0 3 3 0 1 1-6 0"
          strokeWidth="1.3"
        />
      </svg>
    </span>
  );
}

export function BrandLogo({
  variant = "horizontal",
  theme = "dark",
  size,
  className = "",
}: BrandLogoProps) {
  const gapPx = 12; // 10–14px between icon and text

  if (variant === "icon") {
    return (
      <LogoIcon theme={theme} size={size} className={className} />
    );
  }

  return (
    <span
      className={`inline-flex items-center text-inherit ${className}`}
      style={{ gap: gapPx }}
    >
      <LogoIcon theme={theme} size={size} />
      <span className="font-semibold tracking-tight">
        <span>Burning Math</span>
        <span className="hidden sm:inline"> Academy</span>
      </span>
    </span>
  );
}

/**
 * Site configuration for Burning Math Academy.
 * Edit here to change URLs, contact info, and metrics without touching components.
 */

/** 网站正式访问地址，用于 sitemap、OG 等；部署到 Render 可改为 https://xxx.onrender.com */
export const siteBaseUrl = "https://www.burningmath.com";

export const siteConfig = {
  /** Navbar logo (place file in public/assets/, e.g. logo.png or logo.svg) */
  logoPath: "/assets/logo.png",

  brand: {
    name: "Burning Math Academy",
    tagline: "Competition Math Coaching + AI Analytics Platform",
    shortLine:
      "Burning Math Academy — competition coaching with measurable analytics.",
  },

  /** Set to false to temporarily hide the booking form on all pages */
  showBookingForm: true,

  /** Platform URL - use external link or internal route */
  platformUrl: "/platform",
  /** Diagnostic test URL (e.g. /platform or /diagnostic) */
  diagnosticUrl: "/platform",

  contact: {
    email: "zengmushi@gmail.com",
    whatsapp: "https://wa.me/13069144849",
    wechat: "18565646596",
  },

  /** Nav items. platformIsExternal: true = open in new tab. labelZh for bilingual nav. */
  nav: [
    { label: "Home", labelZh: "首页", href: "/" },
    { label: "Coach", labelZh: "教练资历", href: "/coach" },
    { label: "Programs", labelZh: "竞赛规划", href: "/programs" },
    { label: "Results", labelZh: "竞赛成果", href: "/results" },
    { label: "Platform", labelZh: "教学平台", href: "https://math-homework-app.onrender.com/diagnostic/login", platformIsExternal: true },
    { label: "Contact / Book a Trial", href: "/contact" },
  ],

  /** Hero: only these 3 outcome chips (no "Annual" in copy) */
  heroMetrics: [
    "5× Euclid Top 40",
    "10+ AMC 10/12 DHR",
    "6+ AIME Qualifiers",
  ],

  /** Full metrics for Results section */
  resultsMetrics: [
    "5× Euclid Top 40",
    "10+ AMC 10/12 DHR",
    "6+ AIME Qualifiers",
    "3 qualify for CMO",
    "15+ Waterloo Top 5%",
    "10+ Elmacon Top 10",
  ],

  /** Platform report screenshot paths (public/assets: report1.png–report4.png) */
  reportImages: [
    "/assets/report1.png",
    "/assets/report2.png",
    "/assets/report3.png",
    "/assets/report4.png",
  ],

  /** Hero 全宽横幅背景图（horizontal hero image） */
  heroBannerImage: "/assets/coach2.png",
  /** 教练卡片 / Meet the Coach 头像（coach 页等） */
  heroCoachCardImage: "/assets/coach.png",
  resultsMedalImage: "/assets/hero-medals.jpg",
  coachPortraitImage: "/assets/coach.png",
} as const;

export type SiteConfig = typeof siteConfig;

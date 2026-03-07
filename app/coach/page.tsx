"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/siteConfig";

const COACH_NAME = "James Zeng";
const COACH_NAME_ZH = "曾慕轼";
const TITLE_EN = "Competition Math Coach";
const TITLE_ZH = "竞赛数学教练";

/** Hero: one unified chip group. First 3 = credentials (stronger), last 2 = highlights (subtler). */
const CREDENTIALS_AND_HIGHLIGHTS: { en: string; zh: string; strong?: boolean }[] = [
  { en: "CMO Winter Camp Finalist · Silver Medalist", zh: "冬令营入围 · CMO 银牌", strong: true },
  { en: "National HS Math League 1st Prize", zh: "高中联赛一等奖（高联）", strong: true },
  { en: "Olympiad Admission (Gaokao-exempt)", zh: "免高考保送南京大学", strong: true },
  { en: "TAL Innovation Lead", zh: "学而思创新体系负责人（集训队/创新班）", strong: false },
  { en: "Author: Olympiad Math: The 36 Strategies", zh: "《奥数三十六计》作者", strong: false },
];

const INTRO_EN =
  "Olympiad-trained coach with a deep \"from childhood\" competition-math foundation — advanced through China's elite contest pathway with exam exemptions and olympiad-based admissions. Now based in Vancouver.";
const INTRO_ZH =
  "童子功奥数出身，沿中国顶尖竞赛选拔路径成长，多次通过竞赛体系实现中高考免考/保送升学；现居温哥华。";

/** Parent meaning line (one line under bullets). */
const PARENT_MEANING_ZH =
  "对家长的意义：这代表我能用国家级竞赛路径的方法训练孩子的思维与稳定得分。";
const PARENT_MEANING_EN = "What this means for parents: training grounded in national olympiad pathways for clear thinking and consistent results.";

/** Icon-tab showcase: tab (zh, en, tag) + panel (key facts zh-only, one EN paragraph, optional accordion). */
const CREDENTIAL_SHOWCASE: {
  tab: { zh: string; en: string; tag: string };
  panel: {
    titleZh: string;
    titleEn: string;
    keyFacts: string[];
    sentenceEn: string;
    expandZh?: string;
    expandEn?: string;
  };
}[] = [
  {
    tab: { zh: "冬令营入围 · CMO 银牌", en: "CMO Winter Camp + Silver", tag: "国家级选拔" },
    panel: {
      titleZh: "冬令营入围 · CMO 银牌",
      titleEn: "CMO Winter Camp + Silver Medalist",
      keyFacts: [
        "CMO 是中国国家奥赛体系中的顶级赛事之一",
        "冬令营是重要选拔阶段，竞争高度激烈",
        "入围并获奖代表全国顶尖训练水平与思维能力",
      ],
      sentenceEn: "",
      expandZh: "CMO（中国数学奥林匹克）由中国数学会主办，冬令营优胜者有机会进入国家集训队。",
      expandEn: "CMO is organized by the Chinese Mathematical Society; camp finalists may advance to national training.",
    },
  },
  {
    tab: { zh: "高中联赛一等奖（高联）", en: "National HS Math League — 1st Prize", tag: "省队级别" },
    panel: {
      titleZh: "高中联赛一等奖（高联）",
      titleEn: "National HS Math League — First Prize",
      keyFacts: [
        "全国高中数学联赛是奥赛选拔核心赛事",
        "一等奖代表省内顶尖水平",
        "进入冬令营与更高层级选拔的重要通道",
      ],
      sentenceEn: "Top awards often indicate provincial-elite standing.",
    },
  },
  {
    tab: { zh: "免高考保送南京大学", en: "Gaokao-exempt Admission (Olympiad pathway)", tag: "保送通道" },
    panel: {
      titleZh: "免高考保送南京大学",
      titleEn: "Gaokao-exempt Admission to Nanjing University",
      keyFacts: [
        "通过竞赛成绩获得免高考保送资格",
        "直升南京大学，数学+电子双学位",
        "体现严谨推理、结构化学习与长期自驱能力",
      ],
      sentenceEn: "Gaokao-exempt; dual-degree study is secondary.",
    },
  },
  {
    tab: { zh: "学而思创新体系负责人（集训队/创新班）", en: "TAL Innovation Lead", tag: "顶尖班型" },
    panel: {
      titleZh: "学而思创新体系负责人（集训队/创新班）",
      titleEn: "TAL Innovation Lead",
      keyFacts: [
        "曾任学而思创新体系主要负责人",
        "带领创新班/集训队（省内 Top 40 级别选拔口径/内部选拔）",
        "体系化训练，学生在各类竞赛中获一等奖等成绩",
      ],
      sentenceEn: "Led top innovation cohorts and elite training teams.",
    },
  },
  {
    tab: { zh: "《奥数三十六计》作者（漫画）", en: "Author — Olympiad Math (Comic)", tag: "漫画奥数｜百万+" },
    panel: {
      titleZh: "《奥数三十六计》作者（漫画）",
      titleEn: "Author: Olympiad Math — The 36 Strategies (Comic)",
      keyFacts: [
        "以漫画形式讲奥数，更直观易懂",
        "把抽象题型用故事与图解呈现",
        "国内长期热销（累计销量百万+，以出版社/渠道口径为准）",
      ],
      sentenceEn: "A bestselling comic-style olympiad math book.",
    },
  },
];

const TIMELINE: { zh: string; en: string }[] = [
  { zh: "华罗庚金杯一等奖", en: "Hu Luogeng Gold Cup — First Prize" },
  { zh: "广东省华师附中奥赛班（顶尖选拔）", en: "The Affiliated High School of SCNU (Guangdong) — Olympiad Class" },
  { zh: "初中联赛一等奖", en: "Middle-school league — First Prize" },
  { zh: "免中考升入华附高中竞赛体系", en: "Exam-exempt progression to Huafu (SCNU Affiliated) high-school olympiad track" },
  { zh: "高中联赛一等奖（高联）", en: "National HS Math League — First Prize" },
  { zh: "冬令营入围 + CMO 银牌", en: "CMO Winter Camp finalist + CMO Silver" },
  { zh: "免高考保送直升南京大学（数学+电子双学位）", en: "Gaokao-exempt olympiad admission to Nanjing University (Math + Electronics dual degree)" },
  { zh: "毕业后受学而思特聘，担任顶尖创新班 / 集训队教练", en: "Recruited by TAL for its top innovation cohorts and elite training teams" },
];

/** Teaching Philosophy: 6 parent-friendly principles. */
const PHILOSOPHY_ITEMS: { zh: string; en: string; explainZh: string }[] = [
  {
    zh: "自主内驱力导向",
    en: "Intrinsic motivation first",
    explainZh: "先让孩子愿意主动动脑，建立成就感与自我驱动，学习才能长期稳定。",
  },
  {
    zh: "反套路思维训练",
    en: "Anti-pattern thinking",
    explainZh: "不背题型套路，训练“遇到新题怎么想”，把方法变成可迁移能力。",
  },
  {
    zh: "高效率学习系统",
    en: "High-efficiency training",
    explainZh: "用最少时间抓最关键薄弱点，训练“取舍与优先级”，不做无效努力。",
  },
  {
    zh: "反刷题（质量>数量）",
    en: "Quality over quantity",
    explainZh: "不追求刷题量，强调精选题 + 复盘，保证每道题都带来真实提升。",
  },
  {
    zh: "错因分析到“错步”",
    en: "Step-level mistake diagnosis",
    explainZh: "不只看对错，精确定位错在第几步、哪个理解点，避免重复犯错。",
  },
  {
    zh: "理解孩子与节奏管理",
    en: "Student-aware coaching",
    explainZh: "识别孩子的心理与注意力状态，调整引导方式与节奏，让学习更顺畅。",
  },
];

/** Icons for philosophy cards (unified stroke style). */
const PHILOSOPHY_ICONS: ((props: { className?: string }) => JSX.Element)[] = [
  /* sparkles / flame */
  (p) => (
    <svg className={p.className ?? "h-5 w-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    </svg>
  ),
  /* shuffle / route */
  (p) => (
    <svg className={p.className ?? "h-5 w-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  /* gauge / timer */
  (p) => (
    <svg className={p.className ?? "h-5 w-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  /* check-circle */
  (p) => (
    <svg className={p.className ?? "h-5 w-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  /* search / bug */
  (p) => (
    <svg className={p.className ?? "h-5 w-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  /* heart / users */
  (p) => (
    <svg className={p.className ?? "h-5 w-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
];

const CREDENTIAL_ICONS = [
  /* medal */
  (props: { className?: string }) => (
    <svg className={props.className ?? "h-5 w-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  /* award / star */
  (props: { className?: string }) => (
    <svg className={props.className ?? "h-5 w-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  /* graduation-cap */
  (props: { className?: string }) => (
    <svg className={props.className ?? "h-5 w-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  /* users */
  (props: { className?: string }) => (
    <svg className={props.className ?? "h-5 w-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  /* book-open */
  (props: { className?: string }) => (
    <svg className={props.className ?? "h-5 w-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
];

function BulletIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function CoachPage() {
  const [imgError, setImgError] = useState(false);
  const [credentialIndex, setCredentialIndex] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Profile Hero */}
      <section id="about" className="scroll-mt-20 border-b border-navy-200 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
            <div className="shrink-0">
              <div className="relative h-56 w-44 overflow-hidden rounded-2xl border border-navy-200 bg-navy-50 shadow-sm sm:h-64 sm:w-52">
                {!imgError ? (
                  <Image
                    src={siteConfig.coachPortraitImage}
                    alt={`${COACH_NAME}, ${TITLE_EN}`}
                    fill
                    className="object-cover object-top"
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
            </div>
            <div className="min-w-0 flex-1 space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-navy-900 sm:text-3xl">
                  {COACH_NAME_ZH} {COACH_NAME}
                </h1>
                <p className="mt-1 text-base font-medium text-navy-600 sm:text-lg">
                  {TITLE_EN}｜{TITLE_ZH}
                </p>
              </div>
              {/* Credentials & Highlights — one unified chip group */}
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">
                  Credentials & Highlights｜核心资历
                </p>
                <div className="flex flex-wrap gap-2">
                  {CREDENTIALS_AND_HIGHLIGHTS.map((c) => (
                    <span
                      key={c.en}
                      className={
                        c.strong
                          ? "rounded-full border border-navy-300 bg-navy-100 px-4 py-2 text-sm font-semibold text-navy-900"
                          : "rounded-full border border-navy-200 bg-navy-50/80 px-4 py-2 text-sm font-medium text-navy-700"
                      }
                    >
                      {c.en}｜{c.zh}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-1 text-navy-700">
                <p className="leading-relaxed">{INTRO_EN}</p>
                <p className="text-sm text-navy-600">{INTRO_ZH}</p>
                <p className="mt-3 text-sm font-medium text-navy-800">
                  Based in Greater Vancouver, James Zeng works with students across AMC, AIME, Euclid, Waterloo, and Olympiad pathways.
                </p>
                <p className="text-xs text-navy-600">
                  立足大温地区，James Zeng 长期指导 AMC、AIME、Euclid、Waterloo 及奥赛体系学生。
                </p>
              </div>
              <div>
                <Link
                  href="/contact#booking"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-accent/90"
                >
                  Book a Trial｜预约试课
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What these credentials mean — icon-tab (desktop) / accordion (mobile), scannable */}
      <section id="meaning" className="scroll-mt-20 border-b border-navy-200 bg-navy-50/50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">
            What these credentials mean
          </h2>
          <p className="mt-1 text-sm text-navy-600">含金量说明</p>

          {/* Desktop: 2-column icon-tab */}
          <div className="mt-10 hidden lg:block">
            <div className="rounded-2xl border border-navy-200/80 bg-white shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 min-h-[340px]">
                {/* Left: tab list — 2px accent bar, subtle active bg, hover, 2-line + tag */}
                <div className="border-b border-navy-200/70 md:border-b-0 md:border-r border-navy-200/70 bg-navy-50/30">
                  {CREDENTIAL_SHOWCASE.map((item, i) => {
                    const Icon = CREDENTIAL_ICONS[i];
                    const active = i === credentialIndex;
                    return (
                      <button
                        key={item.tab.zh}
                        type="button"
                        onClick={() => setCredentialIndex(i)}
                        className={`w-full flex items-center gap-3 px-7 py-3.5 text-left transition ${
                          active
                            ? "border-l-2 border-accent rounded-r bg-accent/5"
                            : "border-l-2 border-transparent hover:bg-navy-100/40"
                        }`}
                      >
                        <span className={active ? "text-accent" : "text-navy-500"}>
                          {Icon({ className: "h-5 w-5 shrink-0" })}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className={`text-sm ${active ? "font-semibold text-navy-900" : "font-medium text-navy-800"}`}>
                            {item.tab.zh}
                          </p>
                          <p className="mt-0.5 text-xs text-navy-500">{item.tab.en}</p>
                          <span className="mt-1.5 inline-block rounded-full bg-navy-100/80 px-2 py-0.5 text-[11px] text-navy-600">
                            {item.tab.tag}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {/* Right: panel — bullets CN only, one EN para, parent meaning, accordion 展开了解含金量 */}
                <div className="flex flex-col p-8">
                  {(() => {
                    const p = CREDENTIAL_SHOWCASE[credentialIndex].panel;
                    return (
                      <>
                        <h3 className="font-semibold text-navy-900">{p.titleZh}</h3>
                        <p className="mt-1 text-sm text-navy-500">{p.titleEn}</p>
                        <ul className="mt-6 space-y-3">
                          {p.keyFacts.map((f) => (
                            <li key={f} className="flex gap-3">
                              <BulletIcon />
                              <p className="text-sm text-navy-800">{f}</p>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-6 text-sm leading-relaxed text-navy-700">{PARENT_MEANING_ZH}</p>
                        <p className="mt-1 text-xs leading-relaxed text-navy-500">{PARENT_MEANING_EN}</p>
                        {p.sentenceEn && (
                          <p className="mt-6 text-sm leading-relaxed text-navy-500">{p.sentenceEn}</p>
                        )}
                        {(p.expandZh ?? p.expandEn) && (
                          <div className="mt-6 border-t border-navy-100 pt-5 text-xs text-navy-600 space-y-1">
                            {p.expandZh && <p>{p.expandZh}</p>}
                            {p.expandEn && <p className="text-navy-500">{p.expandEn}</p>}
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: accordion — same icons, 2-line + tag, bullets CN only, parent meaning, EN para */}
          <div className="mt-10 space-y-2 lg:hidden">
            {CREDENTIAL_SHOWCASE.map((item, i) => {
              const isOpen = accordionOpen === i;
              const p = item.panel;
              const Icon = CREDENTIAL_ICONS[i];
              return (
                <div
                  key={item.tab.zh}
                  className="rounded-xl border border-navy-200/80 bg-white shadow-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setAccordionOpen(isOpen ? null : i)}
                    className="w-full flex items-center gap-3 px-5 py-4 text-left"
                  >
                    <span className="text-navy-500 shrink-0">{Icon({ className: "h-5 w-5" })}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-navy-900">{item.tab.zh}</p>
                      <p className="text-xs text-navy-500">{item.tab.en}</p>
                      <span className="mt-1 inline-block rounded-full bg-navy-100/80 px-2 py-0.5 text-[11px] text-navy-600">
                        {item.tab.tag}
                      </span>
                    </div>
                    <svg
                      className={`h-5 w-5 shrink-0 text-navy-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="border-t border-navy-100/80 px-5 pb-5 pt-3">
                      <ul className="space-y-2">
                        {p.keyFacts.map((f) => (
                          <li key={f} className="flex gap-2">
                            <BulletIcon />
                            <p className="text-sm text-navy-800">{f}</p>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm text-navy-700">{PARENT_MEANING_ZH}</p>
                      <p className="mt-1 text-xs text-navy-500">{PARENT_MEANING_EN}</p>
                      {p.sentenceEn && <p className="mt-4 text-sm text-navy-500">{p.sentenceEn}</p>}
                      {(p.expandZh ?? p.expandEn) && (
                        <div className="mt-3 text-xs text-navy-600">
                          {p.expandZh && <p>{p.expandZh}</p>}
                          {p.expandEn && <p className="mt-0.5 text-navy-500">{p.expandEn}</p>}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 奥数童子功生涯 — Timeline */}
      <section id="process" className="scroll-mt-20 border-b border-navy-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">
            奥数童子功生涯
          </h2>
          <p className="mt-1 text-sm text-navy-600">From student to coach</p>
          <ul className="mt-10 space-y-0">
            {TIMELINE.map((step, i) => (
              <li key={step.en} className="relative flex gap-6 pb-10 last:pb-0">
                {i < TIMELINE.length - 1 && (
                  <span
                    className="absolute left-[11px] top-6 h-full w-px bg-navy-200"
                    aria-hidden
                  />
                )}
                <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white text-xs font-semibold text-accent">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1 pt-0.5">
                  <p className="font-medium text-navy-900">{step.zh}</p>
                  <p className="mt-0.5 text-sm text-navy-600">{step.en}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Teaching Philosophy — 6 principles, 2×3 grid */}
      <section id="teaching" className="scroll-mt-20 border-b border-navy-200 bg-navy-50/50 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">
            Teaching Philosophy
          </h2>
          <p className="mt-1 text-sm text-navy-600">教学理念</p>
          <p className="mt-2 text-sm text-navy-500">
            不是刷题，而是让孩子会思考、会自我驱动、学得更高效。
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PHILOSOPHY_ITEMS.map((item, i) => {
              const Icon = PHILOSOPHY_ICONS[i];
              return (
                <div
                  key={item.en}
                  className="flex flex-col rounded-2xl border border-navy-200 bg-white p-6 shadow-sm transition hover:border-navy-300 hover:shadow-md"
                >
                  <span className="text-navy-500">
                    {Icon({ className: "h-5 w-5 shrink-0" })}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-navy-900">
                    {item.zh}
                  </h3>
                  <p className="mt-1 text-sm text-navy-500">{item.en}</p>
                  <p className="mt-3 min-h-[3.5rem] text-sm leading-relaxed text-navy-600">
                    {item.explainZh}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA / Contact */}
      <section className="scroll-mt-20 bg-white py-12 sm:py-16">
        <span id="faq" className="scroll-mt-20" aria-hidden />
        <span id="contact" className="scroll-mt-20" aria-hidden />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-navy-700">
            <Link
              href="/contact#booking"
              className="font-semibold text-accent hover:underline"
            >
              Book a Trial →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

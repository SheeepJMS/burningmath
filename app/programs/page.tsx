"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/siteConfig";
import { Footer } from "@/components/Footer";

// --- Quick track by grade: poster-style (Target contests + Training focus only) ---
const STAGE_BANDS: {
  id: string;
  en: string;
  zh: string;
  targetContests: string[];
  trainingFocus: string[];
}[] = [
  {
    id: "g3-5",
    en: "G3–G5 Starter",
    zh: "启蒙",
    targetContests: ["Singapore Math（新加坡数学）", "Math Kangaroo（袋鼠竞赛）"],
    trainingFocus: [
      "数感与运算基础",
      "代数入门：方程与关系",
      "应用题建模与表达",
      "逻辑推理与条理",
      "习惯：审题与验算",
    ],
  },
  {
    id: "g5-7",
    en: "G5–G7 Elmacon Track",
    zh: "Elmacon 路线",
    targetContests: ["Elmacon（G5–G7）", "AMC 8（G6–G8）", "Gauss 7/8（G7–G8）"],
    trainingFocus: [
      "Elmacon 题型与方法",
      "分数比例与应用题建模",
      "数论入门：整除同余",
      "计数基础：分类与排列组合",
      "速度与正确率训练",
    ],
  },
  {
    id: "g8-10",
    en: "G8–G10 Contest Track",
    zh: "竞赛进阶",
    targetContests: ["AMC 10（G9–G10）", "Pascal（G9）", "Cayley（G10）", "Fryer / Galois / Hypatia（G9–G11）"],
    trainingFocus: [
      "四大板块系统提升：代数、几何、组合、数论",
      "中高难题突破方法",
      "比赛节奏：取舍抢分",
      "几何构造与代数技巧",
      "数论与计数进阶",
    ],
  },
  {
    id: "g10-12",
    en: "G10–G12 Top Track",
    zh: "顶层冲刺",
    targetContests: ["AMC 12（G11–G12）", "AIME（invite）", "Fermat（G11）", "Euclid（G12）", "COMC（→ CMO）", "CSMC"],
    trainingFocus: [
      "高天花板难题训练：自研独家压轴题专项教材",
      "Fermat→Euclid 成功上榜获得名次",
      "AMC12→AIME 拿下12分+",
      "COMC→CMO：入围加拿大国家队选拔赛",
      "CSMC 获奖",
    ],
  },
];

// --- Quick track components (premium segmented control + detail panel) ---
function ContestChip({ label }: { label: string }) {
  return (
    <span className="group inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/12 px-3 py-1.5 text-sm font-medium text-navy-800 transition hover:border-accent/70 hover:bg-accent/18">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
      {label}
    </span>
  );
}

function TrackTabs({
  stages,
  selected,
  onSelect,
}: {
  stages: typeof STAGE_BANDS;
  selected: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-2xl border border-navy-200/90 bg-navy-50/40 p-1.5 sm:flex-wrap sm:overflow-visible sm:snap-none sm:overscroll-none">
      {stages.map((b, i) => (
        <button
          key={b.id}
          type="button"
          onClick={() => onSelect(i)}
          className={`flex min-w-[7.5rem] shrink-0 snap-center flex-col items-center rounded-xl px-3 py-2.5 text-center transition sm:min-w-0 sm:flex-1 sm:snap-align-none ${
            selected === i
              ? "border border-navy-200/80 bg-white text-navy-900 shadow-sm ring-1 ring-navy-200/60"
              : "text-navy-600 hover:bg-white/60 hover:border-navy-200/60 hover:text-navy-800"
          }`}
        >
          <span className={`block text-xs font-semibold sm:text-sm ${selected === i ? "text-navy-900" : ""}`}>{b.en}</span>
          <span className="mt-0.5 block text-[10px] text-navy-500 sm:text-xs">{b.zh}</span>
          {selected === i && (
            <span className="mt-1.5 block h-0.5 w-8 rounded-full bg-accent" aria-hidden />
          )}
        </button>
      ))}
    </div>
  );
}

function TrackDetailPanel({ stage }: { stage: (typeof STAGE_BANDS)[0] }) {
  return (
    <div className="rounded-2xl border border-navy-200/90 bg-white p-4 shadow-sm sm:p-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 border-l-2 border-accent pl-2 text-xs font-semibold uppercase tracking-wide text-navy-600">
            Target contests
            <span className="ml-2 font-normal normal-case text-navy-500">对应竞赛</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {stage.targetContests.map((c) => (
              <ContestChip key={c} label={c} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-2 border-l-2 border-accent pl-2 text-xs font-semibold uppercase tracking-wide text-navy-600">
            Training focus
            <span className="ml-2 font-normal normal-case text-navy-500">训练重点</span>
          </h3>
          <ul className="space-y-2 text-sm leading-relaxed text-navy-800">
            {stage.trainingFocus.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" aria-hidden />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

type Relevance = "admissions" | "skill" | "benchmark" | "advanced" | "team";

const RELEVANCE_LABELS: Record<Relevance, { en: string; zh: string }> = {
  admissions: { en: "Admissions milestone", zh: "升学关键里程碑" },
  skill: { en: "Skill-building", zh: "能力打底" },
  benchmark: { en: "Benchmark", zh: "基准定位" },
  advanced: { en: "Advanced milestone", zh: "进阶里程碑" },
  team: { en: "Team", zh: "团队赛" },
};

// --- Full contest catalog (grouped). No computing contests. ---
const CONTEST_GROUPS: { groupEn: string; groupZh: string; contests: {
  nameEn: string;
  nameZh?: string;
  grades: string;
  season: string;
  whyMatters: string;
  whyMattersZh: string;
  relevance: Relevance;
  comingSoon?: boolean;
}[] }[] = [
  {
    groupEn: "Canada / Waterloo (CEMC) Math Pathway",
    groupZh: "加拿大 · 滑铁卢 (CEMC) 数学体系",
    contests: [
      { nameEn: "Gauss Contests", nameZh: "高斯", grades: "G7–8", season: "Spring", whyMatters: "Entry-level CEMC contest; builds reasoning and pacing.", whyMattersZh: "滑铁卢入门级竞赛，培养推理与节奏感。", relevance: "benchmark" },
      { nameEn: "Pascal (G9) / Cayley (G10) / Fermat (G11)", nameZh: "滑铁卢系列", grades: "G9–11", season: "Spring", whyMatters: "Grade-specific CEMC contests; strong preparation for Euclid.", whyMattersZh: "按年级的滑铁卢竞赛，为欧几里得打基础。", relevance: "skill" },
      { nameEn: "Euclid Contest", nameZh: "欧几里得", grades: "G12", season: "Spring", whyMatters: "Commonly recognized signal for Canadian STEM applicants (cautious).", whyMattersZh: "加拿大大学 STEM 申请中常被认可的数学能力信号。", relevance: "admissions" },
      { nameEn: "Fryer / Galois / Hypatia", nameZh: "Fryer / Galois / Hypatia", grades: "G9–11", season: "Spring", whyMatters: "Proof-oriented CEMC contests; deepen problem-solving depth.", whyMattersZh: "偏重证明的滑铁卢竞赛，深化解题能力。", relevance: "skill" },
      { nameEn: "CSMC / CIMC", nameZh: "加拿大高级与中级数学竞赛", grades: "G9–12", season: "Fall", whyMatters: "Fall benchmark; can be a useful admissions-signal (cautious).", whyMattersZh: "秋季基准赛，可作为升学参考之一。", relevance: "benchmark" },
      { nameEn: "Canadian Team Mathematics Contest (CTMC)", nameZh: "加拿大团队数学竞赛", grades: "G9–12", season: "Spring", whyMatters: "Team-based contest; collaboration and strategy.", whyMattersZh: "团队赛，锻炼协作与策略。", relevance: "team" },
      { nameEn: "Team Up Challenge", nameZh: "Team Up 挑战", grades: "Varies", season: "Varies", whyMatters: "Team activity; collaborative problem-solving.", whyMattersZh: "团队活动，协作解题。", relevance: "team" },
    ],
  },
  {
    groupEn: "US / AMC Pathway",
    groupZh: "美国 · AMC 体系",
    contests: [
      { nameEn: "AMC 8", grades: "G8 and below", season: "Winter", whyMatters: "Foundation for AMC 10/12; good benchmark.", whyMattersZh: "AMC 10/12 的基础，良好的水平定位。", relevance: "skill" },
      { nameEn: "AMC 10", grades: "G10 and below", season: "Fall / Winter", whyMatters: "Gateway to AIME; useful for US-style STEM profiles.", whyMattersZh: "通往 AIME 的桥梁，对美式 STEM 履历有帮助。", relevance: "admissions" },
      { nameEn: "AMC 12", grades: "G12 and below", season: "Fall / Winter", whyMatters: "Leads to AIME; commonly recognized in applications.", whyMattersZh: "通向 AIME，申请中常被认可。", relevance: "admissions" },
      { nameEn: "AIME", grades: "Invitation only", season: "Winter / Spring", whyMatters: "Strong signal for competitive STEM applicants.", whyMattersZh: "对竞争型 STEM 申请者是有力的信号。", relevance: "admissions" },
      { nameEn: "USA(J)MO", nameZh: "USAMO / USAJMO", grades: "Invitation only", season: "Spring", whyMatters: "Long-term milestone for top contest track.", whyMattersZh: "顶尖竞赛路径的长期里程碑。", relevance: "advanced" },
    ],
  },
  {
    groupEn: "Early / Foundation",
    groupZh: "启蒙与基础",
    contests: [
      { nameEn: "Math Kangaroo", nameZh: "袋鼠竞赛", grades: "G1–G12", season: "Spring", whyMatters: "Low-pressure introduction to contest math; builds confidence.", whyMattersZh: "低压力入门竞赛，建立信心。", relevance: "benchmark" },
      { nameEn: "Elmacon", nameZh: "Elmacon 竞赛", grades: "G5–G7", season: "Spring", whyMatters: "Local benchmark; stepping stone before Gauss/AMC 8.", whyMattersZh: "本地基准赛，高斯/AMC 8 前的过渡。", relevance: "benchmark" },
    ],
  },
  {
    groupEn: "Canadian Olympiad / National",
    groupZh: "加拿大奥赛与全国级",
    contests: [
      { nameEn: "COMC", nameZh: "Canadian Open Mathematics Challenge", grades: "G9–G12", season: "Fall", whyMatters: "National-level; commonly recognized for strong math applicants in Canada.", whyMattersZh: "全国级竞赛，在加拿大常作为数学能力参考。", relevance: "admissions" },
    ],
  },
];

// --- One-glance roadmap: unified rail system ---
type RailAccent = "waterloo" | "team" | "amc";

const ACCENT_HOVER_MAP: Record<RailAccent, string> = {
  waterloo: "hover:border-rail-waterloo hover:shadow-md",
  team: "hover:border-rail-team hover:shadow-md",
  amc: "hover:border-rail-amc hover:shadow-md",
};

type RoadmapNode = { name: string; grades: string; milestone?: boolean; elite?: boolean; groupedItems?: string[] };

const WATERLOO_NODES: RoadmapNode[] = [
  { name: "Gauss", grades: "G7–8" },
  { name: "Pascal / Cayley / Fermat", grades: "G9–11", groupedItems: ["Pascal", "Cayley", "Fermat"] },
  { name: "Euclid", grades: "G12", milestone: true },
];

const NATIONAL_TEAM_NODES: RoadmapNode[] = [
  { name: "COMC", grades: "G9–12" },
  { name: "CMO (Canada)", grades: "Eligibility" },
  { name: "IMO", grades: "International", elite: true },
];

const AMC_NODES: RoadmapNode[] = [
  { name: "AMC 8", grades: "G6–8" },
  { name: "AMC 10", grades: "G9–10" },
  { name: "AMC 12", grades: "G11–12" },
  { name: "AIME", grades: "Invite", milestone: true },
];

type SideChipItem = { label: string; sub?: string; optional?: boolean };

const WATERLOO_SIDE_CHIPS: SideChipItem[] = [
  { label: "Fryer / Galois / Hypatia", sub: "G9–11", optional: true },
];

/** Thin line + arrowhead connector (same for all rails) */
function RoadmapArrow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex shrink-0 items-center px-1.5 sm:px-2 ${className}`} aria-hidden>
      <svg className="h-4 w-6 text-navy-300 sm:h-5 sm:w-8" fill="none" viewBox="0 0 40 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <line x1="0" y1="12" x2="32" y2="12" />
        <path d="M32 8l4 4-4 4" />
      </svg>
    </div>
  );
}

/** Unified milestone badge: dark navy + gold star, bilingual */
function MilestoneBadge() {
  return (
    <span className="mt-1.5 inline-flex w-fit items-center gap-1 rounded-md bg-navy-800 px-2 py-0.5 text-[10px] font-medium text-white">
      <svg className="h-2.5 w-2.5 text-gold-light" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      Milestone / 关键里程碑
    </span>
  );
}

/** Elite badge: same design language, distinct color (amber-tinted) */
function EliteBadge() {
  return (
    <span className="mt-1.5 inline-flex w-fit items-center gap-1 rounded-md bg-rail-team px-2 py-0.5 text-[10px] font-medium text-white">
      <span className="h-1 w-1 rounded-full bg-gold-light" aria-hidden />
      Elite / 顶尖目标
    </span>
  );
}

/** Side chip: same style; optional chips get lighter style + "Optional / 可选" */
function SideChip({ label, sub, optional }: SideChipItem) {
  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[11px] ${
        optional
          ? "border-navy-200 bg-navy-50/60 text-navy-600"
          : "border-navy-200 bg-navy-50/80 text-navy-700"
      }`}
    >
      {label}
      {sub && <span className="ml-1.5 text-navy-500">{sub}</span>}
      {optional && <span className="ml-1 text-navy-400">Optional / 可选</span>}
    </span>
  );
}

/** Single node: compact for one-line fit; grouped node shows mini lines inside */
function RoadmapNode({
  node,
  accent,
  isLast,
}: {
  node: RoadmapNode;
  accent: RailAccent;
  isLast: boolean;
}) {
  const isGrouped = node.groupedItems && node.groupedItems.length > 0;
  return (
    <span className="flex shrink-0 items-center">
      <span
        className={`inline-flex flex-col items-center rounded-xl border-2 border-navy-200/90 bg-white px-3 py-2 shadow-sm transition ${isGrouped ? "min-w-[6.5rem] sm:min-w-[7rem] py-2.5" : "min-w-[3.75rem] sm:min-w-[4rem]"} ${ACCENT_HOVER_MAP[accent]}`}
      >
        <span className={`font-semibold text-navy-900 ${isGrouped ? "text-[11px] sm:text-xs" : "text-xs sm:text-sm"}`}>
          {node.name}
        </span>
        {node.grades && <span className="mt-0.5 text-[10px] text-navy-500 sm:text-xs">{node.grades}</span>}
        {isGrouped && node.groupedItems && (
          <div className="mt-1 flex flex-row flex-wrap justify-center gap-x-1.5 gap-y-0">
            {node.groupedItems.map((item) => (
              <span key={item} className="text-[9px] text-navy-500 sm:text-[10px]">
                {item}
              </span>
            ))}
          </div>
        )}
        {node.milestone && <MilestoneBadge />}
        {node.elite && <EliteBadge />}
      </span>
      {!isLast && <RoadmapArrow />}
    </span>
  );
}

/** Vertical (mobile) node */
function RoadmapNodeVertical({
  node,
  accent,
  hasNext,
}: {
  node: RoadmapNode;
  accent: RailAccent;
  hasNext: boolean;
}) {
  const isGrouped = node.groupedItems && node.groupedItems.length > 0;
  return (
    <div className="flex w-full flex-col items-stretch gap-0">
      <span
        className={`inline-flex flex-col rounded-xl border-2 border-navy-200/90 bg-white px-4 py-3 shadow-sm transition ${ACCENT_HOVER_MAP[accent]}`}
      >
        <span className="text-sm font-semibold text-navy-900">{node.name}</span>
        {node.grades && <span className="mt-0.5 text-xs text-navy-500">{node.grades}</span>}
        {isGrouped && node.groupedItems && (
          <div className="mt-1.5 flex flex-row flex-wrap gap-x-2 gap-y-0">
            {node.groupedItems.map((item) => (
              <span key={item} className="text-xs text-navy-500">{item}</span>
            ))}
          </div>
        )}
        {node.milestone && <MilestoneBadge />}
        {node.elite && <EliteBadge />}
      </span>
      {hasNext && (
        <div className="flex justify-center py-1">
          <svg className="h-6 w-6 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}
    </div>
  );
}

/** One rail: label left, node flow right (justify-between for right-edge alignment) */
function RoadmapRail({
  accent,
  titleEn,
  titleZh,
  nodes,
  sideChips,
  cautionNote,
}: {
  accent: RailAccent;
  titleEn: string;
  titleZh: string;
  nodes: RoadmapNode[];
  sideChips?: SideChipItem[];
  cautionNote?: React.ReactNode;
}) {
  const barClass = `h-0.5 rounded-full ${accent === "waterloo" ? "bg-rail-waterloo" : accent === "team" ? "bg-rail-team" : "bg-rail-amc"}`;
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[13rem_1fr] sm:items-center sm:gap-6">
        {/* Left: rail label + legend pills */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className={`border-l-2 pl-2 text-base font-semibold text-navy-800 ${
              accent === "waterloo" ? "border-rail-waterloo" : accent === "team" ? "border-rail-team" : "border-rail-amc"
            }`}>
              {titleEn}
            </span>
            <span className="text-sm font-normal text-navy-500">{titleZh}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="rounded bg-navy-100 px-1.5 py-0.5 text-[10px] text-navy-600">Milestone</span>
            {sideChips?.some((c) => c.optional) && (
              <span className="rounded bg-navy-100 px-1.5 py-0.5 text-[10px] text-navy-500">Optional</span>
            )}
          </div>
          <div className={barClass} role="presentation" />
        </div>
        {/* Right: node flow with justify-between so last node aligns to right edge */}
        <div className="hidden min-w-0 sm:block">
          <div className="flex flex-nowrap items-center justify-between">
            {nodes.map((node, i) => (
              <RoadmapNode key={`${node.name}-${i}`} node={node} accent={accent} isLast={i === nodes.length - 1} />
            ))}
          </div>
        </div>
      </div>
      {/* Mobile: vertical stepper */}
      <div className="flex flex-col items-stretch gap-0 sm:hidden">
        {nodes.map((node, i) => (
          <RoadmapNodeVertical key={`${node.name}-${i}`} node={node} accent={accent} hasNext={i < nodes.length - 1} />
        ))}
      </div>
      {sideChips && sideChips.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {sideChips.map((p) => (
            <SideChip key={p.label} label={p.label} sub={p.sub} optional={p.optional} />
          ))}
        </div>
      )}
      {cautionNote && (
        <p className="text-xs leading-relaxed text-navy-500">{cautionNote}</p>
      )}
    </div>
  );
}

function UnifiedRoadmap() {
  return (
    <div className="w-full space-y-12 sm:space-y-14">
      <RoadmapRail
        accent="amc"
        titleEn="AMC / US"
        titleZh="美式 AMC 线"
        nodes={AMC_NODES}
      />
      <RoadmapRail
        accent="waterloo"
        titleEn="Waterloo / Canada"
        titleZh="滑铁卢数学线"
        nodes={WATERLOO_NODES}
        sideChips={WATERLOO_SIDE_CHIPS}
      />
      <RoadmapRail
        accent="team"
        titleEn="Canada National Team"
        titleZh="加拿大国家队路线"
        nodes={NATIONAL_TEAM_NODES}
        cautionNote="CMO（Canada）通常需满足当年资格/提名口径；IMO 为顶尖目标路径。 — CMO eligibility/nomination rules apply; IMO is aspirational."
      />
    </div>
  );
}

export default function ProgramsPage() {
  const [selectedStage, setSelectedStage] = useState(0);
  const stage = STAGE_BANDS[selectedStage];

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {/* B) Title + Intro */}
        <header className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Contest Roadmap
          </h1>
          <p className="mt-1 text-base text-navy-500">
            竞赛规划
          </p>
          <p className="mt-4 text-lg text-navy-700">
            Choose the right contests by grade, timeline, and admissions goals.
          </p>
          <p className="mt-1 text-sm text-navy-500">
            按年级与目标选择竞赛路径，并给出清晰的备赛节奏与阶段里程碑。
          </p>
          <p className="mt-4 text-sm text-navy-500">
            Not sure where to start? Take a diagnostic or book a trial. —
            <span className="ml-1 text-navy-400">不确定选哪条路径？建议先做诊断测评或预约试课。</span>
          </p>
        </header>

        {/* Section 1 — Quick track by grade */}
        <section className="mt-12">
          <div className="border-l-[3px] border-accent pl-3 sm:pl-4">
            <h2 className="text-xl font-bold text-navy-900 sm:text-[1.25rem]">
              Quick track by grade
              <span className="ml-2 text-sm font-normal text-navy-500">按年级选赛道</span>
            </h2>
            <p className="mt-1 text-sm text-navy-500">
              Pick a track and see contests + focus in one glance.
              <span className="ml-1 text-navy-400">点选赛道，一眼看清对应竞赛与训练重点。</span>
            </p>
          </div>
          <div className="mt-4">
            <TrackTabs stages={STAGE_BANDS} selected={selectedStage} onSelect={setSelectedStage} />
          </div>
          <div className="mt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <TrackDetailPanel stage={stage} />
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* One-glance roadmap */}
        <section className="mt-12 py-10 sm:py-14">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              One-glance roadmap
            </h2>
            <p className="mt-1 text-sm text-navy-500 sm:text-base">
              一眼看懂路线图
            </p>
            <div className="mx-auto mt-4 h-px w-16 bg-navy-200" aria-hidden />
          </div>
          <div className="mt-12">
            <UnifiedRoadmap />
          </div>
          <p className="mt-14 text-center text-xs text-navy-500">
            竞赛可强化学术信号，但不等同于保证录取；需结合整体背景与学校要求。 —
            <span className="ml-1">Contests can strengthen applications but do not guarantee admission.</span>
          </p>
        </section>

        {/* Page CTA */}
        <section className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:bg-accent-dark"
          >
            Book a Trial
            <span className="ml-1.5 text-white/90">预约试课</span>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}

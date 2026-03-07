"use client";

import { motion } from "framer-motion";
import { TrophyIcon } from "@/components/icons/TrophyIcon";
import { ChartIcon } from "@/components/icons/ChartIcon";
import { MapIcon } from "@/components/icons/MapIcon";

const cards = [
  {
    titleZh: "高阶竞赛训练",
    titleEn: "Elite Competition Training",
    items: [
      "题目选择与训练策略",
      "知识点掌握与高阶技巧",
      "每周训练节奏与专项突破",
    ],
    Icon: TrophyIcon,
  },
  {
    titleZh: "数据分析与学习报告",
    titleEn: "AI-Powered Analytics & Reports",
    items: [
      "每道题数据追踪",
      "错误模式与知识漏洞分析",
      "家长可读的专业学习报告",
    ],
    Icon: ChartIcon,
  },
  {
    titleZh: "个人成长路线图",
    titleEn: "Personal Roadmap",
    items: [
      "按年级与月份规划竞赛节奏",
      "根据已完成试卷动态调整练习",
      "明确下一步该学什么、练什么",
    ],
    Icon: MapIcon,
  },
];

export function FeatureCards() {
  return (
    <section className="bg-white py-7 sm:py-12 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-bold text-navy-900 sm:text-xl md:text-3xl lg:text-4xl">
            看得见的训练体系，看得懂的学习结果
          </h2>
          <p className="mt-1 text-sm font-normal text-navy-500 sm:mt-1.5 md:mt-2 md:text-base lg:text-lg">
            Built for measurable progress and clear outcomes
          </p>
        </div>
        <div className="mt-5 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.article
              key={card.titleZh}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="flex flex-col rounded-[18px] border border-navy-200 bg-white p-4 shadow-sm transition hover:border-accent/30 hover:shadow-md md:rounded-2xl md:p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-100 text-navy-700 md:h-12 md:w-12 md:rounded-xl">
                <card.Icon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="mt-3 text-base font-semibold text-navy-900 md:mt-4 md:text-lg">
                {card.titleZh}
              </h3>
              <p className="mt-0.5 text-xs font-normal text-navy-500 md:text-sm">
                {card.titleEn}
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-xs text-navy-600 md:mt-3 md:space-y-1.5 md:text-sm">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

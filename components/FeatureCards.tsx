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
    <section className="bg-white py-10 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-bold text-navy-900 sm:text-2xl md:text-3xl lg:text-4xl">
            看得见的训练体系，看得懂的学习结果
          </h2>
          <p className="mt-1.5 text-sm font-normal text-navy-500 sm:mt-2 sm:text-base md:text-lg">
            Built for measurable progress and clear outcomes
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.article
              key={card.titleZh}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-navy-200 bg-white p-6 shadow-sm transition hover:border-accent/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-100 text-navy-700">
                <card.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">
                {card.titleZh}
              </h3>
              <p className="mt-0.5 text-sm font-normal text-navy-500">
                {card.titleEn}
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-navy-600">
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

import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/siteConfig";

export const metadata: Metadata = {
  title: "Book a Trial | Competition Math Coaching Consultation",
  description:
    "Book a trial or diagnostic test for AMC, AIME, Euclid, and competition math coaching.",
  alternates: { canonical: "https://www.burningmath.com/contact" },
};

const contactFAQItems: FAQItem[] = [
  {
    questionZh: "什么年级适合开始竞赛数学？",
    questionEn: "What grade is a good time to start competition math?",
    answer:
      "一般从 G4–G5 就可以开始建立竞赛数学基础。不同学生会根据数感、表达能力和解题习惯进入不同路径，例如启蒙、Elmacon、Gauss、AMC 预备等。",
  },
  {
    questionZh: "Elmacon、Gauss、AMC 有什么区别？",
    questionEn: "What is the difference between Elmacon, Gauss, and AMC?",
    answer:
      "Elmacon 更适合中低年级学生建立应用题、数论和基础竞赛思维；Gauss 属于 Waterloo 体系入门竞赛；AMC 体系更强调高天花板问题与后续 AIME 路线。具体路径会根据年级和基础来选择。",
  },
  {
    questionZh: "试课或诊断会包含什么？",
    questionEn: "What is included in a trial or diagnostic?",
    answer:
      "试课/诊断通常包括目标对齐、题型判断、基础能力观察，以及后续竞赛路线建议。完成后会给出更清晰的训练方向，而不只是简单分数。",
  },
  {
    questionZh: "诊断后会得到什么？",
    questionEn: "What do parents receive after a diagnostic?",
    answer:
      "家长通常会得到一份更清晰的学习判断，包括适合的竞赛路径、当前薄弱点、接下来优先训练内容，以及是否适合进入某一阶段课程。",
  },
  {
    questionZh: "需要很强数学基础才能报名吗？",
    questionEn: "Does a student need strong math foundations before joining?",
    answer:
      "不一定。不同阶段课程的目标不同：有些班适合零基础启蒙，有些班适合已经进入竞赛路径的学生。关键不是是否\"超前学过\"，而是是否匹配当前训练阶段。",
  },
  {
    questionZh: "是否只适合准备 AMC / AIME 的学生？",
    questionEn: "Is this only for students preparing for AMC / AIME?",
    answer:
      "不是。课程同时覆盖 AMC、AIME、Euclid、Gauss、Elmacon、Waterloo 路径，以及更高阶的 COMC / CSMC / CMO 方向。会根据学生目标做路径区分。",
  },
];

/** FAQPage JSON-LD for the 6 contact FAQs */
const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFAQItems.map((item) => ({
    "@type": "Question",
    name: item.questionEn,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 pt-12 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-navy-900">Contact / Book a Trial</h1>
        <p className="mt-2 text-navy-600">
          Get in touch or book a trial or diagnostic test.
        </p>
      </div>
      {siteConfig.showBookingForm && <BookingForm />}
      <FAQSection items={contactFAQItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
      <Footer />
    </>
  );
}

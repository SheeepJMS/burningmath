"use client";

import { useState } from "react";
import Image from "next/image";

const WECHAT_ID = "18565646596";
const WHATSAPP_NUMBER = "+1 306 914 4849";

/** Shared hint strip: message instructions for both WeChat and WhatsApp */
function ContactMessageHint() {
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-md gap-3 rounded-lg border border-navy-200/80 bg-navy-50/80 px-4 py-3">
        <svg className="mt-0.5 h-4 w-4 shrink-0 text-navy-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <p className="text-sm font-medium text-navy-800">
            请发送：学生姓名 + 年级 + 目标竞赛（可选）
          </p>
          <p className="mt-0.5 text-xs text-navy-500">
            Message: student name + grade + target contests (optional).
          </p>
        </div>
      </div>
    </div>
  );
}

/** WhatsApp icon (brand-style) for hero area — matches QR visual weight */
function WhatsAppHeroIcon() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#25D366]/12" aria-hidden>
      <svg viewBox="0 0 24 24" className="h-2/3 w-2/3 text-[#25D366]" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </div>
  );
}

const trialSteps: { zh: string; en: string }[] = [
  { zh: "快速对齐目标（年级 / 竞赛 / 时间线）", en: "Quick goal alignment (grade, contests, timeline)" },
  { zh: "选择合适诊断卷或试课方向", en: "Diagnostic/trial direction selection" },
  { zh: "生成报告与学习路线图", en: "Report + roadmap" },
  { zh: "推荐后续训练方案", en: "Training plan recommendation" },
];

export function BookingForm() {
  const [hasWeChat, setHasWeChat] = useState(true); // default: I have WeChat
  const [wechatImgError, setWechatImgError] = useState(false);
  const [copiedWechat, setCopiedWechat] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  const copyToClipboard = async (text: string, setter: (v: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text);
      setter(true);
      setTimeout(() => setter(false), 2000);
    } catch {
      // Clipboard not available
    }
  };

  return (
    <section id="booking" className="scroll-mt-20 border-t border-navy-200 bg-navy-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
          Book a Trial / Diagnostic
        </h2>

        {/* Top toggle: WeChat OR No WeChat */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="inline-flex rounded-full border border-navy-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setHasWeChat(true)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                hasWeChat
                  ? "bg-accent text-white"
                  : "text-navy-600 hover:bg-navy-50"
              }`}
            >
              我有微信
            </button>
            <button
              type="button"
              onClick={() => setHasWeChat(false)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                !hasWeChat
                  ? "bg-accent text-white"
                  : "text-navy-600 hover:bg-navy-50"
              }`}
            >
              没有微信
            </button>
          </div>
          <p className="text-xs text-navy-500">
            {hasWeChat ? "I have WeChat" : "No WeChat"}
          </p>
        </div>

        {/* Option A: WeChat card — centered hero layout */}
        {hasWeChat && (
          <>
            <div className="mt-10 rounded-2xl border border-navy-200 bg-white p-8 shadow-sm sm:p-10">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-bold text-navy-900">微信联系</h3>
                <p className="mt-0.5 text-sm text-navy-500">Contact via WeChat</p>
                {/* Hero: QR */}
                <div className="relative mt-8 h-[260px] w-[260px] shrink-0 overflow-hidden rounded-xl border border-navy-200 bg-navy-50 shadow-sm sm:h-[300px] sm:w-[300px]">
                  {!wechatImgError ? (
                    <Image
                      src="/assets/wechat.png"
                      alt="WeChat QR code"
                      fill
                      className="object-contain"
                      sizes="300px"
                      unoptimized
                      onError={() => setWechatImgError(true)}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-navy-500">
                      QR 码 placeholder
                    </div>
                  )}
                </div>
                {/* Primary info */}
                <p className="mt-6 text-xl font-semibold text-navy-900">
                  WeChat ID: {WECHAT_ID}
                </p>
                {/* Actions */}
                <button
                  type="button"
                  onClick={() => copyToClipboard(WECHAT_ID, setCopiedWechat)}
                  className="mt-3 rounded-full border border-navy-300 bg-white px-5 py-2.5 text-sm font-medium text-navy-700 transition hover:bg-navy-50"
                >
                  {copiedWechat ? "已复制" : "Copy"}
                </button>
                {/* Message hint */}
                <div className="mt-6 w-full max-w-md">
                  <ContactMessageHint />
                </div>
              </div>
            </div>
            {/* Trial steps */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-navy-900">
                试课 / 诊断会做什么
              </h3>
              <p className="mt-0.5 text-sm text-navy-500">What happens in a trial</p>
              <ul className="mt-4 space-y-3">
                {trialSteps.map((step) => (
                  <li key={step.zh} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <div>
                      <p className="text-navy-800">{step.zh}</p>
                      <p className="text-xs text-navy-500">{step.en}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* Option B: No WeChat — WhatsApp card — centered hero layout */}
        {!hasWeChat && (
          <>
            <div className="mt-10 rounded-2xl border border-navy-200 bg-white p-8 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-bold text-navy-900">WhatsApp 联系</h3>
                <p className="mt-0.5 text-sm text-navy-500">Contact via WhatsApp (No WeChat / 无微信)</p>
                {/* Hero: WhatsApp icon — same size as QR for consistency */}
                <div className="relative mt-8 flex h-[260px] w-[260px] shrink-0 overflow-hidden rounded-xl border border-navy-200 bg-white shadow-sm sm:h-[300px] sm:w-[300px]">
                  <WhatsAppHeroIcon />
                </div>
                {/* Primary info */}
                <p className="mt-6 text-xl font-semibold text-navy-900">
                  WhatsApp: {WHATSAPP_NUMBER}
                </p>
                {/* Actions */}
                <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(WHATSAPP_NUMBER, setCopiedWhatsApp)}
                    className="rounded-full border border-navy-300 bg-white px-5 py-2.5 text-sm font-medium text-navy-700 transition hover:bg-navy-50"
                  >
                    {copiedWhatsApp ? "已复制" : "Copy number"}
                  </button>
                  <a
                    href="https://wa.me/13069144849"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#20bd5a]"
                  >
                    Open WhatsApp
                  </a>
                </div>
                {/* Message hint */}
                <div className="mt-6 w-full max-w-md">
                  <ContactMessageHint />
                </div>
              </div>
            </div>

            {/* Trial steps */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-navy-900">
                试课 / 诊断会做什么
              </h3>
              <p className="mt-0.5 text-sm text-navy-500">What happens in a trial</p>
              <ul className="mt-4 space-y-3">
                {trialSteps.map((step) => (
                  <li key={step.zh} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <div>
                      <p className="text-navy-800">{step.zh}</p>
                      <p className="text-xs text-navy-500">{step.en}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "James Zeng | Competition Math Coach",
  description:
    "Meet James Zeng, competition math coach with Olympiad-level background, CMO Silver, National Math League First Prize, and an AI-powered training system.",
  alternates: { canonical: "https://www.burningmath.com/coach" },
};

export default function CoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

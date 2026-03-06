import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contest Roadmap | Programs | Burning Math Academy",
  description:
    "Choose the right math contests by grade, timeline, and admissions goals. Waterloo (Gauss, Euclid), AMC, AIME, COMC, Math Kangaroo, Elmacon.",
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

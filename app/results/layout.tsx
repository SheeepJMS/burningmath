import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Results | AMC, AIME, Euclid, Waterloo Outcomes",
  description:
    "View real student outcomes across AMC, AIME, Euclid, Waterloo contests, and other competition math pathways.",
  alternates: { canonical: "https://www.burningmath.com/results" },
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

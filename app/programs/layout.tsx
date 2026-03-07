import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Competition Math Roadmap | AMC, Euclid, Gauss, Elmacon",
  description:
    "Explore the competition math roadmap for AMC, Euclid, Gauss, Elmacon, COMC, and Waterloo contests by grade and training stage.",
  alternates: { canonical: "https://www.burningmath.com/programs" },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

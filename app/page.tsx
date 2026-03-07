import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { ResultsBand } from "@/components/ResultsBand";
import { PlatformPreviewCarousel } from "@/components/PlatformPreviewCarousel";
import { ProgramsSection } from "@/components/ProgramsSection";
import { CoachSection } from "@/components/CoachSection";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/siteConfig";

export const metadata: Metadata = {
  title: "Burning Math Academy | AMC, AIME, Euclid & Competition Math Coaching",
  description:
    "Burning Math Academy offers competition math coaching, AMC/AIME/Euclid preparation, and AI-powered diagnostics for students in Vancouver, Richmond, and Greater Vancouver.",
  alternates: { canonical: "https://www.burningmath.com/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <ResultsBand />
      <PlatformPreviewCarousel />
      <ProgramsSection />
      <CoachSection />
      {siteConfig.showBookingForm && <BookingForm />}
      <Footer />
    </>
  );
}

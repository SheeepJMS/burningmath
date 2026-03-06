import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { ResultsBand } from "@/components/ResultsBand";
import { PlatformPreviewCarousel } from "@/components/PlatformPreviewCarousel";
import { ProgramsSection } from "@/components/ProgramsSection";
import { CoachSection } from "@/components/CoachSection";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/siteConfig";

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

import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/siteConfig";

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
      <Footer />
    </>
  );
}

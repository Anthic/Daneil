import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { TestimonialsPageContent } from "@/components/sections/about/TestimonialsPageContent";
import { getTestimonialsPageData } from "@/lib/api/testimonials-page";

export const metadata: Metadata = {
  title: "Testimonials | Daniel The Healer",
  description:
    "Read heartwarming testimonials from clients who experienced life-changing healing with Reverend Daniel Metraux.",
};

export default async function TestimonialsPage() {
  const data = await getTestimonialsPageData();

  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={data.banner.title}
        imageSrc={data.banner.imageSrc}
        imageAlt={data.banner.imageAlt}
      />

      {/* Main Testimonials Content */}
      <TestimonialsPageContent testimonials={data.testimonials} />
    </div>
  );
}

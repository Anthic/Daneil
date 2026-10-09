import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { SessionsContent } from "@/components/sections/shop/SessionsContent";
import { sessionsPageData } from "@/data/sessions";

export const metadata: Metadata = {
  title: "Sessions & Rates | Daniel The Healer",
  description:
    "View rates and booking options for healing sessions with Reverend Daniel Metraux. Life Essence Reading, AlignTheBody, Quantum Touch, and packages.",
};

export default function SessionsPage() {
  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={sessionsPageData.banner.title}
        imageSrc={sessionsPageData.banner.imageSrc}
        imageAlt={sessionsPageData.banner.imageAlt}
      />

      {/* Main Sessions & Rates Content */}
      <SessionsContent data={sessionsPageData} />
    </div>
  );
}

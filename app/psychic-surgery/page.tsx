import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { PsychicSurgeryContent } from "@/components/sections/services/PsychicSurgeryContent";
import { psychicSurgeryData } from "@/data/psychic-surgery";

export const metadata: Metadata = {
  title: "Psychic Surgery | Daniel The Healer",
  description:
    "Experience Psychic Surgery with Reverend Daniel Metraux. Clear energy blocks, cords, curses, armor, and rebalance your spiritual field.",
};

export default function PsychicSurgeryPage() {
  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={psychicSurgeryData.banner.title}
        imageSrc={psychicSurgeryData.banner.imageSrc}
        imageAlt={psychicSurgeryData.banner.imageAlt}
      />

      {/* Main Content */}
      <PsychicSurgeryContent data={psychicSurgeryData} />
    </div>
  );
}

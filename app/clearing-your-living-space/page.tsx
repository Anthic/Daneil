import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { ClearingLivingSpaceContent } from "@/components/sections/services/ClearingLivingSpaceContent";
import { clearingLivingSpaceData } from "@/data/clearing-living-space";

export const metadata: Metadata = {
  title: "Clearing Your Living Space and House Blessing | Daniel The Healer",
  description:
    "Clear stuck, heavy and dark energies from your home or living space with Reverend Daniel Metraux. House blessings and energetic space clearing.",
};

export default function ClearingLivingSpacePage() {
  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={clearingLivingSpaceData.banner.title}
        imageSrc={clearingLivingSpaceData.banner.imageSrc}
        imageAlt={clearingLivingSpaceData.banner.imageAlt}
      />

      {/* Main Content */}
      <ClearingLivingSpaceContent data={clearingLivingSpaceData} />
    </div>
  );
}

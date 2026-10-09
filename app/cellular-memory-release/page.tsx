import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { CellularMemoryReleaseContent } from "@/components/sections/services/CellularMemoryReleaseContent";
import { cellularMemoryReleaseData } from "@/data/cellular-memory-release";

export const metadata: Metadata = {
  title: "Cellular Memory Release | Daniel The Healer",
  description:
    "Cellular Memory Release with Reverend Daniel Metraux. Clear physical and emotional trauma stored inside body cells using MariEl energy healing.",
};

export default function CellularMemoryReleasePage() {
  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={cellularMemoryReleaseData.banner.title}
        imageSrc={cellularMemoryReleaseData.banner.imageSrc}
        imageAlt={cellularMemoryReleaseData.banner.imageAlt}
      />

      {/* Main Content */}
      <CellularMemoryReleaseContent data={cellularMemoryReleaseData} />
    </div>
  );
}

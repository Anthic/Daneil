import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { AlignTheBodyContent } from "@/components/sections/services/AlignTheBodyContent";
import { alignTheBodyData } from "@/data/align-the-body";

export const metadata: Metadata = {
  title: "Align The Body | Daniel The Healer",
  description:
    "Proper body alignment and pain relief with Reverend Daniel Metraux. Quantum Touch spinal and structural adjustments through video gazing.",
};

export default function AlignTheBodyPage() {
  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={alignTheBodyData.banner.title}
        imageSrc={alignTheBodyData.banner.imageSrc}
        imageAlt={alignTheBodyData.banner.imageAlt}
      />

      {/* Main Content */}
      <AlignTheBodyContent data={alignTheBodyData} />
    </div>
  );
}

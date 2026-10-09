import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { LifeEssenceReadingContent } from "@/components/sections/services/LifeEssenceReadingContent";
import { getLifeEssenceReadingData } from "@/lib/api/life-essence-reading";

export const metadata: Metadata = {
  title: "Life Essence Reading | Daniel The Healer",
  description:
    "An assessment of the state of your Spiritual Development and Entity Field by Reverend Daniel Metraux.",
};

export default async function LifeEssenceReadingPage() {
  const data = await getLifeEssenceReadingData();

  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={data.banner.title}
        imageSrc={data.banner.imageSrc}
        imageAlt={data.banner.imageAlt}
      />

      {/* Main Life Essence Reading Content */}
      <LifeEssenceReadingContent data={data} />
    </div>
  );
}

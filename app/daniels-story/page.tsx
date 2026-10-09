import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { DanielsStoryContent } from "@/components/sections/about/DanielsStoryContent";
import { getDanielsStoryData } from "@/lib/api/daniels-story";

export const metadata: Metadata = {
  title: "Daniel's Story | Daniel The Healer",
  description:
    "Read Reverend Daniel Metraux's personal story of overcoming childhood illness, polio, bullying, and discovering spiritual healing and bliss.",
};

export default async function DanielsStoryPage() {
  const data = await getDanielsStoryData();

  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={data.banner.title}
        imageSrc={data.banner.imageSrc}
        imageAlt={data.banner.imageAlt}
      />

      {/* Main Story Content & Gazing Portrait */}
      <DanielsStoryContent data={data} />
    </div>
  );
}

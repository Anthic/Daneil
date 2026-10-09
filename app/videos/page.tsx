import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { VideosContent } from "@/components/sections/shop/VideosContent";
import { videosPageData } from "@/data/videos";

export const metadata: Metadata = {
  title: "Videos | Daniel The Healer",
  description:
    "Explore healing and spiritual growth videos with Reverend Daniel Metraux. Energy healing, chakra illumination, spirit helpers, and self-worth.",
};

export default function VideosPage() {
  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={videosPageData.banner.title}
        imageSrc={videosPageData.banner.imageSrc}
        imageAlt={videosPageData.banner.imageAlt}
      />

      {/* Main Videos Content */}
      <VideosContent data={videosPageData} />
    </div>
  );
}

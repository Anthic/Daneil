import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { BlissListContent } from "@/components/sections/about/BlissListContent";
import { blissListData } from "@/data/bliss-list";

export const metadata: Metadata = {
  title: "My Bliss List | Daniel The Healer",
  description:
    "Explore the components of living in a 24/7 state of bliss with Reverend Daniel Metraux across Spiritual, Emotional, Mental, and Physical realms.",
};

export default function MyBlissListPage() {
  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={blissListData.banner.title}
        imageSrc={blissListData.banner.imageSrc}
        imageAlt={blissListData.banner.imageAlt}
      />

      {/* Main Bliss List Content */}
      <BlissListContent data={blissListData} />
    </div>
  );
}

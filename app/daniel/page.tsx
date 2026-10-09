import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { AboutIntroSection } from "@/components/sections/about/AboutIntroSection";
import { HealingByGazeSection } from "@/components/sections/about/HealingByGazeSection";
import { LifeEssenceAboutSection } from "@/components/sections/about/LifeEssenceAboutSection";
import { getAboutPageData } from "@/lib/api/about";

export const metadata: Metadata = {
  title: "Daniel the Healer | About Reverend Daniel Metraux",
  description:
    "Learn about Reverend Daniel Metraux, his journey into hypnosis, quantum touch, healing by gaze, and the life essence reading.",
};

export default async function DanielTheHealerPage() {
  const data = await getAboutPageData();

  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={data.banner.title}
        imageSrc={data.banner.imageSrc}
        imageAlt={data.banner.imageAlt}
      />

      {/* About Daniel Intro Story */}
      <AboutIntroSection data={data.intro} />

      {/* Healing by Gaze Section */}
      <HealingByGazeSection data={data.healingByGaze} />

      {/* The Life Essence Reading Section */}
      <LifeEssenceAboutSection data={data.lifeEssence} />
    </div>
  );
}

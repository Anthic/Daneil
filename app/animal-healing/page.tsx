import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { AnimalHealingContent } from "@/components/sections/services/AnimalHealingContent";
import { animalHealingData } from "@/data/animal-healing";

export const metadata: Metadata = {
  title: "Animal Healing | Daniel The Healer",
  description:
    "Energetic healing and medical intuition for animals with Reverend Daniel Metraux. Compassionate animal communication and care.",
};

export default function AnimalHealingPage() {
  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={animalHealingData.banner.title}
        imageSrc={animalHealingData.banner.imageSrc}
        imageAlt={animalHealingData.banner.imageAlt}
      />

      {/* Main Content */}
      <AnimalHealingContent data={animalHealingData} />
    </div>
  );
}

import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { MedicalIntuitionContent } from "@/components/sections/services/MedicalIntuitionContent";
import { medicalIntuitionData } from "@/data/medical-intuition";

export const metadata: Metadata = {
  title: "Medical Intuition | Daniel The Healer",
  description:
    "Learn about Medical Intuition with Reverend Daniel Metraux. Extra sensory perception scanning for body organs and energy flow.",
};

export default function MedicalIntuitionPage() {
  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={medicalIntuitionData.banner.title}
        imageSrc={medicalIntuitionData.banner.imageSrc}
        imageAlt={medicalIntuitionData.banner.imageAlt}
      />

      {/* Main Content */}
      <MedicalIntuitionContent data={medicalIntuitionData} />
    </div>
  );
}

import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { AssistingDeathProcessContent } from "@/components/sections/services/AssistingDeathProcessContent";
import { assistingDeathProcessData } from "@/data/assisting-the-death-process";

export const metadata: Metadata = {
  title: "Assisting the Death Process | Daniel The Healer",
  description:
    "Assisting the transition of death with Reverend Daniel Metraux. Compassionate spiritual release and guidance for ease and peace.",
};

export default function AssistingDeathProcessPage() {
  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={assistingDeathProcessData.banner.title}
        imageSrc={assistingDeathProcessData.banner.imageSrc}
        imageAlt={assistingDeathProcessData.banner.imageAlt}
      />

      {/* Main Content */}
      <AssistingDeathProcessContent data={assistingDeathProcessData} />
    </div>
  );
}

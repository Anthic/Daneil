import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { HealingGazingPlayer } from "@/components/sections/about/HealingGazingPlayer";

export const metadata: Metadata = {
  title: "Healing/Gazing | Daniel The Healer",
  description:
    "Experience healing by gaze with Reverend Daniel Metraux. Quantum Touch energy transmission through video gazing.",
};

export default function HealingGazingPage() {
  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title="Healing/Gazing"
        imageSrc="/about/first page/a-banner.png"
        imageAlt="Healing / Gazing Banner"
      />

      {/* Main Healing Gazing Video Mockup */}
      <HealingGazingPlayer
        imageSrc="/home/daniel.avif"
        imageAlt="Reverend Daniel Metraux - Healing Gazing"
        shaplaSrc="/about/first page/shapla.png"
      />
    </div>
  );
}

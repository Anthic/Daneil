import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { QuantumTouchContent } from "@/components/sections/services/QuantumTouchContent";
import { quantumTouchData } from "@/data/quantum-touch";

export const metadata: Metadata = {
  title: "Quantum Touch | Daniel The Healer",
  description:
    "Learn about Quantum-Touch energy healing with Reverend Daniel Metraux. Heart-centered healing system projecting powerful love energies.",
};

export default function QuantumTouchPage() {
  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={quantumTouchData.banner.title}
        imageSrc={quantumTouchData.banner.imageSrc}
        imageAlt={quantumTouchData.banner.imageAlt}
      />

      {/* Main Content */}
      <QuantumTouchContent data={quantumTouchData} />
    </div>
  );
}

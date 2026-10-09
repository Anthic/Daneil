import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { DanielInterviewsList } from "@/components/sections/about/DanielInterviewsList";
import { getDanielInterviewsData } from "@/lib/api/daniel-interviews";

export const metadata: Metadata = {
  title: "Daniel Interviews | Daniel The Healer",
  description:
    "Watch and listen to Reverend Daniel Metraux's interviews on The Moore Show, Awakening Dynamics, Self Discovery Media, and more podcasts.",
};

export default async function DanielInterviewsPage() {
  const data = await getDanielInterviewsData();

  return (
    <div className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={data.banner.title}
        imageSrc={data.banner.imageSrc}
        imageAlt={data.banner.imageAlt}
      />

      {/* Main Interviews List Section */}
      <DanielInterviewsList interviews={data.interviews} />
    </div>
  );
}

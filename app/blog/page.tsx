import type { Metadata } from "next";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { BlogGrid } from "@/components/sections/blog/BlogGrid";
import { getBlogPageData } from "@/lib/api/blog";

export const metadata: Metadata = {
  title: "Blog | Daniel The Healer",
  description:
    "Insights, energy wisdom, and spiritual teachings from Reverend Daniel Metraux - Daniel The Healer.",
};

export default async function BlogPage() {
  const data = await getBlogPageData();

  return (
    <main className="relative w-full">
      {/* Page Hero Banner */}
      <AboutBanner
        title={data.banner.title}
        imageSrc={data.banner.imageSrc}
        imageAlt={data.banner.imageAlt}
      />

      {/* Blog Cards Grid */}
      <BlogGrid posts={data.posts} />
    </main>
  );
}

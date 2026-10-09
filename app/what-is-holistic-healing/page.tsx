import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { BlogPostContent } from "@/components/sections/blog/BlogPostContent";
import { getBlogPostBySlug } from "@/lib/api/blog";

export const metadata: Metadata = {
  title: "What is Holistic Healing | Daniel The Healer",
  description:
    "Reverend Daniel explains what holistic healing means, how it addresses body, mind, and spirit, and how a Life Essence Reading can shed light on your health.",
};

export default async function WhatIsHolisticHealingPage() {
  const post = await getBlogPostBySlug("what-is-holistic-healing");

  if (!post) {
    notFound();
  }

  return (
    <main className="relative w-full">
      <AboutBanner
        title={post.title}
        imageSrc="/about/first page/a-banner.png"
        imageAlt={post.title}
      />
      <BlogPostContent post={post} />
    </main>
  );
}

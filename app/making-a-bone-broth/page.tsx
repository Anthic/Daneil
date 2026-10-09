import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { BlogPostContent } from "@/components/sections/blog/BlogPostContent";
import { getBlogPostBySlug } from "@/lib/api/blog";

export const metadata: Metadata = {
  title: "Making A Bone Broth | Daniel The Healer",
  description:
    "Learn the health benefits of homemade bone broth, how it provides essential trace minerals and collagen, and how to make nutritious stock with love.",
};

export default async function MakingABoneBrothPage() {
  const post = await getBlogPostBySlug("making-a-bone-broth");

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

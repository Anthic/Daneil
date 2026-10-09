import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { BlogPostContent } from "@/components/sections/blog/BlogPostContent";
import { getBlogPostBySlug } from "@/lib/api/blog";

export const metadata: Metadata = {
  title: "You and Your Mind | Daniel The Healer",
  description:
    "Is your mind running amok? Learn how to take back control of your thoughts, end self-defeating self-talk, and train your mind for peace and well-being.",
};

export default async function YouAndYourMindPage() {
  const post = await getBlogPostBySlug("you-and-your-mind");

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

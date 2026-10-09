import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutBanner } from "@/components/sections/about/AboutBanner";
import { BlogPostContent } from "@/components/sections/blog/BlogPostContent";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/api/blog";

// Allow blocking route navigation under Next.js 16 Partial Prefetching / Instant navigation
export const instant = false;

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Daniel The Healer",
    };
  }

  return {
    title: `${post.title} | Daniel The Healer`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative w-full">
      {/* Post Banner */}
      <AboutBanner
        title={post.title}
        imageSrc="/about/first page/a-banner.png"
        imageAlt={post.title}
      />

      {/* Post Detail Body */}
      <BlogPostContent post={post} />
    </main>
  );
}

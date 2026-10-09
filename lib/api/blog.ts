import { blogPageData, blogPosts } from "@/data/blog";
import type { BlogPageData, BlogPost } from "@/types/blog";

export async function getBlogPageData(): Promise<BlogPageData> {
  // TODO(API): replace with real fetch when backend is ready
  return blogPageData;
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  // TODO(API): replace with real fetch when backend is ready
  return blogPosts.find((post) => post.slug === slug);
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return blogPosts;
}

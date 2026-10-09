"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { BlogPost } from "@/types/blog";

interface BlogGridProps {
  posts: BlogPost[];
}

function CalendarIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#9b97a6] flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        ry="2"
        strokeWidth="1.8"
      />
      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.8" />
      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="1.8" />
      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.8" />
    </svg>
  );
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden border border-[#e5e5e8] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col">
      {/* Featured Thumbnail */}
      <Link
        href={`/blog/${post.slug}`}
        className="relative block w-full aspect-[16/10] overflow-hidden bg-neutral-100 group"
      >
        <Image
          src={post.imageSrc}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        <h2 className="text-xl sm:text-[22px] font-bold text-[#1a1829] leading-snug mb-2">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-[#d2437b] transition-colors"
          >
            {post.title}
          </Link>
        </h2>

        {/* Date Row */}
        <div className="flex items-center gap-1.5 text-xs text-[#8c8898] mb-3.5">
          <CalendarIcon />
          <span>{post.date}</span>
        </div>

        {/* Excerpt */}
        <p className="text-[14px] text-[#524f60] leading-relaxed line-clamp-4 mb-4">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <div className="mt-auto pt-2">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#d2437b] hover:text-[#ba2c64] transition-colors group"
          >
            Read More
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export function BlogGrid({ posts }: BlogGridProps) {
  // To match the exact screenshot 2-column layout:
  // Col 1: Post 0 (Chakras), Post 3 (Holistic Healing)
  // Col 2: Post 1 (10 Ways), Post 2 (Mind), Post 4 (Bone Broth)
  const col1 = posts.filter((_, idx) => idx === 0 || idx === 3);
  const col2 = posts.filter((_, idx) => idx === 1 || idx === 2 || idx === 4);

  return (
    <section className="relative w-full bg-[#f6f6f9] py-14 sm:py-18 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        >
          {/* Column 1 */}
          <div className="flex flex-col gap-8">
            {col1.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8">
            {col2.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

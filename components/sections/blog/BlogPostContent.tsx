"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { BlogPost } from "@/types/blog";

interface BlogPostContentProps {
  post: BlogPost;
}

function renderFormattedText(text: string) {
  const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (!part) return null;
    if (part.startsWith("**") && part.endsWith("**")) {
      const inner = part.slice(2, -2);
      const linkMatch = inner.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        return (
          <strong key={index} className="font-semibold text-[#1a1828]">
            <a
              href={linkMatch[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2b6cb0] hover:text-[#d2437b] underline font-medium"
            >
              {linkMatch[1]}
            </a>
          </strong>
        );
      }
      return (
        <strong key={index} className="font-semibold text-[#1a1828]">
          {inner}
        </strong>
      );
    }
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2b6cb0] hover:text-[#d2437b] underline font-medium"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [commentMessage, setCommentMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentMessage.trim()) return;
    setSubmitted(true);
  };

  return (
    <article className="relative w-full bg-white py-10 sm:py-14 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#8c8898] hover:text-[#d2437b] transition-colors"
          >
            ← Back to All Articles
          </Link>
          <span className="text-xs text-[#8c8898]">{post.date}</span>
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[520px] rounded-lg sm:rounded-xl overflow-hidden bg-neutral-900 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[#e5e5e8] mb-10 mx-auto"
        >
          <Image
            src={post.imageSrc}
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-contain sm:object-cover object-center"
          />
        </motion.div>

        {/* Post Introductory Content */}
        {post.content && post.content.length > 0 && (
          <div className="space-y-4 text-[#403c4c] text-[15px] sm:text-[16px] leading-[1.75]">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{renderFormattedText(paragraph)}</p>
            ))}

            {/* External Link if present */}
            {post.link && (
              <p>
                <a
                  href={post.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2b6cb0] hover:text-[#d2437b] hover:underline transition-colors break-all"
                >
                  {post.link.text}
                </a>
              </p>
            )}
          </div>
        )}

        {/* Middle Image (e.g. video frame for What is Holistic Healing) */}
        {post.middleImageSrc && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="my-8 sm:my-10"
          >
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] max-h-[500px] rounded-lg sm:rounded-xl overflow-hidden shadow-md border border-[#e2dfe8] bg-black mx-auto">
              <Image
                src={post.middleImageSrc}
                alt={post.middleImageAlt || post.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain sm:object-cover object-center"
              />
            </div>
          </motion.div>
        )}

        {/* Post Follow-up Content (After Middle Image) */}
        {post.afterContent && post.afterContent.length > 0 && (
          <div className="space-y-4 text-[#403c4c] text-[15px] sm:text-[16px] leading-[1.75] my-6">
            {post.afterContent.map((paragraph, idx) => (
              <p key={idx}>{renderFormattedText(paragraph)}</p>
            ))}
          </div>
        )}

        {/* Numbered / Titled Sections */}
        {post.sections && post.sections.length > 0 && (
          <div className="mt-8 space-y-7">
            {post.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                {section.heading && (
                  <h2 className="text-[16px] sm:text-[17px] font-bold text-[#1a1828] leading-snug">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs ? (
                  section.paragraphs.map((para, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-[#444052] text-[14.5px] sm:text-[15.5px] leading-[1.75]"
                    >
                      {para}
                    </p>
                  ))
                ) : section.text ? (
                  <p className="text-[#444052] text-[14.5px] sm:text-[15.5px] leading-[1.75]">
                    {section.text}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        )}

        {/* Signoff & Signature */}
        {(post.signoff || post.signature) && (
          <div className="mt-8 space-y-1 text-[#444052] text-[15px] sm:text-[16px]">
            {post.signoff && <p>{post.signoff}</p>}
            {post.signature && (
              <p className="font-semibold text-[#1a1828]">{post.signature}</p>
            )}
          </div>
        )}

        {/* Footnote */}
        {post.footnote && (
          <div className="mt-8 pt-4 border-t border-[#ece9f2] text-xs text-[#736f82] italic">
            {post.footnote}
          </div>
        )}

        {/* Video Embed (if applicable) */}
        {post.youtubeId && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="my-10"
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-neutral-200 bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${post.youtubeId}?rel=0`}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </motion.div>
        )}

        {/* Divider */}
        <div className="border-t border-[#e5e5e8] my-12" />

        {/* Leave a Reply Section */}
        <section className="mt-8">
          <h3 className="text-2xl sm:text-[26px] font-bold text-[#1a1829] tracking-tight mb-2">
            Leave a Reply
          </h3>
          <p className="text-[14.5px] text-[#635f71] mb-6">
            You must be{" "}
            <Link
              href="/login"
              className="text-[#d2437b] hover:underline font-medium"
            >
              logged in
            </Link>{" "}
            to post a comment.
          </p>

          {/* Interactive Comment Form */}
          {submitted ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-sm">
              Thank you for your reply! Your comment has been submitted and is
              pending review.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
              <div>
                <label
                  htmlFor="comment"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#736f82] mb-1.5"
                >
                  Comment
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  value={commentMessage}
                  onChange={(e) => setCommentMessage(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="w-full px-4 py-2.5 rounded-lg border border-[#d8d5df] focus:border-[#d2437b] focus:ring-2 focus:ring-[#d2437b]/20 outline-none text-[15px] transition-all resize-y"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#736f82] mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg border border-[#d8d5df] focus:border-[#d2437b] focus:ring-2 focus:ring-[#d2437b]/20 outline-none text-[15px] transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#736f82] mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={commentEmail}
                    onChange={(e) => setCommentEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full px-4 py-2 rounded-lg border border-[#d8d5df] focus:border-[#d2437b] focus:ring-2 focus:ring-[#d2437b]/20 outline-none text-[15px] transition-all"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-full font-bold text-sm tracking-wide bg-gradient-to-r from-[#f04c94] via-[#e24587] to-[#d23875] text-[#ffe24a] shadow-[0_4px_14px_rgba(226,69,135,0.35)] hover:shadow-[0_6px_20px_rgba(226,69,135,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
                >
                  Post Comment
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </article>
  );
}

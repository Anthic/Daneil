"use client";

import { motion } from "motion/react";

interface SocialButtonProps {
  platform: "substack" | "facebook" | "youtube";
  href: string;
  ariaLabel: string;
}

export function SocialButton({ platform, href, ariaLabel }: SocialButtonProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="group relative flex h-[34px] w-[34px] items-center justify-center rounded-full border-[1.5px] border-[var(--brand-purple)] text-[var(--brand-purple)] transition-colors duration-200 hover:bg-[var(--brand-purple)] hover:text-white"
    >
      {platform === "substack" ? (
        <svg
          className="h-[14px] w-[14px] fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
        </svg>
      ) : platform === "facebook" ? (
        <svg
          className="h-[15px] w-[15px] fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.77 22.77 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.361H7.332v3.209h2.753v8.196h3.312z" />
        </svg>
      ) : (
        <svg
          className="h-[15px] w-[15px] fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M21.582 6.186a2.7 2.7 0 0 0-1.9-1.9C17.998 3.8 12 3.8 12 3.8s-5.998 0-7.682.486a2.7 2.7 0 0 0-1.9 1.9C1.932 7.87 1.932 12 1.932 12s0 4.13.486 5.814a2.7 2.7 0 0 0 1.9 1.9c1.684.486 7.682.486 7.682.486s5.998 0 7.682-.486a2.7 2.7 0 0 0 1.9-1.9c.486-1.684.486-5.814.486-5.814s0-4.13-.486-5.814zM9.9 15.429V8.571L15.9 12l-6 3.429z" />
        </svg>
      )}
    </motion.a>
  );
}

"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface CartButtonProps {
  itemCount: number;
}

export function CartButton({ itemCount }: CartButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="relative inline-flex items-center"
    >
      <Link
        href="/cart"
        aria-label={`Shopping cart with ${itemCount} items`}
        className="group relative flex items-center p-1 text-[var(--brand-purple)] transition-colors"
      >
        <svg
          className="h-[23px] w-[23px] transition-transform duration-200 group-hover:scale-105"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>

        {itemCount > 0 && (
          <span className="absolute -top-1.5 -right-2 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[var(--brand-purple)] px-1 text-[11px] font-bold leading-none text-white shadow-sm ring-1 ring-white">
            {itemCount}
          </span>
        )}
      </Link>
    </motion.div>
  );
}

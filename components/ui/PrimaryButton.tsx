"use client";

import Link from "next/link";
import { motion } from "motion/react";
import React from "react";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
}

export function PrimaryButton({
  href,
  children,
  ariaLabel,
  className = "",
}: PrimaryButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="inline-block"
    >
      <Link
        href={href}
        aria-label={ariaLabel}
        className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f04c94] via-[#e24587] to-[#d23875] px-7 py-2.5 text-sm sm:text-[15px] font-bold text-[#ffe24a] shadow-[0_6px_20px_rgba(230,76,148,0.38)] transition-all hover:brightness-105 hover:shadow-[0_8px_26px_rgba(230,76,148,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f04c94] ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface AboutBannerProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

export function AboutBanner({ title, imageSrc, imageAlt }: AboutBannerProps) {
  return (
    <section className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] overflow-hidden flex items-center justify-center select-none bg-neutral-900">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center brightness-95"
      />

      {/* Subtle overlay for text clarity */}
      <div className="absolute inset-0 bg-black/25 backdrop-blur-[0.5px]" />

      {/* Banner Title */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight drop-shadow-md"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}

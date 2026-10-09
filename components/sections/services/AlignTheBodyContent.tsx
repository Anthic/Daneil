"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ServiceVideoPlayer } from "@/components/sections/services/ServiceVideoPlayer";
import type { AlignTheBodyData } from "@/types/align-the-body";

interface AlignTheBodyContentProps {
  data: AlignTheBodyData;
}

export function AlignTheBodyContent({ data }: AlignTheBodyContentProps) {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[940px] px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* Section 1: Top Two-Column Overview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Align The Body Artwork */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[1/1] overflow-hidden rounded-xl shadow-md border border-neutral-200/70 bg-neutral-900">
              <Image
                src={data.overview.imageSrc}
                alt={data.overview.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Right Column: Title and Intro Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-7 space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#17193b] leading-tight tracking-tight">
              {data.overview.title}
            </h1>
            <div className="space-y-4 text-[15px] sm:text-[16px] text-[#3e3b47] leading-[1.85]">
              {data.overview.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 2: Centered Subheading & Paragraph before video */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center space-y-3"
        >
          <h2 className="text-[16px] sm:text-lg md:text-[19px] font-bold text-[#d2537c] tracking-tight">
            {data.reliefIntro.heading}
          </h2>
          <p className="text-[14.5px] sm:text-[15.5px] text-[#3e3b47] leading-[1.85]">
            {data.reliefIntro.paragraph}
          </p>
        </motion.div>

        {/* Section 3: Centered Video Player without extra logo */}
        <ServiceVideoPlayer
          imageSrc={data.video.imageSrc}
          imageAlt={data.video.imageAlt}
          duration={data.video.duration}
          initialSeconds={64} // 01:04
        />

        {/* Section 4: Two-Column Wellbeing & Skeleton Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
          {/* Left Column: Heading & Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-7 space-y-3.5"
          >
            <h2 className="text-[16px] sm:text-[17.5px] font-bold text-[#d2537c] leading-snug">
              {data.wellbeing.heading}
            </h2>
            <div className="space-y-3.5 text-[14.5px] sm:text-[15.5px] text-[#3e3b47] leading-[1.85]">
              {data.wellbeing.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Skeleton Posture Alignment Image (`scletion.jpg`) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[360px] aspect-[3/4] overflow-hidden rounded-xl shadow-md border border-neutral-200/80 bg-white">
              <Image
                src={data.wellbeing.imageSrc}
                alt={data.wellbeing.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-contain object-center"
              />
            </div>
          </motion.div>
        </div>

        {/* Section 5: About your session */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4 pt-2"
        >
          <h2 className="text-[16px] sm:text-[17.5px] font-bold text-[#d2537c] leading-snug">
            {data.sessionDetails.heading}
          </h2>

          <div className="space-y-3.5 text-[14.5px] sm:text-[15.5px] text-[#3e3b47] leading-[1.85]">
            {data.sessionDetails.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <p className="text-[14.5px] sm:text-[15.5px] font-bold text-[#17193b] pt-2">
            {data.sessionDetails.closingHighlight}
          </p>

          {/* Bottom Divider Line */}
          <div className="border-b border-[#e2e2e2] pt-4" />

          {/* CTA Button matching footer style */}
          <div className="pt-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block"
            >
              <Link
                href={data.cta.buttonHref}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f04c94] via-[#e24587] to-[#d23875] px-8 py-3 text-sm sm:text-[15px] font-bold text-[#ffe24a] shadow-[0_6px_20px_rgba(230,76,148,0.38)] transition-all hover:brightness-105 hover:shadow-[0_8px_26px_rgba(230,76,148,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f04c94]"
              >
                {data.cta.buttonText}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

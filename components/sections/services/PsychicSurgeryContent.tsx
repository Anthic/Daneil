"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ServiceVideoPlayer } from "@/components/sections/services/ServiceVideoPlayer";
import type { PsychicSurgeryData } from "@/types/psychic-surgery";

interface PsychicSurgeryContentProps {
  data: PsychicSurgeryData;
}

export function PsychicSurgeryContent({ data }: PsychicSurgeryContentProps) {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[940px] px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* Section 1: Top Two-Column Overview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Psychic Surgery Vortex Artwork */}
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

        {/* Section 2: Centered Video Player without extra logo */}
        <ServiceVideoPlayer
          imageSrc={data.video.imageSrc}
          imageAlt={data.video.imageAlt}
          duration={data.video.duration}
          initialSeconds={81} // 01:21
        />

        {/* Section 3: Two-Column Uses & Hands Image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start pt-2">
          {/* Left Column: Heading and Bullet Points */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-7 space-y-3.5"
          >
            <h2 className="text-[16px] sm:text-[17.5px] font-bold text-[#d2537c] leading-snug">
              {data.uses.heading}
            </h2>
            <ul className="list-disc pl-5 space-y-2.5 text-[14px] sm:text-[15px] text-[#3e3b47] leading-[1.8]">
              {data.uses.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Healing Hands Artwork */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[380px] aspect-[1/1] overflow-hidden rounded-xl shadow-md border border-neutral-200/80 bg-neutral-900">
              <Image
                src={data.uses.imageSrc}
                alt={data.uses.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

        {/* Section 4: Divider and CTA Button matching footer style */}
        <div className="space-y-4 pt-2">
          <div className="border-b border-[#e2e2e2]" />
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
        </div>
      </div>
    </section>
  );
}

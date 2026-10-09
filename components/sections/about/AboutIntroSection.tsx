"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import type { AboutPageData } from "@/types/about";
import { ProfessionalSummaryModal } from "./ProfessionalSummaryModal";

interface AboutIntroSectionProps {
  data: AboutPageData["intro"];
}

export function AboutIntroSection({ data }: AboutIntroSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full bg-white py-14 sm:py-18 md:py-22">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#17193b] tracking-tight mb-8 sm:mb-10"
        >
          {data.title}
        </motion.h2>

        {/* Upper Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: First Two Paragraphs with Shapla Icon */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Paragraph 1 with floating Shapla lotus icon */}
            <div className="flex items-start gap-4">
              <div className="relative w-8 h-8 shrink-0 mt-1">
                <Image
                  src={data.shaplaIconSrc}
                  alt="Lotus Icon"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[1.8] text-[#3e3b47] font-normal">
                {data.paragraphs[0]}
              </p>
            </div>

            {/* Paragraph 2 */}
            <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[1.8] text-[#3e3b47] font-normal pl-0 sm:pl-12">
              {data.paragraphs[1]}
            </p>
          </motion.div>

          {/* Right Column: Daniel Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[460px] aspect-[4/3] sm:aspect-[1.12/1] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-black/5">
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 460px, 500px"
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Lower Full-Width Story Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 sm:mt-12 space-y-6 max-w-5xl"
        >
          {/* Paragraph 3 */}
          <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[1.8] text-[#3e3b47] font-normal">
            {data.paragraphs[2]}
          </p>

          {/* Paragraph 4 */}
          <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[1.8] text-[#3e3b47] font-normal">
            {data.paragraphs[3]}
          </p>

          {/* See More Button triggering modal */}
          <div className="pt-3 flex flex-wrap items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f04c94] via-[#e24587] to-[#d23875] px-7 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-[15px] font-bold text-[#ffe24a] shadow-[0_6px_20px_rgba(230,76,148,0.38)] transition-all hover:brightness-105 hover:shadow-[0_8px_26px_rgba(230,76,148,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f04c94]"
                aria-label="See More Professional Summary"
              >
                See More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Professional Summary Modal */}
      <ProfessionalSummaryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { AboutPageData } from "@/types/about";

interface LifeEssenceAboutSectionProps {
  data: AboutPageData["lifeEssence"];
}

export function LifeEssenceAboutSection({ data }: LifeEssenceAboutSectionProps) {
  return (
    <section className="relative w-full bg-[#f8f7fa] pb-18 sm:pb-22 md:pb-26 pt-4 border-t border-black/5">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        {/* Centered Heading with Underline */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block text-2xl sm:text-3xl md:text-[32px] font-bold text-[#17193b] tracking-tight border-b-2 border-[#17193b] pb-1.5"
          >
            {data.title}
          </motion.h3>
        </div>

        {/* Content & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-5"
          >
            {data.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-[15px] sm:text-[16px] leading-[1.8] text-[#3e3b47] font-normal"
              >
                {p}
              </p>
            ))}
          </motion.div>

          {/* Right Column: Pink Flowers Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[460px] aspect-[1.25/1] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-black/5 sticky top-24">
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                sizes="(max-width: 640px) 95vw, (max-width: 1024px) 460px, 500px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

        {/* Concluding Highlight Note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 sm:mt-16 pt-8 border-t border-black/5"
        >
          <p className="text-center text-sm sm:text-base font-medium text-[#2d2a36] tracking-wide max-w-4xl mx-auto">
            {data.closingHighlight}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

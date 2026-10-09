"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { AboutDanielData } from "@/types/about-daniel";

interface AboutDanielSectionProps {
  data: AboutDanielData;
}

export function AboutDanielSection({ data }: AboutDanielSectionProps) {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text & CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 max-w-xl"
          >
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-[#17193b] leading-tight tracking-tight">
              {data.title}
            </h2>

            {/* Paragraph 1 */}
            <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-[#4f4a56] font-normal tracking-normal">
              {data.paragraph1}
            </p>

            {/* Paragraph 2 */}
            <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#4f4a56] font-normal tracking-normal">
              {data.paragraph2}
            </p>

            {/* Action Buttons Row */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Button 1: Contact Us */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block"
              >
                <Link
                  href={data.contactButtonHref}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f04c94] via-[#e24587] to-[#d23875] px-7 py-2.5 text-sm sm:text-[15px] font-bold text-[#ffe24a] shadow-[0_6px_20px_rgba(230,76,148,0.38)] transition-all hover:brightness-105 hover:shadow-[0_8px_26px_rgba(230,76,148,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f04c94]"
                  aria-label={data.contactButtonText}
                >
                  {data.contactButtonText}
                </Link>
              </motion.div>

              {/* Button 2: More About Daniel */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block"
              >
                <Link
                  href={data.moreAboutButtonHref}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f04c94] via-[#e24587] to-[#d23875] px-7 py-2.5 text-sm sm:text-[15px] font-bold text-[#ffe24a] shadow-[0_6px_20px_rgba(230,76,148,0.38)] transition-all hover:brightness-105 hover:shadow-[0_8px_26px_rgba(230,76,148,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f04c94]"
                  aria-label={data.moreAboutButtonText}
                >
                  {data.moreAboutButtonText}
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Standing Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[3/4] flex items-end justify-center">
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 460px"
                className="object-contain object-bottom pointer-events-none select-none transition-transform duration-500 hover:scale-[1.02]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

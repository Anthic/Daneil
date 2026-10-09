"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { LifeEssenceData } from "@/types/life-essence";

interface LifeEssenceSectionProps {
  data: LifeEssenceData;
}

export function LifeEssenceSection({ data }: LifeEssenceSectionProps) {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 max-w-xl"
          >
            {/* Title: 2 lines matching screenshot */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#17193b] leading-[1.1] tracking-tight">
              <span className="block">{data.titleLine1}</span>
              <span className="block mt-1">{data.titleLine2}</span>
            </h2>

            {/* Description: Two-tone typography matching screenshot */}
            <p className="mt-6 sm:mt-8 text-[15px] sm:text-base leading-relaxed tracking-normal">
              <span className="font-semibold text-[#302d38]">
                {data.primaryDescription}{" "}
              </span>
              <span className="text-[#8e8b98]">
                {data.secondaryDescription}
              </span>
            </p>

            {/* Read More CTA Pill Button matching screenshot */}
            <div className="mt-8 sm:mt-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block"
              >
                <Link
                  href={data.buttonHref}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f04c94] via-[#e24587] to-[#d23875] px-7 py-2.5 text-sm sm:text-[15px] font-bold text-[#ffe24a] shadow-[0_6px_20px_rgba(230,76,148,0.38)] transition-all hover:brightness-105 hover:shadow-[0_8px_26px_rgba(230,76,148,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f04c94]"
                  aria-label={`Read more about ${data.titleLine1} ${data.titleLine2}`}
                >
                  {data.buttonText}
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Featured Image with 3D Left-cast Shadow */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5]  overflow-hidden  transition-transform duration-500 hover:-translate-y-1">
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 460px"
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

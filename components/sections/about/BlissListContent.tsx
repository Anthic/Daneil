"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { BlissListData } from "@/types/bliss-list";

interface BlissListContentProps {
  data: BlissListData;
}

export function BlissListContent({ data }: BlissListContentProps) {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[820px] px-4 sm:px-6 space-y-7 sm:space-y-8">
        {/* Top Centered Bliss Image (`laf.jpg`) matching screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full aspect-[16/10] sm:aspect-[1.55/1] overflow-hidden rounded-lg shadow-sm border border-neutral-200/80 bg-neutral-100 mb-8 sm:mb-10"
        >
          <Image
            src={data.heroImage.src}
            alt={data.heroImage.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 820px"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Intro Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="space-y-4 text-[15px] sm:text-[16px] text-[#3e3b47] leading-[1.85]"
        >
          {data.introParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </motion.div>

        {/* Bliss Categories with Pink Badge Header and Text Points */}
        <div className="space-y-7 sm:space-y-8 pt-2">
          {data.categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.3) }}
              className="space-y-3"
            >
              {/* Category Heading with Pink Badge */}
              <div className="text-[15.5px] sm:text-[16.5px] font-bold text-[#17193b] leading-snug">
                {category.headingPrefix && (
                  <span className="font-semibold mr-1">{category.headingPrefix} </span>
                )}
                <span className="inline-block bg-[#e05282] text-white px-2 py-0.5 rounded-sm font-bold text-xs uppercase tracking-wide mr-1 shadow-xs">
                  {category.badge}
                </span>
                <span>{category.headingText}</span>
              </div>

              {/* Category Points */}
              <div className="space-y-2.5 text-[14.5px] sm:text-[15.5px] text-[#3e3b47] leading-[1.85]">
                {category.points.map((point, pIdx) => (
                  <p key={pIdx}>{point}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

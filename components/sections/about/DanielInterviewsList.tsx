"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { InterviewItem } from "@/types/daniel-interviews";

interface DanielInterviewsListProps {
  interviews: InterviewItem[];
}

export function DanielInterviewsList({ interviews }: DanielInterviewsListProps) {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[880px] px-4 sm:px-6">
        {/* Top dividing border line matching screenshot 2 */}
        <div className="border-t border-[#e2e2e2]" />

        <div className="divide-y divide-[#e2e2e2]">
          {interviews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
              className="py-6 sm:py-8 flex flex-col sm:flex-row items-start gap-5 sm:gap-7"
            >
              {/* Left Column: Image Thumbnail */}
              <div className="relative w-full sm:w-[290px] md:w-[330px] aspect-[16/9] shrink-0 overflow-hidden rounded-md shadow-sm border border-neutral-200/90 bg-neutral-100">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 330px"
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Right Column: Title, Subtitle, and Red/Pink Links */}
              <div className="flex-1 pt-0.5 space-y-2.5">
                <h2 className="text-[15px] sm:text-[16.5px] font-bold text-[#17193b] leading-snug">
                  {item.title}
                </h2>

                {item.subtitle && (
                  <p className="text-[14px] sm:text-[14.5px] text-[#484552] font-medium leading-relaxed">
                    {item.subtitle}
                  </p>
                )}

                <div className="space-y-1.5 pt-1">
                  {item.links.map((link, lIdx) => (
                    <div key={lIdx} className="text-[13.5px] sm:text-[14px] leading-relaxed break-all">
                      {link.label && (
                        <span className="font-semibold text-[#22232d] mr-1.5">{link.label}</span>
                      )}
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#d2537c] hover:text-[#541451] underline underline-offset-2 transition-colors font-medium"
                      >
                        {link.url}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

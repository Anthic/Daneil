"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import type { RadioShowSectionData } from "@/types/radio-show";

interface RadioShowSectionProps {
  data: RadioShowSectionData;
}

export function RadioShowSection({ data }: RadioShowSectionProps) {
  return (
    <section className="relative w-full bg-[#f4f4f6] py-10 sm:py-14 lg:py-16 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
        {/* Left Column: Heading, Description & Button */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-5/12 xl:w-4/12 px-6 sm:px-10 lg:pl-14 xl:pl-20 2xl:pl-32 lg:pr-8 max-w-xl flex-shrink-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#17193b] tracking-tight">
            {data.title}
          </h2>
          <p className="mt-3 sm:mt-4 text-[13px] sm:text-sm md:text-[15px] leading-relaxed text-[#63606d] font-normal">
            {data.description}
          </p>

          {/* View More Pill Button */}
          <div className="mt-6 sm:mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block"
            >
              <Link
                href={data.buttonHref}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f04c94] via-[#e24587] to-[#d23875] px-7 py-2.5 text-sm sm:text-[15px] font-bold text-[#ffe24a] shadow-[0_6px_20px_rgba(230,76,148,0.38)] transition-all hover:brightness-105 hover:shadow-[0_8px_26px_rgba(230,76,148,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f04c94]"
                aria-label={data.buttonText}
              >
                {data.buttonText}
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: 3 Live / Radio Showcase Images - Full Width to Right Edge */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="w-full lg:w-7/12 xl:w-8/12 flex-1"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[280px]">
            {data.shows.map((show) => (
              <div
                key={show.id}
                className="group relative h-full w-full overflow-hidden select-none"
              >
                {/* Base Image */}
                <Image
                  src={show.imageSrc}
                  alt={show.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 35vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Dark Hover Overlay revealing the text and link requested */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/85 p-4 text-center opacity-0 transition-opacity duration-300 backdrop-blur-[1.5px] group-hover:opacity-100">
                  <p className="text-xs sm:text-sm font-semibold text-white leading-snug drop-shadow-sm">
                    {show.hoverTitle}
                  </p>
                  <a
                    href={show.hoverLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#f04c94] to-[#d23875] px-4 py-1.5 text-xs font-bold text-[#ffe24a] shadow-md transition-all hover:scale-105 hover:brightness-110"
                    aria-label={`${show.hoverTitle} ${show.hoverLinkText}`}
                  >
                    <span>{show.hoverLinkText}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

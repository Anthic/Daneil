"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import type { TestimonialSectionData } from "@/types/testimonial";

interface TestimonialSectionProps {
  data: TestimonialSectionData;
}

export function TestimonialSection({ data }: TestimonialSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = data.testimonials[currentIndex] || data.testimonials[0];

  return (
    <section className="relative w-full overflow-hidden bg-neutral-950 py-20 sm:py-24 md:py-32 lg:py-40">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={data.backgroundImage}
          alt="Client Testimonials Background"
          fill
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none brightness-90"
        />
        {/* Dark Vignette & Readability Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white tracking-tight">
              {currentItem.heading}
            </h2>

            {/* Testimonial Quote */}
            <p className="mt-6 sm:mt-8 max-w-3xl text-sm sm:text-base md:text-[17px] leading-relaxed sm:leading-[1.85] text-white/95 font-normal tracking-wide">
              {currentItem.quote}
            </p>

            {/* Client Highlight / Tag */}
            {currentItem.clientHighlight && (
              <p className="mt-5 sm:mt-6 text-sm sm:text-[15px] italic text-[#ded9e8] font-medium tracking-wide">
                {currentItem.clientHighlight}
              </p>
            )}

            {/* Find Out More Pill Button */}
            <div className="mt-8 sm:mt-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block"
              >
                <Link
                  href={currentItem.buttonHref}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f04c94] via-[#e24587] to-[#d23875] px-7 py-2.5 text-sm sm:text-[15px] font-bold text-[#ffe24a] shadow-[0_6px_20px_rgba(230,76,148,0.38)] transition-all hover:brightness-105 hover:shadow-[0_8px_26px_rgba(230,76,148,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f04c94]"
                  aria-label={`Read more: ${currentItem.heading}`}
                >
                  {currentItem.buttonText}
                </Link>
              </motion.div>
            </div>

            {/* Pagination dots if multiple testimonials exist */}
            {data.testimonials.length > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                {data.testimonials.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-8 bg-[#f04c94]"
                        : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

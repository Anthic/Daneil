"use client";

import { motion } from "motion/react";
import type { TestimonialsPageItem } from "@/types/testimonials-page";

interface TestimonialsPageContentProps {
  testimonials: TestimonialsPageItem[];
}

export function TestimonialsPageContent({ testimonials }: TestimonialsPageContentProps) {
  return (
    <section className="relative w-full bg-white py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-[760px] px-5 sm:px-8 text-center space-y-12 sm:space-y-16">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.3) }}
            className="space-y-3.5 sm:space-y-4"
          >
            {/* Pink Heading */}
            <h2 className="text-xl sm:text-2xl md:text-[23px] font-bold text-[#d2537c] tracking-tight">
              {item.title}
            </h2>

            {/* Testimonial Quote */}
            <p className="text-[15px] sm:text-[16.5px] leading-[1.95] text-[#3e3b47] font-normal">
              {item.quote}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

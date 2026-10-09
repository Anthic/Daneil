"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { ServicesSectionData } from "@/types/services";

interface ServicesGridSectionProps {
  data: ServicesSectionData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function ServicesGridSection({ data }: ServicesGridSectionProps) {
  return (
    <section className="relative w-full bg-[#fcfbfa] py-14 sm:py-18 md:py-22 lg:py-26">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading matching screenshot */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#17193b] tracking-tight"
          >
            {data.title}
          </motion.h2>
        </div>

        {/* 3 Columns × 3 Rows Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
        >
          {data.services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative"
            >
              <Link
                href={service.href}
                className="block relative aspect-square w-full overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 focus:outline-none"
                aria-label={`View details for ${service.title}`}
              >
                {/* Full Image Display */}
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                  className="object-cover object-center rounded-xl sm:rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

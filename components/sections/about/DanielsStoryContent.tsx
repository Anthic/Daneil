"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { DanielsStoryData } from "@/types/daniels-story";

interface DanielsStoryContentProps {
  data: DanielsStoryData;
}

export function DanielsStoryContent({ data }: DanielsStoryContentProps) {
  return (
    <section className="relative w-full bg-white py-14 sm:py-18 md:py-22">
      <div className="mx-auto max-w-[860px] px-5 sm:px-8 lg:px-10">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-5 sm:space-y-6 text-[15.5px] sm:text-[16.5px] leading-[1.85] text-[#3e3b47] font-normal"
        >
          {/* Paragraphs before gazing portrait */}
          {data.beforeImageParagraphs.map((para, idx) => {
            // Check if paragraph contains "Bliss List" to insert clickable link
            if (para.includes('"Bliss List"')) {
              const parts = para.split('"Bliss List"');
              return (
                <p key={idx}>
                  {parts[0]}
                  <Link
                    href="/bliss-list"
                    className="font-semibold text-[#d2537c] underline underline-offset-2 hover:text-[#541451] transition-colors"
                  >
                    &ldquo;Bliss List&rdquo;
                  </Link>
                  {parts[1]}
                </p>
              );
            }
            return <p key={idx}>{para}</p>;
          })}

          {/* Centered Gazing Portrait Picture - Full Image without border radius */}
          <div className="py-6 sm:py-8 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative shadow-md border border-black/10 overflow-hidden"
            >
              <Image
                src={data.gazingImage.imageSrc}
                alt={data.gazingImage.imageAlt}
                width={380}
                height={536}
                className="w-auto h-auto max-w-[360px] sm:max-w-[420px] block"
                priority
              />
            </motion.div>
          </div>

          {/* After image closing paragraphs */}
          {data.afterImageParagraphs.map((para, idx) => (
            <p
              key={`after-${idx}`}
              className={idx === data.afterImageParagraphs.length - 1 ? "font-semibold text-[#17193b] pt-2" : ""}
            >
              {para}
            </p>
          ))}
        </motion.article>
      </div>
    </section>
  );
}

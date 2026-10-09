"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { heroSlides as defaultSlides } from "@/data/hero";
import type { HeroSlide } from "@/types/hero";

interface HeroCarouselProps {
  slides?: HeroSlide[];
  autoPlayInterval?: number;
}

export function HeroCarousel({
  slides = defaultSlides,
  autoPlayInterval = 6000,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay infinite loop timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, autoPlayInterval, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 50) {
      // Swiped left
      nextSlide();
    } else if (diff < -50) {
      // Swiped right
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative w-full overflow-hidden select-none bg-[#fcfbfa]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Daniel The Healer Featured Banner"
    >
      {/* Viewport Container - Generous height so full image is not cut off */}
      <div className="relative min-h-[520px] sm:min-h-[580px] md:min-h-[620px] lg:min-h-[660px] xl:min-h-[680px] 2xl:min-h-[720px] w-full flex items-center">
        {/* Background Slide Image with Cross-fade Transition (Clear full image, top-aligned so head/torso are never cropped) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={currentSlide.imageSrc}
              alt={currentSlide.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top sm:object-[center_top] lg:object-[80%_top]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Foreground Content Container */}
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24">
          <div className="max-w-xl sm:max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-start"
              >
                {/* Hero Title - Exactly 36px font size with modern harmonious styling */}
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                  className="text-[36px] font-extrabold tracking-tight text-[var(--brand-pink)] leading-[1.25]"
                >
                  {currentSlide.title}
                </motion.h1>

                {/* Subtitle - uppercase, clean, modern, easily readable */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                  className="mt-4 text-sm sm:text-base font-bold uppercase tracking-[0.06em] text-[#231f2a] leading-relaxed max-w-lg"
                >
                  {currentSlide.subtitle}
                </motion.p>

                {/* Read More Pill Button */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.25 }}
                  className="mt-8"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-block"
                  >
                    <Link
                      href={currentSlide.buttonHref}
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f04c94] via-[#e24587] to-[#d23875] px-7 py-2.5 text-sm sm:text-[15px] font-bold text-[#ffe24a] shadow-[0_6px_20px_rgba(230,76,148,0.38)] transition-all hover:brightness-105 hover:shadow-[0_8px_26px_rgba(230,76,148,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f04c94]"
                    >
                      {currentSlide.buttonText}
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="absolute inset-y-0 left-4 right-4 z-20 pointer-events-none hidden sm:flex items-center justify-between max-w-[1640px] mx-auto">
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="pointer-events-auto flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-[var(--brand-purple)]/20 bg-white/85 text-[var(--brand-purple)] backdrop-blur-md shadow-md transition-all duration-200 hover:bg-[var(--brand-purple)] hover:text-white hover:scale-105 active:scale-95"
          >
            <svg
              className="h-5 w-5 lg:h-6 lg:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="pointer-events-auto flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-[var(--brand-purple)]/20 bg-white/85 text-[var(--brand-purple)] backdrop-blur-md shadow-md transition-all duration-200 hover:bg-[var(--brand-purple)] hover:text-white hover:scale-105 active:scale-95"
          >
            <svg
              className="h-5 w-5 lg:h-6 lg:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Bottom Pagination Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 inset-x-0 z-20 flex items-center justify-center gap-3">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive ? "true" : "false"}
                className="group relative flex h-3.5 items-center transition-all duration-300 focus:outline-hidden"
              >
                {isActive ? (
                  <div className="relative h-2.5 w-10 sm:w-12 overflow-hidden rounded-full bg-[var(--brand-purple)]/20 ring-1 ring-[var(--brand-pink)]/40">
                    <motion.div
                      key={`progress-${currentIndex}`}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? "100%" : "100%" }}
                      transition={{
                        duration: autoPlayInterval / 1000,
                        ease: "linear",
                      }}
                      className="h-full bg-gradient-to-r from-[var(--brand-pink)] to-[var(--brand-purple)] rounded-full"
                    />
                  </div>
                ) : (
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--brand-purple)]/30 transition-all duration-200 group-hover:scale-125 group-hover:bg-[var(--brand-pink)]" />
                )}
              </button>
            );
          })}

          {/* Slide Number Counter */}
          <div className="ml-3 hidden sm:flex items-center text-xs font-bold tracking-widest text-[var(--brand-purple)]/70">
            <span>0{currentIndex + 1}</span>
            <span className="mx-1 opacity-40">/</span>
            <span>0{slides.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

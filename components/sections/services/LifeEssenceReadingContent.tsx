"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Settings, Maximize, Heart } from "lucide-react";
import type { LifeEssenceReadingData } from "@/types/life-essence-reading";

interface LifeEssenceReadingContentProps {
  data: LifeEssenceReadingData;
}

export function LifeEssenceReadingContent({ data }: LifeEssenceReadingContentProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(74); // 01:14
  const [progress, setProgress] = useState(32);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 0.5;
      });
      setCurrentTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying((prev) => !prev);
  const toggleMute = () => setIsMuted((prev) => !prev);
  const toggleLike = () => setIsLiked((prev) => !prev);

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      containerRef.current.requestFullscreen().catch(() => {});
    }
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    setProgress(newProgress);
    setCurrentTime(Math.round((newProgress / 100) * 230));
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-[940px] px-4 sm:px-6 space-y-12 sm:space-y-16">
        {/* Section 1: Top Two-Column Overview matching screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Cosmic LER Artwork */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[1/1] overflow-hidden rounded-xl shadow-md border border-neutral-200/70 bg-neutral-900">
              <Image
                src={data.overview.imageSrc}
                alt={data.overview.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Right Column: Title and Intro Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-7 space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-[#17193b] leading-tight tracking-tight">
              {data.overview.title}
            </h1>
            <div className="space-y-4 text-[15px] sm:text-[16px] text-[#3e3b47] leading-[1.85]">
              {data.overview.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 2: Centered Video Player Presentation with daniel.avif */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[820px] bg-white flex flex-col items-center justify-center select-none group"
        >
          {/* Video Container Frame */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[1.3/1] max-w-[620px] flex items-end justify-center">
            {/* Top-Right Favorite / Heart Button matching screenshot */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
              <button
                type="button"
                onClick={toggleLike}
                aria-label={isLiked ? "Unlike video" : "Like video"}
                className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-black/60 hover:bg-black/80 text-white transition-all transform active:scale-90"
              >
                <Heart
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${
                    isLiked ? "fill-[#d2537c] text-[#d2537c]" : "text-white"
                  }`}
                />
              </button>
            </div>

            {/* Reverend Daniel Metraux video frame (`daniel.avif`) */}
            <div
              onClick={togglePlay}
              className="relative w-full h-full flex items-end justify-center cursor-pointer"
            >
              <Image
                src={data.video.imageSrc}
                alt={data.video.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 620px"
                className="object-contain object-bottom pointer-events-none select-none transition-transform duration-300 group-hover:scale-[1.01]"
              />

              {/* Play / Pause Center Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/45 text-white shadow-lg backdrop-blur-xs transition-opacity duration-300 ${
                    isPlaying ? "opacity-0 group-hover:opacity-60" : "opacity-85"
                  }`}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 sm:w-7 sm:h-7" />
                  ) : (
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 ml-0.5" />
                  )}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom Video Control Bar matching screenshot */}
          <div className="w-full max-w-[620px] h-9 sm:h-10 bg-black/95 rounded-sm px-3 sm:px-4 flex items-center gap-2 sm:gap-3 text-white shadow-md mt-1">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="p-1 text-white hover:text-[#d2537c] transition-colors focus:outline-none"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              )}
            </button>

            <span className="text-[10px] sm:text-xs font-mono font-medium text-neutral-300 select-none">
              {formatTime(currentTime)}
            </span>

            {/* Scrubber Progress Bar */}
            <div
              onClick={handleScrub}
              className="flex-1 relative h-1 sm:h-1.5 bg-neutral-700 hover:h-2 rounded-full cursor-pointer transition-all flex items-center group/scrubber"
            >
              <div
                className="h-full bg-gradient-to-r from-[#d2537c] to-[#9d368d] rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white shadow-md transform translate-x-1/2 opacity-90 group-hover/scrubber:opacity-100 group-hover/scrubber:scale-110 transition-all" />
              </div>
            </div>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute" : "Mute"}
              className="p-1 text-neutral-300 hover:text-white transition-colors focus:outline-none"
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              )}
            </button>

            <button
              type="button"
              aria-label="Video Settings"
              className="p-1 text-neutral-300 hover:text-white transition-colors focus:outline-none"
            >
              <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              type="button"
              onClick={handleFullscreen}
              aria-label="Toggle Fullscreen"
              className="p-1 text-neutral-300 hover:text-white transition-colors focus:outline-none"
            >
              <Maximize className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </motion.div>

        {/* Section 3: Two-Column Criteria List & Energy Body Illustration */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start pt-4">
          {/* Left Column: Criteria Bullet Points */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-7 space-y-3.5"
          >
            <h2 className="text-[16px] sm:text-[17.5px] font-bold text-[#d2537c] leading-snug">
              {data.criteria.heading}
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#3e3b47] leading-relaxed">
              {data.criteria.intro}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[13.5px] sm:text-[14.5px] text-[#3e3b47] leading-[1.8]">
              {data.criteria.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Energy Body / Aura Illustration (`10002.jpg`) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[380px] aspect-[3/4] overflow-hidden rounded-xl shadow-md border border-neutral-200/80 bg-neutral-900">
              <Image
                src={data.criteria.imageSrc}
                alt={data.criteria.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

        {/* Section 4: What People Are Saying / Client Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4 pt-4"
        >
          <h2 className="text-[16px] sm:text-[17.5px] font-bold text-[#d2537c] leading-snug">
            {data.clientReviews.heading}
          </h2>

          <div className="space-y-4 text-[14.5px] sm:text-[15.5px] text-[#3e3b47] leading-[1.85]">
            {data.clientReviews.quotes.map((quote, idx) => (
              <p key={idx}>{quote}</p>
            ))}
          </div>

          <p className="text-[14.5px] sm:text-[15.5px] font-semibold text-[#17193b] pt-2">
            {data.clientReviews.freeBonusText}
          </p>

          {/* Bottom Divider Line matching screenshot */}
          <div className="border-b border-[#e2e2e2] pt-4" />

          {/* CTA Button matching footer Contact Us style */}
          <div className="pt-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="inline-block"
            >
              <Link
                href={data.clientReviews.ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f04c94] via-[#e24587] to-[#d23875] px-8 py-3 text-sm sm:text-[15px] font-bold text-[#ffe24a] shadow-[0_6px_20px_rgba(230,76,148,0.38)] transition-all hover:brightness-105 hover:shadow-[0_8px_26px_rgba(230,76,148,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f04c94]"
              >
                {data.clientReviews.ctaText}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

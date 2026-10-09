"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Settings, Maximize, Heart } from "lucide-react";
import type { IntroVideoData } from "@/types/intro-video";

interface IntroVideoSectionProps {
  data: IntroVideoData;
}

export function IntroVideoSection({ data }: IntroVideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [progress, setProgress] = useState(38); // Mock progress in percentage matching screenshot
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

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
  };

  return (
    <section className="relative w-full bg-[#fcfbfa] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header Text matching screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center mb-8 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-semibold text-[#9d368d] leading-snug sm:leading-tight tracking-tight">
            {data.titleLine1}
          </h2>
          <p className="mt-1 sm:mt-2 text-lg sm:text-xl md:text-2xl lg:text-[28px] font-semibold text-[#9d368d] leading-snug sm:leading-tight tracking-tight">
            {data.titleLine2}
          </p>
        </motion.div>

        {/* Video Player Presentation Frame */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-[0_12px_40px_rgba(84,20,81,0.08)] border border-[#541451]/10 aspect-[16/9] min-h-[280px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[520px] flex items-end justify-center select-none group"
        >

          {/* Top-Right Favorite / Heart Button */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
            <button
              type="button"
              onClick={toggleLike}
              aria-label={isLiked ? "Unlike video" : "Like video"}
              className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-black/60 hover:bg-black/80 text-white transition-all transform active:scale-90"
            >
              <Heart
                className={`w-4 h-4 transition-colors ${
                  isLiked ? "fill-[#d2537c] text-[#d2537c]" : "text-white"
                }`}
              />
            </button>
          </div>

          {/* Central Reverend Daniel Metraux Image (`daniel.avif`) */}
          <div className="relative w-full h-[85%] sm:h-[88%] md:h-[90%] flex items-end justify-center">
            <Image
              src={data.imageSrc}
              alt={data.imageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 960px"
              className="object-contain object-bottom pointer-events-none select-none transition-transform duration-500"
            />
          </div>

          {/* Subtle Center Play Button (toggles on click/pause) */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause Video" : "Play Video"}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 hover:bg-black/5 transition-colors focus:outline-none"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-black/50 text-white shadow-xl backdrop-blur-xs transition-opacity duration-300 ${
                isPlaying ? "opacity-0 group-hover:opacity-60" : "opacity-90"
              }`}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 sm:w-8 sm:h-8" />
              ) : (
                <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" />
              )}
            </motion.div>
          </button>

          {/* Video Player Bottom Control Bar */}
          <div className="absolute bottom-0 inset-x-0 z-20 h-9 sm:h-11 bg-black/95 px-3 sm:px-4 flex items-center gap-2 sm:gap-3 text-white border-t border-white/5">
            {/* Play/Pause Toggle */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="p-1 hover:text-[#d2537c] transition-colors focus:outline-none"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              )}
            </button>

            {/* Time Stamp */}
            <span className="text-[10px] sm:text-xs font-mono font-medium text-neutral-300 select-none">
              {data.duration || "01:22"}
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
                {/* Scrubber Thumb */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white shadow-md transform translate-x-1/2 opacity-90 group-hover/scrubber:opacity-100 group-hover/scrubber:scale-110 transition-all" />
              </div>
            </div>

            {/* Volume Button */}
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

            {/* Settings Button */}
            <button
              type="button"
              aria-label="Video Settings"
              className="p-1 text-neutral-300 hover:text-white transition-colors focus:outline-none"
            >
              <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Fullscreen Button */}
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
      </div>
    </section>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Settings, Maximize, Heart } from "lucide-react";

interface ServiceVideoPlayerProps {
  imageSrc: string;
  imageAlt?: string;
  duration?: string;
  initialSeconds?: number;
  initialProgress?: number;
}

export function ServiceVideoPlayer({
  imageSrc,
  imageAlt = "Reverend Daniel Metraux - Video Presentation",
  duration = "01:22",
  initialSeconds = 75,
  initialProgress = 35,
}: ServiceVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(initialSeconds);
  const [progress, setProgress] = useState(initialProgress);
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
    setCurrentTime(Math.round((newProgress / 100) * 200));
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
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

        {/* Video Frame (`daniel.avif`) */}
        <div
          onClick={togglePlay}
          className="relative w-full h-full flex items-end justify-center cursor-pointer"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
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

      {/* Bottom Video Control Bar */}
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
  );
}

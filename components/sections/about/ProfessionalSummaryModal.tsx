"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { professionalSummaryData } from "@/data/professional-summary";

interface ProfessionalSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProfessionalSummaryModal({
  isOpen,
  onClose,
}: ProfessionalSummaryModalProps) {
  // Handle ESC key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="summary-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container matching image.png */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            data-lenis-prevent
            className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-[#f3b5da] bg-[#ffd4f1]"
          >
            {/* Top Close Button (circular plum button matching image.png) */}
            <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close summary modal"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#541451] hover:bg-[#3f0d3c] active:scale-95 text-white flex items-center justify-center shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#541451]"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div
              data-lenis-prevent
              className="w-full overflow-y-auto px-6 py-8 sm:px-10 sm:py-12 md:px-14 md:py-14 text-[#231f2a]"
            >
              {/* Centered Heading */}
              <h2
                id="summary-modal-title"
                className="text-2xl sm:text-3xl md:text-[34px] font-bold text-center text-[#111116] tracking-tight mb-8 sm:mb-10 pr-8 pl-2"
              >
                {professionalSummaryData.title}
              </h2>

              {/* Items List */}
              <div className="space-y-4 sm:space-y-4.5 text-[14px] sm:text-[15.5px] leading-relaxed text-[#2d2836]">
                {professionalSummaryData.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                    <span className="font-bold text-[#111116] shrink-0">
                      {item.date}
                    </span>
                    <span className="font-normal text-[#2e2a38]">
                      {item.description}{" "}
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#841961] underline hover:text-[#541451] transition-colors break-all"
                        >
                          {item.urlText || item.url}
                        </a>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { footerData } from "@/data/footer";

export function Footer() {
  const data = footerData;

  return (
    <footer className="w-full select-none">
      {/* Upper Main Footer: Midnight Blue */}
      <div className="w-full bg-[#0f101a] text-white py-14 sm:py-16 md:py-20 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          {/* Main Title matching screenshot */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
            {data.aboutTitle}
          </h3>

          {/* 3-Column Content Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Column 1: Descriptive Bio */}
            <div className="lg:col-span-5">
              <p className="text-[13px] sm:text-sm text-[#dedce4] leading-relaxed max-w-md font-normal">
                {data.aboutText}
              </p>
            </div>

            {/* Column 2: Working Hours & Location */}
            <div className="lg:col-span-4">
              <div className="text-[13px] sm:text-sm text-[#dedce4] leading-relaxed space-y-1 font-normal">
                <p>{data.scheduleText}</p>
                <p>{data.locationText}</p>
              </div>
            </div>

            {/* Column 3: Contact Email & Contact Us Button */}
            <div className="lg:col-span-3 flex flex-col items-start gap-4">
              {/* Email with Envelope Icon */}
              <a
                href={`mailto:${data.email}`}
                className="inline-flex items-center gap-2.5 text-[13px] sm:text-sm font-medium text-white hover:text-[#ffe24a] transition-colors group"
                aria-label={`Email ${data.email}`}
              >
                <Mail className="w-4 h-4 text-white group-hover:text-[#ffe24a] transition-colors shrink-0" />
                <span>{data.email}</span>
              </a>

              {/* Unified Contact Us Pill Button */}
              <div className="mt-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-block"
                >
                  <Link
                    href={data.contactButtonHref}
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f04c94] via-[#e24587] to-[#d23875] px-7 py-2.5 text-sm sm:text-[15px] font-bold text-[#ffe24a] shadow-[0_6px_20px_rgba(230,76,148,0.38)] transition-all hover:brightness-105 hover:shadow-[0_8px_26px_rgba(230,76,148,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f04c94]"
                    aria-label={data.contactButtonText}
                  >
                    {data.contactButtonText}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Sub-Footer: Pure Black with Navigation & Copyright */}
      <div className="w-full bg-black text-white py-6 sm:py-8 border-t border-neutral-900">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 text-center">
          {/* Navigation Links Row */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-[11px] sm:text-xs font-bold tracking-wider uppercase text-neutral-200"
          >
            {data.subFooterLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-[#ffe24a]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright Notice */}
          <p className="mt-4 text-[11px] sm:text-xs text-[#a19fa9] font-normal tracking-wide">
            {data.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
}

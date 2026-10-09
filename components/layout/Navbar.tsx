"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { CartButton } from "@/components/ui/CartButton";
import { SocialButton } from "@/components/ui/SocialButton";
import { navigationItems as defaultItems } from "@/data/navigation";
import { socialLinks as defaultSocials } from "@/data/socials";
import type { NavItem, SocialLink } from "@/types/navigation";

interface NavbarProps {
  items?: NavItem[];
  cartCount?: number;
  socials?: SocialLink[];
}

export function Navbar({
  items = defaultItems,
  cartCount = 2,
  socials = defaultSocials,
}: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [expandedMobileIds, setExpandedMobileIds] = useState<string[]>([]);

  const navRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect scroll to apply subtle shadow & blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click anywhere outside or anywhere in the browser
  useEffect(() => {
    const handleBrowserClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdownId(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdownId(null);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleBrowserClick);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousedown", handleBrowserClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  const prevPathnameRef = useRef(pathname);
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setOpenDropdownId(null);
      setMobileMenuOpen(false);
    }
  }, [pathname]);

  const handleMouseEnter = (itemId: string, hasChildren?: boolean) => {
    if (!hasChildren) {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      setOpenDropdownId(null);
      return;
    }
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdownId(itemId);
  };

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdownId(null);
    }, 200);
  };

  const toggleMobileAccordion = (id: string) => {
    setExpandedMobileIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-sm shadow-[#231f2a]/5 backdrop-blur-md"
          : "bg-[#fcfbfa]/95 backdrop-blur-xs"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:h-[88px] xl:px-12">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group relative flex items-center transition-transform duration-200 hover:opacity-95"
          aria-label="Daniel The Healer Home"
          onClick={() => setOpenDropdownId(null)}
        >
          <div className="relative h-[42px] w-[200px] sm:h-[46px] sm:w-[220px] xl:h-[50px] xl:w-[240px]">
            <Image
              src="/home/logo.png"
              alt="Daniel The Healer - Intuitive Holistic Energy Healer"
              fill
              priority
              sizes="(max-width: 640px) 200px, (max-width: 1280px) 220px, 240px"
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links & Action Cluster */}
        <nav
          className="hidden items-center gap-5 xl:flex 2xl:gap-6"
          aria-label="Main Navigation"
        >
          {items.map((item) => {
            const isActive = item.isActive || pathname === item.href;
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isDropdownOpen = openDropdownId === item.id;

            // Pill Pink Variant ("HOME")
            if (item.variant === "pill-pink") {
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onMouseEnter={() => handleMouseEnter(item.id, false)}
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center rounded-full bg-[var(--brand-pink)] px-5 py-[7px] text-[13px] font-bold tracking-[0.05em] text-white shadow-xs transition-colors duration-200 hover:bg-[var(--brand-pink-hover)]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            }

            // Pill Purple Variant ("CONTACT")
            if (item.variant === "pill-purple" || item.isCta) {
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onMouseEnter={() => handleMouseEnter(item.id, false)}
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center rounded-full bg-[var(--brand-purple)] px-6 py-[7px] text-[13px] font-bold tracking-[0.05em] text-white shadow-xs transition-colors duration-200 hover:bg-[var(--brand-purple-hover)]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            }

            // Standard Nav Item (with or without dropdown)
            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.id, hasChildren)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 text-[13px] font-bold tracking-[0.05em] transition-colors duration-200 hover:text-[var(--brand-pink)] ${
                    isActive || isDropdownOpen
                      ? "text-[var(--brand-pink)]"
                      : "text-[var(--brand-text-dark)]"
                  }`}
                >
                  <span>{item.label}</span>
                  {hasChildren && (
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180 text-[var(--brand-pink)]" : "text-[var(--brand-text-muted)]"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Desktop Dropdown Menu - Styled with #D2537C background and white text */}
                <AnimatePresence>
                  {hasChildren && isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className={`absolute top-full z-50 pt-3 ${
                        item.id === "services"
                          ? "-left-16 w-[520px]"
                          : "left-0 min-w-[250px]"
                      }`}
                    >
                      <div className="overflow-hidden rounded-2xl border border-white/25 bg-[var(--brand-pink)] p-3 shadow-2xl shadow-[var(--brand-purple)]/25">
                        {item.id === "services" ? (
                          /* 2-column grid for Services without redundant header */
                          <div className="grid grid-cols-2 gap-1.5">
                            {item.children?.map((child) => (
                              <Link
                                key={child.id}
                                href={child.href}
                                onClick={() => setOpenDropdownId(null)}
                                className="group flex items-center justify-between rounded-xl px-3 py-2 text-[13px] font-semibold text-white transition-all duration-150 hover:bg-white/20 hover:text-white"
                              >
                                <span className="line-clamp-1 group-hover:translate-x-0.5 transition-transform duration-150">
                                  {child.label}
                                </span>
                                <svg
                                  className="h-3 w-3 opacity-0 text-white transition-opacity duration-150 group-hover:opacity-100"
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
                              </Link>
                            ))}
                          </div>
                        ) : (
                          /* Single-column list for About & Shop */
                          <div className="flex flex-col gap-1">
                            {item.children?.map((child) => (
                              <Link
                                key={child.id}
                                href={child.href}
                                onClick={() => setOpenDropdownId(null)}
                                className="group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-[13px] font-semibold text-white transition-all duration-150 hover:bg-white/20 hover:text-white"
                              >
                                <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                                  {child.label}
                                </span>
                                <svg
                                  className="h-3 w-3 opacity-0 text-white transition-opacity duration-150 group-hover:opacity-100"
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
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Cart Icon & Counter Badge */}
          <div className="ml-1 flex items-center">
            <CartButton itemCount={cartCount} />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <SocialButton
                key={social.id}
                platform={social.platform}
                href={social.url}
                ariaLabel={social.ariaLabel}
              />
            ))}
          </div>
        </nav>

        {/* Mobile / Tablet Controls */}
        <div className="flex items-center gap-3 xl:hidden">
          {/* Cart accessible directly on mobile */}
          <CartButton itemCount={cartCount} />

          {/* Hamburger Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-[var(--brand-purple)] transition-colors hover:bg-[var(--brand-purple)]/5 focus:outline-hidden focus:ring-2 focus:ring-[var(--brand-purple)]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="flex h-5 w-6 flex-col justify-between">
              <span
                className={`h-[2.5px] w-full rounded-full bg-[var(--brand-purple)] transition-all duration-300 origin-left ${
                  mobileMenuOpen ? "rotate-45 translate-x-0.5" : ""
                }`}
              />
              <span
                className={`h-[2.5px] w-full rounded-full bg-[var(--brand-purple)] transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-[2.5px] w-full rounded-full bg-[var(--brand-purple)] transition-all duration-300 origin-left ${
                  mobileMenuOpen ? "-rotate-45 translate-x-0.5" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Submenu Accordions */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[76px] z-40 bg-[#231f2a]/30 backdrop-blur-xs xl:hidden"
            />

            {/* Slide Down/Fade Menu Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-x-0 top-[76px] z-50 max-h-[calc(100dvh-76px)] overflow-y-auto border-b border-[#231f2a]/10 bg-white/98 px-5 py-6 shadow-xl xl:hidden"
            >
              <div className="mx-auto flex max-w-md flex-col gap-3">
                {items.map((item) => {
                  const isActive = item.isActive || pathname === item.href;
                  const hasChildren = Boolean(item.children && item.children.length > 0);
                  const isExpanded = expandedMobileIds.includes(item.id);

                  if (item.variant === "pill-pink") {
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-pink)] py-3 text-sm font-bold tracking-[0.05em] text-white shadow-sm transition-colors hover:bg-[var(--brand-pink-hover)]"
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  if (item.variant === "pill-purple" || item.isCta) {
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-purple)] py-3 text-sm font-bold tracking-[0.05em] text-white shadow-sm transition-colors hover:bg-[var(--brand-purple-hover)]"
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <div key={item.id} className="border-b border-[#231f2a]/5 pb-2">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`py-2 text-sm font-bold tracking-[0.06em] transition-colors hover:text-[var(--brand-pink)] ${
                            isActive
                              ? "text-[var(--brand-pink)]"
                              : "text-[var(--brand-text-dark)]"
                          }`}
                        >
                          {item.label}
                        </Link>
                        {hasChildren && (
                          <button
                            type="button"
                            onClick={() => toggleMobileAccordion(item.id)}
                            className="p-2 text-[var(--brand-purple)] transition-transform"
                            aria-label={`Toggle ${item.label} submenu`}
                          >
                            <svg
                              className={`h-4 w-4 transition-transform duration-200 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                        )}
                      </div>

                      {/* Mobile Accordion Children */}
                      <AnimatePresence>
                        {hasChildren && isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-1 space-y-1 pl-3 overflow-hidden border-l-2 border-[var(--brand-pink)]/40"
                          >
                            {item.children?.map((child) => (
                              <Link
                                key={child.id}
                                href={child.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block rounded-lg py-2 px-3 text-xs font-semibold text-white bg-[var(--brand-pink)] hover:bg-[var(--brand-pink-hover)] transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Social Links Row in Mobile Drawer */}
                <div className="mt-3 flex items-center justify-center gap-4 border-t border-[#231f2a]/10 pt-5">
                  {socials.map((social) => (
                    <SocialButton
                      key={social.id}
                      platform={social.platform}
                      href={social.url}
                      ariaLabel={social.ariaLabel}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

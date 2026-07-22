"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    if (sections.length) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          let best: IntersectionObserverEntry | null = null;
          for (const entry of entries) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) {
              best = entry;
            }
          }
          if (best) {
            const el = best.target as HTMLElement;
            const isDark =
              el.id === "hero" || el.classList.contains("section-dark");
            setOnDark(isDark);
          }
        },
        { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5] },
      );
      sections.forEach((el) => observerRef.current!.observe(el));
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  const textLight = onDark ? "text-text-dark" : "text-text-light";
  const textMuted = onDark ? "text-text-dark-muted" : "text-text-muted";
  const hoverLight = onDark
    ? "hover:text-text-dark"
    : "hover:text-text-light";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? onDark
            ? "bg-dark-base/80 backdrop-blur-xl border-b border-border-dark"
            : "bg-light-base/80 backdrop-blur-xl border-b border-border-light"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14 md:h-16">
          <a
            href="#hero"
            className={`text-base font-semibold tracking-tight transition-colors duration-300 ${textLight}`}
          >
            {siteData.name}
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {siteData.navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium transition-colors duration-200 tracking-wide relative ${textMuted} ${hoverLight}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.a>
            ))}
          </nav>

          <button
            className={`md:hidden flex items-center gap-2 text-sm font-medium transition-colors ${textMuted} ${hoverLight}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="text-[13px] tracking-wide">
              {mobileOpen ? "Close" : "Menu"}
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden border-t ${
              onDark
                ? "bg-dark-base/95 border-border-dark"
                : "bg-light-base/95 border-border-light"
            } backdrop-blur-xl`}
          >
            <div className="px-6 py-6 space-y-1">
              {siteData.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 text-base font-medium transition-colors ${textMuted} ${hoverLight}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

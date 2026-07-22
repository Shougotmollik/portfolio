"use client";

import { useEffect, useState } from "react";
import { siteData } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import Magnetic from "@/components/ui/Magnetic";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 h-16 flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-[#fdfaf2]/95 backdrop-blur-sm border-b-[2.5px] border-[#111111]"
          : "bg-[#fdfaf2] border-b-[2.5px] border-[#111111]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-lg font-extrabold tracking-tight text-[#111111] flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-[#fcd567] border-[2px] border-[#111111] flex items-center justify-center font-black text-sm neo-shadow-sm">S</span>
            {siteData.name}
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {siteData.navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-bold transition-colors duration-200 rounded-lg ${
                    isActive
                      ? "text-[#111111] bg-[#fcd567]/40"
                      : "text-[#111111]/70 hover:text-[#111111] hover:bg-[#111111]/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Magnetic strength={0.15}>
              <a
                href="#contact"
                className="neo-btn neo-btn-primary text-xs py-2 px-4 shadow-[3px_3px_0px_#111111] hover:shadow-[4px_4px_0px_#111111]"
              >
                Let's Talk
              </a>
            </Magnetic>
          </div>

          <button
            className="md:hidden flex items-center justify-center w-10 h-10 border-[2px] border-[#111111] rounded-lg bg-[#ffffff] neo-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="text-xs font-black">
              {mobileOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-[#fdfaf2]/98 backdrop-blur-sm border-t-[2.5px] border-[#111111] z-30 px-6 py-8 flex flex-col gap-6">
          {siteData.navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-black border-b-[2px] pb-2 transition-colors ${
                  isActive ? "text-[#fa8f76] border-[#fa8f76]/30" : "text-[#111111] border-[#111111]/10"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="neo-btn neo-btn-primary w-full text-center mt-4"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}

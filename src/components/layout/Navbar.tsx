"use client";

import { useState } from "react";
import { siteData } from "@/data/site";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#fdfaf2] border-b-[2.5px] border-[#111111] h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-lg font-extrabold tracking-tight text-[#111111] flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-[#fcd567] border-[2px] border-[#111111] flex items-center justify-center font-black text-sm neo-shadow-sm">S</span>
            {siteData.name}
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {siteData.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-[#111111] hover:text-[#fa8f76] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="neo-btn neo-btn-primary text-xs py-2 px-4 shadow-[3px_3px_0px_#111111] hover:shadow-[4px_4px_0px_#111111]"
            >
              Let's Talk
            </a>
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
        <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-[#fdfaf2] border-t-[2.5px] border-[#111111] z-30 px-6 py-8 flex flex-col gap-6">
          {siteData.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-black text-[#111111] border-b-[2px] border-[#111111]/10 pb-2"
            >
              {link.label}
            </a>
          ))}
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

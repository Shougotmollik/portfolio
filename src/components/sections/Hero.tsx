"use client";

import { motion } from "framer-motion";
import { heroData } from "@/data/hero";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between bg-[#fbebc9] border-b-[2.5px] border-[#111111] overflow-hidden"
    >
      {/* Background grids */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none" style={{
        backgroundImage: `radial-gradient(#111111 2px, transparent 2px), linear-gradient(#111111 1px, transparent 1px), linear-gradient(90deg, #111111 1px, transparent 1px)`,
        backgroundSize: `40px 40px, 40px 40px, 40px 40px`
      }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-7 flex flex-col items-start relative">
          {/* Waves decorator */}
          <div className="absolute -left-12 top-4 hidden md:flex flex-col gap-1.5 opacity-60">
            <span className="text-[#fa8f76] font-bold text-xl leading-none">〰〰</span>
            <span className="text-[#fa8f76] font-bold text-xl leading-none">〰〰</span>
            <span className="text-[#fa8f76] font-bold text-xl leading-none">〰〰</span>
          </div>

          <div className="inline-block px-3 py-1 bg-[#ffffff] border-[2.5px] border-[#111111] rounded-md font-bold text-xs uppercase tracking-wider neo-shadow-sm mb-6">
            ✨ {heroData.roleLabel}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl font-black leading-[1.05] text-[#111111] mb-8 tracking-tight max-w-2xl">
            Launch Your Mobile App <span className="highlight-yellow inline-block px-1">Career Journey</span> Using <span className="text-[#fa8f76]">Flutter</span> Today!
          </h1>

          <p className="text-base sm:text-lg font-bold text-[#111111]/80 max-w-xl mb-8 leading-relaxed">
            {heroData.subtitle} Over 4 years of engineering high-quality cross-platform applications and beautiful mobile design systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="neo-btn neo-btn-white text-sm font-black px-8 py-3.5"
            >
              View Projects
            </a>
            <a
              href={heroData.ctaPrimary.href}
              download
              className="neo-btn neo-btn-primary text-sm font-black px-8 py-3.5"
            >
              Get Resume
            </a>
          </div>
        </div>

        {/* Right Side Card Illustration */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[420px]">
            {/* Book icon decorator */}
            <div className="absolute -top-8 -left-8 z-30 bg-[#9ae2ad] border-[2.5px] border-[#111111] rounded-lg p-2.5 rotate-[-12deg] neo-shadow-sm w-14 h-14 flex items-center justify-center font-bold text-xl">
              📖
            </div>

            {/* Sticker Badge - Students */}
            <div className="absolute top-4 -right-6 z-25 bg-[#9ee6ee] border-[2.5px] border-[#111111] rounded-lg px-3 py-1.5 rotate-[8deg] neo-shadow-sm flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111] animate-ping" />
              <span className="text-xs font-black">4+ Years Exp</span>
            </div>

            {/* Purple Illustration Card Frame */}
            <div className="w-full bg-[#c5a9f6] border-[2.5px] border-[#111111] rounded-2xl p-6 neo-shadow-lg relative overflow-hidden flex flex-col gap-6">
              {/* Photo placeholder or card border */}
              <div className="w-full aspect-[4/3] bg-[#ffffff] border-[2.5px] border-[#111111] rounded-xl overflow-hidden relative group">
                <img
                    src="/HeroImage.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-[#fcd567]/10 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Lower Info Banner */}
              <div className="bg-[#fcd567] border-[2.5px] border-[#111111] rounded-xl p-4 neo-shadow-sm flex flex-col gap-1">
                <span className="text-xs font-black text-[#111111] tracking-wide uppercase">Shougot Mollik</span>
                <span className="text-xs font-bold text-[#111111]/80">Went from CS graduate to Senior Flutter Engineer delivering clean code architectures.</span>
              </div>
            </div>

            {/* X cross decor */}
            <div className="absolute -bottom-6 -left-4 text-3xl font-black text-[#111111] select-none rotate-12">
              ✛
            </div>
          </div>
        </div>
      </div>

      {/* Arched Columns/Pillars at bottom */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Pillar 1 (Pink) */}
        <div className="neo-arch bg-[#f2afd1] p-6 flex flex-col items-center justify-between text-center min-h-[220px]">
          <div className="w-12 h-12 rounded-full border-[2.5px] border-[#111111] bg-[#ffffff] flex items-center justify-center font-bold text-xl neo-shadow-sm">
            📱
          </div>
          <p className="text-sm font-black text-[#111111] leading-tight">
            Part-time and full-time contract options
          </p>
          <span className="text-xs font-bold text-[#111111]/60">〰〰〰</span>
        </div>

        {/* Pillar 2 (Yellow) */}
        <div className="neo-arch bg-[#fcd567] p-6 flex flex-col items-center justify-between text-center min-h-[220px]">
          <div className="w-12 h-12 rounded-full border-[2.5px] border-[#111111] bg-[#ffffff] flex items-center justify-center font-bold text-xl neo-shadow-sm">
            🔍
          </div>
          <p className="text-sm font-black text-[#111111] leading-tight">
            100% production ready Clean Code & BLoC
          </p>
          <span className="text-xs font-bold text-[#111111]/60">〰〰〰</span>
        </div>

        {/* Pillar 3 (Blue) */}
        <div className="neo-arch bg-[#9ee6ee] p-6 flex flex-col items-center justify-between text-center min-h-[220px]">
          <div className="w-12 h-12 rounded-full border-[2.5px] border-[#111111] bg-[#ffffff] flex items-center justify-center font-bold text-xl neo-shadow-sm">
            ⚙️
          </div>
          <p className="text-sm font-black text-[#111111] leading-tight">
            Highly optimized multiplatform rendering
          </p>
          <span className="text-xs font-bold text-[#111111]/60">〰〰〰</span>
        </div>

        {/* Pillar 4 (Red) */}
        <div className="neo-arch bg-[#fa8f76] p-6 flex flex-col items-center justify-between text-center min-h-[220px]">
          <div className="w-12 h-12 rounded-full border-[2.5px] border-[#111111] bg-[#ffffff] flex items-center justify-center font-bold text-xl neo-shadow-sm">
            🛡️
          </div>
          <p className="text-sm font-black text-[#111111] leading-tight">
            Robust unit test coverage guaranteed
          </p>
          <span className="text-xs font-bold text-[#111111]/60">〰〰〰</span>
        </div>
      </div>
    </section>
  );
}

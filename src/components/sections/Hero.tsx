"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroData } from "@/data/hero";
import FloatingParticles from "@/components/ui/FloatingParticles";
import Magnetic from "@/components/ui/Magnetic";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between bg-[#fbebc9] border-b-[2.5px] border-[#111111] overflow-hidden"
    >
      <FloatingParticles count={25} />

      <div className="absolute inset-0 z-[2] noise-overlay" />

      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none" style={{
        backgroundImage: `radial-gradient(#111111 2px, transparent 2px), linear-gradient(#111111 1px, transparent 1px), linear-gradient(90deg, #111111 1px, transparent 1px)`,
        backgroundSize: `40px 40px, 40px 40px, 40px 40px`
      }} />

      <motion.div
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="lg:col-span-7 flex flex-col items-start relative">
          <motion.div variants={itemVariants} className="absolute -left-12 top-4 hidden md:flex flex-col gap-1.5 opacity-60">
            <span className="text-[#fa8f76] font-bold text-xl leading-none">〰〰</span>
            <span className="text-[#fa8f76] font-bold text-xl leading-none">〰〰</span>
            <span className="text-[#fa8f76] font-bold text-xl leading-none">〰〰</span>
          </motion.div>

          <motion.div variants={itemVariants} className="inline-block px-3 py-1 bg-[#ffffff] border-[2.5px] border-[#111111] rounded-md font-bold text-xs uppercase tracking-wider neo-shadow-sm mb-6">
            ✨ {heroData.roleLabel}
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl font-black leading-[1.05] text-[#111111] mb-8 tracking-tight max-w-2xl">
            {heroData.heading.first} <span className="highlight-yellow inline-block px-1">{heroData.heading.accent}</span> — <span className="highlight-pink inline-block px-1">App</span> <span className="highlight-orange inline-block px-1">Developer</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base sm:text-lg font-bold text-[#111111]/80 max-w-xl mb-8 leading-relaxed">
            {heroData.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Magnetic strength={0.15}>
              <a
                href="#projects"
                className="neo-btn neo-btn-white text-sm font-black px-8 py-3.5"
              >
                View Projects
              </a>
            </Magnetic>
            <Magnetic strength={0.15}>
              <a
                href={heroData.ctaPrimary.href}
                download
                className="neo-btn neo-btn-primary text-sm font-black px-8 py-3.5"
              >
                Get Resume
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-5 flex justify-center"
          variants={itemVariants}
        >
          <div className="relative w-full max-w-[480px]">
            <motion.div
              className="absolute -top-8 -left-8 z-30 bg-[#9ae2ad] border-[2.5px] border-[#111111] rounded-lg p-2.5 rotate-[-12deg] neo-shadow-sm w-14 h-14 flex items-center justify-center font-bold text-xl"
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: -12 }}
              transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
            >
              📖
            </motion.div>

            <motion.div
              className="absolute top-4 -right-6 z-25 bg-[#9ee6ee] border-[2.5px] border-[#111111] rounded-lg px-3 py-1.5 rotate-[8deg] neo-shadow-sm flex items-center gap-1.5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, rotate: 8 }}
              transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111] animate-ping" />
              <span className="text-xs font-black">Open to Work</span>
            </motion.div>

            <div className="w-full bg-[#fa8f76] border-[2.5px] border-[#111111] rounded-2xl p-6 neo-shadow-lg relative overflow-hidden flex flex-col gap-6 rotate-[-2deg] hover:rotate-0 hover:-translate-y-1.5 transition-all duration-300">
              <div className="w-full aspect-square bg-[#ffffff] border-[2.5px] border-[#111111] rounded-2xl overflow-hidden relative group">
                <Image
                  src="/HeroImageStylized.jpg"
                  alt="Shougot Mollik"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#fa8f76]/10 mix-blend-multiply pointer-events-none" />
              </div>

              <div className="bg-[#fcd567] border-[2.5px] border-[#111111] rounded-xl p-4 neo-shadow-sm flex flex-col gap-1">
                <span className="text-xs font-black text-[#111111] tracking-wide uppercase">Shougot Mollik</span>
                <span className="text-xs font-bold text-[#111111]/80">BSc in CSE · Jr. Flutter Developer at Join Venture AI · 10+ apps shipped</span>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-6 -left-4 text-3xl font-black text-[#111111] select-none rotate-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.3 }}
            >
              ✛
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full z-10 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
      >
        {[
          { bg: "bg-[#f2afd1]", icon: "📱", text: "10+ apps shipped — already live on stores" },
          { bg: "bg-[#fcd567]", icon: "🔄", text: "From design to backend to deployment" },
          { bg: "bg-[#9ee6ee]", icon: "💼", text: "Currently working at Join Venture AI" },
          { bg: "bg-[#fa8f76]", icon: "⏱️", text: "On-time delivery with clean, scalable code" },
        ].map((pillar, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
            }}
            className={`neo-arch ${pillar.bg} p-6 flex flex-col items-center justify-between text-center min-h-[220px]`}
          >
            <div className="w-12 h-12 rounded-full border-[2.5px] border-[#111111] bg-[#ffffff] flex items-center justify-center font-bold text-xl neo-shadow-sm">
              {pillar.icon}
            </div>
            <p className="text-sm font-black text-[#111111] leading-tight">
              {pillar.text}
            </p>
            <span className="text-xs font-bold text-[#111111]/60">〰〰〰</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

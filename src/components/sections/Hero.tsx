"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import FloatingParticles from "@/components/ui/FloatingParticles";
import Magnetic from "@/components/ui/Magnetic";
import { heroData } from "@/data/hero";

const VRMScene = dynamic(() => import("@/components/three/VRMScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-accent/20 animate-pulse" />
    </div>
  ),
});

function splitWords(text: string) {
  const words = text.split(" ");
  return words.map((word, i) => (
    <span key={i} className="inline-block overflow-hidden align-top">
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.04 }}
      >
        {word}
      </motion.span>
      {i < words.length - 1 ? "\u00A0" : ""}
    </span>
  ));
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const bgY = useTransform(smooth, [0, 1], [0, -280]);
  const characterY = useTransform(smooth, [0, 1], [0, -60]);
  const characterScale = useTransform(smooth, [0, 0.5, 1], [1, 1.05, 0.7]);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springMX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springMY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="section-light relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.06] bg-accent/30 blur-[80px]" />
        <div className="absolute bottom-1/3 -right-32 w-[400px] h-[400px] rounded-full opacity-[0.04] bg-accent/20 blur-[80px]" />
      </motion.div>

      <FloatingParticles count={35} />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[40vh] pointer-events-none"
        style={{
          background: `
            linear-gradient(
              180deg,
              transparent 0%,
              rgba(232, 131, 77, 0.025) 40%,
              rgba(217, 73, 31, 0.05) 100%
            )
          `,
          WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 40%)",
          maskImage: "linear-gradient(180deg, transparent 0%, black 40%)",
          transform: "perspective(400px) rotateX(60deg) scaleY(2.5)",
          transformOrigin: "bottom center",
        }}
      />

      <motion.div
        className="absolute -inset-20 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${springMX} ${springMY}, rgba(232,131,77,0.12) 0%, transparent 60%)`,
        }}
      />

      <div className="w-full lg:w-1/2 z-10 flex flex-col items-center lg:items-start text-center lg:text-left px-6 sm:px-8 lg:pl-12 lg:pr-6 pt-24 lg:pt-32 pb-0">
        <motion.div
          initial={{ opacity: 0.001, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0.001, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="text-xs font-semibold tracking-[0.1em] uppercase mb-5 text-accent"
          >
            {heroData.roleLabel}
          </motion.p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.02em] leading-[0.95] text-balance max-w-5xl text-text-light relative inline-block">
            <span className="inline-flex flex-wrap justify-center lg:justify-start gap-x-[0.3em]">
              <span className="inline-flex flex-wrap justify-center lg:justify-start">
                {splitWords(heroData.heading.first)}
              </span>
              <span className="inline-flex flex-wrap justify-center lg:justify-start bg-gradient-to-r from-[#D9491F] to-[#E8834D] bg-clip-text text-transparent">
                {splitWords(heroData.heading.accent)}
              </span>
            </span>
            <motion.span
              className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
              style={{ WebkitMaskImage: "linear-gradient(90deg, transparent, black, transparent)", maskImage: "linear-gradient(90deg, transparent, black, transparent)" }}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0.001, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-text-muted max-w-xl leading-relaxed"
          >
            {heroData.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0.001, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4"
          >
            <Magnetic>
              <motion.a
                href={heroData.ctaPrimary.href}
                download
                className="relative overflow-hidden inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent text-light-base text-sm font-semibold transition-shadow duration-300"
                whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(217,73,31,0.35)" }}
                whileTap={{ scale: 0.97 }}
              >
                {heroData.ctaPrimary.label}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "220%" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <motion.a
                href={heroData.ctaSecondary.href}
                className="relative overflow-hidden inline-flex items-center justify-center px-8 py-3 rounded-full border border-border-light text-text-light text-sm font-semibold transition-shadow duration-300"
                whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(217,73,31,0.35)" }}
                whileTap={{ scale: 0.97 }}
              >
                {heroData.ctaSecondary.label}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
                  initial={{ x: "-120%" }}
                  whileHover={{ x: "220%" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative z-10 flex items-center justify-center">
        <motion.div
          className="w-full h-full max-w-lg lg:max-w-none"
          style={{
            y: characterY,
            scale: characterScale,
            willChange: "transform",
          }}
        >
          <VRMScene />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
      >
        <span className="text-[10px] font-medium text-text-muted/60 tracking-[0.15em] uppercase">
          Scroll
        </span>
        <motion.svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-muted/40"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], repeat: Infinity }}
        >
          <path d="M8 4v12M8 16l-4-4M8 16l4-4" />
        </motion.svg>
      </motion.div>
    </section>
  );
}

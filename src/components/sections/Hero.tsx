"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import PhoneFrame from "@/components/ui/PhoneFrame";

const heroImages = [
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop",
];

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

  const bgY = useTransform(smooth, [0, 1], [0, -120]);
  const groupY = useTransform(smooth, [0, 1], [0, -50]);
  const groupScale = useTransform(smooth, [0, 0.5, 1], [1, 1.02, 0.88]);
  const headlineY = useTransform(smooth, [0, 1], [0, 30]);
  const headlineOpacity = useTransform(smooth, [0, 0.25], [1, 0]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="section-light relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.04] bg-accent/20" />
        <div className="absolute bottom-1/3 -right-32 w-[400px] h-[400px] rounded-full opacity-[0.03] bg-accent/20" />
      </motion.div>

      <motion.div
        className="flex flex-col items-center text-center px-6 sm:px-8 pt-20 pb-0 relative z-10"
        style={{ y: headlineY, opacity: headlineOpacity, willChange: "transform" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
          className="text-sm font-medium text-accent tracking-wider uppercase mb-5"
        >
          Flutter Mobile Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tight leading-[0.95] text-balance max-w-5xl text-text-light"
        >
          Shougot{" "}
          <span className="text-accent">Mollik</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
          className="mt-5 text-base sm:text-lg md:text-xl text-text-muted max-w-xl leading-relaxed"
        >
          Building high-performance cross-platform mobile experiences
          with Flutter &amp; Dart.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-text-light text-light-base text-sm font-semibold hover:opacity-85 transition-all duration-300"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-border-light text-text-light text-sm font-semibold hover:bg-text-light hover:text-light-base transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative flex items-center justify-center mt-10 md:mt-14 mb-8"
        style={{ y: groupY, scale: groupScale, willChange: "transform" }}
      >
        <div className="relative w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] h-[140px] sm:h-[170px] md:h-[200px] lg:h-[240px]">
          <motion.div
            className="absolute left-0 bottom-0 w-[88px] sm:w-[110px] md:w-[130px] lg:w-[150px] z-[1]"
            style={{ rotate: -8, transformOrigin: "bottom center" }}
          >
            <div className="opacity-70 scale-[0.65] sm:scale-[0.7] md:scale-[0.75]">
              <PhoneFrame imageUrl={heroImages[0]} color="#5B7FDE" />
            </div>
          </motion.div>

          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[105px] sm:w-[130px] md:w-[155px] lg:w-[180px] z-[3]"
            style={{ rotate: 0, transformOrigin: "bottom center" }}
          >
            <PhoneFrame imageUrl={heroImages[1]} color="#5B7FDE" />
          </motion.div>

          <motion.div
            className="absolute right-0 bottom-0 w-[88px] sm:w-[110px] md:w-[130px] lg:w-[150px] z-[1]"
            style={{ rotate: 8, transformOrigin: "bottom center" }}
          >
            <div className="opacity-70 scale-[0.65] sm:scale-[0.7] md:scale-[0.75]">
              <PhoneFrame imageUrl={heroImages[2]} color="#5B7FDE" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Magnetic from "@/components/ui/Magnetic";
import FloatingParticles from "@/components/ui/FloatingParticles";
import { heroData } from "@/data/hero";

const keySkills = [
  "Flutter",
  "Dart",
  "Firebase",
  "REST & GraphQL",
  "Bloc & Riverpod",
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
  const contentOpacity = useTransform(smooth, [0, 0.8, 1], [1, 0.9, 0.7]);
  const panelY = useTransform(smooth, [0, 1], [0, 30]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-screen min-h-[700px] overflow-hidden bg-dark-base"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-1/4 -right-1/4 w-1/2 h-3/4 rounded-full bg-accent blur-[200px]"
          animate={{ x: [0, 40, -30, 0], opacity: [0.06, 0.09, 0.05, 0.07] }}
          transition={{ duration: 14, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-accent-subtle blur-[150px]"
          animate={{ x: [0, -30, 40, 0], opacity: [0.04, 0.06, 0.03, 0.04] }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="code-grid absolute inset-0 z-[1] pointer-events-none" />
      <div className="noise-overlay absolute inset-0 z-[2]" />
      <FloatingParticles count={12} />

      <motion.div
        className="relative z-10 h-full flex items-center"
        style={{ opacity: contentOpacity }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 max-w-2xl">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8 font-mono-custom text-sm">
                  <span className="text-accent/60">~/portfolio</span>
                  <span className="text-text-dark-muted/20">$</span>
                  <span className="text-text-dark-muted/50">whoami</span>
                  <span className="w-2 h-4 bg-accent/80 cursor-blink" />
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-[-0.04em] leading-[0.9] text-text-dark mb-6"
                >
                  {heroData.heading.first}{" "}
                  <span className="text-accent">{heroData.heading.accent}</span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-base sm:text-lg md:text-xl text-text-dark-muted leading-relaxed max-w-xl mb-8"
                >
                  {heroData.subtitle}
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-2.5 mb-10"
                >
                  {keySkills.map((skill) => (
                    <span
                      key={skill}
                      className="tag-accent inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Magnetic>
                    <a
                      href="#projects"
                      className="group relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-accent text-light-base text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(217,73,31,0.35)]"
                    >
                      View Projects
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.2}>
                    <a
                      href={heroData.ctaPrimary.href}
                      download
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-text-dark/20 text-text-dark/80 hover:text-text-dark hover:border-text-dark/40 text-sm font-semibold transition-all duration-300"
                    >
                      Download Resume
                    </a>
                  </Magnetic>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="hidden lg:block lg:col-span-5"
              style={{ y: panelY }}
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                className="relative bg-dark-alt rounded-xl overflow-hidden shadow-2xl border border-border-dark"
              >
                <div className="relative flex items-center gap-2 px-4 py-2.5 border-b border-border-dark">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="font-mono-custom text-[11px] text-text-dark-muted/30 ml-3">
                    about.dart
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.03] to-transparent pointer-events-none" />
                </div>

                <div className="p-5 font-mono-custom text-xs leading-relaxed">
                  <div className="flex">
                    <div className="text-text-dark-muted/10 pr-4 text-right select-none">
                      {[1,2,3,4,5,6,7,8].map((n) => (
                        <div key={n} className="leading-[1.65]">{n}</div>
                      ))}
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-text-dark-muted/20">// ── About ──</p>
                      <p>
                        <span className="text-accent-subtle/90">class</span>
                        {" "}
                        <span className="text-text-dark/90">ShougotMollik</span>
                        {" "}
                        <span className="text-accent-subtle/90">extends</span>
                        {" "}
                        <span className="text-text-dark/90">Engineer</span>
                        {" {"}
                      </p>
                      <p className="ml-4">
                        <span className="text-accent-subtle/70">final</span>
                        {" "}
                        <span className="text-accent-subtle/90">String</span>
                        {" "}role ={" "}
                        <span className="text-accent/80">'Flutter Dev'</span>;
                      </p>
                      <p className="ml-4 text-text-dark-muted/20">// 4+ years</p>
                      <p className="ml-4">
                        <span className="text-accent-subtle/70">final</span>
                        {" "}
                        <span className="text-accent-subtle/90">List</span>
                        {"<String>"} stack = [
                      </p>
                      <p className="ml-8 text-accent/80">'Flutter',</p>
                      <p className="ml-8 text-accent/80">'Dart',</p>
                      <p className="ml-8 text-accent/80">'Firebase',</p>
                      <p className="ml-4">];</p>
                      <p>{'}'}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
      >
        <span className="font-mono-custom text-[10px] text-text-dark-muted/30">
          ~/portfolio $
        </span>
        <motion.svg
          width="14"
          height="22"
          viewBox="0 0 14 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-dark-muted/30"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], repeat: Infinity }}
        >
          <path d="M7 2v14M7 16l-5-5M7 16l5-5" />
        </motion.svg>
      </motion.div>
    </section>
  );
}

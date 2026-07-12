"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { testimonialsData } from "@/data/testimonials";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const quoteVariants = {
  hidden: { opacity: 0.001, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 20,
    restDelta: 0.001,
  });

  const bgDrift = useTransform(smooth, [0, 1], [0, -100]);
  const bgOpacity = useTransform(smooth, [0, 0.5, 1], [0.2, 0.5, 0.2]);
  const headingDrift = useTransform(smooth, [0, 1], [45, -45]);
  const headingScale = useTransform(smooth, [0, 0.5, 1], [0.88, 1, 0.88]);
  const quotesDrift = useTransform(smooth, [0, 1], [25, -25]);
  const quotesScale = useTransform(smooth, [0, 0.5, 1], [0.92, 1, 0.92]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-light py-20 md:py-28 relative overflow-hidden"
    >
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ y: bgDrift, opacity: bgOpacity, willChange: "transform, opacity" }}
      >
        <div className="w-full h-full rounded-full bg-accent blur-[100px] opacity-[0.08]" />
      </motion.div>
      <motion.div
        className="absolute bottom-0 -left-32 w-[500px] h-[500px] pointer-events-none"
        style={{ y: bgDrift, opacity: bgOpacity, willChange: "transform, opacity" }}
      >
        <div className="w-full h-full rounded-full bg-accent blur-[100px] opacity-[0.06]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          style={{ y: headingDrift, scale: headingScale, willChange: "transform" }}
        >
            <motion.div
              initial={{ opacity: 0.001, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 md:mb-14 max-w-3xl"
          >
            <p className="text-xs font-semibold tracking-[0.1em] uppercase mb-5 text-accent">
              {testimonialsData.label}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] leading-[1.05] text-text-light">
              {testimonialsData.headline}
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: quotesDrift, scale: quotesScale, willChange: "transform" }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
          >
            {testimonialsData.testimonials.map((t) => (
              <motion.blockquote key={t.name} variants={quoteVariants}>
                <p className="text-base md:text-lg text-text-muted leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <strong className="text-sm font-semibold text-text-light">{t.name}</strong>
                  <span className="text-sm text-text-muted block">{t.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

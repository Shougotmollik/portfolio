"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useInView, animate } from "framer-motion";
import { aboutData } from "@/data/about";

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const numMatch = value.match(/^(\d+)(\+)?$/);
  const num = numMatch ? parseInt(numMatch[1], 10) : 0;
  const suffix = numMatch?.[2] ?? "";
  const motionValue = useMotionValue(0);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [motionValue]);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, num, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, motionValue, num]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function About() {
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

  const bgDrift = useTransform(smooth, [0, 1], [0, -120]);
  const bgOpacity = useTransform(smooth, [0, 0.5, 1], [0.3, 0.6, 0.3]);
  const headingDrift = useTransform(smooth, [0, 1], [50, -50]);
  const headingScale = useTransform(smooth, [0, 0.5, 1], [0.88, 1, 0.88]);
  const textDrift = useTransform(smooth, [0, 1], [30, -30]);
  const textScale = useTransform(smooth, [0, 0.5, 1], [0.92, 1, 0.92]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-dark py-20 md:py-28 relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgDrift, opacity: bgOpacity, willChange: "transform, opacity" }}
      >
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-accent blur-[120px] opacity-[0.08]" />
        <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-accent blur-[100px] opacity-[0.05]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            style={{ y: headingDrift, scale: headingScale, willChange: "transform" }}
          >
            <motion.div
              initial={{ opacity: 0.001, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-semibold tracking-[0.1em] uppercase mb-5 text-accent">
                {aboutData.label}
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] leading-[1.05] text-text-dark">
                {aboutData.headline}
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: textDrift, scale: textScale, willChange: "transform" }}
          >
            <motion.div
              initial={{ opacity: 0.001, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="space-y-8"
            >
              {aboutData.paragraphs.map((p, i) => (
                <p key={i} className="text-base md:text-lg text-text-muted leading-relaxed">
                  {p}
                </p>
              ))}

              <motion.div
                initial={{ opacity: 0.001, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="flex flex-wrap gap-8 pt-4"
              >
                {aboutData.stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="text-3xl sm:text-4xl font-semibold text-text-dark tracking-tight tabular-nums">
                      <CountUp value={stat.value} />
                    </span>
                    <p className="text-sm text-text-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

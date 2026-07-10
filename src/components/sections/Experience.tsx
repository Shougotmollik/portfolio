"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { experienceData } from "@/data/experience";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0, 0, 0.58, 1] as const } },
};

export default function Experience() {
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

  const headingDrift = useTransform(smooth, [0, 1], [50, -50]);
  const headingScale = useTransform(smooth, [0, 0.5, 1], [0.88, 1, 0.88]);
  const itemsDrift = useTransform(smooth, [0, 1], [30, -30]);
  const itemsScale = useTransform(smooth, [0, 0.5, 1], [0.92, 1, 0.92]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-dark py-32 md:py-44 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          style={{ y: headingDrift, scale: headingScale, willChange: "transform" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-16 md:mb-24 max-w-3xl"
          >
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-5">
              {experienceData.label}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-text-dark">
              {experienceData.headline}
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: itemsDrift, scale: itemsScale, willChange: "transform" }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            {experienceData.experiences.map((exp) => (
              <motion.div
                key={exp.company + exp.role}
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-20 py-8 md:py-10 border-b border-border-dark last:border-none"
              >
                <div className="md:w-[200px] flex-shrink-0">
                  <p className="text-sm text-text-muted font-medium">{exp.period}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-text-dark tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-text-muted mt-1">{exp.company}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-text-muted leading-relaxed flex items-start gap-3"
                      >
                        <span className="w-1 h-1 rounded-full bg-text-muted/50 mt-2 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { skillsData } from "@/data/skills";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const groupVariants = {
  hidden: { opacity: 0.001, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Skills() {
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

  const bg1Drift = useTransform(smooth, [0, 1], [0, -80]);
  const bg2Drift = useTransform(smooth, [0, 1], [0, -120]);
  const bg1Opacity = useTransform(smooth, [0, 0.5, 1], [0.2, 0.5, 0.2]);
  const bg2Opacity = useTransform(smooth, [0, 0.5, 1], [0.2, 0.5, 0.2]);
  const headingDrift = useTransform(smooth, [0, 1], [50, -50]);
  const headingScale = useTransform(smooth, [0, 0.5, 1], [0.88, 1, 0.88]);
  const gridDrift = useTransform(smooth, [0, 1], [30, -30]);
  const gridScale = useTransform(smooth, [0, 0.5, 1], [0.92, 1, 0.92]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-light py-20 md:py-28 relative overflow-hidden"
    >
      <motion.div
        className="absolute top-1/3 right-0 w-[600px] h-[600px] glow-accent pointer-events-none"
        style={{ y: bg1Drift, opacity: bg1Opacity, willChange: "transform, opacity" }}
      />
      <motion.div
        className="absolute bottom-0 -left-32 w-[500px] h-[500px] glow-accent pointer-events-none"
        style={{ y: bg2Drift, opacity: bg2Opacity, willChange: "transform, opacity" }}
      />

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
              {skillsData.label}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] leading-[1.05] text-text-light">
              {skillsData.headline}
            </h2>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: gridDrift, scale: gridScale, willChange: "transform" }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillsData.skillGroups.map((group) => (
              <motion.div key={group.title} variants={groupVariants} className="space-y-4">
                <h3 className="text-xs font-semibold text-text-muted tracking-widest uppercase">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="tag-accent inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 h-5 flex-shrink-0"
                        loading="lazy"
                      />
                      <span className="text-sm font-medium text-text-light">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

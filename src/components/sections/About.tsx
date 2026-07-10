"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="section-dark py-32 md:py-44">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-5">
              {aboutData.label}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-text-dark">
              {aboutData.headline}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
            className="space-y-8"
          >
            {aboutData.paragraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg text-text-muted leading-relaxed">
                {p}
              </p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              {aboutData.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="text-3xl sm:text-4xl font-semibold text-text-dark tracking-tight">
                    {stat.value}
                  </span>
                  <p className="text-sm text-text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

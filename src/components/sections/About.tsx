"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Years of Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "10+", label: "App Store Launches" },
];

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
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-5">About</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-text-dark">
              I build mobile apps that people love to use.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
            className="space-y-8"
          >
            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              I specialize in Flutter and Dart, building production-grade apps
              used by thousands of users. From crafting beautiful UIs to
              integrating complex backend services, I handle the full mobile
              development lifecycle.
            </p>
            <p className="text-base md:text-lg text-text-muted leading-relaxed">
              My expertise spans state management (Bloc, Riverpod, Provider),
              Firebase, REST &amp; GraphQL APIs, and native platform integration.
              I believe in clean architecture, pixel-perfect execution, and
              end-to-end delivery.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="text-3xl sm:text-4xl font-semibold text-text-dark tracking-tight">{stat.value}</span>
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

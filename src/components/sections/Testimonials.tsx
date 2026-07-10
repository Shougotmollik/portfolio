"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "One of the most talented Flutter developers I've worked with. His ability to translate complex designs into smooth, performant mobile experiences is exceptional.",
    name: "Alexandra Chen",
    role: "Product Manager, TechVista Solutions",
  },
  {
    quote:
      "He not only delivered ahead of schedule but also suggested architectural improvements that significantly reduced our crash rate.",
    name: "Marcus Rivera",
    role: "CTO, AppForge Inc.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const quoteVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0, 0, 0.58, 1] as const } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-light py-32 md:py-44">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <p className="text-sm font-medium text-accent tracking-wider uppercase mb-5">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-text-light">
            Kind words.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          {testimonials.map((t) => (
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
      </div>
    </section>
  );
}

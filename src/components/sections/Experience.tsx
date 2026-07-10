"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Flutter Developer",
    company: "TechVista Solutions",
    period: "Jan 2023 — Present",
    highlights: [
      "Led mobile development for 3 cross-platform apps serving 50K+ users",
      "Reduced crash rates by 40% through architectural improvements",
      "Built CI/CD pipeline cutting release time by 60%",
      "Mentored a team of 4 junior developers",
    ],
  },
  {
    role: "Flutter Developer",
    company: "AppForge Inc.",
    period: "Mar 2021 — Dec 2022",
    highlights: [
      "Developed 5 client-facing apps across healthcare, e-commerce, and education",
      "Integrated GraphQL APIs with real-time data sync",
      "Reduced app size by 35% through code optimization",
      "Maintained 4.5+ star ratings across all published apps",
    ],
  },
  {
    role: "Junior Mobile Developer",
    company: "PixelCraft Studios",
    period: "Jun 2019 — Feb 2021",
    highlights: [
      "Built and shipped 3 Flutter apps to production",
      "Created a reusable component library adopted company-wide",
      "Won internal hackathon with AR-powered shopping experience",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0, 0, 0.58, 1] as const } },
};

export default function Experience() {
  return (
    <section id="experience" className="section-dark py-32 md:py-44">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <p className="text-sm font-medium text-accent tracking-wider uppercase mb-5">Experience</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-text-dark">
            Where I&apos;ve worked.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.company + exp.role}
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-20 py-8 md:py-10 border-b border-border-dark last:border-none"
            >
              <div className="md:w-[200px] flex-shrink-0">
                <p className="text-sm text-text-muted font-medium">{exp.period}</p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-text-dark tracking-tight">{exp.role}</h3>
                <p className="text-sm text-text-muted mt-1">{exp.company}</p>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-text-muted leading-relaxed flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-text-muted/50 mt-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

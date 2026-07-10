"use client";

import { motion } from "framer-motion";

const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const skillGroups = [
  {
    title: "Frameworks & Languages",
    items: [
      { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
      { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
      { name: "Swift", icon: `${deviconBase}/swift/swift-original.svg` },
      { name: "Kotlin", icon: `${deviconBase}/kotlin/kotlin-original.svg` },
      { name: "TypeScript", icon: `${deviconBase}/typescript/typescript-original.svg` },
    ],
  },
  {
    title: "State Management",
    items: [
      { name: "Bloc", icon: `${deviconBase}/flutter/flutter-original.svg` },
      { name: "Riverpod", icon: `${deviconBase}/flutter/flutter-original.svg` },
      { name: "Provider", icon: `${deviconBase}/flutter/flutter-original.svg` },
    ],
  },
  {
    title: "Backend & Services",
    items: [
      { name: "Firebase", icon: `${deviconBase}/firebase/firebase-plain.svg` },
      { name: "REST APIs", icon: `${deviconBase}/nodejs/nodejs-original.svg` },
      { name: "GraphQL", icon: `${deviconBase}/graphql/graphql-plain.svg` },
      { name: "Supabase", icon: `${deviconBase}/supabase/supabase-original.svg` },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Git", icon: `${deviconBase}/git/git-original.svg` },
      { name: "GitHub", icon: `${deviconBase}/github/github-original.svg` },
      { name: "Android Studio", icon: `${deviconBase}/androidstudio/androidstudio-original.svg` },
      { name: "Figma", icon: `${deviconBase}/figma/figma-original.svg` },
      { name: "Docker", icon: `${deviconBase}/docker/docker-original.svg` },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const groupVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0, 0, 0.58, 1] as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-light py-32 md:py-44 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] glow-clay pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] glow-accent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <p className="text-sm font-medium text-accent tracking-wider uppercase mb-5">Skills</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-text-light">
            The tools I use to ship.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={groupVariants} className="space-y-4">
              <h3 className="text-xs font-semibold text-text-muted tracking-widest uppercase">{group.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <div key={skill.name} className="glass-chip-light inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full">
                    <img src={skill.icon} alt={skill.name} className="w-5 h-5 flex-shrink-0" loading="lazy" />
                    <span className="text-sm font-medium text-text-light">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

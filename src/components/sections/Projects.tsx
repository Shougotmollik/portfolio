"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { GithubIcon, PlayStoreIcon, AppStoreIcon } from "@/components/ui/Icons";
import PhoneFrame from "@/components/ui/PhoneFrame";
import { use3DTilt } from "@/hooks/use3DTilt";
import { projectsData } from "@/data/projects";

function ProjectDetailModal({
  project,
  index,
  onClose,
}: {
  project: (typeof projectsData.projects)[0];
  index: number;
  onClose: () => void;
}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = "hidden";
    return () => { html.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      if (el.contains(e.target as Node)) {
        e.preventDefault();
        el.scrollTop += e.deltaY;
      }
    };
    window.addEventListener("wheel", handler, { passive: false });
    return () => window.removeEventListener("wheel", handler);
  }, []);

  return (
    <div className="fixed inset-0 z-50 section-dark backdrop-blur-sm">
      <div
        ref={scrollRef}
        className="h-full overflow-y-auto"
        onClick={onClose}
      >
        <div className="flex items-center justify-center p-6 sm:p-10 min-h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="glass-dark rounded-2xl overflow-hidden inner-highlight w-full max-w-5xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-[0.12] pointer-events-none"
              style={{ background: project.color }}
            />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 md:p-6 lg:p-8">
              <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-1">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-text-dark leading-[1.08]">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-text-muted leading-relaxed max-w-xl">
                {project.tagline}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              <div className="p-4 md:p-5 lg:p-6">
                <h4 className="text-[11px] font-semibold text-text-muted tracking-widest uppercase mb-2">
                  The Problem
                </h4>
                <p className="text-xs text-text-muted/80 leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-4 md:p-5 lg:p-6 flex items-center justify-center bg-dark-alt/50">
                <div className="w-full max-w-[200px]">
                  <PhoneFrame imageUrl={project.images[selectedImage]} color={project.color} />
                </div>
              </div>

              <div className="p-4 md:p-5 lg:p-6">
                <h4 className="text-[11px] font-semibold text-text-muted tracking-widest uppercase mb-2">
                  What I Built
                </h4>
                <p className="text-xs text-text-muted/80 leading-relaxed">{project.built}</p>
              </div>
            </div>

            <div className="px-6 md:px-6 lg:px-8 pb-6 md:pb-6 lg:pb-8 space-y-4 pt-6 md:pt-6 lg:pt-8">
              <div className="flex gap-2">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    style={{ width: "30px" }}
                    className={`transition-all duration-200 ${selectedImage === i ? "brightness-110 scale-110" : "opacity-60 hover:opacity-90"}`}
                  >
                    <PhoneFrame imageUrl={img} color={project.color} radius="1rem" compact />
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {project.tech.map((t) => (
                  <div
                    key={t.name}
                    className="tag-accent inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium"
                  >
                    <img src={t.icon} alt="" className="w-3 h-3" />
                    {t.name}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 text-accent text-xs font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <GithubIcon size={14} /> GitHub
                </a>
                <a
                  href={project.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 text-accent text-xs font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <PlayStoreIcon size={14} /> Google Play
                </a>
                <a
                  href={project.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 text-accent text-xs font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <AppStoreIcon size={14} /> App Store
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

type Card3DProps = React.ComponentPropsWithoutRef<typeof motion.div> & {
  children: React.ReactNode;
  onClick?: () => void;
};

function Card3D({ children, onClick, ...props }: Card3DProps) {
  const { ref, glareRef, edgeGlowRef } = use3DTilt<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick?.(); }}
      className="glass-dark rounded-2xl overflow-hidden inner-highlight text-left group cursor-pointer relative"
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
      <div
        ref={glareRef}
        className="absolute inset-0 rounded-2xl pointer-events-none z-10 opacity-0 transition-opacity duration-200"
      />
      <div
        ref={edgeGlowRef}
        className="absolute inset-0 rounded-2xl pointer-events-none z-20 opacity-0 transition-opacity duration-200"
      />
    </motion.div>
  );
}

export default function Projects() {
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

  const bg1Drift = useTransform(smooth, [0, 1], [0, -120]);
  const bg2Drift = useTransform(smooth, [0, 1], [0, -80]);
  const headingDrift = useTransform(smooth, [0, 1], [50, -50]);

  const [selected, setSelected] = useState<number | null>(null);
  const { projects } = projectsData;

  return (
    <>
    <section
      id="projects"
      ref={sectionRef}
      className="section-dark py-20 md:py-28 relative overflow-hidden"
    >
      <motion.div
        className="absolute top-1/4 left-1/2 w-[600px] h-[600px] glow-accent pointer-events-none"
        style={{ y: bg1Drift, willChange: "transform" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] glow-accent pointer-events-none"
        style={{ y: bg2Drift, willChange: "transform" }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div style={{ y: headingDrift, willChange: "transform" }}>
          <motion.div
            initial={{ opacity: 0.001, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 md:mb-14"
          >
            <p className="text-xs font-semibold tracking-[0.1em] uppercase mb-5 text-accent">
              {projectsData.label}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] leading-[1.05] text-text-dark max-w-3xl">
              {projectsData.headline}
            </h2>
            <p className="mt-6 text-base md:text-lg text-text-muted max-w-2xl leading-relaxed">
              {projectsData.subtitle}
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" style={{ perspective: "1200px" }}>
          {projects.map((project, i) => (
            <Card3D
              key={project.id}
              onClick={() => setSelected(i)}
              initial={{ opacity: 0.001, scale: 0.85, y: 40, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            >
              <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full opacity-[0.1] pointer-events-none"
                style={{ background: project.color }}
              />
              <div className="p-5 flex flex-col items-center">
                <div className="overflow-hidden rounded-[2.5rem] w-full">
                  <div className="transition-transform duration-[0.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
                    <PhoneFrame imageUrl={project.images[0]} color={project.color} />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-text-dark text-center">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-text-muted text-center leading-relaxed line-clamp-2">
                  {project.tagline}
                </p>
              </div>
              <div className="pb-4 text-center">
                <span className="text-[11px] font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View details
                </span>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
      {selected !== null && (
        <ProjectDetailModal
          project={projects[selected]}
          index={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}

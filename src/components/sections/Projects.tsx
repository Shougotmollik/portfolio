"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, PlayStoreIcon, AppStoreIcon } from "@/components/ui/Icons";
import PhoneFrame from "@/components/ui/PhoneFrame";
import MouseParallax from "@/components/ui/MouseParallax";
import Lightbox from "@/components/ui/Lightbox";
import { projectsData } from "@/data/projects";

interface LightboxState {
  projectIndex: number;
  imageIndex: number;
}

function CaseStudyCard({
  project,
  index,
  onImageClick,
}: {
  project: (typeof projectsData.projects)[0];
  index: number;
  onImageClick: (projectIndex: number, imageIndex: number) => void;
}) {
  return (
    <MouseParallax maxRotate={2}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
        className="glass-dark rounded-2xl overflow-hidden inner-highlight relative"
      >
        <div
          className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-[0.1] pointer-events-none"
          style={{ background: project.color }}
        />

        <div className="flex flex-col lg:flex-row gap-0">
          <div className="w-full lg:w-[45%] flex-shrink-0 p-6 md:p-8 lg:p-10 flex items-center justify-center bg-dark-alt/50">
            <button
              onClick={() => onImageClick(index, 0)}
              className="w-full max-w-[280px] aspect-square cursor-pointer group"
              aria-label="Open main image"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="scale-[0.85]">
                  <PhoneFrame imageUrl={project.images[0]} color={project.color} />
                </div>
              </div>
              <div className="text-center mt-2 text-[11px] text-text-muted/50 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to expand
              </div>
            </button>
          </div>

          <div className="flex-1 p-6 md:p-8 lg:p-10 relative z-10 flex flex-col justify-center">
            <p className="text-xs font-semibold text-accent tracking-widest uppercase mb-2">
              {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-text-dark leading-[1.08]">
              {project.name}
            </h3>

            <p className="mt-2 text-sm md:text-base text-text-muted leading-relaxed max-w-xl">
              {project.tagline}
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-[11px] font-semibold text-text-muted tracking-widest uppercase mb-1">
                  The Problem
                </h4>
                <p className="text-sm text-text-muted/80 leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-[11px] font-semibold text-text-muted tracking-widest uppercase mb-1">
                  What I Built
                </h4>
                <p className="text-sm text-text-muted/80 leading-relaxed">{project.built}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <div
                  key={t.name}
                  className="tag-clay inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium"
                >
                  <img src={t.icon} alt="" className="w-3.5 h-3.5" />
                  {t.name}
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
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
        </div>

        <div className="px-6 md:px-8 lg:px-10 pb-6 md:pb-8 lg:pb-10">
          <div className="grid grid-cols-3 gap-2">
            {project.images.slice(1).map((img, i) => (
              <button
                key={i}
                onClick={() => onImageClick(index, i + 1)}
                className="h-24 md:h-28 rounded-lg overflow-hidden border border-border-dark cursor-pointer hover:border-accent/40 transition-colors group"
                aria-label={`Open screenshot ${i + 2}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </MouseParallax>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const { projects } = projectsData;

  const currentProject = lightbox !== null ? projects[lightbox.projectIndex] : null;

  const handleNext = () => {
    if (!lightbox || !currentProject) return;
    const next = (lightbox.imageIndex + 1) % currentProject.images.length;
    setLightbox({ ...lightbox, imageIndex: next });
  };

  const handlePrev = () => {
    if (!lightbox || !currentProject) return;
    const prev = (lightbox.imageIndex - 1 + currentProject.images.length) % currentProject.images.length;
    setLightbox({ ...lightbox, imageIndex: prev });
  };

  return (
    <section id="projects" className="section-dark py-32 md:py-44 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] glow-accent pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] glow-clay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <p className="text-sm font-medium text-accent tracking-wider uppercase mb-5">
            {projectsData.label}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-text-dark max-w-3xl">
            {projectsData.headline}
          </h2>
          <p className="mt-6 text-base md:text-lg text-text-muted max-w-2xl leading-relaxed">
            {projectsData.subtitle}
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, i) => (
            <CaseStudyCard
              key={project.id}
              project={project}
              index={i}
              onImageClick={(pi, ii) => setLightbox({ projectIndex: pi, imageIndex: ii })}
            />
          ))}
        </div>
      </div>

      {currentProject && lightbox && (
        <Lightbox
          images={currentProject.images}
          currentIndex={lightbox.imageIndex}
          open={lightbox !== null}
          onClose={() => setLightbox(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}

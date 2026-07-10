"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, PlayStoreIcon, AppStoreIcon } from "@/components/ui/Icons";
import PhoneFrame from "@/components/ui/PhoneFrame";
import MouseParallax from "@/components/ui/MouseParallax";
import Lightbox from "@/components/ui/Lightbox";

const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const projects = [
  {
    id: "fitpulse",
    name: "FitPulse",
    tagline: "A social fitness app that connects runners for local group meetups.",
    problem:
      "Running alone gets boring fast, and most fitness apps lack a real community layer. Existing social features are usually just leaderboards — not actual coordination.",
    built:
      "Built the entire mobile client in Flutter with offline-first sync, real-time chat via Firebase, and a custom animation system for the live route map. Integrated Strava API for activity import and Apple Health for biometric tracking.",
    tech: [
      { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
      { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
      { name: "Firebase", icon: `${deviconBase}/firebase/firebase-plain.svg` },
      { name: "Bloc", icon: `${deviconBase}/flutter/flutter-original.svg` },
    ],
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=400&h=800&fit=crop",
    ],
    github: "https://github.com",
    playStore: "https://play.google.com",
    appStore: "https://apps.apple.com",
    color: "#5B7FDE",
  },
  {
    id: "pennywise",
    name: "PennyWise",
    tagline: "A personal finance tracker with intelligent budgeting and spending insights.",
    problem:
      "Most budgeting apps are either too simplistic (envelope systems) or too complex (spreadsheet-style). Users need something that feels natural — just smart defaults with room to customize.",
    built:
      "Designed and built the full app in Flutter with Riverpod for state management. Plaid API integration for automatic transaction import, custom charting engine for spending visualization, and a ML layer for predictive budgeting.",
    tech: [
      { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
      { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
      { name: "Riverpod", icon: `${deviconBase}/flutter/flutter-original.svg` },
      { name: "REST API", icon: `${deviconBase}/nodejs/nodejs-original.svg` },
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=800&fit=crop",
    ],
    github: "https://github.com",
    playStore: "https://play.google.com",
    appStore: "https://apps.apple.com",
    color: "#6FA88A",
  },
  {
    id: "marketnode",
    name: "MarketNode",
    tagline: "A marketplace connecting local artisans with customers who value handmade goods.",
    problem:
      "Artisans struggle to reach local customers without paying high commissions to Etsy or Amazon. Buyers want to discover unique handmade items but don't know where to look locally.",
    built:
      "Developed the full cross-platform marketplace with Flutter and Provider. Implemented real-time bid/offer negotiation, in-app messaging, and a location-based discovery engine using Google Maps API. Built the admin dashboard with Firebase Analytics.",
    tech: [
      { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
      { name: "Firebase", icon: `${deviconBase}/firebase/firebase-plain.svg` },
      { name: "Provider", icon: `${deviconBase}/flutter/flutter-original.svg` },
      { name: "GraphQL", icon: `${deviconBase}/graphql/graphql-plain.svg` },
    ],
    images: [
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1553729459-afe8f2e2a7a4?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop",
    ],
    github: "https://github.com",
    playStore: "https://play.google.com",
    appStore: "https://apps.apple.com",
    color: "#D4876A",
  },
  {
    id: "habitforge",
    name: "HabitForge",
    tagline: "A habit-building app with streaks, accountability partners, and smart reminders.",
    problem:
      "Habit trackers either lack accountability features or overwhelm users with too many options. People need a simple, focused system that keeps them consistent without feeling like a chore.",
    built:
      "Built the app with Flutter and Bloc, featuring a unique streak-based gamification engine. Implemented push notification scheduling with smart timing based on user behavior patterns. Built the accountability partner system with real-time progress sharing via Firebase.",
    tech: [
      { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
      { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
      { name: "Bloc", icon: `${deviconBase}/flutter/flutter-original.svg` },
      { name: "Firebase", icon: `${deviconBase}/firebase/firebase-plain.svg` },
    ],
    images: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=800&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=800&fit=crop",
    ],
    github: "https://github.com",
    playStore: "https://play.google.com",
    appStore: "https://apps.apple.com",
    color: "#8B7EC8",
  },
];

interface LightboxState {
  projectIndex: number;
  imageIndex: number;
}

function CaseStudyCard({
  project,
  index,
  onImageClick,
}: {
  project: (typeof projects)[0];
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
                <div key={t.name} className="tag-clay inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium">
                  <img src={t.icon} alt="" className="w-3.5 h-3.5" />
                  {t.name}
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 text-accent text-xs font-semibold hover:bg-accent hover:text-white transition-all duration-300">
                <GithubIcon size={14} /> GitHub
              </a>
              <a href={project.playStore} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 text-accent text-xs font-semibold hover:bg-accent hover:text-white transition-all duration-300">
                <PlayStoreIcon size={14} /> Google Play
              </a>
              <a href={project.appStore} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 text-accent text-xs font-semibold hover:bg-accent hover:text-white transition-all duration-300">
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
          <p className="text-sm font-medium text-accent tracking-wider uppercase mb-5">Projects</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-text-dark max-w-3xl">
            Selected work.
          </h2>
          <p className="mt-6 text-base md:text-lg text-text-muted max-w-2xl leading-relaxed">
            Each project represents a real problem solved end-to-end — from
            product thinking through architecture to polished UI.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, i) => (
            <CaseStudyCard key={project.id} project={project} index={i} onImageClick={(pi, ii) => setLightbox({ projectIndex: pi, imageIndex: ii })} />
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

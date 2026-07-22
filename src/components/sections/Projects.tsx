"use client";

import { useState } from "react";
import { GithubIcon, PlayStoreIcon, AppStoreIcon } from "@/components/ui/Icons";
import PhoneFrame from "@/components/ui/PhoneFrame";
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="w-full max-w-4xl bg-[#fdfaf2] border-[3px] border-[#111111] rounded-2xl neo-shadow-xl overflow-hidden flex flex-col md:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-lg border-[2px] border-[#111111] bg-[#ffffff] font-black text-sm neo-shadow-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Modal Left / Media Panel */}
        <div className="w-full md:w-1/2 p-6 bg-[#fa8f76] border-b-[3px] md:border-b-0 md:border-r-[3px] border-[#111111] flex flex-col items-center justify-center gap-6">
          <div className="w-full max-w-[220px]">
            <PhoneFrame imageUrl={project.images[selectedImage]} color={project.color} />
          </div>
          <div className="flex gap-2 justify-center flex-wrap">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`w-10 h-16 rounded-md overflow-hidden border-[2px] border-[#111111] transition-transform ${selectedImage === i ? "scale-105 border-[#fcd567] neo-shadow-sm" : "opacity-60"}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Modal Right / Details Panel */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-black text-[#111111]/60 uppercase tracking-widest block mb-1">
                Project {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#111111]">
                {project.name}
              </h3>
              <p className="text-sm font-bold text-[#fa8f76] mt-1">
                {project.tagline}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-[11px] font-black text-[#111111]/70 uppercase tracking-wider">
                The Problem & Built Solution
              </h4>
              <p className="text-xs font-bold text-[#111111]/80 leading-relaxed">
                {project.problem}
              </p>
              <p className="text-xs font-bold text-[#111111]/80 leading-relaxed bg-[#9ae2ad] p-3 border-[2px] border-[#111111] rounded-lg">
                {project.built}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tech.map((t) => (
                <span
                  key={t.name}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 border-[1.5px] border-[#111111] bg-[#ffffff] rounded-md text-[10px] font-black text-[#111111]"
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn neo-btn-white text-xs py-2 px-4 flex items-center gap-1.5 shadow-[2px_2px_0px_#111111]"
            >
              <GithubIcon size={12} /> GitHub
            </a>
            <a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn neo-btn-primary text-xs py-2 px-4 flex items-center gap-1.5 shadow-[2px_2px_0px_#111111]"
            >
              <PlayStoreIcon size={12} /> Google Play
            </a>
            <a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn neo-btn-purple text-xs py-2 px-4 flex items-center gap-1.5 shadow-[2px_2px_0px_#111111]"
            >
              <AppStoreIcon size={12} /> App Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);
  const { projects } = projectsData;

  const cardColors = [
    "bg-[#f2afd1]", 
    "bg-[#fcd567]", 
    "bg-[#9ee6ee]", 
    "bg-[#fa8f76]"
  ];

  return (
    <>
      <section
        id="projects"
        className="py-24 border-b-[2.5px] border-[#111111] bg-[#ffffff] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="mb-14 max-w-3xl">
            <span className="inline-block px-3 py-1 bg-[#fcd567] border-[2px] border-[#111111] rounded-md font-bold text-xs uppercase mb-4 neo-shadow-sm">
              {projectsData.label}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] leading-tight">
              {projectsData.headline}
            </h2>
            <p className="mt-4 text-base sm:text-lg font-bold text-[#111111]/80 max-w-2xl leading-relaxed">
              {projectsData.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => {
              const headerColor = cardColors[i % cardColors.length];
              return (
                <div
                  key={project.id}
                  onClick={() => setSelected(i)}
                  className="neo-card bg-[#ffffff] overflow-hidden flex flex-col group cursor-pointer hover:translate-y-[-4px] transition-transform duration-200"
                >
                  {/* Folder Tab-like Header */}
                  <div className={`p-3 border-b-[2px] border-[#111111] ${headerColor} flex justify-between items-center`}>
                    <span className="text-[10px] font-black tracking-widest uppercase">
                      APP {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                  </div>

                  <div className="p-6 flex flex-col items-center flex-grow bg-[#ffffff]">
                    <div className="w-full max-w-[150px] mb-4">
                      <PhoneFrame imageUrl={project.images[0]} color={project.color} />
                    </div>
                    <h3 className="text-base font-black text-[#111111] text-center leading-tight">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-xs font-bold text-[#111111]/60 text-center line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="p-3 border-t-[2px] border-[#111111] bg-[#fdfaf2] text-center">
                    <span className="text-xs font-black text-[#111111] group-hover:text-[#fa8f76] transition-colors">
                      VIEW CASE STUDY →
                    </span>
                  </div>
                </div>
              );
            })}
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

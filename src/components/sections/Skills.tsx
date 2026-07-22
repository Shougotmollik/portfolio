"use client";

import { skillsData } from "@/data/skills";
import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Skills() {
  const colors = [
    "bg-[#f2afd1]", 
    "bg-[#fcd567]", 
    "bg-[#9ee6ee]", 
    "bg-[#fa8f76]",
    "bg-[#c5a9f6]",
    "bg-[#9ae2ad]"
  ];

  return (
    <section
      id="skills"
      className="py-24 border-b-[2.5px] border-[#111111] bg-[#fdfaf2] relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 noise-overlay" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeader label={skillsData.label} headline={skillsData.headline} />

        <RevealStagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.skillGroups.map((group, groupIndex) => {
              const cardBg = colors[groupIndex % colors.length];
              return (
                <RevealItem key={group.title}>
                  <div 
                    className="neo-card bg-[#ffffff] overflow-hidden flex flex-col hover:translate-y-[-4px] transition-transform duration-200"
                  >
                    <div className={`p-4 border-b-[2.5px] border-[#111111] ${cardBg} flex items-center justify-between`}>
                      <h3 className="text-base font-black text-[#111111] uppercase tracking-wider">
                        {group.title}
                      </h3>
                      <span className="text-xs font-black px-2 py-0.5 border-[1.5px] border-[#111111] bg-[#ffffff] rounded">
                        SKILLS
                      </span>
                    </div>

                    <div className="p-6 flex flex-wrap gap-3 bg-[#ffffff] flex-grow">
                      {group.items.map((skill) => (
                        <div
                          key={skill.name}
                          className="inline-flex items-center gap-2 px-3 py-1.5 border-[2px] border-[#111111] bg-[#fdfaf2] rounded-lg neo-shadow-sm hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#111111] transition-all duration-150"
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-4 h-4 flex-shrink-0"
                            loading="lazy"
                          />
                          <span className="text-xs font-black text-[#111111]">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </div>
        </RevealStagger>
      </div>
    </section>
  );
}

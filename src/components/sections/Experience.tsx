"use client";

import { experienceData } from "@/data/experience";
import { CheckIcon, CalendarIcon, BriefcaseIcon } from "@/components/ui/Icons";
import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Experience() {
  const colors = [
    "bg-[#f2afd1]",
    "bg-[#fcd567]",
    "bg-[#9ee6ee]"
  ];

  return (
    <section
      id="experience"
      className="py-24 border-b-[2.5px] border-[#111111] bg-[#fdfaf2] relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 noise-overlay" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeader label={experienceData.label} headline={experienceData.headline} />

        <RevealStagger>
          <div className="space-y-8 max-w-4xl">
            {experienceData.experiences.map((exp, index) => {
              const cardBg = colors[index % colors.length];
              const isInternship = exp.role.toLowerCase().includes("intern");
              return (
                <RevealItem key={exp.company + exp.role}>
                  <div className="neo-card bg-[#ffffff] overflow-hidden flex flex-col md:flex-row border-[2.5px] border-[#111111] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#111111] transition-all duration-200">
                    <div className={`p-6 md:w-[230px] flex-shrink-0 ${cardBg} border-b-[2.5px] md:border-b-0 md:border-r-[2.5px] border-[#111111] flex flex-col justify-center items-start gap-3`}>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1 border-[1.5px] border-[#111111] bg-[#ffffff] rounded-md uppercase tracking-wider">
                        <CalendarIcon size={12} />
                        Timeline
                      </span>
                      <p className="text-sm font-black text-[#111111] tracking-wide leading-snug">
                        {exp.period}
                      </p>
                      <span className="text-[10px] font-bold text-[#111111]/60 uppercase tracking-wider">
                        {isInternship ? "Internship" : "Full-time"}
                      </span>
                    </div>

                    <div className="p-6 md:p-8 flex-grow">
                      <p className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider text-[#fa8f76]">
                        <BriefcaseIcon size={13} />
                        {exp.company}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight mt-1.5">
                        {exp.role}
                      </h3>
                      <div className="mt-4 h-[3px] w-12 bg-[#111111] rounded-full" />

                      <ul className="mt-5 space-y-3">
                        {exp.highlights.map((h, j) => (
                          <li
                            key={j}
                            className="text-xs sm:text-sm font-bold text-[#111111]/85 leading-relaxed flex items-start gap-3"
                          >
                            <span className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full border-[2px] border-[#111111] bg-[#9ae2ad] flex items-center justify-center text-[#111111]">
                              <CheckIcon size={12} />
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
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

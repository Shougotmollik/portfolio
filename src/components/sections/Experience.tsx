"use client";

import { experienceData } from "@/data/experience";

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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="mb-14 max-w-3xl">
          <span className="inline-block px-3 py-1 bg-[#ffffff] border-[2px] border-[#111111] rounded-md font-bold text-xs uppercase mb-4 neo-shadow-sm">
            {experienceData.label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] leading-tight">
            {experienceData.headline}
          </h2>
        </div>

        <div className="space-y-8 max-w-4xl">
          {experienceData.experiences.map((exp, index) => {
            const cardBg = colors[index % colors.length];
            return (
              <div
                key={exp.company + exp.role}
                className="neo-card bg-[#ffffff] overflow-hidden flex flex-col md:flex-row border-[2.5px] border-[#111111]"
              >
                {/* Period Badge Left Block */}
                <div className={`p-6 md:w-[240px] flex-shrink-0 ${cardBg} border-b-[2.5px] md:border-b-0 md:border-r-[2.5px] border-[#111111] flex flex-col justify-center items-start`}>
                  <span className="text-xs font-black px-2 py-0.5 border-[1.5px] border-[#111111] bg-[#ffffff] rounded mb-2">
                    TIMELINE
                  </span>
                  <p className="text-sm font-black text-[#111111] tracking-wide">
                    {exp.period}
                  </p>
                </div>

                {/* Content Block */}
                <div className="p-6 md:p-8 flex-grow">
                  <h3 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-bold text-[#fa8f76] mt-1">{exp.company}</p>
                  
                  <ul className="mt-6 space-y-3">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-xs sm:text-sm font-bold text-[#111111]/85 leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="text-base leading-none text-[#111111]">⚡️</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

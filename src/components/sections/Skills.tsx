"use client";

import { skillsData } from "@/data/skills";

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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="mb-14 max-w-3xl">
          <span className="inline-block px-3 py-1 bg-[#ffffff] border-[2px] border-[#111111] rounded-md font-bold text-xs uppercase mb-4 neo-shadow-sm">
            {skillsData.label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] leading-tight">
            {skillsData.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.skillGroups.map((group, groupIndex) => {
            const cardBg = colors[groupIndex % colors.length];
            return (
              <div 
                key={group.title} 
                className="neo-card bg-[#ffffff] overflow-hidden flex flex-col"
              >
                {/* Card Title Header Block */}
                <div className={`p-4 border-b-[2.5px] border-[#111111] ${cardBg} flex items-center justify-between`}>
                  <h3 className="text-base font-black text-[#111111] uppercase tracking-wider">
                    {group.title}
                  </h3>
                  <span className="text-xs font-black px-2 py-0.5 border-[1.5px] border-[#111111] bg-[#ffffff] rounded">
                    SKILLS
                  </span>
                </div>

                {/* Card Items Content */}
                <div className="p-6 flex flex-wrap gap-3 bg-[#ffffff] flex-grow">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 border-[2px] border-[#111111] bg-[#fdfaf2] rounded-lg neo-shadow-sm"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

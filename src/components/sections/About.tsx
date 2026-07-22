"use client";

import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 border-b-[2.5px] border-[#111111] bg-[#ffffff] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Heading Box */}
          <div className="lg:col-span-5">
            <span className="inline-block px-3 py-1 bg-[#fcd567] border-[2px] border-[#111111] rounded-md font-bold text-xs uppercase mb-4 neo-shadow-sm">
              {aboutData.label}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] leading-tight">
              {aboutData.headline}
            </h2>
            <div className="mt-8 p-6 bg-[#9ae2ad] border-[2.5px] border-[#111111] rounded-xl neo-shadow rotate-[-1deg] hidden lg:block">
              <p className="text-sm font-black text-[#111111]">
                ⚡️ "Building mobile applications with clean architecture isn't just about code — it's about building scalable products that users love."
              </p>
            </div>
          </div>

          {/* Right Info Box */}
          <div className="lg:col-span-7 space-y-8">
            <div className="neo-card bg-[#fdfaf2] p-8 space-y-6">
              {aboutData.paragraphs.map((p, i) => (
                <p key={i} className="text-base sm:text-lg font-bold text-[#111111]/80 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Stats list */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {aboutData.stats.map((stat, i) => {
                const colors = ["bg-[#f2afd1]", "bg-[#9ee6ee]", "bg-[#fa8f76]"];
                const color = colors[i % colors.length];
                return (
                  <div 
                    key={stat.label} 
                    className={`border-[2.5px] border-[#111111] rounded-xl p-4 neo-shadow-sm ${color} flex flex-col justify-between`}
                  >
                    <span className="text-3xl font-black text-[#111111] tracking-tight">
                      {stat.value}
                    </span>
                    <p className="text-xs font-black text-[#111111]/70 uppercase tracking-wider mt-2">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

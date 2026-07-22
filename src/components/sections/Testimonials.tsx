"use client";

import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  const colors = [
    "bg-[#f2afd1]", 
    "bg-[#9ee6ee]", 
    "bg-[#fcd567]", 
    "bg-[#fa8f76]"
  ];

  return (
    <section
      id="testimonials"
      className="py-24 border-b-[2.5px] border-[#111111] bg-[#ffffff] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="mb-14 max-w-3xl">
          <span className="inline-block px-3 py-1 bg-[#fcd567] border-[2px] border-[#111111] rounded-md font-bold text-xs uppercase mb-4 neo-shadow-sm">
            {testimonialsData.label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] leading-tight">
            {testimonialsData.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.testimonials.map((t, index) => {
            const bubbleBg = colors[index % colors.length];
            return (
              <blockquote key={t.name} className="flex flex-col gap-4">
                {/* Speech Bubble Container */}
                <div className={`p-6 border-[2.5px] border-[#111111] rounded-2xl neo-shadow ${bubbleBg} relative`}>
                  <p className="text-sm sm:text-base font-black text-[#111111] leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  
                  {/* Bubble Pointer Decorator */}
                  <div className="absolute -bottom-3 left-8 w-6 h-6 border-r-[2.5px] border-b-[2.5px] border-[#111111] transform rotate-45" style={{
                    backgroundColor: ["#f2afd1", "#9ee6ee", "#fcd567", "#fa8f76"][index % 4]
                  }} />
                </div>

                {/* Footer User Info */}
                <footer className="mt-2 pl-4 flex flex-col">
                  <strong className="text-sm font-black text-[#111111]">{t.name}</strong>
                  <span className="text-xs font-bold text-[#111111]/60 block">{t.role}</span>
                </footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}

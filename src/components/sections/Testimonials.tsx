"use client";

import { testimonialsData } from "@/data/testimonials";
import SectionHeader from "@/components/ui/SectionHeader";

const BUBBLE_COLORS = ["#f2afd1", "#9ee6ee", "#fcd567", "#fa8f76"];
const BUBBLE_BG_CLASSES = ["bg-[#f2afd1]", "bg-[#9ee6ee]", "bg-[#fcd567]", "bg-[#fa8f76]"];

export default function Testimonials() {
  const items = [...testimonialsData.testimonials, ...testimonialsData.testimonials];

  return (
    <section
      id="testimonials"
      className="py-24 border-b-[2.5px] border-[#111111] bg-[#ffffff] relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 noise-overlay" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeader label={testimonialsData.label} headline={testimonialsData.headline} />
      </div>

      <div className="marquee relative z-10 overflow-hidden mt-14">
        <div className="marquee-track flex w-max gap-6 pr-6">
          {items.map((t, index) => {
            const bubbleBg = BUBBLE_BG_CLASSES[index % BUBBLE_BG_CLASSES.length];
            return (
              <blockquote key={index} className="w-[320px] sm:w-[400px] flex-shrink-0 flex flex-col gap-4">
                <div className={`p-6 border-[2.5px] border-[#111111] rounded-2xl neo-shadow ${bubbleBg} relative`}>
                  <p className="text-sm font-black text-[#111111] leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="absolute -bottom-3 left-8 w-6 h-6 border-r-[2.5px] border-b-[2.5px] border-[#111111] transform rotate-45" style={{
                    backgroundColor: BUBBLE_COLORS[index % BUBBLE_COLORS.length]
                  }} />
                </div>

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
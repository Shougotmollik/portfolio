"use client";

import { testimonialsData } from "@/data/testimonials";
import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

const BUBBLE_COLORS = ["#f2afd1", "#9ee6ee", "#fcd567", "#fa8f76"];
const BUBBLE_BG_CLASSES = ["bg-[#f2afd1]", "bg-[#9ee6ee]", "bg-[#fcd567]", "bg-[#fa8f76]"];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 border-b-[2.5px] border-[#111111] bg-[#ffffff] relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 noise-overlay" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeader label={testimonialsData.label} headline={testimonialsData.headline} />

        <RevealStagger>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.testimonials.map((t, index) => {
              const bubbleBg = BUBBLE_BG_CLASSES[index % BUBBLE_BG_CLASSES.length];
              return (
                <RevealItem key={t.name}>
                  <blockquote className="flex flex-col gap-4">
                    <div className={`p-6 border-[2.5px] border-[#111111] rounded-2xl neo-shadow ${bubbleBg} relative`}>
                      <p className="text-sm sm:text-base font-black text-[#111111] leading-relaxed">
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
                </RevealItem>
              );
            })}
          </div>
        </RevealStagger>
      </div>
    </section>
  );
}

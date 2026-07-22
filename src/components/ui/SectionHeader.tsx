"use client";

import Reveal from "@/components/ui/Reveal";

interface SectionHeaderProps {
  label: string;
  headline: string;
  subtitle?: string;
}

export default function SectionHeader({ label, headline, subtitle }: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="mb-14 max-w-3xl">
        <span className="inline-block px-3 py-1 bg-[#ffffff] border-[2px] border-[#111111] rounded-md font-bold text-xs uppercase mb-4 neo-shadow-sm">
          {label}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] leading-tight">
          {headline}
        </h2>
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg font-bold text-[#111111]/80 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}

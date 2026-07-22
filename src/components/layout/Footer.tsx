"use client";

import { type ComponentType } from "react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/Icons";
import { siteData } from "@/data/site";

const iconMap: Record<string, ComponentType<{ size?: number }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  X: XIcon,
};

export default function Footer() {
  return (
    <footer className="py-20 border-t-[2.5px] border-[#111111] bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <div>
            <span className="text-xl font-black text-[#111111] flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#fcd567] border-[2px] border-[#111111] flex items-center justify-center font-black text-sm neo-shadow-sm">S</span>
              {siteData.name}
            </span>
            <p className="mt-4 text-sm font-bold text-[#111111]/70 max-w-sm leading-relaxed">
              {siteData.description}
            </p>
            <div className="flex gap-3 mt-6">
              {siteData.socials.map((social) => {
                const Icon = iconMap[social.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 border-[2px] border-[#111111] rounded bg-[#ffffff] flex items-center justify-center neo-shadow-sm hover:translate-y-[-2px] transition-transform active:translate-y-0"
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-8">
            <div className="space-y-3">
              <h4 className="text-xs font-black text-[#111111] tracking-widest uppercase">
                Navigate
              </h4>
              <ul className="space-y-2">
                {siteData.navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-bold text-[#111111]/70 hover:text-[#fa8f76] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t-[2px] border-[#111111]/10">
          <p className="text-xs font-bold text-[#111111]/40">
            &copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

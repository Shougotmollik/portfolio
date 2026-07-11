"use client";

import { type ComponentType } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/Icons";
import { siteData } from "@/data/site";

const iconMap: Record<string, ComponentType<{ size?: number }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  X: XIcon,
};

export default function Footer() {
  return (
    <footer className="section-dark py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <div>
            <span className="text-xl font-semibold tracking-tight text-text-dark">
              {siteData.name}
            </span>
            <p className="mt-3 text-sm text-text-muted max-w-sm leading-relaxed">
              {siteData.description}
            </p>
            <div className="flex gap-3 mt-6">
              {siteData.socials.map((social) => {
                const Icon = iconMap[social.icon];
                if (!Icon) return null;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-text-dark transition-colors duration-200"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-8">
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-text-muted tracking-widest uppercase">
                Navigate
              </h4>
              <ul className="space-y-2">
                {siteData.navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text-dark transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border-dark">
          <p className="text-xs text-text-muted/60">
            &copy; {new Date().getFullYear()} {siteData.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, type ComponentType } from "react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/Icons";
import { contactData } from "@/data/contact";

const iconMap: Record<string, ComponentType<{ size?: number }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  X: XIcon,
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 border-b-[2.5px] border-[#111111] bg-[#fdfaf2] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="mb-14 max-w-3xl">
          <span className="inline-block px-3 py-1 bg-[#ffffff] border-[2px] border-[#111111] rounded-md font-bold text-xs uppercase mb-4 neo-shadow-sm">
            {contactData.label}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] leading-tight">
            {contactData.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Form Box */}
          <div className="neo-card bg-[#ffffff] p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-black uppercase text-[#111111] mb-2">
                  {contactData.formPlaceholders.name}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#fdfaf2] border-[2px] border-[#111111] rounded-lg px-4 py-3 text-sm font-bold text-[#111111] placeholder:text-[#111111]/40 outline-none focus:bg-[#ffffff] transition-all"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-black uppercase text-[#111111] mb-2">
                  {contactData.formPlaceholders.email}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#fdfaf2] border-[2px] border-[#111111] rounded-lg px-4 py-3 text-sm font-bold text-[#111111] placeholder:text-[#111111]/40 outline-none focus:bg-[#ffffff] transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-black uppercase text-[#111111] mb-2">
                  {contactData.formPlaceholders.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#fdfaf2] border-[2px] border-[#111111] rounded-lg px-4 py-3 text-sm font-bold text-[#111111] placeholder:text-[#111111]/40 outline-none focus:bg-[#ffffff] transition-all resize-none"
                  placeholder="Enter your message..."
                />
              </div>

              <button
                type="submit"
                className="neo-btn neo-btn-primary w-full text-sm py-3 px-6 shadow-[4px_4px_0px_#111111] hover:shadow-[5px_5px_0px_#111111]"
              >
                {submitted ? "Message sent! ✨" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right Info Box */}
          <div className="flex flex-col justify-between py-2 space-y-10">
            <div className="space-y-8">
              <div>
                <span className="inline-block px-2.5 py-0.5 border-[1.5px] border-[#111111] bg-[#ffffff] rounded text-[10px] font-black uppercase tracking-wider mb-2">
                  Email
                </span>
                <p>
                  <a
                    href={`mailto:${contactData.emailAddress}`}
                    className="text-lg sm:text-xl font-black text-[#111111] hover:text-[#fa8f76] transition-colors"
                  >
                    {contactData.emailAddress}
                  </a>
                </p>
              </div>

              <div>
                <span className="inline-block px-2.5 py-0.5 border-[1.5px] border-[#111111] bg-[#ffffff] rounded text-[10px] font-black uppercase tracking-wider mb-2">
                  Location
                </span>
                <p className="text-lg sm:text-xl font-black text-[#111111]/80">
                  {contactData.location}
                </p>
              </div>

              <div>
                <span className="inline-block px-2.5 py-0.5 border-[1.5px] border-[#111111] bg-[#ffffff] rounded text-[10px] font-black uppercase tracking-wider mb-2">
                  Socials
                </span>
                <div className="flex gap-4 mt-2">
                  {contactData.socials.map((social) => {
                    const Icon = iconMap[social.icon];
                    if (!Icon) return null;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 border-[2px] border-[#111111] rounded-lg bg-[#ffffff] flex items-center justify-center neo-shadow-sm hover:translate-y-[-2px] transition-transform active:translate-y-0"
                        aria-label={social.label}
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm font-bold text-[#111111]/50 leading-relaxed max-w-sm">
              {contactData.footerText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

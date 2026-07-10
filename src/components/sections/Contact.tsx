"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/Icons";

const socials = [
  { label: "GitHub", icon: GithubIcon, href: "https://github.com" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com" },
  { label: "X / Twitter", icon: XIcon, href: "https://twitter.com" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-dark py-32 md:py-44">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <p className="text-sm font-medium text-accent tracking-wider uppercase mb-5">Contact</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-text-dark">
            Let&apos;s work together.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input id="name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border-dark px-0 py-3 text-base text-text-dark placeholder:text-text-muted outline-none focus:border-accent transition-colors duration-200" placeholder="Your name" />
              </div>
              <div>
                <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border-dark px-0 py-3 text-base text-text-dark placeholder:text-text-muted outline-none focus:border-accent transition-colors duration-200" placeholder="Your email" />
              </div>
              <div>
                <textarea id="message" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border-dark px-0 py-3 text-base text-text-dark placeholder:text-text-muted outline-none focus:border-accent transition-colors duration-200 resize-none" placeholder="Your message" />
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-text-dark text-dark-base text-sm font-semibold hover:opacity-85 transition-all duration-300">
                {submitted ? "Message sent" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-xs font-semibold text-text-muted tracking-widest uppercase mb-4">Email</h3>
              <a href="mailto:hello@shougot.dev" className="text-base md:text-lg text-text-dark hover:text-accent transition-colors duration-200">hello@shougot.dev</a>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-text-muted tracking-widest uppercase mb-4">Location</h3>
              <p className="text-base md:text-lg text-text-muted">Remote / Worldwide</p>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-text-muted tracking-widest uppercase mb-4">Social</h3>
              <div className="flex gap-5">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                    className="text-text-muted hover:text-text-dark transition-colors duration-200" aria-label={social.label}>
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
            <p className="text-sm text-text-muted/60 leading-relaxed">
              Currently open to freelance projects and full-time opportunities. I typically respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

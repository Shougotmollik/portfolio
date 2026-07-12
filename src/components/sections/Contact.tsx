"use client";

import { useRef, useState, type ComponentType } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/Icons";
import Magnetic from "@/components/ui/Magnetic";
import { contactData } from "@/data/contact";

const iconMap: Record<string, ComponentType<{ size?: number }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  X: XIcon,
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 20,
    restDelta: 0.001,
  });

  const bgDrift = useTransform(smooth, [0, 1], [0, -120]);
  const bgOpacity = useTransform(smooth, [0, 0.5, 1], [0.2, 0.5, 0.2]);
  const headingDrift = useTransform(smooth, [0, 1], [50, -50]);
  const headingScale = useTransform(smooth, [0, 0.5, 1], [0.88, 1, 0.88]);
  const formDrift = useTransform(smooth, [0, 1], [30, -30]);
  const formScale = useTransform(smooth, [0, 0.5, 1], [0.92, 1, 0.92]);
  const infoDrift = useTransform(smooth, [0, 1], [40, -40]);
  const infoScale = useTransform(smooth, [0, 0.5, 1], [0.93, 1, 0.93]);

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
      ref={sectionRef}
      className="section-dark py-20 md:py-28 relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgDrift, opacity: bgOpacity, willChange: "transform, opacity" }}
      >
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-accent blur-[120px] opacity-[0.08]" />
        <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-accent blur-[100px] opacity-[0.06]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          style={{ y: headingDrift, scale: headingScale, willChange: "transform" }}
        >
          <motion.div
            initial={{ opacity: 0.001, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 md:mb-14 max-w-3xl"
          >
            <p className="text-xs font-semibold tracking-[0.1em] uppercase mb-5 text-accent">
              {contactData.label}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] leading-[1.05] text-text-dark">
              {contactData.headline}
            </h2>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            style={{ y: formDrift, scale: formScale, willChange: "transform" }}
          >
            <motion.div
              initial={{ opacity: 0.001, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ stiffness: 200, damping: 20, mass: 1, delay: 0.15, type: "spring" }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">{contactData.formPlaceholders.name}</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border-dark px-0 py-3 text-base text-text-dark placeholder:text-text-muted outline-none focus:border-accent transition-colors duration-200"
                    placeholder={contactData.formPlaceholders.name}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">{contactData.formPlaceholders.email}</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border-dark px-0 py-3 text-base text-text-dark placeholder:text-text-muted outline-none focus:border-accent transition-colors duration-200"
                    placeholder={contactData.formPlaceholders.email}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">{contactData.formPlaceholders.message}</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border-dark px-0 py-3 text-base text-text-dark placeholder:text-text-muted outline-none focus:border-accent transition-colors duration-200 resize-none"
                    placeholder={contactData.formPlaceholders.message}
                  />
                </div>
                <Magnetic strength={0.15}>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(217,73,31,0.35)" }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-light-base text-sm font-semibold transition-all duration-300"
                  >
                    {submitted ? "Message sent" : "Send Message"}
                  </motion.button>
                </Magnetic>
              </form>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: infoDrift, scale: infoScale, willChange: "transform" }}
          >
            <motion.div
              initial={{ opacity: 0.001, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ stiffness: 200, damping: 20, mass: 1, delay: 0.2, type: "spring" }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-xs font-semibold text-text-muted tracking-widest uppercase mb-4">
                  Email
                </h3>
                <a
                  href={`mailto:${contactData.emailAddress}`}
                  className="text-base md:text-lg text-text-dark hover:text-accent transition-colors duration-200"
                >
                  {contactData.emailAddress}
                </a>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-text-muted tracking-widest uppercase mb-4">
                  Location
                </h3>
                <p className="text-base md:text-lg text-text-muted">
                  {contactData.location}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-text-muted tracking-widest uppercase mb-4">
                  Social
                </h3>
                <div className="flex gap-5">
                  {contactData.socials.map((social) => {
                    const Icon = iconMap[social.icon];
                    if (!Icon) return null;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-accent transition-colors duration-200"
                        aria-label={social.label}
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <Icon size={22} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <p className="text-sm text-text-muted/60 leading-relaxed">
                {contactData.footerText}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

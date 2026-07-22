"use client";

import { useState, type ComponentType } from "react";
import { useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/Icons";
import { contactData } from "@/data/contact";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Magnetic from "@/components/ui/Magnetic";

const iconMap: Record<string, ComponentType<{ size?: number }>> = {
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  X: XIcon,
};

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [state, handleSubmit] = useForm("mvzebagv");

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!form.message.trim()) {
      errs.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    return errs;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const errs = validate();
    setErrors(errs);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errs).length > 0) return;
    handleSubmit(e).then(() => {
      if (state.succeeded) {
        setForm({ name: "", email: "", message: "" });
        setTouched({});
        setErrors({});
      }
    });
  };

  return (
    <section
      id="contact"
      className="py-24 border-b-[2.5px] border-[#111111] bg-[#fdfaf2] relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 noise-overlay" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeader
          label={contactData.label}
          headline={contactData.headline}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <Reveal delay={0.1}>
            <div className="neo-card bg-[#ffffff] p-6 sm:p-8">
              <form onSubmit={onSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-xs font-black uppercase text-[#111111] mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onBlur={() => handleBlur("name")}
                    className={`w-full bg-[#fdfaf2] border-[2px] rounded-lg px-4 py-3 text-sm font-bold text-[#111111] placeholder:text-[#111111]/40 outline-none transition-all ${
                      touched.name && errors.name
                        ? "border-[#fa8f76] bg-[#fa8f76]/5"
                        : "border-[#111111] focus:bg-[#ffffff]"
                    }`}
                    placeholder="Enter your name"
                  />
                  {touched.name && errors.name && (
                    <motion.p
                      className="text-xs font-bold text-[#fa8f76] mt-1.5"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs font-black uppercase text-[#111111] mb-2">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onBlur={() => handleBlur("email")}
                    className={`w-full bg-[#fdfaf2] border-[2px] rounded-lg px-4 py-3 text-sm font-bold text-[#111111] placeholder:text-[#111111]/40 outline-none transition-all ${
                      touched.email && errors.email
                        ? "border-[#fa8f76] bg-[#fa8f76]/5"
                        : "border-[#111111] focus:bg-[#ffffff]"
                    }`}
                    placeholder="Enter your email"
                  />
                  {touched.email && errors.email && (
                    <motion.p
                      className="text-xs font-bold text-[#fa8f76] mt-1.5"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-black uppercase text-[#111111] mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onBlur={() => handleBlur("message")}
                    className={`w-full bg-[#fdfaf2] border-[2px] rounded-lg px-4 py-3 text-sm font-bold text-[#111111] placeholder:text-[#111111]/40 outline-none transition-all resize-none ${
                      touched.message && errors.message
                        ? "border-[#fa8f76] bg-[#fa8f76]/5"
                        : "border-[#111111] focus:bg-[#ffffff]"
                    }`}
                    placeholder="Enter your message..."
                  />
                  {touched.message && errors.message && (
                    <motion.p
                      className="text-xs font-bold text-[#fa8f76] mt-1.5"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                <Magnetic strength={0.12}>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="neo-btn neo-btn-primary w-full text-sm py-3 px-6 shadow-[4px_4px_0px_#111111] hover:shadow-[5px_5px_0px_#111111] disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <span className="flex items-center justify-center gap-2">Sending...</span>
                    ) : state.succeeded ? (
                      <span className="flex items-center justify-center gap-2">Message sent! ✨</span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </Magnetic>
              </form>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col justify-between py-2 space-y-10">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="inline-block px-2.5 py-0.5 border-[1.5px] border-[#111111] bg-[#ffffff] rounded text-[10px] font-black uppercase tracking-wider mb-2">
                    Location
                  </span>
                  <p className="text-lg sm:text-xl font-black text-[#111111]/80">
                    {contactData.location}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="inline-block px-2.5 py-0.5 border-[1.5px] border-[#111111] bg-[#ffffff] rounded text-[10px] font-black uppercase tracking-wider mb-2">
                    Socials
                  </span>
                  <div className="flex gap-4 mt-2">
                    {contactData.socials.map((social) => {
                      const Icon = iconMap[social.icon];
                      if (!Icon) return null;
                      return (
                        <Magnetic key={social.label} strength={0.2}>
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 border-[2px] border-[#111111] rounded-lg bg-[#ffffff] flex items-center justify-center neo-shadow-sm hover:translate-y-[-3px] transition-all duration-150 active:translate-y-0"
                            aria-label={social.label}
                          >
                            <Icon size={18} />
                          </a>
                        </Magnetic>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              <p className="text-xs sm:text-sm font-bold text-[#111111]/50 leading-relaxed max-w-sm">
                {contactData.footerText}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// TESTIMONIALS SECTION — editable data
// ============================================================
// Add/remove/edit testimonials.

export interface Testimonial {
  /** The quoted text */
  quote: string;
  /** Person's full name */
  name: string;
  /** Person's role / title */
  role: string;
}

export interface TestimonialsData {
  /** Uppercase label above the headline */
  label: string;
  /** Main headline */
  headline: string;
  /** Array of testimonials shown in a 2-column grid */
  testimonials: Testimonial[];
}

export const testimonialsData: TestimonialsData = {
  label: "Testimonials",
  headline: "Kind words.",

  // ─── ADD / EDIT / REMOVE TESTIMONIALS BELOW ───
  testimonials: [
    {
      quote:
        "One of the most talented Flutter developers I've worked with. His ability to translate complex designs into smooth, performant mobile experiences is exceptional.",
      name: "Alexandra Chen",
      role: "Product Manager, TechVista Solutions",
    },
    {
      quote:
        "He not only delivered ahead of schedule but also suggested architectural improvements that significantly reduced our crash rate.",
      name: "Marcus Rivera",
      role: "CTO, AppForge Inc.",
    },
  ],
};

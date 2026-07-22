export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface TestimonialsData {
  label: string;
  headline: string;
  testimonials: Testimonial[];
}

export const testimonialsData: TestimonialsData = {
  label: "Testimonials",
  headline: "Kind words from people I've worked with.",

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
    {
      quote:
        "Working with him was a game-changer for our mobile team. He established clean architecture patterns that we still use today across all our Flutter projects.",
      name: "Sarah Kim",
      role: "Engineering Lead, PixelCraft Studios",
    },
    {
      quote:
        "His deep understanding of Flutter internals and state management is rare to find. He consistently shipped features that exceeded our expectations.",
      name: "James Okafor",
      role: "Founder, StartUp Labs",
    },
  ],
};

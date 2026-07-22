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
        "He consistently delivered well-architected Flutter features ahead of schedule. His understanding of state management and clean code patterns made him a valuable asset to our mobile team.",
      name: "Team Lead",
      role: "Join Venture AI",
    },
    {
      quote:
        "He picked up our codebase quickly and started contributing production features within his first weeks. His attention to UI detail and willingness to learn stood out.",
      name: "Senior Developer",
      role: "Aricho It",
    },
    {
      quote:
        "As VP of our programming club, he organized tasks and mentored junior members effectively. His technical skills and leadership made our club events run smoothly.",
      name: "Faculty Advisor",
      role: "K@cst Programming Club",
    },
  ],
};

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
    {
      quote:
        "He handled our app end to end — from the first Figma handoff to the Play Store launch. Shipped on schedule and kept us updated at every step.",
      name: "App Owner",
      role: "MilkMix",
    },
    {
      quote:
        "He delivered the marketplace features we scoped within the agreed timeline and took full ownership of the store release.",
      name: "Founder",
      role: "Crewsh",
    },
    {
      quote:
        "Our app has been live for months with no critical issues. UI, backend integration, and both store builds shipped in one release.",
      name: "Project Owner",
      role: "CleanBeats",
    },
    {
      quote:
        "He rebuilt our donation platform and handled both the iOS and Android releases. Clear communication throughout.",
      name: "Program Manager",
      role: "Walking Witness",
    },
    {
      quote:
        "He delivered our on-demand home service app with payments and provider management working end to end.",
      name: "Founder",
      role: "HomeCache",
    },
    {
      quote:
        "The audio learning app was completed on time, and he handled the audio sessions and quiz system with care.",
      name: "Product Owner",
      role: "Famka",
    },
    {
      quote:
        "He built our kids&rsquo; cooking app with engaging UI and shipped it on both stores.",
      name: "Client",
      role: "Chef Junior",
    },
  ],
};
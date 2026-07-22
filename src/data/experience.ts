export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface ExperienceData {
  label: string;
  headline: string;
  experiences: ExperienceItem[];
}

export const experienceData: ExperienceData = {
  label: "Experience",
  headline: "Where I've worked.",

  experiences: [
    {
      role: "Jr. Flutter Developer",
      company: "Join Venture AI",
      period: "Nov 2025 — Present",
      highlights: [
        "Developed and shipped 10+ Flutter applications published on Google Play and App Store",
        "Awarded Employee of the Month for outstanding performance and meaningful contributions to product delivery",
        "Contributed to R&D initiatives, helping evaluate and adopt new tools and patterns across the mobile team",
      ],
    },
    {
      role: "Internship Flutter Developer",
      company: "Aricho It",
      period: "Apr 2025 — Oct 2025",
      highlights: [
        "Built production features using GetX state management and REST API integration, translating Figma designs into pixel-perfect Flutter UI",
        "Collaborated with senior developers in real project workflows — code reviews, sprint planning, and feature delivery",
      ],
    },
  ],
};

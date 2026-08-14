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
        "Developed and shipped 10+ production mobile apps to Google Play and the App Store, across dairy farming, health, education, and social discovery domains",
        "Awarded Employee of the Month for shipping features on schedule and picking up work beyond my assigned scope",
        "Worked in the R&D team, evaluating state management and backend tooling before adopting it on client projects",
      ],
    },
    {
      role: "Internship Flutter Developer",
      company: "Aricho It",
      period: "Apr 2025 — Oct 2025",
      highlights: [
        "Built production features using GetX state management and REST API integration, converting Figma designs into working, responsive UI",
        "Worked in a senior-led team across code reviews, sprint planning, and end-to-end feature delivery",
      ],
    },
  ],
};

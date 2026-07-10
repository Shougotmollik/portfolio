// ============================================================
// EXPERIENCE SECTION — editable data
// ============================================================
// Add/remove/edit work experiences.

export interface ExperienceItem {
  /** Job title */
  role: string;
  /** Company / organization name */
  company: string;
  /** Date range string (e.g. "Jan 2023 — Present") */
  period: string;
  /** Bullet-point highlights */
  highlights: string[];
}

export interface ExperienceData {
  /** Uppercase label above the headline */
  label: string;
  /** Main headline */
  headline: string;
  /** Array of work experiences */
  experiences: ExperienceItem[];
}

export const experienceData: ExperienceData = {
  label: "Experience",
  headline: "Where I've worked.",

  // ─── ADD / EDIT / REMOVE EXPERIENCES BELOW ───
  experiences: [
    {
      role: "Senior Flutter Developer",
      company: "TechVista Solutions",
      period: "Jan 2023 — Present",
      highlights: [
        "Led mobile development for 3 cross-platform apps serving 50K+ users",
        "Reduced crash rates by 40% through architectural improvements",
        "Built CI/CD pipeline cutting release time by 60%",
        "Mentored a team of 4 junior developers",
      ],
    },
    {
      role: "Flutter Developer",
      company: "AppForge Inc.",
      period: "Mar 2021 — Dec 2022",
      highlights: [
        "Developed 5 client-facing apps across healthcare, e-commerce, and education",
        "Integrated GraphQL APIs with real-time data sync",
        "Reduced app size by 35% through code optimization",
        "Maintained 4.5+ star ratings across all published apps",
      ],
    },
    {
      role: "Junior Mobile Developer",
      company: "PixelCraft Studios",
      period: "Jun 2019 — Feb 2021",
      highlights: [
        "Built and shipped 3 Flutter apps to production",
        "Created a reusable component library adopted company-wide",
        "Won internal hackathon with AR-powered shopping experience",
      ],
    },
  ],
};

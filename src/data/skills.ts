// ============================================================
// SKILLS SECTION — editable data
// ============================================================
// Edit skill names, add/remove groups, change icon URLs, etc.

export interface SkillItem {
  /** Display name (e.g. "Flutter", "Firebase") */
  name: string;
  /** Full URL to a Devicon SVG or any icon image */
  icon: string;
}

export interface SkillGroup {
  /** Group heading (e.g. "Frameworks & Languages") */
  title: string;
  /** Skills in this group */
  items: SkillItem[];
}

export interface SkillsData {
  /** Uppercase label above the headline */
  label: string;
  /** Main headline */
  headline: string;
  /** Array of skill groups that appear as columns */
  skillGroups: SkillGroup[];
}

// Base URL for Devicon icons — change to a different CDN if needed
const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const skillsData: SkillsData = {
  label: "Skills",

  headline: "The tools I use to ship.",

  // Add/remove groups or items freely
  skillGroups: [
    {
      title: "Frameworks & Languages",
      items: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "Swift", icon: `${deviconBase}/swift/swift-original.svg` },
        { name: "Kotlin", icon: `${deviconBase}/kotlin/kotlin-original.svg` },
        { name: "TypeScript", icon: `${deviconBase}/typescript/typescript-original.svg` },
      ],
    },
    {
      title: "State Management",
      items: [
        { name: "Bloc", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Riverpod", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Provider", icon: `${deviconBase}/flutter/flutter-original.svg` },
      ],
    },
    {
      title: "Backend & Services",
      items: [
        { name: "Firebase", icon: `${deviconBase}/firebase/firebase-plain.svg` },
        { name: "REST APIs", icon: `${deviconBase}/nodejs/nodejs-original.svg` },
        { name: "GraphQL", icon: `${deviconBase}/graphql/graphql-plain.svg` },
        { name: "Supabase", icon: `${deviconBase}/supabase/supabase-original.svg` },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git", icon: `${deviconBase}/git/git-original.svg` },
        { name: "GitHub", icon: `${deviconBase}/github/github-original.svg` },
        { name: "Android Studio", icon: `${deviconBase}/androidstudio/androidstudio-original.svg` },
        { name: "Figma", icon: `${deviconBase}/figma/figma-original.svg` },
        { name: "Docker", icon: `${deviconBase}/docker/docker-original.svg` },
      ],
    },
  ],
};

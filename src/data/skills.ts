export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  items: SkillItem[];
}

export interface SkillsData {
  label: string;
  headline: string;
  skillGroups: SkillGroup[];
}

const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const skillsData: SkillsData = {
  label: "Skills",
  headline: "Technologies I use to ship production apps.",

  skillGroups: [
    {
      title: "Frameworks & Languages",
      items: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "Swift", icon: `${deviconBase}/swift/swift-original.svg` },
        { name: "Kotlin", icon: `${deviconBase}/kotlin/kotlin-original.svg` },
      ],
    },
    {
      title: "State Management",
      items: [
        { name: "GetX", icon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23D9491F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2L2 12l10 10 10-10L12 2z'/%3E%3Cpath d='M12 7l-5 5 5 5 5-5-5-5z'/%3E%3C/svg%3E` },
        { name: "Riverpod", icon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23D9491F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='4' y='4' width='16' height='16' rx='3'/%3E%3Cpath d='M4 14c2-3 4 2 6 0s4 3 6 0'/%3E%3Cpath d='M6 18h12'/%3E%3C/svg%3E` },
        { name: "Provider", icon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23D9491F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2L2 12l10 10 10-10L12 2z'/%3E%3Cpath d='M12 7l-5 5 5 5 5-5-5-5z'/%3E%3C/svg%3E` },
      ],
    },
    {
      title: "Backend & Services",
      items: [
        { name: "Firebase", icon: `${deviconBase}/firebase/firebase-plain.svg` },
        { name: "REST APIs", icon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23D9491F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 4h16v16H4z'/%3E%3Cpath d='M9 9h6v6H9z'/%3E%3Cpath d='M4 12h5'/%3E%3Cpath d='M15 12h5'/%3E%3C/svg%3E` },
        { name: "GoRouter", icon: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23D9491F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 4h16v16H4z'/%3E%3Cpath d='M9 9h6v6H9z'/%3E%3Cpath d='M4 12h5'/%3E%3Cpath d='M15 12h5'/%3E%3C/svg%3E` },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git", icon: `${deviconBase}/git/git-original.svg` },
        { name: "GitHub", icon: `${deviconBase}/github/github-original.svg` },
        { name: "Play Store", icon: `${deviconBase}/androidstudio/androidstudio-original.svg` },
        { name: "App Store", icon: `${deviconBase}/figma/figma-original.svg` },
        { name: "Figma", icon: `${deviconBase}/figma/figma-original.svg` },
      ],
    },
  ],
};

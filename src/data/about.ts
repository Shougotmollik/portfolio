export interface Stat {
  value: string;
  label: string;
}

export interface AboutData {
  label: string;
  headline: string;
  paragraphs: string[];
  stats: Stat[];
}

export const aboutData: AboutData = {
  label: "About",
  headline: "Jr. Flutter Developer with published apps and a passion for clean code.",

  paragraphs: [
    "I'm a Flutter Developer with professional experience at Join Venture AI and Aricho It, where I built and shipped 10+ production apps. I specialize in state management (GetX, Riverpod), REST API integration, and GoRouter navigation, with a focus on writing clean, maintainable code that scales.",
    "I've contributed to real-world development workflows end-to-end: translating Figma designs into pixel-perfect UI, integrating Firebase backends, and publishing apps on both Google Play and Apple App Store. I also placed 1st in my university programming contest and served as VP & Head of Task Management of the K@cst Programming Club for 2 years.",
  ],

  stats: [
    { value: "10+", label: "Published Apps" },
    { value: "1st", label: "Programming Contest" },
    { value: "BSc", label: "CSE" },
  ],
};

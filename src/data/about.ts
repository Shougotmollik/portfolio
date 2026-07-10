// ============================================================
// ABOUT SECTION — editable data
// ============================================================
// Edit any text below and the site will reflect it.

export interface Stat {
  value: string;
  label: string;
}

export interface AboutData {
  /** Uppercase label shown above the headline */
  label: string;
  /** Main headline */
  headline: string;
  /** Body paragraphs shown next to the headline */
  paragraphs: string[];
  /** Stats row (years, projects, launches, etc.) */
  stats: Stat[];
}

export const aboutData: AboutData = {
  label: "About",

  headline: "I build mobile apps that people love to use.",

  paragraphs: [
    "I specialize in Flutter and Dart, building production-grade apps used by thousands of users. From crafting beautiful UIs to integrating complex backend services, I handle the full mobile development lifecycle.",
    "My expertise spans state management (Bloc, Riverpod, Provider), Firebase, REST & GraphQL APIs, and native platform integration. I believe in clean architecture, pixel-perfect execution, and end-to-end delivery.",
  ],

  stats: [
    { value: "4+", label: "Years of Experience" },
    { value: "15+", label: "Projects Delivered" },
    { value: "10+", label: "App Store Launches" },
  ],
};

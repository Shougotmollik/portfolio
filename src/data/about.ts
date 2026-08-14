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
  headline: "Jr. Mobile App Developer with 10+ apps published on Google Play and the App Store.",

  paragraphs: [
    "I'm a mobile app developer at Join Venture AI, with earlier experience as a Flutter intern at Aricho It. In this time I've built and shipped 10+ production apps to both app stores. I use GetX and Riverpod for state management, GoRouter for navigation, and integrate Firebase and REST-based backends.",
    "My work covers the full flow of building an app: turning Figma designs into working UI, connecting backends, and publishing to Google Play and the App Store. I placed 1st in my university programming contest and served as VP & Head of Task Management of the K@cst Programming Club for 2 years, organizing tasks and mentoring junior members.",
  ],

  stats: [
    { value: "10+", label: "Published Apps" },
    { value: "1st", label: "Programming Contest" },
    { value: "2 yrs", label: "Club Leadership" },
  ],
};

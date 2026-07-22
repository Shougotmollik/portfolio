export interface ProjectTech {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  built: string;
  tech: ProjectTech[];
  images: [string, string, string, string];
  github: string;
  playStore: string;
  appStore: string;
  color: string;
}

export interface ProjectsData {
  label: string;
  headline: string;
  subtitle: string;
  projects: Project[];
}

const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const projectsData: ProjectsData = {
  label: "Projects",
  headline: "Apps I've shipped.",
  subtitle:
    "Production applications built with Flutter — from concept to published on Google Play and App Store.",

  projects: [
    {
      id: "milkmix",
      name: "MilkMix",
      tagline: "Daily farm calculator for dairy production and cost-profit analysis.",
      problem:
        "Dairy farmers in Poland had no simple tool to estimate daily milk production, calculate costs versus profit, or analyze potential output of products like cheese and butter for smarter business decisions.",
      built:
        "Built a Flutter calculator with offline-first architecture for use in rural areas. Implemented dynamic cost-benefit modeling for raw milk and derivative products. Designed a clean, intuitive interface tailored for farmers with no technical background.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "GetX", icon: `${deviconBase}/flutter/flutter-original.svg` },
      ],
      images: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=400&h=800&fit=crop",
      ],
      github: "https://github.com/shougotmollik",
      playStore: "https://play.google.com",
      appStore: "https://apps.apple.com",
      color: "#4CAF50",
    },
    {
      id: "walkingwitness",
      name: "Walking Witness",
      tagline: "Donation platform connecting U.S. donors with Ugandan communities.",
      problem:
        "Donors had no transparency into how their contributions were used. Traditional platforms lacked real-time impact tracking and direct communication between donors and the communities they supported.",
      built:
        "Developed a Flutter app enabling transparent sponsorship of community projects — livestock, small businesses, education. Features real-time progress tracking, secure donor-to-village leader messaging, and verified project photo updates.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "Firebase", icon: `${deviconBase}/firebase/firebase-plain.svg` },
        { name: "Riverpod", icon: `${deviconBase}/flutter/flutter-original.svg` },
      ],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=800&fit=crop",
      ],
      github: "https://github.com/shougotmollik",
      playStore: "https://play.google.com",
      appStore: "https://apps.apple.com",
      color: "#5C6BC0",
    },
    {
      id: "covenanthearts",
      name: "Covenant Hearts",
      tagline: "Christ-centered dating app for faith-based matching and relationships.",
      problem:
        "Christian singles lacked a dating platform aligned with their values. Mainstream apps prioritize casual dating, leaving a gap for marriage-focused connections with scripture and faith at the center.",
      built:
        "Built a Flutter dating platform with faith-based matching, verified profiles, scripture sharing, prayer interaction, and secure messaging. Designed for marriage-focused relationships with community-driven trust and safety features.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "GetX", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Firebase", icon: `${deviconBase}/firebase/firebase-plain.svg` },
      ],
      images: [
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1553729459-afe8f2e2a7a4?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop",
      ],
      github: "https://github.com/shougotmollik",
      playStore: "https://play.google.com",
      appStore: "https://apps.apple.com",
      color: "#E91E63",
    },
  ],
};

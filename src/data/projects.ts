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
  github?: string;
  playStore?: string;
  appStore?: string;
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
        { name: "Riverpod", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "Django Rest Framework", icon: `${deviconBase}/django/django-original.svg` },
        { name: 'Lottie', icon: 'https://www.vectorlogo.zone/logos/lottiefiles/lottiefiles-icon.svg' },
        { name: 'Stripe', icon: 'https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg' },
        { name: "Firebase Authentication", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
        { name: "RevenueCat", icon: "https://www.vectorlogo.zone/logos/revenuecat/revenuecat-icon.svg" }
      ],
      images: [
        "/projects/milkmix/screen-1.png",
        "/projects/milkmix/screen-2.png",
        "/projects/milkmix/screen-3.png",
        "/projects/milkmix/screen-4.png",
      ],
      // github: "https://github.com/shougotmollik",
      playStore: "https://play.google.com/store/apps/details?id=com.carbonanik.milkmix&hl=en",
      appStore: "https://apps.apple.com/us/app/milkmix/id6754192786",
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
        { name: "GetX", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Firebase Authentication", icon: `${deviconBase}/firebase/firebase-plain.svg` },
        { name: "Django Rest Framework", icon: `${deviconBase}/django/django-original.svg` },
        { name: "Stripe", icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" },
        { name: "PayPal", icon: "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg" }

      ],
      images: [
        "/projects/walkingwitness/screen-1.png",
        "/projects/walkingwitness/screen-2.png",
        "/projects/walkingwitness/screen-3.png",
        "/projects/walkingwitness/screen-4.png",
      ],
      // github: "https://github.com/shougotmollik",
      playStore: "https://play.google.com/store/apps/details?id=com.bridgesofglory.app&pcampaignid=web_share",
      appStore: "https://apps.apple.com/us/app/walking-witness/id6761861433",
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
        { name: "Riverpod Generator", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Firebase", icon: `${deviconBase}/firebase/firebase-plain.svg` },
        { name: "Django Rest Framework", icon: `${deviconBase}/django/django-original.svg` },
        { name: "Stripe", icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" },
        { name: "PayPal", icon: "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg" },
      ],
      images: [
        "/projects/covenanthearts/screen-1.png",
        "/projects/covenanthearts/screen-2.png",
        "/projects/covenanthearts/screen-3.png",
        "/projects/covenanthearts/screen-4.png",
      ],
      // github: "https://github.com/shougotmollik",
      playStore: "https://play.google.com/store/apps/details?id=com.ch.covenanthearts&pcampaignid=web_share",
      // appStore: "https://apps.apple.com",
      color: "#E91E63",
    },
  ],
};

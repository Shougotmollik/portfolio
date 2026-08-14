export interface ProjectTech {
  name: string;
  icon: string;
}

export interface ProjectScreenshot {
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  role: string;
  problem: string;
  built: string;
  techDetail: string;
  outcome: string;
  tech: ProjectTech[];
  screenshots: ProjectScreenshot[];
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
      role: "Solo Mobile Developer",
      problem:
        "Dairy farmers in Poland had no simple tool to estimate daily milk production, calculate costs versus profit, or analyze potential output of products like cheese and butter for smarter business decisions.",
      built:
        "Built a cross-platform mobile app for dairy production planning with offline-first architecture for use in rural areas. Implemented dynamic cost-benefit modeling for raw milk and derivative products. Designed a clean, intuitive interface tailored for farmers with no technical background — live on both iOS and Android.",
      techDetail:
        "Riverpod state management, offline-first persistence for rural areas, Firebase Authentication, and Stripe + RevenueCat billing for premium features.",
      outcome:
        "Shipped to Google Play and the App Store for dairy farmers across Poland, focused on a simple interface for non-technical users.",
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
      screenshots: [
        { src: "/projects/milkmix/screen-1.png", caption: "Onboarding" },
        { src: "/projects/milkmix/screen-2.png", caption: "Cost vs profit analysis per product" },
        { src: "/projects/milkmix/screen-3.png", caption: "History of calculations" },
        { src: "/projects/milkmix/screen-4.png", caption: "Recipe summary" },
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
      role: "Solo Mobile Developer",
      problem:
        "Donors had no transparency into how their contributions were used. Traditional platforms lacked real-time impact tracking and direct communication between donors and the communities they supported.",
      built:
        "Developed a cross-platform mobile app enabling transparent sponsorship of community projects — livestock, small businesses, education. Features real-time progress tracking, secure donor-to-village leader messaging, and verified project photo updates — available on both iOS and Android.",
      techDetail:
        "GetX state management, Firebase Authentication, Django REST Framework APIs, and Stripe and PayPal donation checkout.",
      outcome:
        "Connected U.S. donors with Ugandan communities through verified sponsorship and transparent, real-time impact tracking.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "GetX", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Firebase Authentication", icon: `${deviconBase}/firebase/firebase-plain.svg` },
        { name: "Django Rest Framework", icon: `${deviconBase}/django/django-original.svg` },
        { name: "Stripe", icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" },
        { name: "PayPal", icon: "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg" }
      ],
      screenshots: [
        { src: "/projects/walkingwitness/screen-1.png", caption: "Onboarding" },
        { src: "/projects/walkingwitness/screen-2.png", caption: "Project category explorer" },
        { src: "/projects/walkingwitness/screen-3.png", caption: "Home screen — listed projects" },
        { src: "/projects/walkingwitness/screen-4.png", caption: "Project details" },
      ],
      // github: "https://github.com/shougotmollik",
      playStore: "https://play.google.com/store/apps/details?id=com.bridgesofglory.app&pcampaignid=web_share",
      appStore: "https://apps.apple.com/us/app/walking-witness/id6761861433",
      color: "#5C6BC0",
    },
    {
      id: "homecache",
      name: "HomeCache",
      tagline: "Home maintenance tracker — appliances, warranties, service dates & documents in one place.",
      role: "Solo Mobile Developer",
      problem:
        "Homeowners had no single place to track appliances, warranties, service dates, and home documents. Managing a home meant scattered receipts, forgotten maintenance, and lost warranty info right when it mattered most.",
      built:
        "Built a cross-platform home maintenance mobile app for tracking appliances, warranties, service dates, and documents. Features an AI-powered chatbot grounded in the user's own home data, a home health score, data sharing with family or buyers, and maintenance logs with due-date notifications — available on both iOS and Android.",
      techDetail:
        "GetX state management, Firebase Auth with Google & Apple sign-in, cloud database synced across devices, a Node.js backend with AI chatbot integration, and Stripe subscription billing for premium homes.",
      outcome:
        "Full-stack freemium app — one free home for free users, premium tier unlocking multiple homes and advanced data sharing.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "GetX", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Firebase Auth", icon: `${deviconBase}/firebase/firebase-plain.svg` },
        { name: "Node.js", icon: `${deviconBase}/nodejs/nodejs-original.svg` },
        { name: "Stripe", icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" },
      ],
      screenshots: [
        { src: "/projects/homecache/Onboarding _  New User Sign Up _ Here's How to Get Started!.png", caption: "Onboarding — new user sign up" },
        { src: "/projects/homecache/Home Dash _ Home Overview.png", caption: "Home dashboard — overview" },
        { src: "/projects/homecache/Home Dash _ Home Health Breakdown.png", caption: "Home health breakdown" },
        { src: "/projects/homecache/Home Dash _ View Details View.png", caption: "Home details view" },
        { src: "/projects/homecache/Document Library _ View All Documents.png", caption: "Document library" },
        { src: "/projects/homecache/Provider Details _ User selects the HVAC provider and the provider details appear with a Scheduled Appointment.png", caption: "Provider details & scheduled appointment" },
        { src: "/projects/homecache/AI Chat _ Chat bot answers user's question.png", caption: "AI chatbot answers" },
        { src: "/projects/homecache/Schedule _ Link or Create Task- View of a Task does not repeat.png", caption: "Schedule — link or create task" },
        { src: "/projects/homecache/Sharing Data _ User Management _ Remove User.png", caption: "Sharing — user management" },
      ],
      color: "#FF9800",
    },
    {
      id: "famka",
      name: "Famka",
      tagline: "Audio learning app that trains focus and active listening through multi-speaker sessions.",
      role: "Solo Mobile Developer",
      problem:
        "Few people can truly focus while listening to multi-speaker conversations, and almost no tools train active listening in a structured, measurable way. Existing audio apps lacked difficulty levels, comprehension quizzes, and progress tracking to turn passive listening into a real skill.",
      built:
        "Built a cross-platform audio learning mobile app with three difficulty chapters and 15 multi-speaker listening sessions. Features a background audio player with lock-screen controls, interactive quizzes with instant feedback, daily streaks, achievement badges, and a statistics dashboard — with a Django-powered admin panel for managing content — available on both iOS and Android.",
      techDetail:
        "Riverpod Generator state management, Lottie animations for an engaging learning experience, a Django REST Framework backend, and Firebase for authentication and push notifications.",
      outcome:
        "Delivered as a complete MVP — 3 chapters, 15 sessions, gamified progress tracking, and an admin panel ready for content expansion.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "Riverpod Generator", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Lottie", icon: "https://www.vectorlogo.zone/logos/lottiefiles/lottiefiles-icon.svg" },
        { name: "Firebase Auth", icon: `${deviconBase}/firebase/firebase-plain.svg` },
        { name: "Django REST Framework", icon: `${deviconBase}/django/django-original.svg` },
      ],
      screenshots: [
        { src: "/projects/famka/onboarding.png", caption: "Onboarding" },
        { src: "/projects/famka/home screen.png", caption: "Home screen — chapters & sessions" },
        { src: "/projects/famka/quiz level.png", caption: "Quiz level selection" },
        { src: "/projects/famka/audio session.png", caption: "Audio session — multi-speaker player" },
        { src: "/projects/famka/quiz screen.png", caption: "Quiz — instant feedback" },
        { src: "/projects/famka/quiz summary.png", caption: "Quiz summary" },
        { src: "/projects/famka/quiz result.png", caption: "Quiz results" },
        { src: "/projects/famka/statistics.png", caption: "Statistics dashboard" },
      ],
      color: "#26A69A",
    },
    {
      id: "crewsh",
      name: "Crewsh",
      tagline: "Dating app for cruise ship members — matched by nationality & age, with a privacy mode.",
      role: "Solo Mobile Developer",
      problem:
        "Cruise ship communities lacked a dating platform built for life at sea. Mainstream apps rely on geolocation, leaving a gap for private matching filtered by nationality and age rather than location.",
      built:
        "Built a dating mobile app for cruise ship members with database matching by nationality and age, a privacy mode that only reveals profiles to mutual likes, and text-only chat for secure, simple conversations. Designed with a free-trial subscription model and admin controls to add new ships as they launch — available on both iOS and Android.",
      techDetail:
        "Riverpod Generator state management, Firebase Auth for secure login, a Django REST Framework backend with nationality/age filtering, and Stripe subscription billing.",
      outcome:
        "Live on Google Play — a private matching experience for cruise ship members with subscription-based monetization.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "Riverpod Generator", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Firebase Auth", icon: `${deviconBase}/firebase/firebase-plain.svg` },
        { name: "Stripe", icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" },
        { name: "Django REST Framework", icon: `${deviconBase}/django/django-original.svg` },
      ],
screenshots: [
        { src: "/projects/crewsh/screen-1.png", caption: "Onboarding" },
        { src: "/projects/crewsh/screen-2.png", caption: "Home — discovering people" },
        { src: "/projects/crewsh/screen-3.png", caption: "Matched" },
        { src: "/projects/crewsh/screen-4.png", caption: "Cruise marketplace" },
        { src: "/projects/crewsh/screen-5.png", caption: "Messaging" },
      ],
      playStore: "https://play.google.com/store/apps/details?id=com.sabbir.crewsh&pcampaignid=web_share",
      color: "#2196F3",
    },
    {
      id: "covenanthearts",
      name: "Covenant Hearts",
      tagline: "Christ-centered dating app for faith-based matching and relationships.",
      role: "Solo Mobile Developer",
      problem:
        "Christian singles lacked a dating platform aligned with their values. Mainstream apps prioritize casual dating, leaving a gap for marriage-focused connections with scripture and faith at the center.",
      built:
        "Built a faith-centered mobile app with verified profiles, scripture sharing, prayer interaction, and secure messaging. Designed for marriage-focused relationships with community-driven trust and safety features — available on both iOS and Android.",
      techDetail:
        "Riverpod Generator state management, Firebase for auth and data, Django REST Framework backend, and Stripe and PayPal subscription payments.",
      outcome:
        "Shipped a faith-centered dating platform with verified profiles and community-driven trust and safety features.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "Riverpod Generator", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Firebase", icon: `${deviconBase}/firebase/firebase-plain.svg` },
        { name: "Django Rest Framework", icon: `${deviconBase}/django/django-original.svg` },
        { name: "Stripe", icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" },
        { name: "PayPal", icon: "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg" },
      ],
      screenshots: [
        { src: "/projects/covenanthearts/screen-1.png", caption: "Onboarding" },
        { src: "/projects/covenanthearts/screen-2.png", caption: "Home screen — discovering" },
        { src: "/projects/covenanthearts/screen-3.png", caption: "Matched list" },
        { src: "/projects/covenanthearts/screen-4.png", caption: "Matched" },
      ],
      // github: "https://github.com/shougotmollik",
      playStore: "https://play.google.com/store/apps/details?id=com.ch.covenanthearts&pcampaignid=web_share",
      // appStore: "https://apps.apple.com",
      color: "#E91E63",
    },
  ],
};
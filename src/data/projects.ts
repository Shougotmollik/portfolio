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
    {
      id: "vocamatch",
      name: "Voca Match",
      tagline: "AI-powered matchmaking app where voice and personality matter more than photos.",
      role: "Solo Mobile Developer",
      problem:
        "Mainstream dating apps prioritize photos over personality, leading to shallow matches and fleeting connections. Users had no way to be judged on their voice, values, or conversation before revealing their appearance.",
      built:
        "Built a cross-platform AI matchmaking mobile app with voice-based onboarding, AI-driven compatibility scoring, and swipe-based discovery. Features voice introductions instead of photos, photo reveal after matched conversation, in-chat mini-games like Two Truths and a Lie, and a React admin dashboard for user and policy management — available on both iOS and Android.",
      techDetail:
        "GetX state management, Firebase Auth, an AI compatibility engine for matching, a Django REST Framework backend, Lottie animations, and Google Maps integration — with a React admin dashboard.",
      outcome:
        "Delivered as a full product — AI voice-first matching, a complete admin control panel, and a deployable mobile app for both stores.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "GetX", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Firebase Auth", icon: `${deviconBase}/firebase/firebase-plain.svg` },
        { name: "Django REST Framework", icon: `${deviconBase}/django/django-original.svg` },
        { name: "Lottie", icon: "https://www.vectorlogo.zone/logos/lottiefiles/lottiefiles-icon.svg" },
        { name: "Google Maps", icon: "https://www.vectorlogo.zone/logos/google_maps/google_maps-icon.svg" },
      ],
      screenshots: [
        { src: "/projects/vocamatch/Splash.png", caption: "Splash screen" },
        { src: "/projects/vocamatch/Home.png", caption: "Home" },
        { src: "/projects/vocamatch/Voice intro.png", caption: "Voice intro" },
        { src: "/projects/vocamatch/Match Request.png", caption: "Match request" },
        { src: "/projects/vocamatch/Match.jpg", caption: "Match" },
        { src: "/projects/vocamatch/Matches.png", caption: "Matches" },
        { src: "/projects/vocamatch/Favorites.png", caption: "Favorites" },
        { src: "/projects/vocamatch/inbox.png", caption: "Inbox" },
        { src: "/projects/vocamatch/inbox-2.png", caption: "Inbox — chat" },
        { src: "/projects/vocamatch/Choose Game.png", caption: "Choose game" },
        { src: "/projects/vocamatch/Game 1 Page 6.jpg", caption: "Game — Two Truths and a Lie" },
        { src: "/projects/vocamatch/Game 2 Page 2.jpg", caption: "Game — Would You Rather" },
        { src: "/projects/vocamatch/Game Over 1.jpg", caption: "Game over" },
      ],
      color: "#9C27B0",
    },
    {
      id: "vybin",
      name: "Vybin",
      tagline: "Social connection app for real-life meetups based on shared interests and proximity.",
      role: "Solo Mobile Developer",
      problem:
        "Digital social and dating apps rarely lead to real-life interaction, and safety concerns keep strangers from meeting nearby. Users had no privacy-first way to show they were open to connect and to verify each other in person before chatting.",
      built:
        "Built a cross-platform social connection mobile app with a live, privacy-focused map showing active users within a 500m radius. Features Vibe statuses, a Wave feature for nearby interaction, mutual QR-code scanning to unlock chats, respect scores, communities with events, and geofenced event vibes — available on both iOS and Android.",
      techDetail:
        "GetX state management, Google Maps for live privacy-focused location, a Django REST Framework backend, Lottie animations, Firebase Auth, and Stripe and PayPal payments.",
      outcome:
        "Built privacy-first — no location history stored — with safe mode, reporting, and an admin console for moderation.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "GetX", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Google Maps", icon: "https://www.vectorlogo.zone/logos/google_maps/google_maps-icon.svg" },
        { name: "Django REST Framework", icon: `${deviconBase}/django/django-original.svg` },
        { name: "Lottie", icon: "https://www.vectorlogo.zone/logos/lottiefiles/lottiefiles-icon.svg" },
        { name: "Firebase Auth", icon: `${deviconBase}/firebase/firebase-plain.svg` },
        { name: "Stripe", icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" },
        { name: "PayPal", icon: "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg" },
      ],
      screenshots: [
        { src: "/projects/vybin/splash.png", caption: "Splash screen" },
        { src: "/projects/vybin/home.png", caption: "Home — vibes nearby" },
        { src: "/projects/vybin/vibe.png", caption: "Vibe status" },
        { src: "/projects/vybin/notification.png", caption: "Notifications" },
        { src: "/projects/vybin/community and event choose.png", caption: "Community & event choose" },
        { src: "/projects/vybin/community.png", caption: "Community" },
        { src: "/projects/vybin/events.png", caption: "Events" },
        { src: "/projects/vybin/qr code scan.png", caption: "QR code scan" },
        { src: "/projects/vybin/qr vrification.png", caption: "QR verification" },
        { src: "/projects/vybin/Chats.png", caption: "Chats" },
      ],
      color: "#F44336",
    },
    {
      id: "chefjunior",
      name: "Chef Junior",
      tagline: "Interactive educational cooking app with recipe guidance, an avatar chef, and cooking games.",
      role: "Solo Mobile Developer",
      problem:
        "Cooking apps mostly dump recipes and text instructions, which is intimidating for beginners and kids. Users had no engaging way to learn step-by-step with visual and voice guidance, ingredient knowledge, and games all in one place.",
      built:
        "Built a cross-platform educational cooking mobile app combining recipe discovery, step-by-step cooking guidance with an interactive avatar, and engaging cooking games. Features voice-assisted instructions, ingredient history and fun facts, favorite recipes, a materials and shopping checklist, and multilingual support — with an admin panel for recipe, user, and game management — available on both iOS and Android.",
      techDetail:
        "GetX state management, Lottie animations for the cooking avatar, a Django REST Framework backend with admin analytics, Firebase Auth, and multilingual content support.",
      outcome:
        "Delivered as a family-friendly MVP — educational, multilingual, and designed for both beginners and experienced cooks.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "GetX", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Lottie", icon: "https://www.vectorlogo.zone/logos/lottiefiles/lottiefiles-icon.svg" },
        { name: "Django REST Framework", icon: `${deviconBase}/django/django-original.svg` },
        { name: "Firebase Auth", icon: `${deviconBase}/firebase/firebase-plain.svg` },
      ],
      screenshots: [
        { src: "/projects/chefjunior/Home page.png", caption: "Home — recipe discovery" },
        { src: "/projects/chefjunior/See all.png", caption: "See all recipes" },
        { src: "/projects/chefjunior/Ingredient page.png", caption: "Ingredient page" },
        { src: "/projects/chefjunior/Ingredient details page.png", caption: "Ingredient details" },
        { src: "/projects/chefjunior/my favourite.png", caption: "My favorites" },
        { src: "/projects/chefjunior/Avatar.png", caption: "Avatar guide" },
        { src: "/projects/chefjunior/Game.png", caption: "Game" },
        { src: "/projects/chefjunior/Crossword puzzle.png", caption: "Crossword puzzle" },
        { src: "/projects/chefjunior/Word search game.png", caption: "Word search game" },
      ],
      color: "#FFB300",
    },
    {
      id: "cleanbeats",
      name: "CleanBeats",
      tagline: "Simple app that uses AI to remove bad words from music so anyone can enjoy it.",
      role: "Solo Mobile Developer",
      problem:
        "Parents and teachers can't easily give kids access to popular music — explicit lyrics are everywhere and radio edits don't exist for most songs. Users needed a simple app that cleans profanity automatically so any song is safe for anyone to listen to.",
      built:
        "Built a simple cross-platform music app powered by an AI model that detects bad words in a track and removes them, producing a clean version anyone can listen to. Features easy one-tap cleaning, a clean playback library, and instant results — available on both iOS and Android.",
      techDetail:
        "GetX state management, an AI model for profanity detection and removal, a FastAPI backend, and Stripe for subscriptions.",
      outcome:
        "Delivered as a working MVP — one tap turns any song family-friendly for everyone to enjoy.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "GetX", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "FastAPI", icon: `${deviconBase}/fastapi/fastapi-original.svg` },
        { name: "Stripe", icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg" },
      ],
      screenshots: [
        { src: "/projects/cleanbeats/home.png", caption: "Home" },
        { src: "/projects/cleanbeats/upload music.png", caption: "Upload music" },
        { src: "/projects/cleanbeats/profanity remover.png", caption: "Profanity remover" },
        { src: "/projects/cleanbeats/subscription.jpg", caption: "Subscription" },
      ],
      color: "#00B8D4",
    },
    {
      id: "familyside",
      name: "FamilySide",
      tagline: "Community platform that helps families discover trusted local places, activities, services, and events.",
      role: "Solo Mobile Developer",
      problem:
        "Modern parents struggle to find reliable, family-friendly services, activities, events, and recommendations in one place. Existing apps weren't built for families, lacked trusted community reviews, and gave local providers no structured way to reach the right audience.",
      built:
        "Built a mobile-first community platform connecting families with trusted local places, activities, services, and events. Features personalized discovery, map and list exploration, reviews and bookmarking, provider profiles, advanced filters, multilingual support, and an admin moderation system — available on both iOS and Android.",
      techDetail:
        "Riverpod Generator state management, Firebase Auth, Google Maps for location-based discovery, and a FastAPI backend with admin moderation.",
      outcome:
        "Delivered as a scalable MVP — trusted local discovery for families and a structured ecosystem for service providers.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "Riverpod Generator", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "FastAPI", icon: `${deviconBase}/fastapi/fastapi-original.svg` },
        { name: "Firebase Auth", icon: `${deviconBase}/firebase/firebase-plain.svg` },
      ],
      screenshots: [
        { src: "/projects/familyside/onboarding.png", caption: "Onboarding" },
        { src: "/projects/familyside/Home.png", caption: "Home discovery feed" },
        { src: "/projects/familyside/Search.png", caption: "Search" },
        { src: "/projects/familyside/exploere.png", caption: "Explore" },
        { src: "/projects/familyside/explorer map.png", caption: "Explore map" },
        { src: "/projects/familyside/creation.png", caption: "Creation" },
        { src: "/projects/familyside/analytics.png", caption: "Analytics" },
      ],
      color: "#455A64",
    },
  ],
};
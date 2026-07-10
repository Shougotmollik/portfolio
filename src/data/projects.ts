// ============================================================
// PROJECTS SECTION — editable data
// ============================================================
// Add/remove/edit projects. Each project has:
//   - name, tagline, problem, built  (text that appears on the card)
//   - images[]  — first is the main square image, rest are 3 thumbnails
//   - tech[]    — skill chips shown at the bottom of the card
//   - github / playStore / appStore  — link URLs for the pill buttons
//   - color     — accent color for the card glow (any CSS hex color)

export interface ProjectTech {
  name: string;
  icon: string;
}

export interface Project {
  /** Unique id (used for React keys, not displayed) */
  id: string;
  /** Project name */
  name: string;
  /** Short tagline under the name */
  tagline: string;
  /** "The Problem" paragraph */
  problem: string;
  /** "What I Built" paragraph */
  built: string;
  /** Tech stack chips shown on the card */
  tech: ProjectTech[];
  /** 4 image URLs: [main, thumb1, thumb2, thumb3] */
  images: [string, string, string, string];
  /** GitHub repository URL */
  github: string;
  /** Google Play Store URL */
  playStore: string;
  /** Apple App Store URL */
  appStore: string;
  /** Accent color for the card glow effect */
  color: string;
}

export interface ProjectsData {
  /** Uppercase label above the headline */
  label: string;
  /** Main headline */
  headline: string;
  /** Subtitle paragraph below the headline */
  subtitle: string;
  /** Array of projects (each one becomes a card) */
  projects: Project[];
}

const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const projectsData: ProjectsData = {
  label: "Projects",
  headline: "Selected work.",
  subtitle:
    "Each project represents a real problem solved end-to-end — from product thinking through architecture to polished UI.",

  // ─── ADD / EDIT / REMOVE PROJECTS BELOW ───
  projects: [
    {
      id: "fitpulse",
      name: "FitPulse",
      tagline: "A social fitness app that connects runners for local group meetups.",
      problem:
        "Running alone gets boring fast, and most fitness apps lack a real community layer. Existing social features are usually just leaderboards — not actual coordination.",
      built:
        "Built the entire mobile client in Flutter with offline-first sync, real-time chat via Firebase, and a custom animation system for the live route map. Integrated Strava API for activity import and Apple Health for biometric tracking.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "Firebase", icon: `${deviconBase}/firebase/firebase-plain.svg` },
        { name: "Bloc", icon: `${deviconBase}/flutter/flutter-original.svg` },
      ],
      images: [
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=400&h=800&fit=crop",
      ],
      github: "https://github.com",
      playStore: "https://play.google.com",
      appStore: "https://apps.apple.com",
      color: "#5B7FDE",
    },
    {
      id: "pennywise",
      name: "PennyWise",
      tagline: "A personal finance tracker with intelligent budgeting and spending insights.",
      problem:
        "Most budgeting apps are either too simplistic (envelope systems) or too complex (spreadsheet-style). Users need something that feels natural — just smart defaults with room to customize.",
      built:
        "Designed and built the full app in Flutter with Riverpod for state management. Plaid API integration for automatic transaction import, custom charting engine for spending visualization, and a ML layer for predictive budgeting.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "Riverpod", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "REST API", icon: `${deviconBase}/nodejs/nodejs-original.svg` },
      ],
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=800&fit=crop",
      ],
      github: "https://github.com",
      playStore: "https://play.google.com",
      appStore: "https://apps.apple.com",
      color: "#6FA88A",
    },
    {
      id: "marketnode",
      name: "MarketNode",
      tagline: "A marketplace connecting local artisans with customers who value handmade goods.",
      problem:
        "Artisans struggle to reach local customers without paying high commissions to Etsy or Amazon. Buyers want to discover unique handmade items but don't know where to look locally.",
      built:
        "Developed the full cross-platform marketplace with Flutter and Provider. Implemented real-time bid/offer negotiation, in-app messaging, and a location-based discovery engine using Google Maps API. Built the admin dashboard with Firebase Analytics.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Firebase", icon: `${deviconBase}/firebase/firebase-plain.svg` },
        { name: "Provider", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "GraphQL", icon: `${deviconBase}/graphql/graphql-plain.svg` },
      ],
      images: [
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1553729459-afe8f2e2a7a4?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop",
      ],
      github: "https://github.com",
      playStore: "https://play.google.com",
      appStore: "https://apps.apple.com",
      color: "#D4876A",
    },
    {
      id: "habitforge",
      name: "HabitForge",
      tagline: "A habit-building app with streaks, accountability partners, and smart reminders.",
      problem:
        "Habit trackers either lack accountability features or overwhelm users with too many options. People need a simple, focused system that keeps them consistent without feeling like a chore.",
      built:
        "Built the app with Flutter and Bloc, featuring a unique streak-based gamification engine. Implemented push notification scheduling with smart timing based on user behavior patterns. Built the accountability partner system with real-time progress sharing via Firebase.",
      tech: [
        { name: "Flutter", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Dart", icon: `${deviconBase}/dart/dart-original.svg` },
        { name: "Bloc", icon: `${deviconBase}/flutter/flutter-original.svg` },
        { name: "Firebase", icon: `${deviconBase}/firebase/firebase-plain.svg` },
      ],
      images: [
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=800&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=800&fit=crop",
      ],
      github: "https://github.com",
      playStore: "https://play.google.com",
      appStore: "https://apps.apple.com",
      color: "#8B7EC8",
    },
  ],
};

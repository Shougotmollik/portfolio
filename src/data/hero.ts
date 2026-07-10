// ============================================================
// HERO SECTION — editable data
// ============================================================
// Edit any string/image/link below and the site will reflect it.

export interface HeroData {
  /** Small uppercase label above the main heading */
  roleLabel: string;
  /** Main heading — first word(s) + accented word */
  heading: {
    first: string;
    accent: string;
  };
  /** Subtitle paragraph below the heading */
  subtitle: string;
  /** URL for the downloadable resume */
  resumeUrl: string;
  /** Primary CTA button (e.g. Download Resume) */
  ctaPrimary: {
    label: string;
    href: string;
  };
  /** Secondary CTA button (e.g. Contact Me) */
  ctaSecondary: {
    label: string;
    href: string;
  };
  /** 3 phone mockup images for the fan layout (left, center, right) */
  phoneImages: [string, string, string];
}

export const heroData: HeroData = {
  roleLabel: "Flutter Mobile Engineer",

  heading: {
    first: "Shougot",
    accent: "Mollik",
  },

  subtitle:
    "Building high-performance cross-platform mobile experiences with Flutter & Dart.",

  resumeUrl: "/resume.pdf",

  ctaPrimary: {
    label: "Download Resume",
    href: "/resume.pdf",
  },

  ctaSecondary: {
    label: "Contact Me",
    href: "#contact",
  },

  // Replace these Unsplash URLs with your own app screenshots
  phoneImages: [
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop",
  ],
};

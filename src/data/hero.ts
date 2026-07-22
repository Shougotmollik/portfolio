export interface HeroData {
  roleLabel: string;
  heading: {
    first: string;
    accent: string;
  };
  subtitle: string;
  resumeUrl: string;
  ctaPrimary: {
    label: string;
    href: string;
  };
  ctaSecondary: {
    label: string;
    href: string;
  };
  phoneImages: [string, string, string];
}

export const heroData: HeroData = {
  roleLabel: "App Developer",

  heading: {
    first: "Hi, I'm",
    accent: "Shougot Mollik",
  },

  subtitle:
    "I build cross-platform mobile apps that solve real problems. 10+ apps published on Google Play and App Store — from dairy farming calculators to donation platforms and faith-based apps.",

  resumeUrl: "/resume.pdf",

  ctaPrimary: {
    label: "Download Resume",
    href: "/resume.pdf",
  },

  ctaSecondary: {
    label: "Contact Me",
    href: "#contact",
  },

  phoneImages: [
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop",
  ],
};

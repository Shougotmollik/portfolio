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
  socials: {
    github: string;
    linkedin: string;
  };
  phoneImages: [string, string, string];
}

export const heroData: HeroData = {
  roleLabel: "Mobile App Developer",

  heading: {
    first: "Hi, I'm",
    accent: "Shougot Mollik",
  },

  subtitle:
    "I'm a mobile app developer with 10+ apps published on Google Play and the App Store. I build for iOS and Android with Flutter, using GetX and Riverpod for state management and Firebase or Django REST Framework/FastAPI backends.",

  resumeUrl: "/shougot%20mollik.pdf",

  ctaPrimary: {
    label: "Download Resume",
    href: "/shougot%20mollik.pdf",
  },

  ctaSecondary: {
    label: "Contact Me",
    href: "#contact",
  },

  socials: {
    github: "https://github.com/shougotmollik",
    linkedin: "https://linkedin.com/in/shougotmollik",
  },

  phoneImages: [
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop",
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=800&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=800&fit=crop",
  ],
};

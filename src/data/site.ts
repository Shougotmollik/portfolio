export interface NavLink {
  label: string;
  href: string;
}

export interface SiteData {
  name: string;
  description: string;
  navLinks: NavLink[];
  socials: {
    label: string;
    icon: "Github" | "Linkedin" | "X";
    href: string;
  }[];
}

export const siteData: SiteData = {
  name: "Shougot Mollik",

  description:
    "Jr. Mobile App Developer | 10+ Published Apps on Play Store & App Store | GetX, Riverpod, Firebase",

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  socials: [
    { label: "GitHub", icon: "Github", href: "https://github.com/shougotmollik" },
    { label: "LinkedIn", icon: "Linkedin", href: "https://linkedin.com/in/shougotmollik" },
    { label: "X / Twitter", icon: "X", href: "https://twitter.com/shougotmollik" },
  ],
};

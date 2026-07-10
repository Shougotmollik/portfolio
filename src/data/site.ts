// ============================================================
// SITE-WIDE CONFIG — used by Navbar, Footer, and layout
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteData {
  /** Your name / brand — appears in Navbar and Footer */
  name: string;
  /** Short description — appears in Footer */
  description: string;
  /** Navigation links for the Navbar */
  navLinks: NavLink[];
  /** Social links for the Footer */
  socials: {
    label: string;
    icon: "Github" | "Linkedin" | "X";
    href: string;
  }[];
}

export const siteData: SiteData = {
  name: "Shougot Mollik",

  description:
    "Flutter Mobile Engineer. Building cross-platform experiences with clean architecture and thoughtful design.",

  // ─── NAVIGATION LINKS (Navbar + Footer) ───
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  // ─── SOCIAL LINKS (Footer) ───
  socials: [
    { label: "GitHub", icon: "Github", href: "https://github.com" },
    { label: "LinkedIn", icon: "Linkedin", href: "https://linkedin.com" },
    { label: "X / Twitter", icon: "X", href: "https://twitter.com" },
  ],
};

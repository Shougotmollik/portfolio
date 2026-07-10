// ============================================================
// CONTACT SECTION — editable data
// ============================================================
// Edit your email, location, social links, form text, etc.

export interface SocialLink {
  /** Display label (e.g. "GitHub") */
  label: string;
  /** Icon component name — must match a key in the icon map inside Contact.tsx */
  icon: "Github" | "Linkedin" | "X";
  /** Full URL */
  href: string;
}

export interface ContactData {
  /** Uppercase label above the headline */
  label: string;
  /** Main headline */
  headline: string;
  /** Placeholder text for each form input */
  formPlaceholders: {
    name: string;
    email: string;
    message: string;
  };
  /** Email address displayed and used as mailto: link */
  emailAddress: string;
  /** Location text (e.g. "Remote / Worldwide") */
  location: string;
  /** Social media links shown as icon buttons */
  socials: SocialLink[];
  /** Text paragraph at the bottom of the contact info column */
  footerText: string;
}

export const contactData: ContactData = {
  label: "Contact",
  headline: "Let's work together.",

  formPlaceholders: {
    name: "Your name",
    email: "Your email",
    message: "Your message",
  },

  emailAddress: "hello@shougot.dev",

  location: "Remote / Worldwide",

  // ─── ADD / EDIT / REMOVE SOCIAL LINKS BELOW ───
  socials: [
    { label: "GitHub", icon: "Github", href: "https://github.com" },
    { label: "LinkedIn", icon: "Linkedin", href: "https://linkedin.com" },
    { label: "X / Twitter", icon: "X", href: "https://twitter.com" },
  ],

  footerText:
    "Currently open to freelance projects and full-time opportunities. I typically respond within 24 hours.",
};

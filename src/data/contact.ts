export interface SocialLink {
  label: string;
  icon: "Github" | "Linkedin" | "X";
  href: string;
}

export interface ContactData {
  label: string;
  headline: string;
  formPlaceholders: {
    name: string;
    email: string;
    message: string;
  };
  location: string;
  socials: SocialLink[];
  footerText: string;
}

export const contactData: ContactData = {
  label: "Contact",
  headline: "Have an app idea or an open role? Let's talk.",

  formPlaceholders: {
    name: "Your name",
    email: "Your email",
    message: "Tell me about your project or opportunity",
  },

  location: "Mohakhali, Dhaka-1212",

  socials: [
    { label: "GitHub", icon: "Github", href: "https://github.com/shougotmollik" },
    { label: "LinkedIn", icon: "Linkedin", href: "https://linkedin.com/in/shougotmollik" },
    { label: "X / Twitter", icon: "X", href: "https://twitter.com/shougotmollik" },
  ],

  footerText:
    "Open to Jr. Mobile App Developer roles, freelance projects, and contract work. I typically respond within 24 hours.",
};

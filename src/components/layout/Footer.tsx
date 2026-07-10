import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/Icons";

const socialLinks = [
  { label: "GitHub", icon: GithubIcon, href: "https://github.com" },
  { label: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com" },
  { label: "X / Twitter", icon: XIcon, href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer className="section-dark py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <div>
            <span className="text-xl font-semibold tracking-tight text-text-dark">
              Shougot Mollik
            </span>
            <p className="mt-3 text-sm text-text-muted max-w-sm leading-relaxed">
              Flutter Mobile Engineer. Building cross-platform experiences with
              clean architecture and thoughtful design.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-text-dark transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-8">
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-text-muted tracking-widest uppercase">
                Navigate
              </h4>
              <ul className="space-y-2">
                {["About", "Skills", "Projects", "Experience", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-sm text-text-muted hover:text-text-dark transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border-dark">
          <p className="text-xs text-text-muted/60">
            &copy; {new Date().getFullYear()} Shougot Mollik.
          </p>
        </div>
      </div>
    </footer>
  );
}

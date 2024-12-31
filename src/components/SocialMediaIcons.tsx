import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

interface SocialMediaIconsProps {
  links: Array<{ to: string; label: string }>;
}

export const SocialMediaIcons = ({ links }: SocialMediaIconsProps) => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <div className="bg-accent py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 md:gap-4">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-xs md:text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
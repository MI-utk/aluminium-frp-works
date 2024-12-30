import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const SocialMediaIcons = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <div className="bg-accent py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-end gap-4">
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
  );
};
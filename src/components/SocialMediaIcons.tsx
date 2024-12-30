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
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Link
              to="/price-circular"
              className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm"
            >
              Price Circular
            </Link>
            <Link
              to="/find-dealer"
              className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm"
            >
              Find a Dealer
            </Link>
            <Link
              to="/careers"
              className="text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm"
            >
              Careers
            </Link>
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
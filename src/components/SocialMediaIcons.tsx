import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const SocialMediaIcons = () => {
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/company/masters-india-private-limited", 
      label: "LinkedIn" 
    },
  ];

  return (
    <div className="bg-accent py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 md:gap-4">
            <Link
              to="/price-circular"
              className="text-xs md:text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
            >
              Price Circular
            </Link>
            <Link
              to="/find-dealer"
              className="text-xs md:text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
            >
              Find a Dealer
            </Link>
            <Link
              to="/partners"
              className="text-xs md:text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
            >
              Partners
            </Link>
            <Link
              to="/careers"
              className="text-xs md:text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
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
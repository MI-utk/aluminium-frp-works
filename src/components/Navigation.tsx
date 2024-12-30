import { Link, useLocation } from "react-router-dom";
import { Home, Package, FileText, MapPin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/products", label: "Products", icon: Package },
    { to: "/price-circular", label: "Price Circular", icon: FileText },
    { to: "/find-dealer", label: "Find a Dealer", icon: MapPin },
    { to: "/contact", label: "Contact Us", icon: Mail },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src="/lovable-uploads/fa95f525-b749-4266-a065-8a88eaf1f01c.png"
                alt="Masters India Logo"
                className="h-12 w-12"
              />
            </Link>
            <span className="text-white text-xl font-semibold">Masters India</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {links.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors",
                    location.pathname === to
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
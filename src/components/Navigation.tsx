import { Link, useLocation } from "react-router-dom";
import { Home, Package, FileText, MapPin, Mail, Menu, X, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home", icon: Home },
    { to: "/products", label: "Products", icon: Package },
    { to: "/price-circular", label: "Price Circular", icon: FileText },
    { to: "/find-dealer", label: "Find a Dealer", icon: MapPin },
    { to: "/careers", label: "Careers", icon: Briefcase },
    { to: "/contact", label: "Contact Us", icon: Mail },
  ];

  return (
    <>
      <div className="h-20 w-full" /> {/* Spacer for fixed navbar */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm">
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
            
            {/* Desktop Navigation */}
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

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 mt-6">
                    {links.map(({ to, label, icon: Icon }) => (
                      <Link
                        key={to}
                        to={to}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded-lg",
                          location.pathname === to
                            ? "bg-gray-100"
                            : "hover:bg-gray-50"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
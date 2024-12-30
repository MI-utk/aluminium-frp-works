import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
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
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/price-circular", label: "Price Circular" },
    { to: "/find-dealer", label: "Find a Dealer" },
    { to: "/blog", label: "Blog" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <div className="h-20 w-full" />
      <nav className="fixed top-0 w-full z-50 bg-primary/90 backdrop-blur-sm">
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
              <span className="text-primary-foreground text-xl font-semibold">Masters India</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {links.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors",
                      location.pathname === to
                        ? "text-primary-foreground"
                        : "text-primary-foreground/80 hover:text-primary-foreground"
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-primary-foreground">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-4 mt-6">
                    {links.map(({ to, label }) => (
                      <Link
                        key={to}
                        to={to}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "px-3 py-2 text-sm font-medium transition-colors rounded-lg",
                          location.pathname === to
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-primary/10"
                        )}
                      >
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
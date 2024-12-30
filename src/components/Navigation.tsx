import { useState } from "react";
import { Link } from "react-router-dom";
import { SocialMediaIcons } from "./SocialMediaIcons";
import { MobileNavigation } from "./MobileNavigation";
import { DesktopNavigation } from "./DesktopNavigation";

const products = [
  { 
    id: "wire-rod", 
    title: "Wire Rod",
    image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=100&h=100&q=80"
  },
  { 
    id: "wire", 
    title: "Wire",
    image: "https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?auto=format&fit=crop&w=100&h=100&q=80"
  },
  { 
    id: "cast-coil", 
    title: "Cast Coil",
    image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&w=100&h=100&q=80"
  },
  { 
    id: "cold-rolled-coil", 
    title: "Cold Rolled Coil",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=100&h=100&q=80"
  },
  { 
    id: "color-coated-coil", 
    title: "Color Coated Coil",
    image: "https://images.unsplash.com/photo-1589792923962-537704632910?auto=format&fit=crop&w=100&h=100&q=80"
  },
  { 
    id: "sheets", 
    title: "Sheets",
    image: "https://images.unsplash.com/photo-1584727638096-042c45049ebe?auto=format&fit=crop&w=100&h=100&q=80"
  },
  { 
    id: "chequered-sheets", 
    title: "Chequered Sheets",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=100&h=100&q=80"
  },
  { 
    id: "roofing-profiled-sheets", 
    title: "Roofing Profiled Sheets",
    image: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=100&h=100&q=80"
  },
  { 
    id: "foil", 
    title: "Foil",
    image: "https://images.unsplash.com/photo-1589739900266-5c1a21e95d6e?auto=format&fit=crop&w=100&h=100&q=80"
  },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/price-circular", label: "Price Circular" },
    { to: "/find-dealer", label: "Find a Dealer" },
    { to: "/blog", label: "Blog" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <div className="h-28 w-full" /> {/* Increased height to accommodate social icons */}
      <header className="fixed top-0 w-full z-50">
        <SocialMediaIcons />
        <nav className="bg-primary/90 backdrop-blur-sm">
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
                <span className="text-primary-foreground text-xl font-semibold">
                  Masters India
                </span>
              </div>
              
              <DesktopNavigation links={links} products={products} />
              <MobileNavigation 
                links={links} 
                products={products} 
                isOpen={isOpen} 
                setIsOpen={setIsOpen} 
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

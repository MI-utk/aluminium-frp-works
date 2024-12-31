import { useState } from "react";
import { Link } from "react-router-dom";
import { SocialMediaIcons } from "./SocialMediaIcons";
import { MobileNavigation } from "./MobileNavigation";
import { DesktopNavigation } from "./DesktopNavigation";

const products = [
  { 
    id: "wire-rod", 
    title: "Wire Rod",
    image: "/lovable-uploads/fe0c3444-a472-41e6-abbc-5cde292a07aa.png"
  },
  { 
    id: "wire", 
    title: "Wire",
    image: "/lovable-uploads/8abcf15c-2e50-482f-ae80-70b286f8751e.png"
  },
  { 
    id: "cast-coil", 
    title: "Cast Coil",
    image: "/lovable-uploads/4a63b725-d382-4d31-a856-02f05274ba4c.png"
  },
  { 
    id: "cold-rolled-coil", 
    title: "Cold Rolled Coil",
    image: "/lovable-uploads/1a07da59-bb48-4600-b6c5-bcd3db01aa6c.png"
  },
  { 
    id: "color-coated-coil", 
    title: "Color Coated Coil",
    image: "/lovable-uploads/69a3d9ce-e613-4d3f-af08-0deb15fddfeb.png"
  },
  { 
    id: "sheets", 
    title: "Sheets",
    image: "/lovable-uploads/27bb0e07-cf67-4712-875d-e40d3ff5e251.png"
  },
  { 
    id: "chequered-sheets", 
    title: "Chequered Sheets",
    image: "/lovable-uploads/b8b1cfd0-338d-4883-9fb1-6d66605b1735.png"
  },
  { 
    id: "roofing-profiled-sheets", 
    title: "Alushade Roofing",
    image: "/lovable-uploads/6c3c8269-75ae-4a84-9f5f-d5e40abd5d69.png"
  },
  { 
    id: "foil", 
    title: "Foil",
    image: "/lovable-uploads/09d9b96c-d246-4e55-a443-552d7db5a523.png"
  },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact Us" },
    { 
      to: "https://drive.google.com/file/d/1xLIlj3HrqJGfiSHvBOoBL9IO4avf3trQ/view?usp=sharing", 
      label: "Download Brochure",
      external: true 
    },
  ];

  return (
    <>
      <div className="h-28 w-full" />
      <header className="fixed top-0 w-full z-50">
        <SocialMediaIcons />
        <nav className="bg-primary/90 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center gap-4">
                <Link to="/" className="flex items-center gap-3">
                  <img
                    src="/lovable-uploads/fa95f525-b749-4266-a065-8a88eaf1f01c.png"
                    alt="Masters India Logo"
                    className="h-12 w-12"
                  />
                  <span className="text-accent-foreground font-semibold">Masters India</span>
                </Link>
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
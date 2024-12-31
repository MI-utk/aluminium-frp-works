import { useState } from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { SocialMediaIcons } from "./SocialMediaIcons";

const products = [
  {
    id: "wire-rod",
    title: "Wire Rod",
    image: "/lovable-uploads/44bf5b71-c40f-4183-bc84-c468bbaecc1e.png"
  },
  {
    id: "wire",
    title: "Wire",
    image: "/lovable-uploads/3a7f22aa-e896-4f66-93f4-7dbadcdc3700.png"
  },
  {
    id: "cast-coil",
    title: "Cast Coil",
    image: "/lovable-uploads/714582d5-d39f-4dbf-abe6-7a8062d360a4.png"
  },
  {
    id: "cold-rolled-coil",
    title: "Cold Rolled Coil",
    image: "/lovable-uploads/8b52d2fa-fef3-439a-89bc-69b60067a172.png"
  },
  {
    id: "color-coated-coil",
    title: "Color Coated Coil",
    image: "/lovable-uploads/994a30e1-483f-4e6d-9604-3d897b132a58.png"
  },
  {
    id: "sheets",
    title: "Sheets",
    image: "/lovable-uploads/38907c90-48f6-4002-8e3b-39567e4e624a.png"
  },
  {
    id: "chequered-sheets",
    title: "Chequered Sheets",
    image: "/lovable-uploads/07589213-a068-4121-b493-690d50a1e0cf.png"
  },
  {
    id: "roofing-profiled-sheets",
    title: "Alushade Roofing",
    image: "/lovable-uploads/fa95f525-b749-4266-a065-8a88eaf1f01c.png"
  },
  {
    id: "foil",
    title: "Foil",
    image: "/lovable-uploads/845c56c1-441a-458d-a269-16f51cc411b7.png"
  }
];

const mainLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  { 
    to: "https://drive.google.com/file/d/1xLIlj3HrqJGfiSHvBOoBL9IO4avf3trQ/view?usp=sharing", 
    label: "Download Brochure",
    external: true
  }
];

const topLinks = [
  { to: "/partners", label: "Partners" },
  { to: "/careers", label: "Careers" },
  { to: "/find-dealer", label: "Find Dealer" },
  { to: "/price-circular", label: "Price Circular" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SocialMediaIcons links={topLinks} />
      <header className="sticky top-0 z-50 w-full border-b bg-primary">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <DesktopNavigation links={mainLinks} products={products} />
          <MobileNavigation 
            links={[...topLinks, ...mainLinks]} 
            products={products}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </header>
    </>
  );
};
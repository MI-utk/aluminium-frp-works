import { useState } from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

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
    image: "/lovable-uploads/dbab3f33-e277-462e-b893-ba8b94f21cad.png"
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
    image: "/lovable-uploads/55592bc3-9f3a-4aca-9c90-9c9f3d8d43c4.png"
  },
  {
    id: "foil",
    title: "Foil",
    image: "/lovable-uploads/845c56c1-441a-458d-a269-16f51cc411b7.png"
  }
];

const links = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  { to: "/partners", label: "Partners" },
  { to: "/careers", label: "Careers" },
  { to: "/find-dealer", label: "Find Dealer" },
  { to: "/price-circular", label: "Price Circular" },
  { 
    to: "https://drive.google.com/file/d/1xLIlj3HrqJGfiSHvBOoBL9IO4avf3trQ/view?usp=sharing", 
    label: "Download Brochure",
    external: true
  }
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <DesktopNavigation links={links} products={products} />
        <MobileNavigation 
          links={links} 
          products={products}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </header>
  );
};
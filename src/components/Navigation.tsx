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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

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
  const location = useLocation();
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
                <Link
                  to="/"
                  className={cn(
                    "px-3 py-2 text-sm font-medium transition-colors",
                    location.pathname === "/"
                      ? "text-primary-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  )}
                >
                  Home
                </Link>

                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="bg-transparent text-primary-foreground/80 hover:text-primary-foreground hover:bg-transparent">Products</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid grid-cols-2 gap-3 p-4 w-[400px] bg-white">
                          {products.map((product) => (
                            <Link
                              key={product.id}
                              to={`/products/${product.id}`}
                              className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md"
                            >
                              <img 
                                src={product.image} 
                                alt={product.title}
                                className="w-10 h-10 rounded-md object-cover"
                              />
                              <span className="text-sm font-medium">{product.title}</span>
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                {links.slice(1).map(({ to, label }) => (
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
                    <div className="border-t pt-4">
                      <h3 className="px-3 text-sm font-semibold mb-2">Products</h3>
                      {products.map((product) => (
                        <Link
                          key={product.id}
                          to={`/products/${product.id}`}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-primary/10 rounded-lg"
                        >
                          <img 
                            src={product.image} 
                            alt={product.title}
                            className="w-8 h-8 rounded-md object-cover"
                          />
                          {product.title}
                        </Link>
                      ))}
                    </div>
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
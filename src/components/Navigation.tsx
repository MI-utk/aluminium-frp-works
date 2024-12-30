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
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const products = [
  { id: "wire-rod", title: "Wire Rod" },
  { id: "wire", title: "Wire" },
  { id: "cast-coil", title: "Cast Coil" },
  { id: "cold-rolled-coil", title: "Cold Rolled Coil" },
  { id: "color-coated-coil", title: "Color Coated Coil" },
  { id: "sheets", title: "Sheets" },
  { id: "chequered-sheets", title: "Chequered Sheets" },
  { id: "roofing-profiled-sheets", title: "Roofing Profiled Sheets" },
  { id: "foil", title: "Foil" },
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
                              className="block p-2 hover:bg-gray-100 rounded-md"
                            >
                              {product.title}
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
                          className="block px-3 py-2 text-sm hover:bg-primary/10 rounded-lg"
                        >
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
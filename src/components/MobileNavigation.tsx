import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileNavigationProps {
  links: Array<{ to: string; label: string }>;
  products: Array<{ id: string; title: string; image: string }>;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MobileNavigation = ({ links, products, isOpen, setIsOpen }: MobileNavigationProps) => {
  const location = useLocation();

  return (
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
  );
};
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface DesktopNavigationProps {
  links: Array<{ to: string; label: string; external?: boolean }>;
  products: Array<{ id: string; title: string; image: string }>;
}

export const DesktopNavigation = ({ links, products }: DesktopNavigationProps) => {
  return (
    <div className="hidden md:block">
      <div className="flex items-center space-x-8">
        <Link
          to="/"
          className={cn(
            "px-3 py-2 text-sm font-medium transition-colors",
            "text-primary-foreground/80 hover:text-primary-foreground"
          )}
        >
          Home
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-primary-foreground/80 hover:text-primary-foreground hover:bg-transparent">
                Products
              </NavigationMenuTrigger>
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

        {links.slice(1).map(({ to, label, external }) => 
          external ? (
            <a
              key={to}
              href={to}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors flex items-center gap-2",
                "text-primary-foreground/80 hover:text-primary-foreground"
              )}
            >
              {label} {label.includes("Download") && <Download className="h-4 w-4" />}
            </a>
          ) : (
            <Link
              key={to}
              to={to}
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors",
                "text-primary-foreground/80 hover:text-primary-foreground"
              )}
            >
              {label}
            </Link>
          )
        )}
      </div>
    </div>
  );
};
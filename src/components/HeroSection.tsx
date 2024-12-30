import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/a4950fb1-745a-4215-ad37-3d435b0f4e22.png"
          alt="Aluminum Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex justify-between items-start">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Shaping Our Future with Aluminium Wire Rods and Flat Rolled Products
            </h1>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-primary hover:text-white font-semibold"
              >
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <Badge 
            variant="secondary" 
            className="text-lg py-2 px-4 rounded-xl animate-fade-down font-bold shadow-lg bg-opacity-90 backdrop-blur-sm"
          >
            25+ Years of Excellence
          </Badge>
        </div>
      </div>
    </section>
  );
};
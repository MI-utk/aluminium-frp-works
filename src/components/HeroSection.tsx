import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/5207b5c7-f274-400f-8055-a7718ef7d534.png"
          alt="Aluminium Coil Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
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
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="font-semibold"
              >
                <a 
                  href="https://drive.google.com/file/d/1xLIlj3HrqJGfiSHvBOoBL9IO4avf3trQ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Brochure <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full group-hover:bg-yellow-400/30 transition-all duration-300"></div>
            <Badge 
              variant="secondary" 
              className="relative text-lg py-6 px-8 rounded-full animate-fade-down font-bold shadow-lg bg-white/90 backdrop-blur-sm border-2 border-yellow-400 flex flex-col items-center justify-center min-w-[140px] min-h-[140px] hover:scale-105 transition-transform duration-300"
            >
              <span className="text-3xl font-extrabold text-primary">25+</span>
              <span className="text-sm text-primary/80">Years of</span>
              <span className="text-sm text-primary/80">Excellence</span>
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
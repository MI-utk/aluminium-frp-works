import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/9c06c432-d672-4b50-ad85-4972f3f17181.png"
          alt="Industrial background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-3xl">
            WE BUILD
            <br />
            STRONGER FUTURE
          </h1>
          <Button
            onClick={scrollToProducts}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-none flex items-center gap-2 transition-all"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
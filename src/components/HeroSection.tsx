import { ArrowDownIcon } from "lucide-react";

export const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down">
          Masters India Private Limited
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-up">
          Leading Manufacturer of Premium Aluminium Wire Rods & Flat Rolled Products
        </p>
        <button
          onClick={scrollToProducts}
          className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all animate-fade-up"
        >
          Explore Our Products
          <ArrowDownIcon size={20} />
        </button>
      </div>
    </div>
  );
};
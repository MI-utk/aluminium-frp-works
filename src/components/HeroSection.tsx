import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-blue-900">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/a4001143-1c1e-4d24-92db-5b301938d031.png"
          alt="Manufacturing Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            INFRASTRUCTURE
            <br />
            LEADING
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Masters India is one of India's leading manufacturers of high-quality aluminum products, serving industries nationwide with precision and excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              <Link to="/products">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-blue-900">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-factory-machines-in-action-5244/1080p.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
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
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold"
            >
              <Link to="/products">
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
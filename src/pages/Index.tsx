import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { BlogSliderSection } from "@/components/BlogSliderSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <BlogSliderSection />
      <ContactSection />
    </div>
  );
};

export default Index;
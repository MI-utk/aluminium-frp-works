import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { StatsSection } from "@/components/StatsSection";
import { ContactSection } from "@/components/ContactSection";
import { BlogSliderSection } from "@/components/BlogSliderSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <StatsSection />
      <BlogSliderSection />
      <ContactSection />
    </div>
  );
};

export default Index;
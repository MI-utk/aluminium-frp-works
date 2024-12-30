import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { StatsSection } from "@/components/StatsSection";
import { ContactSection } from "@/components/ContactSection";
import { BlogSliderSection } from "@/components/BlogSliderSection";
import { AlushadeSection } from "@/components/AlushadeSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <AlushadeSection />
      <StatsSection />
      <BlogSliderSection />
      <ContactSection />
    </div>
  );
};

export default Index;
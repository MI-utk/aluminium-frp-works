import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { StatsSection } from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <StatsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
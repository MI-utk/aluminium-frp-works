import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { StatsSection } from "@/components/StatsSection";
import { ContactSection } from "@/components/ContactSection";
import { AlushadeSection } from "@/components/AlushadeSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AlushadeSection />
      <ProductsSection />
      <StatsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
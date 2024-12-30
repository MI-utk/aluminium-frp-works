import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const AlushadeSection = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] md:h-[400px]">
            <img
              src="/lovable-uploads/b74f2faa-2414-4f0c-85c0-89e863ad13f1.png"
              alt="Alushade Roofing"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Introducing ALUSHADE
            </h2>
            <p className="text-lg text-gray-600">
              Color Coated Aluminium Roofing by Masters India. Our premium Aluminium Color Coated Coils and Profiles offer exceptional durability and aesthetic appeal for your roofing needs.
            </p>
            <Button
              className="group"
              onClick={() => window.open('https://www.alushade.in', '_blank')}
            >
              Visit Alushade Website
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
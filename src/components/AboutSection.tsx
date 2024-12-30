import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const AboutSection = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              WE EXPLORE
              <br />
              TO EMPOWER
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Masters India is a family-run business dealing in aluminium wire rods and flat-rolled products. 
              Since 1999, we've been building on our mission to be the largest aluminium recycler in the world.
            </p>
            <Button variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-black">
              EXPLORE <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div>
            <img
              src="/lovable-uploads/9c06c432-d672-4b50-ad85-4972f3f17181.png"
              alt="About Masters India"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-blue-900">
              EXCELLENCE IN
              <br />
              ALUMINUM MANUFACTURING
            </h2>
            <p className="text-gray-600 mb-8">
              With state-of-the-art facilities and decades of expertise, we deliver premium aluminum solutions that meet the highest industry standards. Our commitment to quality and innovation drives us to exceed expectations in every project.
            </p>
            <Button className="bg-blue-900 hover:bg-blue-800">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png"
              alt="Manufacturing Facility"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-lg">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
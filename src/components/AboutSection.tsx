import { Building2, Award, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              ABOUT
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Masters India is a family-run business dealing in aluminium wire rods and flat-rolled products. 
              Shri Chandra Prakash Agarwal set up the company in 1999 after many years of trading in the industry. 
              Since then his children and grandchildren have joined him in his mission to be the largest aluminium 
              recycler in the world. As a family-run business, we emphasise building good relationships with our 
              customers more than anything else. We look for trustworthy partners who will stay with us for decades 
              and provide them with the best of our abilities.
            </p>
          </div>
          <div>
            <img
              src="/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=355&y=646&width=533&height=442"
              alt="About Masters India"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
import { Building2, Award, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Excellence in Aluminium Manufacturing
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <Building2 className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">State-of-the-Art Facility</h3>
            <p className="text-gray-600">
              Modern manufacturing facility equipped with latest technology
            </p>
          </div>
          <div className="p-6">
            <Award className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-gray-600">
              Rigorous quality control processes ensuring premium products
            </p>
          </div>
          <div className="p-6">
            <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">
              Skilled professionals with years of industry experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
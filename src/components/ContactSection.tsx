import { Phone, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact Us
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-primary-foreground/80" />
              <span>+91 9717100100</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-primary-foreground/80" />
              <span>sales@mastersindia.net</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-primary-foreground/80" />
              <span>63 Paiki, Wada - Manor Rd, Wada, Maharashtra 421303</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
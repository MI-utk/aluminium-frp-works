import { Phone, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact Us
          </h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="p-6 bg-primary-foreground/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sales Wire Rods</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="text-primary-foreground/80" size={20} />
                  <span>+91 9717100100</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary-foreground/80" size={20} />
                  <span>sales@mastersindia.net</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary-foreground/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sales FRP</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="text-primary-foreground/80" size={20} />
                  <span>+91 9717100100</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary-foreground/80" size={20} />
                  <span>sales@mastersindia.net</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 bg-primary-foreground/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sales Alushade Roofing</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="text-primary-foreground/80" size={20} />
                  <span>+91 9717100100</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary-foreground/80" size={20} />
                  <span>sales@mastersindia.net</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary-foreground/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Purchase (Aluminium Raw Material Only)</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="text-primary-foreground/80" size={20} />
                  <span>+91 9717700700</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary-foreground/80" size={20} />
                  <span>purchase@mastersindia.net</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
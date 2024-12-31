import { Card } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

const Partners = () => {
  return (
    <div className="min-h-screen">
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Become Our Partner</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join Masters India's network of trusted dealers and distributors. We're looking for passionate partners who share our commitment to quality and customer service in the aluminum industry. If you're interested in becoming an authorized dealer for our premium aluminum products, please get in touch with us using the contact information below.
            </p>
            <div className="h-px bg-border w-full max-w-md mx-auto mb-8" />
            
            <Card className="max-w-md mx-auto p-6 bg-primary text-primary-foreground">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Phone className="text-primary-foreground/80" size={20} />
                  <span>+91 9717100100</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="text-primary-foreground/80" size={20} />
                  <span>sales@mastersindia.net</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
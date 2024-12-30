import { ContactSection } from "@/components/ContactSection";

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
            <div className="h-px bg-border w-full max-w-md mx-auto mb-16" />
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default Partners;
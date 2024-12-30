import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 19.6527,
    lng: 73.1457
  };

  return (
    <section className="py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Contact Us
          </h2>
          <Button variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-blue-900">
            Contact Us <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-blue-400" />
              <span>+91 9717100100</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" />
              <span>sales@mastersindia.net</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" />
              <span>63 Paiki, Wada - Manor Rd, Wada, Maharashtra 421303</span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 mt-8">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Textarea
                placeholder="Your Message"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                required
              />
              <Button type="submit" className="w-full bg-white text-blue-900 hover:bg-blue-50">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
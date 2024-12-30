import { Phone, Mail, MapPin } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const ContactSection = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 19.6527,
    lng: 73.1457
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact Us
          </h2>
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
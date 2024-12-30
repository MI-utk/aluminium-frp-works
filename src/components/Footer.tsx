import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/">
              <img
                src="/lovable-uploads/fa95f525-b749-4266-a065-8a88eaf1f01c.png"
                alt="Masters India Logo"
                className="h-12 w-12 mb-4"
              />
            </Link>
            <p className="text-gray-400 mt-4">
              Leading manufacturer of premium aluminum products serving industries worldwide.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
              <li><Link to="/price-circular" className="text-gray-400 hover:text-white">Price Circular</Link></li>
              <li><Link to="/find-dealer" className="text-gray-400 hover:text-white">Find a Dealer</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">sales@mastersindia.net</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+91 9717100100</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">63 Paiki, Wada - Manor Rd, Wada, Maharashtra 421303</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Masters India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
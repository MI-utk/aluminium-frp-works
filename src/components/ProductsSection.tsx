import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const products = [
  {
    id: "wire-rod",
    title: "WIRE ROD",
    image: "/lovable-uploads/44bf5b71-c40f-4183-bc84-c468bbaecc1e.png",
    description: "High-quality aluminum wire rods for various industrial applications",
  },
  {
    id: "wire",
    title: "WIRE",
    image: "/lovable-uploads/3a7f22aa-e896-4f66-93f4-7dbadcdc3700.png",
    description: "Premium aluminum wire products for electrical and mechanical applications",
  },
  {
    id: "cast-coil",
    title: "CAST COIL",
    image: "/lovable-uploads/714582d5-d39f-4dbf-abe6-7a8062d360a4.png",
    description: "Premium cast coils manufactured with precision",
  },
  {
    id: "cold-rolled-coil",
    title: "COLD ROLLED COIL",
    image: "/lovable-uploads/8b52d2fa-fef3-439a-89bc-69b60067a172.png",
    description: "Superior quality cold rolled coils for diverse applications",
  },
  {
    id: "color-coated-coil",
    title: "COLOR COATED COIL",
    image: "https://images.unsplash.com/photo-1589792923962-537704632910?auto=format&fit=crop&w=800&q=80",
    description: "Premium color coated aluminum coils with superior finish",
  },
  {
    id: "sheets",
    title: "SHEETS",
    image: "/lovable-uploads/38907c90-48f6-4002-8e3b-39567e4e624a.png",
    description: "High-quality aluminum sheets for various applications",
  },
  {
    id: "chequered-sheets",
    title: "CHEQUERED SHEETS",
    image: "/lovable-uploads/07589213-a068-4121-b493-690d50a1e0cf.png",
    description: "Premium chequered sheets with anti-slip patterns",
  },
  {
    id: "roofing-profiled-sheets",
    title: "ALUSHADE ROOFING",
    image: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=800&q=80",
    description: "High-quality profiled sheets for roofing applications",
  },
  {
    id: "foil",
    title: "FOIL",
    image: "/lovable-uploads/845c56c1-441a-458d-a269-16f51cc411b7.png",
    description: "Premium quality aluminum foil products",
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600">
            Discover our range of high-quality aluminum products
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <div className="relative group">
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl bg-white rounded-lg border-0 h-[300px] transform group-hover:-translate-y-1">
                  <div className="relative z-10 h-full">
                    <div className="h-[200px] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain p-4"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-lg font-medium">View Details</span>
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{product.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
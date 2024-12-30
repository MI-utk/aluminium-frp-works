import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const products = [
  {
    id: "wire-rod",
    title: "WIRE ROD",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    description: "High-quality aluminum wire rods for various industrial applications",
  },
  {
    id: "wire",
    title: "WIRE",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    description: "Premium aluminum wire products for electrical and mechanical applications",
  },
  {
    id: "cast-coil",
    title: "CAST COIL",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    description: "Premium cast coils manufactured with precision",
  },
  {
    id: "cold-rolled-coil",
    title: "COLD ROLLED COIL",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
    description: "Superior quality cold rolled coils for diverse applications",
  },
  {
    id: "color-coated-coil",
    title: "COLOR COATED COIL",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    description: "Premium color coated aluminum coils with superior finish",
  },
  {
    id: "sheets",
    title: "SHEETS",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    description: "High-quality aluminum sheets for various applications",
  },
  {
    id: "chequered-sheets",
    title: "CHEQUERED SHEETS",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    description: "Premium chequered sheets with anti-slip patterns",
  },
  {
    id: "roofing-profiled-sheets",
    title: "ROOFING PROFILED SHEETS",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    description: "High-quality profiled sheets for roofing applications",
  },
  {
    id: "foil",
    title: "FOIL",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
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
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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

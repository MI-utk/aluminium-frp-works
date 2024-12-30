import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const products = [
  {
    id: "wire-rod",
    title: "WIRE ROD",
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=38&y=138&width=200&height=200",
    description: "High-quality aluminum wire rods for various industrial applications",
  },
  {
    id: "wire",
    title: "WIRE",
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=38&y=138&width=200&height=200",
    description: "Premium aluminum wire products for electrical and mechanical applications",
  },
  {
    id: "cast-coil",
    title: "CAST COIL",
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=270&y=138&width=200&height=200",
    description: "Premium cast coils manufactured with precision",
  },
  {
    id: "cold-rolled-coil",
    title: "COLD ROLLED COIL",
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=502&y=138&width=200&height=200",
    description: "Superior quality cold rolled coils for diverse applications",
  },
  {
    id: "color-coated-coil",
    title: "COLOR COATED COIL",
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=38&y=390&width=200&height=200",
    description: "Premium color coated aluminum coils with superior finish",
  },
  {
    id: "sheets",
    title: "SHEETS",
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=270&y=390&width=200&height=200",
    description: "High-quality aluminum sheets for various applications",
  },
  {
    id: "chequered-sheets",
    title: "CHEQUERED SHEETS",
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=502&y=390&width=200&height=200",
    description: "Premium chequered sheets with anti-slip patterns",
  },
  {
    id: "roofing-profiled-sheets",
    title: "ROOFING PROFILED SHEETS",
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=38&y=390&width=200&height=200",
    description: "High-quality profiled sheets for roofing applications",
  },
  {
    id: "foil",
    title: "FOIL",
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=502&y=390&width=200&height=200",
    description: "Premium quality aluminum foil products",
  },
];

export const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          PRODUCTS
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
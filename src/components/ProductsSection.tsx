import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const products = [
  {
    id: "wire-rod",
    title: "WIRE ROD",
    image: "/lovable-uploads/a4001143-1c1e-4d24-92db-5b301938d031.png#x=0&y=0&width=415&height=415",
    description: "High-quality aluminum wire rods for various industrial applications",
  },
  {
    id: "wire",
    title: "WIRE",
    image: "/lovable-uploads/a4001143-1c1e-4d24-92db-5b301938d031.png#x=415&y=0&width=415&height=415",
    description: "Premium aluminum wire products for electrical and mechanical applications",
  },
  {
    id: "cast-coil",
    title: "CAST COIL",
    image: "/lovable-uploads/a4001143-1c1e-4d24-92db-5b301938d031.png#x=830&y=0&width=415&height=415",
    description: "Premium cast coils manufactured with precision",
  },
  {
    id: "cold-rolled-coil",
    title: "COLD ROLLED COIL",
    image: "/lovable-uploads/a4001143-1c1e-4d24-92db-5b301938d031.png#x=0&y=415&width=415&height=415",
    description: "Superior quality cold rolled coils for diverse applications",
  },
  {
    id: "color-coated-coil",
    title: "COLOR COATED COIL",
    image: "/lovable-uploads/a4001143-1c1e-4d24-92db-5b301938d031.png#x=415&y=415&width=415&height=415",
    description: "Premium color coated aluminum coils with superior finish",
  },
  {
    id: "sheets",
    title: "SHEETS",
    image: "/lovable-uploads/a4001143-1c1e-4d24-92db-5b301938d031.png#x=830&y=415&width=415&height=415",
    description: "High-quality aluminum sheets for various applications",
  },
  {
    id: "chequered-sheets",
    title: "CHEQUERED SHEETS",
    image: "/lovable-uploads/a4001143-1c1e-4d24-92db-5b301938d031.png#x=0&y=830&width=415&height=415",
    description: "Premium chequered sheets with anti-slip patterns",
  },
  {
    id: "roofing-profiled-sheets",
    title: "ROOFING PROFILED SHEETS",
    image: "/lovable-uploads/a4001143-1c1e-4d24-92db-5b301938d031.png#x=415&y=830&width=415&height=415",
    description: "High-quality profiled sheets for roofing applications",
  },
  {
    id: "foil",
    title: "FOIL",
    image: "/lovable-uploads/a4001143-1c1e-4d24-92db-5b301938d031.png#x=830&y=830&width=415&height=415",
    description: "Premium quality aluminum foil products",
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
              <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl bg-white rounded-2xl border-0">
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">View Details</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{product.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
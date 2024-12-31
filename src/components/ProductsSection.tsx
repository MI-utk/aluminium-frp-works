import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const products = [
  {
    id: "wire-rod",
    title: "WIRE ROD",
    image: "/lovable-uploads/fe0c3444-a472-41e6-abbc-5cde292a07aa.png",
    description: "High-quality aluminum wire rods for various industrial applications",
  },
  {
    id: "wire",
    title: "WIRE",
    image: "/lovable-uploads/8abcf15c-2e50-482f-ae80-70b286f8751e.png",
    description: "Premium aluminum wire products for electrical and mechanical applications",
  },
  {
    id: "cast-coil",
    title: "CAST COIL",
    image: "/lovable-uploads/4a63b725-d382-4d31-a856-02f05274ba4c.png",
    description: "Premium cast coils manufactured with precision",
  },
  {
    id: "cold-rolled-coil",
    title: "COLD ROLLED COIL",
    image: "/lovable-uploads/1a07da59-bb48-4600-b6c5-bcd3db01aa6c.png",
    description: "Superior quality cold rolled coils for diverse applications",
  },
  {
    id: "color-coated-coil",
    title: "COLOR COATED COIL",
    image: "/lovable-uploads/69a3d9ce-e613-4d3f-af08-0deb15fddfeb.png",
    description: "Premium color coated aluminum coils with superior finish",
  },
  {
    id: "sheets",
    title: "SHEETS",
    image: "/lovable-uploads/27bb0e07-cf67-4712-875d-e40d3ff5e251.png",
    description: "High-quality aluminum sheets for various applications",
  },
  {
    id: "chequered-sheets",
    title: "CHEQUERED SHEETS",
    image: "/lovable-uploads/b8b1cfd0-338d-4883-9fb1-6d66605b1735.png",
    description: "Premium chequered sheets with anti-slip patterns",
  },
  {
    id: "roofing-profiled-sheets",
    title: "ALUSHADE ROOFING",
    image: "/lovable-uploads/6c3c8269-75ae-4a84-9f5f-d5e40abd5d69.png",
    description: "High-quality profiled sheets for roofing applications",
  },
  {
    id: "foil",
    title: "FOIL",
    image: "/lovable-uploads/09d9b96c-d246-4e55-a443-552d7db5a523.png",
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

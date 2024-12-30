import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    title: "WIRE ROD",
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=38&y=138&width=200&height=200",
    description: "High-quality aluminum wire rods for various industrial applications",
    slug: "wire-rod",
  },
  {
    title: "CAST COIL",
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=270&y=138&width=200&height=200",
    description: "Premium cast coils manufactured with precision",
    slug: "cast-coil",
  },
  {
    title: "COLD ROLLED COIL",
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=502&y=138&width=200&height=200",
    description: "Superior quality cold rolled coils for diverse applications",
    slug: "cold-rolled-coil",
  },
  {
    title: "SHEETS AND PLATES",
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=38&y=390&width=200&height=200",
    description: "Precision-engineered aluminum sheets and plates",
    slug: "sheets-and-plates",
  },
  {
    title: "STRIPS",
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=270&y=390&width=200&height=200",
    description: "High-performance aluminum strips for multiple uses",
    slug: "strips",
  },
  {
    title: "FOIL",
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=502&y=390&width=200&height=200",
    description: "Premium quality aluminum foil products",
    slug: "foil",
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
            <Card key={product.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link to={`/products/${product.slug}`}>
                  <Button variant="secondary" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
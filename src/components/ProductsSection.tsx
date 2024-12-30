import { Card } from "@/components/ui/card";

export const ProductsSection = () => {
  const products = [
    {
      title: "Aluminium Wire Rods",
      description: "High-quality wire rods for various industrial applications",
      features: ["Superior conductivity", "Excellent formability", "Consistent quality"],
    },
    {
      title: "Flat Rolled Products",
      description: "Precision-engineered flat rolled aluminium solutions",
      features: ["Custom dimensions", "High strength", "Versatile applications"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Our Premium Products
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Card key={product.title} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-primary">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-accent">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
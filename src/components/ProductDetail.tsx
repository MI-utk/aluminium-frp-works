import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { RoofingProductsGrid } from "./RoofingProductsGrid";
import { ProductSpecifications } from "./product/ProductSpecifications";
import { ProductApplications } from "./product/ProductApplications";
import { productsData } from "@/data/productsData";

interface ProductDetailProps {
  productId: string;
}

export const ProductDetail = ({ productId }: ProductDetailProps) => {
  const product = productsData[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-primary mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>
          {productId === 'roofing-profiled-sheets' && (
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => window.open('https://www.alushade.in', '_blank')}
            >
              Visit Alushade Website
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>

      {productId === 'roofing-profiled-sheets' ? (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-6">Product Specifications</h2>
          <RoofingProductsGrid />
        </div>
      ) : (
        <ProductSpecifications 
          specifications={product.specifications} 
          isRoofingProduct={productId === 'roofing-profiled-sheets'} 
        />
      )}

      <ProductApplications applications={product.applications} />
    </div>
  );
};
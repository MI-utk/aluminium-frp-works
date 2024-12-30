import { useParams } from "react-router-dom";
import { ProductsSection } from "@/components/ProductsSection";
import { ProductDetail } from "@/components/ProductDetail";

const Products = () => {
  const { productId } = useParams();

  if (productId) {
    return <ProductDetail productId={productId} />;
  }

  return (
    <div className="min-h-screen">
      <ProductsSection />
    </div>
  );
};

export default Products;
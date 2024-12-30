import { ProductsSection } from "@/components/ProductsSection";
import { ProductDetail } from "@/components/ProductDetail";
import { Routes, Route } from "react-router-dom";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route index element={<ProductsSection />} />
        <Route path=":slug/*" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default Products;
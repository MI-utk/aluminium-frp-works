import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Products from "@/pages/Products";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import Partners from "@/pages/Partners";
import Careers from "@/pages/Careers";
import FindDealer from "@/pages/FindDealer";
import PriceCircular from "@/pages/PriceCircular";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/find-dealer" element={<FindDealer />} />
          <Route path="/price-circular" element={<PriceCircular />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
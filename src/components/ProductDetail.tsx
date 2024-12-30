import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { RoofingProductsGrid } from "./RoofingProductsGrid";

interface ProductSpec {
  alloy: string;
  temper: string;
  thickness?: string;
  diameter?: string;
  width?: string;
  length?: string;
}

interface ProductData {
  id: string;
  title: string;
  description: string;
  specifications: ProductSpec[];
  applications: string[];
  image: string;
}

const productsData: Record<string, ProductData> = {
  "wire-rod": {
    id: "wire-rod",
    title: "WIRE ROD",
    description: "Our wire rod manufacturing facility employs state-of-the-art technology to produce high-quality aluminum wire rods. These products are manufactured with precise dimensional control and superior surface quality, making them ideal for various electrical and mechanical applications.",
    specifications: [
      { alloy: "1350", temper: "O/H112", diameter: "7.0-15.0mm" },
      { alloy: "6101", temper: "O/H112", diameter: "7.0-15.0mm" },
      { alloy: "6201", temper: "O/H112", diameter: "7.0-15.0mm" },
    ],
    applications: [
      "Electrical conductors",
      "Power transmission",
      "Building wire",
      "Automotive wiring",
      "Industrial applications"
    ],
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=38&y=138&width=200&height=200"
  },
  "wire": {
    id: "wire",
    title: "WIRE",
    description: "Our aluminum wire products are drawn from high-quality wire rods using advanced drawing technology. We maintain strict quality control to ensure consistent diameter and surface quality throughout the length of the wire.",
    specifications: [
      { alloy: "1350", temper: "H12/H14", diameter: "1.0-4.0mm" },
      { alloy: "6101", temper: "H12/H14", diameter: "1.0-4.0mm" },
      { alloy: "6201", temper: "H12/H14", diameter: "1.0-4.0mm" },
    ],
    applications: [
      "Electrical wiring",
      "Telecommunications",
      "Automotive applications",
      "Industrial uses"
    ],
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=38&y=138&width=200&height=200"
  },
  "cast-coil": {
    id: "cast-coil",
    title: "CAST COIL",
    description: "Our cast coils are produced using advanced casting technology, ensuring uniform thickness and excellent surface quality. These coils offer superior formability and are ideal for various industrial applications.",
    specifications: [
      { alloy: "1100", temper: "O/H112", thickness: "0.2-6.0mm", width: "500-1600mm", length: "Up to 4000mm" },
      { alloy: "3003", temper: "O/H112", thickness: "0.2-6.0mm", width: "500-1600mm", length: "Up to 4000mm" },
      { alloy: "8011", temper: "O/H112", thickness: "0.2-6.0mm", width: "500-1600mm", length: "Up to 4000mm" },
    ],
    applications: [
      "Heat exchangers",
      "Air conditioning units",
      "Industrial machinery",
      "Construction applications"
    ],
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=270&y=138&width=200&height=200"
  },
  "cold-rolled-coil": {
    id: "cold-rolled-coil",
    title: "COLD ROLLED COIL",
    description: "Our cold rolled coils are manufactured using advanced rolling technology to achieve precise thickness control and superior surface finish. These products are known for their excellent formability, consistent quality, and dimensional accuracy.",
    specifications: [
      { alloy: "1100", temper: "O/H12/H14/H16/H18", thickness: "0.2-3.0mm", width: "20-1600mm", length: "Up to 4000mm" },
      { alloy: "3003", temper: "O/H12/H14/H16/H18", thickness: "0.2-3.0mm", width: "20-1600mm", length: "Up to 4000mm" },
      { alloy: "5052", temper: "O/H32/H34/H36", thickness: "0.2-3.0mm", width: "20-1600mm", length: "Up to 4000mm" },
      { alloy: "8011", temper: "O/H12/H14/H16/H18", thickness: "0.2-3.0mm", width: "20-1600mm", length: "Up to 4000mm" },
    ],
    applications: [
      "Automotive components",
      "Building materials",
      "Electronics",
      "Consumer goods",
      "Industrial applications"
    ],
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=502&y=138&width=200&height=200"
  },
  "color-coated-coil": {
    id: "color-coated-coil",
    title: "COLOR COATED COIL",
    description: "Our color coated coils feature premium quality aluminum substrate with advanced coating technology. These products offer excellent corrosion resistance, weather ability, and aesthetic appeal.",
    specifications: [
      { alloy: "1100", temper: "H14/H16", thickness: "0.2-1.5mm", width: "600-1250mm", length: "Up to 4000mm" },
      { alloy: "3003", temper: "H14/H16", thickness: "0.2-1.5mm", width: "600-1250mm", length: "Up to 4000mm" },
      { alloy: "3105", temper: "H14/H16", thickness: "0.2-1.5mm", width: "600-1250mm", length: "Up to 4000mm" },
    ],
    applications: [
      "Roofing and cladding",
      "Interior decoration",
      "Signage",
      "Transportation"
    ],
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=38&y=390&width=200&height=200"
  },
  "sheets": {
    id: "sheets",
    title: "SHEETS",
    description: "Our aluminum sheets are produced with precise thickness control and superior surface finish. They offer excellent formability and are suitable for various applications requiring flat, uniform material.",
    specifications: [
      { alloy: "1100", temper: "O/H14/H16", thickness: "0.3-3.0mm", width: "500-1500mm", length: "Up to 4000mm" },
      { alloy: "3003", temper: "O/H14/H16", thickness: "0.3-3.0mm", width: "500-1500mm", length: "Up to 4000mm" },
      { alloy: "5052", temper: "O/H32/H34", thickness: "0.3-3.0mm", width: "500-1500mm", length: "Up to 4000mm" },
    ],
    applications: [
      "Construction",
      "Transportation",
      "General fabrication",
      "Industrial applications"
    ],
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=270&y=390&width=200&height=200"
  },
  "chequered-sheets": {
    id: "chequered-sheets",
    title: "CHEQUERED SHEETS",
    description: "Our chequered sheets feature a raised pattern that provides excellent slip resistance and aesthetic appeal. These sheets are manufactured with high-quality aluminum and precise pattern embossing.",
    specifications: [
      { alloy: "1100", temper: "H14/H24", thickness: "1.5-6.0mm", width: "1000-1500mm", length: "2000-4000mm" },
      { alloy: "3003", temper: "H14/H24", thickness: "1.5-6.0mm", width: "1000-1500mm", length: "2000-4000mm" },
      { alloy: "5052", temper: "H32/H34", thickness: "1.5-6.0mm", width: "1000-1500mm", length: "2000-4000mm" },
    ],
    applications: [
      "Flooring",
      "Steps and walkways",
      "Transportation platforms",
      "Industrial applications"
    ],
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=502&y=390&width=200&height=200"
  },
  "roofing-profiled-sheets": {
    id: "roofing-profiled-sheets",
    title: "ROOFING PROFILED SHEETS",
    description: "Our premium aluminum roofing sheets are designed for superior durability and aesthetic appeal. Available in various profiles including Corrugated Profile, Trapezoidal Profile, Standing Seam Profile, and Clip Lock Profile. These sheets feature advanced coating technology with PVDF/PDVF (Poly Vinylidene Fluoride) coating system that ensures excellent weather resistance, color retention, and corrosion protection.",
    specifications: [
      { 
        alloy: "3003/3105", 
        temper: "H14/H24/H16", 
        thickness: "0.40-1.00mm", 
        width: "1000/1220mm", 
        length: "Custom lengths up to 12m" 
      },
      { 
        alloy: "5052", 
        temper: "H32/H34", 
        thickness: "0.40-1.00mm", 
        width: "1000/1220mm", 
        length: "Custom lengths up to 12m" 
      }
    ],
    applications: [
      "Industrial and Commercial Roofing",
      "Residential Buildings",
      "Agricultural Structures",
      "Warehouses and Storage Facilities",
      "Sports Complexes",
      "Educational Institutions",
      "Shopping Malls",
      "Airport Terminals",
      "Railway Stations"
    ],
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=38&y=390&width=200&height=200"
  },
  "foil": {
    id: "foil",
    title: "FOIL",
    description: "Our aluminum foil products are manufactured using cutting-edge technology to ensure consistent quality and superior performance. We offer a wide range of foil products with various thicknesses and widths to meet specific application requirements.",
    specifications: [
      { alloy: "1235", temper: "O/H18", thickness: "0.006-0.2mm", width: "100-1600mm", length: "Up to 4000mm" },
      { alloy: "8011", temper: "O/H18", thickness: "0.006-0.2mm", width: "100-1600mm", length: "Up to 4000mm" },
    ],
    applications: [
      "Food packaging",
      "Pharmaceutical packaging",
      "Household applications",
      "Industrial insulation",
      "Heat exchange applications"
    ],
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=502&y=390&width=200&height=200"
  }
};

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
        </div>
      </div>

      {productId === 'roofing-profiled-sheets' ? (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-6">Product Specifications</h2>
          <RoofingProductsGrid />
        </div>
      ) : (
        <Card className="mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-primary mb-4">Specifications</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Alloy</TableHead>
                    <TableHead>Temper</TableHead>
                    {product.specifications[0].thickness && <TableHead>Thickness (mm)</TableHead>}
                    {product.specifications[0].diameter && <TableHead>Diameter (mm)</TableHead>}
                    {product.specifications[0].width && <TableHead>Width (mm)</TableHead>}
                    {product.specifications[0].length && <TableHead>Length (mm)</TableHead>}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {product.specifications.map((spec, index) => (
                    <TableRow key={index}>
                      <TableCell>{spec.alloy}</TableCell>
                      <TableCell>{spec.temper}</TableCell>
                      {spec.thickness && <TableCell>{spec.thickness}</TableCell>}
                      {spec.diameter && <TableCell>{spec.diameter}</TableCell>}
                      {spec.width && <TableCell>{spec.width}</TableCell>}
                      {spec.length && <TableCell>{spec.length}</TableCell>}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </Card>
      )}

      <Card>
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Applications</h2>
          <ul className="list-disc list-inside space-y-2">
            {product.applications.map((application, index) => (
              <li key={index} className="text-gray-700">{application}</li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

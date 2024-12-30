import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

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
  "sheets-and-plates": {
    id: "sheets-and-plates",
    title: "SHEETS AND PLATES",
    description: "Our sheets manufacturing division utilizes advanced process control technologies, ensuring that every aluminium sheet meets the highest standards of quality. These sheets are expertly constructed to provide tight tolerance levels, uniform thickness, and remarkable dimensional accuracy. Ideal for roofing applications, they provide outstanding durability, corrosion resistance, and thermal efficiency, making them a reliable choice for both residential and industrial projects.",
    specifications: [
      { alloy: "1050", temper: "O/H12/H14/H16/H18", thickness: "0.23-6.00", width: "500-1700", length: "Up to 4000" },
      { alloy: "1060", temper: "O/H12/H14/H16/H18", thickness: "0.23-6.00", width: "500-1700", length: "Up to 4000" },
      { alloy: "1100", temper: "O/H12/H14/H16/H18", thickness: "0.23-6.00", width: "500-1700", length: "Up to 4000" },
      { alloy: "3003", temper: "O/H12/H14/H16/H18", thickness: "0.23-6.00", width: "500-1700", length: "Up to 4000" },
      { alloy: "3105", temper: "O/H12/H14/H16/H18", thickness: "0.23-6.00", width: "500-1700", length: "Up to 4000" },
      { alloy: "8006", temper: "O/H12/H14/H16/H18", thickness: "0.23-6.00", width: "500-1700", length: "Up to 4000" },
    ],
    applications: [
      "Construction and roofing",
      "Transportation",
      "Industrial equipment",
      "Packaging solutions",
      "General engineering"
    ],
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=38&y=390&width=200&height=200"
  },
  "strips": {
    id: "strips",
    title: "STRIPS",
    description: "Our aluminum strips are manufactured with precision to meet diverse industrial requirements. These strips feature excellent surface finish, consistent gauge control, and superior mechanical properties.",
    specifications: [
      { alloy: "1100", temper: "O/H12/H14/H16", thickness: "0.2-3.0mm", width: "20-500mm", length: "Up to 4000mm" },
      { alloy: "3003", temper: "O/H12/H14/H16", thickness: "0.2-3.0mm", width: "20-500mm", length: "Up to 4000mm" },
      { alloy: "8011", temper: "O/H12/H14/H16", thickness: "0.2-3.0mm", width: "20-500mm", length: "Up to 4000mm" },
    ],
    applications: [
      "Transformer windings",
      "Heat exchangers",
      "Electrical applications",
      "Construction materials"
    ],
    image: "/lovable-uploads/f988bd27-39ae-40b6-aee6-0f35dc1cce43.png#x=270&y=390&width=200&height=200"
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
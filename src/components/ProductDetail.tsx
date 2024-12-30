import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";

const productSpecs = {
  "wire-rod": {
    title: "WIRE ROD",
    description: "Our premium aluminum wire rods are manufactured to meet the highest industry standards.",
    specifications: {
      "Alloy Series": "1XXX, 2XXX, 3XXX, 5XXX, 6XXX, 7XXX, 8XXX",
      "Diameter Range": "7.6mm to 15mm",
      "Temper": "O, H12, H14, H16, H18, H19, T3, T4, T6",
      "Surface": "Mill finish",
      "Applications": [
        "Electrical conductors",
        "Mechanical applications",
        "Building & construction",
        "Transportation",
        "Consumer durables"
      ]
    }
  },
  "cast-coil": {
    title: "CAST COIL",
    description: "High-quality cast coils designed for superior performance.",
    specifications: {
      "Alloy Series": "1XXX, 3XXX, 5XXX, 8XXX",
      "Thickness Range": "4.0mm to 7.0mm",
      "Width Range": "1000mm to 1650mm",
      "Surface": "Mill finish",
      "Applications": [
        "Building & construction",
        "Transportation",
        "Consumer durables",
        "Packaging"
      ]
    }
  },
  "cold-rolled-coil": {
    title: "COLD ROLLED COIL",
    description: "Precision cold rolled coils for demanding applications.",
    specifications: {
      "Alloy Series": "1XXX, 3XXX, 5XXX, 8XXX",
      "Thickness Range": "0.20mm to 3.0mm",
      "Width Range": "1000mm to 1600mm",
      "Surface": "Mill finish",
      "Applications": [
        "Building & construction",
        "Transportation",
        "Consumer durables",
        "Packaging"
      ]
    }
  },
  "sheets-and-plates": {
    title: "SHEETS AND PLATES",
    description: "Premium quality aluminum sheets and plates for diverse industrial applications.",
    specifications: {
      "Alloy Series": "1XXX, 3XXX, 5XXX, 8XXX",
      "Thickness Range": "Sheets: 0.20mm to 3.0mm, Plates: 4.0mm to 150mm",
      "Width Range": "1000mm to 2000mm",
      "Surface": "Mill finish",
      "Applications": [
        "Building & construction",
        "Transportation",
        "Marine",
        "Industrial equipment"
      ]
    }
  },
  "strips": {
    title: "STRIPS",
    description: "High-precision aluminum strips for specialized applications.",
    specifications: {
      "Alloy Series": "1XXX, 3XXX, 5XXX, 8XXX",
      "Thickness Range": "0.20mm to 3.0mm",
      "Width Range": "20mm to 500mm",
      "Surface": "Mill finish",
      "Applications": [
        "Electrical",
        "Construction",
        "Packaging",
        "Consumer goods"
      ]
    }
  },
  "foil": {
    title: "FOIL",
    description: "Premium aluminum foil products for packaging and industrial use.",
    specifications: {
      "Alloy Series": "1XXX, 8XXX",
      "Thickness Range": "0.006mm to 0.200mm",
      "Width Range": "Up to 1350mm",
      "Surface": "Mill finish",
      "Applications": [
        "Packaging",
        "Household use",
        "Industrial applications",
        "Pharmaceutical packaging"
      ]
    }
  }
};

export const ProductDetail = () => {
  const { slug } = useParams();
  const product = productSpecs[slug as keyof typeof productSpecs];

  if (!product) {
    return <div className="container mx-auto px-4 py-20">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <Card className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-primary mb-6">{product.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{product.description}</p>
        
        <div className="space-y-6">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="border-b pb-4">
              <h3 className="text-xl font-semibold text-primary mb-2">{key}</h3>
              {Array.isArray(value) ? (
                <ul className="list-disc list-inside space-y-1">
                  {value.map((item, index) => (
                    <li key={index} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">{value}</p>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
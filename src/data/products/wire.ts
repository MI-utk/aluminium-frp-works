import { ProductData } from '../types';

export const wireData: ProductData = {
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
  image: "/lovable-uploads/8abcf15c-2e50-482f-ae80-70b286f8751e.png"
};

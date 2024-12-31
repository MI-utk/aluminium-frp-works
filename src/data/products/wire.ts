import { ProductData } from '../types';

export const wireData: ProductData = {
  id: "wire",
  title: "WIRE",
  description: "Our aluminium wires are manufactured to the highest standards, free from surface imperfections and internal defects. These wires offer superior conductivity and strength. Highly flexible and adaptable aluminium wires can be customized to suit the unique requirements of industrial such as automotive, construction, residential and commercial purposes. Whether used for power transmission or intricate components, our aluminium wires deliver consistent performance and reliability.",
  specifications: [
    { alloy: "3003", diameter: "0.8-9.5mm", coilId: "600" },
    { alloy: "5052", diameter: "0.8-9.5mm", coilId: "600" },
    { alloy: "5056", diameter: "0.8-9.5mm", coilId: "600" },
    { alloy: "5154", diameter: "0.8-9.5mm", coilId: "600" },
    { alloy: "6061", diameter: "0.8-9.5mm", coilId: "600" },
    { alloy: "6063", diameter: "0.8-9.5mm", coilId: "600" }
  ],
  applications: [
    "Electrical wiring",
    "Telecommunications",
    "Automotive applications",
    "Construction industry",
    "Power transmission",
    "Industrial components"
  ],
  image: "/lovable-uploads/8abcf15c-2e50-482f-ae80-70b286f8751e.png"
};
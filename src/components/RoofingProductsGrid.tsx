import { RoofingProductCard } from "./RoofingProductCard";

const roofingProducts = [
  {
    title: "Alushade Max",
    image: "/lovable-uploads/a9fca02a-57ae-4939-a7fb-1ef84b60ea0b.png",
    specs: {
      thickness: "0.40-0.91",
      effectiveWidth: "1000 ± 2",
      overallWidth: "1065 ± 2",
      pitch: "204±2",
      troughDepth: "30",
      length: "Standard/Customized"
    }
  },
  {
    title: "Alushade Max",
    image: "/lovable-uploads/a9fca02a-57ae-4939-a7fb-1ef84b60ea0b.png",
    specs: {
      thickness: "0.40-0.91",
      effectiveWidth: "1020 ± 2",
      overallWidth: "1098 ± 2",
      pitch: "255 ± 2",
      troughDepth: "25±2",
      length: "Standard/Customized"
    }
  },
  {
    title: "Alushade Super",
    image: "/lovable-uploads/a9fca02a-57ae-4939-a7fb-1ef84b60ea0b.png",
    specs: {
      thickness: "0.40-0.91",
      effectiveWidth: "1000 ± 2",
      overallWidth: "1065 ± 2",
      pitch: "200",
      troughDepth: "30",
      length: "Standard/Customized"
    }
  },
  {
    title: "Alushade High Rib",
    image: "/lovable-uploads/a9fca02a-57ae-4939-a7fb-1ef84b60ea0b.png",
    specs: {
      thickness: "0.50-0.91",
      effectiveWidth: "872 ± 10",
      overallWidth: "942 ± 10",
      pitch: "125",
      troughDepth: "38",
      length: "Standard/Customized"
    }
  },
  {
    title: "Alushade High Rib",
    image: "/lovable-uploads/a9fca02a-57ae-4939-a7fb-1ef84b60ea0b.png",
    specs: {
      thickness: "0.38-0.55",
      effectiveWidth: "996 ± 10",
      overallWidth: "1062 ± 2",
      pitch: "125 ± 2",
      troughDepth: "38",
      length: "Standard/Customized"
    }
  },
  {
    title: "Alushade Pro Max",
    image: "/lovable-uploads/a9fca02a-57ae-4939-a7fb-1ef84b60ea0b.png",
    specs: {
      thickness: "0.40-0.91",
      effectiveWidth: "1200 ± 2",
      overallWidth: "1262 ± 2",
      pitch: "200",
      troughDepth: "30",
      length: "Standard/Customized"
    }
  },
  {
    title: "Alushade Glam Tile",
    image: "/lovable-uploads/a9fca02a-57ae-4939-a7fb-1ef84b60ea0b.png",
    specs: {
      thickness: "0.50-0.91",
      effectiveWidth: "993 ± 10",
      overallWidth: "1134 ± 10",
      pitch: "248±2",
      troughDepth: "28±2",
      length: "8ft,10ft,12ft,14ft,16ft & 18ft"
    }
  },
  {
    title: "Alushade Terra Tile",
    image: "/lovable-uploads/a9fca02a-57ae-4939-a7fb-1ef84b60ea0b.png",
    specs: {
      thickness: "0.50-0.91",
      effectiveWidth: "1100",
      overallWidth: "960 ± 5",
      pitch: "160 ± 2",
      troughDepth: "30 ± 2",
      length: "8ft,10ft,12ft,14ft,16ft & 18ft"
    }
  },
  {
    title: "Alushade Lux Tile",
    image: "/lovable-uploads/a9fca02a-57ae-4939-a7fb-1ef84b60ea0b.png",
    specs: {
      thickness: "0.50-0.91",
      effectiveWidth: "1114 ± 4",
      overallWidth: "1168 ± 4",
      pitch: "222.8",
      troughDepth: "20",
      length: "8ft,10ft,12ft,14ft,16ft & 18ft"
    }
  }
];

export const RoofingProductsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {roofingProducts.map((product, index) => (
        <RoofingProductCard
          key={index}
          title={product.title}
          image={product.image}
          specs={product.specs}
        />
      ))}
    </div>
  );
};
import { Card } from "@/components/ui/card";

interface RoofingProductSpec {
  thickness: string;
  effectiveWidth: string;
  overallWidth: string;
  pitch: string;
  troughDepth: string;
  length: string;
}

interface RoofingProductCardProps {
  title: string;
  image: string;
  specs: RoofingProductSpec;
}

export const RoofingProductCard = ({ title, image, specs }: RoofingProductCardProps) => {
  return (
    <Card className="overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">{title}</h3>
        <div className="space-y-2 text-sm">
          <p><span className="font-medium">Thickness(mm):</span> {specs.thickness}</p>
          <p><span className="font-medium">Effective Width(mm):</span> {specs.effectiveWidth}</p>
          <p><span className="font-medium">Overall Width (mm):</span> {specs.overallWidth}</p>
          <p><span className="font-medium">Pitch (mm):</span> {specs.pitch}</p>
          <p><span className="font-medium">Trough Depth (mm):</span> {specs.troughDepth}</p>
          <p><span className="font-medium">Length:</span> {specs.length}</p>
        </div>
        <div className="mt-4">
          <p className="font-medium mb-2">Available Colors</p>
          <div className="flex gap-2">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
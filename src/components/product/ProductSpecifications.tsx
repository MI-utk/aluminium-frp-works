import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

interface ProductSpec {
  alloy: string;
  temper?: string;
  thickness?: string;
  diameter?: string;
  width?: string;
  length?: string;
  coilId?: string;
}

interface ProductSpecificationsProps {
  specifications: ProductSpec[];
  isRoofingProduct?: boolean;
}

export const ProductSpecifications = ({ specifications, isRoofingProduct }: ProductSpecificationsProps) => {
  if (isRoofingProduct) {
    return null; // Roofing products have their own grid component
  }

  const hasThickness = specifications[0]?.thickness;
  const hasDiameter = specifications[0]?.diameter;
  const hasWidth = specifications[0]?.width;
  const hasLength = specifications[0]?.length;
  const hasCoilId = specifications[0]?.coilId;
  const hasTemper = specifications[0]?.temper;

  return (
    <Card className="mb-8">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Specifications</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Alloy</TableHead>
                {hasTemper && <TableHead>Temper</TableHead>}
                {hasThickness && <TableHead>Thickness (mm)</TableHead>}
                {hasDiameter && <TableHead>Diameter (mm)</TableHead>}
                {hasWidth && <TableHead>Width (mm)</TableHead>}
                {hasLength && <TableHead>Length (mm)</TableHead>}
                {hasCoilId && <TableHead>Coil ID (mm)</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {specifications.map((spec, index) => (
                <TableRow key={index}>
                  <TableCell>{spec.alloy}</TableCell>
                  {hasTemper && <TableCell>{spec.temper}</TableCell>}
                  {hasThickness && <TableCell>{spec.thickness}</TableCell>}
                  {hasDiameter && <TableCell>{spec.diameter}</TableCell>}
                  {hasWidth && <TableCell>{spec.width}</TableCell>}
                  {hasLength && <TableCell>{spec.length}</TableCell>}
                  {hasCoilId && <TableCell>{spec.coilId}</TableCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  );
};
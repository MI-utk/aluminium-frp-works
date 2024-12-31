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

interface ProductSpecificationsProps {
  specifications: ProductSpec[];
}

export const ProductSpecifications = ({ specifications }: ProductSpecificationsProps) => {
  return (
    <Card className="mb-8">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Specifications</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Alloy</TableHead>
                <TableHead>Temper</TableHead>
                {specifications[0].thickness && <TableHead>Thickness (mm)</TableHead>}
                {specifications[0].diameter && <TableHead>Diameter (mm)</TableHead>}
                {specifications[0].width && <TableHead>Width (mm)</TableHead>}
                {specifications[0].length && <TableHead>Length (mm)</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {specifications.map((spec, index) => (
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
  );
};
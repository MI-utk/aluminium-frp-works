import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

const PriceCircular = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Price Circular
        </h1>
        <div className="grid gap-8 max-w-2xl mx-auto">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">Latest Price List</h3>
                <p className="text-gray-600">Updated: March 2024</p>
              </div>
            </div>
          </Card>
          <p className="text-center text-gray-600">
            Please contact our sales team for the latest pricing information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceCircular;
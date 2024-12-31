import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const PriceCircular = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Price Circular
        </h1>
        <div className="grid gap-8 max-w-2xl mx-auto">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <FileText className="h-8 w-8 text-primary shrink-0" />
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">FRP Products Price List</h3>
                  <p className="text-gray-600 mt-2">
                    Download our latest price list to explore competitive pricing for our comprehensive range of FRP products. 
                    Stay updated with our current offerings and make informed decisions for your projects.
                  </p>
                </div>
                <Button 
                  className="w-full sm:w-auto"
                  onClick={() => window.open("https://drive.google.com/file/d/1IVi9CVthfMVN_zFP3BhpzKzXatPol9dd/view?usp=sharing", "_blank")}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Price List
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <FileText className="h-8 w-8 text-primary shrink-0" />
              <div>
                <h3 className="text-lg font-semibold">Wire Rods Pricing</h3>
                <p className="text-gray-600 mt-2">
                  For the most current pricing information on our Wire Rods products, please reach out to our dedicated sales team. 
                  Our team will provide you with detailed pricing and assist you with your specific requirements. 
                  You can find our Wire Rods sales team contact information in the Contact section.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PriceCircular;
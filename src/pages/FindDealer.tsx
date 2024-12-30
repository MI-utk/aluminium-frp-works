import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const FindDealer = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Find a Dealer
        </h1>
        <div className="max-w-2xl mx-auto">
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Input placeholder="Enter your location" className="flex-1" />
                <Button>
                  <MapPin className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
              <div className="text-center text-gray-600">
                <p>Enter your location to find the nearest dealer</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FindDealer;
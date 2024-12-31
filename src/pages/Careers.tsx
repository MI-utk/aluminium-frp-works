import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Careers = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-600 mb-8">
            Be part of India's leading aluminum manufacturing company and grow your career with us.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <Mail className="w-12 h-12 text-primary mb-2" />
            <p className="text-lg">
              If you are interested in joining Masters India and becoming part of our innovative team, 
              please send your CV to:
            </p>
            <a 
              href="mailto:hr@mastersindia.net" 
              className="text-xl font-semibold text-primary hover:underline"
            >
              hr@mastersindia.net
            </a>
            <p className="text-gray-600 mt-4">
              We review all applications carefully and will contact qualified candidates for further discussion.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Careers;
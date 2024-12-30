import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, ArrowRight } from "lucide-react";

const jobOpenings = [
  {
    title: "Production Engineer",
    department: "Manufacturing",
    location: "Wada, Maharashtra",
    type: "Full-time",
    description: "We are looking for an experienced Production Engineer to join our aluminum manufacturing facility.",
  },
  {
    title: "Quality Control Inspector",
    department: "Quality Assurance",
    location: "Wada, Maharashtra",
    type: "Full-time",
    description: "Seeking a detail-oriented Quality Control Inspector for our aluminum products manufacturing unit.",
  },
  {
    title: "Sales Executive",
    department: "Sales",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    description: "Join our sales team to drive growth in aluminum products distribution across India.",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg text-gray-600">
            Be part of India's leading aluminum manufacturing company and grow your career with us.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.department}
                    </span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                  <p className="text-gray-600">{job.description}</p>
                </div>
                <Button className="shrink-0">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Don't see a position that matches your skills?
          </p>
          <Button variant="outline">
            Send us your CV
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
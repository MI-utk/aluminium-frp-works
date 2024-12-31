import { Card } from "@/components/ui/card";

interface ProductApplicationsProps {
  applications: string[];
}

export const ProductApplications = ({ applications }: ProductApplicationsProps) => {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Applications</h2>
        <ul className="list-disc list-inside space-y-2">
          {applications.map((application, index) => (
            <li key={index} className="text-gray-700">{application}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
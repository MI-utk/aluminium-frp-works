import { Calendar, Recycle, Building, Users } from "lucide-react";

export const StatsSection = () => {
  return (
    <section className="bg-blue-900 py-24 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">OUR DIRECTORS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Managing Director",
              name: "Chandra Prakash Agarwal",
              description: "Founded Masters India in 1999 with a vision for sustainable aluminum recycling."
            },
            {
              title: "Executive Director",
              name: "Rajesh Agarwal",
              description: "Leads operations and strategic growth initiatives across all business units."
            },
            {
              title: "Director",
              name: "Amit Agarwal",
              description: "Oversees international business development and technological advancement."
            }
          ].map((director, index) => (
            <div key={index} className="text-center bg-blue-800/50 p-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-full" />
              <h3 className="text-xl font-bold mb-2">{director.name}</h3>
              <p className="text-sm text-gray-300 mb-4">{director.title}</p>
              <p className="text-sm text-gray-400">{director.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
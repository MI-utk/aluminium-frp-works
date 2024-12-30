import { Calendar, Recycle, Building, Users } from "lucide-react";

export const StatsSection = () => {
  return (
    <section className="bg-[#7FB3D5] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Calendar className="w-8 h-8 mb-2" />
            <div className="text-4xl font-bold mb-1">1999</div>
            <div className="text-sm">Year Established</div>
          </div>
          <div className="flex flex-col items-center">
            <Recycle className="w-8 h-8 mb-2" />
            <div className="text-4xl font-bold mb-1">1M+</div>
            <div className="text-sm">MTS of aluminium recycled</div>
          </div>
          <div className="flex flex-col items-center">
            <Building className="w-8 h-8 mb-2" />
            <div className="text-4xl font-bold mb-1">500k</div>
            <div className="text-sm">Sq. Ft. Plant</div>
          </div>
          <div className="flex flex-col items-center">
            <Users className="w-8 h-8 mb-2" />
            <div className="text-4xl font-bold mb-1">1K+</div>
            <div className="text-sm">Growing family</div>
          </div>
        </div>
      </div>
    </section>
  );
};
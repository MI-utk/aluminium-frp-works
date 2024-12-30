export const StatsSection = () => {
  return (
    <section className="py-16 bg-blue-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-900 mb-2">1999</p>
            <p className="text-gray-600">Year Established</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-900 mb-2">1M+</p>
            <p className="text-gray-600">MTS of aluminium recycled</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-900 mb-2">500k</p>
            <p className="text-gray-600">Sq. Ft. Plant</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-900 mb-2">1K+</p>
            <p className="text-gray-600">Growing family</p>
          </div>
        </div>
      </div>
    </section>
  );
};
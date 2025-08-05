import { config } from "@/lib/config";

const MasterclassesSection = () => {
  return (
    <section id="masterclasses" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Masterclasses
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Led by industry experts, these masterclasses offer deep dives into
            key sectors.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {config.masterclasses.map((masterclass, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {masterclass.sector}
              </h3>
              <p className="text-gray-600 mb-4">{masterclass.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterclassesSection;

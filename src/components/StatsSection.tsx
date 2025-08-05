const StatsSection = () => {
  const stats = [
    { number: "300+", label: "Participants" },
    { number: "19", label: "Northern States" },
    { number: "2", label: "Days Event" },
    { number: "MAP", label: "Focus Sectors" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-nigeria-green relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">
            Fostering a thriving investment ecosystem in Northern Nigeria
          </h2>
          <p className="text-white/90 text-base sm:text-lg max-w-3xl mx-auto px-4">
            A landmark event bringing together 400+ high-level participants from
            across Nigeria, Africa, and the global investment community. The
            summit will facilitate valuable connections among investors,
            government officials, industry leaders, and development partners.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-white/90 text-sm sm:text-base md:text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-white text-nigeria-green font-semibold px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
            PARTNER WITH US
          </button>
        </div>
      </div>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 sm:w-32 h-16 sm:h-32 bg-white/5 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-12 sm:w-24 h-12 sm:h-24 bg-white/5 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-10 sm:w-20 h-10 sm:h-20 bg-white/5 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* <img
          src="/images/icons/icon2.svg"
          alt=""
          className="absolute top-40 right-20 w-12 sm:w-24 h-12 sm:h-24 text-white/10 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <img
          src="/images/icons/icon3.svg"
          alt=""
          className="absolute bottom-40 left-1/4 w-10 sm:w-20 h-10 sm:h-20 text-white/10 animate-pulse"
          style={{ animationDelay: "2s" }}
        /> */}
      </div>
    </section>
  );
};

export default StatsSection;

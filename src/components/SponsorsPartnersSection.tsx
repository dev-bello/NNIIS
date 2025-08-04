import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const SponsorsPartnersSection = () => {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();

  const sponsors = [
    {
      name: "Dangote Group",
      logo: "/images/logos/Dangote.webp",
    },
    {
      name: "BUA Group",
      logo: "/images/logos/bua.jpg",
    },
    {
      name: "Central Bank of Nigeria",
      logo: "/images/logos/cbn.png",
    },
    {
      name: "Nigerian Investment Promotion Commission",
      logo: "/images/logos/COA.png",
    },
    {
      name: "Northern Governors Forum",
      logo: "/images/logos/COA.png",
    },
    {
      name: "Nigerian Export Promotion Council",
      logo: "/images/logos/COA.png",
    },
  ];

  const partners = [
    {
      name: "Ministry of Solid Minerals",
      logo: "/images/logos/msmd.jpeg",
    },
    {
      name: "NITDA",
      logo: "/images/logos/NITDA.png",
    },
    {
      name: "Ministry of Agriculture",
      logo: "/images/logos/COA.png",
    },
    {
      name: "Ministry of Power",
      logo: "/images/logos/COA.png",
    },
    {
      name: "Nigerian Stock Exchange",
      logo: "/images/logos/COA.png",
    },
    {
      name: "NASENI",
      logo: "/images/logos/naseni.png",
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setTime((prev) => prev + 0.03);
    }, 50);
    return () => clearInterval(timer);
  }, [isPaused]);

  const getConcurrentPosition = (
    index: number,
    total: number,
    offset: number = 0
  ) => {
    const spacing = isMobile ? 180 : 220;
    const moveX = (time + offset) * 80; // Slower movement for mobile

    // Calculate base position
    let x = index * spacing - moveX;

    // Create seamless loop by duplicating containers
    const loopLength = total * spacing;
    x = x % loopLength;

    // If container goes off screen to the left, wrap it to the right
    if (x < -200) {
      x += loopLength;
    }

    return {
      x: x,
      y: 0,
    };
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Sponsors & Partners
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            We are proud to work with leading organizations committed to
            Northern Nigeria's economic transformation.
          </p>
        </div>

        {/* Sponsors Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-4 sm:mb-6">
            Our Sponsors
          </h3>
          <div
            className="relative h-48 sm:h-56 md:h-64 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* First set of containers */}
            {sponsors.map((sponsor, index) => {
              const pos = getConcurrentPosition(index, sponsors.length, 0);
              return (
                <div
                  key={`sponsor-1-${index}`}
                  className="absolute top-1/2 transform -translate-y-1/2"
                  style={{
                    transform: `translateX(${pos.x}px)`,
                    left: "0",
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer min-w-[140px] sm:min-w-[160px] md:min-w-[200px] max-w-[140px] sm:max-w-[160px] md:max-w-[200px] text-center">
                    <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <h4 className="font-medium text-gray-900 text-xs sm:text-sm leading-tight">
                      {sponsor.name}
                    </h4>
                  </div>
                </div>
              );
            })}

            {/* Second set of containers for seamless flow */}
            {sponsors.map((sponsor, index) => {
              const pos = getConcurrentPosition(index, sponsors.length, 0);
              return (
                <div
                  key={`sponsor-2-${index}`}
                  className="absolute top-1/2 transform -translate-y-1/2"
                  style={{
                    transform: `translateX(${
                      pos.x + sponsors.length * (isMobile ? 180 : 220)
                    }px)`,
                    left: "0",
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer min-w-[140px] sm:min-w-[160px] md:min-w-[200px] max-w-[140px] sm:max-w-[160px] md:max-w-[200px] text-center">
                    <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <h4 className="font-medium text-gray-900 text-xs sm:text-sm leading-tight">
                      {sponsor.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center mb-4 sm:mb-6">
            Our Partners
          </h3>
          <div
            className="relative h-48 sm:h-56 md:h-64 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* First set of containers */}
            {partners.map((partner, index) => {
              const pos = getConcurrentPosition(index, partners.length, 200);
              return (
                <div
                  key={`partner-1-${index}`}
                  className="absolute top-1/2 transform -translate-y-1/2"
                  style={{
                    transform: `translateX(${pos.x}px)`,
                    left: "0",
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer min-w-[140px] sm:min-w-[160px] md:min-w-[200px] max-w-[140px] sm:max-w-[160px] md:max-w-[200px] text-center">
                    <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <h4 className="font-medium text-gray-900 text-xs sm:text-sm leading-tight">
                      {partner.name}
                    </h4>
                  </div>
                </div>
              );
            })}

            {/* Second set of containers for seamless flow */}
            {partners.map((partner, index) => {
              const pos = getConcurrentPosition(index, partners.length, 200);
              return (
                <div
                  key={`partner-2-${index}`}
                  className="absolute top-1/2 transform -translate-y-1/2"
                  style={{
                    transform: `translateX(${
                      pos.x + partners.length * (isMobile ? 180 : 220)
                    }px)`,
                    left: "0",
                  }}
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer min-w-[140px] sm:min-w-[160px] md:min-w-[200px] max-w-[140px] sm:max-w-[160px] md:max-w-[200px] text-center">
                    <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <h4 className="font-medium text-gray-900 text-xs sm:text-sm leading-tight">
                      {partner.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-16 sm:w-32 h-16 sm:h-32 bg-nigeria-green/5 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-12 sm:w-24 h-12 sm:h-24 bg-nigeria-green/5 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/4 w-10 sm:w-20 h-10 sm:h-20 bg-nigeria-green/5 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsPartnersSection;

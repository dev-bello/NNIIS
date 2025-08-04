import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-nigeria-green/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 sm:w-80 h-40 sm:h-80 bg-red-500/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-32 sm:w-64 h-32 sm:h-64 bg-nigeria-green/3 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block bg-nigeria-green/10 text-nigeria-green text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            About NNIIS 2025
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight">
            <span className="text-red-600">TRANSFORMING</span>{" "}
            <br className="hidden sm:block" />
            <span className="text-nigeria-green">NORTHERN NIGERIA</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            The maiden summit bringing together 300+ stakeholders to unlock
            strategic opportunities in Mining, Agriculture, and Power across the
            19 Northern States.
          </p>
        </div>

        {/* Dynamic Polygon Layout */}
        <div className="relative mb-12 sm:mb-16 md:mb-20">
          {/* Main Content Card */}
          <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              A Landmark Investment Platform
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg text-center max-w-3xl mx-auto">
              Convened by the Northern Elders Forum in strategic collaboration
              with the 19 Northern States, NNIIS 2025 creates a direct bridge
              between investors and transformative opportunities.
            </p>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 max-w-2xl mx-auto">
              <div className="flex items-start group">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-nigeria-green rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">
                    Capital Mobilisation
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Direct investor engagement with project sponsors
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-nigeria-green rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">
                    Regional Integration
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Cross-border industrial and trade corridors
                  </p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-6 sm:w-8 h-6 sm:h-8 bg-nigeria-green rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1 group-hover:scale-110 transition-transform">
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2">
                    Infrastructure Development
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Transformative projects across key sectors
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
          {/* Polygon Images for Mobile */}
          <div className="mt-12 md:hidden">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 items-center">
              {/* Image 1: Tech (Top-Left) */}
              <div className="relative w-full h-32 bg-gray-200 rounded-tl-3xl rounded-br-3xl flex items-center justify-center overflow-hidden shadow-lg group">
                <img
                  src="/images/about-images/tech.jpg"
                  alt="Technology Innovation"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white p-1">
                    <p className="text-xs font-medium">Technology</p>
                  </div>
                </div>
              </div>
              {/* Image 2: Agric (Top-Middle) */}
              <div className="relative w-full h-32 bg-nigeria-green/10 rounded-t-3xl flex items-center justify-center overflow-hidden shadow-lg group">
                <img
                  src="/images/about-images/agric.jpg"
                  alt="Agricultural Development"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-nigeria-green/30 flex items-center justify-center">
                  <div className="text-center text-white p-1">
                    <p className="text-xs font-medium">Agriculture</p>
                  </div>
                </div>
              </div>
              {/* Image 3: Processing (Top-Right) */}
              <div className="relative w-full h-32 bg-red-500/10 rounded-tr-3xl rounded-bl-3xl flex items-center justify-center overflow-hidden shadow-lg group">
                <img
                  src="/images/about-images/agric-2.jpg"
                  alt="Agricultural Processing"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-red-500/30 flex items-center justify-center">
                  <div className="text-center text-white p-1">
                    <p className="text-xs font-medium">Processing</p>
                  </div>
                </div>
              </div>
              {/* Image 4: Mining (Bottom-Left) */}
              <div className="relative w-full h-32 bg-nigeria-green/10 rounded-bl-3xl flex items-center justify-center overflow-hidden shadow-lg group">
                <img
                  src="/images/about-images/mineral.jpg"
                  alt="Mining Operations"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-nigeria-green/30 flex items-center justify-center">
                  <div className="text-center text-white p-1">
                    <p className="text-xs font-medium">Mining</p>
                  </div>
                </div>
              </div>
              {/* Image 5: Power (Bottom-Middle) */}
              <div className="relative w-full h-32 bg-gray-200 rounded-b-3xl flex items-center justify-center overflow-hidden shadow-lg group">
                <img
                  src="/images/about-images/power-2.jpg"
                  alt="Power Infrastructure"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-800/30 flex items-center justify-center">
                  <div className="text-center text-white p-1">
                    <p className="text-xs font-medium">Power</p>
                  </div>
                </div>
              </div>
              {/* Image 6: Resources (Bottom-Right) */}
              <div className="relative w-full h-32 bg-red-500/10 rounded-br-3xl flex items-center justify-center overflow-hidden shadow-lg group">
                <img
                  src="/images/about-images/mineral-2.jpg"
                  alt="Mineral Resources"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-red-500/30 flex items-center justify-center">
                  <div className="text-center text-white p-1">
                    <p className="text-xs font-medium">Resources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Polygon Image Placements - Hidden on mobile for better performance */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
            {/* Top Right - Hexagon */}
            <div className="absolute top-0 right-0 w-48 h-48 transform translate-x-1/4 -translate-y-1/4">
              <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="/images/about-images/tech.jpg"
                  alt="Technology Innovation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-xs font-medium">Technology</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Left - Diamond */}
            <div className="absolute top-0 left-0 w-40 h-40 transform -translate-x-1/4 -translate-y-1/4 rotate-45">
              <div className="w-full h-full bg-nigeria-green/10 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="/images/about-images/agric.jpg"
                  alt="Agricultural Development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-nigeria-green/30 flex items-center justify-center">
                  <div className="text-center text-white -rotate-45">
                    <p className="text-xs font-medium">Agriculture</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right - Triangle */}
            <div className="absolute bottom-0 right-0 w-36 h-36 transform translate-x-1/4 translate-y-1/4">
              <div className="w-full h-full bg-red-500/10 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="/images/about-images/agric-2.jpg"
                  alt="Agricultural Processing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-red-500/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-xs font-medium">Processing</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left - Circle */}
            <div className="absolute bottom-0 left-0 w-44 h-44 transform -translate-x-1/4 translate-y-1/4">
              <div className="w-full h-full bg-nigeria-green/10 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="/images/about-images/mineral.jpg"
                  alt="Mining Operations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-nigeria-green/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-xs font-medium">Mining</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Right - Octagon */}
            <div className="absolute top-1/2 right-0 w-32 h-32 transform translate-x-1/4 -translate-y-1/2">
              <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="/images/about-images/power-2.jpg"
                  alt="Power Infrastructure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-800/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-xs font-medium">Power</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Left - Square */}
            <div className="absolute top-1/2 left-0 w-36 h-36 transform -translate-x-1/4 -translate-y-1/2">
              <div className="w-full h-full bg-red-500/10 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="/images/about-images/mineral-2.jpg"
                  alt="Mineral Resources"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-red-500/30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <p className="text-xs font-medium">Resources</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAP Focus Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 bg-nigeria-green/10 rounded-full group-hover:scale-110 transition-transform"></div>
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-nigeria-green/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Mining
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Unlock the vast mineral wealth across Northern Nigeria's
                  extensive geological formations.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 opacity-20">
                <img
                  src="/images/about-images/mineral.jpg"
                  alt="Mining"
                  className="w-full h-full object-cover rounded-bl-2xl sm:rounded-bl-3xl"
                />
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 bg-red-500/10 rounded-full group-hover:scale-110 transition-transform"></div>
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Agriculture
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Transform agricultural value chains and ensure food security
                  through modern farming techniques.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 opacity-20">
                <img
                  src="/images/about-images/agric.jpg"
                  alt="Agriculture"
                  className="w-full h-full object-cover rounded-bl-2xl sm:rounded-bl-3xl"
                />
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 bg-nigeria-green/10 rounded-full group-hover:scale-110 transition-transform"></div>
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-nigeria-green/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Power
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Develop sustainable energy infrastructure to support
                  industrial growth and development.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 opacity-20">
                <img
                  src="/images/about-images/power-2.jpg"
                  alt="Power"
                  className="w-full h-full object-cover rounded-bl-2xl sm:rounded-bl-3xl"
                />
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -top-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 bg-blue-500/10 rounded-full group-hover:scale-110 transition-transform"></div>
            <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Technology
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  Drive digital transformation and innovation across all sectors
                  for sustainable development.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 opacity-20">
                <img
                  src="/images/about-images/tech.jpg"
                  alt="Technology"
                  className="w-full h-full object-cover rounded-bl-2xl sm:rounded-bl-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

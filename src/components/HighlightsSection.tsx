

const HighlightsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-primary rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-hero">
              <img 
                src="/images/NNIIS.jpg" 
                alt="Northern Nigeria Investment Summit" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Summit Structure & Format
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              The Summit will run for two days and adopt a highly interactive, hybrid format—accommodating 
              both physical and virtual participants from across Nigeria, Africa, and the global investment community. 
              All sessions will be broadcast live with simultaneous documentation available to delegates.
            </p>

            {/* Key Features */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-5 sm:w-6 h-5 sm:h-6 bg-nigeria-green rounded-full flex-shrink-0 mt-1">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white m-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Keynote Speeches</h3>
                  <p className="text-sm sm:text-base text-gray-600">High-level presentations from government officials and industry leaders</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-5 sm:w-6 h-5 sm:h-6 bg-nigeria-green rounded-full flex-shrink-0 mt-1">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white m-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Sectoral Presentations</h3>
                  <p className="text-sm sm:text-base text-gray-600">Focused panel discussions on Mining, Agriculture, and Power sectors</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-5 sm:w-6 h-5 sm:h-6 bg-nigeria-green rounded-full flex-shrink-0 mt-1">
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 text-white m-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Matchmaking Forums</h3>
                  <p className="text-sm sm:text-base text-gray-600">B2B and B2G forums facilitating direct investor engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
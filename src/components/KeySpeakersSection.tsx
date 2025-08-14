const KeySpeakersSection = () => {
  const speakers = [
    {
      name: "H.E. Bola Ahmed Tinubu, GCFR",
      title: "President, Federal Republic of Nigeria",
      role: "Special Guest of Honour",
      image: "/images/tinubu.png",
    },
    {
      name: "Prof. Ango Abdullahi, CON",
      title: "Convener, Northern Elders Forum",
      role: "Convener",
      image: "/images/profango.png",
    },
    {
      name: "Gen. Yakubu Gowon",
      title: "Former Nigerian Head of State",
      role: "Grand Patron Opening Ceremony",
      image: "/images/gowon.webp",
    },
    {
      name: "Gen. T.Y Danjuma",
      title: "Former Cheif of Army Staff",
      role: "Father of the Day",
      image: "/images/danjuma.jpg",
    },
    {
      name: "Alhaji Aliko Dangote",
      title: "Chairman, Dangote Group",
      role: "Plenary Chair",
      image: "/images/aliko.png",
    },
    {
      name: "Dr. Akinwumi Adesina",
      title: "Former Minister of Agriculture and Food Security",
      role: "Keynote Speaker",
      image: "/images/adesina.png",
    },
    {
      name: "Alhaji Abdulsamad Rabiu",
      title: "Chairman, BUA Group",
      role: "Plenary Chair",
      image: "/images/bua.png",
    },
    {
      name: "Muhammad Sanusi II",
      title: "Former CBN Governor",
      role: "Industry Expert",
      image: "/images/sls.png",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Distinguished Speakers & Special Guests
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            The summit will feature high-level speakers including government
            officials, industry leaders, and development partners committed to
            Northern Nigeria's economic transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:shadow-card transition-shadow"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-3 sm:mb-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight">
                {speaker.name}
              </h3>
              <p className="text-gray-600 mb-2 text-xs sm:text-sm leading-tight">
                {speaker.title}
              </p>
              <span className="inline-block bg-nigeria-green text-white text-xs px-2 sm:px-3 py-1 rounded-full">
                {speaker.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeySpeakersSection;

const TickerSection = () => {
  const tickerContent = [
    "NORTHERN NIGERIA INVESTMENT & INDUSTRIALISATION SUMMIT 2025",
    "29TH - 30TH SEPTEMBER 2025",
    "LADI KWALI HALL, ABUJA CONTINENTAL",
    "UNLOCKING STRATEGIC OPPORTUNITIES IN MINING, AGRICULTURE, AND POWER",
    "NORTHERN NIGERIA INVESTMENT & INDUSTRIALISATION SUMMIT 2025",
    "29TH - 30TH SEPTEMBER 2025",
    "LADI KWALI HALL, ABUJA CONTINENTAL",
    "UNLOCKING STRATEGIC OPPORTUNITIES IN MINING, AGRICULTURE, AND POWER",
  ];

  return (
    <div className="bg-nigeria-green-dark py-3 sm:py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {tickerContent.map((text, index) => (
          <span
            key={index}
            className="text-white font-semibold text-sm sm:text-base md:text-lg mx-4 sm:mx-6 md:mx-8 flex items-center"
          >
            {text}
            <span className="text-nigeria-green-light text-xl sm:text-2xl md:text-3xl mx-2 sm:mx-3 md:mx-4">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerSection;
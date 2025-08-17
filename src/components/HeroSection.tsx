import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";

function getCountdownToSept29() {
  const targetDate = new Date("2025-09-29T09:00:00");
  const now = new Date();
  const timeDiff = targetDate.getTime() - now.getTime();

  if (timeDiff <= 0) {
    return "Event has started!";
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
}

const HeroSection = () => {
  const [countdownToEvent, setCountdownToEvent] = useState(
    getCountdownToSept29()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownToEvent(getCountdownToSept29());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Northern Nigeria Investment & <br className="hidden sm:block" />
          <span className="text-nigeria-green-light">
            Industrialisation Summit
          </span>
        </h1>

        {/* Digital Countdown Timer */}
        <div className="absolute top-4 right-0 sm:right-4 flex flex-col sm:flex-row gap-2 text-white z-10">
          {countdownToEvent !== "Event has started!" ? (
            <>
              {countdownToEvent.match(/\d+/g)?.map((num, index) => {
                const labels = ["Days", "Hours", "Minutes", "Seconds"];
                return (
                  <div
                    key={index}
                    className="inline-block bg-white/10 rounded-lg p-1 sm:p-3 min-w-[10px] sm:min-w-[80px] text-center backdrop-blur-sm"
                  >
                    <div className="text-[.7rem] sm:text-2xl md:text-3xl font-mono font-bold text-green-400 leading-none">
                      {num.padStart(2, "0")}
                    </div>
                    <div className="text-[10px] sm:text-xs text-white/70 mt-1 uppercase tracking-wider">
                      {labels[index]}
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="bg-white/10 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
              <div className="text-base sm:text-lg font-mono font-bold text-red-400">
                Summit Kicked off!
              </div>
            </div>
          )}
        </div>

        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Unlocking Strategic Opportunities in Mining, Agriculture, and Power.
          <span className="text-red-600  font-bold">(MAP) </span>
        </p>

        {/* Event Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">
                September 29-30
              </div>
              <div className="text-xs sm:text-sm opacity-80">2025</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">Abuja</div>
              <div className="text-xs sm:text-sm opacity-80">
                Ladi Kwali Hall, Abuja Continental
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">NNIIS</div>
              <div className="text-xs sm:text-sm opacity-80">
                Investment Summit
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
            <a href="/register">Register Now</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-primary"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 sm:w-32 h-16 sm:h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-12 sm:w-24 h-12 sm:h-24 bg-white/10 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-10 sm:w-20 h-10 sm:h-20 bg-white/10 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-8 sm:w-16 h-8 sm:h-16 bg-white/5 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-6 sm:w-12 h-6 sm:h-12 bg-white/5 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-14 sm:w-28 h-14 sm:h-28 bg-white/5 rounded-full animate-pulse"
          style={{ animationDelay: "0.8s" }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;

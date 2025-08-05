import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";

const HeroSection = () => {
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

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Unlocking Strategic Opportunities in Mining, Agriculture, and Power
        </p>

        {/* Event Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">September 3-4</div>
              <div className="text-xs sm:text-sm opacity-80">2025</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold">Abuja</div>
              <div className="text-xs sm:text-sm opacity-80">
                NAF Conference Center
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

        <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
          <a href="/register">{config.buttons.register}</a>
        </Button>
      </div>

      {/* Background Decorative Elements */}
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

        {/* <img
          src="/images/icons/icon2.svg"
          alt=""
          className="absolute top-40 right-20 w-12 sm:w-24 h-12 sm:h-24 text-white/20 animate-pulse"
          style={{ animationDelay: "1s" }}
        /> */}
      </div>
    </section>
  );
};

export default HeroSection;

import { FC } from "react";

const RegisterHeroSection: FC = () => {
  return (
    <section className="relative bg-gradient-hero py-20 px-4 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Register for NNIIS 2025
        </h1>
        <p className="text-lg md:text-xl opacity-90">
          Secure your spot at the premier investment and industrialization
          summit in Northern Nigeria.
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </section>
  );
};

export default RegisterHeroSection;

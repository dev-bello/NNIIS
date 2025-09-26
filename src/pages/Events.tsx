import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { MasterclassCard } from "@/components/MasterclassCard";
import { PanelCard } from "@/components/PanelCard";
import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";
import { Link } from "react-router-dom";

const EventsPage = () => {
  return (
    <div>
      <Header />
      <section className="relative bg-gray-800 text-white py-20 sm:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/events/masterclass/masterclass.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Panels & Masterclasses
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Gain in-depth knowledge and practical skills from industry leaders
            in these exclusive sessions.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <Button asChild>
              <Link to="/">{"<- Back to Home"}</Link>
            </Button>
          </div>

          <h2 className="text-3xl font-bold text-center mb-8">Panels</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {config.panels.map((panel, index) => (
              <PanelCard key={index} panel={panel} />
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mt-16">
            Masterclasses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {config.masterclasses.map((masterclass, index) => (
              <MasterclassCard key={index} masterclass={masterclass} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EventsPage;

import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";
import { Link } from "react-router-dom";

const MasterclassesPage = () => {
  return (
    <div>
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
            Masterclasses
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Gain in-depth knowledge and practical skills from industry leaders
            in these exclusive masterclasses.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild>
              <Link to="/">{"<- Back to Home"}</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {config.masterclasses.map((masterclass, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col group"
              >
                <div className="relative">
                  <img
                    src={masterclass.image}
                    alt={masterclass.title}
                    className="rounded-lg mb-4 h-48 w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={`/images/icons/icon${(index % 3) + 1}.svg`}
                    alt=""
                    className="w-10 h-10 absolute -top-2 -right-2 bg-white rounded-full p-1 border-2 border-primary"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {masterclass.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {masterclass.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    with{" "}
                    <span className="font-semibold">{masterclass.expert}</span>
                  </p>
                </div>
                <Button asChild className="mt-6 w-full">
                  <a href="/register">Register Now</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasterclassesPage;

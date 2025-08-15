import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const B2BPage = () => {
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
            Strategic Matchmaking
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Connect with the right partners to grow your business and drive
            development.
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Forge Strategic Alliances
              </h2>
              <p className="text-gray-600 text-lg">
                Our matchmaking services are designed to help you find the right
                partners, investors, and clients to accelerate your growth. We
                facilitate meaningful connections through curated one-on-one
                meetings across various sectors.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B</h3>
                <p className="text-gray-600">
                  Connect with other businesses to explore synergies, form
                  partnerships, and expand your market reach.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">G2B</h3>
                <p className="text-gray-600">
                  Engage with government agencies to understand policy, explore
                  public-private partnerships, and access new opportunities.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">G2G</h3>
                <p className="text-gray-600">
                  Facilitating dialogue and collaboration between government
                  bodies to drive regional development and policy alignment.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/register?type=matchmaking">
                  Register for Matchmaking
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2BPage;

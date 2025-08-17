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
            Matchmaking Sessions
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Connect with potential partners, investors, and clients in
            prescheduled meetings.
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
                Find Your Next Opportunity
              </h2>
              <p className="text-gray-600 text-lg">
                Our matchmaking platform helps you connect with the right people
                to accelerate your business. Whether you're looking for
                investment, strategic partnerships, or new clients, our curated
                sessions provide the perfect opportunity to network and grow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Investor Connect
                </h3>
                <p className="text-gray-600">
                  Meet with venture capitalists, angel investors, and
                  institutional funders to secure investment for your projects.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Partnership Hub
                </h3>
                <p className="text-gray-600">
                  Discover new business opportunities by connecting with
                  potential partners for joint ventures and collaborations.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Client Meetings
                </h3>
                <p className="text-gray-600">
                  Schedule one-on-one meetings with potential clients to
                  showcase your products and services.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/register?type=matchmaking">
                  Register for Matchmaking Sessions
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

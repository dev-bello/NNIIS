import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MatchmakingSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          B2B Matchmaking
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with potential partners, investors, and clients through our
          curated B2B matchmaking sessions.
        </p>
        <Button asChild size="lg">
          <Link to="/register">Register for Matchmaking</Link>
        </Button>
      </div>
    </section>
  );
};

export default MatchmakingSection;

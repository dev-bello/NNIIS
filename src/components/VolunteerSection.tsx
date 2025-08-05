import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VolunteerSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Become a Volunteer
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our dedicated team of volunteers and be a part of making NNIIS
          2025 a landmark event. Your contribution is invaluable.
        </p>
        <Button asChild size="lg">
          <Link to="/volunteer">Apply to Volunteer</Link>
        </Button>
      </div>
    </section>
  );
};

export default VolunteerSection;

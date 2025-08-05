import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const VolunteerPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Become a Volunteer
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join our team and help make NNIIS 2025 a success!
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <Input
              name="full-name"
              type="text"
              required
              placeholder="Full Name"
            />
            <Input
              name="email"
              type="email"
              required
              placeholder="Email Address"
            />
            <Input
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
            />
            <textarea
              name="skills"
              placeholder="Skills and Experience"
              className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md"
            />
            <select
              name="availability"
              className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md"
            >
              <option>Full-time</option>
              <option>Part-time</option>
            </select>
          </div>

          <div>
            <Button type="submit" className="w-full">
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerPage;

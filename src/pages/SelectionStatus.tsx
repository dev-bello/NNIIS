import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Mail } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const SelectionStatusPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleMagicLinkCallback = async () => {
      const params = new URLSearchParams(location.search);
      const hashParams = new URLSearchParams(location.hash.substring(1));

      // Check if this is a magic link callback
      const accessToken = hashParams.get("access_token");
      const refreshToken = hashParams.get("refresh_token");
      const type = hashParams.get("type");

      if (accessToken && refreshToken && type === "magiclink") {
        try {
          // Set the session with the tokens from the URL
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (error) {
            console.error("Error setting session:", error);
            toast.error("Error processing notification. Please try again.");
            setIsLoading(false);
            return;
          }

          if (data.user) {
            setUserEmail(data.user.email);
            toast.success("Notification processed successfully!");
          }
        } catch (error) {
          console.error("Magic link processing error:", error);
          toast.error("Error during processing. Please try again.");
        }
      }

      setIsLoading(false);
    };

    handleMagicLinkCallback();
  }, [location]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-lg shadow-lg">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500"></div>
          </div>
          <h2 className="mt-6 text-2xl font-extrabold text-gray-900">
            Processing notification...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center bg-white p-10 rounded-lg shadow-lg">
        <div className="flex justify-center">
          <Clock className="h-16 w-16 text-blue-500" />
        </div>

        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Selection Process Update
        </h2>

        <div className="mt-4 space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-center mb-2">
              <Mail className="h-5 w-5 text-blue-500 mr-2" />
              <span className="font-medium text-blue-800">
                You'll Be Notified Soon
              </span>
            </div>
            <p className="text-sm text-blue-700">
              Thank you for your patience. We are currently reviewing all
              registrations for the Northern Nigeria Investment &
              Industrialisation Summit 2025.
            </p>
          </div>

          {userEmail && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="font-medium text-green-800">
                  Notification Confirmed
                </span>
              </div>
              <p className="text-sm text-green-700">
                We have your email ({userEmail}) and will contact you within the
                next few days with information about your attendance status.
              </p>
            </div>
          )}

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-800 mb-2">
              What happens next?
            </h3>
            <ul className="text-sm text-gray-600 space-y-1 text-left">
              <li>
                • We'll review your registration for physical attendance
                eligibility
              </li>
              <li>
                • Priority is given to technocrats, SME owners, investors, and
                policymakers
              </li>
              <li>• You'll receive an email with your attendance status</li>
              <li>
                • All registrants get access to live-stream if not selected for
                physical attendance
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-medium text-yellow-800 mb-2">
              📅 Event Details
            </h3>
            <div className="text-sm text-yellow-700 text-left">
              <p>
                <strong>Date:</strong> September 29-30, 2025
              </p>
              <p>
                <strong>Venue:</strong> Ladi Kwali Hall, Abuja Continental
              </p>
              <p>
                <strong>Theme:</strong> Unlocking Strategic Opportunities in
                Mining, Agriculture, and Power
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Button
            onClick={() => (window.location.href = "/")}
            className="w-full"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SelectionStatusPage;

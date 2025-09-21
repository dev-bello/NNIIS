import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Clock } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const RegistrationSuccessPage = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [emailSent, setEmailSent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleEmailVerification = async () => {
      const params = new URLSearchParams(location.search);
      const hashParams = new URLSearchParams(location.hash.substring(1));

      // Check if this is an email verification callback
      const accessToken = hashParams.get("access_token");
      const refreshToken = hashParams.get("refresh_token");
      const type = hashParams.get("type");

      if (accessToken && refreshToken && type === "signup") {
        try {
          // Set the session with the tokens from the URL
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (error) {
            console.error("Error setting session:", error);
            toast.error("Error verifying email. Please try again.");
            setIsLoading(false);
            return;
          }

          if (data.user && data.user.email_confirmed_at) {
            setIsVerified(true);
            setEmailSent(true);
            toast.success(
              "Email verified successfully! Wait for confirmation of attendance."
            );

            // The trigger should automatically send the confirmation email
            // when the user's email_confirmed_at is set
          }
        } catch (error) {
          console.error("Verification error:", error);
          toast.error("Error during verification. Please try again.");
        }
      } else if (params.get("verified") === "true") {
        setIsVerified(true);
        setEmailSent(true);
      }

      setIsLoading(false);
    };

    handleEmailVerification();
  }, [location]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-lg shadow-lg">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500"></div>
          </div>
          <h2 className="mt-6 text-2xl font-extrabold text-gray-900">
            Verifying your email...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 text-center bg-white p-10 rounded-lg shadow-lg">
        <div className="flex justify-center">
          {isVerified ? (
            <CheckCircle className="h-16 w-16 text-green-500" />
          ) : (
            <Mail className="h-16 w-16 text-blue-500" />
          )}
        </div>

        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          {isVerified
            ? "Email Verified Successfully!"
            : "Registration Successful!"}
        </h2>

        <div className="mt-4 space-y-4">
          {isVerified ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span className="font-medium text-green-800">
                  Email Verified
                </span>
              </div>
              <p className="text-sm text-green-700">
                Thank you for verifying your email address! We've sent you a
                confirmation email with next steps.
              </p>
              {emailSent && (
                <div className="mt-3 flex items-center justify-center text-sm text-green-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Confirmation email will be sent</span>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Mail className="h-5 w-5 text-blue-500 mr-2" />
                <span className="font-medium text-blue-800">
                  Check Your Email
                </span>
              </div>
              <p className="text-sm text-blue-700">
                We've sent a verification link to your email address. Please
                click the link to complete your registration.
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
              <li>
                • You'll receive an email within a few days about your
                attendance status
              </li>
              <li>
                • All registrants get access to live-stream if not selected for
                physical attendance
              </li>
            </ul>
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

export default RegistrationSuccessPage;

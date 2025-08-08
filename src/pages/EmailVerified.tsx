import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EmailVerifiedPage = () => {
  const [isVerified, setIsVerified] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.hash.substring(1)); // Remove '#' from the beginning
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");

    if (accessToken && refreshToken) {
      setIsVerified(true);
    } else {
      navigate("/");
    }
  }, [location, navigate]);

  if (!isVerified) {
    return null; // Render nothing while redirecting
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-lg shadow-lg">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Email Verified Successfully!
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Thank you for verifying your email address. You can now proceed to the
          event.
        </p>
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

export default EmailVerifiedPage;

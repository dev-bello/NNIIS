import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import QRCode from "react-qr-code";

const RetrieveQrPage = () => {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchUserData = async () => {
      if (id) {
        setIsLoading(true);
        const { data, error } = await supabase
          .from("attendees")
          .select("*")
          .eq("id", id)
          .single();

        if (data) {
          setUserData(data);
        } else {
          setError("User not found.");
        }
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  const handleRetrieveByEmail = async () => {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setIsLoading(true);
    setError("");
    setUserData(null);

    const { data, error } = await supabase
      .from("attendees")
      .select("*")
      .eq("email", email)
      .single();

    if (error && error.code !== "PGRST116") {
      console.error("Error fetching user data:", error);
      setError("An error occurred while fetching your data. Please try again.");
    } else if (data) {
      // Instead of setting user data directly, navigate to the user-specific page
      window.location.href = `/retrieve-qr/${data.id}`;
    } else {
      setError("No registration found with this email address.");
    }

    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Loading user data...</p>
      </div>
    );
  }

  // Display user data if ID is present in URL
  if (id && userData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Your Registration Details
          </h2>
          <div className="mt-6 flex justify-center">
            <QRCode
              value={`${window.location.origin}/retrieve-qr/${userData.id}`}
              size={200}
            />
          </div>
          <div className="mt-8 text-left space-y-4 text-gray-700">
            <p>
              <strong className="font-semibold text-gray-900">Name:</strong>{" "}
              {userData.full_name}
            </p>
            <p>
              <strong className="font-semibold text-gray-900">Email:</strong>{" "}
              {userData.email}
            </p>
            {userData.masterclasses && userData.masterclasses.length > 0 && (
              <div>
                <strong className="font-semibold text-gray-900">
                  Masterclasses:
                </strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {userData.masterclasses.map((masterclass: string) => (
                    <Badge
                      key={masterclass}
                      variant="secondary"
                      className="text-sm"
                    >
                      {masterclass}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Button
            onClick={() => (window.location.href = "/")}
            className="mt-8 w-full"
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  // Display email form if no ID is in URL
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Retrieve Your QR Code
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter the email address you used to register.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div>
            <Button
              onClick={handleRetrieveByEmail}
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isLoading ? "Retrieving..." : "Retrieve QR Code"}
            </Button>
          </div>
        </div>
        <Button
          onClick={() => (window.location.href = "/")}
          className="mt-4 w-full"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default RetrieveQrPage;

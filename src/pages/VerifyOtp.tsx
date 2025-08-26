import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const VerifyOtpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get("email");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Login temporarily disabled until users have been selected
    toast.info("Login is currently disabled. Please check back later.");
    return;
    // const form = e.currentTarget;
    // const formData = new FormData(form);
    // const data = Object.fromEntries(formData.entries());
    // if (!email) {
    //   toast.error("Email not found.");
    //   return;
    // }
    // const {
    //   data: { session },
    //   error,
    // } = await supabase.auth.verifyOtp({
    //   email,
    //   token: data.otp as string,
    //   type: "email",
    // });
    // if (error) {
    //   toast.error("Invalid OTP. Please try again.");
    // } else if (session) {
    //   toast.success("Login successful!");
    //   navigate("/dashboard");
    // }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Enter Verification Code
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <Label htmlFor="otp">Verification Code</Label>
              <Input
                id="otp"
                name="otp"
                type="text"
                required
                placeholder="Enter the code sent to your email"
              />
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full" disabled={true}>
              Login disabled
            </Button>
            <p className="mt-2 text-center text-sm text-gray-500">
              Login will be enabled after users have been selected.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtpPage;

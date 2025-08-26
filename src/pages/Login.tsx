import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Login temporarily disabled until users have been selected
    toast.info("Login is currently disabled. Please check back later.");
    return;
    // const form = e.currentTarget;
    // const formData = new FormData(form);
    // const data = Object.fromEntries(formData.entries());
    // const { error } = await supabase.auth.signInWithOtp({
    //   email: data.email as string,
    //   options: {
    //     shouldCreateUser: false,
    //     emailRedirectTo: `${window.location.origin}/dashboard`,
    //     data: {
    //       login_type: "secure_code",
    //       phone: data.phone as string,
    //     },
    //   },
    // });
    // if (error) {
    //   toast.error("Error sending login code. Please try again.");
    // } else {
    //   toast.success("Login code sent! Please check your email.");
    //   navigate(`/verify-otp?email=${data.email}`);
    // }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email Address"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Phone Number"
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

export default LoginPage;

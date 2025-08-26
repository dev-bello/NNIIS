import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useState } from "react";

const ExhibitionBooth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [industry, setIndustry] = useState("");
  const [sponsorshipPackage, setSponsorshipPackage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const exhibitorData = {
      company_name: data["company-name"] as string,
      email: data.email as string,
      industry: industry,
      website: data.website as string,
      package: sponsorshipPackage,
    };

    try {
      // First, check if exhibitor already exists
      const { data: existingExhibitor } = await supabase
        .from("exhibitors")
        .select("email")
        .eq("email", exhibitorData.email)
        .single();

      if (existingExhibitor) {
        setIsLoading(false);
        toast.error(
          "Email already registered as exhibitor. Please use a different email."
        );
        return;
      }

      // Create auth user first
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: exhibitorData.email,
        password: Math.random().toString(36).slice(-8), // Generate random password
        options: {
          data: {
            company_name: exhibitorData.company_name,
            email: exhibitorData.email,
            industry: exhibitorData.industry,
            user_type: "exhibitor",
          },
          emailRedirectTo: `${window.location.origin}/registration-success`,
        },
      });

      if (authError) {
        setIsLoading(false);
        console.error("Auth error:", authError);
        if (authError.message.includes("User already registered")) {
          toast.error(
            "Email already registered. Please login or use a different email."
          );
        } else {
          toast.error("Error creating account. Please try again.");
        }
        return;
      }

      if (!authData.user) {
        setIsLoading(false);
        toast.error("Error creating user account. Please try again.");
        return;
      }

      // Insert exhibitor data using the auth user's ID
      const { error: insertError } = await supabase.from("exhibitors").insert([
        {
          ...exhibitorData,
          id: authData.user.id, // Use the auth user's ID
        },
      ]);

      setIsLoading(false);

      if (insertError) {
        console.error("Insert error:", insertError);
        // If exhibitor insert fails, we should clean up the auth user
        await supabase.auth.admin.deleteUser(authData.user.id);
        toast.error("Error saving exhibitor data. Please try again.");
        return;
      }

      toast.success(
        "Registration successful! Please check your email and click the verification link. You will be contacted to complete your registration."
      );

      // Reset form
      form.reset();
      setIndustry("");
      setSponsorshipPackage("");
    } catch (error) {
      setIsLoading(false);
      console.error("Exhibition registration error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <form
      className="bg-white p-4 sm:p-8 rounded-lg max-w-2xl mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center mb-8">
        <img
          src="/images/events/exhibition/exhibition_transparent.PNG"
          alt="Exhibition Booth"
          className="w-20 h-20 sm:w-28 sm:h-20 mr-1"
        />
        <h2 className="text-xl sm:text-2xl font-bold">Exhibition Booth</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div className="space-y-2">
          <Label htmlFor="company-name">
            Company Name <span className="text-red-600">*</span>
          </Label>
          <Input
            id="company-name"
            name="company-name"
            placeholder="Name of company"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company-email">
            Company Email <span className="text-red-600">*</span>
          </Label>
          <Input
            id="company-email"
            name="email"
            placeholder="Enter email address"
            type="email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="industry">
            Industry <span className="text-red-600">*</span>
          </Label>
          <Select
            name="industry"
            required
            onValueChange={setIndustry}
            value={industry}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="agriculture">Agriculture</SelectItem>
              <SelectItem value="power">Power</SelectItem>
              <SelectItem value="Health">Health</SelectItem>
              <SelectItem value="infrastructure">Infrastructure</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            name="website"
            placeholder="e.g. https://example.com"
            type="url"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="package">
            Package <span className="text-red-600">*</span>
          </Label>
          <Select
            name="package"
            required
            onValueChange={setSponsorshipPackage}
            value={sponsorshipPackage}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Sponsorship package" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Platinum-sponsor">Platinum Sponsor</SelectItem>
              <SelectItem value="gold-sponsor">Gold Sponsor</SelectItem>
              <SelectItem value="silver-sponsor">Silver Sponsor</SelectItem>
              <SelectItem value="bronze-sponsor">Exhibitor</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-8 bg-green-100 p-4 rounded-lg text-center">
        <p className="font-semibold">
          We would send an email to the contact you provided
        </p>
        <p className="text-sm">
          You will be required to provide more details about specification of
          booth space
        </p>
      </div>
      <div className="mt-8 flex justify-end">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default ExhibitionBooth;

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const { error } = await supabase.auth.signUp({
      email: data.email as string,
      password: Math.random().toString(36).slice(-8),
      options: {
        data: {
          ...data,
          type: "exhibitor",
        },
      },
    });

    setIsLoading(false);

    if (error) {
      toast.error("Error registering exhibitor. Please try again.");
    } else {
      toast.success(
        "Registration successful! Please check your email to confirm."
      );
      form.reset();
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
          <Select name="industry" required>
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

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const VolunteerPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    "previous-activities": "",
    phone: "",
    "state-of-origin": "",
    gender: "Male",
    "state-of-residence": "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("volunteers").insert([
      {
        name: formData.name,
        email: formData.email,
        previous_activities: formData["previous-activities"],
        phone_number: formData.phone,
        state_of_origin: formData["state-of-origin"],
        gender: formData.gender,
        state_of_residence: formData["state-of-residence"],
      },
    ]);

    if (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your application.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Your application has been submitted successfully.",
      });
      setFormData({
        name: "",
        email: "",
        "previous-activities": "",
        phone: "",
        "state-of-origin": "",
        gender: "Male",
        "state-of-residence": "",
      });
    }
  };

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
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <Input
              name="name"
              type="text"
              required
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="previous-activities"
              placeholder="Previous Volunteer Activities (if yes, state it)"
              className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md"
              value={formData["previous-activities"]}
              onChange={handleChange}
            />
            <Input
              name="phone"
              type="tel"
              required
              placeholder="Phone Number (WhatsApp Preferred)"
              value={formData.phone}
              onChange={handleChange}
            />
            <Input
              name="state-of-origin"
              type="text"
              required
              placeholder="State of Origin"
              value={formData["state-of-origin"]}
              onChange={handleChange}
            />
            <select
              name="gender"
              className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md"
              value={formData.gender}
              onChange={handleChange}
            >
              <option>Male</option>
              <option>Female</option>
            </select>
            <Input
              name="state-of-residence"
              type="text"
              required
              placeholder="State of Residence"
              value={formData["state-of-residence"]}
              onChange={handleChange}
            />
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

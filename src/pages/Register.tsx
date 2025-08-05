import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { config } from "@/lib/config";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RegisterPage = () => {
  const [searchParams] = useSearchParams();
  const [registrationType, setRegistrationType] = useState("attendee");
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);

  const handleClassChange = (className: string) => {
    setSelectedClasses((prev) =>
      prev.includes(className)
        ? prev.filter((c) => c !== className)
        : [...prev, className]
    );
  };

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "exhibitor") {
      setRegistrationType(type);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register for NNIIS 2025
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="flex rounded-md shadow-sm">
            <button
              onClick={() => setRegistrationType("attendee")}
              className={`px-4 py-2 border border-gray-300 text-sm font-medium rounded-l-md ${
                registrationType === "attendee"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Attendee
            </button>
            <button
              onClick={() => setRegistrationType("exhibitor")}
              className={`px-4 py-2 border-t border-b border-gray-300 text-sm font-medium ${
                registrationType === "exhibitor"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Exhibitor
            </button>
          </div>
        </div>

        {registrationType === "attendee" ? (
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
              <Input name="phone" type="tel" placeholder="Phone Number" />
              <Input
                name="organization"
                type="text"
                placeholder="Organization"
              />
              <Input name="job-title" type="text" placeholder="Job Title" />
            </div>

            <div className="space-y-4">
              <Label>Masterclasses (select up to 4)</Label>
              {config.masterclasses.map((masterclass) => (
                <div key={masterclass.title} className="flex items-center">
                  <Checkbox
                    id={`attendee-${masterclass.title}`}
                    onCheckedChange={() => handleClassChange(masterclass.title)}
                    disabled={
                      selectedClasses.length >= 4 &&
                      !selectedClasses.includes(masterclass.title)
                    }
                  />
                  <Label
                    htmlFor={`attendee-${masterclass.title}`}
                    className="ml-2"
                  >
                    {masterclass.title}
                  </Label>
                </div>
              ))}
            </div>

            <div>
              <Button type="submit" className="w-full">
                {config.buttons.register}
              </Button>
            </div>
          </form>
        ) : registrationType === "exhibitor" ? (
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <Input
                name="company-name"
                type="text"
                required
                placeholder="Company Name"
              />
              <Input
                name="contact-person"
                type="text"
                required
                placeholder="Contact Person"
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
                name="address"
                placeholder="Company Address"
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md"
              />
              <select
                name="sponsorship-tier"
                className="w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md"
                defaultValue={searchParams.get("tier") || ""}
              >
                <option value="platinum">Platinum Sponsor</option>
                <option value="gold">Gold Sponsor</option>
                <option value="silver">Silver Sponsor</option>
                <option value="exhibitor">Exhibitor</option>
              </select>
            </div>

            <div>
              <Button type="submit" className="w-full">
                Book Your Stand
              </Button>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
};

export default RegisterPage;

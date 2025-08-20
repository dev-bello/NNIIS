import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { config } from "@/lib/config";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import ExhibitionBooth from "@/components/ExhibitionBooth";

type FormData = {
  "first-name"?: string;
  surname?: string;
  email?: string;
  phone?: string;
  organization?: string;
  "job-title"?: string;
  "company-name"?: string;
  "industry-type"?: string;
  website?: string;
  socials?: string;
  "contact-person"?: string;
  "contact-person-role"?: string;
  interests?: string[];
  [key: string]: any;
};

const RegisterPage = () => {
  const [searchParams] = useSearchParams();
  const [registrationType, setRegistrationType] = useState("attendee");
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [userType, setUserType] = useState("individual");
  const [wantsMasterclass, setWantsMasterclass] = useState(false);

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

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const interests = formData.getAll("interests") as string[];
    const newData = { ...data, interests };
    setFormData(newData);
    if (wantsMasterclass) {
      setStep(2);
    } else {
      handleAttendeeSubmit(newData);
    }
  };

  const handleAttendeeSubmit = async (data: FormData) => {
    setIsLoading(true);
    const thematicAreas = config.thematicAreas.reduce((acc, area) => {
      if (data[area.title]) {
        return { ...acc, [area.title]: data[area.title] };
      }
      return acc;
    }, {});

    let submissionData: any = {
      full_name: `${data["first-name"]} ${data.surname}`,
      phone: data.phone,
      thematic_areas: { ...thematicAreas, ...selectedClasses },
      type: userType === "company" ? "attendee_company" : "attendee_individual",
      interests: data.interests,
    };

    if (userType === "company") {
      submissionData = {
        ...submissionData,
        company_name: data["company-name"],
        industry_type: data["industry-type"],
        website: data.website,
        socials: data.socials,
        contact_person: data["contact-person"],
        contact_person_role: data["contact-person-role"],
        interests: data.interests,
      };
    }

    const { error } = await supabase.auth.signUp({
      email: data.email as string,
      password: Math.random().toString(36).slice(-8), // Generate a random password
      options: {
        data: submissionData,
      },
    });

    setIsLoading(false);

    if (error) {
      if (error.message.includes("User already registered")) {
        toast.error("User already registered. Please login.");
      } else {
        toast.error("Error registering attendee. Please try again.");
      }
    } else {
      fetch("/api/send-qr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          record: {
            email: data.email,
            full_name: `${data["first-name"]} ${data.surname}`,
          },
        }),
      });
      toast.success(
        "Registration successful! Please check your email to confirm."
      );
      setStep(1);
      setFormData({});
      setSelectedClasses([]);
      // Reset the form
      const form = document.querySelector("form");
      if (form) {
        form.reset();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-4 left-4 bg-green-600 py-1l px-3 text-sm rounded text-white border border-black-600">
        <a href="/">Back </a>
      </div>
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

        <div className="text-center">
          <a
            href="/login"
            className="font-medium text-primary hover:text-primary-dark"
          >
            Already registered? Login
          </a>
        </div>

        {registrationType === "attendee" ? (
          <div>
            {step === 1 && (
              <form className="mt-8 space-y-6" onSubmit={handleNextStep}>
                <div className="rounded-md shadow-sm space-y-4">
                  <div className="flex justify-center">
                    <div className="flex rounded-md shadow-sm">
                      <button
                        onClick={() => setUserType("individual")}
                        className={`px-4 py-2 border border-gray-300 text-sm font-medium rounded-l-md ${
                          userType === "individual"
                            ? "bg-primary text-white"
                            : "bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        Individual
                      </button>
                      <button
                        onClick={() => setUserType("company")}
                        className={`px-4 py-2 border-t border-b border-gray-300 text-sm font-medium ${
                          userType === "company"
                            ? "bg-primary text-white"
                            : "bg-white text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        Company
                      </button>
                    </div>
                  </div>
                  {userType === "individual" ? (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          name="first-name"
                          type="text"
                          required
                          placeholder="First Name"
                        />
                        <Input
                          name="surname"
                          type="text"
                          required
                          placeholder="Surname"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <Input
                        name="company-name"
                        type="text"
                        required
                        placeholder="Company Name"
                      />
                      <Input
                        name="industry-type"
                        type="text"
                        required
                        placeholder="Industry Type"
                      />
                      <Input
                        name="website"
                        type="url"
                        placeholder="Website (if any)"
                      />
                      <Input
                        name="socials"
                        type="text"
                        required
                        placeholder="Instagram / Twitter / LinkedIn (if any)"
                      />
                      <Input
                        name="contact-person"
                        type="text"
                        required
                        placeholder="Contact Person (Full Name)"
                      />
                      <Input
                        name="contact-person-role"
                        type="text"
                        required
                        placeholder="Role in the company"
                      />
                      <div className="space-y-2">
                        <Label>Interested in:</Label>
                        <div className="flex flex-wrap gap-4">
                          {[
                            "Attending",
                            "Partnership",
                            "Sponsorship",
                            "Exhibiting",
                            "Other",
                          ].map((interest) => (
                            <div key={interest} className="flex items-center">
                              <Checkbox
                                id={`interest-${interest.toLowerCase()}`}
                                name="interests"
                                value={interest}
                              />
                              <Label
                                htmlFor={`interest-${interest.toLowerCase()}`}
                                className="ml-2"
                              >
                                {interest}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                  />
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number (WhatsApp preferred)"
                    required
                  />
                  {userType === "individual" && (
                    <div className="flex items-center">
                      {/* <Checkbox
                        id="wants-masterclass"
                        onCheckedChange={() =>
                          setWantsMasterclass(!wantsMasterclass)
                        }
                      />
                      <Label htmlFor="wants-masterclass" className="ml-2">
                        Masterclass
                      </Label> */}
                    </div>
                  )}
                </div>
                <div>
                  <Button type="submit" className="w-full">
                    {userType === "individual" && wantsMasterclass
                      ? "Next"
                      : "Submit"}
                  </Button>
                </div>
              </form>
            )}

            {step === 2 && (
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Masterclasses
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Select the masterclasses you would like to attend.
                  </p>
                </div>
                <div className="space-y-4">
                  {config.masterclasses.map((masterclass) => (
                    <div key={masterclass.title} className="flex items-center">
                      <Checkbox
                        id={masterclass.title}
                        onCheckedChange={() =>
                          handleClassChange(masterclass.title)
                        }
                      />
                      <Label htmlFor={masterclass.title} className="ml-2">
                        {masterclass.title}
                      </Label>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Previous
                  </Button>
                  <Button
                    onClick={() => handleAttendeeSubmit(formData)}
                    disabled={isLoading}
                  >
                    {isLoading ? "Registering..." : "Submit"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : registrationType === "exhibitor" ? (
          <ExhibitionBooth />
        ) : null}
      </div>
    </div>
  );
};

export default RegisterPage;

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
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type FormData = {
  "full-name"?: string;
  email?: string;
  phone?: string;
  organization?: string;
  role?: string;
  "sector-of-focus"?: string;
  "user-type-selection"?: string;
  impact?: string;
  "why-attend"?: string;
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
  const [paragraphValues, setParagraphValues] = useState({
    impact: "",
    "why-attend": "",
  });

  const handleParagraphChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const words = value.split(/\s+/).filter(Boolean);

    if (words.length > 100) {
      const truncated = words.slice(0, 100).join(" ");
      setParagraphValues((prev) => ({ ...prev, [name]: truncated }));
    } else {
      setParagraphValues((prev) => ({ ...prev, [name]: value }));
    }
  };

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

    // Include the controlled textarea values
    const newData = {
      ...data,
      interests,
      impact: paragraphValues.impact,
      "why-attend": paragraphValues["why-attend"],
    };

    setFormData(newData);
    if (wantsMasterclass) {
      setStep(2);
    } else {
      handleAttendeeSubmit(newData);
    }
  };

  const handleAttendeeSubmit = async (data: FormData) => {
    setIsLoading(true);

    const submissionData: any = {
      full_name: data["full-name"],
      email: data.email,
      phone: data.phone,
      organization: data.organization,
      role: data.role,
      sector_of_focus: data["sector-of-focus"],
      user_type_selection: data["user-type-selection"],
      impact: data.impact,
      why_attend: data["why-attend"],
    };

    try {
      // First, check if user already exists in registrations table
      const { data: existingUser } = await supabase
        .from("registrations")
        .select("email")
        .eq("email", data.email)
        .single();

      if (existingUser) {
        setIsLoading(false);
        toast.error(
          "Email already registered. Please use a different email or login if you have an account."
        );
        return;
      }

      // Insert registration data first
      const { error: insertError } = await supabase
        .from("registrations")
        .insert([submissionData]);

      if (insertError) {
        setIsLoading(false);
        toast.error("Error saving registration data. Please try again.");
        console.error("Insert error:", insertError);
        return;
      }

      // Then create auth user with email verification using native templates
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email as string,
        password: Math.random().toString(36).slice(-8), // Generate random password
        options: {
          data: {
            full_name: data["full-name"],
            email: data.email,
            organization: data.organization,
            role: data.role,
            user_type_selection: data["user-type-selection"],
          },
          emailRedirectTo: `${window.location.origin}/registration-success`,
          // This will automatically use Supabase's native "Confirm Email" template
        },
      });

      setIsLoading(false);

      if (authError) {
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

      if (authData.user) {
        toast.success(
          "Registration successful! Please check your email and click the verification link to complete your registration."
        );

        // Reset form
        setStep(1);
        setFormData({});
        setSelectedClasses([]);
        setParagraphValues({ impact: "", "why-attend": "" });

        const form = document.querySelector("form");
        if (form) {
          form.reset();
          const textareas = form.querySelectorAll("textarea");
          textareas.forEach((textarea) => (textarea.value = ""));
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Registration error:", error);
      toast.error("An unexpected error occurred. Please try again.");
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
          {/* <a
            href="/login"
            className="font-medium text-primary hover:text-primary-dark"
          >
            Already registered? Login
          </a> */}
        </div>

        {registrationType === "attendee" ? (
          <div>
            {step === 1 && (
              <form className="mt-8 space-y-6" onSubmit={handleNextStep}>
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
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number (WhatsApp preferred)"
                    required
                  />
                  <Input
                    name="organization"
                    type="text"
                    required
                    placeholder="Organization / Business / Institution"
                  />
                  <Input
                    name="role"
                    type="text"
                    required
                    placeholder="Role / Title"
                  />
                  <Input
                    name="sector-of-focus"
                    type="text"
                    required
                    placeholder="Sector of Focus (Agriculture, Power, Solid Minerals, ICT, Other)"
                  />
                  <div className="space-y-2">
                    <Label>
                      Are you an SME owner, policymaker, investor, or
                      technocrat?
                    </Label>
                    <RadioGroup name="user-type-selection" required>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sme-owner" id="sme-owner" />
                        <Label htmlFor="sme-owner">SME Owner</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="policymaker" id="policymaker" />
                        <Label htmlFor="policymaker">Policymaker</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="investor" id="investor" />
                        <Label htmlFor="investor">Investor</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="technocrat" id="technocrat" />
                        <Label htmlFor="technocrat">Technocrat</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Textarea
                      name="impact"
                      required
                      placeholder="What impact have you made in your sector? (short paragraph)"
                      value={paragraphValues.impact}
                      onChange={handleParagraphChange}
                    />
                    <p className="text-xs text-gray-500 text-right">
                      {
                        paragraphValues.impact.split(/\s+/).filter(Boolean)
                          .length
                      }
                      /100 words
                    </p>
                  </div>
                  <div>
                    <Textarea
                      name="why-attend"
                      required
                      placeholder="Why do you want to attend physically? (short paragraph)"
                      value={paragraphValues["why-attend"]}
                      onChange={handleParagraphChange}
                    />
                    <p className="text-xs text-gray-500 text-right">
                      {
                        paragraphValues["why-attend"]
                          .split(/\s+/)
                          .filter(Boolean).length
                      }
                      /100 words
                    </p>
                  </div>
                </div>
                <div className="text-xs text-gray-400">
                  <p>
                    Due to limited physical seating, priority will be given to
                    technocrats, SMEs, investors, and policymakers directly
                    engaged in Northern Nigeria’s investment and
                    industrialization. All other registrants will receive
                    live-stream access.
                  </p>
                </div>
                <div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </div>
              </form>
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

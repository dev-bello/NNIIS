import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useMemo, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import ExhibitionBooth from "@/components/ExhibitionBooth";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { usePaystackPayment } from "react-paystack";
import { Checkbox } from "@/components/ui/checkbox";
import RegisterHeroSection from "@/components/RegisterHeroSection";
import Footer from "@/components/Footer";
import { countries } from "@/data/countries";

type FormData = {
  "full-name"?: string;
  email?: string;
  phone?: string;
  organization?: string;
  role?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  "sector-of-focus"?: string;
  thematic_areas?: string[];
  interests?: string[];
  "sme-owner-policymaker-investor-technocrat"?: string;
  impact?: string;
  "why-attend"?: string;
  [key: string]: any;
};

const RegisterPage = () => {
  const [searchParams] = useSearchParams();
  const [registrationType, setRegistrationType] = useState("participant");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({});
  const [participantType, setParticipantType] = useState("individual");
  const [groupSize, setGroupSize] = useState(1);
  const [isPaymentTriggered, setIsPaymentTriggered] = useState(false);
  const [isYouth, setIsYouth] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Nigeria");
  const formRef = useRef<HTMLFormElement>(null);

  const USD_TO_NGN_RATE = 1489.57;

  const formatAsNaira = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  useEffect(() => {
    const type = searchParams.get("type");
    if (type === "exhibitor") {
      setRegistrationType(type);
    }
  }, [searchParams]);

  const getAmount = () => {
    const earlyBirdDeadline = new Date("2025-09-20T23:59:59Z");
    const now = new Date();
    let amount = 0;

    if (participantType === "individual") {
      amount = isYouth ? 100 : now < earlyBirdDeadline ? 150 : 200;
    } else if (participantType === "group") {
      if (groupSize === 1) {
        amount = 150;
      } else if (groupSize === 5) {
        amount = 700;
      } else if (groupSize === 10) {
        amount = 1300;
      }
    } else if (participantType === "youth") {
      amount = 100;
    }
    return amount * USD_TO_NGN_RATE * 100; // Convert to NGN kobo
  };

  const paystackConfig = useMemo(
    () => ({
      reference: new Date().getTime().toString(),
      email: formData.email || "",
      amount: getAmount(),
      publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || "",
    }),
    [formData, participantType, groupSize, isYouth]
  );

  const initializePayment = usePaystackPayment(paystackConfig);

  const handleAttendeeSubmit = async (data: FormData) => {
    const submissionData: any = {
      full_name: data["full-name"],
      email: data.email,
      phone: data.phone,
      organization: data.organization,
      role: data.role,
      address: data.address,
      city: data.city,
      state: data.state,
      country: data.country,
      sector_of_focus: data["sector-of-focus"],
      user_type_selection: data["sme-owner-policymaker-investor-technocrat"],
      impact: data.impact,
      why_attend: data["why-attend"],
    };

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: submissionData.email,
        password: Math.random().toString(36).slice(-8),
      });

      if (authError) {
        toast.error(authError.message);
        return;
      }

      if (authData.user) {
        const { error: insertError } = await supabase
          .from("new_registrations")
          .insert([{ ...submissionData, user_id: authData.user.id }]);

        if (insertError) {
          toast.error(insertError.message);
          return;
        }
      }

      toast.success(
        "Registration successful! Please check your email, including your spam or junk folder, to confirm."
      );
      setFormData({});
      const form = document.querySelector("form");
      if (form) form.reset();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
      setIsPaymentTriggered(false);
    }
  };

  useEffect(() => {
    if (isPaymentTriggered && formData.email) {
      const onSuccess = () => {
        toast.success("Payment successful! Finalizing registration...");
        handleAttendeeSubmit(formData);
      };
      const onClose = () => {
        toast.error("Payment window closed.");
        setIsLoading(false);
        setIsPaymentTriggered(false);
      };
      initializePayment({ onSuccess, onClose });
    }
  }, [isPaymentTriggered, formData]);

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as any;
    data.thematic_areas = formData.getAll("thematic_areas");
    data.interests = formData.getAll("interests");

    const newData = {
      ...data,
      participantType: isYouth ? "youth" : participantType,
      groupSize: participantType === "group" ? groupSize : undefined,
    };

    if (!import.meta.env.VITE_PAYSTACK_PUBLIC_KEY) {
      toast.error(
        "Paystack public key is not configured. Please check your environment variables."
      );
      setIsLoading(false);
      return;
    }
    setFormData(newData);
    setIsPaymentTriggered(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <RegisterHeroSection />
      <div className="max-w-4xl w-full space-y-8 mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Individual Registration */}
          <div
            className={`rounded-lg shadow-lg cursor-pointer transition-all duration-300 overflow-hidden ${
              participantType === "individual" &&
              registrationType === "participant"
                ? "ring-4 ring-primary/50"
                : ""
            }`}
            onClick={() => {
              setRegistrationType("participant");
              setParticipantType("individual");
              formRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img
              src="/images/register/individual.jpg"
              alt="Individual Registration"
              className="w-full h-40 object-cover"
            />
            <div
              className={`p-6 ${
                participantType === "individual" &&
                registrationType === "participant"
                  ? "bg-primary text-white"
                  : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">
                Register as an Individual
              </h3>
              <ul className="list-disc list-inside mt-4">
                <li>Individual Registration</li>
                <li>Standard Summit Kit</li>
               
              </ul>
            </div>
          </div>

          {/* Group Registration */}
          <div
            className={`rounded-lg shadow-lg cursor-pointer transition-all duration-300 overflow-hidden ${
              participantType === "group" && registrationType === "participant"
                ? "ring-4 ring-primary/50"
                : ""
            }`}
            onClick={() => {
              setRegistrationType("participant");
              setParticipantType("group");
              formRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img
              src="/images/register/org.jpg"
              alt="Group Registration"
              className="w-full h-40 object-cover"
            />
            <div
              className={`p-6 ${
                participantType === "group" &&
                registrationType === "participant"
                  ? "bg-primary text-white"
                  : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">
                Register as a Delegate
              </h3>
              <ul className="list-disc list-inside mt-4">
                <li>Reserved Seating</li>
                <li>Exclusive Matchmaking Sessions/li>
                <li>Deal-Room Access</li>
                <li>Recognition</li>
                <li>Networking Lunch</li>
                <li>Invitation to Gala Night</li>
              </ul>
            </div>
          </div>

          {/* Sponsor/Exhibitor Registration */}
          <div
            className={`rounded-lg shadow-lg cursor-pointer transition-all duration-300 overflow-hidden ${
              registrationType === "exhibitor" ? "ring-4 ring-primary/50" : ""
            }`}
            onClick={() => {
              setRegistrationType("exhibitor");
              formRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <img
              src="/images/events/exhibition/exhibition.png"
              alt="Sponsor/Exhibitor Registration"
              className="w-full h-40 object-cover"
            />
            <div
              className={`p-6 ${
                registrationType === "exhibitor"
                  ? "bg-primary text-white"
                  : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">
                Sponsorship or Exhibition
              </h3>
              <p>Packages available for sponsorship and exhibition booths.</p>
              <ul className="list-disc list-inside mt-4">
                <li>Premium Benefits</li>
                <li>Prime Exhibition Space</li>
                <li>Sponsorship or Exhibition Packages</li>
                <li>Branding Opportunities</li>
                <li>Priority Speaking Opportunities</li>
                <li>Delegate Passes</li>
                <li>Customized Partnership Benefits</li>
                <li>Exclusive Gala Night Access</li>
              </ul>
            </div>
          </div>
        </div>

        {registrationType === "participant" && (
          <form
            ref={formRef}
            className="mt-8 space-y-6"
            onSubmit={handleNextStep}
          >
            <div className="rounded-md shadow-sm space-y-4 p-6 bg-white">
              <h3 className="text-xl font-bold mb-4">
                {participantType === "individual"
                  ? "Individual Registration"
                  : "Group Registration"}
              </h3>
              {participantType === "group" && (
                <div>
                  <Label htmlFor="group-size">Select Group Size</Label>
                  <select
                    id="group-size"
                    value={groupSize}
                    onChange={(e) => setGroupSize(parseInt(e.target.value))}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value={1}>
                      Singlular ($150 | {formatAsNaira(150 * USD_TO_NGN_RATE)})
                    </option>
                    <option value={5}>
                      Group of 5 ($700 | {formatAsNaira(700 * USD_TO_NGN_RATE)})
                    </option>
                    <option value={10}>
                      Group of 10 ($1300 |{" "}
                      {formatAsNaira(1300 * USD_TO_NGN_RATE)})
                    </option>
                  </select>
                </div>
              )}
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
                name="address"
                type="text"
                required
                placeholder="Address"
              />
              <Input name="city" type="text" required placeholder="City" />
              <select
                name="country"
                required
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
              <Input name="state" type="text" required placeholder="State" />
              <select
                name="sector-of-focus"
                required
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select Sector of Focus</option>
                <option value="ICT">ICT</option>
                <option value="Mining">Mining</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Power">Power</option>
                <option value="Other">Other</option>
              </select>

              {participantType === "individual" && (
                <>
                  <div className="space-y-2">
                    <Label>
                      Are you an SME owner, policymaker, investor, or
                      technocrat?
                    </Label>
                    <RadioGroup
                      name="sme-owner-policymaker-investor-technocrat"
                      required
                    >
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
                  <div className="space-y-2">
                    <Label htmlFor="impact">
                      What impact have you made in your sector? (short
                      paragraph)
                    </Label>
                    <textarea
                      id="impact"
                      name="impact"
                      required
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      maxLength={100}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="why-attend">
                      Why do you want to attend physically? (short paragraph)
                    </Label>
                    <textarea
                      id="why-attend"
                      name="why-attend"
                      required
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      maxLength={100}
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Due to limited physical seating, priority will be given to
                    technocrats, SMEs, investors, and policymakers directly
                    engaged in Northern Nigeria’s investment and
                    industrialization. All other registrants will receive
                    live-stream access.
                  </p>
                </>
              )}
            </div>
            {participantType === "group" && (
              <div className="p-4 border rounded-md bg-gray-100">
                <h3 className="text-lg font-bold">Important Notes</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Early bird registration closes on 20th September 2025</li>
                  <li>
                    Group registrations must be submitted together under one
                    institutional/organizational contact.
                  </li>
                  <li>
                    Fees are non-refundable but may be transferred to another
                    participant with prior notice.
                  </li>
                </ul>
              </div>
            )}
            <div>
              {participantType === "individual" ? (
                <Button
                  type="button"
                  className="w-full"
                  disabled={isLoading}
                  onClick={() => {
                    const form = formRef.current;
                    if (form) {
                      const formData = new FormData(form);
                      const data = Object.fromEntries(
                        formData.entries()
                      ) as any;
                      data.thematic_areas = formData.getAll("thematic_areas");
                      data.interests = formData.getAll("interests");
                      handleAttendeeSubmit(data);
                    }
                  }}
                >
                  {isLoading ? "Processing..." : "Submit"}
                </Button>
              ) : (
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Processing..." : "Proceed to Payment"}
                </Button>
              )}
            </div>
          </form>
        )}

        {registrationType === "exhibitor" && <ExhibitionBooth />}
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;

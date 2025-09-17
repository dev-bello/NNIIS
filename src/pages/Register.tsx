import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import ExhibitionBooth from "@/components/ExhibitionBooth";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { usePaystackPayment } from "react-paystack";
import { Checkbox } from "@/components/ui/checkbox";

type FormData = {
  "full-name"?: string;
  email?: string;
  phone?: string;
  organization?: string;
  role?: string;
  "sector-of-focus"?: string;
  [key: string]: any;
};

const RegisterPage = () => {
  const [searchParams] = useSearchParams();
  const [registrationType, setRegistrationType] = useState("participant");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({});
  const [participantType, setParticipantType] = useState("individual");
  const [groupSize, setGroupSize] = useState(5);
  const [isPaymentTriggered, setIsPaymentTriggered] = useState(false);
  const [isYouth, setIsYouth] = useState(false);

  const USD_TO_NGN_RATE = 1522.7;

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
      amount = groupSize === 5 ? 700 : 1500;
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
      sector_of_focus: data["sector-of-focus"],
      participant_type: data.participantType,
    };

    try {
      const { data: existingUser } = await supabase
        .from("registrations")
        .select("email")
        .eq("email", data.email)
        .single();

      if (existingUser) {
        toast.error("Email already registered. Please use a different email.");
        return;
      }

      const { error: insertError } = await supabase
        .from("registrations")
        .insert([submissionData]);

      if (insertError) {
        toast.error("Error saving registration data. Please try again.");
        console.error("Insert error:", insertError);
        return;
      }

      const { error: authError } = await supabase.auth.signUp({
        email: data.email as string,
        password: Math.random().toString(36).slice(-8),
        options: {
          data: {
            full_name: data["full-name"],
            email: data.email,
            organization: data.organization,
            role: data.role,
            participant_type: data.participantType,
          },
          emailRedirectTo: `${window.location.origin}/registration-success`,
        },
      });

      if (authError) {
        toast.error(authError.message);
        return;
      }

      toast.success(
        "Registration successful! Please check your email to verify."
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
    if (!import.meta.env.VITE_PAYSTACK_PUBLIC_KEY) {
      toast.error(
        "Paystack public key is not configured. Please check your environment variables."
      );
      return;
    }
    setIsLoading(true);
    const form = e.currentTarget;
    const formEntries = new FormData(form);
    const data = Object.fromEntries(formEntries.entries()) as FormData;

    const newData = {
      ...data,
      participantType: isYouth ? "youth" : participantType,
      groupSize: participantType === "group" ? groupSize : undefined,
    };
    setFormData(newData);
    setIsPaymentTriggered(true);
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
              onClick={() => setRegistrationType("participant")}
              className={`px-4 py-2 border border-gray-300 text-sm font-medium rounded-l-md ${
                registrationType === "participant"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Participant
            </button>
            <button
              onClick={() => setRegistrationType("exhibitor")}
              className={`px-4 py-2 border-t border-b border-gray-300 text-sm font-medium ${
                registrationType === "exhibitor"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              Sponsor / Exhibitor
            </button>
          </div>
        </div>

        {registrationType === "participant" ? (
          <div className="space-y-6">
            <div className="flex justify-center">
              <RadioGroup
                defaultValue="individual"
                onValueChange={setParticipantType}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="individual" id="individual" />
                  <Label htmlFor="individual">Individual</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="group" id="group" />
                  <Label htmlFor="group">Group</Label>
                </div>
              </RadioGroup>
            </div>

            {participantType === "individual" && (
              <div className="p-4 border rounded-md space-y-4">
                <div>
                  <h3 className="text-lg font-bold">Individual Participant</h3>
                  {isYouth ? (
                    <p>
                      Youth Registration: $100 (
                      {formatAsNaira(100 * USD_TO_NGN_RATE)})
                    </p>
                  ) : (
                    <>
                      <p>
                        Early Bird Registration: $150 (
                        {formatAsNaira(150 * USD_TO_NGN_RATE)}) (Closes on 20th
                        September 2025)
                      </p>
                      <p>
                        Regular Registration: $200 (
                        {formatAsNaira(200 * USD_TO_NGN_RATE)})
                      </p>
                    </>
                  )}
                  <h4 className="font-semibold mt-2">Benefits include:</h4>
                  <ul className="list-disc list-inside">
                    <li>Breakout workshops and B2B</li>
                    <li>Summit kit</li>
                    <li>Networking lunch and coffee break</li>
                  </ul>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="is-youth"
                    onCheckedChange={(checked) =>
                      setIsYouth(checked as boolean)
                    }
                  />
                  <Label htmlFor="is-youth">
                    Are you registering as a youth?
                  </Label>
                </div>
              </div>
            )}

            {participantType === "group" && (
              <div className="p-4 border rounded-md space-y-4">
                <h3 className="text-lg font-bold">Group Participation</h3>
                <div>
                  <Label htmlFor="group-size">Select Group Size</Label>
                  <select
                    id="group-size"
                    value={groupSize}
                    onChange={(e) => setGroupSize(parseInt(e.target.value))}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value={5}>
                      Group of 5 ($700 | {formatAsNaira(700 * USD_TO_NGN_RATE)})
                    </option>
                    <option value={10}>
                      Group of 10 ($1500 |{" "}
                      {formatAsNaira(1500 * USD_TO_NGN_RATE)})
                    </option>
                  </select>
                </div>
                <h4 className="font-semibold mt-2">
                  Additional group benefits:
                </h4>
                <ul className="list-disc list-inside">
                  <li>All individual participant entitlements</li>
                  <li>Reserved seating for groups of 10 or more</li>
                  <li>Recognition in summit materials (upon request)</li>
                </ul>
              </div>
            )}

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
              </div>
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
              <div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Processing..." : "Proceed to Payment"}
                </Button>
              </div>
            </form>
          </div>
        ) : registrationType === "exhibitor" ? (
          <ExhibitionBooth />
        ) : null}
      </div>
    </div>
  );
};

export default RegisterPage;

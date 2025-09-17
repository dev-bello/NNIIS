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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useState, useMemo, useEffect } from "react";
import { usePaystackPayment } from "react-paystack";

const ExhibitionBooth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [industry, setIndustry] = useState("");
  const [sponsorshipPackage, setSponsorshipPackage] = useState("");
  const [selectedBooth, setSelectedBooth] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalBooth, setModalBooth] = useState<{
    id: number;
    size: string;
  } | null>(null);
  const [formData, setFormData] = useState<any>({});
  const [isPaymentTriggered, setIsPaymentTriggered] = useState(false);

  const formatAsNaira = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const packagePrices: { [key: string]: number } = {
    "platinum-sponsor": 100000000,
    "gold-sponsor": 70000000,
    "silver-sponsor": 50000000,
    exhibitor: 20000000,
  };

  const handleBoothClick = (booth: { id: number; size: string }) => {
    setModalBooth(booth);
    setIsModalOpen(true);
  };

  const handleSelectBooth = () => {
    if (modalBooth) {
      setSelectedBooth(modalBooth.id);
      setIsModalOpen(false);
    }
  };

  const getAmount = () => {
    const priceInNGN = packagePrices[sponsorshipPackage] || 0;
    return priceInNGN * 100; // Convert to kobo
  };

  const paystackConfig = useMemo(
    () => ({
      reference: new Date().getTime().toString(),
      email: formData.email || "",
      amount: getAmount(),
      publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || "",
    }),
    [formData, sponsorshipPackage]
  );

  const initializePayment = usePaystackPayment(paystackConfig);

  const handleFinalSubmit = async (data: any) => {
    try {
      const { data: existingExhibitor } = await supabase
        .from("exhibitors")
        .select("email")
        .eq("email", data.email)
        .single();

      if (existingExhibitor) {
        toast.error("Email already registered as an exhibitor.");
        return;
      }

      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: Math.random().toString(36).slice(-8),
        options: {
          data: {
            company_name: data.company_name,
            user_type: "exhibitor",
          },
          emailRedirectTo: `${window.location.origin}/registration-success`,
        },
      });

      if (authError) {
        toast.error(authError.message);
        return;
      }

      if (authData.user) {
        const { error: insertError } = await supabase
          .from("exhibitors")
          .insert([
            {
              id: authData.user.id,
              ...data,
            },
          ]);

        if (insertError) {
          toast.error("Error saving exhibitor data.");
          // Consider deleting the auth user here if the insert fails
          return;
        }
        toast.success(
          "Registration successful! Please check your email to verify."
        );
      }
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
        handleFinalSubmit(formData);
      };
      const onClose = () => {
        toast.error("Payment window closed.");
        setIsLoading(false);
        setIsPaymentTriggered(false);
      };
      initializePayment({ onSuccess, onClose });
    }
  }, [isPaymentTriggered, formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!import.meta.env.VITE_PAYSTACK_PUBLIC_KEY) {
      toast.error("Paystack public key is not configured.");
      return;
    }
    if (!selectedBooth) {
      toast.error("Please select an available booth.");
      return;
    }
    setIsLoading(true);
    const form = e.currentTarget;
    const formEntries = new FormData(form);
    const data = Object.fromEntries(formEntries.entries());

    const exhibitorData = {
      company_name: data["company-name"] as string,
      email: data.email as string,
      industry: industry,
      website: data.website as string,
      package: sponsorshipPackage,
      booth_id: selectedBooth,
    };
    setFormData(exhibitorData);
    setIsPaymentTriggered(true);
  };

  const booths = [
    { id: 1, size: "2m x 2m", available: true },
    { id: 2, size: "2m x 2m", available: true },
    { id: 3, size: "3m x 3m", available: false },
    { id: 4, size: "3m x 3m", available: true },
    { id: 5, size: "4m x 4m", available: true },
    { id: 6, size: "4m x 4m", available: false },
    { id: 7, size: "4m x 4m", available: true },
    { id: 8, size: "4m x 4m", available: true },
    { id: 9, size: "6m x 6m", available: false },
    { id: 10, size: "6m x 6m", available: true },
    { id: 11, size: "6m x 6m", available: true },
    { id: 12, size: "6m x 6m", available: true },
  ];

  const packageToBoothSize: { [key: string]: string } = {
    exhibitor: "2m x 2m",
    "silver-sponsor": "3m x 3m",
    "gold-sponsor": "4m x 4m",
    "platinum-sponsor": "6m x 6m",
  };

  const availableBoothsForPackage = sponsorshipPackage
    ? booths.filter(
        (booth) =>
          booth.size === packageToBoothSize[sponsorshipPackage] &&
          booth.available
      )
    : [];

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
              <SelectItem value="platinum-sponsor">Platinum Sponsor</SelectItem>
              <SelectItem value="gold-sponsor">Gold Sponsor</SelectItem>
              <SelectItem value="silver-sponsor">Silver Sponsor</SelectItem>
              <SelectItem value="exhibitor">Exhibitor</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {sponsorshipPackage && (
        <div className="mt-8 p-4 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Select Your Booth
          </h3>
          {availableBoothsForPackage.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {availableBoothsForPackage.map((booth) => (
                <div
                  key={booth.id}
                  onClick={() => handleBoothClick(booth)}
                  className={`cursor-pointer rounded-lg p-4 text-center transition-all duration-300 ${
                    selectedBooth === booth.id
                      ? "bg-primary text-white shadow-lg transform scale-105"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <p className="font-bold text-lg">Booth {booth.id}</p>
                  <p className="text-sm">{booth.size}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <p className="text-gray-500">
                No available booths for the selected package.
              </p>
            </div>
          )}
        </div>
      )}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Booth {modalBooth?.id} Preview</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">3D Booth Preview Placeholder</p>
            </div>
            <p className="text-center mt-4 font-semibold">
              Size: {modalBooth?.size}
            </p>
          </div>
          <div className="flex justify-end">
            <Button onClick={handleSelectBooth}>Select Booth</Button>
          </div>
        </DialogContent>
      </Dialog>

      {sponsorshipPackage && (
        <div className="mt-8 p-4 border-t border-gray-200 text-right">
          <p className="text-lg font-bold">
            Total Cost: {formatAsNaira(packagePrices[sponsorshipPackage])}
          </p>
        </div>
      )}
      <div className="mt-8 flex justify-end">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Processing..." : "Proceed to Payment"}
        </Button>
      </div>
    </form>
  );
};

export default ExhibitionBooth;

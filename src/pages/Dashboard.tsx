import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import ExhibitionBooth from "@/components/ExhibitionBooth";

const DashboardPage = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("masterclass");

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        const { data: userData, error } = await supabase
          .from("attendees")
          .select("*")
          .eq("id", session.user.id)
          .single();

        if (error) {
          const { data: exhibitorData, error: exhibitorError } = await supabase
            .from("exhibitors")
            .select("*")
            .eq("id", session.user.id)
            .single();
          if (exhibitorError) {
            toast.error("Error fetching user data.");
          } else {
            setUser(exhibitorData);
          }
        } else {
          setUser(userData);
          setSelectedClasses(userData.thematic_areas || []);
        }
      } else {
        toast.error("You must be logged in to view this page.");
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  const handleClassChange = (className: string) => {
    setSelectedClasses((prev) =>
      prev.includes(className)
        ? prev.filter((c) => c !== className)
        : [...prev, className]
    );
  };

  const handleUpdateData = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session) {
      if (user.type === "exhibitor") {
        // Exhibitor update logic here
      } else {
        const { error } = await supabase
          .from("attendees")
          .update({ thematic_areas: selectedClasses })
          .eq("id", session.user.id);
        if (error) {
          toast.error("Error updating data. Please try again.");
        } else {
          toast.success("Data updated successfully!");
        }
      }
    }
  };

  const masterclasses = {
    selected: [
      "From Bootstrapped to Bankrolled: Mastering Startup Funding, Financial Management & Investor Readiness",
      "From Visibility to Viability: Mastering Marketing, Branding & Strategic Partnerships for Startup Growth",
      "From Free to Fee: Leveraging Technology & Digital Payments to Drive Business Growth and Monetize Your Startup",
    ],
    all: [
      "From Visibility to Viability: Mastering Marketing, Branding & Strategic Partnerships for Startup Growth",
      "From Bootstrapped to Bankrolled: Mastering Startup Funding, Financial Management & Investor Readiness",
      "From Free to Fee: Leveraging Technology & Digital Payments to Drive Business Growth and Monetize Your Startup",
      "Product Development & Market Fit - Designing products/services that solve real problems and attract users.",
      "Talent Acquisition & Retention in a Competitive Market",
      "Navigating Government Policies & Regulations – Understanding local business laws, taxes, and compliance.",
      "Ecosystem Hacking: How Founders Can Thrive Despite Fragmented Support Systems",
      "Building in the Trenches: Navigating Early-Stage Startup Struggles in Emerging Ecosystems",
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/4 bg-white p-8">
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <img src="/images/NNIIS.jpg" alt="Arewa Tech Fest" />
          </div>
          <h1 className="text-2xl font-bold">
            Hello! {user?.full_name?.split(" ")[0]}
          </h1>
          <p className="text-gray-600">
            Thank you for registering for the
            <span className="font-semibold text-green-600 italic">
              {" "}
              #NNIIS25
            </span>
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-semibold">Your registration details</h2>
          <div className="mt-4 space-y-2">
            <p>
              <span className="font-semibold">Full Name</span> {user?.full_name}
            </p>
            <p>
              <span className="font-semibold">Email</span> {user?.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {user?.phone}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {user?.type}
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center">
          {user?.email && <QRCodeSVG value={user.email} size={128} />}
          <Button variant="outline" className="mt-4">
            Download
          </Button>
          <p className="mt-2 text-center text-sm text-gray-600">
            Present your code for verification on event day
          </p>
        </div>
      </aside>
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="text-lg font-bold text-green-600">
            {/* {countdown}  */} DAYS to Northern Nigeria Investment and
            Industrialisation Summit 2025
          </div>
          <div>#NNIIS25</div>
        </div>
        <div className="bg-white p-8 rounded-lg">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("masterclass")}
              className={`py-2 px-4 font-semibold ${
                activeTab === "masterclass"
                  ? "border-b-2 border-green-500"
                  : "text-gray-500"
              }`}
            >
              Master Class
            </button>
            <button
              onClick={() => setActiveTab("exhibition")}
              className={`py-2 px-4 font-semibold ${
                activeTab === "exhibition"
                  ? "border-b-2 border-green-500"
                  : "text-gray-500"
              }`}
            >
              Exhibition
            </button>
          </div>
          {activeTab === "masterclass" ? (
            <>
              <div className="mt-8">
                <h3 className="text-xl font-bold">Selected</h3>
                <div className="mt-4 space-y-2">
                  {selectedClasses.map((item) => (
                    <div key={item} className="flex items-center">
                      <Checkbox
                        checked
                        id={item}
                        onCheckedChange={() => handleClassChange(item)}
                      />
                      <Label htmlFor={item} className="ml-2">
                        {item}
                      </Label>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  You can only select a maximum of 3 masterclasses at a time
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold">All</h3>
                <div className="mt-4 space-y-2">
                  {masterclasses.all.map((item) => (
                    <div key={item} className="flex items-center">
                      <Checkbox
                        id={item}
                        onCheckedChange={() => handleClassChange(item)}
                        checked={selectedClasses.includes(item)}
                      />
                      <Label htmlFor={item} className="ml-2">
                        {item}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <Button onClick={handleUpdateData}>Update Data</Button>
              </div>
            </>
          ) : (
            <ExhibitionBooth />
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;

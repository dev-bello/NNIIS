import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import ExhibitionBooth from "@/components/ExhibitionBooth";
import { config } from "@/lib/config";

function getCountdownToSept29() {
  const targetDate = new Date("2025-09-29T00:00:00");
  const now = new Date();
  const timeDiff = targetDate.getTime() - now.getTime();

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  return `${days} Days`;
}
const countdownToEvent = getCountdownToSept29();

const DashboardPage = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedClasses, setSelectedClasses] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("masterclass");

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        const userProfile = {
          ...session.user.user_metadata,
          email: session.user.email,
          id: session.user.id,
        };
        setUser(userProfile);

        const thematicAreasData = session.user.user_metadata.thematic_areas;
        if (
          thematicAreasData &&
          typeof thematicAreasData === "object" &&
          !Array.isArray(thematicAreasData)
        ) {
          const thematicAreasArray = Object.keys(thematicAreasData).filter(
            (key) => thematicAreasData[key] === "on"
          );
          const selectedClassesArray = Object.values(thematicAreasData).filter(
            (value): value is string =>
              typeof value === "string" && value !== "on"
          );
          setSelectedClasses([...thematicAreasArray, ...selectedClassesArray]);
        } else if (Array.isArray(thematicAreasData)) {
          setSelectedClasses(thematicAreasData);
        } else {
          setSelectedClasses([]);
        }
      } else {
        toast.error("You must be logged in to view this page.");
        setUser(null);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const handleClassChange = async (className: string) => {
    const newSelectedClasses = selectedClasses.includes(className)
      ? selectedClasses.filter((c) => c !== className)
      : [...selectedClasses, className];

    setSelectedClasses(newSelectedClasses);

    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session) {
      const { error } = await supabase.auth.updateUser({
        data: { thematic_areas: newSelectedClasses },
      });

      if (error) {
        toast.error("Error updating data. Please try again.");
      } else {
        toast.success("Data updated successfully!");
      }
    }
  };

  const allSelectableItems = [
    ...config.thematicAreas.map((area) => area.title),
    ...config.masterclasses.map((mc) => mc.title),
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <p>Could not load user profile.</p>
          <p>Please contact support.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <aside className="w-full md:w-1/4 bg-white p-8">
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <img src="/images/NNIIS.jpg" alt="Arewa Tech Fest" />
          </div>
          <h1 className="text-2xl font-bold">
            Hello!{" "}
            {user?.full_name?.split(" ")[0] ||
              user?.company_name?.split(" ")[0]}
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
            {user?.full_name && (
              <p>
                <span className="font-semibold">Full Name</span>{" "}
                {user.full_name}
              </p>
            )}
            {user?.company_name && (
              <p>
                <span className="font-semibold">Company Name</span>{" "}
                {user?.company_name}
              </p>
            )}
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
      <main className="flex-1 p-4 md:p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="text-lg font-bold text-green-600">
            <span className="bg-green-600 text-white border-b-2 border-green-500 rounded p-1">
              {countdownToEvent}
            </span>{" "}
            till the Northern Nigeria Investment and Industrialisation Summit
            2025
          </div>
          <div className="text-gray-500">#NNIIS25</div>
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
                <h3 className="text-xl font-bold">
                  Masterclasses & Thematic Areas
                </h3>
                <div className="mt-4 space-y-2">
                  {allSelectableItems.map((item) => (
                    <div key={item} className="flex items-center">
                      <Checkbox
                        id={item}
                        onCheckedChange={() => handleClassChange(item)}
                        checked={
                          Array.isArray(selectedClasses) &&
                          selectedClasses.includes(item)
                        }
                      />
                      <Label htmlFor={item} className="ml-2">
                        {item}
                      </Label>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  You can only select a maximum of 4 masterclasses at a time
                </p>
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

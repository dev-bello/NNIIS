import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { useState } from "react";

const sponsorshipTiers = [
  {
    name: "Platinum Sponsor",
    investment: "₦100,000,000",
    speakingSlot: "Keynote & Panel",
    branding: "Premium Placement",
    booth: "6x6m (Prime)",
    passes: 10,
    media: "Interview Limit",
    advert: "Full Page",
    sideEvent: "Yes",
  },
  {
    name: "Gold Sponsor",
    investment: "₦70,000,000",
    speakingSlot: "Panel",
    branding: "High Placement",
    booth: "4x4m",
    passes: 6,
    media: "Mention",
    advert: "Full Page",
    sideEvent: "Optional Add-on",
  },
  {
    name: "Silver Sponsor",
    investment: "₦50,000,000",
    speakingSlot: "Breakout Session",
    branding: "Standard Placement",
    booth: "3x3m",
    passes: 4,
    media: "Name Listing",
    advert: "Half Page",
    sideEvent: "No",
  },
  {
    name: "Exhibitor",
    investment: "₦20,000,000",
    speakingSlot: "No",
    branding: "Booth Signage",
    booth: "2x2m",
    passes: 2,
    media: "Name Listing",
    advert: "Listing",
    sideEvent: "No",
  },
];

const booths = [
  { id: 1, size: "2m x 2m", available: true, package: "Exhibitor" },
  { id: 2, size: "2m x 2m", available: true, package: "Exhibitor" },
  { id: 3, size: "3m x 3m", available: false, package: "Silver" },
  { id: 4, size: "3m x 3m", available: true, package: "Silver" },
  { id: 5, size: "4m x 4m", available: true, package: "Gold" },
  { id: 6, size: "4m x 4m", available: false, package: "Gold" },
  { id: 7, size: "4m x 4m", available: true, package: "Gold" },
  { id: 8, size: "4m x 4m", available: true, package: "Gold" },
  { id: 9, size: "6m x 6m", available: false, package: "Platinum" },
  { id: 10, size: "6m x 6m", available: true, package: "Platinum" },
  { id: 11, size: "6m x 6m", available: true, package: "Platinum" },
  { id: 12, size: "6m x 6m", available: true, package: "Platinum" },
];

const ExhibitionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <section className="relative bg-gray-800 text-white py-20 sm:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/events/exhibition/exhibition.webp')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Sponsorship Prospectus
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            “Unlocking Northern Nigeria’s Potential: Pathways to Sustainable
            Investment and Development”
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button asChild>
              <Link to="/">{"<- Back to Home"}</Link>
            </Button>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                About the Forum
              </h2>
              <p className="text-gray-600 text-lg">
                The Northern Nigeria Investment and Industrialization Summit
                (NNIIS) 2025 is a premier economic summit bringing together
                investors, policymakers, entrepreneurs, and development partners
                to explore and unlock the vast economic potential of Northern
                Nigeria.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Sponsor NNIIS 2025?
                </h3>
                <p className="text-gray-600 mb-4">
                  The Summit positions your brand for growth in one of Africa’s
                  most promising regional markets. You'll have the opportunity
                  to engage directly with top-level decision-makers,
                  industrialists and service providers while building a lasting
                  partnership.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-nigeria-green mr-2 mt-1">✔</span>
                    Direct access to investment-ready projects in agriculture,
                    energy, infrastructure, technology and mining.
                  </li>
                  <li className="flex items-start">
                    <span className="text-nigeria-green mr-2 mt-1">✔</span>
                    Networking with top-level leadership of federal/state, DFIs,
                    and private sector stakeholders.
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/events/exhibition/exhibition.png"
                  alt="NNIIS Exhibition Booth"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Sponsorship Tiers
                </h2>
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button>View Available Booths</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>Available Exhibition Booths</DialogTitle>
                    </DialogHeader>
                    <div className="max-h-[70vh] overflow-y-auto p-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
                        {booths.map((booth) => (
                          <div
                            key={booth.id}
                            className={`rounded-lg shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 ${
                              booth.available ? "bg-white" : "bg-gray-200"
                            }`}
                          >
                            <div>
                              <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-gray-800">
                                  Booth {booth.id}
                                </h3>
                                <span
                                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                    booth.available
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {booth.available ? "Available" : "Taken"}
                                </span>
                              </div>
                              <p className="text-gray-600">
                                <span className="font-semibold">Size:</span>{" "}
                                {booth.size}
                              </p>
                              <p className="text-gray-600">
                                <span className="font-semibold">Package:</span>{" "}
                                {booth.package}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {sponsorshipTiers.map((tier, index) => (
                  <div
                    key={tier.name}
                    className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 w-full max-w-sm flex flex-col ${
                      index === 0 ? "border-4 border-nigeria-green" : ""
                    }`}
                  >
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-4">
                      {tier.name}
                    </h3>
                    <p className="text-2xl font-semibold text-gray-700 text-center mb-6">
                      {tier.investment}
                    </p>
                    <ul className="space-y-4 text-gray-600 flex-grow mb-8">
                      {[
                        { label: "Speaking Slot", value: tier.speakingSlot },
                        { label: "Branding", value: tier.branding },
                        { label: "Exhibition Booth", value: tier.booth },
                        { label: "Delegate Passes", value: tier.passes },
                        { label: "Media Coverage", value: tier.media },
                        { label: "Advert in Brochure", value: tier.advert },
                        {
                          label: "Sponsored Side Event",
                          value: tier.sideEvent,
                        },
                      ].map((item) => (
                        <li key={item.label} className="flex items-center">
                          <span className="text-nigeria-green mr-3">✔</span>
                          <span>
                            <strong>{item.label}:</strong> {item.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      size="lg"
                      className="w-full mt-auto bg-nigeria-green hover:bg-nigeria-green/90"
                    >
                      <a
                        href={`/register?type=exhibitor&tier=${tier.name
                          .split(" ")[0]
                          .toLowerCase()}`}
                      >
                        Select Package
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Be a Driver of Northern Nigeria’s Transformation
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Your sponsorship is more than brand exposure, it’s an investment
                in people, potential, and long-term prosperity. Together, we
                will chart a bold course for inclusive growth and economic
                transformation.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600">
                To reserve your sponsorship slot or request a custom package:
              </p>
              <p className="text-gray-800 font-semibold mt-2">
                Email: support@mapinng.com
              </p>
              <p className="text-gray-800 font-semibold">
                Tel: +234 7034131908
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExhibitionPage;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

const ExhibitionPage = () => {
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
                Sponsorship Tiers
              </h2>
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

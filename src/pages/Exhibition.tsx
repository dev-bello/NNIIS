import { Button } from "@/components/ui/button";

const sponsorshipTiers = [
  {
    name: "Platinum Sponsor",
    investment: "₦200,000,000",
    speakingSlot: "Keynote & Panel",
    branding: "Premium Placement",
    booth: "6x6m (Prime)",
    passes: 10,
    media: "Featured Interview",
    advert: "Full Page",
    sideEvent: "Yes",
  },
  {
    name: "Gold Sponsor",
    investment: "₦150,000,000",
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
    investment: "₦100,500,000",
    speakingSlot: "Breakout Session",
    branding: "Standard Placement",
    booth: "3x3m",
    passes: 4,
    media: "Mention",
    advert: "Half Page",
    sideEvent: "No",
  },
  {
    name: "Exhibitor",
    investment: "₦50,000,000",
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
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Audience Profile
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong>Investors:</strong> Domestic and international
                    venture capital, private equity, and institutional investors
                  </li>
                  <li>
                    <strong>Government:</strong> State Governors, Commissioners
                    of Trade, Investment, Agriculture, and Infrastructure
                  </li>
                  <li>
                    <strong>Development Partners:</strong> AfDB, NEXIM, AFREXIM
                    and other bilateral agencies
                  </li>
                  <li>
                    <strong>Entrepreneurs & SMEs:</strong> High-growth startups
                    and scale-ups
                  </li>
                  <li>
                    <strong>Media:</strong> National and international business
                    press
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
                Sponsorship Tiers
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {sponsorshipTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="border rounded-lg p-6 flex flex-col shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-xl font-semibold text-gray-800 mb-4">
                      {tier.investment}
                    </p>
                    <ul className="space-y-3 text-gray-600 flex-grow">
                      <li>
                        <strong>Speaking Slot:</strong> {tier.speakingSlot}
                      </li>
                      <li>
                        <strong>Branding:</strong> {tier.branding}
                      </li>
                      <li>
                        <strong>Exhibition Booth:</strong> {tier.booth}
                      </li>
                      <li>
                        <strong>Delegate Passes:</strong> {tier.passes}
                      </li>
                      <li>
                        <strong>Media Coverage:</strong> {tier.media}
                      </li>
                      <li>
                        <strong>Advert in Brochure:</strong> {tier.advert}
                      </li>
                      <li>
                        <strong>Sponsored Side Event:</strong> {tier.sideEvent}
                      </li>
                    </ul>
                    <Button asChild size="lg" className="mt-6 w-full">
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
                Email: infoarewa@gmail.com
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

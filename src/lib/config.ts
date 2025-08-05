export const config = {
  navLinks: [
    { href: "#about", label: "About" },
    { href: "#speakers", label: "Speakers" },
    {
      label: "Events",
      children: [
        { href: "/exhibition", label: "Sponsor & Exhibit" },
        { href: "/masterclasses", label: "Masterclasses" },
      ],
    },
  ],
  buttons: {
    register: "Register Now",
    learnMore: "Learn More",
    partnerWithUs: "Partner With Us",
  },
  masterclasses: [
    {
      sector: "Tech",
      title:
        "Smart Infrastructure: Leveraging IoT & Data for Industrial Growth",
      expert: "Abdul Samad Rabiu",
      company: "BUA Group",
      image: "/images/khalil-suleiman-halilu.jpg",
    },
    {
      sector: "Agriculture",
      title: "Building Export-Ready Agribusinesses in Northern Nigeria",
      expert: "Dr. Akinwumi Adesina",
      company: "African Development Bank",
      image: "/speakers/adesina.png",
    },
    {
      sector: "Power / Energy",
      title:
        "Energy Efficiency & Smart Grids: Reducing Power Losses in Northern Nigeria",
      expert: "Prof. Ango Abdullahi",
      company: "Ahmadu Bello University",
      image: "/images/profango.png",
    },
    {
      sector: "Agriculture",
      title: "Climate-Smart Dryland Farming: Innovations for Northern States",
      expert: "Audu Ogbeh",
      company: "Federal Ministry of Agriculture and Rural Development",
      image: "/images/Audu-Ogbeh.jpg",
    },
    {
      sector: "Solid Minerals",
      title: "Processing & Value Addition: Moving Beyond Raw Mineral Exports",
      expert: "Aliko Dangote",
      company: "Dangote Group",
      image: "/speakers/dangote.png",
    },
    {
      sector: "Agriculture",
      title: "Value Chain Finance: Unlocking Capital for Smallholder Farmers",
      expert: "Aliyu Abdullahi",
      company: "Central Bank of Nigeria",
      image: "/speakers/abdullahi.png",
    },
    {
      sector: "Power / Energy",
      title:
        "Off-Grid Solar & Mini-Grids: Scaling Rural Electrification Profitably",
      expert: "Mr. Habu Sadeik",
      company: "Nigerian Electricity Regulatory Commission",
      image: "/images/Habu-sadiek.jpg",
    },

    {
      sector: "Solid Minerals",
      title:
        "Concession to Market: A-Z of Mineral Licensing & Investment Readiness",
      expert: "Mr. Nura Ibrahim",
      company: "Ministry of Mines and Steel Development",
      image: "/images/events/masterclass/masterclass1.jpg",
    },

    {
      sector: "Power / Energy",
      title: "Policy & Licensing Mastery: Navigating Power Sector Regulations",
      expert: "Mr. Tahir Abubakar",
      company: "Transmission Company of Nigeria",
      image: "/images/tahir.PNG",
    },
    {
      sector: "Tech",
      title:
        "Digitizing Agriculture: Building Agri-Tech Solutions for Northern Farmers",
      expert: "Mr. Khalil Suleiman Halilu ",
      company:
        "National Agency for Science and Engineering Infrastructure (NASENI)",
      image: "/images/Khalil-suleiman-halilu.jpg",
    },
    {
      sector: "Solid Minerals",
      title: "Community Agreements & ESG in Mining",
      expert: "Theophilus Danjuma",
      company: "South Atlantic Petroleum",
      image: "/images/danjuma.jpg",
    },
  ],
};

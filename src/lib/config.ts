export const config = {
  navLinks: [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#speakers", label: "Speakers" },
    {
      label: "Events",
      children: [
        { href: "/exhibition", label: "Sponsor & Exhibit" },
        { href: "/events", label: "Panels & Masterclasses" },
        { href: "/b2b", label: "B2B Matchmaking" },
      ],
    },
  ],
  buttons: {
    register: "Register Now",
    learnMore: "Learn More",
    partnerWithUs: "Partner With Us",
  },
  thematicAreas: [
    {
      title: "Export Ready Agribusiness",
      options: [],
    },
    {
      title: "Industrial parks (MAP)",
      options: ["Sea port", "Dryports", "All industrial zones"],
    },
    {
      title: "Energy efficiency and smart Grids",
      options: ["Distribution", "Transmission"],
    },
    {
      title:
        "Off grids & Mini Grids scaling rural electric profitability (Thermal)",
      options: [],
    },
    {
      title: "Regulatory Policies",
      options: ["Thematic Area 1", "Thematic Area 2", "Thematic Area 3"],
    },
  ],
  masterclasses: [
    {
      title: "PPP, Privatization in Northern Nigeria",
      expert: "Nufi Yohanna Barnabas",
      company: "CEO, Infracore Ltd.",
      image: "/images/nufi.jpeg",
      excerpt:
        "Session will discuss mobilizing private sector funding for public infrastructure in Northern Nigeria.",
    },
    {
      title: "Guidelines for Investing in Northern Nigeria",
      expert: "Morty International",
      company: "",
      image: "/images/events/masterclass/masterclass 2.jpg",
      excerpt:
        "Session will focus on guidelines, processes, procedures on how to invest in Northern Nigeria.",
    },
  ],
  panels: [
    {
      title: "Power",
      topic:
        "Bridging the Power deficit in Northern Nigeria: Scalable Investment Decentralization Systems and Grid resilience strategies for energy security.",
      moderator: "Habu Sadeik - PwC, Power Sector Analyst",
      panelists: [
        "Abdullahi Garba - Chairman/CEO, NERC",
        "Mahmuda Mamman – Permanent Secretary of the Ministry of Power",
        "Ahmad Rufai Zakari, OON - ED, Kano Electric",
        "Prof. Babakalli Alkali - Glasgow Caledonian University",
        "Rahila Thomas - Chairperson, Kaduna Electric",
      ],
    },
    {
      title: "Agriculture",
      topic:
        "From Farm to Factory to Fortune: Pathway to Northern Nigeria Agro-Industrial Transformation.",
      moderator: "Jafar Umar - DG NABG",
      leadPresenter:
        "Habiba Sulieman - Head of Strategic Partnerships, TGI Group",
      panelists: [
        "Sen. Abubakar Kyari Minister of Agriculture and Food Security",
        "Habiba Sulieman - Head of Strategic Partnerships, TGI Group",
        "Aminu M. Nyako - MD/CEO of Sebore Farms",
        "Usman Ali Lawal – CEO USAIFA ",
        "Redson Tedheke - CEO, NFGCS",
      ],
    },
    {
      title: "Technology",
      topic:
        "Harnessing the Digital economy to boost growth in Northern Nigeria: Innovation in Mining, Agriculture and Power",
      moderator: "Hafsah Aliyu - Data Analyst",
      leadPresenter: "Surayyah Ahmad - Founding Partner, Sabou Capital ",
      panelists: [
        "Hon. Bello El-Rufai – MHoR, Kaduna North",
        "Surayyah Ahmad - Founding Partner, Sabou Capital ",
        "Aminu Bakori – Founder/CEO Sudo Africa",
        "Al-Amin Idris – CEO Interface",
        "Samail Sanusi – Founder Colab",
      ],
    },
    {
      title: "Mining",
      topic:
        "Harnessing Mining for Sustainable Growth in Northern Nigeria: Opportunities, Challenges, and Pathways to Inclusive Development",
      moderator: "Nere Emiko, Founder/ Executive Vice Chairman of Kian Smith",
      leadPresenter: "Prof. Ibrahim Garba",
      panelists: [
        "Dr. Henry Dele Alake, Minister of Solid Minerals Development",
        "Engr Abdulrahman Ottan",
        "Alhaji NASIRU Inuwa Wanda",
        "Bello Mohammed ",
      ],
    },
  ],
};

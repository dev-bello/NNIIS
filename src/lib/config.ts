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
      title: "Solid Minerals",
      description: "Unlock the potential of Nigeria's vast mineral resources.",
      expert: "Mr. Nura Ibrahim",
      image: "/images/events/masterclass/masterclass1.jpg",
    },
    {
      title: "Technology",
      description:
        "Driving innovation and digital transformation in Northern Nigeria.",
      expert: "Mr. Khalil Suleiman Halilu ",
      image: "/images/Khalil-suleiman-halilu.jpg",
    },
    {
      title: "Power",
      description:
        "Developing sustainable energy solutions for a brighter future.",
      expert: "Mr. Habu Sadeik",
      image: "/images/Habu-sadiek.jpg",
    },
    {
      title: "Agriculture",
      description:
        "Modernizing agriculture for food security and economic growth.",
      expert: "Mr. Tahir Abubakar",
      image: "/images/tahir.PNG",
    },
  ],
};

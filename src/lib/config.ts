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
      expert: "Industry Expert",
    },
    {
      title: "Technology",
      description:
        "Driving innovation and digital transformation in Northern Nigeria.",
      expert: "Industry Expert",
    },
    {
      title: "Power",
      description:
        "Developing sustainable energy solutions for a brighter future.",
      expert: "Industry Expert",
    },
    {
      title: "Agriculture",
      description:
        "Modernizing agriculture for food security and economic growth.",
      expert: "Industry Expert",
    },
  ],
};

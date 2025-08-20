export interface StateData {
  name: string;
  slug: string;
  tagline: string;
  numbers: { label: string; value: string; sub?: string }[];
  opportunities: string[];
  climate: string;
  airport: string;
  port: string;
  sez: string;
  initiatives: string[];
  advantages: string[];
  description: string;
}

export const STATES_DATA: Record<string, StateData> = {
  adamawa: {
    name: "Adamawa State",
    slug: "adamawa",
    tagline: "Land of BEAUTY",
    numbers: [
      { label: "IGR Projection 2025", value: "$16.1 Million" },
      { label: "Budget 2025", value: "$318.6 Million" },
      { label: "Est. Population 2025", value: "5.3 Million" },
      { label: "Labour Force 2020", value: "1.8 Million" },
      { label: "Household Consumption 2019", value: "$1.5 Billion" },
      { label: "Land Area", value: "38,700 km²" },
    ],
    opportunities: [
      "Beef Production and Processing",
      "Dairy",
      "Rice Processing",
      "Solid Minerals Production and Processing",
      "Renewable Energy",
    ],
    climate: "Tropical Savanna",
    airport: "Domestic (Yola)",
    port: "Nil",
    sez: "Sebore Farms Export Processing Zone & Special Agro-Industrial Processing Zones (SAPZ)",
    initiatives: [
      "Establishment of Adamawa State Investment Promotion Agency (ADIPA) as one-stop-shop for investors",
      "Developed and published effective PPP frameworks to protect and guide investors",
      "Enhanced regulations and zero Naira right-of-way fees for fibre optic investment",
      "Executive order on the Establishment, Adoption and Implementation of Framework for Responsible and Inclusive Land Intensive Agricultural Investment (FRILIA)",
      "Greater fee transparency and streamlined exporter certification",
      "Ongoing study to establish Free Trade Zone/ Industrial Hub in the State",
      "Favourable policies for large-scale dairy farming and milk processing plants.",
    ],
    advantages: [
      "Adamawa State arguably has the largest cattle population in the country",
      "The border with Cameroon provides access to Central African markets",
      "The State has large deposits of solid minerals such as lithium, copper, and gold",
      "Good road networks and power supply to support industrial operations",
      "High potential for renewable energy investment, with one of highest solar irradiation levels and ample land for large-scale solar projects",
    ],
    description:
      "Adamawa State, in northeastern Nigeria, is an agricultural hub largely producing maize, rice, groundnuts, and livestock. Bordering Cameroon, it boasts rich cultural heritage, untapped oil and mineral resources, and key tourist sites like the Mambilla Plateau and Gashaka-Gumti National Park. With vast natural wealth and a strategic location, it offers strong investment potential.",
  },
  bauchi: {
    name: "Bauchi State",
    slug: "bauchi",
    tagline: "Pearl  of  Tourism",
    numbers: [
      { label: "IGR Projection 2025", value: "$32.7 Million" },
      { label: "Budget 2025", value: "$295 Million" },
      { label: "Est. Population 2025", value: "9.2 Million" },
      { label: "Labour Force 2020", value: "2.5 Million" },
      { label: "Household Consumption 2019", value: "$2.2 Billion" },
      { label: "Land Area", value: "49,119 km²" },
    ],
    opportunities: [
      "Agriculture",
      "Tourism and hospitality",
      "Solid Minerals Mining",
      "Renewable Energy ",
      "Real Estate and Infrastructure Development",
    ],
    climate: "Tropical Savanna and Hot Semi-Arid",
    airport: "Domestic (Bauchi)",
    port: "Nil",
    sez: "Special Agro-Industrial Processing Zone (SAPZ)",
    initiatives: [
      "Ease of Doing Business reforms",
      "Agricultural Transformation Agenda Tourism Promotion Policy",
      "Custom duty waivers on machinery and equipment for investors in priority sectors",
      "Access to finance and credit schemes by collaborating with development finance institutions to provide investor credit access",
    ],
    advantages: [
      "4.2 million hectares of vast arable land for cultivation",
      "Geographical position, sharing borders with seven States facilitating access to various markets",
      "Well-developed transport infrastructure",
      "Solid mineral deposits",
      "Ranked 4th in the 2021 subnational Ease of Doing Business rankings",
    ],
    description:
      "Bauchi State, situated in northeastern Nigeria, is endowed with abundant mineral and fertile land resources. The state produces a variety of crops including maize, rice, millet, groundnuts, and cotton, and also supports livestock farming. It is home to Yankari National Park, one of Nigeria’s premier wildlife and eco-tourism destinations. The state government focuses on advancing agriculture, education, tourism, and infrastructure as key drivers of development.",
  },
  benue: {
    name: "Benue State",
    slug: "benue",
    tagline: "Food basket of the nation",
    numbers: [
      { label: "IGR Projection 2025", value: "$23.3 Million" },
      { label: "Budget 2025", value: "$360 Million" },
      { label: "Est. Population 2025", value: "6.5 Million" },
      { label: "Labour Force 2020", value: "2.6 Million" },
      { label: "Household Consumption 2019", value: "$3.3 Billion" },
      { label: "Land Area", value: "31,282 km²" },
    ],
    opportunities: [
      "Soya Bean Production and Processing",
      "Cassava and yam processing",
      "Sesame Seed Production and Processing",
      "Industrial Parks",
      "Pasture Hay Production for Export ",
    ],
    climate: "Tropical Savanna",
    airport: "Domestic (Makurdi)",
    port: "River port on Benue River",
    sez: "Makurdi Special Economic Zone & Special Agro-Industrial Processing Zone (SAP Z)",
    initiatives: [
      "Ease of Doing Business reforms, including digital business registration platforms, streamlined permitting processes, and a responsive investor grievance redress system",
      "One-Stop Investment Promotion Agency (IPA)",
      "Robust PPP governance frameworks",
      "Investment-friendly tax incentives, including five-year tax holidays and import waivers for key sectors",
      "Sector-specific tax exemptions, import duty waivers, and subsidised utility rates for priority sectors",
      "Land banking scheme and provision of subsidised land",
      "Adoption of Framework for Responsible Investment in Land-Intensive Agriculture (FRILIA)",
      "Infrastructure clustering through the development of industrial parks, special economic zones, and smart cities",
    ],
    advantages: [
      "Borders six states and Cameroon, making it a corridor for domestic and cross-border trade and logistics",
      "34 commercially viable solid minerals, including limestone, gold, coal, and lithium",
      "Vast arable land and extensive river system, supporting year-round farming and agro-processing",
      "Largest producer of yams and cassava globally, and a major hub for soybeans and sesame",
      "Growing infrastructure base, with improved road networks, waterways, and planned rail projects enhancing connectivity",
      "Distinct natural assets like Tsoho Island and cultural festivals such as Akata Fishing Festival",
      "Government incentives like tax relief and land grants through BENIPA",
      "Strong base for mass starch and ethanol production from cassava and maize",
    ],
    description:
      "Benue State, known as Nigeria’s “Food Basket,” is a major agricultural hub producing yam, rice, cassava, and soybeans. It also has significant livestock farming, fisheries, and natural resources like limestone and gypsum. With a rich cultural heritage and government focus on agriculture, infrastructure, and education, the state offers strong investment opportunities.",
  },
  borno: {
    name: "Borno State",
    slug: "borno",
    tagline: "Home of Peace",
    numbers: [
      { label: "IGR Projection 2025", value: "$19 Million" },
      { label: "Budget 2025", value: "$387 Million" },
      { label: "Est. Population 2025", value: "6.5 Million" },
      { label: "Labour Force 2020", value: "1.1 Million" },
      { label: "Household Consumption 2019", value: "$6.9 Billion" },
      { label: "Land Area", value: "68,925 km²" },
    ],
    opportunities: [
      "Industrial / Agricultural Processing",
      "Livestock Production and Processing",
      "Renewable energy  ",
      "Infrastructure Development",
      "Date palm cultivation",
      "Tourism and cultural heritage",
    ],
    climate: "Tropical Savanna",
    airport: "Domestic and International (Maiduguri)",
    port: "Railway and Dry-port",
    sez: "Banki Border Free Zone & Special Agro-Industrial Processing Zone (SAP Z)",
    initiatives: [
      "Established a one-stop-shop to facilitate investment, providing a single point of contact for investors",
      "Fast processing of land acquisition applications",
      "Tax relief for research and development",
      "Provision of infrastructural facilities such as road, water, electricity, etc.",
    ],
    advantages: [
      "2nd largest state in Nigeria covering about 7.4% of Nigeria landmass",
      "Hub for cross-border trade, sharing borders with Cameroon, Chad, and Niger",
      "Significant mineral deposits, including limestone, marble, granite, and grade A gum arabic",
      "Over 1 million reserved lands for livestock production",
      "The state has a dedicated gum arabic bel",
      "Vast arable land for large-scale agricultural production",
      "Well-developed infrastructures like roads, water and electricity",
    ],
    description:
      "Borno State is the second largest state by land area and rich in agriculture, livestock, and trade, particularly around Lake Chad. Despite recent security challenges, the state is focused on reconstruction, infrastructure development, and economic recovery, offering opportunities in sectors like tourism and agribusiness.",
  },
  fct: {
    name: "Federal Capital Territory",
    slug: "fct",
    tagline: "Center of Unity",
    numbers: [
      { label: "IGR Projection 2025", value: " " },
      { label: "Budget 2025", value: " " },
      { label: "Est. Population 2025", value: " " },
      { label: "Labour Force 2020", value: " " },
      { label: "Household Consumption 2019", value: " " },
      { label: "Land Area", value: " " },
    ],
    opportunities: ["", ""],
    climate: "",
    airport: "Domestic and International (Abuja)",
    port: "",
    sez: "",
    initiatives: ["", "", ""],
    advantages: ["", "", "", ""],
    description: "Nigeria's Capital City",
  },
  gombe: {
    name: "Gombe State",
    slug: "gombe",
    tagline: "Jewel in the savannah",
    numbers: [
      { label: "IGR Projection 2025", value: "$16.8 Million" },
      { label: "Budget 2025", value: "$172 Million" },
      { label: "Est. Population 2025", value: "4.3 Million" },
      { label: "Labour Force 2020", value: "1.3 Million" },
      { label: "Household Consumption 2019", value: "$1.3 Billion" },
      { label: "Land Area", value: "17,100 km²" },
    ],
    opportunities: [
      "Agriculture",
      "Solid Mineral Resources",
      "Renewable Energy",
      "Infrastructure Development",
      "Textile and Garment Manufacturing",
    ],
    climate: "Tropical Savanna and hot semi-arid",
    airport: "Domestic (Gombe)",
    port: "Nil",
    sez: "Special Agro-Industrial Processing Zones (SAP Zs) & Pre-Development Studies for SE Zs",
    initiatives: [
      "Gombe Strategic Development Plan (GSDP 2021-2030)",
      "Gombe State Investment Promotion Agency (GOSIPA) and a One-Stop Investment Centre",
      "Ease of doing business reforms",
      "Public-Private Partnerships (PPPs)",
      "Investment incentives and economic zones",
      "Infrastructure and Human Capital Development",
      "Good Governance and Security",
      "Strengthening Monitoring and Evaluation (M&E) Systems: Adoption of the National Monitoring and Evaluation Policy (NMEP) to ensure policy effectiveness",
      "Bureau of Public Service reform",
      "Collaboration with the UNDP through the Integrated National Financing Framework (INFF)",
    ],
    advantages: [
      "Strategic location and trade hub",
      "Abundant natural and agricultural resources",
      "Proactive government policies and business-friendly environment",
      "Infrastructure development and energy",
      "Accessibility",
      "Educational and research institutions",
      "Young and vibrant workforce: Gombe offers a large, youthful, and affordable labor pool for diverse industries",
      "Strong Public-Private Partnerships (PPPs)",
    ],
    description:
      "Gombe State, situated in northeastern Nigeria, offers a wealth of investment opportunities with its strong agricultural base, producing key crops like maize, millet, and groundnuts, alongside valuable coal and limestone deposits. The state is committed to industrial growth, infrastructure development, and economic diversification, making it a prime location for investors.",
  },
  jigawa: {
    name: "Jigawa State",
    slug: "jigawa",
    tagline: "The new world",
    numbers: [
      { label: "IGR Projection 2025", value: "$54.7 Million" },
      { label: "Budget 2025", value: "$392 Million" },
      { label: "Est. Population 2025", value: "8.3 Million" },
      { label: "Labour Force 2020", value: "2.0 Million" },
      { label: "Household Consumption 2019", value: "$1.5 Billion" },
      { label: "Land Area", value: "23,287 km²" },
    ],
    opportunities: [
      "Crop production",
      "Livestock and dairy production & processing",
      "Rice and sesame oil processing",
      "Mining",
      "Agro-processing",
    ],
    climate: "Tropical Savanna",
    airport: "Domestic (Dutse)",
    port: "Dry-port",
    sez: "Maigatari Export Processing Zone (EPZ)",
    initiatives: [
      "Jigawa has policies like the Agricultural Policy 2024-2030, Off-Grid Solar Policy 2022-2030, and Export Promotion Strategy to attract investment.",
      "Has reforms focused on political stability, security, and a supportive business environment.",
      "Incentives include tax breaks, land access, simplified business registration, and infrastructure support.",
      "The state has abundant natural resources and is strategically located near major markets",
    ],
    advantages: [
      "Jigawa is strategically located with access to international markets like China, India, and Europe.",
      "Agriculture dominates Jigawa's economy, with growth potential in mining, manufacturing, and trade.",
      "Over 3,600 km of paved roads, an airport, and access to railway projects.",
      "Investors benefit from tax holidays, land for industries, and improving business conditions.",
    ],
    description:
      "Jigawa State, in northwestern Nigeria, offers rich opportunities in agriculture, livestock, and leather production. With growing investment in infrastructure and rural development, and unique tourism sites like the Birnin Kudu Rock Paintings, it's a rising destination for smart investors.",
  },
  kaduna: {
    name: "Kaduna State",
    slug: "kaduna",
    tagline: "Center of learning",
    numbers: [
      { label: "IGR Projection 2025", value: "$73.5 Million" },
      { label: "Budget 2025", value: "$465 Million" },
      { label: "Est. Population 2025", value: "9.8 Million" },
      { label: "Labour Force 2020", value: "3.4 Million" },
      { label: "Household Consumption 2019", value: "$3.9 Billion" },
      { label: "Land Area", value: "42,481 km²" },
    ],
    opportunities: [
      "Agriculture ( staple crops, irrigation services, post-harvest yield )",
      "Power / renewable energy",
      "Healthcare and pharmaceuticals",
      "ICT ( data centres & Internet infrastructure )",
      "Solid minerals / mining",
    ],
    climate: "Tropical Savanna",
    airport: "Domestic and International (Kaduna)",
    port: "Dry-port",
    sez: "Green Economic Zone (GE Z) & Special Agro-Industrial Processing Zones (SAPZs)",
    initiatives: [
      "Availability of infrastructure and industrial master plans",
      "An investment promotion Agency acting as a one-stop shop for all investments into the state",
      "PPP policy and framework in place",
      "Tax harmonization and codification law",
      "Collaborating with Federal Government MDAs to facilitate tax incentives",
      "Provides waivers or discounts on land-related charges, construction permits etc.",
    ],
    advantages: [
      "Located along major trade routes",
      "One of the largest commercial, industrial and transportation center in Nigeria and West Africa",
      "Boosts of 4.6 million hectares of arable land (5th largest in Nigeria)",
      "Largest producer of ginger and maize in Nigeria",
      "Second largest producer of soya beans in Nigeria ",
      "Abundant natural resources, including over 25 non-oil mineral deposits (gold, iron ore and marble) ",
      "Ranks high in ease of doing business and transparency ",
      "High literacy rate, skilled workforce and a population exceeding 10 million ",
    ],
    description:
      "Kaduna State, in northwestern Nigeria, is an investment hub driven by agriculture, manufacturing, and trade — with key crops like maize, ginger, and cotton. Known for sites like Kajuru Castle and Nok Terracotta, it also hosts major defence industries. The state's focus on infrastructure and industrialization makes it a strategic choice for investors",
  },
  kebbi: {
    name: "Kebbi State",
    slug: "kebbi",
    tagline: "land of equity",
    numbers: [
      { label: "IGR Projection 2025", value: "$17.0 Million" },
      { label: "Budget 2025", value: "$359 Million" },
      { label: "Est. Population 2025", value: "6.2 Million" },
      { label: "Labour Force 2020", value: "1.5 Million" },
      { label: "Household Consumption 2019", value: "$1.8 Billion" },
      { label: "Land Area", value: "36,985 km²" },
    ],
    opportunities: [
      "Agribusiness",
      "Renewable energy generation",
      "Solid minerals exploration and processing",
      "Inter-state railway transport and logistics",
      "Transport and Logistics Infrastructure",
    ],
    climate: "Tropical Savanna and hot semi-arid",
    airport: "Domestic and International (Birnin Kebbi)",
    port: "Nil",
    sez: "Special Agro-Industrial Processing Zone",
    initiatives: [
      "Streamlined property registration and tax systems to boost investment.",
      "Improved regulations for fibre optics",
      "Clear fee structures and reduced interstate trade barriers",
      "Strong policies for fiscal responsibility, PPPs, and industrial growth.",
      "One-Stop Investment Centre, KIPA, and dedicated PPP Unit to assist investors.",
      "Easier land access via FRILIA and inclusive schemes like Women for Vegetables Farming (W4VF) scheme.",
      "Existence of Kebbi Diaspora Investors Forum (KEDIFO) and a planned Project/Infrastructure Development Fund.",
    ],
    advantages: [
      "Significant mineral resource deposits – including high graphite deposits or lithium, gold, iron-ore, limestone etc",
      "Free-trade zone, special Agro-processing zone International cargo airport",
      "Trans-Saharan superhighway (under construction)",
      "Large water bodies with 50% of River Niger flowing through the State",
      "Gateway to the West African market",
      "Inland dry port (under construction)",
    ],
    description:
      'Kebbi State, in northwestern Nigeria, is a leading agricultural hub known as "Nigeria’s Rice Capital," with strong production of rice, wheat, millet, and sorghum. It also has a vibrant livestock, fishing, and trade economy. The state is investing in agro-industrial development and infrastructure, with cultural tourism highlighted by the UNESCO-listed Argungu Fishing Festival.',
  },
  kano: {
    name: "Kano State",
    slug: "kano",
    tagline: "Centre of commerce",
    numbers: [
      { label: "IGR Projection 2025", value: "$56.3 Million" },
      { label: "Budget 2025", value: "$453 Million" },
      { label: "Est. Population 2025", value: "16.7 Million" },
      { label: "Labour Force 2020", value: "4.5 Million" },
      { label: "Household Consumption 2019", value: "$5.3 Billion" },
      { label: "Land Area", value: "20,280 km²" },
    ],
    opportunities: [
      "Agriculture ( rice production )",
      "Manufacturing ( rice milling, recycling of products )",
      "Education ( creation of entrepreneurship schools across the state )",
      "Healthcare and pharmaceuticals",
      "Power and renewable energy",
    ],
    climate: "Tropical Savanna and hot semi-arid",
    airport: "Domestic and International (Kano)",
    port: "Dry-port",
    sez: "Kano Free T rade Zone (KF TZ) & Special Agro-Industrial Processing Zones (SAP Zs)",
    initiatives: [
      "Land allocation to viable investors.",
      "Tax waivers for qualifying businesses. || Tax holidays for strategic investments",
      "Kan-Invest serves as a one-stop shop to reduce bureaucratic hurdles.",
      "Availability of microcredit to eligible SMEs and small-scale farmers.",
      "Government readiness to take up some of the products produced by investors.",
    ],
    advantages: [
      "Arable land available for farming, Untapped vast farming land across the state.",
      "Access to markets due to high population density and proximity to sub-Saharan Africa.",
      "Large deposits of gold and other mineral resources across various LGAs.",
      "Good road networks linking the state to the North- West Region and beyond.",
      "Borders with different states across sub-Saharan Africa.",
      "Availability of skilled and unskilled labor due to high population density.",
    ],
    description:
      "Kano State, a commercial hub in northern Nigeria, thrives on agriculture, manufacturing, and trade — producing groundnuts, millet, and rice. With vibrant industries in textiles, leather, and food processing, plus landmarks like the Ancient City Walls and Kurmi Market, Kano blends heritage with opportunity. Ongoing investments in infrastructure, education, and industrialization make it a prime destination for growth-focused investors.",
  },
  kogi: {
    name: "Kogi State",
    slug: "kogi",
    tagline: "The confluence state",
    numbers: [
      { label: "IGR Projection 2025", value: "$22.9 Million" },
      { label: "Budget 2025", value: "$382 Million" },
      { label: "Est. Population 2025", value: "4.8 Million" },
      { label: "Labour Force 2020", value: "1.9 Million" },
      { label: "Household Consumption 2019", value: "$2.6 Billion" },
      { label: "Land Area", value: "27,747 km²" },
    ],
    opportunities: [
      "Agriculture / Agro-processing",
      "Mining",
      "Renewable Energy",
      "Tourism",
      "Manufacturing",
    ],
    climate: "Tropical Savanna",
    airport: "Nil",
    port: "Nil",
    sez: "Kogi-Hunan Special Economic Zone (SEZ) & Special Agro-Industrial Processing Zone (SAPZ)",
    initiatives: [
      "The Kogi State Investment Promotion and PPP agency serves as a one-stop shop for streamlined investment approvals.",
      "Investment-friendly tax reforms offer breaks for new industries.",
      "Digitized land administration simplifies access to land and certificates of occupancy.",
      "Small Claims Courts provide fast, informal resolution of debts up to ₦100 million.",
      "A Special Economic Zone in Ajaokuta targets resource-based industrial growth.",
      "Ukpake hosts a designated Agro-Industrial Processing Zone to drive agro-industrial development.",
      "A land investment framework supports responsible and inclusive agricultural ventures.",
      "Mortgage foreclosure law promotes housing and real estate development.",
    ],
    advantages: [
      "Strategically located with access to Nigeria’s large central market.",
      "Rich in natural resources supporting both mining and agriculture.",
      "Strong industrial base with major factories like Dangote Cement, Mangal Cement, BUA Cement, and Ajaokuta Steel Company.",
      "High renewable energy potential, including solar, biomass, and wind.",
      "Development of LNG facilities strengthens the state’s energy security.",
    ],
    description:
      "Kogi State, in north-central Nigeria, is rich in coal, limestone, and iron ore, making it a key mining and industrial hub—home to the Ajaokuta Steel Company and Dangote Cement’s largest factory. Agriculture remains vital, with major crops like yam, cassava, and rice. The government is prioritizing infrastructure and industrial growth to attract investment",
  },
  katsina: {
    name: "Katsina State",
    slug: "katsina",
    tagline: "State of hospitality",
    numbers: [
      { label: "IGR Projection 2025", value: "$42.2 Million" },
      { label: "Budget 2025", value: "$434 Million" },
      { label: "Est. Population 2025", value: "11.6 Million" },
      { label: "Labour Force 2020", value: "2.8 Million" },
      { label: "Household Consumption 2019", value: "$3.3 Billion" },
      { label: "Land Area", value: "23,561 km²" },
    ],
    opportunities: [
      "Agribusiness",
      "Transportation network",
      "Mineral extraction and processing",
      "Tourism",
      "Hospitality",
    ],
    climate: "Tropical Savanna and hot semi-arid",
    airport: "Domestic (Katsina)",
    port: "Nil",
    sez: "Special Agro-Industrial Processing Zones (SAPZ) & Green Economic Zone (GEZ) Katsina",
    initiatives: [
      "Katsina Investment Promotion Agency (KIPA) serves as a one-stop shop investment center for businesses.",
      "Amended KIPA law to make provision for discharging the coordination of PPP unit in the state",
      "Established Katsina State Geographic Information Service (KATGIS) aimed at revolutionising land administration processes.",
      "Clear Plan to address climate change",
      "Executive order on inter-state haulage fee, process and procedure of property registration.",
      "Development of orchard plantation estates for large scale fruits production",
      "Kano – Maradi Railway under construction",
    ],
    advantages: [
      "Potential for value-added industries like ceramics, pharmaceuticals, glass manufacturing, paint production, and gemstone processing.",
      "Commercial deposits of kaolin, silica sand, feldspar, gold, marble, quartz, talc, and precious stones.",
      "2.4 million hectares of cultivable land, including 800,000 hectares currently available and over 61 water bodies for irrigation",
      "Largest producer of cotton and second largest producer of sorghum and sugarcane in Nigeria.",
      "International border with Niger Republic - International market corridor",
      "Ranks high in subnational ease of doing business.",
    ],
    description:
      'Katsina State, in northwestern Nigeria, thrives on agriculture—producing cotton, millet, and groundnuts—and is growing as a hub for small industries and livestock farming. Known as the "Home of Hospitality," it features historic sites like the Gobarau Minaret. With investments in education, infrastructure, and diversification, Katsina offers rising opportunities for investors.',
  },
  kwara: {
    name: "Kwara State",
    slug: "kwara",
    tagline: "State of harmony",
    numbers: [
      { label: "IGR Projection 2025", value: "$63.8 Million" },
      { label: "Budget 2025", value: "$342 Million" },
      { label: "Est. Population 2025", value: "3.9 Million" },
      { label: "Labour Force 2020", value: "1.3 Million" },
      { label: "Household Consumption 2019", value: "$1.9 Billion" },
      { label: "Land Area", value: "5,705 km²" },
    ],
    opportunities: [
      "Cassava processing",
      "Shea butter processing",
      "Yam flour processing",
      "Textile manufacturing",
      "Pottery production",
    ],
    climate: "Tropical Savanna",
    airport: "Domestic  & International (Ilorin)",
    port: "Sea-port",
    sez: `Special Agro-Industrial
Processing Zones (SAPZ) &
Agro-Allied /Medical Free Trade
Zone (FTZ)`,
    initiatives: [
      `Partnered with the National Export Promotion
Council (NEPC) to improve Nigerian products for
international export standards.`,
      `The state collaborates with Zenith Bank and
FCMB to provide zero and low-interest loans to
business owners.`,
    ],
    advantages: [
      `The state has rich farmland that supports its
agricultural business.`,
      "It shares a border with Benin Republic",
      `Availability of international airport and cargo
terminal.`,
      `Gold, mica, lithium and Quetzal Ore are key mineral
resources found across several LGAs.`,
      `Tourism attractions: Owu waterfalls which is one of
the highest in West Africa`,
    ],
    description:
      'Kwara State, situated in north-central Nigeria, is known as the "State of Harmony" for its peaceful coexistence among diverse ethnic groups. It is an emerging industrial and commercial hub, attracting investments in manufacturing and agribusiness. The government prioritizes infrastructure development, agro-industrialization, capacity building, and economic growth.',
  },
  nasarawa: {
    name: "Nasarawa State",
    slug: "nasarawa",
    tagline: "home of solid minerals",
    numbers: [
      { label: "IGR Projection 2025", value: "$35.4 Million" },
      { label: "Budget 2025", value: "$231 Million" },
      { label: "Est. Population 2025", value: "3.2 Million" },
      { label: "Labour Force 2020", value: "1.0 Million" },
      { label: "Household Consumption 2019", value: "$1.1 Billion" },
      { label: "Land Area", value: "3,671 km²" },
    ],
    opportunities: [
      "Sesame production",
      "Rice production",
      "Hydro power generation",
      "Mineral resources ( lithium, gold, baryte, etc )",
      "Oil and gas exploration",
    ],
    climate: "Tropical Savanna",
    airport: "Domestic (Lafia)",
    port: "Nil",
    sez: `Gudi Special Agro-Industrial
Processing Zone (SAPZ)`,
    initiatives: [
      `Three-year income tax relief for pioneer
industries.`,
      `Gas utilization incentive with a 35% investment
allowance for downstream operations.`,
      `Company income tax exemption for solid mineral
mining companies for the first three years.`,
      `Business registration simplification and
digitalisation of government services.`,
      "Tax harmonisation for unified revenue collection",
      "Access to credit facilities for investors and SMEs",
      `Effective PPP laws and policy manual for
transparent and efficient public-private
partnerships`,
    ],
    advantages: [
      "Fertile and arable land suitable for agriculture.",
      "Proximity to Abuja, Nigeria’s capital",
      `Well-connected interstate road networks and
borders with Benue, Plateau, Taraba, Kogi, and
Kaduna States.`,
      `The presence of research institutes like NIFOR,
SOMMEDI, and AMMEDI.`,
      "Cargo airport and access to international markets.",
      `Abundant natural resource deposits, including
minerals and oil.`,
    ],
    description: `Nasarawa State, in north-central Nigeria, is rich in minerals and a key player
in mining and agriculture. With growing trade, infrastructure, and industrial
development, it offers strong investment potential.`,
  },
  niger: {
    name: "Niger State",
    slug: "niger",
    tagline: "the Power state",
    numbers: [
      { label: "IGR Projection 2025", value: "$145.3 Million" },
      { label: "Budget 2025", value: "$1.0 Billion" },
      { label: "Est. Population 2025", value: "7.4 Million" },
      { label: "Labour Force 2020", value: "2.1 Million" },
      { label: "Household Consumption 2019", value: "$2.0 Billion" },
      { label: "Land Area", value: "76,609 km²" },
    ],
    opportunities: [
      "Agriculture / Agro-processing",
      "Rene w able Energy Generation",
      "Tourism and Hospitality",
      "Construction and Real Estate",
      "Mining and Mineral Resources",
    ],
    climate: "Tropical Savanna",
    airport: "Domestic and International (Minna)",
    port: "ongoing",
    sez: "Hydropolis Free Trade Zone",
    initiatives: [
      `Designated agricultural zones where investors
can lease land with established infrastructure and
support services to facilitate farming activities.`,
      `Established Niger State Investment Promotion
Agency (NSIPA) to provide a single point of
contact for investors`,
      `State government investment fund aimed at
supporting key sectors, particularly agriculture
and agro-processing.`,
      `Offers various tax incentives to attract
businesses and investors.`,
      `Subsidized rates on high-yield seeds and
fertilizers to boost crop productivity`,
      `Public-Private Partnerships (PPPs) in the
development of agricultural processing facilities
or renewable energy projects`,
    ],
    advantages: [
      "Special Agro-Industrial Processing Zones",
      `Significant mineral resources deposit, including
limestone, granite, gold, and other industrial
minerals`,
      `A gateway for trade with neighboring countries such
as Benin Republic.`,
      `Home to a variety of natural attractions, including
the Kainji National Park, waterfalls, and rich wildlife.`,
      `Interstate railway network and road transport
network`,
    ],
    description: `Niger State, in north-central Nigeria, is rich in solid minerals like limestone,
tin, and barite, offering strong opportunities in mining. Its economy is
driven by agriculture, trade, and growing industrialisation. Strategic
government investments in infrastructure and human capital make it a
rising destination for investors.`,
  },
  plateau: {
    name: "Plateau State",
    slug: "plateau",
    tagline: "Home of peace and tourism",
    numbers: [
      { label: "IGR Projection 2025", value: "$34.2 Million" },
      { label: "Budget 2025", value: "$372 Million" },
      { label: "Est. Population 2025", value: "5.1 Million" },
      { label: "Labour Force 2020", value: "1.8 Million" },
      { label: "Household Consumption 2019", value: "$2.2 Billion" },
      { label: "Land Area", value: "27,147 km²" },
    ],
    opportunities: [
      "Agribusiness",
      "Renewable energy generation",
      "Solid minerals ( mining and processing )",
      "Cultural Tourism & Hospitality",
      "Manufacturing & Light Industry",
    ],
    climate: "Tropical Savanna",
    airport: "Domestic (Jos)",
    port: "Nil",
    sez: "Nil",
    initiatives: [
      `Streamlined land acquisition and title registration
processes to ease property ownership for
investors`,
      `A comprehensive framework for ease of doing
business`,
      `Government initiatives to support agribusiness
through incentives like subsidies, credit facilities,
and provision of infrastructure (roads, water).`,
      `Tax breaks and subsidies for investors in the
tourism and hospitality sectors, including hotel
construction and eco-tourism.`,
      `A legal and regulatory framework requiring mining
operations to comply with environmental
standards, ensuring sustainable mining
practices.`,
    ],
    advantages: [
      `Rich in diverse mineral resources, including tin,
limestone, granite, and precious stones like
emeralds.`,
      `Fertile, arable land conducive to diverse agricultural
production.`,
      `Exceptional natural landscapes, including the Kura
Falls, a stunning waterfall located in the northern
part of the state`,
      `Shares borders with several key states, such as
Bauchi, Kaduna, and Nasarawa, giving it access to
markets across Nigeria and West Africa.`,
      `Quality road infrastructure, with notable roads like
the Jos-Abuja and Jos-Bauchi Road.`,
    ],
    description: `Plateau State is known for its cool climate, scenic landscapes, and rich
cultural heritage. The state is a major hub for agriculture and mining,
producing crops like potatoes, maize, and vegetables, as well as minerals
like tin and columbite. The government is focused on infrastructure
development and economic revitalisation to promote growth.`,
  },
  sokoto: {
    name: "Sokoto State",
    slug: "sokoto",
    tagline: "Seat of the caliphate",
    numbers: [
      { label: "IGR Projection 2025", value: "$70 Million" },
      { label: "Budget 2025", value: "$115 Million" },
      { label: "Est. Population 2025", value: "5.8 Million" },
      { label: "Labour Force 2020", value: "2.5 Million" },
      { label: "Household Consumption 2019", value: "$2.6 Billion" },
      { label: "Land Area", value: "25,973 km²" },
    ],
    opportunities: [
      "Rice Production / Processing",
      "Millet Production",
      "Beans and Vegetable Production",
      "Availability of Limestone",
      "Livestock Production",
    ],
    climate: "Tropical Savanna and hot semi-arid",
    airport: "Domestic and International(Sokoto)",
    port: "Nil",
    sez: "Nil",
    initiatives: [
      "Presence of Sokoto Investment Company",
      "Presence of Bureau for Public Procurement and Public Private Partnership",
      `Presence of a system of subsidy by State
Government i.e. Shagon Sauki na Amadun Alu`,
      "Improved security apparatus in the state",
      `Improved road network for easy access to
farmlands and farming activities`,
      `Provision of mechanised farming tools to farmers
by Government`,
    ],
    advantages: [
      "Availability of rich agricultural alluvial soil for farming",
      "Presence of Rima and Sokoto Rivers across the state",
      "Located by the border of Republic of the Niger and bounded by Zamfara and Kebbi State ",
      `Presence of reputable universities and research
institutes such as Usmanu Danfodiyo University,
Sokoto State University, Etc.`,
      "Seat of Islamic Learning in Nigeria",
      `Availability of quality infrastructure such as good
roads, housing and a functional airport`,
      "Presence of Sokoto/Bua Cement Company",
      "Large deposit of limestone",
      "Presence of a viable market",
      "Availability of solar and wind energy potential",
      "Sound financial system in the State",
    ],
    description: `Sokoto State, located in northwestern Nigeria, is a culturally significant
region with a strong agricultural base and rich mineral resources. Known for
its Islamic heritage and home to the Sultan of Sokoto, the state produces
crops like millet, rice, and onions, and is rich in limestone and phosphate.
With ongoing government investment in education, infrastructure, and
economic diversification, Sokoto offers promising opportunities for
investors.`,
  },
  taraba: {
    name: "Taraba State",
    slug: "taraba",
    tagline: "Nature gift to the nation",
    numbers: [
      { label: "IGR Projection 2025", value: "$32.8 Million" },
      { label: "Budget 2025", value: "$279 Million" },
      { label: "Est. Population 2025", value: "3.9 Million" },
      { label: "Labour Force 2020", value: "1.4 Million" },
      { label: "Household Consumption 2019", value: "$825 Million" },
      { label: "Land Area", value: "56,282 km²" },
    ],
    opportunities: [
      "Oil Palm",
      "Fishery",
      "Cotton",
      "Tourist Attractions",
      "Groundnut",
      "Rice",
    ],
    climate: "Tropical savanna and subtropical highland",
    airport: "Domestic (Jalingo)",
    port: "Nil",
    sez: `Nigeria Export Processing Zones
Authority (NEPZA ) & AfDB's Agro-
Industrial Processing Zones`,
    initiatives: [
      `Supports mechanised farming with land reforms
and free help for farmers.`,
      `Farmers can access microcredit, subsidised
inputs, and warehousing.`,
      `Agro-allied businesses get capital allowances,
land leasing, and pest control support.`,
      `Agricultural machines have a 1% duty, and loans
are guaranteed for farmers.`,
      `The mining sector gets tax holidays, security,
and loan guarantees.`,
    ],
    advantages: [
      "Largest tea farm in Nigeria",
      `Endowed with Mineral resources (zircon,
muscovite, galena, cassiterite)`,
      "Abundant arable land (4 million ha)",
      `Endowed with diverse and rich topography for
tourism`,
      `Tourism (Chappal Waddi (7,936f t), the highest
point in Nigeria)`,
      `Exotic and favorable weather from 15 °C to
39.4 °C`,
    ],
    description: `Taraba State offers strong investment potential through its rich
agriculture, tourism, and natural resources. With crops like tea, coffee,
and rice, alongside cattle rearing and the Mambilla Hydroelectric Power
Project, the state supports diverse economic activity. Ongoing
government efforts in infrastructure, tourism, and agricultural
development further enhance its growth prospects.`,
  },
  yobe: {
    name: "Yobe State",
    slug: "yobe",
    tagline: "pride of the sahel",
    numbers: [
      { label: "IGR Projection 2025", value: "$9.5 Million" },
      { label: "Budget 2025", value: "$207 Billion" },
      { label: "Est. Population 2025", value: "3.9 Million" },
      { label: "Labour Force 2020", value: "1.1 Million" },
      { label: "Household Consumption 2019", value: "$1.2 Billion" },
      { label: "Land Area", value: "46,609 km²" },
    ],
    opportunities: [
      "Livestock production",
      "Solid minerals",
      "Sesame seed production and processing",
      "Renewable energy",
      "Soybeans production and processing",
    ],
    climate: "Tropical Savanna and hot semi-arid",
    airport: "International (Damaturu)",
    port: "Nil",
    sez: "Nil",
    initiatives: [
      `Supports mechanised farming with land reforms
and free help for farmers.`,
      `Farmers can access microcredit, subsidised
inputs, and warehousing.`,
      `Agro-allied businesses get capital allowances,
land leasing, and pest control support.`,
      `Agricultural machines have a 1% duty, and loans
are guaranteed for farmers.`,
      `The mining sector gets tax holidays, security, and
loan guarantees.`,
    ],
    advantages: [
      `Land reforms support mechanised farming and
provide free extension services.`,
      `Microcredit and subsidised agricultural inputs are
available for farmers.`,
      `Subsidised land leasing and warehousing facilities
for agriculture.`,
      `1% duty on agricultural machinery and up to 75%
loan guarantees for agriculture.`,
      `Accelerated capital allowances and tax holidays for
mining sector investments`,
    ],
    description: `Yobe State offers investment opportunities in agriculture, mineral
resources, and commerce. Its hot, dry climate supports livestock farming
and drought-resistant crops like millet, sorghum, and groundnuts, while
abundant minerals such as gypsum and limestone fuel economic growth.
Government focus on security, infrastructure, and agricultural development
enhances the state's investment potential.`,
  },
  zamfara: {
    name: "Zamfara State",
    slug: "zamfara",
    tagline: "Farming is our pride",
    numbers: [
      { label: "IGR Projection 2025", value: "$21.5 Million" },
      { label: "Budget 2025", value: "$358 Million" },
      { label: "Est. Population 2025", value: "6.4 Million" },
      { label: "Labour Force 2020", value: "1.5 Million" },
      { label: "Household Consumption 2019", value: "$1.6 Billion" },
      { label: "Land Area", value: "37,931 km²" },
    ],
    opportunities: [
      "Mineral resources such as Gold, Lithium",
      "Agriculture ( cassava, soya )",
      "Livestock farming",
      "Cotton",
      "Hides and skins",
    ],
    climate: "Tropical Savanna and hot semi-arid",
    airport: "ongoing",
    port: "Nil",
    sez: "Special Agro-Industrial Processing Zones (SAPZs)",
    initiatives: ["Tax breaks", "Land reforms", "One-stop shop for investment"],
    advantages: [
      "Large depositors of a variety of solid minerals",
      "Fertile land and skilled Labor",
      "Availability of livestock and major trade route for livestock",
    ],
    description: `Zamfara State, in northwestern Nigeria, is rich in gold and other solid
minerals, making it a key hub for mining. Agriculture also plays a vital role,
with crops like millet, sorghum, and maize, alongside livestock farming.
The government focuses on peacebuilding, mineral exploration,
agriculture, and infrastructure development to drive economic growth.`,
  },
};

export interface Property {
  id: string;
  slug: string;
  projectName: string;
  developer: string;
  microMarket: string;
  sector: string;
  location: string;
  configuration: string;
  price: string;
  size: string;
  status: string;
  projectType: string;
  heroImage: string;
  gallery: string[];
  amenities: string[];
  usp: string[];
  overview: { key: string; value: string }[];
  seoTitle: string;
  seoDescription: string;
  featured: boolean;
  newLaunch: boolean;
}

export const properties: Property[] = [
  {
    id: "godrej-samaris",
    slug: "godrej-samaris-sector-53",
    projectName: "Godrej Samaris",
    developer: "Godrej Properties",
    microMarket: "golf-course-road",
    sector: "Sector 53",
    location: "Sector 53, Golf Course Road, Gurugram",
    configuration: "3 & 4 BHK",
    price: "₹10 Cr Onwards",
    size: "2,985 - 3,750 sq.ft.",
    status: "New Launch",
    projectType: "Luxury Apartments",
    heroImage: "/projects/godrej-samaris-hero.jpg",
    gallery: [
      "/projects/godrej-samaris-1.jpg",
      "/projects/godrej-samaris-2.jpg",
      "/projects/godrej-samaris-3.jpg"
    ],
    amenities: [
      "70,000 sq.ft. Clubhouse",
      "4.5 Acres of Open Land",
      "1 Acre Forest Trail with Lush Greenery",
      "Controlled Surveillance & Visitor Management"
    ],
    usp: [
      "Construction Partner - Tata",
      "Principal Architect - Gensler (USA) and Arcop (India)",
      "Landscape Architect - Cooper Hills",
      "Low Density Project with Ample Open Space",
      "Expansive Floor Plans with Wraparound Balconies"
    ],
    overview: [
      { key: "Towers", value: "5 High-Rise Towers (G+36 Storeys)" },
      { key: "Total Area", value: "7.5 Acres" },
      { key: "Apartments", value: "288 Units (4 Flats per Floor)" }
    ],
    seoTitle: "Godrej Samaris | Ultra Luxury Apartments in Sector 53, Golf Course Road",
    seoDescription: "Godrej Samaris is an ultra-luxury residential project in Sector 53, Golf Course Road, Gurugram. Featuring 3 & 4 BHK apartments, 70,000 sq.ft. clubhouse, and a 1-acre forest trail.",
    featured: true,
    newLaunch: true
  },
  {
    id: "tulip-monsella",
    slug: "tulip-monsella-sector-53",
    projectName: "Tulip Monsella",
    developer: "Tulip Infratech",
    microMarket: "golf-course-road",
    sector: "Sector 53",
    location: "Sector 53, Golf Course Road, Gurugram",
    configuration: "3, 4 & 5 BHK",
    price: "₹11.49 Cr Onwards",
    size: "2,299 - 4,503 sq.ft.",
    status: "New Launch",
    projectType: "Ultra Luxury Apartments",
    heroImage: "/projects/tulip-monsella-hero.jpg",
    gallery: [
      "/projects/tulip-monsella-1.jpg",
      "/projects/tulip-monsella-2.jpg",
      "/projects/tulip-monsella-3.jpg"
    ],
    amenities: [
      "4 Clubhouses (90,000 sq.ft. combined)",
      "3.5 Acres Internal Greenery",
      "Italian Marble & Premium Wooden Flooring",
      "Connected Club Area on Roof"
    ],
    usp: [
      "One of the Tallest Towers on Golf Course Road",
      "Zero Vehicle Movement on the Ground Level",
      "Built on a 20-Acre Land Parcel with 5-Tier Security"
    ],
    overview: [
      { key: "Towers", value: "10 Towers (G+40 Floors Elevation)" },
      { key: "Total Area", value: "20 Acres" },
      { key: "Total Units", value: "1,383 Units" },
      { key: "Parking", value: "3 Level Basement Parking" }
    ],
    seoTitle: "Tulip Monsella | Premium 3, 4 & 5 BHK on Golf Course Road",
    seoDescription: "Discover Tulip Monsella in Sector 53, Gurugram. Offering one of the tallest towers on Golf Course Road, zero ground vehicle movement, and luxurious 3, 4 & 5 BHK residences.",
    featured: true,
    newLaunch: true
  },
  {
    id: "trevoc-royal-residencies",
    slug: "trevoc-royal-residencies-sector-56",
    projectName: "Trevoc Royal Residencies",
    developer: "Trevoc Group",
    microMarket: "golf-course-road",
    sector: "Sector 56",
    location: "Sector 56, Golf Course Road, Gurugram",
    configuration: "3 & 4 BHK",
    price: "Price on Request",
    size: "2,642 - 3,380 sq.ft.",
    status: "New Launch",
    projectType: "Luxury Apartments",
    heroImage: "/projects/trevoc-royal-hero.jpg",
    gallery: [
      "/projects/trevoc-royal-1.jpg",
      "/projects/trevoc-royal-2.jpg",
      "/projects/trevoc-royal-3.jpg"
    ],
    amenities: [
      "36,000 sq.ft. Rooftop Skydeck",
      "86,000 sq.ft. Luxury Clubhouse",
      "1,00,000 sq.ft. Green Area",
      "Elevated 3-Level Parking & 2-Level Basement Parking"
    ],
    usp: [
      "Largest Skydeck on Golf Course Road",
      "First Floor Located at 80ft Surpassing Obstacles",
      "Construction Partner - Morphogenesis & Rama Civil",
      "Interior Partner - Habitat"
    ],
    overview: [
      { key: "Towers", value: "2 Twin Towers (Connected by Skydeck)" },
      { key: "Total Area", value: "2.06 Acres" },
      { key: "Total Units", value: "172 Units (G+28 Floors)" }
    ],
    seoTitle: "Trevoc Royal Residencies | Sector 56, Golf Course Road",
    seoDescription: "Trevoc Royal Residencies on Golf Course Road offers premium 3 & 4 BHK apartments with the largest skydeck on GCR, massive green spaces, and a luxurious 86,000 sq.ft. clubhouse.",
    featured: true,
    newLaunch: true
  },
  {
    id: "godrej-miraya",
    slug: "godrej-miraya-sector-43",
    projectName: "Godrej Miraya",
    developer: "Godrej Properties",
    microMarket: "golf-course-road",
    sector: "Sector 43",
    location: "Sector 43, Golf Course Road, Gurugram",
    configuration: "4 BHK",
    price: "₹15.13 Cr Onwards",
    size: "3,829 - 4,566 sq.ft.",
    status: "New Launch",
    projectType: "Ultra Luxury Apartments",
    heroImage: "/projects/godrej-miraya-hero.jpg",
    gallery: [
      "/projects/godrej-miraya-1.jpg",
      "/projects/godrej-miraya-2.jpg"
    ],
    amenities: [
      "36,000 sq.ft. Ultra Luxury Clubhouse",
      "78% Open Space with Landscaped Greens",
      "248 Charging Stations (1 Per Apartment)",
      "Triple Heighted Lobbies"
    ],
    usp: [
      "IGBC Platinum Certified",
      "Early Possession on Golf Course Road",
      "Open Area within the Project with Luxury Amenities",
      "2 Entrances with 12m and 19m Roads"
    ],
    overview: [
      { key: "Towers", value: "3 Towers (G+32 Floors Elevation)" },
      { key: "Total Area", value: "5.16 Acres" },
      { key: "Total Units", value: "248 Residential Units" },
      { key: "Status", value: "3BHK Sold Out, 4BHK Available" }
    ],
    seoTitle: "Godrej Miraya | Ultra Luxury 4 BHK in Sector 43, Gurugram",
    seoDescription: "Godrej Miraya offers exclusive IGBC Platinum certified luxury living on Golf Course Road. Discover 4 BHK units with expansive open spaces and premium clubhouse facilities.",
    featured: false,
    newLaunch: true
  },
  {
    id: "mnb-ananta-vilasa",
    slug: "mnb-ananta-vilasa-sector-56",
    projectName: "Ananta Vilasa",
    developer: "MNB (Mohit Minerals Limited)",
    microMarket: "golf-course-road",
    sector: "Sector 56",
    location: "Sector 56, Golf Course Road, Gurugram",
    configuration: "4.5 BHK",
    price: "₹6.8 Cr Onwards",
    size: "3,400 - 3,550 sq.ft.",
    status: "New Launch",
    projectType: "Boutique Residency",
    heroImage: "/projects/ananta-vilasa-hero.jpg",
    gallery: [
      "/projects/ananta-vilasa-1.jpg",
      "/projects/ananta-vilasa-2.jpg"
    ],
    amenities: [
      "20,000 sq.ft. Ground Clubhouse",
      "10,000 sq.ft. Rooftop Clubhouse",
      "Triple Heighted Lobby",
      "4.5 Acre HUDA Park (50% Maintained by MNB)",
      "High Tech Home Automation"
    ],
    usp: [
      "Ultra Luxury Project Designed by Raza Kabul",
      "Boutique Focused Model of Apartment",
      "6ft Wide Deck Balcony with Stunning Views",
      "Cubicle Washrooms & Generous Living Spaces"
    ],
    overview: [
      { key: "Towers", value: "Single Tower (G+15 Floors)" },
      { key: "Total Area", value: "0.85 Acre" },
      { key: "Total Units", value: "74 Exclusive Units" }
    ],
    seoTitle: "Ananta Vilasa by MNB | Boutique 4.5 BHK in Sector 56",
    seoDescription: "Experience boutique luxury living at Ananta Vilasa by MNB. Located in Sector 56, Golf Course Road, offering 4.5 BHK residences designed by Raza Kabul.",
    featured: false,
    newLaunch: true
  },
  {
    id: "ananta-vilasa-2",
    slug: "ananta-vilasa-2-sector-28",
    projectName: "Ananta Vilasa 2.0",
    developer: "MNB",
    microMarket: "golf-course-road",
    sector: "Sector 28",
    location: "Sector 28, Golf Course Road, Gurugram",
    configuration: "4.5 BHK",
    price: "₹9.1 Cr Onwards",
    size: "3,500 - 3,650 sq.ft.",
    status: "New Launch",
    projectType: "Boutique High-Rise",
    heroImage: "/projects/ananta-vilasa-2-hero.jpg",
    gallery: [
      "/projects/ananta-vilasa-2-1.jpg",
      "/projects/ananta-vilasa-2-2.jpg"
    ],
    amenities: [
      "Exclusive Clubhouse",
      "Spacious Layouts with Elevated Ceiling Heights",
      "Semi-Furnished Residences"
    ],
    usp: [
      "Boutique High-Rise Residential Development",
      "Prime Sector 28, Golf Course Road Location",
      "Contemporary Architecture for Modern Lifestyles",
      "Wraparound Balcony"
    ],
    overview: [
      { key: "Towers", value: "Stilt + 22 Floors" },
      { key: "Total Area", value: "0.65 Acre" },
      { key: "Total Units", value: "60 Exclusive Units" }
    ],
    seoTitle: "Ananta Vilasa 2.0 | Sector 28, Golf Course Road",
    seoDescription: "Ananta Vilasa 2.0 in Sector 28 presents a boutique high-rise development featuring exclusive 4.5 BHK semi-furnished residences with wraparound balconies.",
    featured: false,
    newLaunch: true
  },
  {
    id: "bptp-downtown-66",
    slug: "bptp-downtown-66-sector-66",
    projectName: "BPTP Downtown 66",
    developer: "BPTP",
    microMarket: "golf-course-extension-road",
    sector: "Sector 66",
    location: "Sector 66, Golf Course Extension Road, Gurugram",
    configuration: "3 & 4 BHK",
    price: "₹5.1 Cr Onwards",
    size: "2,550 - 2,900 sq.ft.",
    status: "New Launch",
    projectType: "Ultra Luxury Apartments",
    heroImage: "/projects/bptp-downtown-hero.jpg",
    gallery: [
      "/projects/bptp-downtown-1.jpg",
      "/projects/bptp-downtown-2.jpg",
      "/projects/bptp-downtown-3.jpg"
    ],
    amenities: [
      "1.35 Lakh sq.ft. 5-Star Luxury Clubhouse",
      "2 Swimming Pools (Indoor Temp Controlled & Outdoor)",
      "Lush Green Walk Passages & Front Water Body",
      "Basement 3-Level Parking"
    ],
    usp: [
      "Glass Facade Structure & IGBC Platinum Certified",
      "Wrap Around Balcony (33ft x 8ft) with Immaculate View",
      "Premium Lobby with Outside Servant Access",
      "Attractive Payment Plans (1 Cr within a year)"
    ],
    overview: [
      { key: "Towers", value: "3 Towers (42 Floors Elevation)" },
      { key: "Total Area", value: "4.5 Acres" },
      { key: "Location", value: "Adjacent to AIPL Joy Street Mall" }
    ],
    seoTitle: "BPTP Downtown 66 | Luxury Apartments on Golf Course Ext. Road",
    seoDescription: "BPTP Downtown 66 in Sector 66 offers ultra-luxury IGBC Platinum certified apartments with glass facades and a 1.35 lakh sq.ft. clubhouse on Golf Course Extension Road.",
    featured: true,
    newLaunch: true
  },
  {
    id: "shobha-crescent",
    slug: "shobha-crescent-sector-63a",
    projectName: "Shobha Crescent",
    developer: "Sobha Developers",
    microMarket: "golf-course-extension-road",
    sector: "Sector 63A",
    location: "Sector 63A, Golf Course Extension Road, Gurugram",
    configuration: "3, 4 & 4+Study BHK",
    price: "₹5.4 Cr Onwards",
    size: "2,277 - 2,966 sq.ft.",
    status: "New Launch",
    projectType: "Luxury Apartments",
    heroImage: "/projects/shobha-crescent-hero.jpg",
    gallery: [
      "/projects/shobha-crescent-1.jpg",
      "/projects/shobha-crescent-2.jpg",
      "/projects/shobha-crescent-3.jpg"
    ],
    amenities: [
      "Grand Clubhouse",
      "87% Open Space",
      "7 High-Speed Lifts per Elevator",
      "3 Level Basement Parking"
    ],
    usp: [
      "High Quality In-House Construction",
      "IGBC Gold Certified",
      "Bangalore Based Developer with Timely Delivery Legacy",
      "Only 5% Outsourcing for Materials"
    ],
    overview: [
      { key: "Towers", value: "4 Towers (42 Floors Elevation)" },
      { key: "Total Area", value: "12 Acres" },
      { key: "Total Units", value: "600-650 Units (336 in 2 Towers)" }
    ],
    seoTitle: "Shobha Crescent | Sector 63A, Golf Course Extension Road",
    seoDescription: "Shobha Crescent brings Sobha's legacy of high-quality construction to Sector 63A, featuring 3 & 4 BHK luxury residences with 87% open space and IGBC Gold certification.",
    featured: true,
    newLaunch: true
  },
  {
    id: "ireo-corridor",
    slug: "ireo-corridor-sector-67",
    projectName: "Ireo Corridor",
    developer: "Ireo",
    microMarket: "golf-course-extension-road",
    sector: "Sector 67",
    location: "Sector 67, Golf Course Extension Road, Gurugram",
    configuration: "2, 2.5, 3 & 3+Servant BHK",
    price: "₹2.59 Cr Onwards",
    size: "1,296 - 1,893 sq.ft.",
    status: "Ready to Move / New Launch",
    projectType: "Premium Apartments",
    heroImage: "/projects/ireo-corridor-hero.jpg",
    gallery: [
      "/projects/ireo-corridor-1.jpg",
      "/projects/ireo-corridor-2.jpg",
      "/projects/ireo-corridor-3.jpg"
    ],
    amenities: [
      "2 Acres of Clubhouse",
      "60% Green Area",
      "100% Power Backup",
      "2 Level Parking"
    ],
    usp: [
{ key: "Status", value: "3BHK Sold Out, 4BHK Available" }
    ],
    seoTitle: "Godrej Miraya | Ultra Luxury 4 BHK in Sector 43, Gurugram",
    seoDescription: "Godrej Miraya offers exclusive IGBC Platinum certified luxury living on Golf Course Road. Discover 4 BHK units with expansive open spaces and premium clubhouse facilities.",
    featured: false,
    newLaunch: true
  },

{
  id: "belaperla-sector-48",
  slug: "belaperla-sector-48",
  projectName: "BELAPERLA",
  developer: "Central Park",
  microMarket: "southern-peripheral-road",
  sector: "Sector 48",
  location: "Sector 48, Gurgaon",
  configuration: "Various Configurations",
  price: "₹2.3 Cr – ₹4.5 Cr",
  size: "Various sizes available",
  status: "New Launch",
  projectType: "Luxury Apartments",
  heroImage: "https://belaperla.centralpark.in/images/banner/banner-1.webp",
  gallery: [
    "https://belaperla.centralpark.in/images/banner/banner-1.webp",
    "https://belaperla.centralpark.in/images/project-overview.webp",
    "https://belaperla.centralpark.in/images/gallery/5.webp",
    "https://belaperla.centralpark.in/images/gallery/2.webp"
  ],
  amenities: [
    "Lease Guarantee Scheme (Initial Units Only)",
    "Bespoke Managed Services by Central Park",
    "Premium Deluxe Club Access",
    "24/7 Multi-tier Concierge and Security",
    "Exclusive Rooftop Pool and Lounge"
  ],
  usp: [
    "Studio at ₹38,000/sq.ft. and 1 BHK at ₹40,000/sq.ft.",
    "Lease Guarantee of ₹180/- per sq.ft. monthly during tenure",
    "Central Park managed asset preservation during lease scheme",
    "Deluxe configurations across Ground Floor, UG-1, and UG-2"
  ],
  overview: [
    {
      key: "Configurations",
      value: "Studio & 1 BHK (Deluxe GF, UG-1 & UG-2)"
    },
    {
      key: "Pricing Structure",
      value: "₹38,000 to ₹40,000 / Sq.Ft."
    },
    {
      key: "Lease Guarantee",
      value: "₹180 / Sq.Ft. per Month"
    },
    {
      key: "Booking Amount",
      value: "₹21 Lacs"
    }
  ],
  seoTitle: "BELAPERLA | Premium Residences in Sector 48",
  seoDescription: "BELAPERLA by Central Park is an ultra-premium residential development in Sector 48, Gurgaon. This project introduces luxury Studio and 1 BHK layouts under an ex...",
  featured: false,
  newLaunch: true,
  brochure: ""
},
{
  id: "the-marq-sector-102a",
  slug: "the-marq-sector-102a",
  projectName: "THE MÅRQ",
  developer: "Adani Realty & M2K",
  microMarket: "dwarka-expressway",
  sector: "Sector 102A",
  location: "Sector 102A, Dwarka Expressway, Gurugram",
  configuration: "Various Configurations",
  price: "₹3.75 Cr – ₹5.60 Cr",
  size: "Various sizes available",
  status: "New Launch",
  projectType: "Luxury Apartments",
  heroImage: "https://www.adanirealty.com/-/media/project/realty/residential/gurugram/the-marq/adani-sec-102a-semi-aerial-night-cam.ashx",
  gallery: [
    "https://www.adanirealty.com/-/media/project/realty/residential/gurugram/the-marq/adani-sec-102a-semi-aerial-night-cam.ashx",
    "https://www.adanirealty.com/-/media/project/realty/residential/gurugram/the-marq/adani-sec-102a-kids-cam.ashx",
    "https://www.adanirealty.com/-/media/project/realty/residential/gurugram/the-marq/adani-sec-102a-club-front-cam-new.ashx",
    "https://www.adanirealty.com/-/media/project/realty/residential/gurugram/the-marq/adani-sec-102a-pool-cam.ashx",
    "https://www.adanirealty.com/-/media/project/realty/residential/gurugram/the-marq/adani-sec-102a-expressway-cam-copy.ashx"
  ],
  amenities: [
    "35,000 Sq.Ft. Luxury Clubhouse (The M Club)",
    "Elder's Retreat & Social Oasis",
    "Infinity Pool & Temperature-controlled Indoor Pool",
    "Serenity Greens & Landscape Trails",
    "Reflexology Pathway & Yoga/Meditation Zone",
    "Fitness Studio, Spa & Steam Room"
  ],
  usp: [
    "Low-density development with G+46 premium towers",
    "All apartments are corner units optimizing natural light and ventilation",
    "3-level basement parking ensuring a vehicular-free ground surface",
    "Premium interior specs: VRV air conditioning and modular kitchen"
  ],
  overview: [
    {
      key: "Configurations",
      value: "3 BHK (~2,375 Sq.Ft.) & 4 BHK (~3,295 Sq.Ft.)"
    },
    {
      key: "Towers Scale",
      value: "2 Iconic G+46 Towers"
    },
    {
      key: "Clubhouse Size",
      value: "35,000 Sq.Ft. (The M Club)"
    },
    {
      key: "RERA Registration",
      value: "RC/REP/HARERA/GGM/1042/774/2026/14"
    }
  ],
  seoTitle: "THE MÅRQ | Premium Residences in Sector 102A",
  seoDescription: "THE MÅRQ by Adani Realty & M2K is an ultra-premium, wellness-themed residential community located in Sector 102A along Gurgaon's prime Dwarka Expressway. Desig...",
  featured: false,
  newLaunch: true,
  brochure: ""
},
{
  id: "avik-2-residences",
  slug: "avik-2-residences",
  projectName: "Birla Navya Avik Phase 2",
  developer: "Birla Estates",
  microMarket: "golf-course-extension-road",
  sector: "Sector 63A",
  location: "Sector 63A, Gurugram",
  configuration: "Various Configurations",
  price: "Price on Request",
  size: "Various sizes available",
  status: "New Launch",
  projectType: "Luxury Apartments",
  heroImage: "/avik-1.jpeg",
  gallery: [
    "/avik-1.jpeg",
    "/avik-2.jpeg",
    "/avik-3.jpeg",
    "/avik-4.jpeg",
    "/avik-5.jpeg"
  ],
  amenities: [
    "Mini Soccer Field & Cricket Enclosure",
    "Amphitheatre & Movie Screening Wall",
    "Forest Zone, Palm Court & Lily Pond",
    "Skating Rink & Pet Park",
    "Yoga Zone & Fitness Station"
  ],
  usp: [
    "Grand entrance lobby with access control for maximum security",
    "Basements with sunken courts for natural light and ventilation",
    "Exclusive terrace design with elegant wooden-finish tiles",
    "Rainwater harvesting, RO wastewater reuse, and A/C water utilization"
  ],
  overview: [
    {
      key: "Status",
      value: "New Launch Arrival"
    },
    {
      key: "Community Type",
      value: "Premium Gated Enclave"
    },
    {
      key: "Payment Plan",
      value: "25 : 25 : 50"
    },
    {
      key: "RERA Registration",
      value: "RC/REP/HARERA/GGM/909/641/2025/12"
    }
  ],
  seoTitle: "Birla Navya Avik Phase 2 | Premium Residences in Sector 63A",
  seoDescription: "Birla Navya Avik Phase 2 is an exclusive 'LifeDesigned' gated community in Sector 63A, Gurugram. It offers a secure, multi-tier lifestyle with Grand Entrance Lo...",
  featured: false,
  newLaunch: true,
  brochure: "/Avik-2-Presenter.pdf"
},
{
  id: "trehan-luxury-floors-70a",
  slug: "trehan-luxury-floors-70a",
  projectName: "Trehan Luxury Floors",
  developer: "Trehan Group",
  microMarket: "southern-peripheral-road",
  sector: "Sector 70A",
  location: "Sector 70A, Gurugram",
  configuration: "Various Configurations",
  price: "₹3.75 Cr – ₹4.10 Cr",
  size: "Various sizes available",
  status: "New Launch",
  projectType: "Luxury Apartments",
  heroImage: "/trehan-1.jpeg",
  gallery: [
    "/trehan-1.jpeg",
    "/trehan-2.jpeg",
    "/trehan-3.jpeg",
    "/trehan-4.jpeg",
    "/trehan-5.jpeg"
  ],
  amenities: [
    "Smart Home Automation Systems",
    "Exclusive Terrace & Basement Rights",
    "Dedicated Private Elevators",
    "Gated Community with 24/7 Security",
    "Premium Clubhouse Access"
  ],
  usp: [
    "Low-density living ensuring absolute privacy and space",
    "Vastu-compliant layouts with optimal natural ventilation",
    "High-end modular kitchens and luxury bath fittings",
    "Strategic connectivity to SPR and Golf Course Extension Road"
  ],
  overview: [
    {
      key: "Status",
      value: "New Launch Arrival"
    },
    {
      key: "Folio Type",
      value: "Luxury Independent Floors"
    },
    {
      key: "Location Highlight",
      value: "Prime Sector 70A"
    },
    {
      key: "Brochure",
      value: "Available (See below)"
    }
  ],
  seoTitle: "Trehan Luxury Floors | Premium Residences in Sector 70A",
  seoDescription: "Trehan Luxury Floors in Sector 70A introduces a highly exclusive, low-density living experience. These premium independent floors combine privacy with grand arc...",
  featured: false,
  newLaunch: true,
  brochure: "/trehan-brochure.pdf"
},
{
  id: "max-estate-361-gurugram",
  slug: "max-estate-361-gurugram",
  projectName: "Estate 361",
  developer: "Max Estates",
  microMarket: "new-gurgaon",
  sector: "Sector 36A",
  location: "Sector 36A, Gurugram",
  configuration: "Various Configurations",
  price: "Price on Request",
  size: "Various sizes available",
  status: "New Launch",
  projectType: "Luxury Apartments",
  heroImage: "/max-1.png",
  gallery: [
    "/max-1.png",
    "/max-2.png",
    "/max-3.png",
    "/max-4.png",
    "/max-5.jpeg"
  ],
  amenities: [
    "Integrated Wellness Clinic & Paramedics",
    "VRF-based precise Air Conditioning",
    "Built-in UV Water Purification System",
    "In-house Housekeeping & Concierge",
    "Early Learning Centre & Pet Care"
  ],
  usp: [
    "Antara Senior Living collaboration for dedicated senior wellness spaces",
    "Low-VOC materials to transform your home into a sanctuary",
    "High-performance glass windows optimizing natural light while filtering heat",
    "Centralized water heating system and designer low-flow fixtures"
  ],
  overview: [
    {
      key: "Status",
      value: "New Launch Arrival"
    },
    {
      key: "Sustainability",
      value: "IGBC Platinum Pre-certified"
    },
    {
      key: "Principal Architect",
      value: "Gensler, London (UK)"
    },
    {
      key: "RERA Registration",
      value: "RC/REP/HARERA/GGM/1012/744/2025/115"
    }
  ],
  seoTitle: "Estate 361 | Premium Residences in Sector 36A",
  seoDescription: "Estate 361 by Max Estates introduces the LiveWell & WorkWell philosophy to Sector 36A, Gurugram. Designed by globally renowned Gensler (UK), this IGBC Platinum ...",
  featured: false,
  newLaunch: true,
  brochure: "/sl-estate-361-brochure.pdf"
},
{
  id: "serenity-hills-phase-1-gurugram",
  slug: "serenity-hills-phase-1-gurugram",
  projectName: "Serenity Hills Phase 1",
  developer: "Serenity",
  microMarket: "new-gurgaon",
  sector: "Sector 86",
  location: "Sector 86, Gurugram",
  configuration: "Various Configurations",
  price: "Price on Request",
  size: "Various sizes available",
  status: "New Launch",
  projectType: "Luxury Apartments",
  heroImage: "/serenity-1.png",
  gallery: [
    "/serenity-1.png",
    "/serenity-2.jpg",
    "/serenity-3.jpg",
    "/serenity-4.jpg",
    "/serenity-5.jpg"
  ],
  amenities: [
    "~1 Lakh Sq. Ft. of World-Class Amenities",
    "Breathtaking Waterfront Promenade",
    "8 Acres of Dedicated Central Greens",
    "Over 20+ Acres of Landscaped Open Space",
    "Ultra-low 15% Ground Coverage"
  ],
  usp: [
    "Over 80% of homes overlook central greens or are corner units",
    "More than 90% of homes feature full-height corner windows for natural light",
    "Stretched continuous balconies connecting multiple rooms",
    "Energy-efficient and water-saving architecture"
  ],
  overview: [
    {
      key: "Status",
      value: "New Launch Arrival"
    },
    {
      key: "Sustainability",
      value: "IGBC Platinum Pre-certified"
    },
    {
      key: "Payment Plan",
      value: "EasyPay 30:40:30"
    },
    {
      key: "RERA Registration",
      value: "RC/REP/HARERA/GGM/993/725/2025/96"
    }
  ],
  seoTitle: "Serenity Hills Phase 1 | Premium Residences in Sector 86",
  seoDescription: "Serenity Hills Phase 1 in Sector 86, Gurugram, introduces 'A Greener Evolution'. This highly exclusive residential enclave boasts 8 acres of central greens and ...",
  featured: false,
  newLaunch: true,
  brochure: "/serenity-brochure.pptx"
},
{
  id: "the-trillion-gurugram",
  slug: "the-trillion-gurugram",
  projectName: "The Trillion",
  developer: "Experion",
  microMarket: "southern-peripheral-road",
  sector: "Sector 48",
  location: "Sector 48, Gurugram",
  configuration: "Various Configurations",
  price: "₹5.96 Cr – ₹8.08 Cr",
  size: "Various sizes available",
  status: "New Launch",
  projectType: "Luxury Apartments",
  heroImage: "/trillion-1.jpeg",
  gallery: [
    "/trillion-1.jpeg",
    "/trillion-2.jpeg",
    "/trillion-3.jpeg",
    "/trillion-4.jpeg",
    "/trillion-5.jpeg"
  ],
  amenities: [
    "Signature High-Rise Architecture",
    "Expansive Clubhouse & Lifestyle Amenities",
    "Advanced Multi-Tier Security",
    "Premium Finishes & Imported Marble",
    "Vastu-Compliant Layouts"
  ],
  usp: [
    "Developed by Experion, a 100% FDI funded real estate developer (Singapore Group)",
    "Three iconic high-rise towers offering breathtaking panoramic views",
    "Unmatched connectivity via Sohna Road and NH-8",
    "Exclusive low-density living in a highly sought-after micro-market"
  ],
  overview: [
    {
      key: "Status",
      value: "New Launch Arrival"
    },
    {
      key: "Folio Type",
      value: "3 & 4 BHK Luxury Homes"
    },
    {
      key: "Developer Profile",
      value: "FDI Real Estate Developer"
    },
    {
      key: "RERA Registration",
      value: "RC/REP/HARERA/GGM/911/643/2025/14"
    }
  ],
  seoTitle: "The Trillion | Premium Residences in Sector 48",
  seoDescription: "The Trillion by Experion offers a signature collection of 3 & 4 BHK Luxury Homes in the prime locale of Sector 48, Gurugram. Backed by an FDI Real Estate Develo...",
  featured: false,
  newLaunch: true,
  brochure: "/trillion-full-brochure.pdf"
},
{
  id: "prime-residences-golf-course-extension",
  slug: "prime-residences-golf-course-extension",
  projectName: "Prime Residences",
  developer: "Prime Developments",
  microMarket: "golf-course-extension-road",
  sector: "Sector 64",
  location: "Sector 64, Golf Course Extension Road, Gurugram",
  configuration: "3 & 4 BHK Luxury Apartments",
  price: "Price on Request",
  size: "2,500 - 3,500 sq.ft.",
  status: "New Launch",
  projectType: "Ultra Luxury Apartments",
  heroImage: "/projects/prime-residences-page-7.png",
  gallery: [
    "/projects/prime-residences-page-8.png",
    "/projects/prime-residences-page-9.png",
    "/projects/prime-residences-page-6.png",
    "/projects/prime-residences-hero.png"
  ],
  amenities: [
    "Exclusive Luxury Theatre (25 Seater)",
    "VR Gaming Room & Ballroom",
    "Spa and Salon",
    "Yoga / Dance / Music Room",
    "100% Electricity Backup"
  ],
  usp: [
    "Customized VRV air conditioning with PM 2.5 air filter",
    "UPVC/aluminium powder-coated windows",
    "Country Side Properties Pvt Ltd Development",
    "Premium location in Sector 64"
  ],
  overview: [
    {
      key: "Status",
      value: "New Launch"
    },
    {
      key: "Property Type",
      value: "Ultra Luxury Residences"
    },
    {
      key: "RERA Registration",
      value: "RC/REP/HARERA/GGM/900/632/2025/03"
    }
  ],
  seoTitle: "Prime Residences | Luxury Apartments in Sector 64, Gurugram",
  seoDescription: "Prime Residences offers an exclusive collection of luxury apartments located in Sector 64. Enjoy customized VRV air conditioning, exclusive theatre, and more.",
  featured: true,
  newLaunch: true
},
{
  id: "conscient-elaira",
  slug: "conscient-elaira-sector-80",
  projectName: "Conscient Elaira Residences",
  developer: "Conscient Infrastructure",
  microMarket: "southern-peripheral-road",
  sector: "Sector 80",
  location: "Sector 80, Gurugram",
  configuration: "3 BHK, 3 BHK + Utility, 3 BHK + Servant Room",
  price: "Price on Request",
  size: "1,125 - 1,491 sq.ft. (Carpet Area)",
  status: "New Launch",
  projectType: "Luxury Apartments",
  heroImage: "/elaira/page_3.jpg",
  gallery: [
    "/elaira/page_3.jpg",
    "/elaira/page_4.jpg",
    "/elaira/page_5.jpg",
    "/elaira/page_6.jpg",
    "/elaira/page_8.jpg"
  ],
  amenities: [
    "66,000 sq.ft. Clubhouse, Podium & Pool",
    "28,000 sq.ft. Landscape Amenities",
    "Padel Ball Court & Banquet Lawn",
    "Miniplex, Library & Business Lounge",
    "VRF units for Air Conditioning"
  ],
  usp: [
    "Proximity to Aravalli hills and Leopard Trail",
    "Located near a 27 Hole Jack Nicklaus signature golf course",
    "Superior AQI & Lush Greenery",
    "High Speed Lifts (2.5m/s)"
  ],
  overview: [
    {
      key: "Status",
      value: "New Launch"
    },
    {
      key: "Location",
      value: "Sector 80, Gurugram"
    },
    {
      key: "RERA Registration",
      value: "RC/REP/HARERA/GGM/917/649/2025/20"
    }
  ],
  seoTitle: "Conscient Elaira Residences | Luxury Apartments in Sector 80",
  seoDescription: "Discover Conscient Elaira Residences in Sector 80, Gurugram. Ultra-luxury 3 BHK apartments with 66,000 sq.ft. clubhouse and proximity to Aravalli hills.",
  featured: false,
  newLaunch: true,
  brochure: "/elaira/elaira_brochure.pdf"
},
{
  id: "sobha-aranya",
  slug: "sobha-aranya-sector-80",
  projectName: "Sobha Aranya",
  developer: "Sobha",
  microMarket: "southern-peripheral-road",
  sector: "Sector 80",
  location: "Sector 80, Gurugram (Karma Lakelands)",
  configuration: "3 & 4 BHK",
  price: "Price on Request",
  size: "2,836 - 4,285 sq.ft.",
  status: "New Launch",
  projectType: "Eco-Luxe Residences",
  heroImage: "/sobha_aranya/page_23.jpg",
  gallery: [
    "/sobha_aranya/page_19.jpg",
    "/sobha_aranya/page_20.jpg",
    "/sobha_aranya/page_22.jpg",
    "/sobha_aranya/page_24.jpg",
    "/sobha_aranya/page_25.jpg"
  ],
  amenities: [
    "75,000 sq.ft. Clubhouse",
    "6-lane Olympic-size pool",
    "40+ World-class Amenities",
    "Access to 9-Hole Golf Course",
    "Eco Pond & Bamboo Walk"
  ],
  usp: [
    "Nestled in a lush 270-acre bio-diverse paradise",
    "Over 85% open space",
    "Resort living with panoramic golf-course views",
    "Self-sustained G+2 clubhouse"
  ],
  overview: [
    {
      key: "Status",
      value: "New Launch"
    },
    {
      key: "Location",
      value: "Sector 80, Gurugram"
    },
    {
      key: "RERA Registration",
      value: "RC/REP/HARERA/GGM/808/540/2024/35"
    }
  ],
  seoTitle: "Sobha Aranya | Premium Eco-Luxe Residences in Sector 80",
  seoDescription: "Explore Sobha Aranya in Sector 80, Gurugram. Offering 3 & 4 BHK eco-luxe residences nestled in a lush 270-acre bio-diverse paradise with a 9-hole golf course.",
  featured: false,
  newLaunch: true,
  brochure: "/sobha_aranya/sobha_aranya_brochure.pdf"
},
{
  id: "hero-palatial",
  slug: "hero-palatial-dwarka-expressway",
  projectName: "The Palatial by Hero Homes",
  developer: "Hero Realty",
  microMarket: "dwarka-expressway",
  sector: "Dwarka Expressway",
  location: "Dwarka Expressway, Gurugram",
  configuration: "3 BHK + SPR, 4 BHK + SPR",
  price: "Price on Request",
  size: "Multi-Generation Layouts",
  status: "New Launch",
  projectType: "Luxury Apartments",
  heroImage: "/hero_palatial/hero_main_exterior.jpg",
  gallery: [
    "/hero_palatial/brochure_page_10.jpg",
    "/hero_palatial/brochure_page_18.jpg",
    "/hero_palatial/brochure_page_20.jpg",
    "/hero_palatial/brochure_page_24.jpg",
    "/hero_palatial/brochure_page_26.jpg"
  ],
  amenities: [
    "Luxurious Clubhouse & Lobby",
    "Temperature-Controlled Pool",
    "Badminton & Squash Courts",
    "3-Floor Integrated High Street Retail",
    "5-Star Lifestyle (Valet, Chef-on-Call)"
  ],
  usp: [
    "70% Open Areas (Verdant Promenade, Grand Waterway)",
    "Custom Interior Themes (Modern, European, Indian)",
    "Unparalleled Connectivity (15 Mins to Yashobhoomi)",
    "~3.3M Floor-to-Ceiling Height"
  ],
  overview: [
    {
      key: "Status",
      value: "New Launch"
    },
    {
      key: "Location",
      value: "Dwarka Expressway"
    },
    {
      key: "RERA Registration",
      value: "RC/REP/HARERA/GGM/907/639/2025/10"
    }
  ],
  seoTitle: "The Palatial by Hero Homes | Luxury Apartments on Dwarka Expressway",
  seoDescription: "Discover The Palatial by Hero Homes on Dwarka Expressway. Offering ultra-luxury 3 & 4 BHK residences with 5-star lifestyle amenities and 70% open areas.",
  featured: false,
  newLaunch: true,
  brochure: "/hero_palatial/hero_palatial_brochure.pdf"
},
{
  id: "krisumi-waterfall",
  slug: "krisumi-waterfall-residences",
  projectName: "Krisumi Waterfall Residences",
  developer: "Krisumi Corporation",
  microMarket: "dwarka-expressway",
  sector: "Sector 36A",
  location: "Sector 36A, Dwarka Expressway, Gurugram",
  configuration: "2 LDK, 3 LDK, 4 LDK",
  price: "Price on Request",
  size: "Premium Japanese Layouts",
  status: "New Launch",
  projectType: "Luxury Apartments",
  heroImage: "/krisumi/krisumi_main_exterior.png",
  gallery: [
    "/krisumi/gallery_1.jpeg",
    "/krisumi/gallery_2.jpeg",
    "/krisumi/gallery_3.jpeg",
    "/krisumi/gallery_4.jpeg",
    "/krisumi/gallery_5.jpeg"
  ],
  amenities: [
    "36,000 sq.ft. Sudare Clubhouse",
    "Temperature-Controlled Pool",
    "Fine Dining & Cafe",
    "Spa & Wellness Center",
    "Japanese Zen Gardens"
  ],
  usp: [
    "First Indo-Japanese Real Estate JV",
    "Japanese Craftsmanship & Aesthetics",
    "Direct Connectivity to CPR and Dwarka Expressway",
    "State-of-the-art LDK Layouts"
  ],
  overview: [
    {
      key: "Status",
      value: "New Launch"
    },
    {
      key: "Location",
      value: "Sector 36A, Dwarka Expressway"
    },
    {
      key: "Configuration",
      value: "2, 3, 4 LDK"
    }
  ],
  seoTitle: "Krisumi Waterfall Residences | Indo-Japanese Luxury in Sector 36A",
  seoDescription: "Explore Krisumi Waterfall Residences in Sector 36A, Dwarka Expressway. Experience authentic Japanese luxury, LDK layouts, and the 36,000 sq.ft. Sudare clubhouse.",
  featured: false,
  newLaunch: true,
  brochure: "/krisumi/krisumi_brochure.pdf"
},
{
  id: "tonino-lamborghini-residences",
  slug: "tonino-lamborghini-residences-sector-71",
  projectName: "Tonino Lamborghini Residences",
  developer: "Signature Global",
  microMarket: "southern-peripheral-road",
  sector: "Sector 71",
  location: "Sector 71, Southern Peripheral Road (SPR), Gurugram",
  configuration: "3, 3.5, 4, 4.5 BHK & Penthouses",
  price: "₹4.8 Cr Onwards",
  size: "2,040 - 6,000+ sq.ft.",
  status: "New Launch",
  projectType: "Ultra Luxury Branded Residences",
  heroImage: "/lamborghini/lambo_1_0.jpeg", 
  gallery: [
    "/lamborghini/lambo_1_0.jpeg",
    "/lamborghini/lambo_3_0.jpeg",
    "/lamborghini/lambo_10_0.jpeg",
    "/lamborghini/lambo_13_0.jpeg",
    "/lamborghini/lambo_14_0.jpeg"
  ],
  amenities: [
    "2 Lakh sq.ft. Premium Clubhouse",
    "Aerodynamic-inspired Architecture",
    "Temperature-controlled Swimming Pool",
    "Exclusive Dining & Café Spaces",
    "Tonino Lamborghini Styled Interiors"
  ],
  usp: [
    "Branded Residences by Tonino Lamborghini S.p.A (Italy)",
    "Carbon-fiber accents and high ceilings",
    "Low-density project with ~800 residences across 12.4 acres",
    "Multi-tier security systems"
  ],
  overview: [
    { key: "Towers", value: "5 High-Rise Towers" },
    { key: "Total Area", value: "12.4 Acres" },
    { key: "Total Units", value: "~800 Units" },
    { key: "Possession", value: "Early 2033" }
  ],
  seoTitle: "Tonino Lamborghini Residences | Ultra Luxury Apartments by Signature Global",
  seoDescription: "Tonino Lamborghini Residences in Sector 71, Gurugram. Signature Global presents ultra-luxury branded 3, 4, and 4.5 BHK apartments on the SPR.",
  featured: true,
  newLaunch: false,
  brochure: "/lamborghini_assets/brochure.pdf"
}
];

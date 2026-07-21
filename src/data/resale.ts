export interface ResaleProperty {
  id: string;
  category: "plots" | "apartments" | "builder-floors" | "commercial" | "leasing" | "penthouses";
  name: string; // e.g. DLF Phase 1
  area: string; // e.g. 300 Sq yards
  price: string; // e.g. 12 Cr
  details?: string;
}

export const resaleData: ResaleProperty[] = [
  // Plots
  { id: "p1", category: "plots", name: "DLF Phase 1", area: "300 Sq yards", price: "12 Cr" },
  { id: "p2", category: "plots", name: "DLF Phase 2", area: "500 Sq yards", price: "18 Cr" },
  { id: "p3", category: "plots", name: "Sushant Lok 1", area: "250 Sq yards", price: "8 Cr" },
  { id: "p4", category: "plots", name: "Golf Course Extension", area: "1000 Sq yards", price: "35 Cr" },
  
  // Apartments
  { id: "a1", category: "apartments", name: "DLF Magnolias", area: "6,500 Sq ft", price: "32 Cr" },
  { id: "a2", category: "apartments", name: "DLF Camellias", area: "7,400 Sq ft", price: "45 Cr" },
  { id: "a3", category: "apartments", name: "M3M Golfestate", area: "3,500 Sq ft", price: "10 Cr" },
  { id: "a4", category: "apartments", name: "Central Park Resorts", area: "2,800 Sq ft", price: "6.5 Cr" },
  
  // Builder Floors
  { id: "bf1", category: "builder-floors", name: "DLF Phase 4 Independent Floor", area: "400 Sq yards (Floor)", price: "4.5 Cr" },
  { id: "bf2", category: "builder-floors", name: "South City 1", area: "350 Sq yards (Floor)", price: "3.8 Cr" },
  { id: "bf3", category: "builder-floors", name: "Nirvana Country Floor", area: "500 Sq yards (Floor)", price: "5.5 Cr" },

  // Commercial
  { id: "c1", category: "commercial", name: "Cyber Hub Retail Space", area: "1,200 Sq ft", price: "15 Cr" },
  { id: "c2", category: "commercial", name: "Golf Course Road Office", area: "2,500 Sq ft", price: "9 Cr" },
  
  // Leasing
  { id: "l1", category: "leasing", name: "DLF Crest (For Rent)", area: "3,100 Sq ft", price: "3.5 Lacs / month" },
  { id: "l2", category: "leasing", name: "Horizon Center Office (Lease)", area: "5,000 Sq ft", price: "8 Lacs / month" },
  
  // Penthouses
  { id: "ph1", category: "penthouses", name: "Ireo Skyon Penthouse", area: "4900 Sq ft", price: "9.7 Cr", details: "Sector 60 Gurgaon, 5 BHK" }
];

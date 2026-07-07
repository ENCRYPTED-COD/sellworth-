"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LocationData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  investmentTier: string;
  growthProfile: string;
  landmarkDevelopments: string[];
  image: string;
  mapUrl: string;
}

const locations: LocationData[] = [
  {
    id: "golf-course-road",
    name: "Golf Course Road",
    tagline: "Gurgaon's Billionaire Belt",
    description: "The absolute crown jewel of North Indian real estate. Home to private golf courses, multi-tiered super-luxury residential towers, Fortune 500 offices, and high-end fine dining plazas. It represents ultimate status and capital stability.",
    investmentTier: "₹15 Cr – ₹100 Cr+",
    growthProfile: "Consolidated, Elite Capital Preservation",
    landmarkDevelopments: ["The Camellias", "One Horizon Center", "The Magnolias", "Aralias"],
    image: "https://1.bp.blogspot.com/-0lI07W2gQEA/X0d7W3ci6cI/AAAAAAAAAvE/a2rU-Gz8oDgf4pgcciYOWpxgcXEhoqziQCLcBGAsYHQ/s640/dlf%2Bthe%2Bcamellias.jpg",
    mapUrl: "https://maps.google.com/maps?q=Golf%20Course%20Road,%20Gurgaon&t=&z=14&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: "cyber-city",
    name: "Cyber City",
    tagline: "The Corporate Nerve Center",
    description: "The powerhouse of Gurgaon's commercial story. A futuristic corporate hub housing top global investment firms, technology giants, and upscale shopping corridors. Extremely high commercial rental yields and business prestige.",
    investmentTier: "₹12 Cr – ₹80 Cr (Offices/Commercial)",
    growthProfile: "High Cash Flow, Prime Institutional Demand",
    landmarkDevelopments: ["DLF Cyber Hub", "Building 10", "Cyber Greens", "Epitome"],
    image: "https://i.ytimg.com/vi/JoYeCEUEUVA/maxresdefault.jpg",
    mapUrl: "https://maps.google.com/maps?q=DLF%20Cyber%20City,%20Gurgaon&t=&z=14&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: "dwarka-expressway",
    name: "Dwarka Expressway",
    tagline: "The Connected Future",
    description: "The newly inaugurated 16-lane access-controlled expressway. Directly linking South-West Delhi to Gurgaon, this corridor represents the fastest appreciating luxury residential belt in India, featuring smart layouts and gated oases.",
    investmentTier: "₹3 Cr – ₹12 Cr",
    growthProfile: "Rapid Appreciation, Modern Infrastructure",
    landmarkDevelopments: ["Signature Global City", "M3M Crown", "Emaar Imperial Gardens"],
    image: "https://cdn.realtyassistant.in/properties/gallery/1151348651.webp",
    mapUrl: "https://maps.google.com/maps?q=Dwarka%20Expressway,%20Gurgaon&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: "spr-road",
    name: "SPR Road",
    tagline: "The Tech-Residential Confluence",
    description: "Southern Peripheral Road forms the crucial link between Golf Course Extension, Sohna Road, and NH-48. Known for modern premium towers, commercial high-streets, and close proximity to major corporate business zones.",
    investmentTier: "₹4 Cr – ₹15 Cr",
    growthProfile: "Steady Growth, High Utility Infrastructure",
    landmarkDevelopments: ["Smartworld The Crown", "DLF Alameda", "Tata Primanti"],
    image: "https://www.gurgaonapartments.in/admin/upload/project/1616737802-tata-primanti-amenities.jpg",
    mapUrl: "https://maps.google.com/maps?q=Southern%20Peripheral%20Road,%20Gurgaon&t=&z=14&ie=UTF8&iwloc=&output=embed"
  },
  {
    id: "new-gurgaon",
    name: "New Gurgaon",
    tagline: "Low-Density Golf & Wellness Havens",
    description: "Slightly offset from the city bustle, New Gurgaon offers low-density residential estates, golf courses, and green reserves. Ideal for family offices seeking estate living, clean air, and peaceful premium retreats.",
    investmentTier: "₹2.5 Cr – ₹8 Cr",
    growthProfile: "High Long-term Appreciation, Wellness Core",
    landmarkDevelopments: ["Godrej Solitaire", "Karma Lakelands", "DLF New Town Heights"],
    image: "https://dpgvclkvnnsee.cloudfront.net/microsites/dlf_newtownheights/lib/images/gallery/big1.jpg",
    mapUrl: "https://maps.google.com/maps?q=New%20Gurgaon,%20Gurgaon&t=&z=13&ie=UTF8&iwloc=&output=embed"
  }
];

export default function Locations() {
  const [activeLoc, setActiveLoc] = useState<LocationData>(locations[0]);
  const [viewMode, setViewMode] = useState<"image" | "map">("image");

  return (
    <section className="relative py-24 md:py-36 bg-luxury-black text-luxury-ivory overflow-hidden border-t border-luxury-gold/10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.01)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 space-y-4 max-w-2xl">
          <span className="font-mono text-xs tracking-[0.4em] text-luxury-gold uppercase block">
            Territorial Mapping
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight">
            Gurgaon Micro-Markets as <br />
            <span className="italic text-luxury-gold font-light">Destinations.</span>
          </h2>
          <p className="font-sans text-sm text-luxury-ivory/60 font-light tracking-wide leading-relaxed">
            Gurgaon is segmented into highly distinct asset corridors. We map your investment to the specific micro-market that aligns with your capital preservation goals.
          </p>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Menu Items */}
          <div className="lg:col-span-5 flex flex-col space-y-4 border-l border-luxury-ivory/10 pl-6">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => {
                  setActiveLoc(loc);
                  setViewMode("image"); // reset to image view on location change
                }}
                className="text-left py-4 focus:outline-none group relative transition-colors duration-300"
              >
                <div className="flex flex-col space-y-1">
                  <span className={`font-serif text-2xl md:text-3xl tracking-wide transition-colors ${
                    activeLoc.id === loc.id ? "text-luxury-gold" : "text-luxury-ivory/40 group-hover:text-luxury-ivory"
                  }`}>
                    {loc.name}
                  </span>
                  <span className={`font-mono text-[9px] tracking-widest uppercase transition-colors ${
                    activeLoc.id === loc.id ? "text-luxury-gold/70" : "text-luxury-ivory/20 group-hover:text-luxury-gold/40"
                  }`}>
                    {loc.tagline}
                  </span>
                </div>
                
                {/* Horizontal slide indicator */}
                {activeLoc.id === loc.id && (
                  <motion.div
                    layoutId="activeLocationIndicator"
                    className="absolute left-[-25px] top-0 bottom-0 w-[2px] bg-luxury-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Column: Dynamic Content & Image */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLoc.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Destination View Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-luxury-gold/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-luxury-charcoal/20">
                  {viewMode === "image" ? (
                    <>
                      <div className="absolute inset-0 bg-luxury-black/35 z-10 pointer-events-none" />
                      <img
                        src={activeLoc.image}
                        alt={activeLoc.name}
                        className="w-full h-full object-cover transition-transform duration-1000 scale-100 hover:scale-105"
                      />
                    </>
                  ) : (
                    <iframe
                      src={activeLoc.mapUrl}
                      title={`${activeLoc.name} Map`}
                      className="w-full h-full border-0 opacity-90"
                      allowFullScreen
                      loading="lazy"
                    />
                  )}
                  
                  {/* View Mode Toggle Buttons */}
                  <div className="absolute top-4 right-4 z-20 flex space-x-2">
                    <button
                      onClick={() => setViewMode("image")}
                      className={`px-3 py-1.5 font-mono text-[8px] tracking-[0.2em] uppercase border transition-all cursor-pointer ${
                        viewMode === "image"
                          ? "bg-luxury-gold text-luxury-black border-luxury-gold font-bold"
                          : "bg-luxury-black/70 text-luxury-gold/70 border-luxury-gold/30 hover:text-luxury-gold"
                      }`}
                    >
                      Gallery View
                    </button>
                    <button
                      onClick={() => setViewMode("map")}
                      className={`px-3 py-1.5 font-mono text-[8px] tracking-[0.2em] uppercase border transition-all cursor-pointer ${
                        viewMode === "map"
                          ? "bg-luxury-gold text-luxury-black border-luxury-gold font-bold"
                          : "bg-luxury-black/70 text-luxury-gold/70 border-luxury-gold/30 hover:text-luxury-gold"
                      }`}
                    >
                      Interactive Map
                    </button>
                  </div>
                </div>

                {/* Destination Description */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4">
                  <div className="md:col-span-7 space-y-4">
                    <h4 className="font-serif text-xl italic text-luxury-gold font-light">
                      {activeLoc.tagline}
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-luxury-ivory/70 leading-relaxed font-light tracking-wide">
                      {activeLoc.description}
                    </p>
                  </div>
                  
                  {/* Stats Sidebar */}
                  <div className="md:col-span-5 space-y-6 md:border-l md:border-luxury-ivory/15 md:pl-6">
                    <div className="space-y-1">
                      <span className="font-mono text-[8px] tracking-[0.25em] text-luxury-gold uppercase block">
                        Advisory Tier
                      </span>
                      <span className="font-serif text-sm md:text-base text-luxury-ivory font-light">
                        {activeLoc.investmentTier}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="font-mono text-[8px] tracking-[0.25em] text-luxury-gold uppercase block">
                        Capital Vector
                      </span>
                      <span className="font-serif text-xs md:text-sm text-luxury-ivory font-light">
                        {locNameShortener(activeLoc.growthProfile)}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="font-mono text-[8px] tracking-[0.25em] text-luxury-gold uppercase block">
                        Landmark Sites
                      </span>
                      <div className="flex flex-wrap gap-x-2 gap-y-1 font-sans text-[10px] text-luxury-ivory/80">
                        {activeLoc.landmarkDevelopments.map((l, i) => (
                          <span key={l}>
                            {l}{i < activeLoc.landmarkDevelopments.length - 1 ? "," : ""}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

// Utility to limit text length if needed
function locNameShortener(text: string): string {
  if (text.length > 40) {
    return text.substring(0, 37) + "...";
  }
  return text;
}

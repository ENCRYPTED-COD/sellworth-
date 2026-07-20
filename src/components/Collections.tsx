"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { properties } from "../data/properties";
import ReadyToMoveFramework from "./ReadyToMoveFramework";
import { ArrowUpRight, Search, X } from "lucide-react";

export default function Collections() {
  const [activeTab, setActiveTab] = useState<"residences" | "golf" | "commercial" | "new-launch" | "ready-to-move">("residences");
  const [budgetFilter, setBudgetFilter] = useState<"all" | "under-10" | "10-30" | "above-30">("all");
  const [locationFilter, setLocationFilter] = useState<"all" | "golf-course-road" | "cyber-city" | "dwarka-expressway" | "spr-road" | "new-gurgaon">("all");

  const tabs = [
    { id: "residences", label: "Signature Residences" },
    { id: "golf", label: "Golf Estate Living" },
    { id: "commercial", label: "Commercial Landmarks" },
    { id: "new-launch", label: "New Launch Collections" },
    { id: "ready-to-move", label: "Ready to Move In" }
  ] as const;

  const filteredProperties = properties.filter((p) => {
    // 1. Category Filter
    if (p.category !== activeTab) return false;

    // 2. Budget Filter (Numeric comparison in Crores)
    if (budgetFilter === "under-10" && p.priceNumeric >= 10) return false;
    if (budgetFilter === "10-30" && (p.priceNumeric < 10 || p.priceNumeric > 30)) return false;
    if (budgetFilter === "above-30" && p.priceNumeric <= 30) return false;

    // 3. Location Filter
    if (locationFilter !== "all") {
      const normLocation = p.location.toLowerCase();
      const searchLoc = locationFilter.replace(/-/g, " ");
      if (!normLocation.includes(searchLoc)) return false;
    }

    return true;
  });

  const resetFilters = () => {
    setBudgetFilter("all");
    setLocationFilter("all");
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#commercial") {
        setActiveTab("commercial");
        resetFilters();
      } else if (hash === "#residences") {
        setActiveTab("residences");
        resetFilters();
      } else if (hash === "#new-launch") {
        setActiveTab("new-launch");
        resetFilters();
      } else if (hash === "#ready-to-move") {
        setActiveTab("ready-to-move");
        resetFilters();
      }
    };
    
    handleHash();
    window.addEventListener("hashchange", handleHash);

    const handleSwitchTab = (e: any) => {
      const tab = e.detail;
      if (tab === "commercial" || tab === "residences" || tab === "new-launch" || tab === "ready-to-move") {
        setActiveTab(tab);
        resetFilters();
      }
    };
    window.addEventListener("switch-tab", handleSwitchTab);

    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("switch-tab", handleSwitchTab);
    };
  }, []);

  return (
    <section id="collections" className="relative py-24 md:py-36 bg-luxury-black text-luxury-ivory overflow-hidden">
      {/* Invisible Anchors for Hash Routing */}
      <div id="residences" className="absolute top-0" />
      <div id="commercial" className="absolute top-0" />
      <div id="new-launch" className="absolute top-0" />
      <div id="ready-to-move" className="absolute top-0" />

      {/* Subtle layout grid in black */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.01)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <span className="font-mono text-xs tracking-[0.4em] text-luxury-gold uppercase block">
              Curated Portfolios
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight">
              Featured <br />
              <span className="italic text-luxury-gold font-light">Collections.</span>
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-luxury-ivory/60 font-light tracking-wide max-w-md leading-relaxed">
            Discover a hand-selected collection of prestigious properties and commercial investments situated across Gurgaon&apos;s primary corporate and residential arteries.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="border-b border-luxury-ivory/10 pb-4 mb-8 overflow-x-auto scrollbar-none">
          <div className="flex space-x-8 md:space-x-12 min-w-max pb-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  resetFilters(); // Reset location & budget on main tab switch to prevent blank layouts
                }}
                className="relative font-serif text-lg md:text-xl tracking-wide pb-4 text-left focus:outline-none transition-colors duration-300 group"
              >
                <span className={activeTab === tab.id ? "text-luxury-gold" : "text-luxury-ivory/50 group-hover:text-luxury-ivory"}>
                  {tab.label}
                </span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-luxury-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "ready-to-move" ? (
          <motion.div
            key="ready-to-move-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <ReadyToMoveFramework />
          </motion.div>
        ) : (
          <motion.div
            key="standard-collections"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-12"
          >
        
        {/* Advanced Filters Panel */}
        <div className="flex flex-wrap gap-6 items-center bg-luxury-charcoal/20 border border-luxury-ivory/5 p-6 md:p-8 mb-16">
          {/* Budget Filter */}
          <div className="flex flex-col space-y-2">
            <span className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase">
              Capital Allocation
            </span>
            <select
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value as any)}
              className="bg-luxury-black border border-luxury-ivory/10 focus:border-luxury-gold text-xs tracking-wide py-2.5 px-4 font-sans focus:outline-none text-luxury-ivory min-w-[200px] cursor-pointer"
            >
              <option value="all">All Capital Layouts</option>
              <option value="under-10">Under ₹10 Cr</option>
              <option value="10-30">₹10 Cr – ₹30 Cr</option>
              <option value="above-30">Above ₹30 Cr</option>
            </select>
          </div>

          {/* Location Filter */}
          <div className="flex flex-col space-y-2">
            <span className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase">
              Micro-Market Corridor
            </span>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value as any)}
              className="bg-luxury-black border border-luxury-ivory/10 focus:border-luxury-gold text-xs tracking-wide py-2.5 px-4 font-sans focus:outline-none text-luxury-ivory min-w-[200px] cursor-pointer"
            >
              <option value="all">All Gurgaon Markets</option>
              <option value="golf-course-road">Golf Course Road</option>
              <option value="cyber-city">Cyber City</option>
              <option value="dwarka-expressway">Dwarka Expressway</option>
              <option value="spr-road">SPR Road</option>
              <option value="new-gurgaon">New Gurgaon</option>
            </select>
          </div>

          {/* Filter Status Reset Trigger */}
          {(budgetFilter !== "all" || locationFilter !== "all") && (
            <button
              onClick={resetFilters}
              className="flex items-center space-x-2 font-mono text-[9px] tracking-widest text-luxury-gold hover:text-luxury-ivory transition-colors mt-6 py-2.5 px-4 border border-luxury-gold/30 hover:border-luxury-ivory/30"
            >
              <X className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Asymmetric Portfolio Grid or No Results Fallback */}
        <AnimatePresence mode="wait">
          {filteredProperties.length > 0 ? (
            <motion.div
              key="grid"
              className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
            >
              {filteredProperties.map((property, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={property.slug}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                    className={`flex flex-col space-y-6 ${
                      isEven ? "md:translate-y-0" : "md:translate-y-12"
                    }`}
                  >
                    <Link href={`/properties/${property.slug}`} className="group block relative overflow-hidden aspect-[4/3] w-full border border-luxury-ivory/5">
                      <div className="absolute inset-0 bg-luxury-black/30 group-hover:bg-luxury-black/10 transition-colors duration-500 z-10" />
                      <motion.div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${property.image}')` }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                      <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full border border-luxury-ivory/20 flex items-center justify-center bg-luxury-black/60 opacity-0 group-hover:opacity-100 group-hover:bg-luxury-gold group-hover:border-luxury-gold transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 text-luxury-ivory group-hover:text-luxury-black transition-colors" />
                      </div>
                    </Link>

                    <div className="flex justify-between items-start pt-2">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-luxury-gold uppercase">
                          <span>{property.developer}</span>
                          <span>&bull;</span>
                          <span>{property.location.split(",")[0]}</span>
                        </div>
                        <Link href={`/properties/${property.slug}`}>
                          <h3 className="font-serif text-2xl md:text-3xl text-luxury-ivory hover:text-luxury-gold transition-colors duration-300 tracking-wide font-normal">
                            {property.name}
                          </h3>
                        </Link>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-xs tracking-wider text-luxury-gold/70 block">
                          Advisory Range
                        </span>
                        <span className="font-serif text-lg text-luxury-ivory font-light">
                          {property.investmentRange}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="fallback"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 border border-luxury-ivory/5 bg-luxury-charcoal/10 max-w-xl mx-auto space-y-6"
            >
              <Search className="w-8 h-8 text-luxury-gold/60 mx-auto" />
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-luxury-ivory">Off-Market Inventory Fallback</h3>
                <p className="font-sans text-xs md:text-sm text-luxury-ivory/50 max-w-sm mx-auto leading-relaxed font-light">
                  No properties currently match your exact criteria in our public listing directory. Please contact our acquisitions desk for exclusive private layouts.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-block font-mono text-[9px] tracking-widest text-luxury-black bg-luxury-gold py-3 px-6 uppercase font-bold"
              >
                Inquire Confidential List
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="text-center pt-32 pb-8">
          <Link
            href="#contact"
            className="inline-flex items-center space-x-4 group border-b border-luxury-gold/30 pb-2 hover:border-luxury-gold transition-colors duration-300"
          >
            <span className="font-mono text-xs tracking-[0.25em] text-luxury-gold uppercase">
              Request Exclusive Off-Market Portfolios
            </span>
            <ArrowUpRight className="w-4 h-4 text-luxury-gold transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
        </motion.div>
        )}

      </div>
    </section>
  );
}

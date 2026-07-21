"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageSquare } from "lucide-react";
import { resaleData } from "../data/resale";

export default function ReadyToMoveFramework() {
  const WHATSAPP_NUMBER = "919650400647";

  const [activeCategory, setActiveCategory] = useState<"plots" | "apartments" | "builder-floors" | "commercial" | "leasing" | "penthouses">("plots");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "plots", label: "Plots" },
    { id: "apartments", label: "Apartments" },
    { id: "builder-floors", label: "Builder Floors" },
    { id: "penthouses", label: "Penthouses" },
    { id: "commercial", label: "Commercial" },
    { id: "leasing", label: "Leasing" },
  ] as const;

  const filteredProperties = resaleData.filter((property) => {
    const matchesCategory = property.category === activeCategory;
    const matchesSearch = property.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          property.area.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-luxury-black border border-luxury-ivory/10 flex flex-col md:flex-row overflow-hidden min-h-[600px] mt-8">
      
      {/* Left Sidebar (Categories) */}
      <div className="w-full md:w-64 bg-luxury-charcoal border-r border-luxury-ivory/10 flex flex-col">
        <div className="p-6 border-b border-luxury-ivory/10">
          <h3 className="font-serif text-xl text-luxury-ivory tracking-wide">
            Ready to <span className="text-luxury-gold italic">Move in</span>
          </h3>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col py-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full text-left px-6 py-4 flex items-center justify-between transition-all duration-300 border-l-4 ${
                  activeCategory === cat.id
                    ? "border-luxury-gold bg-luxury-gold/5 text-luxury-gold"
                    : "border-transparent text-luxury-ivory/60 hover:bg-luxury-ivory/5 hover:text-luxury-ivory"
                }`}
              >
                <span className="font-sans text-xs tracking-widest uppercase font-semibold">
                  {cat.label}
                </span>
                {activeCategory === cat.id && (
                  <motion.div layoutId="active-indicator" className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col bg-luxury-black/95">
        
        {/* Search Header */}
        <div className="p-6 border-b border-luxury-ivory/10 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-luxury-ivory/40" />
            </div>
            <input
              type="text"
              placeholder={`Search ${categories.find(c => c.id === activeCategory)?.label}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-luxury-ivory/10 bg-transparent text-luxury-ivory font-sans text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors placeholder-luxury-ivory/30"
            />
          </div>
          <div className="hidden md:block text-luxury-ivory/40 font-mono text-[9px] tracking-widest uppercase">
            {filteredProperties.length} Results Found
          </div>
        </div>

        {/* Listings Grid */}
        <div className="p-6 flex-1 overflow-y-auto">
          <AnimatePresence mode="popLayout">
            {filteredProperties.length > 0 ? (
              <motion.div 
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 gap-3"
              >
                {filteredProperties.map((prop) => (
                  <motion.div 
                    layout
                    key={prop.id}
                    className="group border border-luxury-ivory/10 bg-luxury-charcoal/20 hover:bg-luxury-charcoal/60 hover:border-luxury-gold/30 p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 cursor-pointer gap-4 md:gap-8"
                  >
                    {/* Left: Name & Category */}
                    <div className="flex flex-col gap-1 w-full md:w-5/12">
                      <div className="flex items-center gap-3">
                        <h4 className="font-serif text-base md:text-lg text-luxury-ivory group-hover:text-luxury-gold transition-colors leading-snug">
                          {prop.name}
                        </h4>
                        <span className="px-2 py-1 bg-luxury-ivory/5 text-luxury-ivory/60 font-mono text-[9px] uppercase tracking-wider whitespace-nowrap hidden md:inline-block">
                          {categories.find(c => c.id === prop.category)?.label}
                        </span>
                      </div>
                      {prop.details && (
                        <p className="text-luxury-ivory/50 text-xs font-sans mt-1">{prop.details}</p>
                      )}
                    </div>
                    
                    {/* Right: Area, Price, WhatsApp */}
                    <div className="flex flex-row items-center justify-between md:justify-end gap-4 md:gap-8 w-full md:w-7/12">
                      <div className="flex flex-col text-left md:text-right hidden sm:flex">
                        <span className="font-sans text-[9px] uppercase tracking-widest text-luxury-ivory/40 mb-1">Area</span>
                        <span className="font-sans text-sm text-luxury-ivory font-light whitespace-nowrap">{prop.area}</span>
                      </div>
                      <div className="flex flex-col text-left md:text-right min-w-[100px]">
                        <span className="font-sans text-[9px] uppercase tracking-widest text-luxury-ivory/40 mb-1">Asking Price</span>
                        <span className="font-serif text-lg text-luxury-gold whitespace-nowrap">{prop.price}</span>
                      </div>
                      
                      {/* WhatsApp Button */}
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I am interested in ${encodeURIComponent(prop.name)} (${prop.area}) for ${prop.price}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 bg-luxury-gold/10 hover:bg-luxury-gold text-luxury-gold hover:text-luxury-black transition-colors duration-300 px-4 py-2 text-xs font-mono uppercase tracking-widest border border-luxury-gold/30 hover:border-luxury-gold"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span className="hidden lg:inline">Inquire</span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full py-20 text-luxury-ivory/40 space-y-4"
              >
                <Search className="w-8 h-8 opacity-20" />
                <p className="font-sans text-sm">No properties found matching your criteria.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

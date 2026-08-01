"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { properties as staticProperties } from "../data/properties";
import PropertyCard from "./PropertyCard";
import { ArrowRight, Search } from "lucide-react";

export default function NewLaunchFramework() {
  const markets = [
    { id: "golf-course-road", label: "Golf Course Road", cta: "Explore Golf Course Collection" },
    { id: "golf-course-extension-road", label: "Golf Course Extension Road", cta: "Explore Golf Course Extension" },
    { id: "southern-peripheral-road", label: "SPR", cta: "Explore SPR Collection" },
    { id: "new-gurgaon", label: "New Gurgaon", cta: "Explore New Gurgaon" },
    { id: "dwarka-expressway", label: "Dwarka Expressway", cta: "Explore Dwarka Collection" }
  ] as const;

  const [dbCollections, setDbCollections] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/collections")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const mapped = data.map(c => {
            let mm = "";
            const loc = (c.location || "").toLowerCase();
            if (loc.includes("dwarka expressway") || loc.includes("dwarka")) mm = "dwarka-expressway";
            else if (loc.includes("golf course extension") || loc.includes("spr")) mm = "golf-course-extension-road";
            else if (loc.includes("golf course road")) mm = "golf-course-road";
            else if (loc.includes("cyber") || loc.includes("dlf")) mm = "cyber-city";
            else if (loc.includes("sector 86") || loc.includes("sector 8")) mm = "new-gurgaon";
            else mm = "new-gurgaon";

            return {
              slug: c.slug || c.id,
              projectName: c.name,
              developer: c.developer,
              location: c.location,
              microMarket: mm,
              price: c.investmentRange || (c.priceNumeric ? `${c.priceNumeric} Cr` : "Price on Request"),
              heroImage: c.image || (c.images && c.images[0]) || "",
              projectType: c.category === "commercial" ? "commercial" : "residential",
              status: "",
              newLaunch: true,
              priceNumeric: c.priceNumeric || 0,
              category: c.category
            };
          });
          setDbCollections(mapped);
        }
      })
      .catch(err => console.error("Failed to fetch collections", err));
  }, []);

  const combined = [...staticProperties, ...dbCollections];
  // Deduplicate by slug (DB items override static items with the same slug)
  const properties = Array.from(new Map(combined.map(p => [p.slug || p.id, p])).values());

  useEffect(() => {
    const handleSwitchMarket = (e: any) => {
      const market = e.detail;
      const element = document.getElementById(`market-section-${market}`);
      if (element) {
        // Adding a slight delay to ensure it scrolls after the main container scrolls
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    };
    window.addEventListener("switch-new-launch-market", handleSwitchMarket);
    return () => window.removeEventListener("switch-new-launch-market", handleSwitchMarket);
  }, []);

  return (
    <div className="space-y-16 mt-8 pb-12">
      {markets.map((market, index) => {
        const filteredProperties = properties.filter(
          (p) => p.newLaunch === true && p.microMarket === market.id
        );

        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            key={market.id} 
            id={`market-section-${market.id}`} 
            className="space-y-6"
          >
            {/* Header */}
            <div className="border-b border-luxury-ivory/20 pb-3">
              <h2 className="font-serif text-xl md:text-2xl text-luxury-ivory tracking-wide">{market.label}</h2>
            </div>

            {/* Horizontal Scroll Grid */}
            {filteredProperties.length > 0 ? (
              <div className="flex space-x-6 overflow-x-auto scrollbar-none pb-4 snap-x snap-mandatory pr-8">
                {filteredProperties.map((prop) => (
                  <div key={prop.slug} className="w-[300px] md:w-[350px] shrink-0 snap-start">
                    <PropertyCard prop={prop} />
                  </div>
                ))}
                
                {/* View More Card */}
                <div className="w-[300px] md:w-[350px] shrink-0 snap-start flex items-center justify-center border border-luxury-ivory/10 hover:border-luxury-gold/40 transition-colors group cursor-pointer">
                  <Link href={`/new-launch/${market.id}`} className="flex flex-col items-center justify-center space-y-4 w-full h-full py-20">
                    <div className="w-12 h-12 rounded-full border border-luxury-gold/30 flex items-center justify-center group-hover:bg-luxury-gold transition-colors duration-500">
                      <ArrowRight className="w-5 h-5 text-luxury-gold group-hover:text-luxury-black transition-colors" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-luxury-ivory/60 group-hover:text-luxury-ivory transition-colors">
                      View All
                    </span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 border border-luxury-ivory/5 bg-luxury-charcoal/10 max-w-2xl space-y-4">
                <Search className="w-6 h-6 text-luxury-gold/40 mx-auto" />
                <p className="font-sans text-sm text-luxury-ivory/50 font-light leading-relaxed">
                  We are currently curating the finest new launch opportunities in {market.label}.
                </p>
                <Link href="#contact" className="inline-block mt-4 font-mono text-[9px] tracking-widest text-luxury-gold uppercase border-b border-luxury-gold/30 hover:border-luxury-gold pb-1 transition-colors">
                  Inquire Confidential List
                </Link>
              </div>
            )}

            {/* CTA */}
            <div className="pt-2">
              <Link 
                href={`/new-launch/${market.id}`}
                className="inline-flex items-center space-x-3 text-luxury-gold hover:text-luxury-ivory transition-colors group uppercase font-mono text-[10px] tracking-widest"
              >
                <span>{market.cta}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

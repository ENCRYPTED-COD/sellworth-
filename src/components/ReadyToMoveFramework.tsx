"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, Phone } from "lucide-react";
import { properties } from "../data/properties";

export default function ReadyToMoveFramework() {
  const WHATSAPP_NUMBER = "919650400647"; // Your WhatsApp Number
  
  // Get all Ready to Move properties from static file
  const readyProperties = properties.filter((p) => p.category === "ready-to-move");

  return (
    <div className="space-y-12 mt-8">
      
      {/* Header section for Ready to Move */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
        <h3 className="font-serif text-3xl md:text-4xl text-luxury-ivory tracking-wide">Immediate Occupancy</h3>
        <p className="font-sans text-luxury-ivory/60 text-sm font-light leading-relaxed">
          Select from our curated inventory of ultra-luxury residences available for immediate handover. Move into perfection without the wait.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {readyProperties.map((prop, idx) => (
          <motion.div
            key={prop.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group flex flex-col bg-luxury-charcoal/20 border border-luxury-ivory/10 hover:border-luxury-gold/50 transition-colors duration-500"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={prop.image || "/placeholder.jpg"}
                alt={prop.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="bg-luxury-gold text-luxury-black font-mono text-[9px] uppercase tracking-widest px-3 py-1 font-bold">
                  Ready to Move
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase block mb-1">
                      {prop.developer}
                    </span>
                    <h4 className="font-serif text-xl text-luxury-ivory group-hover:text-luxury-gold transition-colors">
                      {prop.name}
                    </h4>
                    <p className="text-luxury-ivory/40 text-xs font-mono uppercase tracking-wider mt-2">
                      {prop.location?.split(",")[0] || ""}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-mono text-luxury-ivory/40 uppercase mb-1">Price</span>
                    <span className="font-serif text-lg text-luxury-ivory">₹{prop.priceNumeric || prop.investmentRange || "POR"} Cr</span>
                  </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-luxury-ivory/10">
                  <div>
                    <span className="block text-[9px] font-mono text-luxury-ivory/40 uppercase tracking-widest mb-1">Typology</span>
                    <span className="text-luxury-ivory text-sm font-light">{prop.category}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono text-luxury-ivory/40 uppercase tracking-widest mb-1">Size</span>
                    <span className="text-luxury-ivory text-sm font-light">{prop.area || "N/A"}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I am interested in ${encodeURIComponent(prop.name)} (Ready to Move).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 bg-luxury-gold/10 hover:bg-luxury-gold text-luxury-gold hover:text-luxury-black transition-colors duration-300 py-3 text-xs font-mono uppercase tracking-widest border border-luxury-gold/30 hover:border-luxury-gold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <Link
                  href={`/properties/${prop.slug}`}
                  className="w-12 h-12 flex items-center justify-center border border-luxury-ivory/20 hover:border-luxury-gold hover:bg-luxury-gold/5 text-luxury-ivory hover:text-luxury-gold transition-colors duration-300"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

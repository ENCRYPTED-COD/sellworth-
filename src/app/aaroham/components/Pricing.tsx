"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const units = [
    { type: "Duplex 1 (4 BHK + Powder + Servant)", floor: "Ground Floor", carpet: "2,613 sq ft", balcony: "572 sq ft", price: "₹ 7.15 Cr" },
    { type: "Duplex 2 (4 BHK + Powder + Servant)", floor: "Ground Floor", carpet: "2,099 sq ft", balcony: "547 sq ft", price: "₹ 5.83 Cr" },
    { type: "5 BHK", floor: "20th Floor", carpet: "2,366 sq ft", balcony: "729 sq ft", price: "₹ 6.57 Cr" },
    { type: "4 BHK (Large)", floor: "20th Floor", carpet: "1,919 sq ft", balcony: "631 sq ft", price: "₹ 5.39 Cr" },
    { type: "4 BHK", floor: "1st to 23rd Floor", carpet: "1,521 sq ft", balcony: "398 sq ft", price: "₹ 4.35 - 4.39 Cr" },
    { type: "3 BHK Large", floor: "2nd to 23rd Floor", carpet: "1,259 sq ft", balcony: "330 sq ft", price: "₹ 3.79 - 3.83 Cr" },
    { type: "3 BHK Large", floor: "1st to 23rd Floor", carpet: "1,223 sq ft", balcony: "346 sq ft", price: "₹ 3.80 - 3.85 Cr" },
    { type: "3 BHK", floor: "2nd to 23rd Floor", carpet: "1,057 sq ft", balcony: "285 sq ft", price: "₹ 3.24 - 3.28 Cr" }
  ];

  return (
    <section id="pricing" className="relative z-10 py-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-[60vh]">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-display tracking-tight mb-4"
        >
          Pricing & <em className="not-italic text-white/50">Configuration</em>
        </motion.h2>
        <p className="text-muted-foreground tracking-widest text-sm uppercase">Phase 1 & 2 Pricing as on 29th June, 2026</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full overflow-x-auto"
      >
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/20 text-muted-foreground text-xs uppercase tracking-widest">
              <th className="py-6 px-4 font-normal">Type of Unit</th>
              <th className="py-6 px-4 font-normal">Floor Range</th>
              <th className="py-6 px-4 font-normal">Carpet Area</th>
              <th className="py-6 px-4 font-normal">Balcony Area</th>
              <th className="py-6 px-4 font-normal">Unit Price (PL-1)</th>
            </tr>
          </thead>
          <tbody>
            {units.map((unit, index) => (
              <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                <td className="py-6 px-4 font-display text-xl text-white/90 group-hover:text-white">{unit.type}</td>
                <td className="py-6 px-4 text-sm text-muted-foreground">{unit.floor}</td>
                <td className="py-6 px-4 text-sm text-white/70">{unit.carpet}</td>
                <td className="py-6 px-4 text-sm text-white/70">{unit.balcony}</td>
                <td className="py-6 px-4 font-display text-2xl text-white/90">{unit.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 text-xs text-muted-foreground flex flex-col gap-1">
          <p>* Each unit comes with a minimum of two designated car parking spaces.</p>
          <p>* GST will be applicable as per government norms.</p>
          <p>* Stamp duty and registration charges as applicable would be payable.</p>
        </div>
      </motion.div>
    </section>
  );
}

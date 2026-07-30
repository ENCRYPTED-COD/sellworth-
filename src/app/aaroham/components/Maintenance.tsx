"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Maintenance() {
  const iopCharges = [
    { type: "Duplex 1 (4 BHK)", ifms: "₹ 3,18,300", upfront: "₹ 2,99,966 + GST", doc: "", water: "₹ 45,835 + GST" },
    { type: "Duplex 2 (4 BHK)", ifms: "₹ 2,68,275", upfront: "₹ 2,52,822 + GST", doc: "", water: "₹ 38,632 + GST" },
    { type: "5 BHK", ifms: "₹ 3,01,725", upfront: "₹ 2,84,346 + GST", doc: "₹ 25,000 + GST", water: "₹ 43,448 + GST" },
    { type: "4 BHK (Large)", ifms: "₹ 2,49,525", upfront: "₹ 2,35,152 + GST", doc: "₹ 25,000 + GST", water: "₹ 35,932 + GST" },
    { type: "4 BHK", ifms: "₹ 1,85,475", upfront: "₹ 1,74,792 + GST", doc: "₹ 25,000 + GST", water: "₹ 26,708 + GST" },
    { type: "3 BHK Large (1259)", ifms: "₹ 1,53,900", upfront: "₹ 1,45,035 + GST", doc: "₹ 25,000 + GST", water: "₹ 22,162 + GST" },
    { type: "3 BHK Large (1223)", ifms: "₹ 1,51,200", upfront: "₹ 1,42,491 + GST", doc: "₹ 25,000 + GST", water: "₹ 21,773 + GST" },
    { type: "3 BHK", ifms: "₹ 1,30,125", upfront: "₹ 1,22,630 + GST", doc: "₹ 25,000 + GST", water: "₹ 18,738 + GST" }
  ];

  const monthly = [
    { type: "Duplex 1 (4 BHK)", carpet: "2613 sq ft", charge: "Rs. 24,997 + GST" },
    { type: "Duplex 2 (4 BHK)", carpet: "2099 sq ft", charge: "Rs. 21,069 + GST" },
    { type: "5 BHK", carpet: "2366 sq ft", charge: "Rs. 23,695 + GST" },
    { type: "4 BHK (Large)", carpet: "1919 sq ft", charge: "Rs. 19,596 + GST" },
    { type: "4 BHK", carpet: "1521 sq ft", charge: "Rs. 14,566 + GST" },
    { type: "3 BHK Large (1259)", carpet: "1259 sq ft", charge: "Rs. 12,086 + GST" },
    { type: "3 BHK Large (1223)", carpet: "1223 sq ft", charge: "Rs. 11,874 + GST" },
    { type: "3 BHK", carpet: "1057 sq ft", charge: "Rs. 10,219 + GST" }
  ];

  return (
    <section className="relative z-10 py-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-[80vh]">
      
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-display tracking-tight mb-4"
        >
          Maintenance & <em className="not-italic text-white/50">Possession</em>
        </motion.h2>
        <p className="text-muted-foreground tracking-widest text-sm uppercase max-w-2xl mx-auto">Estimated Charges as on 21st Jan 2026</p>
      </div>

      <div className="flex flex-col gap-16">
        
        {/* IOP Charges Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full overflow-x-auto liquid-glass p-8 md:p-12 rounded-[2rem]"
        >
          <h3 className="text-2xl font-display mb-8">Intimation of Possession (IOP) Charges</h3>
          <p className="text-sm text-muted-foreground mb-6">Payable within 30 days from the date of offer of Possession.</p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/20 text-muted-foreground text-xs uppercase tracking-widest">
                <th className="py-4 px-4 font-normal">Unit Type</th>
                <th className="py-4 px-4 font-normal">IFMS</th>
                <th className="py-4 px-4 font-normal">Upfront Maintenance (12 Months)</th>
                <th className="py-4 px-4 font-normal">Documentation</th>
                <th className="py-4 px-4 font-normal">Water Upfront</th>
              </tr>
            </thead>
            <tbody>
              {iopCharges.map((item, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-4 font-display text-lg text-white/90">{item.type}</td>
                  <td className="py-4 px-4 text-sm text-white/70">{item.ifms}</td>
                  <td className="py-4 px-4 text-sm text-white/70">{item.upfront}</td>
                  <td className="py-4 px-4 text-sm text-white/70">{item.doc || "As Applicable"}</td>
                  <td className="py-4 px-4 text-sm text-white/70">{item.water}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Monthly Maintenance Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full overflow-x-auto liquid-glass p-8 md:p-12 rounded-[2rem]"
        >
          <h3 className="text-2xl font-display mb-8">Budget for Monthly Maintenance Cost</h3>
          <p className="text-sm text-muted-foreground mb-6">Includes Security, Horticulture, STP, Repair & Live & Learn Programme.</p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/20 text-muted-foreground text-xs uppercase tracking-widest">
                <th className="py-4 px-4 font-normal">Unit Type</th>
                <th className="py-4 px-4 font-normal">Carpet Area</th>
                <th className="py-4 px-4 font-normal">Monthly Maintenance Charge</th>
              </tr>
            </thead>
            <tbody>
              {monthly.map((item, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-4 font-display text-lg text-white/90">{item.type}</td>
                  <td className="py-4 px-4 text-sm text-white/70">{item.carpet}</td>
                  <td className="py-4 px-4 text-sm text-white/70">{item.charge}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 text-xs text-muted-foreground flex flex-col gap-1">
             <p>* The above charges are tentative and may vary at the time of possession.</p>
             <p>* Does not include the cost of actual consumption of water, electricity, and gas.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

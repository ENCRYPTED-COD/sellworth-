"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function PaymentPlans() {
  const clp = [
    { milestone: "At the time of booking", demand: "10% of Total Cost" },
    { milestone: "45 days from booking", demand: "10% of Total Cost" },
    { milestone: "On casting of Ground floor", demand: "10% of Total Cost" },
    { milestone: "On casting of 6th floor", demand: "10% of Total Cost" },
    { milestone: "On casting of 12th floor", demand: "10% of Total Cost" },
    { milestone: "On casting of 18th floor", demand: "10% of Total Cost" },
    { milestone: "On casting of 23rd floor", demand: "10% of Total Cost" },
    { milestone: "On start of flat flooring", demand: "10% of Total Cost" },
    { milestone: "On application of OC", demand: "10% of Total Cost" },
    { milestone: "30 days before offer of possession", demand: "10% Of Total Cost + IOP Charges" }
  ];

  const plp = [
    { milestone: "At the time of booking", demand: "10% of Total Cost" },
    { milestone: "45 days from booking", demand: "10% of Total Cost" },
    { milestone: "On Casting of 23rd Floor", demand: "30% of Total Cost" },
    { milestone: "On Application of OC", demand: "40% of Total Cost" },
    { milestone: "30 days before offer of possession", demand: "10% Of Total Cost + IOP Charges" }
  ];

  return (
    <section className="relative z-10 py-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-[60vh]">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-display tracking-tight mb-4"
        >
          Payment <em className="not-italic text-white/50">Plans</em>
        </motion.h2>
        <p className="text-muted-foreground tracking-widest text-sm uppercase">Phase 1 & 2 Schedules</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 w-full">
        
        {/* CLP */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-1/2 liquid-glass p-8 md:p-12 rounded-[2rem]"
        >
          <h3 className="text-2xl font-display mb-8">Construction Link Plan (CLP)</h3>
          <div className="flex flex-col gap-4">
            {clp.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-4">
                <span className="text-sm text-white/70">{item.milestone}</span>
                <span className="text-sm font-display tracking-wide text-white mt-1 sm:mt-0">{item.demand}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PLP */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full lg:w-1/2 liquid-glass p-8 md:p-12 rounded-[2rem]"
        >
          <h3 className="text-2xl font-display mb-8">Possession Link Plan (PLP)</h3>
          <div className="flex flex-col gap-4">
            {plp.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/5 pb-4">
                <span className="text-sm text-white/70">{item.milestone}</span>
                <span className="text-sm font-display tracking-wide text-white mt-1 sm:mt-0">{item.demand}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/10">
             <p className="text-xs text-muted-foreground leading-relaxed">
              Handing over of every phase undergoes a set of standard process. It includes checking of unit, clearance of payment, preparation of registration documents, registration and possession of unit. This process normally takes 70 days time for all units to get handed over after the receipt of occupancy certificate.
             </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

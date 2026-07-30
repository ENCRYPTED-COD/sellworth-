"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Overview() {
  return (
    <section id="overview" className="relative z-10 py-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen flex items-center">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full">
        
        {/* Left Side: Editorial Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-display leading-[1.1] tracking-tight mb-8"
          >
            Designed for a Life <br />
            <em className="not-italic text-white/50">Beyond Expectations.</em>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-xl"
          >
            Ashiana Aaroham in Sector 80, Gurugram, introduces a paradigm of Curated Kid Centric Residences. Spanning sprawling acres of meticulously planned living spaces, it seamlessly combines luxury, tranquility, and endless possibilities for every generation.
          </motion.p>
        </div>
        
        {/* Right Side: Image & Facts */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full rounded-xl overflow-hidden liquid-glass p-2"
          >
            <img 
              src="/aaroham/images/site_layout_final.jpg" 
              alt="Ashiana Aaroham Site Layout Plan" 
              className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105 cursor-pointer rounded-lg"
              loading="lazy"
            />
          </motion.div>
          
          {/* Project Facts Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 pt-6 border-t border-white/10"
          >
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Developer</p>
              <p className="font-display text-2xl">Ashiana</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Project Type</p>
              <p className="font-display text-2xl">Kid Centric</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Configuration</p>
              <p className="font-display text-2xl">3, 4 & 5 BHK</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Location</p>
              <p className="font-display text-2xl">Sector 80</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Total Units</p>
              <p className="font-display text-2xl">542</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">RERA</p>
              <p className="font-display text-2xl">117 of 2025</p>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}

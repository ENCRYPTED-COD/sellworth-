"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Location() {
  const distances = [
    { place: "Karma Lakelands", time: "5 Min" },
    { place: "NH-48", time: "5 Min" },
    { place: "Reach - 3 Roads", time: "9 Min" },
    { place: "Dwarka Expressway", time: "10 Min" },
    { place: "Top Schools", time: "15 Min" },
    { place: "IGI Airport", time: "25 Min" }
  ];

  return (
    <section id="location" className="relative z-10 py-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen flex items-center">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full">
        
        {/* Left Side: Map Placeholder */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full aspect-square md:aspect-[4/3] rounded-sm overflow-hidden liquid-glass relative"
          >
            {/* Google Map placeholder - styling it elegantly */}
            <iframe 
              src="https://maps.google.com/maps?q=28.3649404,76.9653815&t=&z=15&ie=UTF8&iwloc=B&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
        
        {/* Right Side: Timeline Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-display leading-[0.95] tracking-tight mb-12"
          >
            Connected to Everything <br />
            <em className="not-italic text-muted-foreground">That Matters.</em>
          </motion.h2>
          
          <div className="flex flex-col gap-8 relative">
             {/* Timeline line */}
             <div className="absolute left-[5px] top-2 bottom-2 w-px bg-white/10 hidden md:block"></div>

            {distances.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                className="flex items-center gap-8 group"
              >
                <div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-white transition-colors duration-500 hidden md:block z-10"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full border-b border-white/5 pb-4">
                  <span className="text-xl font-display tracking-wide group-hover:text-white text-white/70 transition-colors">{item.place}</span>
                  <span className="text-sm text-muted-foreground mt-2 sm:mt-0 tracking-widest uppercase">{item.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

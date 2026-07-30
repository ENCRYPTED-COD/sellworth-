"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

export default function FloorPlans() {
  const [activeTab, setActiveTab] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const plans = [
    {
      id: "duplex1",
      name: "Duplex 1 (4 BHK + Powder + Servant)",
      carpetArea: "2,613 sq ft",
      builtUpArea: "3,800 sq ft", 
      image: "/aaroham/images/page10_img1.jpeg"
    },
    {
      id: "duplex2",
      name: "Duplex 2 (4 BHK + Powder + Servant)",
      carpetArea: "2,099 sq ft",
      builtUpArea: "3,100 sq ft", 
      image: "/aaroham/images/page10_img2.jpeg"
    },
    {
      id: "5bhk",
      name: "5 BHK",
      carpetArea: "2,366 sq ft",
      builtUpArea: "3,500 sq ft", 
      image: "/aaroham/images/page10_img1.jpeg"
    },
    {
      id: "4bhk-large",
      name: "4 BHK (Large)",
      carpetArea: "1,919 sq ft",
      builtUpArea: "2,800 sq ft", 
      image: "/aaroham/images/page14_img0.jpeg"
    },
    {
      id: "4bhk",
      name: "4 BHK",
      carpetArea: "1,521 sq ft",
      builtUpArea: "2,200 sq ft", 
      image: "/aaroham/images/page10_img2.jpeg"
    },
    {
      id: "3bhk-large-1",
      name: "3 BHK Large",
      carpetArea: "1,259 sq ft",
      builtUpArea: "1,850 sq ft", 
      image: "/aaroham/images/page12_img0.jpeg"
    },
    {
      id: "3bhk-large-2",
      name: "3 BHK Large (Compact)",
      carpetArea: "1,223 sq ft",
      builtUpArea: "1,750 sq ft", 
      image: "/aaroham/images/page12_img0.jpeg"
    },
    {
      id: "3bhk",
      name: "3 BHK",
      carpetArea: "1,057 sq ft",
      builtUpArea: "1,550 sq ft", 
      image: "/aaroham/images/page13_img0.jpeg"
    }
  ];

  return (
    <section id="floor-plans" className="relative z-10 py-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen flex flex-col justify-center">
      
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-display tracking-tight mb-4"
        >
          Spacious <em className="not-italic text-white/50">Sanctuaries</em>
        </motion.h2>
        <p className="text-muted-foreground tracking-widest text-sm uppercase">Curated Living Spaces</p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col items-center w-full"
      >
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-white/10 mb-12">
          {plans.map((plan, idx) => (
            <button
              key={plan.id}
              onClick={() => setActiveTab(idx)}
              className={`pb-4 text-sm font-medium transition-colors relative ${
                activeTab === idx ? "text-white" : "text-white/50 hover:text-white"
              }`}
            >
              {plan.name}
              {activeTab === idx && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="liquid-glass w-full max-w-5xl p-8 md:p-12 rounded-[2rem] flex flex-col md:flex-row gap-12 items-center">
          
          {/* Text Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-4xl font-display">{plans[activeTab].name}</h3>
            
            <div className="flex flex-col gap-6 mt-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Carpet Area</p>
                <p className="text-xl font-light">{plans[activeTab].carpetArea}</p>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Built-up Area</p>
                <p className="text-xl font-light">{plans[activeTab].builtUpArea}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <button 
                onClick={() => setIsLightboxOpen(true)}
                className="liquid-glass px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                View Full Plan <ArrowRight size={16} />
              </button>
              <button className="border border-white/20 px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white/5 transition-colors text-center">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Preview Image */}
          <div className="w-full md:w-1/2 aspect-square p-6 liquid-glass rounded-[2rem] flex items-center justify-center cursor-pointer group" onClick={() => setIsLightboxOpen(true)}>
             <img 
              src={plans[activeTab].image} 
              alt={plans[activeTab].name} 
              className="w-full h-full object-contain transition-transform duration-500" 
              loading="lazy" 
            />
          </div>

        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#000] flex items-center justify-center p-6 md:p-12"
          >
            <button 
              onClick={() => setIsLightboxOpen(false)} 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-10"
            >
              <X size={32} strokeWidth={1} />
            </button>
            <img 
              src={plans[activeTab].image} 
              alt="Fullscreen Floor Plan" 
              className="max-w-full max-h-full object-contain" 
            />
          </motion.div>
        )}
      </AnimatePresence>
      
    </section>
  );
}

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, Trees, Trophy, ShieldCheck, Heart } from 'lucide-react';

export default function WhyAaroham() {
  const reasons = [
    {
      icon: <Users strokeWidth={1} size={32} className="text-white/60 group-hover:text-white transition-colors duration-500" />,
      title: "Senior Friendly Community",
      description: "Designed carefully ensuring multi-generational comfort and accessibility."
    },
    {
      icon: <Building2 strokeWidth={1} size={32} className="text-white/60 group-hover:text-white transition-colors duration-500" />,
      title: "The Club",
      description: "A monumental space reserved for recreation, fitness, and gatherings."
    },
    {
      icon: <Trees strokeWidth={1} size={32} className="text-white/60 group-hover:text-white transition-colors duration-500" />,
      title: "Landscaped Greens",
      description: "Over two-thirds of the property is dedicated to open, green, safe spaces."
    },
    {
      icon: <Trophy strokeWidth={1} size={32} className="text-white/60 group-hover:text-white transition-colors duration-500" />,
      title: "Sports Facilities",
      description: "International standard courts for tennis, squash, and pickleball."
    },
    {
      icon: <ShieldCheck strokeWidth={1} size={32} className="text-white/60 group-hover:text-white transition-colors duration-500" />,
      title: "Smart Security",
      description: "Smartly planned vehicular movement guaranteeing a safe, traffic-free pod."
    },
    {
      icon: <Heart strokeWidth={1} size={32} className="text-white/60 group-hover:text-white transition-colors duration-500" />,
      title: "Wellness Spaces",
      description: "Yoga lawns and Miyawaki forests to rejuvenate the mind and body."
    }
  ];

  return (
    <section className="relative z-10 py-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-[80vh] flex items-center">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full">
        
        {/* Left Side: Editorial Text */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-display leading-[0.95] tracking-tight mb-8"
          >
            Crafted Around <br />
            <em className="not-italic text-muted-foreground">Every Generation.</em>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed max-w-lg"
          >
            Because freedom isn’t built merely in square feet, but in the spaces thoughtfully curated between them. We have woven an environment where every unsteady step leads to an unstoppable journey.
          </motion.p>
        </div>
        
        {/* Right Side: Features List (No Cards) */}
        <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pt-8 lg:pt-0">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * index }}
              className="group flex flex-col gap-4 cursor-default"
            >
              <div className="w-16 h-16 flex items-center">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-display tracking-wide">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

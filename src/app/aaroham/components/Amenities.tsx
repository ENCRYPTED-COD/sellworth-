"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Waves, Dumbbell, Flower2, BookOpen, 
  Gamepad2, Music, Baby, PersonStanding, 
  TreePine, Flame 
} from 'lucide-react';

export default function Amenities() {
  const amenities = [
    { icon: <Waves strokeWidth={1} />, title: "Infinity Swimming Pool", desc: "With an attached kid's pool area." },
    { icon: <Dumbbell strokeWidth={1} />, title: "Indoor Gym & Wellness", desc: "Fully equipped for your daily fitness regime." },
    { icon: <Flower2 strokeWidth={1} />, title: "Yoga Deck", desc: "Meditation lawns and open spaces." },
    { icon: <BookOpen strokeWidth={1} />, title: "Reading Hub", desc: "Quiet spaces for deep thinkers." },
    { icon: <Gamepad2 strokeWidth={1} />, title: "Indoor Games", desc: "Squash courts, badminton and table tennis." },
    { icon: <Music strokeWidth={1} />, title: "Music & Dance Room", desc: "Nurturing creativity and performance." },
    { icon: <Baby strokeWidth={1} />, title: "Playtopia", desc: "Children's adventure zone." },
    { icon: <PersonStanding strokeWidth={1} />, title: "Jogging Track", desc: "Surrounded by Miyawaki forests." },
    { icon: <TreePine strokeWidth={1} />, title: "Amphitheatre", desc: "Open-air entertainment space." },
    { icon: <Flame strokeWidth={1} />, title: "Multipurpose Hall", desc: "For grand community celebrations." }
  ];

  return (
    <section id="amenities" className="relative z-10 py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
      
      {/* Centered Heading */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-display tracking-tight"
        >
          Amenities
        </motion.h2>
      </div>

      {/* Large Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full h-[50vh] md:h-[70vh] rounded-sm overflow-hidden mb-24"
      >
        <img 
          src="/aaroham/images/page4_img0.jpeg" 
          alt="The Club Amenities" 
          className="w-full h-full object-cover transition-transform duration-1000"
          loading="lazy"
        />
      </motion.div>

      {/* Amenities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-10">
        {amenities.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
            className="flex flex-col gap-4 group"
          >
            <div className="w-12 h-12 text-white/50 group-hover:text-white transition-colors duration-500">
              {React.cloneElement(item.icon, { size: 36 })}
            </div>
            <h4 className="text-xl font-display tracking-wide group-hover:text-white transition-colors text-white/90">{item.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function DevelopersPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  const developers = [
    { 
      name: "DLF", 
      story: "India's largest publicly listed real estate company. Defining the Gurgaon skyline for decades with iconic residential and commercial developments.",
      projects: ["The Camellias", "The Arbour", "Cyber City"]
    },
    { 
      name: "M3M", 
      story: "A visionary developer known for delivering ultra-luxury residential and premium commercial projects with unparalleled architectural brilliance.",
      projects: ["Trump Towers", "M3M Golfestate", "M3M Urbana"]
    },
    { 
      name: "Emaar", 
      story: "Global pioneers in master-planned communities, bringing world-class design and international lifestyle standards to Indian real estate.",
      projects: ["Emaar DigiHomes", "Palm Drive", "Marbella"]
    },
    { 
      name: "Godrej Properties", 
      story: "Combining a 125-year legacy of excellence and trust with a commitment to cutting-edge design and technology.",
      projects: ["Godrej Zenith", "Godrej 101", "Godrej Icon"]
    },
    { 
      name: "Smartworld", 
      story: "A new-age real estate brand reimagining urban living with innovative layouts, premium amenities, and transparent practices.",
      projects: ["Smartworld One DXP", "Smartworld Gems", "Smartworld Orchard"]
    },
    { 
      name: "Signature Global", 
      story: "Delivering quality and excellence with an emphasis on sustainable green homes and modern lifestyle amenities.",
      projects: ["Titanium SPR", "Signature Global City", "Twin Towers"]
    },
    { 
      name: "Elan", 
      story: "Renowned for developing benchmark commercial and luxury retail destinations that redefine the modern shopping experience.",
      projects: ["Elan Epic", "Elan Town Centre", "Elan The Presidential"]
    },
    { 
      name: "Tata Housing", 
      story: "A Tata Enterprise bringing the group's legendary trust, transparent corporate governance, and commitment to quality.",
      projects: ["Tata Primanti", "Tata Raisina Residency", "La Vida"]
    }
  ];

  return (
    <div className="bg-luxury-ivory min-h-screen text-luxury-black">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto border-b border-luxury-black/10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center max-w-3xl mx-auto">
          <motion.div variants={itemVariants} className="flex justify-center items-center space-x-4 mb-6">
            <span className="h-[1px] w-8 bg-luxury-gold" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-luxury-gold uppercase">Partners</span>
            <span className="h-[1px] w-8 bg-luxury-gold" />
          </motion.div>
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-6xl text-luxury-black tracking-wide mb-6">
            Luxury Partner Showcase
          </motion.h1>
          <motion.p variants={itemVariants} className="font-sans text-sm md:text-lg text-luxury-black/60 font-light tracking-wide leading-relaxed">
            We collaborate exclusively with India&apos;s most reputable and visionary developers to curate an exceptional portfolio of landmark addresses.
          </motion.p>
        </motion.div>
      </section>

      {/* Developers Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {developers.map((dev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group border border-luxury-black/10 hover:border-luxury-gold/50 p-8 md:p-12 transition-all duration-500 bg-white"
            >
              <h2 className="font-serif text-3xl mb-4 group-hover:text-luxury-gold transition-colors">{dev.name}</h2>
              <p className="font-sans text-sm text-luxury-black/60 font-light leading-relaxed mb-8 h-20">
                {dev.story}
              </p>
              
              <div>
                <h4 className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase mb-4">Featured Projects</h4>
                <ul className="space-y-2">
                  {dev.projects.map((project, pIdx) => (
                    <li key={pIdx} className="font-sans text-sm font-medium text-luxury-black flex items-center space-x-2">
                      <span className="w-1 h-1 bg-luxury-gold/50 rounded-full" />
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

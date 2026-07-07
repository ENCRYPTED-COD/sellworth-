"use client";

import { motion } from "framer-motion";

export default function ResidencesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
    visible: {
      y: 0,
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  const projects = [
    { name: "The Camellias", developer: "DLF", location: "Golf Course Road", config: "4, 5, 6 BHK & Penthouses", price: "₹35 Cr Onwards", img: "/dlf-the-camellias.jpg" },
    { name: "Arbour", developer: "DLF", location: "Sector 63, Gurugram", config: "4 BHK Ultra Luxury", price: "₹8 Cr Onwards", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
    { name: "Trump Towers", developer: "M3M", location: "Sector 65, Gurugram", config: "3, 4 BHK Residences", price: "₹12 Cr Onwards", img: "https://images.unsplash.com/photo-1600607687931-cebf10cbdfcb?auto=format&fit=crop&q=80&w=800" },
  ];

  const categories = ["Ultra Luxury Apartments", "Golf Residences", "Penthouses", "Independent Floors", "New Launch Projects"];

  return (
    <div className="bg-luxury-ivory min-h-screen text-luxury-black">
      {/* Premium Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-luxury-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src="https://images.unsplash.com/photo-1600607687644-aac4c156628c?auto=format&fit=crop&q=80&w=1920" alt="Residences Hero" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent pointer-events-none" />
        
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 text-center px-6">
          <motion.div variants={itemVariants} className="flex justify-center items-center space-x-4 mb-6">
            <span className="h-[1px] w-8 bg-luxury-gold" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-luxury-gold uppercase">Portfolio</span>
            <span className="h-[1px] w-8 bg-luxury-gold" />
          </motion.div>
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl text-luxury-ivory tracking-wide mb-6">
            Exceptional Residences
          </motion.h1>
          <motion.p variants={itemVariants} className="font-sans text-sm md:text-lg text-luxury-ivory/70 font-light tracking-widest uppercase">
            Curated for Distinctive Living
          </motion.p>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 border-t border-b border-luxury-black/10 py-12">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="text-center group cursor-pointer"
            >
              <h3 className="font-sans text-xs md:text-sm tracking-widest text-luxury-black/60 group-hover:text-luxury-gold transition-colors uppercase">
                {cat}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-luxury-black mb-4">Signature Collection</h2>
          <p className="font-sans text-sm text-luxury-black/60 tracking-widest uppercase">The most coveted addresses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-luxury-black">
                <img src={project.img} alt={project.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                <div className="absolute top-4 left-4 bg-luxury-black/80 px-3 py-1 font-mono text-[9px] text-luxury-gold tracking-widest uppercase">
                  {project.developer}
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-2">{project.name}</h3>
              <p className="font-mono text-xs text-luxury-black/50 tracking-widest uppercase mb-4">{project.location}</p>
              
              <div className="space-y-2 mb-6 border-l border-luxury-gold/30 pl-4">
                <p className="font-sans text-sm text-luxury-black/70">{project.config}</p>
                <p className="font-sans text-sm font-semibold text-luxury-black">{project.price}</p>
              </div>

              <button 
                onClick={() => window.dispatchEvent(new Event("open-whatsapp-consultation"))}
                className="mt-auto self-start font-mono text-[10px] tracking-[0.2em] uppercase border-b border-luxury-gold text-luxury-black hover:text-luxury-gold transition-colors pb-1"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-luxury-black text-luxury-ivory text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto px-6"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Find Your Perfect Address</h2>
          <p className="font-sans text-luxury-ivory/60 mb-12 font-light">Allow our advisory team to curate a bespoke selection of properties matching your exact requirements.</p>
          <button
            onClick={() => window.dispatchEvent(new Event("open-whatsapp-consultation"))}
            className="font-mono text-xs tracking-[0.2em] text-luxury-black bg-luxury-gold hover:bg-luxury-gold/90 px-8 py-4 uppercase font-bold transition-colors"
          >
            Start Conversation
          </button>
        </motion.div>
      </section>
    </div>
  );
}

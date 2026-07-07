"use client";

import { motion } from "framer-motion";

export default function ReelShowcase() {
  const reels = [
    "https://www.instagram.com/p/DECf6G8zfER/embed",
    "https://www.instagram.com/p/DZU6q0HKhgA/embed",
    "https://www.instagram.com/p/DZNKcrtqKAD/embed"
  ];

  return (
    <section className="relative py-24 bg-luxury-black text-luxury-ivory overflow-hidden border-t border-luxury-ivory/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs tracking-[0.4em] text-luxury-gold uppercase block">
            Featured Highlights
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide font-normal">
            Signature <span className="italic font-light text-luxury-gold">Showcases.</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-luxury-ivory/60 font-light tracking-wide leading-relaxed">
            Explore our curated insights and walkthroughs of premium Gurgaon developments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {reels.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="w-full max-w-[340px] aspect-[9/16] bg-luxury-charcoal/50 rounded-xl overflow-hidden border border-luxury-gold/20 relative shadow-2xl"
            >
              <iframe
                src={src}
                className="w-full h-full absolute inset-0"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

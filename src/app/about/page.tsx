"use client";

import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section id="story" className="relative py-24 md:py-36 bg-luxury-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Editorial Heading & Visual Accent */}
          <div className="lg:col-span-6 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="space-y-4"
            >
              <span className="font-mono text-xs tracking-[0.4em] text-luxury-gold uppercase block">
                Who We Are
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-black tracking-wide leading-tight">
                We believe in <br />
                well done over <br className="hidden md:inline" />
                <span className="italic font-light text-luxury-bronze">well said.</span>
              </h2>
            </motion.div>

            {/* Decorative minimalist blueprint-like line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] bg-luxury-gold/30 origin-left"
            />

            {/* Quote details */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1.0 }}
              className="font-serif italic text-lg text-luxury-charcoal/80 leading-relaxed max-w-lg"
            >
              &ldquo;We stepped into the real estate industry to carve a niche for ourselves as a reliable consulting firm that works on customer-first policies.&rdquo;
            </motion.p>
          </div>

          {/* Right Side: Narrative Copy & Image Frame */}
          <div className="lg:col-span-6 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.2 }}
              className="space-y-8 font-sans text-sm md:text-base text-luxury-charcoal/80 font-light tracking-wide leading-relaxed"
            >
              <p>
                We are Sellworth, a premier real estate consulting firm. Our primary objective has always been providing our customers with reliable and valuable information, best options, amazing deals, and practical solutions. Our reliable suggestions and top-of-the-line services make the exhausting process of selling or buying a property as easy as it can get.
              </p>
              <p>
                When a customer seeks advice, we understand there’s a lot riding on us. Each and every suggestion impacts the life of our customer to a great extent. Sellworth has touched the lives of thousands of people by helping them choose the right property at the right time to create the right impact.
              </p>
            </motion.div>

            {/* Architectural visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative aspect-[16/9] w-full overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-contain bg-no-repeat bg-center bg-white hover:scale-105 transition-transform duration-1000"
                style={{
                  backgroundImage: `url('/founder-amrit-pal.jpg')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-ivory/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 right-4 flex flex-col items-end bg-luxury-black/60 px-3 py-2">
                <span className="font-serif italic text-lg text-luxury-gold">AMRIT PAL SINGH</span>
                <span className="font-mono text-[9px] tracking-widest text-luxury-ivory/80 uppercase mt-1">Founder, Sellworth</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
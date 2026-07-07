"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-brand-wine leading-tight">
              A Community Crafted for Your Golden Years
            </h2>
            <div className="w-20 h-1 bg-brand-gold rounded-full" />
            <p className="text-lg text-gray-600 leading-relaxed pt-4">
              At Estate 361 by Max Estates, managed by ANTARA, we believe that senior living should be a celebration of life. We've created an ecosystem where healthcare, hospitality, and real estate merge seamlessly to offer an unmatched lifestyle.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience the perfect balance of independence and care, surrounded by like-minded peers in a secure, vibrant environment in the heart of Gurugram.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="border-l-2 border-brand-gold pl-4">
                <div className="text-3xl font-heading text-brand-wine font-bold">24/7</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">Care & Security</div>
              </div>
              <div className="border-l-2 border-brand-gold pl-4">
                <div className="text-3xl font-heading text-brand-wine font-bold">100%</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider mt-1">Peace of Mind</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://www.max-antara.co.in/max-antara-noida/img/about-img.png')" }}
            />
            {/* Elegant inner border */}
            <div className="absolute inset-4 border border-white/30 rounded-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

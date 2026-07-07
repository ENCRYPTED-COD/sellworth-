"use client";

import { motion } from "framer-motion";
import LeadForm from "./LeadForm";
import { ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 lg:py-0">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/40 z-10" />
        {/* Mock background image - in production replace with high-res property render */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://www.max-antara.co.in/max-antara-noida/images/banner1.jpg')" }}
        />
      </div>

      <div className="container mx-auto px-4 z-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Copy & Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6 max-w-xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/50 text-brand-gold text-sm font-medium backdrop-blur-sm shadow-lg">
              Estate 361 • Sector 36A, Dwarka Expressway
            </div>
            
            <h1 className="font-heading text-5xl lg:text-7xl leading-tight">
              Gift Your Parents the <br className="hidden md:block" />
              <span className="text-brand-gold">Golden Years They Deserve</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-200 font-light leading-relaxed">
              A meticulously managed luxury senior living ecosystem by ANTARA in Gurugram. Where professional healthcare meets resort-style living.
            </p>

            {/* Visual Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-3 flex items-center space-x-3 border border-white/20"
              >
                <ShieldCheck className="w-8 h-8 text-brand-gold flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold">100% Secure</div>
                  <div className="text-xs text-gray-300">Gated Community</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-3 flex items-center space-x-3 border border-white/20"
              >
                <HeartHandshake className="w-8 h-8 text-brand-gold flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold">24/7 Care</div>
                  <div className="text-xs text-gray-300">Medical Assistance</div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-3 flex items-center space-x-3 border border-white/20 col-span-2"
              >
                <CheckCircle2 className="w-8 h-8 text-brand-gold flex-shrink-0" />
                <div>
                  <div className="text-sm font-semibold">Managed by ANTARA (Max Group)</div>
                  <div className="text-xs text-gray-300">India's most trusted senior living brand</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Sticky Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <LeadForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

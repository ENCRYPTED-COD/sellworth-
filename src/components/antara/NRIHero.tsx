"use client";

import { motion } from "framer-motion";
import NRILeadForm from "./NRILeadForm";

export default function NRIHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-dark pt-20 lg:pt-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://d3cit1div2ht9e.cloudfront.net/ba613ab2-5936-463b-b362-7708ca4b3778-1771002364903.jpg')" }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-white pt-12 lg:pt-0"
          >
            <div className="inline-block bg-brand-gold/20 text-brand-gold px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-6 border border-brand-gold/30">
              Exclusive NRI Consultation
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              I live abroad. <br/>
              <span className="text-brand-gold font-medium italic">Who will take care of my parents in India?</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Partner with ANTARA to provide your parents with world-class healthcare, 24/7 security, and a vibrant community—giving you absolute peace of mind, no matter how many miles away you are.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-200">
                <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span>24/7 Global Medical Command Center</span>
              </div>
              <div className="hidden sm:block text-brand-gold">•</div>
              <div className="flex items-center space-x-2 text-sm text-gray-200">
                <div className="w-2 h-2 rounded-full bg-brand-gold" />
                <span>Max Healthcare Affiliation</span>
              </div>
            </div>
          </motion.div>

          {/* Lead Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-lg"
          >
            <NRILeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

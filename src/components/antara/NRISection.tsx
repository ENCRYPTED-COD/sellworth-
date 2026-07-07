"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe2, ArrowRight } from "lucide-react";

export default function NRISection() {
  return (
    <section className="py-24 bg-brand-wine relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 transform skew-x-12 translate-x-32" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-white"
          >
            <div className="inline-flex items-center space-x-2 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-8 border border-brand-gold/30">
              <Globe2 className="w-4 h-4" />
              <span>International Citizens</span>
            </div>
            
            <h2 className="font-heading text-4xl lg:text-5xl font-semibold mb-6">
              Living Abroad? <br />
              <span className="text-brand-gold">Secure Their Future in India.</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              We understand the anxiety of managing your parents' healthcare from thousands of miles away. Discover our specialized NRI remote care services, designed to give you absolute peace of mind while they enjoy a premium, independent lifestyle.
            </p>

            <Link 
              href="/senior-living/nri"
              className="inline-flex items-center space-x-3 bg-brand-gold hover:bg-white text-brand-dark font-semibold px-8 py-4 rounded-md transition-all transform hover:scale-105 shadow-xl group"
            >
              <span>Explore Dedicated NRI Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-gold/20">
              <div className="absolute inset-0 bg-brand-dark/20 z-10 mix-blend-multiply" />
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://d3cit1div2ht9e.cloudfront.net/ba613ab2-5936-463b-b362-7708ca4b3778-1771002364903.jpg')" }}
              />
              
              {/* Floating Trust Badge */}
              <div className="absolute bottom-8 left-8 z-20 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-xl border border-white/20">
                <p className="text-brand-dark font-heading font-bold text-lg mb-1">Global Medical Standard</p>
                <div className="flex items-center space-x-2 text-sm text-gray-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>24/7 Command Center</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

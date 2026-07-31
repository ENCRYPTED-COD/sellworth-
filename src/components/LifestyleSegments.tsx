"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LifestyleSegments() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] flex flex-col md:flex-row overflow-hidden border-y border-luxury-ivory/10">
      
      {/* Senior Living Half */}
      <Link href="/senior-living" className="relative flex-1 group block overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_115139_0fc6bd3d-3631-4d26-ab9b-28293887dcc9.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay - Lighter for more brightness */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent transition-colors duration-500" />
        
        {/* Content */}
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase mb-3 block drop-shadow-md">
              Dedicated Ecosystem
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-luxury-ivory mb-4 drop-shadow-lg">
              Senior Living Portfolios
            </h3>
            <p className="font-sans text-sm text-luxury-ivory/90 max-w-sm font-light leading-relaxed mb-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 drop-shadow-md">
              Discover active, managed healthcare environments designed for absolute peace of mind and community engagement.
            </p>
            <div className="inline-flex items-center space-x-2 text-luxury-gold border-b border-luxury-gold pb-1 text-xs font-mono tracking-widest uppercase drop-shadow-md">
              <span>Explore Senior Living</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>
        </div>
      </Link>

      {/* Middle Divider (Desktop) */}
      <div className="hidden md:block w-[1px] bg-luxury-ivory/20 z-10" />

      {/* Kid Centric Half */}
      <Link href="/aaroham" className="relative flex-1 group block overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_171521_25968ba2-b594-4b32-aab7-f6b69398a6fa.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay - Lighter for more brightness */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent transition-colors duration-500" />
        
        {/* Content */}
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase mb-3 block drop-shadow-md">
              Nurturing Environments
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-luxury-ivory mb-4 drop-shadow-lg">
              Kid-Centric Residences
            </h3>
            <p className="font-sans text-sm text-luxury-ivory/90 max-w-sm font-light leading-relaxed mb-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 drop-shadow-md">
              Homes engineered around child development, premium learning facilities, and safe community spaces.
            </p>
            <div className="inline-flex items-center space-x-2 text-luxury-gold border-b border-luxury-gold pb-1 text-xs font-mono tracking-widest uppercase drop-shadow-md">
              <span>Explore Kid Centric</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </motion.div>
        </div>
      </Link>

    </section>
  );
}

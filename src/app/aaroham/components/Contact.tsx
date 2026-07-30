"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Phone, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-[80vh] flex items-center">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 w-full">
        
        {/* Left Side: Contact Form */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="liquid-glass p-8 md:p-16 rounded-[2rem] flex flex-col gap-8"
          >
            <h2 className="text-4xl md:text-5xl font-display">Begin Your Journey.</h2>
            
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Name</label>
                <input type="text" className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-white transition-colors" placeholder="Enter your full name" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Phone</label>
                <input type="tel" className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-white transition-colors" placeholder="Enter your phone number" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Email</label>
                <input type="email" className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-white transition-colors" placeholder="Enter your email address" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-white/50">Message</label>
                <textarea rows={3} className="bg-transparent border-b border-white/20 pb-2 text-white outline-none focus:border-white transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              
              <a href="tel:+919650400647" className="liquid-glass rounded-full px-8 py-4 text-sm uppercase tracking-widest text-foreground hover:scale-[1.03] transition-transform cursor-pointer mt-4 flex justify-between items-center">
                Book a Site Visit <ArrowRight size={16} />
              </a>
            </form>
          </motion.div>
        </div>
        
        {/* Right Side: Contact Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-display mb-4">Sales Gallery</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Ashiana Aaroham, Sector 80,<br />
              Gurugram, Haryana, India.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <a href="https://maps.app.goo.gl/jkitpC1V2AREay3f7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors text-left group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                <MapPin size={20} strokeWidth={1} />
              </div>
              <span className="text-sm tracking-widest uppercase">Open in Google Maps</span>
            </a>
            <a href="https://wa.me/919650400647" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors text-left group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                <MessageCircle size={20} strokeWidth={1} />
              </div>
              <span className="text-sm tracking-widest uppercase">Chat on WhatsApp</span>
            </a>
            <a href="tel:+919650400647" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors text-left group">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                <Phone size={20} strokeWidth={1} />
              </div>
              <span className="text-sm tracking-widest uppercase">Request a Callback</span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

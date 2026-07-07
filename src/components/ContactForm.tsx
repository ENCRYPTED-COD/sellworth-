"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Calendar, Phone } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    investmentInterest: "5-15",
    preferredLocation: "golf-course-road",
    message: ""
  });

  const investmentTiers = [
    { value: "2-5", label: "₹2 Cr – ₹5 Cr" },
    { value: "5-15", label: "₹5 Cr – ₹15 Cr" },
    { value: "15-50", label: "₹15 Cr – ₹50 Cr" },
    { value: "50-100", label: "₹50 Cr – ₹100 Cr+" }
  ];

  const locations = [
    { value: "golf-course-road", label: "Golf Course Road" },
    { value: "cyber-city", label: "Cyber City" },
    { value: "dwarka-expressway", label: "Dwarka Expressway" },
    { value: "spr-road", label: "SPR Road" },
    { value: "new-gurgaon", label: "New Gurgaon" }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedTier = investmentTiers.find((t) => t.value === formData.investmentInterest)?.label || formData.investmentInterest;
    const selectedLoc = locations.find((l) => l.value === formData.preferredLocation)?.label || formData.preferredLocation;
    
    // Construct message
    const message = `Hello Sellworth, I would like to schedule a personal consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nInvestment Range: ${selectedTier}\nPreferred Location: ${selectedLoc}\nMessage: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919999266369?text=${encodedMessage}`; // Lead advisor acquisitions line
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-luxury-charcoal text-luxury-ivory overflow-hidden border-t border-luxury-gold/15">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Private Office details */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-4">
              <span className="font-mono text-xs tracking-[0.4em] text-luxury-gold uppercase block">
                Acquisitions Desk
              </span>
              <h2 className="font-serif text-4xl md:text-5xl tracking-wide leading-tight">
                Begin Your <br />
                Property <span className="italic text-luxury-gold font-light" style={{ fontFamily: "var(--font-serif-alt)" }}>Journey.</span>
              </h2>
              <p className="font-sans text-sm text-luxury-ivory/60 font-light tracking-wide leading-relaxed max-w-sm">
                Enquire below to coordinate a confidential, one-on-one session with our senior real estate underwriters.
              </p>
            </div>

            <div className="space-y-8 pt-4">
              {/* Point 1 */}
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 border border-luxury-gold/30 flex items-center justify-center bg-luxury-black/35">
                  <Phone className="w-4 h-4 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase">
                    Direct Advisory Desk
                  </h4>
                  <p className="font-serif text-base text-luxury-ivory mt-1">
                    +91 99992 66369
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 border border-luxury-gold/30 flex items-center justify-center bg-luxury-black/35">
                  <Calendar className="w-4 h-4 text-luxury-gold" />
                </div>
                <div>
                  <h4 className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase">
                    Headquarters
                  </h4>
                  <a 
                    href="https://maps.app.goo.gl/Wu4nasaGDA1bv4WU8" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-serif text-base text-luxury-ivory hover:text-luxury-gold transition-colors mt-1 block decoration-luxury-gold/30 hover:underline"
                  >
                    32 Edmonton mall, The Bristol Hotel,<br />
                    MG Road, Gurugram
                  </a>
                </div>
              </div>
            </div>

            {/* Quote details */}
            <div className="border-l border-luxury-gold/30 pl-6 py-2">
              <p className="font-serif italic text-xs text-luxury-ivory/50 leading-relaxed">
                &ldquo;All client inquiries are handled with absolute confidentiality. Details are never sold or shared with external developer lists.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Contact Form */}
          <div className="lg:col-span-7 bg-luxury-black/45 border border-luxury-ivory/5 p-8 md:p-12 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)]">
            <form onSubmit={handleWhatsAppRedirect} className="space-y-8">
              
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="font-mono text-[9px] tracking-widest text-luxury-gold/70 uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="bg-transparent border-b border-luxury-ivory/20 focus:border-luxury-gold py-3 text-sm focus:outline-none transition-colors duration-300 font-sans tracking-wide text-luxury-ivory placeholder-luxury-ivory/20"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="phone" className="font-mono text-[9px] tracking-widest text-luxury-gold/70 uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-transparent border-b border-luxury-ivory/20 focus:border-luxury-gold py-3 text-sm focus:outline-none transition-colors duration-300 font-sans tracking-wide text-luxury-ivory placeholder-luxury-ivory/20"
                  />
                </div>
              </div>

              {/* Row 2: Investment interest dropdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="investmentInterest" className="font-mono text-[9px] tracking-widest text-luxury-gold/70 uppercase">
                    Investment Target
                  </label>
                  <select
                    id="investmentInterest"
                    name="investmentInterest"
                    value={formData.investmentInterest}
                    onChange={handleChange}
                    className="bg-luxury-black border-b border-luxury-ivory/20 focus:border-luxury-gold py-3 text-sm focus:outline-none transition-colors duration-300 font-sans tracking-wide text-luxury-ivory"
                  >
                    {investmentTiers.map((tier) => (
                      <option key={tier.value} value={tier.value} className="bg-luxury-black text-luxury-ivory">
                        {tier.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="preferredLocation" className="font-mono text-[9px] tracking-widest text-luxury-gold/70 uppercase">
                    Preferred Location
                  </label>
                  <select
                    id="preferredLocation"
                    name="preferredLocation"
                    value={formData.preferredLocation}
                    onChange={handleChange}
                    className="bg-luxury-black border-b border-luxury-ivory/20 focus:border-luxury-gold py-3 text-sm focus:outline-none transition-colors duration-300 font-sans tracking-wide text-luxury-ivory"
                  >
                    {locations.map((loc) => (
                      <option key={loc.value} value={loc.value} className="bg-luxury-black text-luxury-ivory">
                        {loc.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="font-mono text-[9px] tracking-widest text-luxury-gold/70 uppercase">
                  Confidential Message / Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Outline any specific configurations or developer preferences..."
                  className="bg-transparent border-b border-luxury-ivory/20 focus:border-luxury-gold py-3 text-sm focus:outline-none transition-colors duration-300 font-sans tracking-wide text-luxury-ivory placeholder-luxury-ivory/20 resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-4 bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black font-sans font-bold text-xs tracking-[0.25em] py-5 uppercase transition-colors duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Initiate WhatsApp Consultation</span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

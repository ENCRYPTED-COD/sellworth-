"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Plus } from "lucide-react";

export default function WhatsAppConsultation() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    investment: "5-15",
    location: "golf-course-road"
  });

  useEffect(() => {
    // Listen for custom trigger event from CTA buttons on other pages/components
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-whatsapp-consultation", handleOpen);
    
    // Auto-open logic on scroll (halfway down the page)
    const handleScroll = () => {
      const autoOpenCount = parseInt(sessionStorage.getItem("sellworth_auto_popup_count") || "0");
      if (autoOpenCount > 0) return; // Only trigger the FIRST one via scroll

      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      
      // Open when user scrolls 50% down the page
      if (totalHeight > 0 && scrollPosition > totalHeight * 0.5) {
        setIsOpen(true);
        sessionStorage.setItem("sellworth_auto_popup_count", "1");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("open-whatsapp-consultation", handleOpen);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Timer for the second pop-up
  useEffect(() => {
    if (!isOpen) {
      const count = parseInt(sessionStorage.getItem("sellworth_auto_popup_count") || "0");
      if (count === 1) {
        // Schedule the second pop-up in 30 seconds
        const timer = setTimeout(() => {
          const currentCount = parseInt(sessionStorage.getItem("sellworth_auto_popup_count") || "0");
          if (currentCount === 1) {
            setIsOpen(true);
            sessionStorage.setItem("sellworth_auto_popup_count", "2");
          }
        }, 30000); // 30 seconds
        
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const investmentLabels: Record<string, string> = {
      "2-5": "₹2 Cr – ₹5 Cr",
      "5-15": "₹5 Cr – ₹15 Cr",
      "15-50": "₹15 Cr – ₹50 Cr",
      "50-100": "₹50 Cr – ₹100 Cr+"
    };

    const locationLabels: Record<string, string> = {
      "golf-course-road": "Golf Course Road",
      "cyber-city": "Cyber City",
      "dwarka-expressway": "Dwarka Expressway",
      "spr-road": "SPR Road",
      "new-gurgaon": "New Gurgaon"
    };

    const selectedInv = investmentLabels[formData.investment] || formData.investment;
    const selectedLoc = locationLabels[formData.location] || formData.location;

    // Generate formatted message matching the required structure
    const message = `Hello Sellworth Team,\nI am interested in a private real estate consultation.\n\nName: ${formData.name}\nInvestment Interest: ${selectedInv}\nPreferred Location: ${selectedLoc}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919650400647?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    sessionStorage.setItem("sellworth_auto_popup_count", "99"); // Prevent future auto-pops after submission
    setIsOpen(false); // Close popup after submit
  };

  return (
    <>
      {/* Floating Toggle Button & Speed Dial */}
      <div className="fixed bottom-12 right-6 md:right-12 z-50 group">
        {/* Speed Dial Menu */}
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-4 flex flex-col items-end space-y-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            
            {/* YouTube */}
            <a href="https://www.youtube.com/@sellworth" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-luxury-black/90 p-2 pr-4 rounded-full border border-luxury-gold/20 shadow-xl backdrop-blur-md hover:border-luxury-gold transition-colors">
              <span className="font-sans text-xs text-luxury-ivory/80 whitespace-nowrap hidden md:block">YouTube</span>
              <div className="w-10 h-10 rounded-full bg-[#FF0000]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </div>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/amritpal-sellworth?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-luxury-black/90 p-2 pr-4 rounded-full border border-luxury-gold/20 shadow-xl backdrop-blur-md hover:border-luxury-gold transition-colors">
              <span className="font-sans text-xs text-luxury-ivory/80 whitespace-nowrap hidden md:block">LinkedIn</span>
              <div className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center">
                <img src="/linkedin-logo.svg" alt="LinkedIn" className="h-6 w-6 rounded" />
              </div>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/sellworthrealtors" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-luxury-black/90 p-2 pr-4 rounded-full border border-luxury-gold/20 shadow-xl backdrop-blur-md hover:border-luxury-gold transition-colors">
              <span className="font-sans text-xs text-luxury-ivory/80 whitespace-nowrap hidden md:block">Instagram</span>
              <div className="w-10 h-10 rounded-full bg-[#E1306C]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </a>

            {/* WhatsApp (Opens Consultation) */}
            <button onClick={toggleOpen} className="flex items-center space-x-3 bg-luxury-black/90 p-2 pr-4 rounded-full border border-luxury-gold/20 shadow-xl backdrop-blur-md hover:border-luxury-gold transition-colors focus:outline-none">
              <span className="font-sans text-xs text-luxury-ivory/80 whitespace-nowrap hidden md:block">WhatsApp</span>
              <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <img src="/whatsapp-logo.svg" alt="WhatsApp" className="h-6 w-6" />
              </div>
            </button>
          </div>
        )}

        {/* Main Floating Button */}
        <button
          onClick={() => { if (isOpen) toggleOpen(); }}
          className="w-14 h-14 bg-luxury-black border border-luxury-gold/30 rounded-full flex items-center justify-center text-luxury-gold shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:border-luxury-gold hover:scale-105 transition-all duration-300 focus:outline-none relative z-10"
          aria-label="Toggle Social Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </button>
      </div>

      {/* Popup Consultation Card */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 flex items-end md:items-center justify-center p-6 bg-luxury-black/75 backdrop-blur-sm">
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={toggleOpen} />

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
              className="relative w-full max-w-md bg-luxury-charcoal border border-luxury-gold/20 p-8 md:p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] z-10"
            >
              {/* Close Button */}
              <button
                onClick={toggleOpen}
                className="absolute top-4 right-4 text-luxury-ivory/60 hover:text-luxury-gold transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Description */}
              <div className="space-y-2 mb-8">
                <span className="font-mono text-[9px] tracking-[0.3em] text-luxury-gold uppercase block">
                  Private Concierge
                </span>
                <h3 className="font-serif text-2xl text-luxury-ivory tracking-wide font-normal">
                  Schedule a Private Consultation
                </h3>
                <p className="font-sans text-[11px] text-luxury-ivory/50 leading-relaxed font-light">
                  Connect with our lead real estate advisor for confidential assistance regarding premium portfolios.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="widget-name" className="font-mono text-[8px] tracking-widest text-luxury-gold/80 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="widget-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter full name"
                    className="bg-transparent border-b border-luxury-ivory/20 focus:border-luxury-gold py-2 text-xs focus:outline-none transition-colors font-sans tracking-wide text-luxury-ivory placeholder-luxury-ivory/20"
                  />
                </div>

                {/* Investment interest */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="widget-investment" className="font-mono text-[8px] tracking-widest text-luxury-gold/80 uppercase">
                    Investment Tier
                  </label>
                  <select
                    id="widget-investment"
                    value={formData.investment}
                    onChange={(e) => setFormData((prev) => ({ ...prev, investment: e.target.value }))}
                    className="bg-luxury-black border-b border-luxury-ivory/20 focus:border-luxury-gold py-2 text-xs focus:outline-none transition-colors font-sans tracking-wide text-luxury-ivory"
                  >
                    <option value="2-5">₹2 Cr – ₹5 Cr</option>
                    <option value="5-15">₹5 Cr – ₹15 Cr</option>
                    <option value="15-50">₹15 Cr – ₹50 Cr</option>
                    <option value="50-100">₹50 Cr – ₹100 Cr+</option>
                  </select>
                </div>

                {/* Preferred Location */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="widget-location" className="font-mono text-[8px] tracking-widest text-luxury-gold/80 uppercase">
                    Location Preference
                  </label>
                  <select
                    id="widget-location"
                    value={formData.location}
                    onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                    className="bg-luxury-black border-b border-luxury-ivory/20 focus:border-luxury-gold py-2 text-xs focus:outline-none transition-colors font-sans tracking-wide text-luxury-ivory"
                  >
                    <option value="golf-course-road">Golf Course Road</option>
                    <option value="cyber-city">Cyber City</option>
                    <option value="dwarka-expressway">Dwarka Expressway</option>
                    <option value="spr-road">SPR Road</option>
                    <option value="new-gurgaon">New Gurgaon</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-3 bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black font-sans font-bold text-[10px] tracking-[0.25em] py-4 uppercase transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Continue on WhatsApp</span>
                </button>
              </form>

              <div className="mt-6 pt-4 border-t border-luxury-ivory/10 text-center font-mono text-[7.5px] tracking-[0.3em] text-luxury-gold/40 uppercase">
                Acquisitions Advisory Desk &bull; +91 9650400647
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone, Download, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);
import { 
  trackWhatsAppClick, 
  trackPhoneClick, 
  trackBrochureDownloadClick 
} from "@/lib/tracking";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToForm = () => {
    trackBrochureDownloadClick();
    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
      formElement.classList.add("ring-4", "ring-brand-gold", "ring-opacity-50");
      setTimeout(() => {
        formElement.classList.remove("ring-4", "ring-brand-gold", "ring-opacity-50");
      }, 2000);
    } else {
      scrollToTop();
    }
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick();
    window.open("https://wa.me/919999266369", "_blank");
  };

  const handleCall = () => {
    trackPhoneClick();
    window.location.href = "tel:+919999266369";
  };

  return (
    <>
      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] lg:hidden flex justify-between">
        <button 
          onClick={handleCall}
          className="flex-1 flex flex-col items-center justify-center py-3 text-brand-dark hover:bg-gray-50 transition-colors"
        >
          <Phone className="w-5 h-5 mb-1 text-brand-wine" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Call Now</span>
        </button>
        <div className="w-px bg-gray-200" />
        <button 
          onClick={handleWhatsApp}
          className="flex-1 flex flex-col items-center justify-center py-3 text-brand-dark hover:bg-gray-50 transition-colors relative"
        >
          <span className="absolute top-2 right-6 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
          </span>
          <WhatsAppIcon className="w-5 h-5 mb-1 text-[#25D366]" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
        </button>
        <div className="w-px bg-gray-200" />
        <button 
          onClick={scrollToForm}
          className="flex-1 flex flex-col items-center justify-center py-3 bg-brand-gold text-brand-dark transition-colors"
        >
          <Download className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Brochure</span>
        </button>
      </div>

      {/* Desktop Sticky */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed bottom-8 right-8 z-50 hidden lg:flex flex-col gap-4 items-end"
          >
            <button
              onClick={scrollToForm}
              className="bg-brand-gold text-brand-dark font-semibold px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center justify-center space-x-2 border-2 border-white"
            >
              <Download className="w-5 h-5" />
              <span>Download Brochure</span>
            </button>
            
            <div className="flex gap-4">
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center relative group"
                aria-label="WhatsApp"
              >
                <span className="absolute -inset-1 rounded-full border-2 border-[#25D366] opacity-0 group-hover:animate-ping"></span>
                <WhatsAppIcon className="w-6 h-6" />
              </button>
              <button
                onClick={scrollToTop}
                className="bg-brand-wine text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center group"
                aria-label="Scroll to top"
              >
                <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

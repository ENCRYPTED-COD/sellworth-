"use client";

import React from "react";

export default function ConsultationButton({ developerName }: { developerName: string }) {
  return (
    <button 
      onClick={() => {
        const event = new Event("open-whatsapp-consultation");
        window.dispatchEvent(event);
      }}
      className="inline-flex items-center space-x-3 bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black font-sans font-bold text-xs tracking-[0.2em] px-8 py-4 uppercase transition-colors"
    >
      <span>Connect with our Advisory</span>
    </button>
  );
}

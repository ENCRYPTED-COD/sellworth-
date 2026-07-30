"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 py-16 px-6 md:px-12 border-t border-white/5 bg-[#0a1016]">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-display text-white tracking-tight">Ashiana Aaroham</h2>
          <p className="text-xs text-white/40 max-w-sm">
            Curated Kid Centric Residences in Sector 80, Gurugram.
          </p>
        </div>
        
        <div className="flex gap-8 text-sm text-white/50">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
        </div>
      </div>
      
      <div className="max-w-[1600px] mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-white/30 text-center md:text-left">
          © {new Date().getFullYear()} Ashiana Housing Ltd. All rights reserved.
        </p>
        <p className="text-xs text-white/30 text-center md:text-right">
          Haryana RERA: Phase I 117 of 2025 dated 25.11.2025 - www.haryanarera.gov.in
        </p>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-luxury-black text-luxury-ivory/60 py-16 md:py-24 overflow-hidden border-t border-luxury-ivory/10">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-luxury-ivory/5 pointer-events-none hidden lg:block" />
      <div className="absolute top-0 bottom-0 left-[80%] w-[1px] bg-luxury-ivory/5 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Links Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Logo Stack */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <img 
                src="/new-logo.png?v=2" 
                alt="Sellworth Logo" 
                className="h-24 sm:h-32 lg:h-48 w-auto object-contain"
              />
            </Link>
            <p className="font-sans text-xs text-luxury-ivory/40 tracking-wide leading-relaxed font-light">
              Premium Gurgaon real estate channel partner curating landmark residential and commercial assets for the country&apos;s most distinguished families.
            </p>
          </div>
            {/* WhatsApp Contact */}
            <div className="space-y-4">
              <h4 className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase">Connect</h4>
              <a href="https://wa.me/919999266369" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-luxury-gold transition-colors">
                <img src="/whatsapp-logo.svg" alt="WhatsApp" className="h-8 w-8" />
                <span className="font-sans text-xs text-luxury-ivory/40">Contact Us</span>
              </a>
              <a href="https://www.instagram.com/sellworthrealtors" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-luxury-gold transition-colors">
                <img src="/instagram-colored.svg" alt="Instagram" className="h-8 w-8" />
                <span className="font-sans text-xs text-luxury-ivory/40">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/in/amritpal-sellworth?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-luxury-gold transition-colors">
                <img src="/linkedin-logo.svg" alt="LinkedIn" className="h-8 w-8" />
                <span className="font-sans text-xs text-luxury-ivory/40">LinkedIn</span>
              </a>
              <a href="https://www.youtube.com/@sellworth" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-luxury-gold transition-colors">
                <img src="/youtube-logo.svg?v=2" alt="YouTube" className="h-8 w-8" />
                <span className="font-sans text-xs text-luxury-ivory/40">YouTube</span>
              </a>
            </div>
          {/* Nav Categories */}
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase">
              Portfolio
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-sans font-light tracking-wide">
              <Link href="/#collections" className="hover:text-luxury-gold transition-colors">Signature Residences</Link>
              <Link href="/#collections" className="hover:text-luxury-gold transition-colors">Golf Estate Condominiums</Link>
              <Link href="/#collections" className="hover:text-luxury-gold transition-colors">Commercial Landmarks</Link>
              <Link href="/#collections" className="hover:text-luxury-gold transition-colors">New Launch Portfolios</Link>
            </div>
          </div>

          {/* Advisory Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase">
              Partner Services
            </h4>
            <div className="flex flex-col space-y-2 text-xs font-sans font-light tracking-wide">
              <Link href="/#story" className="hover:text-luxury-gold transition-colors">Private Wealth Strategy</Link>
              <Link href="/#story" className="hover:text-luxury-gold transition-colors">Local Market Analytics</Link>
              <Link href="/#developers" className="hover:text-luxury-gold transition-colors">Developer Underwriting</Link>
              <Link href="/#contact" className="hover:text-luxury-gold transition-colors">Bespoke Consultations</Link>
            </div>
          </div>

          {/* Legal and Office */}
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase">
              Registered Office
            </h4>
            <a 
              href="https://maps.app.goo.gl/Wu4nasaGDA1bv4WU8"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-luxury-ivory/40 hover:text-luxury-gold tracking-wide leading-relaxed font-light block transition-colors decoration-luxury-gold/20 hover:underline"
            >
              Sellworth<br />
              32 Edmonton mall, The Bristol Hotel,<br />
              MG Road, Gurugram
            </a>
            <p className="font-sans text-xs text-luxury-ivory/40 tracking-wide leading-relaxed font-light mt-2">
              +91 99992 66369<br />
              amritpaldutt@gmail.com
            </p>
          </div>

        </div>

        {/* Separator line */}
        <div className="h-[1px] bg-luxury-ivory/10 mb-8 flex items-center justify-between">
          <div className="h-[1px] bg-luxury-gold/30 w-1/4" />
          <button
            onClick={scrollToTop}
            className="w-10 h-10 border border-luxury-ivory/20 rounded-full flex items-center justify-center text-luxury-ivory/40 hover:text-luxury-gold hover:border-luxury-gold hover:-translate-y-1 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          <div className="h-[1px] bg-luxury-gold/30 w-1/4" />
        </div>

        {/* Disclaimer */}
        <div className="mb-12 font-sans text-[10px] text-luxury-ivory/40 tracking-wide leading-relaxed font-light text-justify">
          Disclaimer: Sellworth is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by various Builder(s)/Developer(s) who have advertised their products. Sellworth is only communicating the offers and not selling or rendering any of those products or services. It neither warrants nor is it making any representations with respect to offer(s) made on the site. Sellworth shall neither be responsible nor liable to mediate or resolve any disputes or disagreements between the Customer/Buyer/User and the Seller and both Seller and Customer/Buyer/User shall settle all such disputes without involving Sellworth in any manner. All trademarks, logos and names are properties of their respective Builder(s)/Developer(s).
        </div>

        {/* Legal Disclaimer & Copyright Footer */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-[10px] font-mono tracking-wider text-luxury-ivory/30">
          <div>
            &copy; {new Date().getFullYear()} SELLWORTH. All Rights Reserved. &bull; RERA Registration: RC/HARERA/GGM/2026/01.
          </div>
          <div className="flex space-x-6">
            <Link href="/#contact" className="hover:text-luxury-gold">Privacy Policy</Link>
            <Link href="/#contact" className="hover:text-luxury-gold">Diligence Footnotes</Link>
            <Link href="/#contact" className="hover:text-luxury-gold">RERA Disclosures</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

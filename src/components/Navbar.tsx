"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#story" },
    { 
      name: "Services", 
      href: "/#collections",
      subItems: [
        { name: "Residences", href: "/#residences" },
        { name: "Commercial", href: "/#commercial" },
        { name: "New Launch", href: "/#new-launch" },
        { name: "Senior Living", href: "/senior-living" }
      ]
    },
    { name: "Developers", href: "/#developers" },
    { name: "NRI Services", href: "/nri-services" },
    { name: "Insights", href: "/#numbers" },
    { name: "Contact Us", href: "/#contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "bg-luxury-black/95 border-b border-luxury-gold/15 py-4 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-7 border-b border-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-8 md:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Sellworth Home">
            <img 
              src="/new-logo.png?v=2" 
              alt="Sellworth Logo" 
              className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 ml-auto mr-12">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.name === "Home" && window.location.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="relative font-sans text-xs tracking-[0.2em] text-luxury-ivory/85 hover:text-luxury-gold uppercase transition-colors duration-300 py-1 flex items-center gap-1 group-hover:text-luxury-gold"
                >
                  {item.name}
                  {item.subItems && (
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Desktop Dropdown */}
                {item.subItems && (
                  <div className="absolute top-full left-0 mt-6 w-48 bg-luxury-black/95 backdrop-blur-md border border-luxury-gold/15 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                    {/* Invisible bridge to keep hover active */}
                    <div className="absolute -top-6 left-0 w-full h-6 bg-transparent" />
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => {
                          if (sub.href.includes('#commercial')) window.dispatchEvent(new CustomEvent('switch-tab', { detail: 'commercial' }));
                          if (sub.href.includes('#residences')) window.dispatchEvent(new CustomEvent('switch-tab', { detail: 'residences' }));
                          if (sub.href.includes('#new-launch')) window.dispatchEvent(new CustomEvent('switch-tab', { detail: 'new-launch' }));
                        }}
                        className="block px-6 py-3 font-sans text-[9px] tracking-widest text-luxury-ivory/70 hover:text-luxury-gold hover:bg-luxury-gold/5 uppercase transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => window.dispatchEvent(new Event("open-whatsapp-consultation"))}
              className="relative font-mono text-xs tracking-[0.2em] text-luxury-gold hover:text-luxury-black bg-transparent hover:bg-luxury-gold border border-luxury-gold/40 hover:border-luxury-gold px-6 py-3 transition-all duration-300 uppercase overflow-hidden cursor-pointer"
            >
              Personal Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-luxury-ivory hover:text-luxury-gold transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-luxury-black pt-28 px-8 flex flex-col justify-between pb-12 lg:hidden"
          >
            {/* Subtle background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

            <div className="relative flex flex-col space-y-6">
              {menuItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      if (item.name === "Home" && window.location.pathname === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="font-serif text-3xl text-luxury-ivory hover:text-luxury-gold tracking-wide transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                  {/* Mobile Dropdown items inline */}
                  {item.subItems && (
                    <div className="flex flex-col mt-4 ml-2 space-y-4 border-l border-luxury-gold/20 pl-4">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            if (sub.href.includes('#commercial')) window.dispatchEvent(new CustomEvent('switch-tab', { detail: 'commercial' }));
                            if (sub.href.includes('#residences')) window.dispatchEvent(new CustomEvent('switch-tab', { detail: 'residences' }));
                            if (sub.href.includes('#new-launch')) window.dispatchEvent(new CustomEvent('switch-tab', { detail: 'new-launch' }));
                          }}
                          className="font-serif text-xl text-luxury-ivory/60 hover:text-luxury-gold tracking-wide transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="relative flex flex-col space-y-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.dispatchEvent(new Event("open-whatsapp-consultation"));
                }}
                className="w-full text-center font-mono text-xs tracking-[0.2em] text-luxury-black bg-luxury-gold py-4 uppercase font-bold hover:bg-luxury-gold/90 transition-colors cursor-pointer"
              >
                Personal Consultation
              </button>
              <div className="text-center font-mono text-[9px] tracking-widest text-luxury-gold/40 uppercase">
                Gurgaon &bull; New Delhi &bull; International
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

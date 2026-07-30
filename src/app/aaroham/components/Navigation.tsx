"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'overview', 'pricing', 'amenities', 'floor-plans', 'gallery', 'location', 'contact'];
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Overview', href: '#overview' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Floor Plans', href: '#floor-plans' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 liquid-glass border-b border-white/5 transition-all duration-300">
      <div className="flex flex-row items-center justify-between px-6 md:px-12 py-4 max-w-[1600px] mx-auto">
        <div className="text-2xl md:text-3xl tracking-tight text-foreground font-display cursor-pointer flex items-center gap-3">
          <img src="/aaroham/images/aaroham_logo.png" alt="Ashiana Aaroham Logo" className="h-10 w-auto object-contain" />
          <span>Ashiana Aaroham<sup className="text-xs">®</sup></span>
        </div>
        
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={`text-sm transition-colors ${activeSection === link.href.substring(1) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <a href="mailto:care@sellworth.in" className="hidden lg:block liquid-glass rounded-full px-8 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform cursor-pointer tracking-wide">
          Register Interest
        </a>

        <button 
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden liquid-glass px-6 py-4 flex flex-col gap-6 h-screen">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg transition-colors ${activeSection === link.href.substring(1) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {link.name}
            </Link>
          ))}
          <a href="mailto:care@sellworth.in" className="liquid-glass rounded-full px-8 py-4 text-sm text-foreground mt-4 w-full tracking-wide text-center block">
            Register Interest
          </a>
        </div>
      )}
    </nav>
  );
}

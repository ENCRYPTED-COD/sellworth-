"use client";

import { motion } from "framer-motion";

const developerLogos = [
  {
    id: "dlf",
    name: "DLF",
    tagline: "The Pioneers of Modern Gurgaon Skyline",
    src: "/dev-dlf.png"
  },
  {
    id: "emaar",
    name: "EMAAR",
    tagline: "Shaping Landscapes, Elevating Lives",
    src: "/dev-emaar.png"
  },
  {
    id: "m3m",
    name: "M3M",
    tagline: "Our Projects, Your Lifestyle",
    src: "/dev-m3m.png"
  },
  {
    id: "smartworld",
    name: "Smartworld",
    tagline: "The Future of Living",
    src: "https://smartworldsales.com/wp-content/uploads/2021/02/cropped-Untitled-1-copy-2.jpg"
  },
  {
    id: "godrej",
    name: "Godrej Properties",
    tagline: "A Legacy of Trust and Excellence",
    src: "/dev-godrej.png"
  },
  {
    id: "signature-global",
    name: "Signature Global",
    tagline: "Making Luxury Accessible",
    src: "https://www.usdunique.com/assets/signature-global-D5Sb5yDK.jpg"
  },
  {
    id: "whiteland",
    name: "Whiteland Corporation",
    tagline: "Global Standards, Local Excellence",
    src: "https://goldenbricks.in/media/uploads/builders/Whiteland-Corporation.webp"
  },
  {
    id: "ashiana",
    name: "Ashiana Housing",
    tagline: "Building Trust, Delivering Happiness",
    src: "https://www.velocityhousing.in/uploads/builder/large_1667293946ashiana-group.jpg"
  },
  {
    id: "mahindra",
    name: "Mahindra Lifespaces",
    tagline: "Joyful Homecomings",
    src: "https://globalprimenews.com/wp-content/uploads/2022/07/IMG_20220706_143125.jpg"
  },
  {
    id: "oberoi",
    name: "Oberoi Realty",
    tagline: "Enhancing Lives",
    src: "https://tse3.mm.bing.net/th/id/OIP.BLel0bFSQd4NZgWAHiOtHAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: "bptp",
    name: "BPTP Limited",
    tagline: "Building the Future",
    src: "https://tse1.mm.bing.net/th/id/OIP.AY6EbDIkE-0vetyJVMWoOQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];

export default function Developers() {
  // Duplicate the array to create a seamless infinite scrolling loop
  const listLogos = [...developerLogos, ...developerLogos, ...developerLogos, ...developerLogos];

  return (
    <section id="developers" className="relative py-24 md:py-32 bg-luxury-ivory text-luxury-black overflow-hidden border-t border-luxury-gold/15">
      {/* Background vector details */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.04)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Subheader */}
        <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
          <span className="font-mono text-xs tracking-[0.4em] text-luxury-gold uppercase block">
            Strategic Alliances
          </span>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide font-normal text-luxury-black">
            Distinguished Developer <span className="italic font-light text-luxury-bronze">Partners.</span>
          </h2>
          <p className="font-sans text-xs md:text-sm text-luxury-charcoal/70 tracking-wide leading-relaxed font-light">
            As an authorized channel partner, we work directly with the executive leadership of India&apos;s most credible developers to source premium inventory and exclusive pre-launch access.
          </p>
        </div>

        {/* Infinite Scrolling Logo Ticker (Moving Left to Right) */}
        <div className="relative w-full overflow-hidden py-8 border-y border-luxury-gold/20 bg-luxury-charcoal/[0.02]">
          {/* Subtle fade edges for premium luxury feel */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-luxury-ivory to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-luxury-ivory to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] transition-all duration-300">
            {listLogos.map((dev, idx) => (
              <div
                key={`${dev.id}-${idx}`}
                className="flex flex-col items-center justify-center mx-10 md:mx-14 px-8 py-6 bg-luxury-charcoal/[0.01] border border-luxury-gold/10 hover:border-luxury-gold/30 hover:bg-luxury-charcoal/[0.03] transition-all duration-300 group text-center min-w-[240px] shadow-sm"
              >
                {/* Logo Frame: Enlarged to make logos a bit larger */}
                <div className="h-20 flex items-center justify-center">
                  <img
                    src={dev.src}
                    alt={`${dev.name} Logo`}
                    className="h-14 md:h-18 w-auto object-contain transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                </div>
                {/* Original Tagline */}
                <span className="font-sans text-[9px] tracking-wide text-luxury-charcoal/60 group-hover:text-luxury-bronze transition-colors duration-500 font-light mt-4 block max-w-[200px] leading-relaxed">
                  {dev.tagline}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

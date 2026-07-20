"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [fade, setFade] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = ["/merged_background.mp4"];

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      // Just play the merged video at normal speed
      video.playbackRate = 1.0;
    }
  };

  const handleVideoEnded = () => {
    // With loop={true}, this won't be called, but keeping for safety
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoError = () => {
    console.error("Video failed to load");
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const, // Luxury cubic bezier curve
      },
    },
  };

  return (
    <section className="relative h-screen w-full bg-luxury-black overflow-hidden flex items-center">
      {/* Cinematic background video sequencer with luxury image fallback */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cinematic black crossfade overlay */}
        <div
          className={`absolute inset-0 bg-luxury-black z-10 transition-opacity duration-700 pointer-events-none ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
        <video
          ref={videoRef}
          key={currentIdx}
          autoPlay
          loop={true}
          muted
          playsInline
          onEnded={handleVideoEnded}
          onError={handleVideoError}
          onLoadedMetadata={handleLoadedMetadata}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
        >
          <source src={videos[currentIdx]} type="video/mp4" />
        </video>
      </div>

      {/* Radial dark overlay for vignette luxury effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-luxury-black/75 pointer-events-none" />

      {/* Gold subtle architectural vector overlay */}
      <svg viewBox="0 0 1000 1000" className="absolute right-0 bottom-0 w-[60%] h-[60%] stroke-luxury-gold/5 fill-none stroke-[0.5] hidden lg:block pointer-events-none">
        <circle cx="1000" cy="1000" r="800" />
        <circle cx="1000" cy="1000" r="600" />
        <line x1="200" y1="1000" x2="1000" y2="200" />
        <line x1="400" y1="1000" x2="1000" y2="400" />
      </svg>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full z-10 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl flex flex-col space-y-8"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-4">
            <span className="h-[1px] w-12 bg-luxury-gold" />
            <h2 className="font-mono text-xs tracking-[0.4em] text-luxury-gold uppercase">
              Premier Luxury Real Estate Consultants in Gurugram
            </h2>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-luxury-ivory tracking-wide leading-[1.05]"
          >
            Curating Landmark <br className="hidden md:inline" />
            <span className="italic text-luxury-gold font-light">Addresses.</span>
            <span className="sr-only"> Exclusive Properties & Luxury Apartments in Gurgaon</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-sm md:text-lg text-luxury-ivory/70 font-light tracking-wide leading-relaxed max-w-2xl"
          >
            Premium residential and commercial real estate channel partner for India&apos;s most distinguished developments. Connecting private wealth to legacy assets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 pt-4"
          >
            <Link
              href="#collections"
              className="group relative font-sans text-xs tracking-[0.2em] text-luxury-black bg-luxury-gold hover:bg-luxury-gold/90 px-8 py-5 transition-colors uppercase font-bold text-center"
            >
              Explore Portfolio
            </Link>
            <button
              onClick={() => window.dispatchEvent(new Event("open-whatsapp-consultation"))}
              className="group relative font-sans text-xs tracking-[0.2em] text-luxury-ivory border border-luxury-ivory/30 hover:border-luxury-gold px-8 py-5 transition-all uppercase text-center cursor-pointer"
            >
              <span className="relative z-10 group-hover:text-luxury-gold transition-colors duration-300">
                Schedule Consultation
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative vertical coordinates slider */}
      <div className="absolute bottom-12 left-12 hidden md:flex items-center space-x-6 text-[10px] font-mono tracking-widest text-luxury-gold/40">
        <span>GGM &bull; DLF GOLF ROAD</span>
        <span className="h-4 w-[1px] bg-luxury-gold/20" />
        <span>SEC 65</span>
        <span className="h-4 w-[1px] bg-luxury-gold/20" />
        <span>CYBER CITY</span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-12 flex flex-col items-center space-y-4">
        <span className="font-mono text-[9px] tracking-[0.3em] text-luxury-gold/50 uppercase [writing-mode:vertical-lr]">
          Scroll to Explore
        </span>
        <div className="w-[1px] h-12 bg-luxury-gold/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-luxury-gold"
            animate={{
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}

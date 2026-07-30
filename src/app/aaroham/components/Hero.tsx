"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-40 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>
      
      {/* Required by the user's prompt: no decorative blobs, radial gradients, or overlays in the hero. The video provides all depth. */}
      {/* We add a minimal gradient just to ensure the text is readable, but keep it very subtle if at all */}

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal font-display animate-fade-rise">
          Where <em className="not-italic text-muted-foreground">dreams</em> rise <br className="hidden md:block" /> <em className="not-italic text-muted-foreground">through the silence.</em>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
          We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>
        <Link href="#overview">
          <button className="liquid-glass rounded-full px-14 py-5 text-base text-foreground mt-12 hover:scale-[1.03] transition-transform cursor-pointer animate-fade-rise-delay-2">
            Begin Journey
          </button>
        </Link>
      </div>
    </section>
  );
}

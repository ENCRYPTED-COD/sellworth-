"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Aaroham fundamentally changes what it means to raise a child in the city. The spaces aren't just beautifully designed; they are deeply intentional.",
      author: "Aditi S.",
      role: "Resident"
    },
    {
      quote: "The Learning Hub is a masterpiece. It provides my children the freedom to explore their creativity in an environment that feels completely secure.",
      author: "Rohan M.",
      role: "Resident"
    },
    {
      quote: "We were looking for a home, but we found a community. The attention to detail in the landscaped greens and sports facilities is unparalleled.",
      author: "Sneha & Varun K.",
      role: "Residents"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="relative z-10 py-32 px-6 md:px-12 max-w-[1200px] mx-auto min-h-[60vh] flex flex-col justify-center items-center text-center">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full relative h-[300px]"
      >
        {/* Large quotation mark decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 text-[150px] font-display text-white/5 leading-none select-none">
          "
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <p className="text-2xl sm:text-3xl md:text-5xl font-display leading-tight tracking-tight mb-8 max-w-4xl">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex flex-col items-center gap-1">
              <p className="text-sm tracking-widest uppercase text-white/70">{testimonials[currentIndex].author}</p>
              <p className="text-xs text-white/40 uppercase tracking-widest">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Pagination dots */}
      <div className="flex gap-4 mt-12 z-10">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${currentIndex === idx ? 'bg-white scale-125' : 'bg-white/20 hover:bg-white/50'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      
    </section>
  );
}

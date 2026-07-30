"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';

export default function Gallery() {
  const allImages = [
    "page4_img0.jpeg", "page18_img0.jpeg", "site_layout_rendered.jpeg", "page3_img1.jpeg",
    "page7_img1.jpeg", "page9_img2.jpeg", "page8_img2.jpeg", "page7_img2.jpeg",
    "page6_img2.jpeg", "page10_img2.jpeg", "page2_img1.jpeg", "page3_img2.jpeg"
  ].map(img => `/aaroham/images/${img}`);

  const [visibleCount, setVisibleCount] = useState(12);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const imagesToShow = allImages.slice(0, visibleCount);

  return (
    <section id="gallery" className="relative z-10 py-32 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen">
      
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-display tracking-tight mb-4"
        >
          Gallery
        </motion.h2>
        <p className="text-muted-foreground tracking-widest text-sm uppercase max-w-2xl mx-auto">Immersive Previews of the Ashiana Aaroham Lifestyle</p>
      </div>

      {/* Masonry-style Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {imagesToShow.map((src, index) => {
          // Dynamic sizing for masonry feel
          const isLarge = index === 0 || index % 7 === 0;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`relative group cursor-pointer overflow-hidden rounded-md liquid-glass ${isLarge ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]' : 'h-[300px]'}`}
              onClick={() => setLightboxImage(src)}
            >
              <img 
                src={src} 
                alt={`Gallery Image ${index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="lazy" 
              />
              
              {/* Hover overlay text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                <span className="text-sm uppercase tracking-widest text-white border border-white/50 px-6 py-2 rounded-full backdrop-blur-md">
                  View Image
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {visibleCount < allImages.length && (
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => setVisibleCount(prev => prev + 12)}
            className="flex items-center gap-2 liquid-glass px-8 py-4 rounded-full text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors"
          >
            Load More <ChevronDown size={16} />
          </button>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#000] flex items-center justify-center p-6 md:p-12"
          >
            <button 
              onClick={() => setLightboxImage(null)} 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-10"
            >
              <X size={32} strokeWidth={1} />
            </button>
            <img 
              src={lightboxImage} 
              alt="Fullscreen view" 
              className="max-w-full max-h-full object-contain" 
            />
          </motion.div>
        )}
      </AnimatePresence>
      
    </section>
  );
}

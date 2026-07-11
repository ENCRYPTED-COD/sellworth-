"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-luxury-black min-h-screen text-luxury-ivory flex flex-col justify-center items-center text-center px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center space-x-4 mb-6"
        >
          <span className="h-[1px] w-8 bg-luxury-gold" />
          <span className="font-mono text-[10px] tracking-[0.4em] text-luxury-gold uppercase">
            Legacy
          </span>
          <span className="h-[1px] w-8 bg-luxury-gold" />
        </motion.div>

        {/* Owner Image */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <Image
            src="/image.png"
            alt="Sellworth Founder"
            width={220}
            height={220}
            className="rounded-full border-2 border-luxury-gold shadow-2xl object-cover"
          />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-serif text-4xl md:text-6xl mb-6"
        >
          The Sellworth Story
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-sans text-sm md:text-lg text-luxury-ivory/60 font-light leading-relaxed"
        >
          We are Gurgaon's premier real estate advisory firm, dedicated to
          curating landmark addresses for India's most distinguished families
          and enterprises. Our approach is founded on discretion, deep market
          intelligence, and an unwavering commitment to excellence.
        </motion.p>
      </motion.div>
    </div>
  );
}
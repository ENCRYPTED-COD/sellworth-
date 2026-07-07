"use client";

import { motion } from "framer-motion";

export default function InsightsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-luxury-ivory min-h-screen text-luxury-black flex flex-col justify-center items-center text-center px-6">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-2xl mx-auto">
        <motion.div variants={itemVariants} className="flex justify-center items-center space-x-4 mb-6">
          <span className="h-[1px] w-8 bg-luxury-gold" />
          <span className="font-mono text-[10px] tracking-[0.4em] text-luxury-gold uppercase">Analytics</span>
          <span className="h-[1px] w-8 bg-luxury-gold" />
        </motion.div>
        <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-6xl mb-6">Market Insights</motion.h1>
        <motion.p variants={itemVariants} className="font-sans text-sm md:text-lg text-luxury-black/60 font-light">
          Deep-dive analytics and localized intelligence reports are currently being compiled by our advisory team.
        </motion.p>
      </motion.div>
    </div>
  );
}

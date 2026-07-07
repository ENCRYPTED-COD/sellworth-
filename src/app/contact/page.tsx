"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-luxury-ivory min-h-screen text-luxury-black pt-24 pb-12">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center px-6 max-w-2xl mx-auto mb-16">
        <motion.div variants={itemVariants} className="flex justify-center items-center space-x-4 mb-6">
          <span className="h-[1px] w-8 bg-luxury-gold" />
          <span className="font-mono text-[10px] tracking-[0.4em] text-luxury-gold uppercase">Contact Us</span>
          <span className="h-[1px] w-8 bg-luxury-gold" />
        </motion.div>
        <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-5xl mb-6">Connect With Our Advisors</motion.h1>
      </motion.div>

      {/* We can reuse the existing ContactForm component here */}
      <ContactForm />
    </div>
  );
}

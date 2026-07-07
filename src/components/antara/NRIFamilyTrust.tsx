"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function NRIFamilyTrust() {
  return (
    <section className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-wine font-semibold">
            Trusted by the Global Indian Diaspora
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative"
          >
            <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-gold/20" />
            <p className="text-gray-600 text-lg italic leading-relaxed mb-6">
              "Moving my mother to Antara was the best decision I've made. Being based in California, I used to panic if she didn't answer her phone. Now, I know she is surrounded by friends and the best medical care in India."
            </p>
            <div>
              <h4 className="font-heading font-semibold text-brand-dark">Rajiv M.</h4>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Resident's Son, San Jose, USA</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative"
          >
            <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-gold/20" />
            <p className="text-gray-600 text-lg italic leading-relaxed mb-6">
              "The transition was incredibly smooth. They handled everything from the airport pickup to settling them into their new apartment. My parents have found their independence again."
            </p>
            <div>
              <h4 className="font-heading font-semibold text-brand-dark">Aarti S.</h4>
              <p className="text-sm text-gray-500 uppercase tracking-wide">Resident's Daughter, London, UK</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

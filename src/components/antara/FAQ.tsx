"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What medical facilities are available?",
    a: "Estate 361 features the Antara Integrated Wellness Clinic, providing proactive and preventive care. We have 24/7 medical professionals on call, emergency response systems in every residence, and close proximity to top super-specialty hospitals.",
  },
  {
    q: "Are the residences fully maintained?",
    a: "Yes, the Antara management team handles complete maintenance, housekeeping, and security, allowing you to enjoy a completely hassle-free lifestyle.",
  },
  {
    q: "What are the dining options?",
    a: "The Hub offers curated dining experiences with nutritionally balanced, gourmet meals tailored to individual dietary requirements by expert nutritionists.",
  },
  {
    q: "Can NRIs invest in this property?",
    a: "Absolutely. We have a streamlined process for NRIs looking to secure a safe, premium lifestyle for their parents or for their own retirement in India.",
  },
  {
    q: "What types of apartments are available?",
    a: "We offer spacious 2 Bedroom+ (2,323 sq.ft.), 3 Bedroom+ (up to 3,359 sq.ft.), and luxurious Sky Villas (up to 6,299 sq.ft.) designed specifically for senior mobility and safety.",
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl text-brand-wine mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-heading font-semibold text-xl text-brand-dark pr-4">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-brand-gold transition-transform duration-300 flex-shrink-0",
                    openIdx === idx && "rotate-180"
                  )} 
                />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

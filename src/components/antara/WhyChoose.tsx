"use client";

import { motion } from "framer-motion";
import { HeartPulse, Home, Utensils, Users, ShieldAlert, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Antara Integrated Wellness Clinic",
    desc: "Proactive, preventive, and emergency care available on-site with trained professionals."
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Luxury Residences",
    desc: "Thoughtfully designed 2/3 BHK & Sky Villas with senior-friendly architecture and premium finishes."
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Curated Dining Experience",
    desc: "Nutritionally balanced, gourmet meals tailored to individual dietary requirements at The Hub."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community & Lifestyle",
    desc: "Access to Sports Block, Winding Lake, and daily engagement activities for an active social life."
  },
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: "24x7 Assistance",
    desc: "Round-the-clock on-call support, emergency response systems in every room."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Advanced Security",
    desc: "Multi-tier security, CCTV surveillance, and restricted access for absolute peace of mind."
  }
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl lg:text-5xl text-brand-wine mb-4"
          >
            The Antara Advantage
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            A comprehensive ecosystem designed to deliver a hassle-free, secure, and engaging lifestyle.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-brand-gold/30 group"
            >
              <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-wine group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-brand-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Shield, HeartPulse, Users, UserCheck } from "lucide-react";

const reasons = [
  {
    icon: <HeartPulse className="w-8 h-8 text-brand-gold" />,
    title: "Global Medical Standards",
    desc: "Connected to Max Healthcare, equipped with 24/7 paramedics, ICU-trained nurses, and emergency response within minutes."
  },
  {
    icon: <Shield className="w-8 h-8 text-brand-gold" />,
    title: "Absolute Security",
    desc: "A 3-layered physical security system, CCTV surveillance, and in-room panic buttons ensuring your parents are never vulnerable."
  },
  {
    icon: <Users className="w-8 h-8 text-brand-gold" />,
    title: "Ending Isolation",
    desc: "A curated calendar of events, clubs, and dining experiences so your parents live an engaged, vibrant life instead of feeling lonely."
  },
  {
    icon: <UserCheck className="w-8 h-8 text-brand-gold" />,
    title: "Dedicated Lifestyle Care",
    desc: "Concierge services, daily chores, and custom nutritional menus managed by hospitality professionals, allowing them to truly relax."
  }
];

export default function NRIWhyChoose() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-brand-wine font-semibold mb-6">
            Why NRIs Choose Antara for Their Parents
          </h2>
          <p className="text-gray-600 text-lg">
            Living far away brings unique anxieties. We solve the logistical, medical, and emotional challenges of aging in India so you don't have to worry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-brand-light p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                {reason.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-brand-wine mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

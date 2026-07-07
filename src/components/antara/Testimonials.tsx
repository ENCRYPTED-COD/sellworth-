"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. R.K. Sharma",
    role: "Retired Surgeon",
    text: "The transition to Estate 361 has been seamless. The Antara team ensures that we live independently while having 24/7 medical assistance just a call away.",
  },
  {
    name: "Mrs. Anjali Desai",
    role: "Resident",
    text: "My children live in the US, and this was the best decision for my peace of mind. The community is vibrant, and the facilities are truly world-class.",
  },
  {
    name: "Col. Singh (Retd.)",
    role: "Resident",
    text: "From the specially curated meals to the daily activities at the club, every detail is thoughtfully designed for our comfort. It feels like a premium resort.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl text-brand-wine mb-4">
            Hear From Our Community
          </h2>
          <p className="text-lg text-gray-600">
            Discover what it means to live the Antara lifestyle through the experiences of our residents.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex space-x-1 text-brand-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-heading font-semibold text-xl text-brand-dark">
                  {testimonial.name}
                </h4>
                <span className="text-sm text-gray-500 uppercase tracking-wider">
                  {testimonial.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

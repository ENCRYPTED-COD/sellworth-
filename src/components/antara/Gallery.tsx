"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const residences = [
  {
    type: "2 Bedroom+",
    area: "2,323 ft²",
    carpet: "1,250 ft²",
    image: "https://www.max-antara.co.in/max-antara-noida/img/gallery-1.jpg",
  },
  {
    type: "3 Bedroom+",
    area: "3,359 ft²",
    carpet: "1,863 ft²",
    image: "https://www.max-antara.co.in/max-antara-noida/img/gallery-2.jpg",
  },
  {
    type: "Sky Villas",
    area: "5,286 - 6,299 ft²",
    carpet: "2,844 - 3,389 ft²",
    image: "https://www.max-antara.co.in/max-antara-noida/img/gallery-3.jpg",
  }
];

export default function Gallery() {
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
      formElement.classList.add("ring-4", "ring-brand-gold", "ring-opacity-50");
      setTimeout(() => {
        formElement.classList.remove("ring-4", "ring-brand-gold", "ring-opacity-50");
      }, 2000);
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl lg:text-5xl text-brand-wine mb-4">
              Premium Residences
            </h2>
            <p className="text-lg text-gray-600">
              Meticulously designed layouts ensuring safety, mobility, and elegance. Featuring anti-skid flooring, panic buttons, and wide doors.
            </p>
          </div>
          <button 
            onClick={scrollToForm}
            className="hidden md:inline-flex mt-6 md:mt-0 text-brand-wine font-medium border-b border-brand-wine pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors items-center space-x-2 group"
          >
            <span>Download All Floor Plans</span>
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {residences.map((res, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={scrollToForm}
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-6">
                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors z-10 flex items-center justify-center">
                   <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-2 bg-white/90 text-brand-dark px-4 py-2 rounded-full font-medium">
                      <Download className="w-4 h-4" />
                      <span>View Floor Plan</span>
                   </div>
                </div>
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{ backgroundImage: `url('${res.image}')` }}
                />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-brand-dark mb-2 group-hover:text-brand-wine transition-colors">
                {res.type}
              </h3>
              <div className="flex space-x-4 text-sm text-gray-500 font-medium uppercase tracking-wider">
                <span>Total: {res.area}</span>
                <span>•</span>
                <span>Carpet: {res.carpet}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

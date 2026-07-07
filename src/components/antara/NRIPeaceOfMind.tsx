"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const peacePoints = [
  "Weekly medical updates shared directly with you via a secure portal.",
  "Designated relationship manager acting as your point of contact.",
  "Assistance with their travel, airport transfers, and local logistics.",
  "Immediate high-priority medical alerts to you in any emergency."
];

export default function NRIPeaceOfMind() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-brand-wine text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-semibold mb-6">
              You’re away. <br/>
              <span className="text-brand-gold">But never out of the loop.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
              We understand the guilt of not being there for the small things. Our transparent communication loop ensures you are practically by their side.
            </p>
            
            <ul className="space-y-4 mb-10">
              {peacePoints.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200">{point}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={scrollToForm}
              className="bg-brand-gold text-brand-dark font-semibold px-8 py-4 rounded-md hover:bg-white transition-colors"
            >
              Consult with an Expert Today
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-gold/20">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://d3cit1div2ht9e.cloudfront.net/ba613ab2-5936-463b-b362-7708ca4b3778-1771002364903.jpg')" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

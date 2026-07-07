"use client";

import { motion } from "framer-motion";
import { MapPin, Plane, Building2, Stethoscope } from "lucide-react";

export default function Location() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[500px] bg-gray-100 rounded-2xl overflow-hidden relative"
          >
            {/* Map Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14032.559987748467!2d76.9680327!3d28.4385153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d170a48b598ab%3A0xc31ebbd78087fc76!2sSector%2036A%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-multiply"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-heading text-4xl lg:text-5xl text-brand-wine mb-4">
                Strategically Located
              </h2>
              <p className="text-lg text-gray-600 flex items-start">
                <MapPin className="w-6 h-6 text-brand-gold mr-2 flex-shrink-0 mt-1" />
                <span>Sector 36A, Dwarka Expressway, Gurugram. Direct access to major hubs while maintaining a peaceful environment.</span>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-brand-light transition-colors">
                <div className="w-12 h-12 rounded-full bg-brand-wine/10 flex items-center justify-center text-brand-wine flex-shrink-0">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xl text-brand-dark mb-1">Healthcare</h4>
                  <p className="text-gray-600">Close proximity to Medanta, Artemis, and Fortis hospitals.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-brand-light transition-colors">
                <div className="w-12 h-12 rounded-full bg-brand-wine/10 flex items-center justify-center text-brand-wine flex-shrink-0">
                  <Plane className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xl text-brand-dark mb-1">Connectivity</h4>
                  <p className="text-gray-600">20 minutes from IGI Airport via Dwarka Expressway.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-brand-light transition-colors">
                <div className="w-12 h-12 rounded-full bg-brand-wine/10 flex items-center justify-center text-brand-wine flex-shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-xl text-brand-dark mb-1">Lifestyle</h4>
                  <p className="text-gray-600">Minutes away from Cyber City and premium retail destinations.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

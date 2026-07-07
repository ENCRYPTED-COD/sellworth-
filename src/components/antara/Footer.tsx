"use client";

import LeadForm from "./LeadForm";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Final CTA Section */}
        <div className="py-24 border-b border-white/10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl lg:text-5xl leading-tight">
                Give Your Loved Ones The <span className="text-brand-gold">Lifestyle They Deserve</span>
              </h2>
              <p className="text-lg text-white/70">
                Secure their future in a community where every detail is tailored for comfort, wellness, and joy.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-brand-gold" />
                  <a href="tel:+919999266369" className="hover:text-brand-gold transition-colors">+91 9999 266 369</a>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-brand-gold" />
                  <a href="mailto:care@sellworth.in" className="hover:text-brand-gold transition-colors">care@sellworth.in</a>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-1" />
                  <span className="text-white/80 leading-relaxed">
                    Estate 361, Sector 36A,<br />
                    Dwarka Expressway, Gurugram
                  </span>
                </div>
              </div>
            </div>

            {/* Form Again for bottom conversion */}
            <div>
              <LeadForm />
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="py-8 text-sm text-white/40 space-y-4">
          <p>
            <strong>Disclaimer:</strong> This is an authorized channel partner website for lead generation purposes only and not the official website. The information provided herein is for informational purposes. All images, layouts, and amenities are subject to change by the developer. 
          </p>
          <p>
            HARERA REGISTRATION NO. : RC/REP/HARERA/GGM/1012/744/2025/115. HARERA WEBSITE: HTTPS://HARYANARERA.GOV.IN/
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-white/10">
            <p>&copy; {new Date().getFullYear()} Estate 361 Managed by Antara. All rights reserved.</p>
            <div className="space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

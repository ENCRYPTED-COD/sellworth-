"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { trackLeadSubmit } from "@/lib/tracking";
import { Lock, Video, Calendar } from "lucide-react";

export default function NRILeadForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    countryCode: "+1",
    email: "",
    parentCity: "",
    timezone: "EST",
    intent: "Virtual Consultation",
    timeline: "Immediately",
    utm_source: "",
    utm_campaign: "",
    utm_medium: "",
    utm_content: "",
    utm_term: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData((prev) => ({
      ...prev,
      utm_source: params.get("utm_source") || "NRI_Page",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
    }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const fullData = {
      ...formData,
      fullPhone: `${formData.countryCode} ${formData.phone}`
    };

    trackLeadSubmit(fullData);

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/thank-you");
    }, 800);
  };

  return (
    <div id="lead-form" className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border-t-4 border-brand-gold w-full relative">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-wine text-white text-xs font-bold px-4 py-1 rounded-full flex items-center space-x-1 shadow-lg whitespace-nowrap">
        <Video className="w-3 h-3" />
        <span>1-ON-1 VIRTUAL CONSULTATION</span>
      </div>

      <div className="text-center mt-2 mb-6">
        <h3 className="font-heading text-2xl font-semibold text-brand-wine mb-1">
          Schedule a Private Briefing
        </h3>
        <p className="text-gray-500 text-sm">
          Discuss your parents' healthcare and lifestyle needs with our senior living experts via Zoom.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input type="text" name="name" placeholder="Your Full Name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-gold" />
        </div>
        <div>
          <input type="email" name="email" placeholder="Your Email Address" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-gold" />
        </div>
        
        <div className="flex space-x-2">
          <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="w-24 px-2 py-3 bg-brand-light border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-gold">
            <option value="+1">+1 (US/CA)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+971">+971 (UAE)</option>
            <option value="+65">+65 (SG)</option>
            <option value="+61">+61 (AU)</option>
            <option value="+91">+91 (IN)</option>
          </select>
          <input type="tel" name="phone" placeholder="Your Mobile Number" required value={formData.phone} onChange={handleChange} className="flex-1 px-4 py-3 bg-brand-light border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-gold" />
        </div>

        <div className="flex space-x-2">
           <input type="text" name="parentCity" placeholder="Parents' City in India" required value={formData.parentCity} onChange={handleChange} className="w-1/2 px-4 py-3 bg-brand-light border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-gold" />
           <select name="timezone" value={formData.timezone} onChange={handleChange} className="w-1/2 px-2 py-3 bg-brand-light border border-gray-200 rounded-md focus:ring-2 focus:ring-brand-gold text-sm text-gray-600">
             <option value="EST">EST (US East)</option>
             <option value="PST">PST (US West)</option>
             <option value="GMT">GMT (UK)</option>
             <option value="GST">GST (UAE)</option>
             <option value="SGT">SGT (Singapore)</option>
           </select>
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full bg-brand-gold hover:bg-[#b08b4f] text-brand-dark font-semibold py-4 px-6 rounded-md shadow-lg flex items-center justify-center space-x-2 mt-2 transition-transform hover:scale-[1.02]">
          <Calendar className="w-5 h-5" />
          <span>{isSubmitting ? "Booking..." : "Request Available Slots"}</span>
        </button>
        
        <div className="flex items-center justify-center space-x-1.5 mt-4 text-[11px] text-gray-400">
          <Lock className="w-3 h-3" />
          <span>Data securely sent. Confidentiality guaranteed.</span>
        </div>
      </form>
    </div>
  );
}

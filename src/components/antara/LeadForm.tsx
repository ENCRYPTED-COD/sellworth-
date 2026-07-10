"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { trackLeadSubmit } from "@/lib/tracking";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";

export default function LeadForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    countryCode: "+91",
    email: "",
    cityCountry: "",
    intent: "Parents",
    timeline: "Immediately",
    utm_source: "",
    utm_campaign: "",
    utm_medium: "",
    utm_content: "",
    utm_term: "",
  });

  useEffect(() => {
    // Capture all 5 UTM parameters securely on mount
    const params = new URLSearchParams(window.location.search);
    setFormData((prev) => ({
      ...prev,
      utm_source: params.get("utm_source") || "",
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

  const handleIntentChange = (intent: string) => {
    setFormData((prev) => ({ ...prev, intent }));
  };

  const handleTimelineChange = (timeline: string) => {
    setFormData((prev) => ({ ...prev, timeline }));
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const leadData = {
      name: formData.name,
      phone: `${formData.countryCode} ${formData.phone}`,
      email: formData.email,
      source: "Estate 361 Landing Page",
    };

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error(result);
      throw new Error(result.message || "Failed to submit");
    }

    // Analytics
    trackLeadSubmit(leadData);

    // Redirect
    router.push("/thank-you");
  } catch (error) {
    console.error("Lead Submission Error:", error);
    alert("Unable to submit the form. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div id="lead-form" className="bg-white p-6 md:p-8 rounded-xl shadow-2xl border-t-4 border-brand-gold w-full max-w-md mx-auto scroll-mt-24">
      <div className="text-center mb-6">
        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-brand-wine mb-2">
          Unlock Exclusive Details
        </h3>
        <p className="text-gray-600 text-sm">
          Download the comprehensive Estate 361 Brochure, Pricing, and Floor Plans.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors"
          />
        </div>
        
        {/* Phone */}
        <div className="flex space-x-2">
          <select 
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="w-24 px-2 py-3 bg-brand-light border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold"
          >
            <option value="+91">+91 (IN)</option>
            <option value="+1">+1 (US/CA)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+971">+971 (UAE)</option>
            <option value="+65">+65 (SG)</option>
            <option value="+61">+61 (AU)</option>
          </select>
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 px-4 py-3 bg-brand-light border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors"
          />
        </div>

        {/* City/Country */}
        <div>
          <input
            type="text"
            name="cityCountry"
            placeholder="Current City & Country"
            required
            value={formData.cityCountry}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-brand-light border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-gold transition-colors"
          />
        </div>

        {/* Intent Pill Buttons */}
        <div>
          <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Who is this for?</label>
          <div className="flex space-x-2">
            {["Parents", "Self"].map((intent) => (
              <button
                key={intent}
                type="button"
                onClick={() => handleIntentChange(intent)}
                className={cn(
                  "flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all border",
                  formData.intent === intent 
                    ? "bg-brand-wine text-white border-brand-wine shadow-md" 
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                )}
              >
                For {intent}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Pill Buttons */}
        <div>
          <label className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Expected Timeline</label>
          <div className="flex space-x-2">
            {["Immediately", "3-6 months", "Future planning"].map((timeline) => (
              <button
                key={timeline}
                type="button"
                onClick={() => handleTimelineChange(timeline)}
                className={cn(
                  "flex-1 py-2 px-2 rounded-md text-xs font-medium transition-all border leading-tight",
                  formData.timeline === timeline 
                    ? "bg-brand-wine text-white border-brand-wine shadow-md" 
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                )}
              >
                {timeline}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand-gold hover:bg-[#b08b4f] text-brand-dark font-semibold py-4 px-6 rounded-md transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center space-x-2 mt-2"
        >
          <span>{isSubmitting ? "Processing..." : "Download Brochure Now"}</span>
        </button>
        
        <div className="flex items-center justify-center space-x-1.5 mt-4 text-[11px] text-gray-500">
          <Lock className="w-3 h-3" />
          <span>Your data is 100% secure. We will never spam you.</span>
        </div>
      </form>
    </div>
  );
}

"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

export default function NriServices() {
  const triggerConsultation = () => {
    window.dispatchEvent(new Event("open-whatsapp-consultation"));
  };

  const countries = [
    { name: "Dubai", timezone: "GST (UTC+4)", hub: "Downtown Hub" },
    { name: "USA", timezone: "EST / PST", hub: "New York Desk" },
    { name: "Canada", timezone: "EST (UTC-5)", hub: "Toronto Liaison" },
    { name: "United Kingdom", timezone: "GMT (UTC+0)", hub: "London Office" },
    { name: "Singapore", timezone: "SGT (UTC+8)", hub: "Marina Bay Desk" },
    { name: "Australia", timezone: "AEST (UTC+10)", hub: "Sydney Liaison" }
  ];

  const services = [
    {
      num: "01",
      title: "Property Investment Advisory",
      description: "Tailored buy-side recommendations based on your capital layout requirements, location preferences, and rental yield objectives in Gurgaon."
    },
    {
      num: "02",
      title: "Virtual Property Experience",
      description: "Ultra-high-definition video walkthroughs, live drone site surveys, online document reviews, and collaborative digital developer pitches."
    },
    {
      num: "03",
      title: "Documentation Assistance",
      description: "Concierge facilitation of Power of Attorney (POA) registration, PAN registration, FEMA-compliant banking flows, and developer signing."
    },
    {
      num: "04",
      title: "End-to-End Management",
      description: "Seamless support extending from initial portfolio shortlisting to construction tracking, keys handover, and subsequent tenant placements."
    }
  ];

  const insights = [
    {
      title: "Luxury Residential Growth",
      detail: "Gurgaon's super-luxury residences (₹10 Cr+) have seen consistent capital appreciation of 18-24% year-on-year, driven by limited golf-course road inventory."
    },
    {
      title: "Commercial Expansion",
      detail: "Institutional Grade-A office acquisitions in locations like Cyber City offer stable yield profiles between 8.5% and 10% with solid corporate leases."
    },
    {
      title: "Global Corporate Presence",
      detail: "Over 70% of Fortune 500 companies have their Indian headquarters in Gurgaon, driving high-income executive housing rental demand."
    },
    {
      title: "Infrastructure Development",
      detail: "The completion of the Dwarka Expressway and expansion of the rapid metro lines have unlocked new premium corridors for high-capital placement."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-luxury-ivory text-luxury-black font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full bg-luxury-black overflow-hidden flex items-center">
        {/* Slow zoom luxury background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none scale-105 animate-[pulse_8s_infinite]"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/2217659714/photo/aerial-view-of-colorful-sunset-in-gurgaon-delhi-ncr.jpg?s=612x612&w=0&k=20&c=WpvCfmQa3PGSDvQZL1SASaNZ-msERZXh6OV9R_olo6A=')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-luxury-black/60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full z-10 pt-20">
          <div className="max-w-3xl flex flex-col space-y-8">
            <div className="flex items-center space-x-4">
              <span className="h-[1px] w-12 bg-luxury-gold" />
              <span className="font-mono text-xs tracking-[0.4em] text-luxury-gold uppercase">
                Cross-Border Asset Planning
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-luxury-ivory tracking-wide leading-tight">
              India&apos;s Finest Addresses, <br />
              <span className="italic text-luxury-gold font-light">Wherever You Are.</span>
            </h1>

            <p className="font-sans text-sm md:text-lg text-luxury-ivory/70 font-light tracking-wide leading-relaxed max-w-2xl">
              Exclusive real estate advisory for global Indians investing in premium residential and commercial developments. Connecting global private wealth to Gurgaon&apos;s primary capital appreciation assets.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button
                onClick={triggerConsultation}
                className="font-sans text-xs tracking-[0.2em] text-luxury-black bg-luxury-gold hover:bg-luxury-gold/90 px-8 py-5 transition-colors uppercase font-bold text-center cursor-pointer"
              >
                Speak With NRI Advisor
              </button>
              <Link
                href="/#collections"
                className="font-sans text-xs tracking-[0.2em] text-luxury-ivory border border-luxury-ivory/30 hover:border-luxury-gold px-8 py-5 transition-all uppercase text-center"
              >
                Explore Investment Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Trust Section */}
      <section className="relative py-24 md:py-36 bg-luxury-ivory overflow-hidden border-b border-luxury-gold/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Minimal Map Visual */}
            <div className="lg:col-span-6 relative">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.06)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              
              {/* Minimal SVG Dot Matrix Globe/Map representation */}
              <svg viewBox="0 0 400 300" className="w-full h-auto stroke-luxury-gold/20 fill-none stroke-[1]">
                <circle cx="200" cy="150" r="120" strokeDasharray="3 3" className="stroke-luxury-gold/40" />
                <circle cx="200" cy="150" r="80" strokeDasharray="5 5" />
                <circle cx="200" cy="150" r="40" />
                {/* Hub connection lines */}
                <line x1="200" y1="150" x2="80" y2="100" />
                <line x1="200" y1="150" x2="300" y2="90" />
                <line x1="200" y1="150" x2="320" y2="210" />
                <line x1="200" y1="150" x2="100" y2="200" />
                {/* Node dots */}
                <circle cx="200" cy="150" r="4" className="fill-luxury-gold stroke-none" />
                <circle cx="80" cy="100" r="3" className="fill-luxury-black stroke-none" />
                <circle cx="300" cy="90" r="3" className="fill-luxury-black stroke-none" />
                <circle cx="320" cy="210" r="3" className="fill-luxury-black stroke-none" />
                <circle cx="100" cy="200" r="3" className="fill-luxury-black stroke-none" />
              </svg>
              
              <div className="absolute bottom-4 left-4 font-mono text-[9px] tracking-widest text-luxury-gold uppercase">
                Advisory Routing Matrix: global-to-gurgaon
              </div>
            </div>

            {/* Right Column: Globe Details */}
            <div className="lg:col-span-6 space-y-12">
              <div className="space-y-4">
                <span className="font-mono text-xs tracking-[0.4em] text-luxury-gold uppercase block">
                  Global Client Footprint
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-luxury-black tracking-wide leading-tight">
                  Serving Global <br />
                  <span className="italic text-luxury-bronze font-light">Indian Families.</span>
                </h2>
                <p className="font-sans text-sm text-luxury-charcoal/70 font-light tracking-wide leading-relaxed">
                  We structure real estate allocations for non-resident Indians living across major economic capitals, establishing secure transactional pipelines directly to India.
                </p>
              </div>

              {/* Grid of Countries */}
              <div className="grid grid-cols-2 gap-8">
                {countries.map((country) => (
                  <div key={country.name} className="border-l border-luxury-gold/30 pl-4 space-y-1">
                    <h4 className="font-serif text-lg text-luxury-black">
                      {country.name}
                    </h4>
                    <p className="font-mono text-[9px] text-luxury-gold tracking-wider uppercase">
                      {country.hub}
                    </p>
                    <p className="font-sans text-[10px] text-luxury-charcoal/50">
                      {country.timezone}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NRI Services Section */}
      <section className="relative py-24 md:py-36 bg-luxury-black text-luxury-ivory overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.01)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Header */}
          <div className="max-w-2xl mb-24 space-y-4">
            <span className="font-mono text-xs tracking-[0.4em] text-luxury-gold uppercase block">
              Concierge Suite
            </span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-wide leading-tight">
              Bespoke Cross-Border <br />
              Services <span className="italic text-luxury-gold font-light">Portfolio.</span>
            </h2>
            <p className="font-sans text-sm text-luxury-ivory/60 font-light tracking-wide leading-relaxed">
              We handle the friction of overseas transactions. Our private office manages your acquisition process securely from initial query to leasing yield management.
            </p>
          </div>

          {/* Numbered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {services.map((service, idx) => (
              <div key={service.num} className="flex flex-col space-y-6 group">
                <div className="flex items-center space-x-6">
                  <span className="font-serif italic text-4xl md:text-5xl text-luxury-gold/40 group-hover:text-luxury-gold transition-colors duration-500 leading-none">
                    {service.num}
                  </span>
                  <div className="h-[1px] bg-luxury-gold/30 flex-grow origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-700" />
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-luxury-ivory tracking-wide font-normal">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-luxury-ivory/60 font-light tracking-wide leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest in Gurgaon Section */}
      <section className="relative py-24 md:py-36 bg-luxury-ivory overflow-hidden border-b border-luxury-gold/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header */}
          <div className="max-w-2xl mb-24 space-y-4">
            <span className="font-mono text-xs tracking-[0.4em] text-luxury-gold uppercase block">
              Market Intelligence
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-luxury-black tracking-wide leading-tight">
              Why Invest in <br />
              Gurgaon <span className="italic text-luxury-bronze font-light">Now.</span>
            </h2>
            <p className="font-sans text-sm text-luxury-charcoal/70 font-light tracking-wide leading-relaxed">
              Gurgaon remains the primary capital appreciation sink for North India. Here is how macro factors support overseas capital allocations.
            </p>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {insights.map((insight, idx) => (
              <div key={insight.title} className="border border-luxury-gold/20 p-8 bg-luxury-charcoal/[0.02] space-y-4">
                <h3 className="font-serif text-xl text-luxury-black tracking-wide font-normal">
                  {insight.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-luxury-charcoal/70 leading-relaxed font-light tracking-wide">
                  {insight.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Consultation CTA */}
          <div className="text-center pt-24">
            <button
              onClick={triggerConsultation}
              className="inline-flex items-center space-x-4 group border-b border-luxury-gold/30 pb-2 hover:border-luxury-gold transition-colors duration-300 font-mono text-xs tracking-[0.25em] text-luxury-gold uppercase cursor-pointer"
            >
              <span>Coordinate Advisory Briefing</span>
              <ArrowUpRight className="w-4 h-4 text-luxury-gold transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { properties, Property } from "@/data/properties";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Compass, Shield, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function PropertyDetail() {
  const params = useParams();
  const router = useRouter();
  const [property, setProperty] = useState<Property | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: ""
  });

  useEffect(() => {
    if (params?.slug) {
      const found = properties.find((p) => p.slug === params.slug);
      if (found) {
        setProperty(found);
      } else {
        router.push("/"); // Redirect if not found
      }
    }
  }, [params, router]);

  if (!property) {
    return (
      <div className="h-screen w-full bg-luxury-black flex items-center justify-center">
        <div className="font-mono text-xs tracking-[0.3em] text-luxury-gold uppercase animate-pulse">
          Retrieving Architectural Folio...
        </div>
      </div>
    );
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello Sellworth, I would like to schedule a private viewing for ${property.name}.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nSchedule Meet: ${formData.date}\nProperty Link: ${window.location.href}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919650400647?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-luxury-ivory text-luxury-black">
      {/* Reusable Luxury Navbar */}
      <Navbar />

      {/* Hero Visual Section */}
      <section className="relative h-[65vh] w-full bg-luxury-black overflow-hidden flex items-end pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 pointer-events-none"
          style={{ backgroundImage: `url('${property.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-luxury-black/60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
          <div className="space-y-4 max-w-3xl">
            {/* Back to Home Link */}
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-luxury-gold hover:text-luxury-ivory transition-colors duration-300 font-mono text-[10px] tracking-widest uppercase mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Portfolio</span>
            </Link>

            {/* Tags */}
            <div className="flex items-center space-x-3 text-[10px] font-mono tracking-widest text-luxury-gold uppercase">
              <span>{property.developer}</span>
              <span>&bull;</span>
              <span>{property.location}</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-6xl text-luxury-ivory tracking-wide leading-tight font-normal">
              {property.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Details Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Property Specifics & Details */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Overview / Pitch */}
            <div className="space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl text-luxury-black tracking-wide border-b border-luxury-gold/20 pb-4">
                Folio Overview
              </h2>
              <p className="font-sans text-sm md:text-base text-luxury-charcoal/80 leading-relaxed font-light tracking-wide">
                {property.description}
              </p>
              {property.brochure && (
                <a 
                  href={property.brochure} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block mt-6 border border-luxury-gold px-8 py-3 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-colors duration-300 font-mono text-xs uppercase tracking-widest font-bold shadow-sm"
                >
                  Download Presenter Brochure
                </a>
              )}
              
              {/* Additional Resources */}
              {property.resources && property.resources.length > 0 && (
                <div className="mt-8 pt-6 border-t border-luxury-gold/20">
                  <h4 className="font-serif text-lg text-luxury-black mb-4">Project Resources</h4>
                  <div className="flex flex-wrap gap-4">
                    {property.resources.map((res, i) => (
                      <a
                        key={i}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border border-luxury-gold/50 px-6 py-2 text-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-black transition-colors duration-300 font-sans text-xs tracking-wider"
                      >
                        {res.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Technical Specifications Grid */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-luxury-black tracking-wide">
                Architectural Specifications
              </h3>
              <div className="grid grid-cols-2 gap-y-6 gap-x-8 bg-luxury-charcoal/5 p-8 border border-luxury-gold/15">
                {property.overview.map((spec) => (
                  <div key={spec.key} className="space-y-1">
                    <span className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase block">
                      {spec.key}
                    </span>
                    <span className="font-serif text-base text-luxury-black">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-luxury-black tracking-wide border-b border-luxury-gold/20 pb-4">
                Architecture Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {property.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="mt-1 flex-shrink-0">
                      <Compass className="w-4 h-4 text-luxury-gold" />
                    </div>
                    <p className="font-sans text-xs md:text-sm text-luxury-charcoal/80 font-light tracking-wide leading-relaxed">
                      {h}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Gallery */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-luxury-black tracking-wide">
                Visual Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {property.images.slice(1).map((img, index) => (
                  <div key={index} className="aspect-[4/3] w-full overflow-hidden border border-luxury-gold/10">
                    <img
                      src={img}
                      alt={`${property.name} gallery ${index + 1}`}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-750"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Location Advantages */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-luxury-black tracking-wide border-b border-luxury-gold/20 pb-4">
                Location Advantages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {property.advantages.map((adv, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="mt-1 flex-shrink-0">
                      <MapPin className="w-4 h-4 text-luxury-gold" />
                    </div>
                    <p className="font-sans text-xs md:text-sm text-luxury-charcoal/80 font-light tracking-wide leading-relaxed">
                      {adv}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities list */}
            <div className="space-y-6">
              <h3 className="font-serif text-xl text-luxury-black tracking-wide border-b border-luxury-gold/20 pb-4">
                Exclusive Amenities
              </h3>
              <ul className="grid grid-cols-2 gap-4 font-sans text-xs md:text-sm text-luxury-charcoal/80 font-light tracking-wide">
                {property.amenities.map((amenity, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <Shield className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Dynamic Booking Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
            <div className="bg-luxury-black text-luxury-ivory p-8 border border-luxury-gold/20 shadow-[0_20px_45px_rgba(0,0,0,0.15)]">
              <div className="space-y-4 mb-8">
                <span className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase block">
                  Private Showing
                </span>
                <h3 className="font-serif text-2xl tracking-wide font-normal">
                  Request Viewing
                </h3>
                <p className="font-sans text-[11px] text-luxury-ivory/50 leading-relaxed font-light">
                  Coordinate a private tour of the site under complete confidentiality with a Sellworth acquisitions advisor.
                </p>
              </div>

              <form onSubmit={handleBooking} className="space-y-6">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="booking-name" className="font-mono text-[8px] tracking-widest text-luxury-gold/80 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="booking-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter full name"
                    className="bg-transparent border-b border-luxury-ivory/20 focus:border-luxury-gold py-2 text-xs focus:outline-none transition-colors font-sans tracking-wide text-luxury-ivory placeholder-luxury-ivory/20"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="booking-phone" className="font-mono text-[8px] tracking-widest text-luxury-gold/80 uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="booking-phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-transparent border-b border-luxury-ivory/20 focus:border-luxury-gold py-2 text-xs focus:outline-none transition-colors font-sans tracking-wide text-luxury-ivory placeholder-luxury-ivory/20"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="booking-date" className="font-mono text-[8px] tracking-widest text-luxury-gold/80 uppercase">
                    Schedule Meet
                  </label>
                  <input
                    type="date"
                    id="booking-date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                    className="bg-luxury-black border-b border-luxury-ivory/20 focus:border-luxury-gold py-2 text-xs focus:outline-none transition-colors font-sans tracking-wide text-luxury-ivory [color-scheme:dark]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-3 bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black font-sans font-bold text-[10px] tracking-[0.25em] py-4 uppercase transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  <span>Request Private Viewing</span>
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-luxury-ivory/10 text-center">
                <span className="font-mono text-[8px] tracking-[0.3em] text-luxury-gold/50 uppercase">
                  CONFIDENTIAL ADVISORY DESK
                </span>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

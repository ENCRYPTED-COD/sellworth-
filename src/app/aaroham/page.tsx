"use client";

import React from "react";
import "./aaroham.css";

// Import Components
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import WhyAaroham from "./components/WhyAaroham";
import Pricing from "./components/Pricing";
import PaymentPlans from "./components/PaymentPlans";
import Maintenance from "./components/Maintenance";
import Amenities from "./components/Amenities";
import FloorPlans from "./components/FloorPlans";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function AarohamPage() {
  return (
    <div className="aaroham-theme min-h-screen bg-[var(--background)] font-body text-foreground relative">
      
      {/* Global Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-70 pointer-events-none"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
          type="video/mp4"
        />
      </video>

      {/* Main Content wrapped to be above the global background */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Overview />
        <WhyAaroham />
        <Pricing />
        <PaymentPlans />
        <Maintenance />
        <Amenities />
        <FloorPlans />
        <Gallery />
        <Location />
        <Testimonials />
        <Contact />
        <Footer />
      </div>

    </div>
  );
}

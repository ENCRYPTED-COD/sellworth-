"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Collections from "@/components/Collections";
import WhySellworth from "@/components/WhySellworth";
import Developers from "@/components/Developers";
import Numbers from "@/components/Numbers";
import Locations from "@/components/Locations";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import EmiCalculator from "@/components/EmiCalculator";

export default function Home() {
  return (
    <>
      {/* Main website content reveals with a slow luxury fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col min-h-screen"
      >
        <Navbar />
        <main className="flex-1">
          <Hero />
          <BrandStory />
          <Collections />
          <WhySellworth />
          <Developers />
          <Numbers />
          <Locations />
          <EmiCalculator />
          <ContactForm />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

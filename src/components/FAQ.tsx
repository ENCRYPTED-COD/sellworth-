"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are the best areas to buy property in Gurgaon?",
    answer: "The best areas to buy property in Gurgaon depend on the buyer’s budget, workplace location, preferred property type, and investment goal. Popular searches include flats in Gurgaon, property in Gurugram, residential projects in Gurgaon, Golf Course Road properties, Sohna Road flats, Dwarka Expressway property, and New Gurgaon apartments. Compare connectivity, schools, hospitals, metro access, builder reputation, possession date, and maintenance charges before deciding. Browse locality-wise listings with Sellworth to compare verified apartments, builder floors, plots, and luxury homes in Gurgaon."
  },
  {
    question: "Which is better: a ready-to-move or under-construction flat in Gurgaon?",
    answer: "A ready-to-move flat in Gurgaon is ideal for buyers who need immediate possession and want to inspect the completed apartment, neighbourhood, amenities, and maintenance standards before paying. An under-construction property in Gurgaon may provide flexible payment plans and newer configurations, but requires close review of delivery timelines and project approvals. Buyers also search for 3 BHK flats in Gurgaon, new launch projects in Gurugram, and apartments for sale in Gurgaon. Sellworth can help compare possession-ready homes with carefully selected under-construction residential projects."
  },
  {
    question: "How can buyers find RERA-approved properties in Gurgaon?",
    answer: "Buyers looking for RERA approved projects in Gurgaon should verify the project and promoter through the official HRERA portal before booking. Search interest commonly includes HRERA registered projects Gurugram, RERA approved flats Gurgaon, property verification Gurgaon, and trusted real estate agent in Gurgaon. A useful property page should display the RERA registration number, developer name, possession information, configuration, location map, and available inventory. This builds confidence, improves time spent on the website, and encourages users to explore relevant project pages, buyer guides, and verified property listings."
  },
  {
    question: "Is Dwarka Expressway a good location to buy property in Gurgaon?",
    answer: "Property on Dwarka Expressway is a major search theme for buyers comparing Gurgaon–Delhi connectivity, new residential projects, and future-ready locations. Users often search for flats near Dwarka Expressway, 3 BHK on Dwarka Expressway, Dwarka Expressway projects, property in Sector 102 Gurgaon, and Gurgaon investment property. Create useful sector-specific pages with verified listings, price ranges, maps, possession status, nearby facilities, and enquiry options. Instead of making broad promises about returns, help users compare properties by budget, family requirements, and actual site connectivity."
  },
  {
    question: "Is commercial property in Gurgaon a good investment?",
    answer: "Commercial property in Gurgaon attracts businesses, investors, and buyers searching for office spaces, retail shops, SCO plots, and leased assets. High-intent searches include office space in Gurgaon, shops for sale in Gurgaon, SCO plots in Gurgaon, commercial property on Golf Course Road, and leased commercial property Gurgaon. Build detailed commercial pages showing the exact location, carpet area, parking, tenant details where applicable, lease terms, possession status, and price on request. Link each listing to a consultation form so organic visitors can book a site visit or request verified investment options."
  },
  {
    question: "What are the best 3 BHK flats in Gurgaon for families?",
    answer: "Buyers searching for 3 BHK flats in Gurgaon usually want more space for a growing family, a home office, or visiting relatives. A useful page should compare 3 BHK apartments in Gurugram, ready-to-move options, new launches, builder floors, and gated communities. Include location, carpet area, possession status, amenities, schools, hospitals, and commute options. Help visitors filter properties by budget and preferred sector, then guide them to book a site visit through Sellworth."
  },
  {
    question: "Which are the best luxury apartments in Gurgaon?",
    answer: "Luxury apartments in Gurgaon appeal to buyers looking for large layouts, premium locations, high-quality amenities, privacy, and managed communities. Searchers use terms such as luxury flats in Gurugram, premium apartments Gurgaon, Golf Course Road luxury homes, and 4 BHK flats in Gurgaon. Create detailed pages with floor plans, actual photographs, project approvals, nearby business hubs, amenities, and private viewing options. Avoid generic ‘luxury’ claims; clearly explain what makes each property distinctive and link users to similar premium projects."
  },
  {
    question: "Are builder floors in Gurgaon a good option to buy?",
    answer: "Builder floors in Gurgaon are popular with buyers who prefer lower-density living, more privacy, and a home-like setting over a high-rise apartment. Users search for independent floors in Gurgaon, builder floor for sale in Gurugram, luxury builder floors Gurgaon, and floors in DLF Gurgaon. Your page should explain ownership type, parking, lift access, terrace rights, security, plot size, and legal verification requirements. Add locality filters and verified listings to help buyers move from research to a meaningful enquiry."
  },
  {
    question: "Where can I find residential plots for sale in Gurgaon?",
    answer: "Buyers looking for plots for sale in Gurgaon often want flexibility to build a custom home or hold land as a long-term asset. Target related searches such as residential plots in Gurugram, plot investment Gurgaon, plotted development Gurgaon, and land for sale in Gurgaon. Provide plot size, location, road width, ownership details, development status, documentation, and site-visit information. Strong plot pages answer practical questions rather than making return promises, and should lead visitors to verified inventory and property-advisor support."
  },
  {
    question: "How do I choose a trusted property dealer in Gurgaon?",
    answer: "Choosing a property dealer in Gurgaon requires more than comparing listings. Buyers should look for local knowledge, transparent communication, project verification support, clear brokerage terms, and an ability to arrange genuine site visits. This page can rank for real estate agent Gurgaon, property consultant Gurugram, best property dealer Gurgaon, and real estate company in Gurgaon. Showcase your service areas, property categories, client process, RERA information where relevant, and direct contact options to convert local organic visitors into qualified enquiries."
  },
  {
    question: "What is the property price in Gurgaon by locality?",
    answer: "A property price in Gurgaon guide can attract buyers at the research stage before they choose a project or broker. Cover major areas such as Golf Course Road, Sohna Road, Dwarka Expressway, New Gurgaon, and key sectors with regularly updated price ranges, property types, and market context. Include keyword variations such as Gurgaon property rates, flat price in Gurgaon, price per square foot Gurgaon, and Gurugram property market. Link every locality section to matching listings so price researchers can seamlessly become site-visit leads."
  },
  {
    question: "How can I buy a home in Gurgaon with a home loan?",
    answer: "A guide to buying a home with a home loan for property in Gurgaon can bring in first-time buyers who need clarity before viewing homes. Explain the usual buying journey: budget planning, property shortlisting, document checks, loan eligibility, lender approval, agreement review, and registration. Naturally include buy flat in Gurgaon, home loan eligibility India, documents for home loan, and property buying process Gurgaon. Offer a link to loan-ready properties and a consultation form, but make clear that loan approval remains with the lender."
  },
  {
    question: "Which Gurgaon localities are best for families?",
    answer: "Buyers searching for the best localities in Gurgaon for families care about everyday convenience as much as the home itself. Build content around family-friendly areas in Gurgaon, residential areas in Gurugram, flats near schools Gurgaon, and safe localities in Gurgaon. Compare access to schools, healthcare, markets, parks, offices, public transport, and community amenities without making unsupported safety claims. Add property filters for 2 BHK, 3 BHK, builder floors, and ready-to-move homes to turn lifestyle research into relevant property exploration."
  },
  {
    question: "Should I buy a resale flat in Gurgaon?",
    answer: "Resale flats in Gurgaon can suit buyers who want an established neighbourhood, earlier possession, and the opportunity to inspect the exact home before making a decision. Target terms including resale property Gurugram, pre-owned flats in Gurgaon, second-hand flat Gurgaon, and ready-to-move resale flat. Explain how buyers can compare the asking price, maintenance history, society rules, parking, title documents, outstanding dues, and home-loan eligibility. Display verified resale listings with clear photographs and a simple request-for-details CTA."
  },
  {
    question: "What are the best properties near Cyber City Gurgaon?",
    answer: "A page for property near Cyber City Gurgaon targets professionals and investors searching for homes close to major business districts. Use related phrases such as flats near Cyber City Gurgaon, apartment near Cyber Hub, homes near Udyog Vihar, and rental property near Cyber City. Explain nearby residential options, commuting routes, rental considerations, apartment configurations, and daily conveniences. Link users to listings by commute preference, including ready-to-move apartments, furnished homes, resale properties, and premium residences suitable for working professionals."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-luxury-black text-luxury-ivory border-t border-luxury-ivory/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16 space-y-4">
          <span className="font-mono text-xs tracking-[0.4em] text-luxury-gold uppercase block">
            Client Advisory
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-wide">
            Frequently Asked <span className="italic text-luxury-gold font-light">Questions.</span>
          </h2>
          <p className="font-sans text-sm text-luxury-ivory/60 font-light max-w-2xl mx-auto leading-relaxed">
            Expert insights and guidance on navigating the Gurgaon real estate market, curated by our private advisory desk.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-luxury-ivory/10 bg-luxury-charcoal/20 overflow-hidden transition-colors hover:border-luxury-gold/30"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-serif text-lg md:text-xl text-luxury-ivory pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-luxury-gold flex-shrink-0 transition-transform duration-500 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="w-8 h-[1px] bg-luxury-gold/50 mb-4" />
                      <p className="font-sans text-sm text-luxury-ivory/70 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function WhySellworth() {
  const points = [
    {
      num: "01",
      title: "Strategic Partnership",
      description: "As authorized channel partners, we align your real estate acquisitions with your overall wealth preservation strategy. Our customized approach considers asset diversification, rental yields, tax optimization, and wealth legacy transfers."
    },
    {
      num: "02",
      title: "Market Intelligence",
      description: "Our proprietary data models and deep regional roots in Gurgaon unlock predictive insights. We analyze developer solvencies, land-record histories, infrastructure timelines, and macro pricing vectors before they hit reports."
    },
    {
      num: "03",
      title: "Developer Relationships",
      description: "Sellworth holds institutional relationships with Gurgaon's premium tier-1 developers. We secure preferred pricing, priority inventory releases, and bespoke spatial customizations that are entirely closed to the retail public."
    },
    {
      num: "04",
      title: "End-to-End Assistance",
      description: "From structural legal diligence to spatial architecture guidance, we provide full concierge services. Our partnership extends to property management, premium tenant acquisition, and eventual portfolio liquidation."
    }
  ];

  return (
    <section className="relative py-24 md:py-36 bg-luxury-ivory text-luxury-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs tracking-[0.4em] text-luxury-gold uppercase block">
              The Sellworth Difference
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight">
              What Makes Us <br />
              <span className="italic font-light text-luxury-bronze">Different?</span>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="font-sans text-sm md:text-base text-luxury-charcoal/80 font-light tracking-wide leading-relaxed max-w-2xl pt-4">
              For us, there&apos;s nothing above customer satisfaction. We stepped into the real estate industry to carve a niche for ourselves as a reliable channel partner that works on customer-first policies. We understand there&apos;s a lot riding on us&mdash;each and every suggestion impacts the life of our customer to a great extent. And that&apos;s where we trust ourselves, so that our customers can.
            </p>
          </div>
        </div>

        {/* Numbered Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {points.map((point, idx) => (
            <motion.div
              key={point.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="flex flex-col space-y-6 group"
            >
              {/* Number and Line */}
              <div className="flex items-center space-x-6">
                <span className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-luxury-gold/40 group-hover:text-luxury-gold transition-colors duration-500 leading-none">
                  {point.num}
                </span>
                <div className="h-[1px] bg-luxury-gold/30 flex-grow origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-700" />
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl lg:text-3xl text-luxury-black tracking-wide font-normal">
                  {point.title}
                </h3>
                <p className="font-sans text-sm text-luxury-charcoal/70 font-light tracking-wide leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

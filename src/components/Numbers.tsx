"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (val) => setCurrent(Math.floor(val))
      });
      return controls.stop;
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{current.toLocaleString()}{suffix}
    </span>
  );
}

export default function Numbers() {
  const stats = [
    {
      target: 15000,
      prefix: "₹",
      suffix: " Cr+",
      label: "Transaction Value Assisted",
      description: "Direct advisory in ultra-high-net-worth real estate layouts."
    },
    {
      target: 2500,
      prefix: "",
      suffix: "+",
      label: "Distinguished Clients",
      description: "Serving business leaders, family offices, and NRI investors."
    },
    {
      target: 25,
      prefix: "",
      suffix: "+",
      label: "Developer Partners",
      description: "Direct strategic alliances with tier-1 developers in India."
    },
    {
      target: 50,
      prefix: "",
      suffix: "+",
      label: "Premium Developments",
      description: "Exclusive portfolios in residential and commercial sectors."
    }
  ];

  return (
    <section id="numbers" className="relative py-24 bg-luxury-ivory text-luxury-black overflow-hidden border-t border-luxury-gold/10">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:100px_100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="flex flex-col space-y-4 md:border-l md:border-luxury-gold/20 md:pl-8 first:border-0 first:pl-0"
            >
              {/* Value */}
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-gold font-light tracking-wide leading-none">
                <Counter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
              </h3>
              
              {/* Label */}
              <div className="space-y-2">
                <h4 className="font-sans text-xs tracking-[0.25em] text-luxury-black uppercase font-bold">
                  {stat.label}
                </h4>
                <p className="font-sans text-xs text-luxury-charcoal/60 leading-relaxed font-light tracking-wide">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Landmark, ArrowUpRight } from "lucide-react";

export default function EmiCalculator() {
  const [propertyValue, setPropertyValue] = useState<number>(10); // in Crores
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // %
  const [interestRate, setInterestRate] = useState<number>(8.5); // %
  const [tenureYears, setTenureYears] = useState<number>(20); // years

  const [emi, setEmi] = useState<number>(0);
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [ratios, setRatios] = useState({ principal: 50, interest: 50 });

  // Calculate EMI
  useEffect(() => {
    const valueRupees = propertyValue * 10000000;
    const downPaymentRupees = valueRupees * (downPaymentPercent / 100);
    const principalRupees = valueRupees - downPaymentRupees;
    
    setLoanAmount(principalRupees);

    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenureYears * 12;

    if (principalRupees <= 0) {
      setEmi(0);
      setTotalInterest(0);
      setTotalPayment(0);
      setRatios({ principal: 100, interest: 0 });
      return;
    }

    if (monthlyRate === 0) {
      const calculatedEmi = principalRupees / totalMonths;
      setEmi(calculatedEmi);
      setTotalInterest(0);
      setTotalPayment(principalRupees);
      setRatios({ principal: 100, interest: 0 });
      return;
    }

    const calculatedEmi = 
      (principalRupees * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const calculatedTotalPayment = calculatedEmi * totalMonths;
    const calculatedTotalInterest = calculatedTotalPayment - principalRupees;

    setEmi(calculatedEmi);
    setTotalPayment(calculatedTotalPayment);
    setTotalInterest(calculatedTotalInterest);

    const principalPct = (principalRupees / calculatedTotalPayment) * 100;
    const interestPct = (calculatedTotalInterest / calculatedTotalPayment) * 100;
    setRatios({ principal: principalPct, interest: interestPct });

  }, [propertyValue, downPaymentPercent, interestRate, tenureYears]);

  // Indian Currency Formatter
  const formatINR = (value: number) => {
    if (value >= 10000000) {
      return `₹ ${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹ ${(value / 100000).toFixed(2)} Lakh`;
    }
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section className="relative py-24 md:py-36 bg-luxury-charcoal text-luxury-ivory overflow-hidden border-t border-luxury-gold/15">
      {/* Background architectural vectors */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="font-mono text-xs tracking-[0.4em] text-luxury-gold uppercase block">
              Asset Modeling
            </span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-wide leading-tight">
              Capital Outflow & <br />
              <span className="italic text-luxury-gold font-light">Asset Planning.</span>
            </h2>
          </div>
          <p className="font-sans text-sm text-luxury-ivory/60 font-light tracking-wide max-w-md leading-relaxed">
            Estimate acquisition cash-flows for your portfolio. Toggle land interest rates and leverage terms to optimize wealth placement structure.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Sliders */}
          <div className="lg:col-span-7 space-y-10">
            {/* Property Value Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-bold">
                  Asset Value
                </label>
                <span className="font-serif text-2xl text-luxury-ivory">
                  {formatINR(propertyValue * 10000000)}
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="100"
                step="0.5"
                value={propertyValue}
                onChange={(e) => setPropertyValue(parseFloat(e.target.value))}
                className="w-full accent-luxury-gold cursor-pointer h-[2px] bg-luxury-ivory/20"
              />
              <div className="flex justify-between text-[9px] font-mono text-luxury-ivory/40">
                <span>₹2 Cr</span>
                <span>₹50 Cr</span>
                <span>₹100 Cr</span>
              </div>
            </div>

            {/* Down Payment Percent Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-bold">
                  Equity Margin / Down Payment
                </label>
                <span className="font-serif text-2xl text-luxury-ivory">
                  {downPaymentPercent}% <span className="text-xs text-luxury-ivory/50 font-sans">({formatINR(propertyValue * 10000000 * (downPaymentPercent / 100))})</span>
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(parseInt(e.target.value))}
                className="w-full accent-luxury-gold cursor-pointer h-[2px] bg-luxury-ivory/20"
              />
              <div className="flex justify-between text-[9px] font-mono text-luxury-ivory/40">
                <span>10%</span>
                <span>50%</span>
                <span>90%</span>
              </div>
            </div>

            {/* Grid Row: Interest Rate and Tenure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Interest Rate */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-bold">
                    Interest Rate (p.a.)
                  </label>
                  <span className="font-serif text-2xl text-luxury-ivory">
                    {interestRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="7.5"
                  max="15.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                  className="w-full accent-luxury-gold cursor-pointer h-[2px] bg-luxury-ivory/20"
                />
                <div className="flex justify-between text-[9px] font-mono text-luxury-ivory/40">
                  <span>7.5%</span>
                  <span>15.0%</span>
                </div>
              </div>

              {/* Tenure */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase font-bold">
                    Lending Tenure
                  </label>
                  <span className="font-serif text-2xl text-luxury-ivory">
                    {tenureYears} Years
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(parseInt(e.target.value))}
                  className="w-full accent-luxury-gold cursor-pointer h-[2px] bg-luxury-ivory/20"
                />
                <div className="flex justify-between text-[9px] font-mono text-luxury-ivory/40">
                  <span>5 Yrs</span>
                  <span>30 Yrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Output Sheet */}
          <div className="lg:col-span-5 bg-luxury-black/45 border border-luxury-ivory/5 p-8 md:p-12 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] space-y-8">
            <div className="border-b border-luxury-ivory/10 pb-6">
              <span className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase block mb-1">
                Estimated Monthly Outflow
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-luxury-gold font-light tracking-wide">
                {formatINR(emi)} <span className="text-xs font-sans text-luxury-ivory/60">/ Month</span>
              </h3>
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-4 text-sm">
              <div className="flex justify-between font-sans font-light tracking-wide">
                <span className="text-luxury-ivory/50">Principal Borrowed</span>
                <span>{formatINR(loanAmount)}</span>
              </div>
              <div className="flex justify-between font-sans font-light tracking-wide">
                <span className="text-luxury-ivory/50">Total Interest Payable</span>
                <span>{formatINR(totalInterest)}</span>
              </div>
              <div className="flex justify-between font-sans font-light tracking-wide border-t border-luxury-ivory/10 pt-4 font-semibold">
                <span className="text-luxury-ivory/80">Total Capital Outflow</span>
                <span className="text-luxury-gold">{formatINR(totalPayment)}</span>
              </div>
            </div>

            {/* Principal vs Interest Ratio visualizer */}
            <div className="space-y-3">
              <span className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase block">
                Principal vs. Interest Ratio
              </span>
              {/* Dual progress bar */}
              <div className="h-2 w-full flex bg-luxury-charcoal rounded-full overflow-hidden">
                <div
                  className="h-full bg-luxury-ivory transition-all duration-500"
                  style={{ width: `${ratios.principal}%` }}
                />
                <div
                  className="h-full bg-luxury-gold/70 transition-all duration-500"
                  style={{ width: `${ratios.interest}%` }}
                />
              </div>
              <div className="flex justify-between font-mono text-[8px] tracking-widest text-luxury-ivory/40">
                <span className="flex items-center"><span className="w-1.5 h-1.5 bg-luxury-ivory rounded-full mr-1.5" />Principal: {ratios.principal.toFixed(0)}%</span>
                <span className="flex items-center"><span className="w-1.5 h-1.5 bg-luxury-gold/70 rounded-full mr-1.5" />Interest: {ratios.interest.toFixed(0)}%</span>
              </div>
            </div>

            {/* Finance Diligence CTA */}
            <div className="pt-4 border-t border-luxury-ivory/10">
              <a
                href="#contact"
                className="w-full flex items-center justify-center space-x-3 bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black font-sans font-bold text-xs tracking-[0.25em] py-4 uppercase transition-colors"
              >
                <Landmark className="w-4 h-4" />
                <span>Wealth Advisory Desk</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

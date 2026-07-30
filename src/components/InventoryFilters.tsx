"use client";

import { SlidersHorizontal, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Property } from "@/data/properties";

type InventoryFiltersProps = {
  properties: Property[];
  onFilterChange: (filtered: Property[]) => void;
};

export default function InventoryFilters({ properties, onFilterChange }: InventoryFiltersProps) {
  const [search, setSearch] = useState("");
  const [budget, setBudget] = useState("All Budgets");
  const [configuration, setConfiguration] = useState("All Layouts");
  const [builder, setBuilder] = useState("All Builders");
  const [status, setStatus] = useState("All Statuses");

  // Get unique builders from available properties
  const builders = ["All Builders", ...Array.from(new Set(properties.map(p => p.developer.split(' ')[0]))).filter(Boolean)];

  useEffect(() => {
    let result = [...properties];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p => 
        p.projectName.toLowerCase().includes(q) || 
        p.developer.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q)
      );
    }

    if (budget !== "All Budgets") {
      // Basic price filtering (very simplified string matching for demo)
      if (budget === "Under ₹5 Cr") result = result.filter(p => p.price.includes("2.") || p.price.includes("3.") || p.price.includes("4."));
      if (budget === "₹5 Cr - ₹10 Cr") result = result.filter(p => p.price.includes("5.") || p.price.includes("6.") || p.price.includes("7.") || p.price.includes("8.") || p.price.includes("9."));
    }

    if (configuration !== "All Layouts") {
      result = result.filter(p => p.configuration.includes(configuration.replace(" BHK", "")));
    }

    if (builder !== "All Builders") {
      result = result.filter(p => p.developer.includes(builder));
    }

    if (status !== "All Statuses") {
      result = result.filter(p => p.status === status);
    }

    onFilterChange(result);
  }, [search, budget, configuration, builder, status, properties, onFilterChange]);

  return (
    <div className="bg-luxury-charcoal/30 border border-luxury-ivory/5 p-6 md:p-8 space-y-6">
      <div className="flex items-center space-x-3 border-b border-luxury-ivory/10 pb-4">
        <SlidersHorizontal className="w-5 h-5 text-luxury-gold" />
        <h3 className="font-mono text-xs tracking-widest text-luxury-ivory uppercase">Refine Portfolio</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-end">
        <div className="flex flex-col space-y-2 col-span-2 md:col-span-3 lg:col-span-2">
          <span className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase">Search Properties</span>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-gold/50" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, developer, or location..."
              className="bg-luxury-black border border-luxury-ivory/10 focus:border-luxury-gold text-xs tracking-wide py-[9px] pl-10 pr-3 font-sans focus:outline-none text-luxury-ivory w-full transition-colors placeholder:text-luxury-ivory/30"
            />
          </div>
        </div>
        
        <FilterSelect label="Budget" value={budget} onChange={setBudget} options={["All Budgets", "Under ₹5 Cr", "₹5 Cr - ₹10 Cr", "₹10 Cr - ₹20 Cr", "Above ₹20 Cr"]} />
        <FilterSelect label="Configuration" value={configuration} onChange={setConfiguration} options={["All Layouts", "3 BHK", "4 BHK", "5 BHK", "Penthouse"]} />
        <FilterSelect label="Builder" value={builder} onChange={setBuilder} options={builders} />
        <FilterSelect label="Project Status" value={status} onChange={setStatus} options={["All Statuses", "New Launch", "Under Construction", "Ready to Move"]} />
      </div>
    </div>
  );
}

function FilterSelect({ label, value, onChange, options }: { label: string, value: string, onChange: (v: string) => void, options: string[] }) {
  return (
    <div className="flex flex-col space-y-2">
      <span className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase">{label}</span>
      <select 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-luxury-black border border-luxury-ivory/10 focus:border-luxury-gold text-xs tracking-wide py-2.5 px-3 font-sans focus:outline-none text-luxury-ivory w-full cursor-pointer transition-colors"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

"use client";

import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import InventoryFilters from "@/components/InventoryFilters";
import { Search } from "lucide-react";
import Link from "next/link";
import { Property } from "@/data/properties";

export default function FilteredInventory({ 
  initialProperties, 
  marketName 
}: { 
  initialProperties: Property[];
  marketName: string;
}) {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(initialProperties);

  return (
    <>
      <div className="mb-12">
        <InventoryFilters 
          properties={initialProperties} 
          onFilterChange={setFilteredProperties} 
        />
      </div>

      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <PropertyCard key={prop.slug} prop={prop} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-luxury-ivory/5 bg-luxury-charcoal/10 max-w-xl mx-auto space-y-6 mt-12">
          <Search className="w-8 h-8 text-luxury-gold/60 mx-auto" />
          <div className="space-y-2">
            <h3 className="font-serif text-xl text-luxury-ivory">No Matching Inventory</h3>
            <p className="font-sans text-xs md:text-sm text-luxury-ivory/50 max-w-sm mx-auto leading-relaxed font-light">
              We couldn't find any public listings matching your exact filters for {marketName}. Please try adjusting your criteria or contact our acquisitions desk.
            </p>
          </div>
          <button 
            onClick={() => setFilteredProperties(initialProperties)}
            className="inline-block font-mono text-[9px] tracking-widest text-luxury-black bg-luxury-gold py-3 px-6 uppercase font-bold"
          >
            Clear Filters
          </button>
        </div>
      )}
    </>
  );
}

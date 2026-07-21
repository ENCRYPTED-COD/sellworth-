"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageCircle, Edit2, Trash2, Check, X } from "lucide-react";
import { ResaleProperty } from "../data/resale";

export default function ReadyToMoveFramework() {
  const [activeCategory, setActiveCategory] = useState<"plots" | "apartments" | "builder-floors" | "commercial" | "leasing" | "penthouses">("plots");
  const [searchQuery, setSearchQuery] = useState("");
  const [properties, setProperties] = useState<ResaleProperty[]>([]);
  const [loading, setLoading] = useState(true);

  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editFormData, setEditFormData] = useState<Partial<ResaleProperty>>({});

  const fetchProperties = () => {
    fetch("/api/properties")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setProperties(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load properties", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this property?")) return;
    try {
      const res = await fetch(`/api/properties?id=${id}`, { method: "DELETE" });
      if (res.ok) fetchProperties();
    } catch (err) {
      console.error("Failed to delete", err);
    }
  };

  const startEdit = (prop: ResaleProperty) => {
    setEditingId(prop.id);
    setEditFormData(prop);
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch("/api/properties", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editFormData),
      });
      if (res.ok) {
        setEditingId(null);
        fetchProperties();
      }
    } catch (err) {
      console.error("Failed to update", err);
    }
  };

  const getWhatsAppLink = (prop: ResaleProperty) => {
    const text = encodeURIComponent(`Hi, I'm interested in ${prop.name} (${prop.area} - ${prop.price}). Can you provide more details?`);
    return `https://wa.me/919999999999?text=${text}`; // Replace with actual number
  };

  const categories = [
    { id: "plots", label: "Plots" },
    { id: "apartments", label: "Apartments" },
    { id: "builder-floors", label: "Builder Floors" },
    { id: "penthouses", label: "Penthouses" },
    { id: "commercial", label: "Commercial" },
    { id: "leasing", label: "Leasing" },
  ] as const;

  const filteredProperties = properties.filter((property) => {
    const matchesCategory = property.category === activeCategory;
    const matchesSearch = property.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          property.area.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-luxury-black border border-luxury-ivory/10 flex flex-col md:flex-row overflow-hidden min-h-[600px]">
      
      {/* Left Sidebar (Categories) */}
      <div className="w-full md:w-64 bg-luxury-charcoal border-r border-luxury-ivory/10 flex flex-col">
        <div className="p-6 border-b border-luxury-ivory/10">
          <h3 className="font-serif text-xl text-luxury-ivory tracking-wide">
            Ready to <span className="text-luxury-gold italic">Move in</span>
          </h3>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col py-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full text-left px-6 py-4 flex items-center justify-between transition-all duration-300 border-l-4 ${
                  activeCategory === cat.id
                    ? "border-luxury-gold bg-luxury-gold/5 text-luxury-gold"
                    : "border-transparent text-luxury-ivory/60 hover:bg-luxury-ivory/5 hover:text-luxury-ivory"
                }`}
              >
                <span className="font-sans text-xs tracking-widest uppercase font-semibold">
                  {cat.label}
                </span>
                {activeCategory === cat.id && (
                  <motion.div layoutId="active-indicator" className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col bg-luxury-black/95">
        
        {/* Search Header */}
        <div className="p-6 border-b border-luxury-ivory/10 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-luxury-ivory/40" />
            </div>
            <input
              type="text"
              placeholder={`Search ${categories.find(c => c.id === activeCategory)?.label}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-luxury-ivory/10 bg-transparent text-luxury-ivory font-sans text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors placeholder-luxury-ivory/30"
            />
          </div>
          <div className="hidden md:block text-luxury-ivory/40 font-mono text-[9px] tracking-widest uppercase">
            {filteredProperties.length} Results Found
          </div>
        </div>

        {/* Listings Grid */}
        <div className="p-6 flex-1 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="w-8 h-8 border-2 border-luxury-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredProperties.length > 0 ? (
                <motion.div 
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 gap-3"
              >
                {filteredProperties.map((prop) => (
                  <motion.div 
                    layout
                    key={prop.id}
                    className="group border border-luxury-ivory/10 bg-luxury-charcoal/20 hover:bg-luxury-charcoal/60 hover:border-luxury-gold/30 p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 gap-4 md:gap-8"
                  >
                    {editingId === prop.id ? (
                      <div className="flex flex-col md:flex-row gap-4 w-full items-center">
                        <input
                          type="text"
                          value={editFormData.name || ""}
                          onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                          className="bg-luxury-black border border-luxury-ivory/20 px-3 py-2 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold flex-1"
                          placeholder="Name"
                        />
                        <input
                          type="text"
                          value={editFormData.area || ""}
                          onChange={(e) => setEditFormData({ ...editFormData, area: e.target.value })}
                          className="bg-luxury-black border border-luxury-ivory/20 px-3 py-2 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold w-32"
                          placeholder="Area"
                        />
                        <input
                          type="text"
                          value={editFormData.price || ""}
                          onChange={(e) => setEditFormData({ ...editFormData, price: e.target.value })}
                          className="bg-luxury-black border border-luxury-ivory/20 px-3 py-2 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold w-32"
                          placeholder="Price"
                        />
                        <div className="flex gap-2">
                          <button onClick={handleUpdate} className="p-2 bg-green-500/20 text-green-400 hover:bg-green-500/40 rounded transition-colors"><Check className="w-4 h-4" /></button>
                          <button onClick={() => setEditingId(null)} className="p-2 bg-red-500/20 text-red-400 hover:bg-red-500/40 rounded transition-colors"><X className="w-4 h-4" /></button>
                        </div>
                      </div>
                    ) : (
                      <>
                        {/* Left: Name & Category */}
                        <div className="flex flex-col md:flex-row md:items-center gap-3 w-full md:w-4/12">
                          <h4 className="font-serif text-base md:text-lg text-luxury-ivory group-hover:text-luxury-gold transition-colors leading-snug">
                            {prop.name}
                          </h4>
                          <span className="px-2 py-1 bg-luxury-ivory/5 text-luxury-ivory/60 font-mono text-[9px] uppercase tracking-wider whitespace-nowrap self-start md:self-center">
                            {categories.find(c => c.id === prop.category)?.label}
                          </span>
                        </div>
                        
                        {/* Right: Area & Price */}
                        <div className="flex flex-row items-center justify-between md:justify-end gap-6 md:gap-8 w-full md:w-5/12">
                          <div className="flex flex-col text-left md:text-right">
                            <span className="font-sans text-[9px] uppercase tracking-widest text-luxury-ivory/40 mb-1">Area</span>
                            <span className="font-sans text-sm text-luxury-ivory font-light">{prop.area}</span>
                          </div>
                          <div className="flex flex-col text-right min-w-[120px]">
                            <span className="font-sans text-[9px] uppercase tracking-widest text-luxury-ivory/40 mb-1">Asking Price</span>
                            <span className="font-serif text-lg text-luxury-gold whitespace-nowrap">{prop.price}</span>
                          </div>
                        </div>

                        {/* Actions: WhatsApp, Edit, Delete */}
                        <div className="flex flex-row items-center justify-end gap-2 w-full md:w-3/12 mt-4 md:mt-0">
                          <a 
                            href={getWhatsAppLink(prop)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-2.5 bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500 hover:text-white transition-all rounded-full"
                            title="Inquire on WhatsApp"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </a>
                          <button 
                            onClick={() => startEdit(prop)}
                            className="flex items-center justify-center p-2.5 bg-luxury-ivory/5 text-luxury-ivory/60 border border-luxury-ivory/10 hover:bg-luxury-gold hover:text-black hover:border-luxury-gold transition-all rounded-full"
                            title="Edit Listing"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(prop.id)}
                            className="flex items-center justify-center p-2.5 bg-red-500/5 text-red-400 border border-red-500/10 hover:bg-red-500 hover:text-white transition-all rounded-full"
                            title="Delete Listing"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full text-luxury-ivory/40 space-y-4"
              >
                <Search className="w-8 h-8 opacity-20" />
                <p className="font-sans text-sm">No properties found matching your criteria.</p>
              </motion.div>
            )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Check, Edit2, Trash2, X } from "lucide-react";

interface Property {
  id: string;
  category: string;
  name: string;
  area: string;
  price: string;
}

export default function ReadyToMoveAdmin() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "plots",
    area: "",
    price: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const fetchProperties = async () => {
    try {
      const res = await fetch("/api/properties");
      const data = await res.json();
      if (Array.isArray(data)) setProperties(data);
    } catch (err) {
      console.error("Failed to fetch properties:", err);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMsg("");
    
    try {
      const method = editingId ? "PUT" : "POST";
      const payload = editingId ? { ...formData, id: editingId } : formData;

      const response = await fetch("/api/properties", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      if (response.ok) {
        setSuccessMsg(editingId ? "Property updated successfully!" : "Property added successfully!");
        setFormData({ name: "", category: "plots", area: "", price: "" }); // Reset
        setEditingId(null);
        fetchProperties(); // Refresh the list
        setTimeout(() => setSuccessMsg(""), 3000);
      }
    } catch (err) {
      console.error("Error saving property", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditClick = (prop: Property) => {
    setEditingId(prop.id);
    setFormData({
      name: prop.name,
      category: prop.category,
      area: prop.area,
      price: prop.price,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ name: "", category: "plots", area: "", price: "" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this listing?")) return;
    
    try {
      const res = await fetch(`/api/properties?id=${id}`, { method: "DELETE" });
      if (res.ok) fetchProperties();
    } catch (err) {
      console.error("Failed to delete property", err);
    }
  };

  return (
    <div>
      {/* Upload / Edit Form */}
      <div className="bg-luxury-charcoal border border-luxury-ivory/10 p-8 mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-xl flex items-center gap-3">
            {editingId ? <Edit2 className="text-luxury-gold w-5 h-5" /> : <Plus className="text-luxury-gold w-5 h-5" />}
            {editingId ? "Edit Listing" : "Upload New Listing"}
          </h2>
          {editingId && (
            <button onClick={cancelEdit} className="text-xs font-sans text-luxury-ivory/40 hover:text-luxury-ivory flex items-center gap-1">
              <X className="w-4 h-4" /> Cancel Edit
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Property Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="e.g. DLF Camellias..."
                className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-2.5 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold"
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-2.5 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold"
              >
                <option value="plots">Plots</option>
                <option value="apartments">Apartments</option>
                <option value="builder-floors">Builder Floors</option>
                <option value="commercial">Commercial</option>
                <option value="leasing">Leasing</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Area / Size</label>
              <input
                type="text"
                required
                value={formData.area}
                onChange={(e) => setFormData({...formData, area: e.target.value})}
                placeholder="e.g. 7,400 Sq ft"
                className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-2.5 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Price</label>
              <input
                type="text"
                required
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                placeholder="e.g. 45 Cr"
                className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-2.5 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-luxury-ivory/10 flex items-center justify-between">
            <div>
              {successMsg && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-green-400 font-sans text-sm"
                >
                  <Check className="w-4 h-4" />
                  {successMsg}
                </motion.div>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-luxury-gold text-luxury-black px-8 py-2.5 font-sans text-sm font-semibold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Saving..." : editingId ? "Update Listing" : "Publish Listing"}
            </button>
          </div>
        </form>
      </div>

      {/* Existing Listings Table */}
      <div>
        <h3 className="font-serif text-xl mb-6 text-luxury-ivory/80">Current Listings ({properties.length})</h3>
        
        <div className="bg-luxury-charcoal border border-luxury-ivory/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-sm">
              <thead>
                <tr className="border-b border-luxury-ivory/10 bg-luxury-black">
                  <th className="px-6 py-4 font-mono text-[10px] tracking-widest uppercase text-luxury-ivory/40">Name</th>
                  <th className="px-6 py-4 font-mono text-[10px] tracking-widest uppercase text-luxury-ivory/40">Category</th>
                  <th className="px-6 py-4 font-mono text-[10px] tracking-widest uppercase text-luxury-ivory/40">Area</th>
                  <th className="px-6 py-4 font-mono text-[10px] tracking-widest uppercase text-luxury-ivory/40">Price</th>
                  <th className="px-6 py-4 font-mono text-[10px] tracking-widest uppercase text-luxury-ivory/40 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-luxury-ivory/5">
                {properties.map((prop) => (
                  <tr key={prop.id} className="hover:bg-luxury-ivory/5 transition-colors">
                    <td className="px-6 py-4 text-luxury-ivory">{prop.name}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-luxury-black border border-luxury-ivory/10 text-luxury-ivory/60 text-[10px] uppercase tracking-wider">
                        {prop.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-luxury-ivory/60">{prop.area}</td>
                    <td className="px-6 py-4 text-luxury-gold">{prop.price}</td>
                    <td className="px-6 py-4 text-right space-x-4">
                      <button 
                        onClick={() => handleEditClick(prop)}
                        className="text-luxury-ivory/40 hover:text-luxury-gold transition-colors inline-flex items-center gap-1"
                      >
                        <Edit2 className="w-4 h-4" /> <span className="sr-only">Edit</span>
                      </button>
                      <button 
                        onClick={() => handleDelete(prop.id)}
                        className="text-luxury-ivory/40 hover:text-red-400 transition-colors inline-flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" /> <span className="sr-only">Delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
                {properties.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-luxury-ivory/40">
                      No properties found. Upload one above!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

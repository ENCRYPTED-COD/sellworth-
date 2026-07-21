"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Plus, Check, Edit2, Trash2, X, UploadCloud, Image as ImageIcon } from "lucide-react";

export default function CollectionsAdmin() {
  const [collections, setCollections] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState<any>({
    name: "",
    developer: "",
    location: "",
    category: "new-launch",
    investmentRange: "",
    description: "",
    priceNumeric: 0,
    overview: [{ key: "", value: "" }],
    amenities: [""],
    highlights: [""],
    advantages: [""],
    images: [],
    image: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchCollections = async () => {
    try {
      const res = await fetch("/api/collections");
      const data = await res.json();
      if (Array.isArray(data)) setCollections(data);
    } catch (err) {
      console.error("Failed to fetch collections:", err);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  const handleArrayChange = (field: string, index: number, value: string) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addArrayItem = (field: string) => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const removeArrayItem = (field: string, index: number) => {
    const newArray = [...formData[field]];
    newArray.splice(index, 1);
    setFormData({ ...formData, [field]: newArray });
  };

  const handleOverviewChange = (index: number, key: string, value: string) => {
    const newOverview = [...formData.overview];
    newOverview[index] = { ...newOverview[index], [key]: value };
    setFormData({ ...formData, overview: newOverview });
  };

  const addOverviewItem = () => {
    setFormData({ ...formData, overview: [...formData.overview, { key: "", value: "" }] });
  };

  const removeOverviewItem = (index: number) => {
    const newOverview = [...formData.overview];
    newOverview.splice(index, 1);
    setFormData({ ...formData, overview: newOverview });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    setIsUploading(true);
    const data = new FormData();
    for (let i = 0; i < e.target.files.length; i++) {
      data.append("file", e.target.files[i]);
    }

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      
      if (result.success) {
        const newImages = [...(formData.images || []), ...result.fileUrls];
        setFormData({ 
          ...formData, 
          images: newImages,
          image: newImages[0] // Set first image as main thumbnail
        });
      }
    } catch (err) {
      console.error("Upload failed", err);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMsg("");
    
    try {
      const method = editingId ? "PUT" : "POST";
      const payload = editingId ? { ...formData, id: editingId } : formData;

      const response = await fetch("/api/collections", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      if (response.ok) {
        setSuccessMsg(editingId ? "Collection updated successfully!" : "Collection added successfully!");
        cancelEdit();
        fetchCollections(); 
        setTimeout(() => setSuccessMsg(""), 3000);
      }
    } catch (err) {
      console.error("Error saving collection", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditClick = (col: any) => {
    setEditingId(col.id);
    setFormData({
      ...col,
      overview: col.overview || [{ key: "", value: "" }],
      amenities: col.amenities || [""],
      highlights: col.highlights || [""],
      advantages: col.advantages || [""],
      images: col.images || [],
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({
      name: "", developer: "", location: "", category: "new-launch",
      investmentRange: "", description: "", priceNumeric: 0,
      overview: [{ key: "", value: "" }], amenities: [""], highlights: [""], advantages: [""],
      images: [], image: ""
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this collection?")) return;
    try {
      const res = await fetch(`/api/collections?id=${id}`, { method: "DELETE" });
      if (res.ok) fetchCollections();
    } catch (err) {
      console.error("Failed to delete", err);
    }
  };

  return (
    <div>
      <div className="bg-luxury-charcoal border border-luxury-ivory/10 p-8 mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-xl flex items-center gap-3">
            {editingId ? <Edit2 className="text-luxury-gold w-5 h-5" /> : <Plus className="text-luxury-gold w-5 h-5" />}
            {editingId ? "Edit Collection" : "Upload New Collection"}
          </h2>
          {editingId && (
            <button onClick={cancelEdit} className="text-xs font-sans text-luxury-ivory/40 hover:text-luxury-ivory flex items-center gap-1">
              <X className="w-4 h-4" /> Cancel Edit
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Details */}
          <div>
            <h3 className="text-luxury-ivory text-sm font-semibold mb-4 border-b border-luxury-ivory/10 pb-2">Basic Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Project Name</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-2.5 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold" />
              </div>
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Developer</label>
                <input type="text" required value={formData.developer} onChange={(e) => setFormData({...formData, developer: e.target.value})} className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-2.5 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold" />
              </div>
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Location</label>
                <input type="text" required value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-2.5 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold" />
              </div>
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Investment Range</label>
                <input type="text" required value={formData.investmentRange} onChange={(e) => setFormData({...formData, investmentRange: e.target.value})} placeholder="e.g. ₹5 Cr - ₹10 Cr" className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-2.5 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold" />
              </div>
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Category</label>
                <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-2.5 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold">
                  <option value="new-launch">New Launch</option>
                  <option value="residences">Signature Residences</option>
                  <option value="golf">Golf Estate</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Numeric Price (Crores)</label>
                <input type="number" required value={formData.priceNumeric} onChange={(e) => setFormData({...formData, priceNumeric: Number(e.target.value)})} placeholder="e.g. 5.5" className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-2.5 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold" />
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-[10px] font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Full Description</label>
              <textarea required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} rows={3} className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-2.5 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold" />
            </div>
          </div>

          {/* Images */}
          <div>
            <h3 className="text-luxury-ivory text-sm font-semibold mb-4 border-b border-luxury-ivory/10 pb-2">Gallery Images</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-4">
                {formData.images.map((img: string, i: number) => (
                  <div key={i} className="relative w-24 h-24 border border-luxury-ivory/20 group">
                    <img src={img} alt={`Uploaded ${i}`} className="w-full h-full object-cover" />
                    <button type="button" onClick={() => {
                      const newImgs = [...formData.images];
                      newImgs.splice(i, 1);
                      setFormData({...formData, images: newImgs, image: newImgs[0] || ""});
                    }} className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><X className="w-3 h-3"/></button>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <input type="file" multiple accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageUpload} />
                <button type="button" onClick={() => fileInputRef.current?.click()} disabled={isUploading} className="flex items-center gap-2 bg-luxury-black border border-luxury-ivory/20 px-4 py-2 text-sm text-luxury-ivory hover:border-luxury-gold transition-colors">
                  {isUploading ? "Uploading..." : <><UploadCloud className="w-4 h-4" /> Upload Images</>}
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Arrays */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Overview */}
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-luxury-ivory/10 pb-2">
                <h3 className="text-luxury-ivory text-sm font-semibold">Overview Specs</h3>
                <button type="button" onClick={addOverviewItem} className="text-luxury-gold hover:text-white text-xs flex items-center"><Plus className="w-3 h-3"/> Add</button>
              </div>
              <div className="space-y-3">
                {formData.overview.map((item: any, i: number) => (
                  <div key={i} className="flex gap-2">
                    <input type="text" placeholder="Key (e.g. Status)" value={item.key} onChange={(e) => handleOverviewChange(i, 'key', e.target.value)} className="w-1/3 bg-luxury-black border border-luxury-ivory/20 px-3 py-1.5 text-xs text-luxury-ivory" />
                    <input type="text" placeholder="Value (e.g. Under Construction)" value={item.value} onChange={(e) => handleOverviewChange(i, 'value', e.target.value)} className="flex-1 bg-luxury-black border border-luxury-ivory/20 px-3 py-1.5 text-xs text-luxury-ivory" />
                    <button type="button" onClick={() => removeOverviewItem(i)} className="text-red-400 hover:text-red-300 p-2"><X className="w-4 h-4"/></button>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-luxury-ivory/10 pb-2">
                <h3 className="text-luxury-ivory text-sm font-semibold">Amenities</h3>
                <button type="button" onClick={() => addArrayItem('amenities')} className="text-luxury-gold hover:text-white text-xs flex items-center"><Plus className="w-3 h-3"/> Add</button>
              </div>
              <div className="space-y-3">
                {formData.amenities.map((val: string, i: number) => (
                  <div key={i} className="flex gap-2">
                    <input type="text" placeholder="Amenity" value={val} onChange={(e) => handleArrayChange('amenities', i, e.target.value)} className="flex-1 bg-luxury-black border border-luxury-ivory/20 px-3 py-1.5 text-xs text-luxury-ivory" />
                    <button type="button" onClick={() => removeArrayItem('amenities', i)} className="text-red-400 hover:text-red-300 p-2"><X className="w-4 h-4"/></button>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-luxury-ivory/10 pb-2">
                <h3 className="text-luxury-ivory text-sm font-semibold">Highlights</h3>
                <button type="button" onClick={() => addArrayItem('highlights')} className="text-luxury-gold hover:text-white text-xs flex items-center"><Plus className="w-3 h-3"/> Add</button>
              </div>
              <div className="space-y-3">
                {formData.highlights.map((val: string, i: number) => (
                  <div key={i} className="flex gap-2">
                    <input type="text" placeholder="Highlight point" value={val} onChange={(e) => handleArrayChange('highlights', i, e.target.value)} className="flex-1 bg-luxury-black border border-luxury-ivory/20 px-3 py-1.5 text-xs text-luxury-ivory" />
                    <button type="button" onClick={() => removeArrayItem('highlights', i)} className="text-red-400 hover:text-red-300 p-2"><X className="w-4 h-4"/></button>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-luxury-ivory/10 pb-2">
                <h3 className="text-luxury-ivory text-sm font-semibold">Advantages</h3>
                <button type="button" onClick={() => addArrayItem('advantages')} className="text-luxury-gold hover:text-white text-xs flex items-center"><Plus className="w-3 h-3"/> Add</button>
              </div>
              <div className="space-y-3">
                {formData.advantages.map((val: string, i: number) => (
                  <div key={i} className="flex gap-2">
                    <input type="text" placeholder="Advantage point" value={val} onChange={(e) => handleArrayChange('advantages', i, e.target.value)} className="flex-1 bg-luxury-black border border-luxury-ivory/20 px-3 py-1.5 text-xs text-luxury-ivory" />
                    <button type="button" onClick={() => removeArrayItem('advantages', i)} className="text-red-400 hover:text-red-300 p-2"><X className="w-4 h-4"/></button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-luxury-ivory/10 flex items-center justify-between">
            <div>
              {successMsg && (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-green-400 font-sans text-sm">
                  <Check className="w-4 h-4" /> {successMsg}
                </motion.div>
              )}
            </div>
            <button type="submit" disabled={isSubmitting || isUploading} className="bg-luxury-gold text-luxury-black px-8 py-2.5 font-sans text-sm font-semibold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50">
              {isSubmitting ? "Saving..." : editingId ? "Update Collection" : "Publish Collection"}
            </button>
          </div>
        </form>
      </div>

      {/* Existing Table */}
      <div>
        <h3 className="font-serif text-xl mb-6 text-luxury-ivory/80">Current Collections ({collections.length})</h3>
        
        <div className="bg-luxury-charcoal border border-luxury-ivory/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-sm">
              <thead>
                <tr className="border-b border-luxury-ivory/10 bg-luxury-black">
                  <th className="px-6 py-4 font-mono text-[10px] tracking-widest uppercase text-luxury-ivory/40">Project</th>
                  <th className="px-6 py-4 font-mono text-[10px] tracking-widest uppercase text-luxury-ivory/40">Developer</th>
                  <th className="px-6 py-4 font-mono text-[10px] tracking-widest uppercase text-luxury-ivory/40">Category</th>
                  <th className="px-6 py-4 font-mono text-[10px] tracking-widest uppercase text-luxury-ivory/40 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-luxury-ivory/5">
                {collections.map((col) => (
                  <tr key={col.id} className="hover:bg-luxury-ivory/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-luxury-black flex-shrink-0 border border-luxury-ivory/20 overflow-hidden">
                          {col.image ? <img src={col.image} className="w-full h-full object-cover" /> : <ImageIcon className="w-5 h-5 m-2.5 text-luxury-ivory/30" />}
                        </div>
                        <div>
                          <p className="text-luxury-ivory font-serif">{col.name}</p>
                          <p className="text-[10px] text-luxury-ivory/50">{col.location}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-luxury-ivory/80">{col.developer}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-luxury-black border border-luxury-ivory/10 text-luxury-ivory/60 text-[10px] uppercase tracking-wider">{col.category}</span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-4">
                      <button onClick={() => handleEditClick(col)} className="text-luxury-ivory/40 hover:text-luxury-gold transition-colors inline-flex items-center gap-1">
                        <Edit2 className="w-4 h-4" /> <span className="sr-only">Edit</span>
                      </button>
                      <button onClick={() => handleDelete(col.id)} className="text-luxury-ivory/40 hover:text-red-400 transition-colors inline-flex items-center gap-1">
                        <Trash2 className="w-4 h-4" /> <span className="sr-only">Delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

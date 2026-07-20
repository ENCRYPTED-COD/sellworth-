"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check, Lock, Edit2, Trash2, X, KeyRound, Eye, EyeOff } from "lucide-react";

interface Property {
  id: string;
  category: string;
  name: string;
  area: string;
  price: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Forgot password state
  const [isForgotMode, setIsForgotMode] = useState(false);
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [resetError, setResetError] = useState("");
  const [resetSuccess, setResetSuccess] = useState("");
  
  // Password visibility
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // Security settings state
  const [newSecQuestion, setNewSecQuestion] = useState("");
  const [newSecAnswer, setNewSecAnswer] = useState("");
  const [secUpdateMsg, setSecUpdateMsg] = useState("");
  const [secUpdateError, setSecUpdateError] = useState("");

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

  const fetchSecurityQuestion = async () => {
    try {
      const res = await fetch("/api/auth");
      const data = await res.json();
      if (data.securityQuestion) setSecurityQuestion(data.securityQuestion);
    } catch (err) {
      console.error("Failed to fetch question:", err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchProperties();
    } else {
      fetchSecurityQuestion();
    }
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setIsAuthenticated(true);
      } else {
        setError(data.error || "Incorrect password");
      }
    } catch (err) {
      setError("Server error during login");
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetError("");
    setResetSuccess("");
    
    try {
      const res = await fetch("/api/auth", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ securityAnswer, newPassword })
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setResetSuccess("Password reset successfully! You can now log in.");
        setTimeout(() => {
          setIsForgotMode(false);
          setResetSuccess("");
          setSecurityAnswer("");
          setNewPassword("");
        }, 2000);
      } else {
        setResetError(data.error || "Incorrect security answer");
      }
    } catch (err) {
      setResetError("Server error during password reset");
    }
  };

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
      } else {
        alert("Failed to save property");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving property");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this property?")) return;
    
    try {
      const response = await fetch(`/api/properties?id=${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchProperties();
      } else {
        alert("Failed to delete");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting property");
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

  const handleUpdateSecurity = async (e: React.FormEvent) => {
    e.preventDefault();
    setSecUpdateMsg("");
    setSecUpdateError("");
    
    try {
      const res = await fetch("/api/auth", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ securityQuestion: newSecQuestion, securityAnswer: newSecAnswer })
      });
      const data = await res.json();
      
      if (res.ok && data.success) {
        setSecUpdateMsg("Security settings updated successfully!");
        setNewSecQuestion("");
        setNewSecAnswer("");
        fetchSecurityQuestion(); // Refresh locally
        setTimeout(() => setSecUpdateMsg(""), 3000);
      } else {
        setSecUpdateError(data.error || "Failed to update");
      }
    } catch (err) {
      setSecUpdateError("Server error");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-luxury-black flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md bg-luxury-charcoal border border-luxury-ivory/10 p-8 overflow-hidden relative">
          
          <AnimatePresence mode="wait">
            {!isForgotMode ? (
              <motion.div 
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center mb-8">
                  <Lock className="w-8 h-8 text-luxury-gold mb-4" />
                  <h1 className="font-serif text-2xl text-luxury-ivory text-center">Admin Portal</h1>
                  <p className="text-luxury-ivory/40 font-sans text-sm mt-2">Experimental Local Environment</p>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Password</label>
                    <div className="relative">
                      <input
                        type={showLoginPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-3 text-luxury-ivory focus:outline-none focus:border-luxury-gold transition-colors pr-12"
                        placeholder="Enter password..."
                      />
                      <button
                        type="button"
                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-luxury-ivory/40 hover:text-luxury-ivory transition-colors"
                      >
                        {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-luxury-gold text-luxury-black font-sans font-semibold tracking-wide uppercase py-3 hover:bg-white transition-colors"
                  >
                    Login
                  </button>

                  <div className="text-center pt-4">
                    <button 
                      type="button" 
                      onClick={() => setIsForgotMode(true)}
                      className="text-xs text-luxury-ivory/40 hover:text-luxury-gold transition-colors font-sans"
                    >
                      Forgot Password?
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="forgot"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col items-center mb-8">
                  <KeyRound className="w-8 h-8 text-luxury-gold mb-4" />
                  <h1 className="font-serif text-2xl text-luxury-ivory text-center">Reset Password</h1>
                  <p className="text-luxury-ivory/40 font-sans text-sm mt-2 text-center">Answer your security question to continue.</p>
                </div>

                <form onSubmit={handleResetPassword} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Security Question</label>
                    <div className="w-full bg-luxury-black border border-luxury-ivory/10 px-4 py-3 text-luxury-ivory/60 text-sm">
                      {securityQuestion || "Loading..."}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Your Answer</label>
                    <input
                      type="text"
                      required
                      value={securityAnswer}
                      onChange={(e) => setSecurityAnswer(e.target.value)}
                      className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-3 text-luxury-ivory focus:outline-none focus:border-luxury-gold transition-colors"
                      placeholder="Enter answer..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">New Password</label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-3 text-luxury-ivory focus:outline-none focus:border-luxury-gold transition-colors pr-12"
                        placeholder="Create a new password..."
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-luxury-ivory/40 hover:text-luxury-ivory transition-colors"
                      >
                        {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {resetError && <p className="text-red-500 text-xs mt-2">{resetError}</p>}
                    {resetSuccess && <p className="text-green-400 text-xs mt-2">{resetSuccess}</p>}
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setIsForgotMode(false)}
                      className="w-1/3 bg-transparent border border-luxury-ivory/20 text-luxury-ivory font-sans font-semibold tracking-wide uppercase py-3 hover:border-luxury-gold transition-colors text-xs"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-luxury-gold text-luxury-black font-sans font-semibold tracking-wide uppercase py-3 hover:bg-white transition-colors text-xs"
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-black text-luxury-ivory pt-24 pb-12 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12 border-b border-luxury-ivory/10 pb-6">
          <div>
            <h1 className="font-serif text-3xl">Property Manager</h1>
            <p className="text-luxury-ivory/40 font-mono text-xs uppercase tracking-widest mt-2">Local Experimental DB</p>
          </div>
          <button 
            onClick={() => { setIsAuthenticated(false); setPassword(""); }}
            className="text-sm font-sans tracking-wide text-luxury-ivory/60 hover:text-luxury-gold transition-colors"
          >
            Logout
          </button>
        </div>

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

        {/* Security Settings Panel */}
        <div className="mt-12 bg-luxury-charcoal border border-luxury-ivory/10 p-8">
          <h3 className="font-serif text-xl mb-2 text-luxury-ivory flex items-center gap-2">
            <KeyRound className="w-5 h-5 text-luxury-gold" /> Account Security
          </h3>
          <p className="text-luxury-ivory/40 font-sans text-xs mb-6">
            Update your password recovery question and answer below. 
            <br />Current Question: <span className="text-luxury-ivory">"{securityQuestion}"</span>
          </p>

          <form onSubmit={handleUpdateSecurity} className="space-y-4 max-w-xl">
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">New Security Question</label>
              <input
                type="text"
                required
                value={newSecQuestion}
                onChange={(e) => setNewSecQuestion(e.target.value)}
                placeholder="e.g. What is the name of my first pet?"
                className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-2.5 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold"
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Answer</label>
              <input
                type="text"
                required
                value={newSecAnswer}
                onChange={(e) => setNewSecAnswer(e.target.value)}
                placeholder="Enter answer..."
                className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-2.5 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div>
                {secUpdateMsg && <span className="text-green-400 font-sans text-xs flex items-center gap-1"><Check className="w-3 h-3"/> {secUpdateMsg}</span>}
                {secUpdateError && <span className="text-red-400 font-sans text-xs">{secUpdateError}</span>}
              </div>
              <button
                type="submit"
                className="bg-transparent border border-luxury-ivory/20 text-luxury-ivory px-6 py-2 font-sans text-xs font-semibold uppercase tracking-widest hover:border-luxury-gold transition-colors"
              >
                Save Settings
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

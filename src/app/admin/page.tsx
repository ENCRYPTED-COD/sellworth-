"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Check, KeyRound, Eye, EyeOff } from "lucide-react";
import ReadyToMoveAdmin from "@/components/admin/ReadyToMoveAdmin";
import CollectionsAdmin from "@/components/admin/CollectionsAdmin";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [isForgotMode, setIsForgotMode] = useState(false);
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [resetError, setResetError] = useState("");
  const [resetSuccess, setResetSuccess] = useState("");
  
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [newSecQuestion, setNewSecQuestion] = useState("");
  const [newSecAnswer, setNewSecAnswer] = useState("");
  const [secUpdateMsg, setSecUpdateMsg] = useState("");
  const [secUpdateError, setSecUpdateError] = useState("");

  const [activeTab, setActiveTab] = useState<'ready' | 'collections'>('ready');

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
    if (!isAuthenticated) {
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
        fetchSecurityQuestion(); 
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
              <motion.div key="login" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
                <div className="flex flex-col items-center mb-8">
                  <Lock className="w-8 h-8 text-luxury-gold mb-4" />
                  <h1 className="font-serif text-2xl text-luxury-ivory text-center">Admin Portal</h1>
                  <p className="text-luxury-ivory/40 font-sans text-sm mt-2">Experimental Local Environment</p>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Password</label>
                    <div className="relative">
                      <input type={showLoginPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-3 text-luxury-ivory focus:outline-none focus:border-luxury-gold transition-colors pr-12" placeholder="Enter password..." />
                      <button type="button" onClick={() => setShowLoginPassword(!showLoginPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-luxury-ivory/40 hover:text-luxury-ivory transition-colors">
                        {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                  </div>
                  <button type="submit" className="w-full bg-luxury-gold text-luxury-black font-sans font-semibold tracking-wide uppercase py-3 hover:bg-white transition-colors">Enter</button>
                </form>
                
                <div className="mt-6 text-center">
                  <button onClick={() => setIsForgotMode(true)} className="text-xs text-luxury-ivory/40 hover:text-luxury-gold transition-colors font-sans">Forgot Password?</button>
                </div>
              </motion.div>
            ) : (
              <motion.div key="forgot" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <div className="flex flex-col items-center mb-8">
                  <KeyRound className="w-8 h-8 text-luxury-gold mb-4" />
                  <h2 className="font-serif text-xl text-luxury-ivory text-center">Recover Access</h2>
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
                    <input type="text" required value={securityAnswer} onChange={(e) => setSecurityAnswer(e.target.value)} className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-3 text-luxury-ivory focus:outline-none focus:border-luxury-gold transition-colors" placeholder="Enter answer..." />
                  </div>
                  <div>
                    <label className="block text-xs font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">New Password</label>
                    <div className="relative">
                      <input type={showNewPassword ? "text" : "password"} required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-3 text-luxury-ivory focus:outline-none focus:border-luxury-gold transition-colors pr-12" placeholder="Create a new password..." />
                      <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-luxury-ivory/40 hover:text-luxury-ivory transition-colors">
                        {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {resetError && <p className="text-red-500 text-xs mt-2">{resetError}</p>}
                    {resetSuccess && <p className="text-green-400 text-xs mt-2">{resetSuccess}</p>}
                  </div>
                  
                  <div className="flex gap-4">
                    <button type="button" onClick={() => setIsForgotMode(false)} className="w-1/3 bg-transparent border border-luxury-ivory/20 text-luxury-ivory font-sans font-semibold tracking-wide uppercase py-3 hover:border-luxury-gold transition-colors text-xs">Back</button>
                    <button type="submit" className="w-2/3 bg-luxury-gold text-luxury-black font-sans font-semibold tracking-wide uppercase py-3 hover:bg-white transition-colors text-xs">Reset Password</button>
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
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b border-luxury-ivory/10 pb-6">
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

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('ready')}
            className={`px-6 py-3 font-sans text-xs uppercase tracking-widest transition-colors ${activeTab === 'ready' ? 'bg-luxury-gold text-luxury-black font-semibold' : 'bg-luxury-charcoal text-luxury-ivory border border-luxury-ivory/10 hover:border-luxury-gold'}`}
          >
            Ready to Move
          </button>
          <button 
            onClick={() => setActiveTab('collections')}
            className={`px-6 py-3 font-sans text-xs uppercase tracking-widest transition-colors ${activeTab === 'collections' ? 'bg-luxury-gold text-luxury-black font-semibold' : 'bg-luxury-charcoal text-luxury-ivory border border-luxury-ivory/10 hover:border-luxury-gold'}`}
          >
            Collections
          </button>
        </div>

        {/* Active Tab Content */}
        {activeTab === 'ready' ? <ReadyToMoveAdmin /> : <CollectionsAdmin />}

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
              <input type="text" required value={newSecQuestion} onChange={(e) => setNewSecQuestion(e.target.value)} placeholder="e.g. What is the name of my first pet?" className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-2.5 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold" />
            </div>
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-luxury-ivory/60 uppercase mb-2">Answer</label>
              <input type="text" required value={newSecAnswer} onChange={(e) => setNewSecAnswer(e.target.value)} placeholder="Enter answer..." className="w-full bg-luxury-black border border-luxury-ivory/20 px-4 py-2.5 text-sm text-luxury-ivory focus:outline-none focus:border-luxury-gold" />
            </div>
            <div className="pt-2 flex items-center justify-between">
              <div>
                {secUpdateMsg && <span className="text-green-400 font-sans text-xs flex items-center gap-1"><Check className="w-3 h-3"/> {secUpdateMsg}</span>}
                {secUpdateError && <span className="text-red-400 font-sans text-xs">{secUpdateError}</span>}
              </div>
              <button type="submit" className="bg-transparent border border-luxury-ivory/20 text-luxury-ivory px-6 py-2 font-sans text-xs font-semibold uppercase tracking-widest hover:border-luxury-gold transition-colors">
                Save Settings
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

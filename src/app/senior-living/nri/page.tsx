import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe2, ShieldCheck, HeartPulse, Clock, ArrowRight } from "lucide-react";

export default function AntaraNRIPage() {
  return (
    <main className="min-h-screen bg-luxury-ivory pt-24">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://d3cit1div2ht9e.cloudfront.net/ba613ab2-5936-463b-b362-7708ca4b3778-1771002364903.jpg')" }}
        />
        
        <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full text-sm font-semibold tracking-wider uppercase mb-8 border border-brand-gold/30 backdrop-blur-md mx-auto">
            <Globe2 className="w-4 h-4" />
            <span>Antara International Desk</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
            Global Peace of Mind
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
            Specialized remote care and property management for NRI families seeking the best for their parents in India.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-brand-dark font-semibold mb-6">Absolute Assurance from Afar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">We bridge the geographical gap with real-time updates, dedicated relationship managers, and world-class healthcare for your parents.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-luxury-ivory p-8 rounded-2xl border border-brand-gold/10 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-brand-wine/10 rounded-xl flex items-center justify-center mb-6 text-brand-wine group-hover:scale-110 transition-transform">
                <HeartPulse className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl text-brand-dark font-bold mb-4">Remote Health Tracking</h3>
              <p className="text-gray-600 leading-relaxed">Access your parents' daily vitals, medical reports, and routine check-up logs via our secure international portal.</p>
            </div>

            <div className="bg-luxury-ivory p-8 rounded-2xl border border-brand-gold/10 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-brand-wine/10 rounded-xl flex items-center justify-center mb-6 text-brand-wine group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl text-brand-dark font-bold mb-4">24/7 Command Center</h3>
              <p className="text-gray-600 leading-relaxed">An emergency response team on standby 24 hours a day, directly connected to Max Healthcare facilities with zero delay.</p>
            </div>

            <div className="bg-luxury-ivory p-8 rounded-2xl border border-brand-gold/10 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-14 h-14 bg-brand-wine/10 rounded-xl flex items-center justify-center mb-6 text-brand-wine group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl text-brand-dark font-bold mb-4">Turnkey Acquisition</h3>
              <p className="text-gray-600 leading-relaxed">End-to-end digital property acquisition, virtual tours, legal documentation, and POA facilitation specifically tailored for NRIs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-brand-wine text-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">Speak With Our International Liaison</h2>
          <p className="text-xl text-gray-300 mb-12 font-light">Schedule a confidential video consultation adjusted to your timezone.</p>
          
          <a href="https://wa.me/919999266369" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-3 bg-brand-gold hover:bg-white text-brand-dark font-bold px-10 py-5 rounded-md transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm">
            <span>Schedule Video Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

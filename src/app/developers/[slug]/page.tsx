import { notFound } from "next/navigation";
import { developers } from "@/data/developers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppConsultation from "@/components/WhatsAppConsultation";
import ConsultationButton from "@/components/ConsultationButton";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const developer = developers.find((d) => d.id === slug);
  if (!developer) return { title: "Developer Not Found" };

  return {
    title: `${developer.name} | Sellworth Real Estate`,
    description: developer.description.slice(0, 150) + "...",
    keywords: developer.keywords.split(",").map(k => k.trim()),
  };
}

export default async function DeveloperPage({ params }: Props) {
  const { slug } = await params;
  const developer = developers.find((d) => d.id === slug);

  if (!developer) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-luxury-ivory text-luxury-black font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="space-y-6 mb-16 border-b border-luxury-gold/20 pb-12">
            <span className="font-mono text-xs tracking-[0.4em] text-luxury-gold uppercase block">
              Developer Profile
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-luxury-black tracking-wide">
              {developer.name}
            </h1>
            <p className="font-sans text-sm text-luxury-charcoal/60 font-mono uppercase tracking-widest mt-2">
              Strategic Alliance Partner
            </p>
          </div>

          {/* Content */}
          <div className="space-y-16">
            
            {/* Overview */}
            <section className="space-y-6">
              <h2 className="font-serif text-2xl text-luxury-black/90">
                Brand <span className="italic text-luxury-bronze">Overview</span>
              </h2>
              <div className="w-12 h-[1px] bg-luxury-gold/50" />
              <p className="font-sans text-base md:text-lg text-luxury-charcoal/80 font-light leading-relaxed">
                {developer.description}
              </p>
            </section>

            {/* History */}
            {developer.history && (
              <section className="space-y-6 bg-luxury-black text-luxury-ivory p-8 md:p-12 shadow-2xl">
                <h2 className="font-serif text-2xl text-luxury-ivory/90">
                  Legacy & <span className="italic text-luxury-gold">Foundation</span>
                </h2>
                <div className="w-12 h-[1px] bg-luxury-gold/50" />
                <p className="font-sans text-base md:text-lg text-luxury-ivory/80 font-light leading-relaxed">
                  {developer.history.replace("How and by whom " + developer.name + " was started:", "").trim()}
                </p>
              </section>
            )}

            {/* Call to Action */}
            <section className="text-center pt-12 border-t border-luxury-gold/20">
              <span className="font-mono text-[10px] tracking-widest text-luxury-gold uppercase block mb-6">
                Private Consultation
              </span>
              <h3 className="font-serif text-2xl text-luxury-black mb-6">
                Interested in {developer.name} Projects?
              </h3>
              <ConsultationButton developerName={developer.name} />
            </section>

          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppConsultation />
    </div>
  );
}

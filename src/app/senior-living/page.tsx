import Hero from "@/components/antara/Hero";
import FloatingCTA from "@/components/antara/FloatingCTA";
import About from "@/components/antara/About";
import WhyChoose from "@/components/antara/WhyChoose";
import Gallery from "@/components/antara/Gallery";
import NRISection from "@/components/antara/NRISection";
import Testimonials from "@/components/antara/Testimonials";
import Location from "@/components/antara/Location";
import FAQ from "@/components/antara/FAQ";
import Footer from "@/components/antara/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <About />
      <WhyChoose />
      <Gallery />
      <NRISection />
      <Testimonials />
      <Location />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </main>
  );
}

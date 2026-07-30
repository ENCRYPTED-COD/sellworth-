import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import FilteredInventory from "@/components/FilteredInventory";
import { Search } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const marketNames: Record<string, string> = {
  "golf-course-road": "Golf Course Road",
  "golf-course-extension-road": "Golf Course Extension Road",
  "spr": "SPR",
  "new-gurgaon": "New Gurgaon",
  "dwarka-expressway": "Dwarka Expressway"
};

type Props = {
  params: Promise<{ market: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const marketName = marketNames[resolvedParams.market] || resolvedParams.market.replace(/-/g, " ");
  return {
    title: `Luxury Apartments on ${marketName} Gurgaon | Sellworth`,
    description: `Explore new launch projects, luxury apartments, and premium real estate on ${marketName}, Gurugram with Sellworth's exclusive portfolio.`,
  };
}

export default async function MicroMarketPage({ params }: Props) {
  const resolvedParams = await params;
  const marketName = marketNames[resolvedParams.market] || resolvedParams.market.replace(/-/g, " ");
  const marketProperties = properties.filter(p => p.newLaunch && p.microMarket === resolvedParams.market);

  return (
    <main className="bg-luxury-black min-h-screen text-luxury-ivory pt-32 pb-24">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="mb-12">
          <Link href="/#collections" className="font-mono text-[9px] tracking-widest text-luxury-gold uppercase hover:text-luxury-ivory transition-colors mb-6 inline-block">
            &larr; Back to Collections
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide leading-tight mt-4">
            New Launch Projects on <br />
            <span className="italic text-luxury-gold font-light">{marketName}.</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-luxury-ivory/60 font-light tracking-wide max-w-2xl leading-relaxed mt-6">
            Discover our curated inventory of upcoming luxury residential and commercial landmarks located in Gurugram's most sought-after {marketName} corridor.
          </p>
        </div>

        <FilteredInventory initialProperties={marketProperties} marketName={marketName} />
      </div>
      
      <div className="mt-24">
        <Footer />
      </div>
    </main>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Property } from "../data/properties";

interface PropertyCardProps {
  prop: Property;
}

export default function PropertyCard({ prop }: PropertyCardProps) {
  return (
    <Link href={`/properties/${prop.slug}`} className="block group border border-luxury-ivory/5 bg-luxury-charcoal/20 hover:border-luxury-gold/30 transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={prop.heroImage} alt={prop.projectName} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="text-[10px] font-mono tracking-widest text-luxury-gold uppercase">{prop.developer}</div>
            <h3 className="font-serif text-xl text-luxury-ivory mt-1">{prop.projectName}</h3>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-mono text-luxury-ivory/40 uppercase">Advisory</div>
            <div className="text-luxury-gold font-serif">{prop.price}</div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-luxury-ivory/50 group-hover:text-luxury-gold transition-colors text-xs font-mono uppercase tracking-widest">
          <span>View Details</span>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}

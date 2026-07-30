import { motion } from "framer-motion";

export const microMarkets = [
  { id: "golf-course-road", label: "Golf Course Road" },
  { id: "golf-course-extension-road", label: "Golf Course Extension Road" },
  { id: "spr", label: "SPR" },
  { id: "new-gurgaon", label: "New Gurgaon" },
  { id: "dwarka-expressway", label: "Dwarka Expressway" }
] as const;

export type MicroMarketId = typeof microMarkets[number]["id"];

interface MicroMarketTabsProps {
  activeMarket: MicroMarketId;
  setActiveMarket: (id: MicroMarketId) => void;
}

export default function MicroMarketTabs({ activeMarket, setActiveMarket }: MicroMarketTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 md:gap-8 border-b border-luxury-ivory/10 pb-4 mb-8">
      {microMarkets.map((market) => (
        <button
          key={market.id}
          onClick={() => setActiveMarket(market.id)}
          className="relative font-mono text-[10px] md:text-xs tracking-widest uppercase pb-2 focus:outline-none transition-colors duration-500 group"
        >
          <span className={activeMarket === market.id ? "text-luxury-gold" : "text-luxury-ivory/50 group-hover:text-luxury-ivory/80"}>
            {market.label}
          </span>
          {activeMarket === market.id && (
            <motion.div
              layoutId="activeMicroMarket"
              className="absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold"
              transition={{ type: "tween", ease: [0.25, 0.1, 0.25, 1], duration: 0.6 }} // Gentle, luxurious easing
            />
          )}
        </button>
      ))}
    </div>
  );
}

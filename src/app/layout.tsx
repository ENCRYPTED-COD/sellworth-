import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import WhatsAppConsultation from "@/components/WhatsAppConsultation";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sellworth | Luxury Real Estate & Premium Properties in Gurugram",
  description: "Discover exclusive luxury apartments, bespoke villas, and premium commercial spaces in Gurugram's top locations like DLF Phase 5, Golf Course Road, and Cyber City.",
  keywords: [
    "Luxury Real Estate Gurugram", "Premium Properties Gurgaon", "DLF Camellias", "DLF Magnolias", "Golf Course Road Apartments", "Buy Villa Gurugram", "Commercial Leasing Cyber City",
    "best areas to buy property in Gurgaon",
    "ready to move flats in Gurgaon",
    "RERA approved projects in Gurgaon",
    "property on Dwarka Expressway",
    "commercial property in Gurgaon",
    "3 BHK flats in Gurgaon",
    "luxury apartments in Gurgaon",
    "builder floors in Gurgaon",
    "plots for sale in Gurgaon",
    "property dealer in Gurgaon",
    "property price in Gurgaon",
    "home loan for property in Gurgaon",
    "best localities in Gurgaon for families",
    "resale flats in Gurgaon",
    "property near Cyber City Gurgaon"
  ],
  openGraph: {
    title: "Sellworth | Luxury Real Estate Gurugram",
    description: "Gurgaon's premier real estate advisory for distinguished residential and commercial developments.",
    type: "website",
    locale: "en_IN",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${cormorant.variable} ${outfit.variable}`}
    >
      <body className="min-h-full bg-luxury-ivory text-luxury-black font-sans flex flex-col">
        {children}
        <WhatsAppConsultation />
      </body>
    </html>
  );
}
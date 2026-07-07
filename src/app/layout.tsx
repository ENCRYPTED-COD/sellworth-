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
  title: "Sellworth | Curating Landmark Addresses",
  description: "Gurgaon's premier real estate advisory for distinguished residential and commercial developments from ₹2Cr to ₹100Cr.",
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


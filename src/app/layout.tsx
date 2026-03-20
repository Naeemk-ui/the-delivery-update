import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/Chatbot"; // <-- Chatbot Imported

// PROPER LOCALIZED & COMPETITOR-OPTIMIZED SEO METADATA
export const metadata: Metadata = {
  title: "The Delivery | South Africa's Local Multi-Store Marketplace",
  description: "Customers browse. Stores get orders. Drivers deliver. The Delivery is a local multi-store marketplace and delivery network.",
  keywords: [
    "food delivery app",
    "grocery delivery near me",
    "the delivery app",
    "the delivery food delivery",
    "the delivery driver",
    "pharmacy delivery south africa",
    "cheapest food delivery app",
    "local food delivery app",
    "order groceries online",
    "spaza shop delivery",
    "same day grocery delivery",
    "online shopping delivery",
    "home cooked food delivery",
    "24 7 pharmacy delivery near me",
    "fast food delivery polokwane",
    "grocery delivery gauteng",
    "the delivery first order promo",
    "become a delivery driver",
    "multi-store marketplace"
  ],
  openGraph: {
    title: "The Delivery | South Africa's Local Multi-Store Marketplace",
    description: "Customers browse. Stores get orders. Drivers deliver. The Delivery is a local multi-store marketplace and delivery network.",
    url: "https://www.thedelivery.co.za",
    siteName: "The Delivery",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-neutral-background text-neutral-text antialiased">
        <Header />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        
        {/* Global Support Chatbot */}
        <Chatbot />
      </body>
    </html>
  );
}

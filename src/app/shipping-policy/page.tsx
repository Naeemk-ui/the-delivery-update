import { Truck } from "lucide-react";

export const metadata = {
  title: "Shipping Policy | The Delivery",
  description: "Learn about delivery areas, times, and shipping fees.",
};

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-neutral-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          
          <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-8">
            <div className="w-16 h-16 bg-accent-green/10 text-accent-green rounded-2xl flex items-center justify-center shrink-0">
              <Truck size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-secondary">Shipping Policy</h1>
              <p className="text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString('en-ZA')}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>The Delivery ensures your orders get to you as quickly and safely as possible. Here is how our delivery system works.</p>
            
            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">1. Delivery Zones</h2>
            <p>[Paste your 6amMart Shipping/Delivery Zone text here...]</p>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">2. Delivery Fees</h2>
            <p>[Paste your 6amMart Delivery Fees text here...]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
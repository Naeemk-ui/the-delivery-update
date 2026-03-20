import { XCircle } from "lucide-react";

export const metadata = {
  title: "Cancellation Policy | The Delivery",
  description: "Understand our order cancellation process.",
};

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-neutral-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          
          <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-8">
            <div className="w-16 h-16 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center shrink-0">
              <XCircle size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-secondary">Cancellation Policy</h1>
              <p className="text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString('en-ZA')}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>Sometimes plans change. This policy explains your rights regarding canceling an order once it has been placed.</p>
            
            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">1. Canceling an Order</h2>
            <p>[Paste your 6amMart Cancellation Policy text here...]</p>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">2. Store Cancellations</h2>
            <p>[Paste your 6amMart text about when a store might cancel an order here...]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
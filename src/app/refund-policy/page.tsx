import { RefreshCcw } from "lucide-react";

export const metadata = {
  title: "Refund Policy | The Delivery",
  description: "Understand our refund policy and process.",
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-neutral-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          
          <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-8">
            <div className="w-16 h-16 bg-accent-cyan/10 text-accent-cyan rounded-2xl flex items-center justify-center shrink-0">
              <RefreshCcw size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-secondary">Refund Policy</h1>
              <p className="text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString('en-ZA')}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>We want you to be completely satisfied with your order from The Delivery. This policy outlines when and how refunds are issued.</p>
            
            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">1. Eligibility for Refunds</h2>
            <p>[Paste your 6amMart Refund Policy text here...]</p>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">2. How to Request a Refund</h2>
            <p>[Paste your 6amMart Refund instructions here...]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
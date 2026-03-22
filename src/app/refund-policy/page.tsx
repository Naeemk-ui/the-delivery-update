import { RefreshCcw } from "lucide-react";

export const metadata = {
  title: "Refund Policy | The Delivery",
  description: "Understand our refund policy and process for orders, food, and parcels.",
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
            <p>
              At The Delivery, we strive to ensure every order arrives perfectly. However, we understand that mistakes can happen. This policy outlines when refunds are issued and how you can request one.
            </p>
            
            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">1. When You Are Eligible for a Refund</h2>
            <p>You may be entitled to a full or partial refund in the following situations:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Missing Items:</strong> If a portion of your order is missing, we will issue a partial refund for the specific items that were not delivered.</li>
              <li><strong>Incorrect Order:</strong> If you receive completely wrong items or an order meant for someone else, you are entitled to a full refund or a replacement order.</li>
              <li><strong>Damaged Goods:</strong> If your food or products arrive completely ruined (e.g., severely spilled during transit or crushed), you are eligible for a refund.</li>
              <li><strong>Store/Driver Cancellations:</strong> If the store cancels your order, or we are unable to fulfill it due to a lack of available drivers, you will receive a full 100% refund automatically.</li>
            </ul>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">2. Non-Refundable Situations</h2>
            <p>To protect our local merchant partners and drivers, we cannot issue refunds in the following scenarios:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Customer Error:</strong> If you entered the wrong delivery address and the driver is unable to deliver the order.</li>
              <li><strong>Unresponsive Customer (No-Show):</strong> If the driver arrives at your location and cannot reach you via phone or app notifications within 10 minutes.</li>
              <li><strong>Change of Mind:</strong> For perishable goods (food, groceries, flowers), we cannot offer refunds if you simply change your mind after the store has started preparing your order.</li>
              <li><strong>Taste Preferences:</strong> If the food was prepared correctly according to the menu description but you simply did not like the taste or presentation.</li>
            </ul>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">3. How to Request a Refund</h2>
            <p>
              If there is an issue with your order, time is of the essence—especially with hot food and perishables. 
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>Report the issue directly through the <strong>Help/Support section in The Delivery App</strong> within <strong>24 hours</strong> of receiving your order (for perishable food, please report within 1 hour).</li>
              <li>Provide clear <strong>photographic evidence</strong> of the incorrect or damaged items. Our team needs this to verify the issue with the store or driver.</li>
              <li>Include your Order ID and a brief description of the problem.</li>
            </ol>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">4. Refund Methods and Timelines</h2>
            <p>Once our support team approves your refund request, you can choose how you would like to be compensated:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>The Delivery Wallet (Recommended):</strong> We can credit your in-app wallet instantly. You can use these funds immediately on your next order.</li>
              <li><strong>Original Payment Method:</strong> We can refund the money directly to the card or bank account used for the purchase. Please note that depending on your bank, this can take <strong>3 to 7 business days</strong> to reflect in your account.</li>
            </ul>

            <p className="mt-8 text-sm text-gray-500 italic">
              For any refund-related inquiries or escalations, please email our support team at <a href="mailto:hello@thedelivery.co.za" className="text-primary hover:underline">hello@thedelivery.co.za</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
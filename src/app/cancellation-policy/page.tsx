import { XCircle } from "lucide-react";

export const metadata = {
  title: "Cancellation Policy | The Delivery",
  description: "Understand our order cancellation process for customers, stores, and drivers.",
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
            <p>
              At The Delivery, our goal is to ensure a smooth experience for our customers, local store partners, and delivery drivers. We understand that sometimes plans change. This policy outlines how and when orders can be canceled, and the associated refund eligibility.
            </p>
            
            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">1. Customer Cancellations</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Before the store accepts the order:</strong> You may cancel your order immediately through the app for a <strong>full 100% refund</strong>. No questions asked.</li>
              <li><strong>After the store accepts and begins preparation:</strong> Because our restaurant and grocery partners prepare fresh food and package items immediately, orders canceled after the vendor has started preparation are <strong>not eligible for a refund</strong>.</li>
              <li><strong>Parcel & Retail Deliveries:</strong> If a driver has already been dispatched to pick up your non-perishable order or parcel, a cancellation fee (equivalent to the delivery fee) will be deducted from your refund to compensate the driver for their time and fuel.</li>
            </ul>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">2. Unresponsive Customers (No-Shows)</h2>
            <p>
              When a driver arrives at your designated delivery address, they will attempt to contact you via the app and phone. If you are unreachable and fail to collect your order within <strong>10 minutes</strong> of the driver's arrival:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>The driver will be instructed to cancel the delivery and move on to their next order.</li>
              <li>You will be charged the full amount of the order, and <strong>no refund will be issued</strong>. This ensures our stores are paid for their goods and our drivers are compensated for the trip.</li>
            </ul>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">3. Store Cancellations</h2>
            <p>
              Occasionally, a store may need to cancel your order. This typically happens if an item is unexpectedly out of stock, the store is experiencing an unusually high volume of orders, or they are closing early.
            </p>
            <p>
              If a store cancels your order, you will be notified immediately via the app, and a <strong>full 100% refund</strong> will be initiated automatically.
            </p>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">4. Platform or Driver Cancellations</h2>
            <p>
              The Delivery reserves the right to cancel an order if there are no delivery drivers available in your area, if the delivery address falls outside our active service zones, or due to extreme weather conditions that make roads unsafe. If we cancel your order, you will receive a <strong>full 100% refund</strong>.
            </p>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">5. Refund Processing Times</h2>
            <p>
              When a refund is issued, we process it on our end immediately. However, depending on your bank or payment provider, it may take <strong>3 to 7 business days</strong> for the funds to successfully reflect in your account.
            </p>

            <p className="mt-8 text-sm text-gray-500 italic">
              If you have an issue with a canceled order that is not covered here, please reach out to our support team at <a href="mailto:hello@thedelivery.co.za" className="text-primary hover:underline">hello@thedelivery.co.za</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Truck } from "lucide-react";

export const metadata = {
  title: "Shipping & Delivery Policy | The Delivery",
  description: "Learn about our local delivery areas, times, fees, and tracking.",
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
              <h1 className="text-3xl md:text-4xl font-bold text-secondary">Shipping & Delivery Policy</h1>
              <p className="text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString('en-ZA')}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Unlike traditional e-commerce platforms, <strong>The Delivery</strong> specializes in fast, on-demand local logistics. We connect you with a network of independent delivery drivers to bring you fresh food, groceries, pharmacy items, and parcels as quickly as possible.
            </p>
            
            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">1. Delivery Zones & Coverage</h2>
            <p>
              We currently operate primarily within <strong>Polokwane and surrounding areas in Limpopo</strong>. 
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Each store or restaurant on our platform has a designated delivery radius to ensure food arrives hot and groceries arrive fresh.</li>
              <li>When you enter your address in The Delivery app, you will only see stores that are capable of delivering to your specific location.</li>
            </ul>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">2. Delivery Fees</h2>
            <p>
              We believe in fair, transparent pricing. Our delivery fees are dynamic and calculated at checkout based on the following factors:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Distance:</strong> The exact driving distance from the store to your drop-off location.</li>
              <li><strong>Time of Day:</strong> During peak rush hours or late-night operations, a slight surge fee may apply to ensure enough drivers are available on the road.</li>
              <li><strong>Weather Conditions:</strong> In the event of heavy rain or severe weather, a temporary surcharge may be added to fairly compensate our drivers for navigating difficult conditions.</li>
            </ul>
            <p className="italic text-sm">Note: 100% of the base delivery fee goes directly to your driver.</p>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">3. Estimated Delivery Times</h2>
            <p>
              Because our orders are fulfilled on-demand, delivery times vary based on what you are ordering:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Restaurant Food:</strong> Typically 30 to 45 minutes, depending on the restaurant's preparation time and traffic.</li>
              <li><strong>Groceries & Retail:</strong> Typically 45 to 60 minutes, allowing time for the driver to pick and pack your items if necessary.</li>
              <li><strong>Parcels:</strong> Scheduled or ASAP based on your selection at checkout.</li>
            </ul>
            <p>
              While we strive to meet all estimated delivery times, external factors like severe traffic, accidents, or restaurant delays can occasionally extend these times.
            </p>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">4. Order Tracking & Communication</h2>
            <p>
              Once your order is accepted, you can track it in real-time through The Delivery app. You will receive push notifications when:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>The store begins preparing your order.</li>
              <li>The driver picks up your order.</li>
              <li>The driver is arriving at your location.</li>
            </ul>
            <p>
              You can also contact your driver directly through the app once they have picked up your order.
            </p>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">5. Failed Deliveries</h2>
            <p>
              It is your responsibility to ensure someone is available to receive the order at the provided address. If our driver arrives and cannot reach you via the app or phone within <strong>10 minutes</strong>, they will be instructed to cancel the delivery. In this scenario, you will still be charged for the order to compensate the store and the driver.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
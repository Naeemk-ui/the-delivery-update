import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | The Delivery",
  description: "Read the terms and conditions for using The Delivery platform in South Africa.",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-neutral-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          
          <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-8">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
              <FileText size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-secondary">Terms & Conditions</h1>
              <p className="text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString('en-ZA')}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Welcome to <strong>The Delivery</strong>. These Terms & Conditions govern your access to and use of our website, mobile application, and related services. By registering an account or using our platform, you agree to be bound by these terms. 
            </p>
            
            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">1. Our Role as a Marketplace</h2>
            <p>
              The Delivery operates as an independent logistics and technology platform (a "Marketplace"). We connect consumers ("You") with local independent restaurants, grocery stores, pharmacies, and retail shops ("Merchants"), and independent delivery contractors ("Drivers"). 
            </p>
            <p>
              We do not prepare, cook, package, or independently verify the quality of the goods sold by Merchants. The Merchant is solely responsible for the quality, safety, and compliance of the products they sell on our platform.
            </p>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">2. User Accounts</h2>
            <p>
              To use most aspects of our platform, you must register for and maintain an active personal user account. 
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>You must be at least 18 years of age to create an account.</li>
              <li>You agree to provide accurate, complete, and up-to-date information, including a valid phone number and payment method.</li>
              <li>You are responsible for all activity that occurs under your account and for maintaining the secrecy of your login credentials.</li>
            </ul>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">3. Ordering and Payments</h2>
            <p>
              When you place an order through The Delivery, you are making an offer to purchase goods from the Merchant and delivery services from the Driver. 
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Pricing:</strong> Item prices are set by the Merchants and may differ from in-store prices. We reserve the right to charge service fees and delivery fees, which will be clearly displayed at checkout.</li>
              <li><strong>Dynamic Fees:</strong> Delivery fees may fluctuate based on distance, time of day, and weather conditions (surge pricing) to ensure Driver availability.</li>
              <li><strong>Payments:</strong> All payments are processed securely through our authorized payment gateways. By placing an order, you authorize us to charge your selected payment method for the total amount shown.</li>
            </ul>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">4. Alcohol and Age-Restricted Items</h2>
            <p>
              If you order alcohol, tobacco, or other age-restricted products, you verify that you are of legal age to purchase them under South African law. Drivers are instructed to verify your ID upon delivery. If you cannot produce a valid ID, or appear intoxicated, the Driver will not hand over the restricted items, and you will still be charged a cancellation/delivery fee.
            </p>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">5. Prohibited Conduct</h2>
            <p>While using The Delivery, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Violate any applicable laws or regulations.</li>
              <li>Use the platform to transport illegal, hazardous, or stolen goods.</li>
              <li>Harass, abuse, or threaten our Merchants, Drivers, or support staff.</li>
              <li>Create duplicate accounts to abuse promotional codes or referral systems.</li>
            </ul>
            <p>We reserve the right to suspend or terminate your account immediately if you violate these rules.</p>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, The Delivery, its directors, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform. Our total liability to you for any claims arising out of these Terms shall not exceed the amount you paid to us in the past 3 months.
            </p>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">7. Governing Law</h2>
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the South African courts.
            </p>

            <p className="mt-8 text-sm text-gray-500 italic">
              If you have any questions regarding these Terms & Conditions, please contact us at <a href="mailto:hello@thedelivery.co.za" className="text-primary hover:underline">hello@thedelivery.co.za</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
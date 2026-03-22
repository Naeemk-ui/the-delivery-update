import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | The Delivery",
  description: "Read our privacy policy and learn how we protect your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-neutral-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          
          {/* Page Header */}
          <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-8">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-secondary">Privacy Policy</h1>
              <p className="text-gray-500 mt-2">Last updated: {new Date().toLocaleDateString('en-ZA')}</p>
            </div>
          </div>

          {/* Policy Content */}
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              At <strong>The Delivery</strong>, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile application. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
            </p>
            
            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">1. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect via the Application includes:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, delivery address, email address, and telephone number, that you voluntarily give to us when you register with the Application or when you choose to participate in various activities related to the Application.</li>
              <li><strong>Location Data:</strong> We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our Application, to provide accurate delivery tracking and location-based services.</li>
              <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services. All payment data is stored and processed by our secure payment processors.</li>
            </ul>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">2. How We Use Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Create and manage your account.</li>
              <li>Process your orders, payments, and refunds.</li>
              <li>Facilitate the delivery of your orders by sharing necessary details (like your address and phone number) with our Merchant partners and delivery Drivers.</li>
              <li>Send you push notifications regarding your order status.</li>
              <li>Improve our app performance, routing algorithms, and customer service.</li>
            </ul>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">3. Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>To Merchants and Drivers:</strong> We share your order details, delivery address, and contact number with the specific store you ordered from and the independent driver assigned to your order so they can successfully prepare and deliver your items.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service assistance.</li>
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
            </ul>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">4. Data Security</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">5. Your Privacy Rights</h2>
            <p>Depending on your location and applicable laws (such as the POPI Act in South Africa), you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request that we correct or update any inaccurate data.</li>
              <li>Request that we delete your personal data from our systems (subject to certain legal record-keeping obligations).</li>
            </ul>
            <p>To exercise these rights, you can delete your account directly within the settings menu of The Delivery app, or contact our support team.</p>

            <p className="mt-8 text-sm text-gray-500 italic">
              If you have questions or comments about this Privacy Policy, please contact us at <a href="mailto:hello@thedelivery.co.za" className="text-primary hover:underline">hello@thedelivery.co.za</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
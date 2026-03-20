import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | The Delivery",
  description: "Read the terms and conditions for using The Delivery platform.",
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
            <p>Welcome to The Delivery. By accessing or using our platform, you agree to be bound by these Terms and Conditions.</p>
            
            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">1. Use of the Platform</h2>
            <p>[Paste your 6amMart Terms and Conditions text here...]</p>

            <h2 className="text-xl font-bold text-secondary mt-8 mb-4">2. User Accounts</h2>
            <p>[Paste your 6amMart User Account terms here...]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
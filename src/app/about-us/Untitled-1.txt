import Image from "next/image";
import { Target, Heart, Zap } from "lucide-react";

export const metadata = {
  title: "About Us | The Delivery",
  description: "Learn about how The Delivery is connecting South Africa's local businesses with everyday shoppers.",
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-neutral-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">Empowering Local <span className="text-primary">Commerce.</span></h1>
          <p className="text-xl text-neutral-subtle max-w-3xl mx-auto leading-relaxed">
            The Delivery was built with one mission: to make it incredibly easy for people to support the local stores and restaurants they love, without compromising on the convenience of fast, on-demand delivery.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide a seamless, reliable platform that connects hungry shoppers and everyday buyers with the best local merchants and fastest drivers in their city.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-accent-green/10 text-accent-green rounded-2xl flex items-center justify-center mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Community First</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe that when local businesses thrive, the whole community thrives. We take lower commissions to ensure our partners keep more of what they earn.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-accent-cyan/10 text-accent-cyan rounded-2xl flex items-center justify-center mb-6">
              <Zap size={32} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Lightning Fast</h3>
            <p className="text-gray-600 leading-relaxed">
              Using state-of-the-art routing technology, our network of independent delivery drivers gets your food and parcels to you hot, fresh, and on time.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
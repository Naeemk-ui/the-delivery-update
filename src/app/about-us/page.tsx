import Image from "next/image";
import { 
  Target, 
  Heart, 
  Zap, 
  Store, 
  Bike, 
  ShoppingBag, 
  MapPin, 
  TrendingUp 
} from "lucide-react";

export const metadata = {
  title: "About Us | The Delivery",
  description: "Learn how The Delivery is connecting South Africa's local businesses with everyday shoppers in Polokwane and beyond.",
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-neutral-background pt-32 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 max-w-6xl mb-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block bg-primary/10 text-primary font-bold px-4 py-1.5 rounded-full text-sm mb-6">
            South Africa's Local Marketplace
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight">
            Empowering Local <span className="text-primary">Commerce.</span>
          </h1>
          <p className="text-xl text-neutral-subtle leading-relaxed">
            The Delivery was built with one mission: to make it incredibly easy for people to support the local stores and restaurants they love, without compromising on the convenience of fast, on-demand delivery.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY SECTION */}
      <section className="container mx-auto px-4 max-w-6xl mb-24">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden relative">
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Born in Polokwane. <br /> Built for everyone.
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                We noticed a problem in the delivery industry: massive international apps were taking huge commissions from local restaurants, and smaller neighborhood stores (like spaza shops, butchers, and florists) were completely left out of the e-commerce boom.
              </p>
              <p>
                <strong>The Delivery</strong> was created to level the playing field. We built a platform that gives local merchants the same powerful digital tools as the retail giants. 
              </p>
              <p>
                By keeping our fees fair and our technology local, we keep money circulating within the community. When you order through our app, you aren't just getting a fast meal or quick groceries—you are supporting your neighbor's business and creating earning opportunities for local drivers.
              </p>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl z-10">
            {/* Make sure to add an image named 'about-story.jpg' to your public/images folder, or use an abstract background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-accent-cyan/60 mix-blend-multiply z-10"></div>
            <Image 
              src="/images/bg-abstract-growth.png" 
              alt="The Delivery Team" 
              fill 
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
              <MapPin className="mb-2 text-white" size={28} />
              <p className="font-bold text-lg">Proudly South African</p>
              <p className="text-sm text-gray-200">Headquartered in Limpopo</p>
            </div>
          </div>
          
          {/* Decorative background blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </section>

      {/* 3. OUR CORE VALUES (MISSION & VISION) */}
      <section className="container mx-auto px-4 max-w-6xl mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">What drives us forward</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide a seamless, reliable platform that connects hungry shoppers and everyday buyers with the best local merchants and fastest drivers in their city.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-accent-green/10 text-accent-green rounded-2xl flex items-center justify-center mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Community First</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe that when local businesses thrive, the whole community thrives. We take lower commissions to ensure our partners keep more of what they earn.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-accent-cyan/10 text-accent-cyan rounded-2xl flex items-center justify-center mb-6">
              <Zap size={32} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Lightning Fast</h3>
            <p className="text-gray-600 leading-relaxed">
              Using state-of-the-art routing technology, our network of independent delivery drivers gets your food and parcels to you hot, fresh, and on time.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE 3-SIDED ECOSYSTEM */}
      <section className="bg-secondary text-white py-24 mb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">One Platform. Three Winners.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A marketplace only works when it benefits everyone. Here is how we create value for the entire city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary-dark p-8 rounded-3xl border border-gray-800 text-center">
              <div className="w-16 h-16 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">For Customers</h3>
              <p className="text-gray-400 text-sm">
                Unmatched convenience. Order everything from hot pizza and fresh groceries to pharmacy essentials and pet supplies, all in one seamless app.
              </p>
            </div>

            <div className="bg-secondary-dark p-8 rounded-3xl border border-gray-800 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
              <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <Store size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">For Stores</h3>
              <p className="text-gray-400 text-sm relative z-10">
                A digital storefront without the massive overhead. We handle the tech and the logistics so local businesses can focus on making great products.
              </p>
            </div>

            <div className="bg-secondary-dark p-8 rounded-3xl border border-gray-800 text-center">
              <div className="w-16 h-16 bg-accent-cyan/10 text-accent-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Bike size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">For Drivers</h3>
              <p className="text-gray-400 text-sm">
                Flexible earning opportunities. Drivers set their own hours, earn competitive rates, and become the logistics backbone of their community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="container mx-auto px-4 max-w-4xl text-center">
        <div className="bg-gradient-to-br from-white to-gray-50 p-12 rounded-[3rem] shadow-xl border border-gray-100">
          <TrendingUp className="mx-auto text-accent-green mb-6" size={48} />
          <h2 className="text-4xl font-bold text-secondary mb-6">Ready to join the local revolution?</h2>
          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
            Whether you want to shop, drive, or sell, there is a place for you on The Delivery app.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://thedelivery.co.za/vendor/apply" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all w-full sm:w-auto text-center shadow-lg">
              Partner Your Store
            </a>
            <a href="https://apps.apple.com/us/app/the-delivery/id6743215791" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-black text-white px-8 py-4 rounded-2xl font-bold transition-all w-full sm:w-auto text-center">
              Download the App
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
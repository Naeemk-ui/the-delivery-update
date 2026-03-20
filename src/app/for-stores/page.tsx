"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  TrendingUp, 
  MapPin, 
  Clock, 
  Smartphone, 
  ShieldCheck, 
  Truck,
  CheckCircle,
  ChevronRight
} from "lucide-react";

export default function ForStores() {
  // Calculator State
  const [aov, setAov] = useState(150);
  const [orders, setOrders] = useState(15);
  const [days, setDays] = useState(26);
  
  // Hydration Fix State
  const [mounted, setMounted] = useState(false);

  // Tell React we are safely loaded in the browser
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const estimatedRevenue = aov * orders * days;

  return (
    <div className="flex flex-col min-h-screen bg-neutral-background">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none z-0">
          {/* Make sure bg-abstract-growth.png exists in your public/images folder! */}
          <Image src="/images/bg-abstract-growth.png" alt="Growth Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-block bg-accent-green/10 text-accent-green font-bold px-4 py-1.5 rounded-full text-sm mb-6">
                Partner With Us
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
                Turn local browsers into <span className="text-primary">paying customers.</span>
              </h1>
              <p className="text-lg text-neutral-subtle mb-8 leading-relaxed">
                Even if you already have a website or your own delivery system, The Delivery helps nearby users discover your business while they browse the app. Get more orders without building your own delivery stack.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* Updated to live URL */}
                <a href="https://www.thedelivery.co.za/vendor/apply" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2">
                  Start Store Registration <ChevronRight size={20} />
                </a>
                <a href="#calculator" className="bg-white text-secondary border border-gray-200 hover:border-secondary px-8 py-4 rounded-2xl font-bold transition-all">
                  Estimate My Revenue
                </a>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Make sure persona-store-owner.png exists in your public/images folder! */}
              <Image src="/images/persona-store-owner.png" alt="Proud Store Owner" fill className="object-cover" priority />
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="bg-accent-green/20 p-3 rounded-full text-accent-green">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary">Revenue Up</p>
                  <p className="text-xs text-gray-500">+24% this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY STORES JOIN */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Why partner with The Delivery?</h2>
            <p className="text-neutral-subtle text-lg max-w-2xl mx-auto">We provide the network, the tech, and the drivers. You just keep doing what you do best.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Smartphone, title: "Extra Visibility", desc: "Get discovered by thousands of nearby app users searching your category." },
              { icon: Truck, title: "Built-in Delivery", desc: "Never worry about logistics. Our network of local drivers handles it for you." },
              { icon: TrendingUp, title: "Additional Sales", desc: "Capture impulse buyers and convenience shoppers you wouldn't reach otherwise." },
              { icon: MapPin, title: "Local Reach", desc: "Expand your delivery radius effortlessly across Polokwane and beyond." },
              { icon: Clock, title: "Real-time Order Flow", desc: "Manage prep times and incoming orders instantly via your store dashboard." },
              { icon: ShieldCheck, title: "Lower Friction", desc: "Much easier and cheaper than trying to build and market your own delivery app." }
            ].map((benefit, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: ONBOARDING TIMELINE */}
      <section className="py-24 bg-secondary text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6">How onboarding works</h2>
              <p className="text-gray-300 mb-12 text-lg">We've made it simple to get your store live. Here is exactly what you need to prepare before clicking register.</p>
              <div className="bg-secondary-dark p-8 rounded-3xl border border-gray-700">
                <h3 className="font-bold text-xl mb-6 text-accent-cyan">What you'll need ready:</h3>
                <ul className="space-y-4">
                  {["Business name, address, and zone", "Estimated delivery preparation time", "High-quality logo and cover image", "Owner details and Tax/VAT info", "A secure account password"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="text-accent-green shrink-0 mt-0.5" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative border-l-2 border-gray-700 pl-8 space-y-12">
              {[
                { step: "1", title: "Submit your application", desc: "Fill out the quick vendor form with your business details and location." },
                { step: "2", title: "Our team reviews", desc: "We verify your details to ensure a high-quality marketplace experience." },
                { step: "3", title: "Set up your store", desc: "Add your menu, products, and pricing to your new dashboard." },
                { step: "4", title: "Go live & earn", desc: "Turn on your availability and start accepting local orders instantly." }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[43px] top-0 w-8 h-8 bg-secondary-dark border-2 border-primary rounded-full flex items-center justify-center font-bold text-sm text-primary">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE ROI CALCULATOR */}
      <section id="calculator" className="py-24 bg-neutral-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Calculate your potential earnings</h2>
            <p className="text-neutral-subtle text-lg">Adjust the sliders below to see how much extra revenue The Delivery could bring you.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100 relative">
            
            <div className="p-8 md:p-12 md:w-3/5 border-r border-gray-100 relative z-20">
              
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <label className="font-bold text-secondary">Average Order Value (ZAR)</label>
                  <span className="font-bold text-primary">R {aov}</span>
                </div>
                <input 
                  type="range" min="30" max="500" step="10" 
                  value={aov} 
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                  style={{ accentColor: '#FF7A00' }}
                />
              </div>

              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <label className="font-bold text-secondary">Extra Orders Per Day</label>
                  <span className="font-bold text-primary">{orders} orders</span>
                </div>
                <input 
                  type="range" min="1" max="100" 
                  value={orders} 
                  onChange={(e) => setOrders(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                  style={{ accentColor: '#FF7A00' }}
                />
              </div>

              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <label className="font-bold text-secondary">Days Open Per Month</label>
                  <span className="font-bold text-primary">{days} days</span>
                </div>
                <input 
                  type="range" min="1" max="31" 
                  value={days} 
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                  style={{ accentColor: '#FF7A00' }}
                />
              </div>
              
              <p className="text-xs text-gray-400 mt-6">* This calculator is for illustrative purposes only and does not guarantee actual earnings. Revenue is shown before platform fees.</p>
            </div>

            <div className="p-8 md:p-12 md:w-2/5 bg-secondary text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-green/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <h3 className="text-lg text-gray-300 mb-2 relative z-10">Estimated Extra Revenue</h3>
              <div className="text-5xl lg:text-6xl font-bold text-accent-green mb-8 relative z-10">
                {/* HYDRATION FIX IMPLEMENTED HERE */}
                R {mounted ? estimatedRevenue.toLocaleString('en-US') : estimatedRevenue}
                <span className="text-2xl text-gray-400 block mt-2 text-center">/ month</span>
              </div>

              {/* Updated to live URL */}
              <a href="https://www.thedelivery.co.za/vendor/apply" target="_blank" rel="noopener noreferrer" className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-2xl font-bold transition-all text-center shadow-lg relative z-10">
                List My Store
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
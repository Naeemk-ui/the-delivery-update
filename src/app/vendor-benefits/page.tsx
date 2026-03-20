"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Store, 
  TrendingUp, 
  Users, 
  Bike, 
  XCircle, 
  CheckCircle2, 
  Smartphone, 
  Target,
  ArrowRight,
  PackageCheck,
  CreditCard,
  Search
} from "lucide-react";
import Link from "next/link";

export default function VendorBenefits() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-background pt-20">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-secondary text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/40 via-secondary to-secondary"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6 border border-primary/30">
                <Store size={16} /> Partner With The Delivery
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Grow your sales <br />
                <span className="text-primary">without the struggle.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
                We don’t just deliver your orders. We bring the customers to you. Join South Africa's fastest-growing local marketplace and watch your revenue multiply.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.thedelivery.co.za/vendor/apply" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/30 flex items-center gap-2 text-lg">
                  Register My Store <ArrowRight size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.7 }}
              className="relative h-[400px] lg:h-[500px] w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/20 to-primary/20 rounded-3xl transform rotate-3 blur-sm"></div>
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
                {/* Mockup App Interface */}
                <div className="bg-gray-100 p-4 border-b flex justify-between items-center">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded-full"></div><div className="w-3 h-3 bg-yellow-500 rounded-full"></div><div className="w-3 h-3 bg-green-500 rounded-full"></div></div>
                  <div className="text-gray-500 text-sm font-semibold">Vendor Dashboard</div>
                  <div></div>
                </div>
                <div className="p-6 flex-grow flex flex-col gap-4 bg-gray-50">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <p className="text-gray-500 font-semibold text-sm">Today's Revenue</p>
                      <h3 className="text-4xl font-bold text-secondary">R 4,250</h3>
                    </div>
                    <div className="text-green-500 flex items-center font-bold bg-green-100 px-2 py-1 rounded-lg"><TrendingUp size={16} className="mr-1"/> +24%</div>
                  </div>
                  {/* Mock Orders */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center animate-pulse">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center"><PackageCheck size={20}/></div>
                      <div><p className="font-bold text-secondary text-sm">Order #1042</p><p className="text-xs text-gray-500">Preparing...</p></div>
                    </div>
                    <p className="font-bold text-secondary">R 340</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center opacity-70">
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 bg-accent-cyan/10 text-accent-cyan rounded-full flex items-center justify-center"><Bike size={20}/></div>
                      <div><p className="font-bold text-secondary text-sm">Order #1041</p><p className="text-xs text-gray-500">Out for delivery</p></div>
                    </div>
                    <p className="font-bold text-secondary">R 125</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= THE MARKETPLACE ADVANTAGE ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">We are <span className="text-primary border-b-4 border-primary">not</span> just a courier.</h2>
            <p className="text-neutral-subtle text-lg max-w-2xl mx-auto">
              If you build your own website, you have to fight for every single visitor. On The Delivery, thousands of hungry, ready-to-buy customers are already browsing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            {/* The Old Way */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-red-50/50 border border-red-100 p-8 md:p-10 rounded-3xl">
              <div className="w-14 h-14 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                <XCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-6">A Standalone Website</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
                  <p className="text-gray-700"><strong>Zero Foot Traffic.</strong> You only get orders if people already know your exact website URL.</p>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
                  <p className="text-gray-700"><strong>Expensive Marketing.</strong> You have to pay Google and Facebook to bring every single customer to you.</p>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
                  <p className="text-gray-700"><strong>Logistics Nightmare.</strong> You have to hire, manage, and pay your own delivery drivers.</p>
                </li>
              </ul>
            </motion.div>

            {/* The Delivery Way */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-secondary p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              
              <div className="w-14 h-14 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">The Delivery Marketplace</h3>
              <ul className="space-y-5 relative z-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <p className="text-gray-300"><strong>Built-in Audience.</strong> Customers open our app to browse categories and discover your store instantly.</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <p className="text-gray-300"><strong>Impulse Sales.</strong> Users shopping for one thing often spot your store and add extra items to their cart.</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <p className="text-gray-300"><strong>We Handle Fulfillment.</strong> Our massive fleet of local drivers is ready to dispatch the second you prepare an order.</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS (VISUAL FLOW) ================= */}
      <section className="py-24 bg-neutral-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">A Seamless Fulfillment Machine</h2>
            <p className="text-neutral-subtle text-lg max-w-2xl mx-auto">
              From the moment a customer gets a craving, to the moment it hits their doorstep, our platform automates the heavy lifting.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 relative"
          >
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-gray-200 rounded-full z-0">
              <motion.div 
                initial={{ width: "0%" }} 
                whileInView={{ width: "100%" }} 
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                className="h-full bg-primary rounded-full"
              ></motion.div>
            </div>

            {/* Step 1 */}
            <motion.div variants={fadeUp} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-lg mb-6 group hover:border-primary transition-colors">
                <Search className="text-accent-cyan w-10 h-10 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-2">1. Discovery</h4>
              <p className="text-sm text-gray-500 px-4">Customer opens The Delivery app, browses your category, and places an order.</p>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={fadeUp} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-lg mb-6 group hover:border-primary transition-colors">
                <Smartphone className="text-primary w-10 h-10 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-2">2. Preparation</h4>
              <p className="text-sm text-gray-500 px-4">Your tablet/phone pings. You accept the order and begin packing or cooking.</p>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={fadeUp} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-lg mb-6 group hover:border-primary transition-colors">
                <Bike className="text-accent-green w-10 h-10 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-2">3. Dispatch</h4>
              <p className="text-sm text-gray-500 px-4">Our system automatically locates the nearest driver and routes them to your store.</p>
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={fadeUp} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-lg mb-6 group hover:border-primary transition-colors">
                <CreditCard className="text-indigo-500 w-10 h-10 group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-2">4. Payout</h4>
              <p className="text-sm text-gray-500 px-4">The customer tracks the driver in real-time. The order completes, and you get paid.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= EXTRA BENEFITS GRID ================= */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Everything you need to scale.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-background border border-gray-100 hover:shadow-lg transition-shadow">
              <Users className="text-primary mb-4 w-10 h-10" />
              <h3 className="text-xl font-bold text-secondary mb-3">Customer Retention</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our platform handles loyalty programs, promo codes, and notifications to keep your customers coming back week after week.</p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-background border border-gray-100 hover:shadow-lg transition-shadow">
              <Target className="text-accent-cyan mb-4 w-10 h-10" />
              <h3 className="text-xl font-bold text-secondary mb-3">Powerful Analytics</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Your vendor dashboard gives you deep insights. Know your best-selling items, busiest hours, and exactly how much revenue you're making.</p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-background border border-gray-100 hover:shadow-lg transition-shadow">
              <Store className="text-accent-green mb-4 w-10 h-10" />
              <h3 className="text-xl font-bold text-secondary mb-3">Any Business Type</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Whether you are a hot-food restaurant, a grocery store, a spaza shop, or a pharmacy—our platform adapts to your specific inventory style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to multiply your daily orders?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Registration takes less than 5 minutes. Open your digital doors to thousands of local customers today.
          </p>
          <a href="https://www.thedelivery.co.za/vendor/apply" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-secondary text-white hover:bg-black px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl hover:scale-105">
            <Store size={24} /> Partner Your Store Now
          </a>
        </div>
      </section>

    </div>
  );
}
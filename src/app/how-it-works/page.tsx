"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Search, 
  CreditCard, 
  MapPin, 
  BellRing, 
  PackageCheck, 
  Bike,
  Smartphone,
  CheckCircle2,
  ChevronRight,
  Store,
  User
} from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-background">
      
      {/* =========================================
          SECTION 1: HERO
          ========================================= */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-1.5 rounded-full text-sm mb-6">
              <Smartphone size={18} /> The Marketplace Engine
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              How <span className="text-primary">The Delivery</span> connects your city.
            </h1>
            <p className="text-lg text-neutral-subtle leading-relaxed">
              We bring together local shoppers, neighborhood stores, and independent drivers onto one seamless platform. Here is exactly what happens when an order is placed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: THE CUSTOMER JOURNEY
          ========================================= */}
      <section className="py-24 bg-neutral-background overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center text-accent-cyan">
                  <User size={32} />
                </div>
                <h2 className="text-4xl font-bold text-secondary">1. The Customer</h2>
              </div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                It all starts with a craving or an empty fridge. Customers open The Delivery app to browse top-rated restaurants, local grocery stores, and specialty shops near them.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Search, title: "Discover Local Favorites", desc: "Browse by category, search for specific items, or find new spots nearby." },
                  { icon: CreditCard, title: "Seamless Checkout", desc: "Pay securely in the app using a card, or choose cash on delivery." },
                  { icon: MapPin, title: "Live Tracking", desc: "Watch the order move from the store to the front door in real-time." }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm text-accent-cyan shrink-0 mt-1">
                      <step.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-lg">{step.title}</h4>
                      <p className="text-gray-500 text-sm mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] w-full bg-accent-cyan/5 rounded-3xl border border-accent-cyan/20 flex items-center justify-center"
            >
              {/* Fallback image block if you don't have a specific customer app image yet */}
              <div className="relative w-64 h-[450px]">
                <Image src="/images/mockup-user-app.png" alt="Customer App" fill className="object-contain drop-shadow-2xl" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: THE STORE JOURNEY
          ========================================= */}
      <section className="py-24 bg-white overflow-hidden border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center text-accent-green">
                  <Store size={32} />
                </div>
                <h2 className="text-4xl font-bold text-secondary">2. The Store</h2>
              </div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                The moment a customer pays, the partner store receives a loud notification on their tablet or dashboard. They accept the order and start preparing it immediately.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: BellRing, title: "Instant Notification", desc: "The store dashboard rings, showing exactly what needs to be prepared." },
                  { icon: PackageCheck, title: "Prep & Pack", desc: "The store prepares the items and taps 'Ready for Driver' on their screen." },
                  { icon: CheckCircle2, title: "Hand-off", desc: "The store hands the sealed package to the assigned driver." }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-neutral-background p-3 rounded-xl shadow-sm text-accent-green shrink-0 mt-1">
                      <step.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-lg">{step.title}</h4>
                      <p className="text-gray-500 text-sm mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <a href="/for-stores" className="text-accent-green font-bold hover:text-accent-green/80 flex items-center gap-2 transition-colors">
                  Learn more about partnering <ChevronRight size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] w-full bg-accent-green/5 rounded-3xl border border-accent-green/20 flex items-center justify-center"
            >
              <div className="text-center px-8">
                <div className="bg-white p-6 rounded-2xl shadow-xl inline-block mb-4">
                  <h3 className="text-xl font-bold text-secondary mb-2">New Order! #4092</h3>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4 border-b pb-4">
                    <span>2 Items</span>
                    <span className="font-bold text-accent-green">Paid</span>
                  </div>
                  <button className="w-full bg-accent-green text-white font-bold py-3 rounded-xl shadow-lg">
                    Accept Order
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: THE DRIVER JOURNEY
          ========================================= */}
      <section className="py-24 bg-secondary text-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <Bike size={32} />
                </div>
                <h2 className="text-4xl font-bold">3. The Driver</h2>
              </div>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Our smart dispatch system automatically pings the closest available driver. They pick up the order and navigate the fastest route to the customer.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Smartphone, title: "Accept Delivery", desc: "The driver receives a notification with the pickup and drop-off locations." },
                  { icon: Store, title: "Quick Pickup", desc: "They head to the store, verify the order number, and secure the package." },
                  { icon: MapPin, title: "Fast Delivery", desc: "Using built-in GPS routing, they deliver the order to the happy customer." }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-secondary-dark border border-gray-700 p-3 rounded-xl shadow-sm text-primary shrink-0 mt-1">
                      <step.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{step.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a href="/for-drivers" className="text-primary font-bold hover:text-white flex items-center gap-2 transition-colors">
                  Learn more about driving <ChevronRight size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] w-full bg-primary/10 rounded-3xl border border-primary/20 flex items-center justify-center overflow-hidden"
            >
               {/* Abstract map representation */}
               <div className="absolute inset-0 opacity-30">
                 <Image src="/images/bg-dark-map-route.png" alt="Map Route" fill className="object-cover" />
               </div>
               
               {/* Floating driver notification */}
               <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white text-secondary p-5 rounded-2xl shadow-2xl z-10 w-64"
                >
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Delivery Request</p>
                  <h3 className="text-lg font-bold text-secondary mb-3">R45.00 Estimated</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Store size={14} className="text-accent-green" /> Mpho's Pizzeria
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <MapPin size={14} className="text-primary" /> 3.2km away
                  </div>
                  <div className="w-full bg-primary text-white text-center py-2 rounded-lg font-bold cursor-pointer">
                    Tap to Accept
                  </div>
               </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: BOTTOM CTA
          ========================================= */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Whether you want to order food, grow your business, or make money on your own schedule—The Delivery is here for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://shop.thedelivery.co.za" target="_blank" rel="noopener noreferrer" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg">
              Start Shopping
            </a>
            <a href="/vendor/apply" className="bg-primary-dark border border-white/20 hover:border-white text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg">
              Add Your Store
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link"; // ADDED THIS
import { motion } from "framer-motion";
import { 
  Store, 
  ShoppingBag, 
  Bike, 
  Check, 
  X,
  Utensils,
  ShoppingCart,
  Flower,
  BookOpen,
  Baby,
  Beef,
  Droplet,
  Package,
  Pill,
  Dog,
  Smartphone,
  Cake,
  Sparkles,
  LogIn,
  Apple,
  Play,
  ChevronRight,
  Home as HomeIcon
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* =========================================
          SECTION 1: DARK HERO
          ========================================= */}
      <section className="relative bg-secondary text-white overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <Image 
            src="/images/bg-dark-map-route.png" 
            alt="Map Route Background" 
            fill 
            className="object-cover"
            priority
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="text-accent-cyan font-semibold tracking-wide uppercase text-sm mb-4">
                South Africa’s Local Multi-Store Marketplace
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Customers browse. <br/>
                <span className="text-primary">Stores get orders.</span> <br/>
                Drivers deliver.
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                The Delivery isn't just a courier, and it isn't just one online shop. We are a local marketplace connecting shoppers to nearby stores, restaurants, and essentials—all with fast delivery.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <a href="#apps" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg flex items-center gap-2">
                  <Smartphone size={20} /> Download the App
                </a>
                
                <a href="https://www.thedelivery.co.za/login/seller" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 backdrop-blur-sm">
                  <LogIn size={20} /> Seller Portal Login
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] lg:h-[600px] w-full flex justify-center items-center"
            >
              <div className="relative w-64 h-[500px] lg:w-80 lg:h-[600px] z-10">
                <Image 
                  src="/images/mockup-user-app.png" 
                  alt="The Delivery App on Mobile" 
                  fill 
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Element 1 */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 right-0 lg:-right-12 bg-white text-secondary px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
                <div className="bg-primary/20 p-2 rounded-full text-primary"><ShoppingBag size={20} /></div>
                <div><p className="text-xs font-bold">New Grocery Order</p><p className="text-[10px] text-gray-500">Mpho's Pizzeria • R340</p></div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-32 left-0 lg:-left-12 bg-white text-secondary px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
                <div className="bg-accent-cyan/20 p-2 rounded-full text-accent-cyan"><Bike size={20} /></div>
                <div><p className="text-xs font-bold">Driver Assigned</p><p className="text-[10px] text-gray-500">Arriving in 15 mins</p></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: THE APP ECOSYSTEM 
          ========================================= */}
      <section className="py-24 bg-neutral-background" id="apps">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">One Ecosystem. Three Powerful Apps.</h2>
            <p className="text-neutral-subtle text-lg max-w-2xl mx-auto">
              Whether you are craving a meal, running a local business, or looking to earn on your own schedule—we have a custom app built just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. USER APP */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
              
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <ShoppingBag size={32} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3 relative z-10">For Customers</h3>
              <p className="text-gray-500 mb-8 flex-grow relative z-10">
                Order from hundreds of local stores and track your delivery in real-time. Fast, secure, and incredibly easy.
              </p>
              
              <div className="space-y-3 relative z-10">
                <a href="https://apps.apple.com/us/app/the-delivery/id6743215791" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black border border-gray-700 hover:border-white px-4 py-3 rounded-xl transition-all w-full justify-center">
                  <Apple size={24} className="text-white" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] leading-none text-gray-400 mb-1">Download on the</span>
                    <span className="text-sm font-bold text-white leading-none">App Store</span>
                  </div>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.thedelivery.co.za.user" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black border border-gray-700 hover:border-white px-4 py-3 rounded-xl transition-all w-full justify-center">
                  <Play size={20} className="text-white fill-white ml-1" />
                  <div className="flex flex-col text-left ml-1">
                    <span className="text-[10px] leading-none text-gray-400 mb-1">GET IT ON</span>
                    <span className="text-sm font-bold text-white leading-none">Google Play</span>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* 2. STORE APP */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 rounded-full blur-2xl group-hover:bg-accent-green/10 transition-colors"></div>
              
              <div className="w-16 h-16 bg-accent-green/10 text-accent-green rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <Store size={32} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3 relative z-10">For Stores</h3>
              <p className="text-gray-500 mb-6 relative z-10">
                Manage your orders, update your menu, and track your revenue instantly from your tablet or smartphone.
              </p>
              
              <a href="https://www.thedelivery.co.za/vendor/apply" target="_blank" rel="noopener noreferrer" className="text-accent-green font-bold flex items-center gap-1 hover:gap-2 transition-all mb-8 flex-grow">
                Register Your Store <ChevronRight size={18} />
              </a>

              <div className="space-y-3 relative z-10 mt-auto">
                <a href="https://apps.apple.com/us/app/the-delivery-store-app/id6743215852" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black border border-gray-700 hover:border-white px-4 py-3 rounded-xl transition-all w-full justify-center">
                  <Apple size={24} className="text-white" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] leading-none text-gray-400 mb-1">Download on the</span>
                    <span className="text-sm font-bold text-white leading-none">App Store</span>
                  </div>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.thedelivery.store_app&pli=1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black border border-gray-700 hover:border-white px-4 py-3 rounded-xl transition-all w-full justify-center">
                  <Play size={20} className="text-white fill-white ml-1" />
                  <div className="flex flex-col text-left ml-1">
                    <span className="text-[10px] leading-none text-gray-400 mb-1">GET IT ON</span>
                    <span className="text-sm font-bold text-white leading-none">Google Play</span>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* 3. DRIVER APP */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-2xl group-hover:bg-accent-cyan/10 transition-colors"></div>
              
              <div className="w-16 h-16 bg-accent-cyan/10 text-accent-cyan rounded-2xl flex items-center justify-center mb-6 relative z-10">
                <Bike size={32} />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-3 relative z-10">For Drivers</h3>
              <p className="text-gray-500 mb-6 relative z-10">
                Accept delivery requests, navigate to customers using built-in GPS, and track your daily earnings easily.
              </p>

              <a href="https://www.thedelivery.co.za/deliveryman/apply" target="_blank" rel="noopener noreferrer" className="text-accent-cyan font-bold flex items-center gap-1 hover:gap-2 transition-all mb-8 flex-grow">
                Register to Drive <ChevronRight size={18} />
              </a>
              
              <div className="space-y-3 relative z-10 mt-auto">
                <a href="https://apps.apple.com/us/app/the-delivery-driver-app/id6743215798" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black border border-gray-700 hover:border-white px-4 py-3 rounded-xl transition-all w-full justify-center">
                  <Apple size={24} className="text-white" />
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] leading-none text-gray-400 mb-1">Download on the</span>
                    <span className="text-sm font-bold text-white leading-none">App Store</span>
                  </div>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.thedelivery.driver_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black border border-gray-700 hover:border-white px-4 py-3 rounded-xl transition-all w-full justify-center">
                  <Play size={20} className="text-white fill-white ml-1" />
                  <div className="flex flex-col text-left ml-1">
                    <span className="text-[10px] leading-none text-gray-400 mb-1">GET IT ON</span>
                    <span className="text-sm font-bold text-white leading-none">Google Play</span>
                  </div>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: HOW IT WORKS
          ========================================= */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">How The Delivery Works</h2>
            <p className="text-neutral-subtle max-w-2xl mx-auto text-lg">A seamless, 3-sided marketplace that connects your city in real-time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center text-accent-cyan mb-6"><ShoppingBag size={32} /></div>
              <h3 className="text-xl font-bold text-secondary mb-2">1. Customers Browse</h3>
              <p className="text-gray-600 text-sm">Local shoppers open the app to discover nearby stores, restaurants, and everyday essentials.</p>
            </div>

            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center text-accent-green mb-6"><Store size={32} /></div>
              <h3 className="text-xl font-bold text-secondary mb-2">2. Stores Get Orders</h3>
              <p className="text-gray-600 text-sm">Partner businesses receive the order on their dashboard, prepare it, and mark it ready for pickup.</p>
            </div>

            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6"><Bike size={32} /></div>
              <h3 className="text-xl font-bold text-secondary mb-2">3. Drivers Deliver</h3>
              <p className="text-gray-600 text-sm">A local driver collects the order and delivers it fast, with real-time tracking for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: WHY THIS IS DIFFERENT
          ========================================= */}
      <section className="py-24 bg-neutral-background border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Grow beyond your own website.</h2>
            <p className="text-neutral-subtle max-w-2xl mx-auto text-lg">
              We help local stores get discovered—not only delivered.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-700 mb-6">A Standard Online Store</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <X className="text-red-400 shrink-0 mt-1" size={20} />
                  <span>You rely only on people who already know your brand and search for you.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <X className="text-red-400 shrink-0 mt-1" size={20} />
                  <span>You pay for all your own traffic and marketing.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <X className="text-red-400 shrink-0 mt-1" size={20} />
                  <span>You have to figure out local delivery logistics yourself.</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary p-8 rounded-2xl border border-secondary shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">The Delivery Marketplace</h3>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3 text-gray-200">
                  <Check className="text-accent-green shrink-0 mt-1" size={20} />
                  <span>Customers discover you while browsing categories in our app.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-200">
                  <Check className="text-accent-green shrink-0 mt-1" size={20} />
                  <span>You get impulse orders from nearby shoppers looking for convenience.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-200">
                  <Check className="text-accent-green shrink-0 mt-1" size={20} />
                  <span>You get instant access to our fleet of local drivers.</span>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-gray-700 relative z-10">
                {/* CHANGED THIS LINK */}
                <Link href="/vendor-benefits" className="text-primary font-bold hover:text-white transition-colors flex items-center gap-2">
                  See All Store Benefits &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: CATEGORY GRID
          ========================================= */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Everything your city needs, delivered.</h2>
            <p className="text-neutral-subtle max-w-2xl mx-auto text-lg">
              Explore the wide variety of local stores available on our platform.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { name: "Restaurants", icon: Utensils, color: "text-orange-500", bg: "bg-orange-50" },
              { name: "Grocery", icon: ShoppingCart, color: "text-green-500", bg: "bg-green-50" },
              { name: "Spaza Shops", icon: Store, color: "text-blue-500", bg: "bg-blue-50" },
              { name: "Florists & Gifts", icon: Flower, color: "text-pink-500", bg: "bg-pink-50" },
              { name: "Pharmacy OTC", icon: Pill, color: "text-teal-500", bg: "bg-teal-50" },
              { name: "Parcel Delivery", icon: Package, color: "text-purple-500", bg: "bg-purple-50" },
              { name: "Butchers", icon: Beef, color: "text-red-500", bg: "bg-red-50" },
              { name: "Water Delivery", icon: Droplet, color: "text-cyan-500", bg: "bg-cyan-50" },
              { name: "Baby Stores", icon: Baby, color: "text-indigo-500", bg: "bg-indigo-50" },
              { name: "Books & Stat.", icon: BookOpen, color: "text-amber-600", bg: "bg-amber-50" },
              { name: "Pet Supplies", icon: Dog, color: "text-amber-800", bg: "bg-orange-50" },
              { name: "Tech & Elec.", icon: Smartphone, color: "text-slate-600", bg: "bg-slate-100" },
              { name: "Bakery", icon: Cake, color: "text-yellow-600", bg: "bg-yellow-50" },
              { name: "Beauty", icon: Sparkles, color: "text-rose-500", bg: "bg-rose-50" },
              { name: "Home Essentials", icon: HomeIcon, color: "text-emerald-600", bg: "bg-emerald-50" },
            ].map((cat, index) => (
              <a 
                key={index}
                href="/categories" 
                className="bg-neutral-background p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all flex flex-col items-center justify-center text-center gap-3 group"
              >
                <div className={`w-14 h-14 rounded-full ${cat.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <cat.icon className={cat.color} size={28} />
                </div>
                <span className="font-semibold text-secondary text-sm">{cat.name}</span>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/categories" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-2xl transition-all">
              Explore All Categories
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
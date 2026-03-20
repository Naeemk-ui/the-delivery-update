"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Store, 
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
  Home as HomeIcon,
  Search
} from "lucide-react";

export default function CategoriesAndAreas() {
  
  // Comprehensive list of your marketplace categories
  const categories = [
    { name: "Restaurants", icon: Utensils, color: "text-orange-500", bg: "bg-orange-50", desc: "Local food & fast food" },
    { name: "Grocery", icon: ShoppingCart, color: "text-green-500", bg: "bg-green-50", desc: "Fresh produce & pantry" },
    { name: "Spaza Shops", icon: Store, color: "text-blue-500", bg: "bg-blue-50", desc: "Neighborhood essentials" },
    { name: "Florists & Gifts", icon: Flower, color: "text-pink-500", bg: "bg-pink-50", desc: "Bouquets & presents" },
    { name: "Pharmacy OTC", icon: Pill, color: "text-teal-500", bg: "bg-teal-50", desc: "Over-the-counter meds" },
    { name: "Parcel Delivery", icon: Package, color: "text-purple-500", bg: "bg-purple-50", desc: "Point-to-point courier" },
    { name: "Butchers", icon: Beef, color: "text-red-500", bg: "bg-red-50", desc: "Fresh meat & braai packs" },
    { name: "Water Delivery", icon: Droplet, color: "text-cyan-500", bg: "bg-cyan-50", desc: "Purified water refills" },
    { name: "Baby Stores", icon: Baby, color: "text-indigo-500", bg: "bg-indigo-50", desc: "Diapers & formula" },
    { name: "Books & Stat.", icon: BookOpen, color: "text-amber-600", bg: "bg-amber-50", desc: "School & office supplies" },
    { name: "Pet Supplies", icon: Dog, color: "text-amber-800", bg: "bg-orange-50", desc: "Pet food & toys" },
    { name: "Tech & Elec.", icon: Smartphone, color: "text-slate-600", bg: "bg-slate-100", desc: "Cables & accessories" },
    { name: "Bakery", icon: Cake, color: "text-yellow-600", bg: "bg-yellow-50", desc: "Fresh bread & treats" },
    { name: "Beauty", icon: Sparkles, color: "text-rose-500", bg: "bg-rose-50", desc: "Cosmetics & hair care" },
    { name: "Home Essentials", icon: HomeIcon, color: "text-emerald-600", bg: "bg-emerald-50", desc: "Cleaning & hardware" },
  ];

  // UPDATED: Expanded National Delivery Zones
  const deliveryAreas = [
    "Gauteng (All Areas)",
    "Cape Town",
    "Durban",
    "Polokwane CBD",
    "Bendor",
    "Flora Park",
    "Fauna Park",
    "Ster Park",
    "Penina Park",
    "Nirvana",
    "Ivy Park",
    "Seshego (Selected Zones)",
    "Mankweng (Coming Soon)"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-background">
      
      {/* =========================================
          SECTION 1: HERO
          ========================================= */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-secondary text-white border-b border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Everything you need, <span className="text-primary">delivered.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              From hot meals and daily groceries to pharmacy essentials and pet food. Explore the wide variety of local stores available on The Delivery marketplace.
            </p>
            
            {/* Mock Search Bar for Visual Appeal */}
            <div className="max-w-xl mx-auto bg-white rounded-2xl p-2 flex items-center shadow-2xl">
              <div className="text-gray-400 pl-4"><Search size={20} /></div>
              <input 
                type="text" 
                placeholder="Search for restaurants, groceries, or items..." 
                className="w-full px-4 py-3 text-secondary outline-none rounded-xl"
                disabled
              />
              <a href="https://shop.thedelivery.co.za" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold transition-colors whitespace-nowrap">
                Find Food
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: ALL CATEGORIES GRID
          ========================================= */}
      <section className="py-20 bg-neutral-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-secondary">Browse Categories</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {categories.map((cat, index) => (
              <motion.a 
                key={index}
                href="https://shop.thedelivery.co.za"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 5) * 0.1 }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group flex flex-col items-center text-center"
              >
                <div className={`w-16 h-16 rounded-2xl ${cat.bg} flex items-center justify-center mb-4 group-hover:-translate-y-2 transition-transform duration-300`}>
                  <cat.icon className={cat.color} size={32} />
                </div>
                <h3 className="font-bold text-secondary mb-1">{cat.name}</h3>
                <p className="text-xs text-gray-500">{cat.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: DELIVERY AREAS
          ========================================= */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-cyan/10 text-accent-cyan font-bold px-4 py-1.5 rounded-full text-sm mb-4">
              <MapPin size={18} /> Service Areas
            </div>
            <h2 className="text-4xl font-bold text-secondary mb-4">Where we deliver</h2>
            {/* UPDATED: Changed from "in and around Polokwane" to a national focus */}
            <p className="text-neutral-subtle text-lg">We are proudly South African. Currently serving major cities and local neighborhoods across the country.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliveryAreas.map((area, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index % 3) * 0.1 }}
                className="bg-neutral-background border border-gray-200 p-4 rounded-2xl flex items-center gap-3"
              >
                <MapPin className={area.includes("Soon") ? "text-gray-400" : "text-primary"} size={20} />
                <span className={`font-semibold ${area.includes("Soon") ? "text-gray-400" : "text-secondary"}`}>
                  {area}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 bg-secondary text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Don't see your neighborhood?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
              We are expanding rapidly! If you want The Delivery to launch in your area, or if you own a store outside our current zones, let us know.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <a href="mailto:support@thedelivery.co.za" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all">
                Request Your Area
              </a>
              <a href="/vendor/apply" className="bg-transparent border border-gray-500 hover:border-white text-white px-8 py-4 rounded-2xl font-bold transition-all">
                Partner Your Store
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
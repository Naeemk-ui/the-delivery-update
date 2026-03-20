"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Bike, 
  Wallet, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Smartphone,
  CheckCircle,
  ChevronRight
} from "lucide-react";

export default function ForDrivers() {
  // Driver Earnings State
  const [deliveriesPerWeek, setDeliveriesPerWeek] = useState(40);
  const averagePerDelivery = 35; // Example ZAR amount per delivery + tip
  
  // Hydration safety
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const estimatedWeeklyEarnings = deliveriesPerWeek * averagePerDelivery;
  const estimatedMonthlyEarnings = estimatedWeeklyEarnings * 4;

  return (
    <div className="flex flex-col min-h-screen bg-neutral-background">
      
      {/* =========================================
          SECTION 1: DARK HERO
          ========================================= */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
          <Image src="/images/bg-dark-map-route.png" alt="Map Route Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="inline-block bg-accent-cyan/20 text-accent-cyan font-bold px-4 py-1.5 rounded-full text-sm mb-6 flex items-center gap-2 w-max">
                <Bike size={18} /> Join the Fleet
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Be your own boss. <br />
                <span className="text-primary">Earn on your schedule.</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Deliver food, groceries, and everyday essentials to people across Polokwane. All you need is a smartphone and a reliable vehicle (bike, scooter, or car) to start earning weekly.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="/deliveryman/apply" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2">
                  Apply to Drive <ChevronRight size={20} />
                </a>
                <a href="#earnings" className="bg-transparent border border-gray-400 hover:border-white hover:bg-white hover:text-secondary text-white px-8 py-4 rounded-2xl font-bold transition-all">
                  See Earnings
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-700"
            >
              {/* Note: Ensure persona-driver.png exists or rename the one with double extensions! */}
              <Image src="/images/persona-driver.png" alt="Happy Delivery Driver" fill className="object-cover" priority />
              <div className="absolute bottom-6 right-6 bg-white text-secondary p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="bg-accent-green/20 p-3 rounded-full text-accent-green">
                  <Wallet size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary">Payout Complete</p>
                  <p className="text-xs text-gray-500">R2,450 deposited</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: DRIVER BENEFITS
          ========================================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Why drive with The Delivery?</h2>
            <p className="text-neutral-subtle text-lg max-w-2xl mx-auto">We value our drivers. Enjoy full flexibility, clear earnings, and 100% of your tips.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Total Flexibility", desc: "Log in and accept orders whenever you want. You decide your own working hours." },
              { icon: Wallet, title: "Weekly Payouts", desc: "Get your earnings deposited directly into your bank account every single week." },
              { icon: MapPin, title: "Local Deliveries", desc: "Deliver within your known areas in Polokwane. Less driving, more earning." },
              { icon: ShieldCheck, title: "Driver Support", desc: "Our local support team is always available to help you if you encounter any issues on the road." },
              { icon: Smartphone, title: "Easy-to-use App", desc: "Our driver app clearly shows pickup locations, drop-offs, and your daily earnings." },
              { icon: Bike, title: "Keep 100% of Tips", desc: "When a customer tips you for great service, every single cent goes directly to you." }
            ].map((benefit, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:shadow-lg hover:border-accent-cyan/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-accent-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: REQUIREMENTS & ONBOARDING
          ========================================= */}
      <section className="py-24 bg-neutral-background border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Left: Requirements */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-3xl font-bold text-secondary mb-6">What you need</h3>
              <p className="text-gray-600 mb-8">Before you apply, make sure you meet these simple requirements to start driving.</p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary shrink-0"><Bike size={24} /></div>
                  <div>
                    <h4 className="font-bold text-secondary">A reliable vehicle</h4>
                    <p className="text-sm text-gray-500 mt-1">A motorcycle, scooter, or car (with a valid license and registration).</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary shrink-0"><Smartphone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-secondary">A smartphone</h4>
                    <p className="text-sm text-gray-500 mt-1">An iOS or Android device with a data plan to run the driver app.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full text-primary shrink-0"><ShieldCheck size={24} /></div>
                  <div>
                    <h4 className="font-bold text-secondary">Legal requirements</h4>
                    <p className="text-sm text-gray-500 mt-1">Be over 18 years old, have a valid ID/Passport, and pass a standard background check.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right: Steps */}
            <div>
              <h3 className="text-3xl font-bold text-secondary mb-8">How to get started</h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                {[
                  { step: "1", title: "Apply Online", desc: "Fill out the short form with your details and upload your documents." },
                  { step: "2", title: "Get Approved", desc: "Our team will review your application quickly and activate your profile." },
                  { step: "3", title: "Download the App", desc: "Log in to the delivery app and get familiar with the dashboard." },
                  { step: "4", title: "Start Earning", desc: "Go online, accept your first local delivery, and start making money." }
                ].map((item, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-secondary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md relative z-10">
                      {item.step}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <h4 className="font-bold text-lg text-secondary mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: EARNINGS ESTIMATOR
          ========================================= */}
      <section id="earnings" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-secondary text-white rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 relative">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="text-center mb-12 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Estimate your earnings</h2>
              <p className="text-gray-400">Drag the slider to see how much you could make based on an average of R{averagePerDelivery} per delivery.</p>
            </div>

            {!isMounted ? (
              <div className="text-center py-12 text-gray-500 font-medium">Loading Estimator...</div>
            ) : (
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="mb-12 bg-secondary-dark p-6 rounded-2xl border border-gray-700">
                  <div className="flex justify-between mb-4">
                    <label className="font-bold text-gray-200">Deliveries Per Week</label>
                    <span className="font-bold text-accent-cyan text-xl">{deliveriesPerWeek}</span>
                  </div>
                  <input 
                    type="range" min="10" max="150" step="5" 
                    value={deliveriesPerWeek} 
                    onChange={(e) => setDeliveriesPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer" 
                    style={{ accentColor: '#00D1FF' }} // Cyan accent
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-gray-400 text-sm mb-2">Estimated Weekly</p>
                    <div className="text-4xl font-bold text-white">
                      R{estimatedWeeklyEarnings.toLocaleString('en-US')}
                    </div>
                  </div>
                  <div className="bg-accent-cyan/10 p-6 rounded-2xl border border-accent-cyan/20">
                    <p className="text-accent-cyan text-sm mb-2 font-medium">Estimated Monthly</p>
                    <div className="text-4xl font-bold text-accent-cyan">
                      R{estimatedMonthlyEarnings.toLocaleString('en-US')}
                    </div>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 text-center mt-6">* Estimations include average base pay and tips. Actual earnings may vary based on distance, time, and customer tips.</p>
                
                <div className="mt-8 text-center">
                  <a href="/deliveryman/apply" className="inline-block bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg">
                    Start Driving Today
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
"use client"; // Required for interactivity and state

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation"; // For the automatic redirect

export default function ContactUs() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(3);

  // Handle the countdown and redirect when isSuccess becomes true
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSuccess) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            router.push("/"); // Redirect to home when countdown hits 0
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isSuccess, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/ecomminvest80@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Get in touch</h1>
          <p className="text-lg text-neutral-subtle max-w-2xl mx-auto">
            Whether you have a question about an order, want to partner your store, or just want to say hello, we're here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* LEFT COLUMN: Contact Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6 hover:border-primary/30 transition-colors">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="font-bold text-secondary text-lg mb-1">Call Us</h3>
                <p className="text-gray-500 text-sm mb-2">Mon-Sun from 8am to 10pm.</p>
                <a href="tel:0150041681" className="text-primary font-bold hover:underline">015 004 1681</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6 hover:border-accent-cyan/30 transition-colors">
              <div className="w-14 h-14 bg-accent-cyan/10 text-accent-cyan rounded-2xl flex items-center justify-center shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="font-bold text-secondary text-lg mb-1">Email Us</h3>
                <p className="text-gray-500 text-sm mb-2">We'll respond within 24 hours.</p>
                <a href="mailto:ecomminvest80@gmail.com" className="text-primary font-bold hover:underline break-all">ecomminvest80@gmail.com</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6 hover:border-accent-green/30 transition-colors">
              <div className="w-14 h-14 bg-accent-green/10 text-accent-green rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="font-bold text-secondary text-lg mb-1">Our Office</h3>
                <p className="text-gray-500 text-sm mb-2">Come visit our headquarters.</p>
                <span className="font-bold text-secondary">Polokwane, Limpopo</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start gap-6 hover:border-purple-300 transition-colors">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shrink-0">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="font-bold text-secondary text-lg mb-1">Operating Hours</h3>
                <p className="text-gray-500 text-sm mb-2">When our drivers are active.</p>
                <span className="font-bold text-secondary">08:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form OR Success Message */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 h-full relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
              
              {isSuccess ? (
                // SUCCESS STATE UI
                <div className="text-center relative z-10 animate-fade-in py-12">
                  <div className="w-24 h-24 bg-accent-green/10 text-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-3xl font-bold text-secondary mb-4">Message Received!</h2>
                  <p className="text-gray-500 text-lg mb-8">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <p className="text-sm font-bold text-primary">
                    Redirecting to homepage in {countdown}...
                  </p>
                </div>
              ) : (
                // NORMAL FORM UI
                <>
                  <h2 className="text-3xl font-bold text-secondary mb-8 relative z-10">Send us a message</h2>
                  
                  {/* Note: The action URL is now using /ajax/ to prevent the page reload */}
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    
                    <input type="hidden" name="_subject" value="New Enquiry from The Delivery Website!" />
                    <input type="hidden" name="_captcha" value="false" />
                    {/* We no longer need the _next input because React is handling the redirect! */}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-secondary ml-1">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          required 
                          disabled={isSubmitting}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:opacity-50"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-secondary ml-1">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required 
                          disabled={isSubmitting}
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:opacity-50"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-secondary ml-1">What is this regarding?</label>
                      <select 
                        id="subject" 
                        name="Category" 
                        disabled={isSubmitting}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none cursor-pointer disabled:opacity-50"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Order Support">Order Support</option>
                        <option value="Store Partnership">Store Partnership</option>
                        <option value="Driver Application">Driver Application</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-secondary ml-1">Your Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={5}
                        disabled={isSubmitting}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none disabled:opacity-50"
                        placeholder="How can we help you today?"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-lg py-5 rounded-2xl transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
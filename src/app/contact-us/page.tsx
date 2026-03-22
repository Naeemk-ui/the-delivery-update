import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | The Delivery",
  description: "Get in touch with The Delivery team in Polokwane.",
};

export default function ContactUs() {
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
          
          {/* LEFT COLUMN: Contact Details (Takes up 2/5 of the grid) */}
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

          {/* RIGHT COLUMN: Contact Form (Takes up 3/5 of the grid) */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-100 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <h2 className="text-3xl font-bold text-secondary mb-8 relative z-10">Send us a message</h2>
              
              {/* FormSubmit Integration pointing to your email */}
              <form action="https://formsubmit.co/ecomminvest80@gmail.com" method="POST" className="space-y-6 relative z-10">
                
                {/* Subject Line configuration for the email you receive */}
                <input type="hidden" name="_subject" value="New Enquiry from The Delivery Website!" />
                {/* Disables the annoying captcha screen */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Redirects back to the contact page after sending */}
                <input type="hidden" name="_next" value="https://app.thedelivery.co.za/contact-us" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-secondary ml-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
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
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-secondary ml-1">What is this regarding?</label>
                  <select 
                    id="subject" 
                    name="Category" 
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all appearance-none cursor-pointer"
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
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-lg py-5 rounded-2xl transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 mt-4"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
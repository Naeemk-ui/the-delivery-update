import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | The Delivery",
  description: "Get in touch with The Delivery team in Polokwane.",
};

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-neutral-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Get in touch</h1>
          <p className="text-lg text-neutral-subtle max-w-2xl mx-auto">
            Whether you have a question about an order, want to partner your store, or just want to say hello, we're here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
              <Phone size={28} />
            </div>
            <h3 className="font-bold text-secondary mb-2">Call Us</h3>
            <p className="text-gray-500 text-sm mb-4">Mon-Sun from 8am to 10pm.</p>
            <a href="tel:0150041681" className="text-primary font-bold hover:underline">015 004 1681</a>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-accent-cyan/10 text-accent-cyan rounded-full flex items-center justify-center mb-6">
              <Mail size={28} />
            </div>
            <h3 className="font-bold text-secondary mb-2">Email Us</h3>
            <p className="text-gray-500 text-sm mb-4">We'll respond within 24 hours.</p>
            <a href="mailto:hello@thedelivery.co.za" className="text-primary font-bold hover:underline">hello@thedelivery.co.za</a>
          </div>

          {/* Office */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-accent-green/10 text-accent-green rounded-full flex items-center justify-center mb-6">
              <MapPin size={28} />
            </div>
            <h3 className="font-bold text-secondary mb-2">Our Office</h3>
            <p className="text-gray-500 text-sm mb-4">Come visit our headquarters.</p>
            <span className="font-bold text-secondary">Polokwane, Limpopo</span>
          </div>

          {/* Hours */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
              <Clock size={28} />
            </div>
            <h3 className="font-bold text-secondary mb-2">Operating Hours</h3>
            <p className="text-gray-500 text-sm mb-4">When our drivers are active.</p>
            <span className="font-bold text-secondary">08:00 AM - 10:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
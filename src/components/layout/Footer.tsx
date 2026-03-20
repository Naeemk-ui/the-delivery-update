import Link from "next/link";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  Apple,
  Play
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand, About & App Downloads */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              The <span className="text-primary">Delivery</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              South Africa's premier local marketplace connecting shoppers with the best neighborhood stores, restaurants, and fast local drivers.
            </p>
            
            {/* App Store / Play Store CSS Badges */}
            <div className="flex flex-col space-y-3 mb-6">
              <a 
                href="https://apps.apple.com/us/app/the-delivery/id6743215791" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-black border border-gray-700 hover:border-white px-4 py-2.5 rounded-xl transition-all w-max shadow-lg"
              >
                <Apple size={28} className="text-white" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] leading-none text-gray-400 mb-1">Download on the</span>
                  <span className="text-sm font-bold text-white leading-none">App Store</span>
                </div>
              </a>
              
              <a 
                href="https://play.google.com/store/apps/details?id=com.thedelivery.co.za.user" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-black border border-gray-700 hover:border-white px-4 py-2.5 rounded-xl transition-all w-max shadow-lg"
              >
                <Play size={24} className="text-white fill-white ml-1" />
                <div className="flex flex-col text-left ml-1">
                  <span className="text-[10px] leading-none text-gray-400 mb-1">GET IT ON</span>
                  <span className="text-sm font-bold text-white leading-none">Google Play</span>
                </div>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61572739426503" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/shop.the.delivery/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://x.com/thedeliveryza" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.tiktok.com/@shop.thedelivery" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                {/* Custom TikTok SVG since Lucide doesn't have one natively */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/categories" className="hover:text-primary transition-colors">Categories & Areas</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><a href="https://shop.thedelivery.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Shop Now</a></li>
            </ul>
          </div>

          {/* Partner Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Partner With Us</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/for-stores" className="hover:text-primary transition-colors">Add Your Store</Link></li>
              <li><Link href="/for-drivers" className="hover:text-primary transition-colors">Become a Driver</Link></li>
              <li><a href="https://thedelivery.co.za/vendor/apply" className="hover:text-primary transition-colors">Store Application</a></li>
              <li><a href="https://thedelivery.co.za/deliveryman/apply" className="hover:text-primary transition-colors">Driver Application</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Polokwane, Limpopo<br/>South Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>015 004 1681</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:hello@thedelivery.co.za" className="hover:text-primary transition-colors">
                  hello@thedelivery.co.za
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Legal Links */}
        <div className="pt-8 border-t border-gray-800 flex flex-col xl:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <p>&copy; {currentYear} The Delivery. All rights reserved.</p>
          
          {/* UPDATED LEGAL LINKS */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <a href="https://thedelivery.co.za/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://thedelivery.co.za/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="https://thedelivery.co.za/refund" className="hover:text-white transition-colors">Refund Policy</a>
            <a href="https://thedelivery.co.za/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</a>
            <a href="https://thedelivery.co.za/cancelation" className="hover:text-white transition-colors">Cancellation Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
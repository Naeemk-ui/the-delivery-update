"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Smartphone, Store, Bike } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Add a subtle shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "For Stores", href: "/for-stores" },
    { name: "For Drivers", href: "/for-drivers" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Categories", href: "/categories" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary shadow-xl py-3" : "bg-secondary py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white tracking-tight flex items-center gap-1">
            The<span className="text-primary">Delivery</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Download App */}
            <a href="/#apps" className="flex items-center gap-1 text-sm font-bold text-white hover:text-primary transition-colors mr-2">
              <Smartphone size={16} /> Download App
            </a>
            
            {/* Drive With Us */}
            <a href="https://www.thedelivery.co.za/deliveryman/apply" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-1">
              <Bike size={16} /> Drive With Us
            </a>

            {/* Partner Store */}
            <a href="https://www.thedelivery.co.za/vendor/apply" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md flex items-center gap-1">
              <Store size={16} /> Partner Your Store
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-secondary border-b border-gray-800 transition-all duration-300 overflow-hidden shadow-2xl ${
          isMobileMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`block px-4 py-3 rounded-xl font-semibold transition-colors ${
                pathname === link.href ? "bg-primary/10 text-primary" : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="h-px bg-gray-800 my-4"></div>
          
          <a href="/#apps" className="flex items-center justify-between px-4 py-3 text-gray-300 font-semibold hover:bg-white/5 rounded-xl">
            <div className="flex items-center gap-2"><Smartphone size={18} /> Download App</div>
            <ChevronRight size={18} />
          </a>
          
          <a href="https://www.thedelivery.co.za/deliveryman/apply" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-3 text-white bg-white/5 hover:bg-white/10 font-semibold rounded-xl mt-2 border border-white/10">
            <div className="flex items-center gap-2"><Bike size={18} /> Drive With Us</div>
            <ChevronRight size={18} />
          </a>

          <a href="https://www.thedelivery.co.za/vendor/apply" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-3 bg-primary text-white font-bold rounded-xl mt-2 shadow-lg">
            <div className="flex items-center gap-2"><Store size={18} /> Partner Your Store</div>
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LogoWantASmoothie from "@/components/logo-want-a-smoothie";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <LogoWantASmoothie size="sm" />
            <span className="text-xl font-bold text-brand-gray">Want A Smoothie</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-brand-gray hover:text-brand-green transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-brand-gray hover:text-brand-green transition-colors font-medium"
            >
              Location
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-brand-gray hover:text-brand-green transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('location')}
              className="brand-yellow text-brand-gray hover:bg-yellow-400 font-semibold transition-all duration-300"
            >
              Order Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-gray focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-brand-gray hover:text-brand-green transition-colors font-medium py-2 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-brand-gray hover:text-brand-green transition-colors font-medium py-2 text-left"
              >
                Location
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-brand-gray hover:text-brand-green transition-colors font-medium py-2 text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('location')}
                className="brand-yellow text-brand-gray hover:bg-yellow-400 font-semibold mt-4 transition-all duration-300"
              >
                Order Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

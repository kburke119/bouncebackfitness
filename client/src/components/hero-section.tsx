import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
// Using the banner image from public folder
import LogoWantASmoothie from "@/components/logo-want-a-smoothie";
import LogoKnotJustBagels from "@/components/logo-knot-just-bagels";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 md:py-24 hero-gradient overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-green-200 to-green-300 opacity-20 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-300 opacity-20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-300 opacity-15 blur-lg"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 md:p-12">
          <h1 className="text-gray-800 text-2xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Come Visit Us in <span className="text-brand-green">Knot Just Bagels</span>
          </h1>
          
          <div className="flex items-center justify-center space-x-8 md:space-x-12 mb-10">
            <LogoWantASmoothie size="lg" className="scale-125 drop-shadow-sm" />
            <LogoKnotJustBagels size="lg" className="scale-125 drop-shadow-sm" />
          </div>
          
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Fresh, healthy smoothies and real food made with quality ingredients
          </p>
          
          <div className="flex justify-center">
            <Button 
              onClick={() => window.open('https://square.link/u/PLACEHOLDER_WANT_A_SMOOTHIE', '_blank')}
              className="bg-gradient-to-r from-brand-green to-brand-dark-green text-white hover:from-brand-dark-green hover:to-brand-green text-lg font-bold px-10 py-5 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

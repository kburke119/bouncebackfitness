import Navigation from "@/components/navigation";
import LogoKnotJustBagels from "@/components/logo-knot-just-bagels";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function KnotJustBagels() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-16 hero-gradient">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <LogoKnotJustBagels size="lg" className="scale-150" />
          </div>
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Knot Just Bagels
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Fresh-baked bagels, gourmet sandwiches, and artisanal coffee. More than just bagels - we're your neighborhood gathering place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              onClick={() => scrollToSection('menu')}
              className="bg-white text-brand-gray hover:bg-gray-100 text-lg font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
              data-testid="button-explore-menu"
            >
              View Menu
            </Button>
            <Button 
              onClick={() => scrollToSection('location')}
              className="brand-yellow text-brand-gray hover:bg-yellow-400 text-lg font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
              data-testid="button-find-location"
            >
              Find Us
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-gray mb-12">
            Our Fresh Menu
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center" data-testid="card-bagels">
              <h3 className="text-xl font-bold text-brand-gray mb-4">Fresh Bagels</h3>
              <p className="text-brand-gray/80 mb-4">
                Everything, Sesame, Poppy, Plain, Cinnamon Raisin, and more - baked fresh daily
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center" data-testid="card-sandwiches">
              <h3 className="text-xl font-bold text-brand-gray mb-4">Gourmet Sandwiches</h3>
              <p className="text-brand-gray/80 mb-4">
                Made-to-order sandwiches with premium deli meats and fresh vegetables
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center" data-testid="card-coffee">
              <h3 className="text-xl font-bold text-brand-gray mb-4">Artisanal Coffee</h3>
              <p className="text-brand-gray/80 mb-4">
                Locally roasted coffee beans, espresso drinks, and specialty beverages
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-gray mb-8">
            Visit Our Location
          </h2>
          <p className="text-lg text-brand-gray/80 mb-8">
            93 Main Street, Woodbridge, NJ
          </p>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold text-brand-gray mb-4">Hours</h3>
            <div className="space-y-2 text-brand-gray/80">
              <p>Monday - Friday: 6:00 AM - 3:00 PM</p>
              <p>Saturday - Sunday: 7:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import { Button } from "@/components/ui/button";
import { Apple, Gift, Download } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Cold Pressed Juices",
      description: "Fresh, nutrient-packed juices made with the finest ingredients. Perfect for a healthy boost any time of day.",
      price: "Starting at $8",
      image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Fresh Smoothies",
      description: "Delicious blends of fresh fruits and vegetables. Customizable to your taste and dietary needs.",
      price: "Starting at $7",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Smoothie Bowls",
      description: "Thick, creamy bowls topped with fresh fruits, nuts, and superfoods for a complete meal.",
      price: "Starting at $12",
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Wellness Shots",
      description: "Concentrated nutrition in a small package. Boost your immunity and energy naturally.",
      price: "Starting at $4",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Sea Moss Gel",
      description: "Rich in minerals and nutrients, our sea moss gel supports overall health and wellness.",
      price: "Starting at $15",
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Protein Balls",
      description: "Nutritious energy balls packed with protein and natural ingredients for a healthy snack.",
      price: "Starting at $3",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">Our Fresh Offerings</h2>
          <div className="w-24 h-1 brand-green mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Every product is made with real food, no artificial ingredients, concentrates, or syrups.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-gray mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-brand-green font-semibold">{service.price}</span>
                  <Button className="brand-yellow text-brand-gray hover:bg-yellow-400 px-4 py-2 rounded-full font-medium">
                    Order
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Services */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-2xl p-8 text-center">
            <Apple className="text-brand-gray mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-brand-gray mb-4">Juice Cleanse & Weekly Packages</h3>
            <p className="text-brand-gray mb-6">Comprehensive cleanse programs and convenient weekly packages for sustained health.</p>
            <Button className="bg-white text-brand-gray hover:bg-gray-100 px-6 py-3 rounded-full font-semibold">
              Learn More
            </Button>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-400 rounded-2xl p-8 text-center">
            <Gift className="text-white mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-white mb-4">Fruit Bouquets & Chocolate Covered Strawberries</h3>
            <p className="text-white mb-6">Beautiful, delicious gifts perfect for any occasion or celebration.</p>
            <Button className="bg-white text-brand-gray hover:bg-gray-100 px-6 py-3 rounded-full font-semibold">
              Order Gifts
            </Button>
          </div>
        </div>
        
        {/* Menu Download */}
        <div className="text-center mt-12">
          <a 
            href="https://www.wantasmoothie.com/_files/ugd/d0da6d_f162b38ef8af475584277ca04d7f2522.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center brand-gray text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-700 transition-colors shadow-lg"
          >
            <Download className="mr-3" size={20} />
            Download Full Menu (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

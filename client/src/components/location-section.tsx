import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Map, Navigation } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">Visit Our New Location</h2>
          <div className="w-24 h-1 brand-yellow mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">We've moved to an exciting new location inside Knot Just Bagels, making it even easier to get your healthy fix!</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="text-center">
              <div className="w-16 h-16 brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-brand-gray" size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-gray mb-3">Address</h3>
              <p className="text-gray-600 font-medium">93 Main Street</p>
              <p className="text-gray-600 font-medium">Woodbridge, NJ 07095</p>
              <p className="text-sm text-brand-green italic mt-2">Inside Knot Just Bagels</p>
            </div>
            
            {/* Hours */}
            <div className="text-center">
              <div className="w-16 h-16 brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-brand-gray" size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-gray mb-3">Hours</h3>
              <p className="text-gray-600 font-medium">EVERYDAY</p>
              <p className="text-gray-600 font-bold text-lg">6:00 AM - 3:00 PM</p>
            </div>
            
            {/* Special Services */}
            <div className="text-center">
              <div className="w-16 h-16 brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-brand-gray" size={24} />
              </div>
              <h3 className="text-xl font-bold text-brand-gray mb-3">Special Orders</h3>
              <p className="text-gray-600">Call to schedule</p>
              <p className="text-gray-600">cleanses & weekly</p>
              <p className="text-gray-600">pick-up packages</p>
            </div>
          </div>
          
          <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-brand-gray mb-4">Ready to Order?</h4>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Visit us inside Knot Just Bagels for fresh smoothies, cold-pressed juices, and healthy bowls. 
              We're excited to serve you at our new location!
            </p>
            <Button 
              onClick={() => window.open('https://square.link/u/PLACEHOLDER_WANT_A_SMOOTHIE', '_blank')}
              className="brand-green text-white font-bold px-8 py-3 text-lg hover:opacity-90 transition-opacity"
              data-testid="button-order-now"
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Leaf, Heart, Clock } from "lucide-react";
import { useState, useEffect } from "react";

// Import smoothie images
import smoothie1 from "../assets/d0da6d_76e5ed94eb98472ea7a28b6d882151d1~mv2_1756237082831.avif";
import smoothie2 from "../assets/d0da6d_660ec428fa7347dc8538a897ad0c12cd~mv2_1756237082832.avif";
import smoothie3 from "../assets/d0da6d_0837dc63147845bcbd2998320256d1b1~mv2_1756237082833.avif";
import smoothie4 from "../assets/d0da6d_3675dbea55df44d78b5a8bcd1b5f6ed8~mv2_1756237082833.avif";
import smoothie5 from "../assets/d0da6d_07427cc1464b4a06ba7f17839650ed10~mv2_1756237082834.avif";
import smoothie6 from "../assets/d0da6d_a7c5d186b61b4ffb9097bf8be96fc452~mv2_1756237082834.avif";
import smoothie7 from "../assets/d0da6d_bd14a5a315a04d2d99e79e3153f5a295~mv2_1756237082835.avif";
import smoothie8 from "../assets/d0da6d_c07daa2143894854b6365ab7502b06fe~mv2_1756237082835.avif";
import smoothie9 from "../assets/d0da6d_c360b55462a64f3481203cbb72e694d8~mv2_1756237082836.avif";
import smoothie10 from "../assets/d0da6d_d2c79420a18b4a38ad64a90871f332c7~mv2_1756237082837.avif";
import smoothie11 from "../assets/Smoothie_1_1756237082837.avif";
import smoothie12 from "../assets/smoothie_2_1756237082838.avif";

const smoothieImages = [
  smoothie1, smoothie2, smoothie3, smoothie4, smoothie5, smoothie6,
  smoothie7, smoothie8, smoothie9, smoothie10, smoothie11, smoothie12
];

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 3) % smoothieImages.length);
    }, 4000); // Rotate every 4 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % smoothieImages.length;
      images.push(smoothieImages[index]);
    }
    return images;
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">About Want A Smoothie</h2>
          <div className="w-24 h-1 brand-yellow mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Located in the heart of Woodbridge, New Jersey, Want A Smoothie was created with the focus of making healthy eating more affordable and convenient for on-the-go access. Find us inside the wonderful Knot Just Bagels Deli.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-gray-50 rounded-2xl card-hover">
            <div className="w-16 h-16 brand-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-brand-gray mb-4">100% Natural</h3>
            <p className="text-gray-600">No added concentrates or syrups. Every product is REAL FOOD.</p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-2xl card-hover">
            <div className="w-16 h-16 brand-yellow rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="text-brand-gray" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-brand-gray mb-4">Healthy & Fresh</h3>
            <p className="text-gray-600">Fresh ingredients prepared daily for maximum nutrition and taste.</p>
          </div>
          
          <div className="text-center p-8 bg-gray-50 rounded-2xl card-hover">
            <div className="w-16 h-16 brand-dark-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-brand-gray mb-4">Convenient</h3>
            <p className="text-gray-600">Quick, healthy options perfect for your busy lifestyle.</p>
          </div>
        </div>
        
        {/* Smoothie Images Carousel */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-brand-gray mb-8">Our Fresh Creations</h3>
          <div className="grid md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
            {getVisibleImages().map((image, index) => (
              <div key={`${currentSlide}-${index}`} className="overflow-hidden rounded-2xl shadow-lg card-hover">
                <img 
                  src={image} 
                  alt={`Delicious smoothie ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(smoothieImages.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * 3)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentSlide / 3) === index ? 'brand-green' : 'bg-gray-300'
                }`}
                data-testid={`carousel-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

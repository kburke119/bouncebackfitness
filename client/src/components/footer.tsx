import bounceBackLogo from "../assets/bounce-back-logo.png";
import floatLogo from "../assets/float-logo.jpg";
import smoothieLogo from "../assets/smoothie-logo.avif";

export default function Footer() {

  return (
    <footer className="brand-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 bg-white border border-gray-200 rounded-lg py-8 px-4 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-gray-800">Explore Our Brands</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="https://www.wantasmoothie.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full hover:shadow-md transition-all duration-200"
              data-testid="link-footer-smoothie"
            >
              <div className="flex justify-center items-center mb-4" style={{ height: "80px" }}>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <img 
                    src={smoothieLogo} 
                    alt="Want A Smoothie Logo"
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </div>
              <h4 className="font-semibold text-lg text-brand-yellow mb-2">Want A Smoothie</h4>
              <p className="text-gray-600 text-sm">Fresh, convenient, real food & refreshments</p>
            </a>
            <div className="block w-full opacity-60 cursor-not-allowed" data-testid="link-footer-bounce">
              <div className="flex justify-center items-center mb-4" style={{ height: "80px" }}>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 flex items-center justify-center">
                  <img 
                    src={bounceBackLogo} 
                    alt="Bounce Back Fitness Logo"
                    className="h-16 w-auto object-contain"
                  />
                </div>
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Bounce Back Fitness</h4>
              <p className="text-gray-600 text-sm">Corrective & Functional Training (Current)</p>
            </div>
            <a 
              href="https://www.floatintowellness.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full hover:shadow-md transition-all duration-200"
              data-testid="link-footer-float"
            >
              <div className="flex justify-center items-center mb-4" style={{ height: "80px" }}>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <img 
                    src={floatLogo} 
                    alt="Float Into Wellness Logo"
                    className="h-16 w-16 object-cover rounded-full"
                  />
                </div>
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Float Into Wellness</h4>
              <p className="text-gray-600 text-sm">Recovery for body and mind</p>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-300">
          <p>&copy; 2024 Bounce Back Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect, useRef } from "react";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import bounceBackLogo from "../assets/bounce-back-logo.png";
import heroImage from "../assets/hero-image.png";
import programsImage from "../assets/programs-image.png";

export default function BounceBackFitness() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Multiple detection methods for form submission
    
    // Method 1: Listen for postMessage events
    const handleMessage = (event: MessageEvent) => {
      if (typeof event.data === "string") {
        if (event.data.includes("formResponse") || 
            event.data.includes("fbzv") || 
            event.data.includes("formSubmitted")) {
          setIsSubmitted(true);
        }
      }
    };

    // Method 2: Poll the iframe to detect Google Forms confirmation page
    const checkInterval = setInterval(() => {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentWindow) {
        try {
          const iframeDoc = iframe.contentWindow.document;
          if (iframeDoc.querySelector('.freebirdFormviewerViewResponseConfirmationMessage')) {
            setIsSubmitted(true);
            clearInterval(checkInterval);
          }
        } catch (e) {
          try {
            const currentSrc = iframe.contentWindow.location.href;
            if (currentSrc && currentSrc.includes('formResponse')) {
              setIsSubmitted(true);
              clearInterval(checkInterval);
            }
          } catch (e2) {
            // Still blocked, continue polling
          }
        }
      }
    }, 500);

    // Method 3: Detect iframe load events
    const iframe = iframeRef.current;
    let loadCount = 0;
    const handleLoad = () => {
      loadCount++;
      if (loadCount >= 2) {
        setTimeout(() => {
          setIsSubmitted(true);
        }, 1000);
      }
    };

    window.addEventListener("message", handleMessage);
    if (iframe) {
      iframe.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("message", handleMessage);
      clearInterval(checkInterval);
      if (iframe) {
        iframe.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" style={{ "--brand-color": "#4AE54A" } as React.CSSProperties}>
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <img 
                src={bounceBackLogo} 
                alt="Bounce Back Fitness Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="text-2xl font-bold text-gray-900">Bounce Back Fitness</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-500 font-medium transition-colors">About</button>
              <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-green-500 font-medium transition-colors">Programs</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-green-500 font-medium transition-colors">Contact</button>
              <Button 
                onClick={() => window.open('https://book.squareup.com/appointments/djulcbvblq3mzy/location/4SBNWX3643KXJ/services', '_blank')}
                className="text-black font-bold hover:bg-green-400 transition-colors"
                style={{ backgroundColor: "#4AE54A" }}
                data-testid="button-book-now"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight">
            BOUNCE BACK
            <span className="block" style={{ color: "#4AE54A" }}>FITNESS</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('programs')}
              className="text-black font-bold px-12 py-6 text-xl hover:bg-green-400 transition-colors"
              style={{ backgroundColor: "#4AE54A" }}
              data-testid="button-view-programs"
            >
              View Programs
            </Button>
            <Button 
              onClick={() => window.open('https://book.squareup.com/appointments/djulcbvblq3mzy/location/4SBNWX3643KXJ/services', '_blank')}
              variant="outline"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold px-12 py-6 text-xl transition-colors border-2"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>
          
          {/* Embedded YouTube Video */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-pO-F1VwsDo"
                title="Bounce Back Fitness Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                data-testid="video-hero-intro"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16" style={{ backgroundColor: "#4AE54A" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
                OUR PROGRAMS
              </h2>
              <div className="text-black mb-8">
                <h3 className="text-xl font-bold mb-4">All have the focus of:</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Mobility</li>
                  <li>• Posture</li>
                  <li>• Pain-free Movement</li>
                  <li>• Proper Form & Technique</li>
                  <li>• "Round Strength" - top tier Strength & Balance</li>
                  <li>• Safety</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-black bg-opacity-20 rounded-lg p-6" data-testid="card-personal-training">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-2xl font-bold text-black">01</span>
                  <div>
                    <h3 className="text-xl font-bold text-black">PERSONAL TRAINING</h3>
                  </div>
                </div>
                <p className="text-black">
                  The First-Class Experience: It's All About YOU! Throughout the entire session, the trainer focuses solely on you, ensuring you receive their complete attention.
                </p>
              </div>
              
              <div className="bg-black bg-opacity-20 rounded-lg p-6" data-testid="card-tribe-training">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-2xl font-bold text-black">02</span>
                  <div>
                    <h3 className="text-xl font-bold text-black">TRIBE TRAINING MEMBERSHIP</h3>
                    <span className="text-sm font-semibold text-black">COMING JULY 2025!</span>
                  </div>
                </div>
                <p className="text-black">
                  Experience the energy in the room! This session includes up to five other clients, all receiving inspiration and support from your trainer. Your workout remains tailored to your individual goals and current fitness level.
                </p>
              </div>
              
              <div className="bg-black bg-opacity-20 rounded-lg p-6" data-testid="card-team-training">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-2xl font-bold text-black">03</span>
                  <div>
                    <h3 className="text-xl font-bold text-black">TEAM TRAINING</h3>
                  </div>
                </div>
                <p className="text-black">
                  Athlete-focused training designed for the entire team to develop new skills and refine techniques at the highest level of performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: "#4AE54A" }}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full" style={{ backgroundColor: "#4AE54A" }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full" style={{ backgroundColor: "#4AE54A" }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span style={{ color: "#4AE54A" }}>Bounce Back</span> Fitness
            </h2>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: "#4AE54A" }}></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#4AE54A" }}>Our Mission</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We specialize in helping people recover from injuries, improve movement quality, and build functional strength. 
                  Our evidence-based approach combines corrective exercise, functional training, and personalized coaching to help you bounce back stronger.
                </p>
              </div>
              
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#4AE54A" }}>Your Journey</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether you're recovering from an injury, looking to improve your athletic performance, or simply want to move better in daily life, our programs are designed to meet you where you are and take you where you want to be.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-white to-gray-100 rounded-2xl p-8 text-gray-900 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6" style={{ color: "#4AE54A" }}>Our Locations</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: "#4AE54A" }}>
                      1
                    </div>
                    <div>
                      <p className="font-bold text-xl text-gray-900">Woodbridge, NJ</p>
                      <p className="text-gray-600 text-lg">94 Green St.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: "#4AE54A" }}>
                      2
                    </div>
                    <div>
                      <p className="font-bold text-xl text-gray-900">Metuchen, NJ</p>
                      <p className="text-gray-600 text-lg">215 Durham Ave.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-black bg-opacity-30 rounded-xl p-4">
                  <div className="text-3xl font-bold" style={{ color: "#4AE54A" }}>500+</div>
                  <p className="text-sm text-gray-300">Clients Helped</p>
                </div>
                <div className="bg-black bg-opacity-30 rounded-xl p-4">
                  <div className="text-3xl font-bold" style={{ color: "#4AE54A" }}>10+</div>
                  <p className="text-sm text-gray-300">Years Experience</p>
                </div>
                <div className="bg-black bg-opacity-30 rounded-xl p-4">
                  <div className="text-3xl font-bold" style={{ color: "#4AE54A" }}>2</div>
                  <p className="text-sm text-gray-300">Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our clients about their transformation journeys
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-testid="testimonial-video-1">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/WAjNaz-IS5Y"
                  title="Client Testimonial 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-testid="testimonial-video-2">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/s1Z6pCEOvzY"
                  title="Client Testimonial 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-testid="testimonial-video-3">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/D14lqSnubfs"
                  title="Client Testimonial 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16" style={{ backgroundColor: "#4AE54A" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle2 className="w-24 h-24 text-black" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Thank You!</h2>
              <p className="text-lg text-black">We will get back to you shortly.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Contact Bounce Back Fitness
                </h2>
                <p className="text-lg text-black">
                  Ready to start your fitness journey? Ask about memberships, training plans, or a free consultation.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-2xl bg-white max-w-3xl mx-auto border-4 relative" style={{ borderColor: "#4AE54A" }}>
                <div 
                  className="absolute top-0 left-0 right-0 bg-white z-10"
                  style={{ height: '120px' }}
                ></div>
                <iframe
                  ref={iframeRef}
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfYNRjC6H5EDgg_xbiiTv475G62DnCZYwsOBzl3vP2gJT2CQQ/viewform?embedded=true&hl=en"
                  width="100%"
                  height="1100"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  loading="lazy"
                  data-testid="form-contact-bounce-back"
                  style={{ border: 'none', marginTop: '-120px' }}
                >
                  Loading…
                </iframe>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
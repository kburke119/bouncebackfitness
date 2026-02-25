import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Menu, X } from "lucide-react";
import Footer from "@/components/footer";
import bounceBackLogo from "../assets/bounce-back-logo.png";
import heroImage from "../assets/hero-image.png";

const BOOKING_URL =
  "https://book.squareup.com/appointments/djulcbvblq3mzy/location/4SBNWX3643KXJ/services";
const BRAND_GREEN = "#4AE54A";

export default function BounceBackFitness() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Method 1: Listen for postMessage from Google Forms
    const handleMessage = (event: MessageEvent) => {
      if (typeof event.data === "string") {
        if (
          event.data.includes("formResponse") ||
          event.data.includes("fbzv") ||
          event.data.includes("formSubmitted")
        ) {
          setIsSubmitted(true);
        }
      }
    };

    // Method 2: Poll the iframe URL for the Google Forms confirmation page
    const checkInterval = setInterval(() => {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentWindow) {
        try {
          const currentSrc = iframe.contentWindow.location.href;
          if (currentSrc && currentSrc.includes("formResponse")) {
            setIsSubmitted(true);
            clearInterval(checkInterval);
          }
        } catch {
          // Cross-origin access blocked — expected, continue polling
        }
      }
    }, 500);

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearInterval(checkInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Programs", id: "programs" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen">
      {/* ── Header / Navigation ── */}
      <header>
        <nav
          className="bg-white shadow-lg sticky top-0 z-50"
          aria-label="Main navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <a
                href="/"
                className="flex items-center space-x-3"
                aria-label="Bounce Back Fitness – home"
              >
                <img
                  src={bounceBackLogo}
                  alt="Bounce Back Fitness Logo"
                  className="h-12 w-auto object-contain"
                  width={48}
                  height={48}
                />
                <span className="text-2xl font-bold text-gray-900">
                  Bounce Back Fitness
                </span>
              </a>

              {/* Desktop nav */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="text-gray-700 hover:text-green-500 font-medium transition-colors"
                  >
                    {label}
                  </button>
                ))}
                <Button
                  onClick={() => window.open(BOOKING_URL, "_blank")}
                  className="text-black font-bold hover:bg-green-400 transition-colors"
                  style={{ backgroundColor: BRAND_GREEN }}
                  aria-label="Book a session"
                >
                  Book Now
                </Button>
              </div>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
              <div
                id="mobile-menu"
                className="md:hidden pb-4 border-t border-gray-100"
              >
                <div className="flex flex-col space-y-3 pt-3">
                  {navLinks.map(({ label, id }) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className="text-gray-700 hover:text-green-500 font-medium py-2 text-left transition-colors"
                    >
                      {label}
                    </button>
                  ))}
                  <Button
                    onClick={() => {
                      window.open(BOOKING_URL, "_blank");
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-black font-bold hover:bg-green-400 transition-colors mt-2 w-full"
                    style={{ backgroundColor: BRAND_GREEN }}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main>
        {/* ── Hero ── */}
        <section
          aria-labelledby="hero-heading"
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-60"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
            <h1
              id="hero-heading"
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight"
            >
              BOUNCE BACK
              <span className="block" style={{ color: BRAND_GREEN }}>
                FITNESS
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                onClick={() => scrollToSection("programs")}
                className="text-black font-bold px-12 py-6 text-xl hover:bg-green-400 transition-colors"
                style={{ backgroundColor: BRAND_GREEN }}
                aria-label="View our fitness programs"
              >
                View Programs
              </Button>
              <Button
                onClick={() => window.open(BOOKING_URL, "_blank")}
                variant="outline"
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-bold px-12 py-6 text-xl transition-colors border-2"
                aria-label="Get started with Bounce Back Fitness"
              >
                Get Started
              </Button>
            </div>

            {/* Hero YouTube video */}
            <div className="max-w-4xl mx-auto mt-12">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: "16/9" }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/-pO-F1VwsDo"
                  title="Bounce Back Fitness Introduction"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Programs ── */}
        <section
          id="programs"
          aria-labelledby="programs-heading"
          className="py-16"
          style={{ backgroundColor: BRAND_GREEN }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2
                  id="programs-heading"
                  className="text-4xl md:text-5xl font-bold text-black mb-8"
                >
                  OUR PROGRAMS
                </h2>
                <div className="text-black mb-8">
                  <h3 className="text-xl font-bold mb-4">All have the focus of:</h3>
                  <ul className="space-y-2 text-lg list-none">
                    <li>• Mobility</li>
                    <li>• Posture</li>
                    <li>• Pain-free Movement</li>
                    <li>• Proper Form &amp; Technique</li>
                    <li>• "Round Strength" – top tier Strength &amp; Balance</li>
                    <li>• Safety</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                {/* Personal Training */}
                <article
                  className="bg-black bg-opacity-20 rounded-lg p-6"
                  aria-label="Personal Training program"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span
                      className="text-2xl font-bold text-black"
                      aria-hidden="true"
                    >
                      01
                    </span>
                    <h3 className="text-xl font-bold text-black">
                      PERSONAL TRAINING
                    </h3>
                  </div>
                  <p className="text-black">
                    The First-Class Experience: It's All About YOU! Throughout the
                    entire session, the trainer focuses solely on you, ensuring you
                    receive their complete attention.
                  </p>
                </article>

                {/* Tribe Training */}
                <article
                  className="bg-black bg-opacity-20 rounded-lg p-6"
                  aria-label="Tribe Training Membership program"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span
                      className="text-2xl font-bold text-black"
                      aria-hidden="true"
                    >
                      02
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-black">
                        TRIBE TRAINING MEMBERSHIP
                      </h3>
                      <span className="text-sm font-semibold text-black">
                        COMING JULY 2025!
                      </span>
                    </div>
                  </div>
                  <p className="text-black">
                    Experience the energy in the room! This session includes up to
                    five other clients, all receiving inspiration and support from your
                    trainer. Your workout remains tailored to your individual goals and
                    current fitness level.
                  </p>
                </article>

                {/* Team Training */}
                <article
                  className="bg-black bg-opacity-20 rounded-lg p-6"
                  aria-label="Team Training program"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span
                      className="text-2xl font-bold text-black"
                      aria-hidden="true"
                    >
                      03
                    </span>
                    <h3 className="text-xl font-bold text-black">TEAM TRAINING</h3>
                  </div>
                  <p className="text-black">
                    Athlete-focused training designed for the entire team to develop
                    new skills and refine techniques at the highest level of
                    performance.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="absolute top-10 left-10 w-32 h-32 rounded-full"
              style={{ backgroundColor: BRAND_GREEN }}
            />
            <div
              className="absolute bottom-20 right-20 w-24 h-24 rounded-full"
              style={{ backgroundColor: BRAND_GREEN }}
            />
            <div
              className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full"
              style={{ backgroundColor: BRAND_GREEN }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2
                id="about-heading"
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                About{" "}
                <span style={{ color: BRAND_GREEN }}>Bounce Back</span> Fitness
              </h2>
              <div
                className="w-24 h-1 mx-auto mb-8"
                style={{ backgroundColor: BRAND_GREEN }}
                aria-hidden="true"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: BRAND_GREEN }}
                  >
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    We specialize in helping people recover from injuries, improve
                    movement quality, and build functional strength. Our evidence-based
                    approach combines corrective exercise, functional training, and
                    personalized coaching to help you bounce back stronger.
                  </p>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: BRAND_GREEN }}
                  >
                    Your Journey
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Whether you're recovering from an injury, looking to improve your
                    athletic performance, or simply want to move better in daily life,
                    our programs are designed to meet you where you are and take you
                    where you want to be.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-white to-gray-100 rounded-2xl p-8 text-gray-900 shadow-2xl">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: BRAND_GREEN }}
                  >
                    Our Locations
                  </h3>
                  <div className="space-y-6">
                    <address className="not-italic flex items-start space-x-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                        style={{ backgroundColor: BRAND_GREEN }}
                        aria-hidden="true"
                      >
                        1
                      </div>
                      <div>
                        <p className="font-bold text-xl text-gray-900">
                          Woodbridge, NJ
                        </p>
                        <p className="text-gray-600 text-lg">
                          94 Green St, Woodbridge, NJ 07095
                        </p>
                      </div>
                    </address>
                    <address className="not-italic flex items-start space-x-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                        style={{ backgroundColor: BRAND_GREEN }}
                        aria-hidden="true"
                      >
                        2
                      </div>
                      <div>
                        <p className="font-bold text-xl text-gray-900">
                          Metuchen, NJ
                        </p>
                        <p className="text-gray-600 text-lg">
                          215 Durham Ave, Metuchen, NJ 08840
                        </p>
                      </div>
                    </address>
                  </div>
                </div>

                <div
                  className="grid grid-cols-3 gap-4 text-center"
                  aria-label="Key stats"
                >
                  <div className="bg-black bg-opacity-30 rounded-xl p-4">
                    <div
                      className="text-3xl font-bold"
                      style={{ color: BRAND_GREEN }}
                    >
                      500+
                    </div>
                    <p className="text-sm text-gray-300">Clients Helped</p>
                  </div>
                  <div className="bg-black bg-opacity-30 rounded-xl p-4">
                    <div
                      className="text-3xl font-bold"
                      style={{ color: BRAND_GREEN }}
                    >
                      10+
                    </div>
                    <p className="text-sm text-gray-300">Years Experience</p>
                  </div>
                  <div className="bg-black bg-opacity-30 rounded-xl p-4">
                    <div
                      className="text-3xl font-bold"
                      style={{ color: BRAND_GREEN }}
                    >
                      2
                    </div>
                    <p className="text-sm text-gray-300">Locations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section
          id="testimonials"
          aria-labelledby="testimonials-heading"
          className="py-16 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                id="testimonials-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Client Testimonials
              </h2>
              <p className="text-lg text-gray-600">
                Hear from our clients about their transformation journeys
              </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {[
                { id: "WAjNaz-IS5Y", title: "Client Testimonial – Bounce Back Fitness 1" },
                { id: "s1Z6pCEOvzY", title: "Client Testimonial – Bounce Back Fitness 2" },
                { id: "D14lqSnubfs", title: "Client Testimonial – Bounce Back Fitness 3" },
              ].map(({ id, title }) => (
                <div
                  key={id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${id}`}
                      title={title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="py-16"
          style={{ backgroundColor: BRAND_GREEN }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {isSubmitted ? (
              <div className="text-center" role="status" aria-live="polite">
                <CheckCircle2
                  className="w-24 h-24 text-black mx-auto mb-6"
                  aria-hidden="true"
                />
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Thank You!
                </h2>
                <p className="text-lg text-black">
                  We will get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h2
                    id="contact-heading"
                    className="text-3xl md:text-4xl font-bold text-black mb-4"
                  >
                    Contact Bounce Back Fitness
                  </h2>
                  <p className="text-lg text-black">
                    Ready to start your fitness journey? Ask about memberships,
                    training plans, or a free consultation.
                  </p>
                </div>

                <div
                  className="rounded-xl overflow-hidden shadow-2xl bg-white max-w-3xl mx-auto border-4 relative"
                  style={{ borderColor: BRAND_GREEN }}
                >
                  {/* White mask to hide Google Forms header branding */}
                  <div
                    className="absolute top-0 left-0 right-0 bg-white z-10"
                    style={{ height: "120px" }}
                    aria-hidden="true"
                  />
                  <iframe
                    ref={iframeRef}
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfYNRjC6H5EDgg_xbiiTv475G62DnCZYwsOBzl3vP2gJT2CQQ/viewform?embedded=true&hl=en"
                    width="100%"
                    height="1100"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    loading="lazy"
                    title="Contact Bounce Back Fitness"
                    style={{ border: "none", marginTop: "-120px" }}
                  >
                    Loading form…
                  </iframe>
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

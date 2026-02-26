import bounceBackLogo from "../assets/bounce-back-logo.png";

const BOOKING_URL =
  "https://book.squareup.com/appointments/djulcbvblq3mzy/location/4SBNWX3643KXJ/services";
const BRAND_GREEN = "#4AE54A";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand column */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={bounceBackLogo}
                alt="Bounce Back Fitness Logo"
                className="h-12 w-auto object-contain"
                width={48}
                height={48}
              />
              <span className="text-xl font-bold">Bounce Back Fitness</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Corrective &amp; Functional Training — helping you recover from
              injuries, improve movement, and build lasting strength.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold text-black text-sm px-5 py-2 rounded-full transition-colors hover:brightness-90"
              style={{ backgroundColor: BRAND_GREEN }}
              aria-label="Book a session at Bounce Back Fitness"
            >
              Book a Session
            </a>
          </div>

          {/* Locations column */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: BRAND_GREEN }}
            >
              Our Locations
            </h3>
            <div className="space-y-4 text-gray-400 text-sm">
              <address className="not-italic">
                <p className="font-semibold text-white">Woodbridge, NJ</p>
                <p>94 Green St, Woodbridge, NJ 07095</p>
              </address>
              <address className="not-italic">
                <p className="font-semibold text-white">Metuchen, NJ</p>
                <p>215 Durham Ave, Metuchen, NJ 08840</p>
              </address>
            </div>
          </div>

          {/* Contact / Quick Links column */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: BRAND_GREEN }}
            >
              Contact
            </h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>
                <a
                  href="mailto:Bounce.Back.Fit.NJ@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Bounce.Back.Fit.NJ@gmail.com
                </a>
              </p>
            </div>

            <h3
              className="text-sm font-semibold uppercase tracking-widest mt-6 mb-4"
              style={{ color: BRAND_GREEN }}
            >
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 text-gray-400 text-sm list-none">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-white transition-colors">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Bounce Back Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

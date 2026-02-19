import { useState, useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactSection() {
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
          // Try to access the iframe's location (will fail due to cross-origin, but that's ok)
          const iframeDoc = iframe.contentWindow.document;
          // If we can access it, check for confirmation elements
          if (iframeDoc.querySelector('.freebirdFormviewerViewResponseConfirmationMessage')) {
            setIsSubmitted(true);
            clearInterval(checkInterval);
          }
        } catch (e) {
          // Cross-origin access blocked, try checking iframe src changes
          // Google Forms typically shows "formResponse" in the URL after submission
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
    }, 500); // Check every 500ms

    // Method 3: Detect iframe load events (form submission triggers a reload)
    const iframe = iframeRef.current;
    let loadCount = 0;
    const handleLoad = () => {
      loadCount++;
      // After the second load (initial + submission), show success
      if (loadCount >= 2) {
        setTimeout(() => {
          setIsSubmitted(true);
        }, 1000); // Wait 1 second to ensure submission completed
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

  if (isSubmitted) {
    return (
      <section id="contact" className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle2 className="w-24 h-24 text-green-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">Thank You!</h2>
            <div className="w-24 h-1 brand-yellow mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">We received your message and will get back to you shortly.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">Contact Want A Smoothie</h2>
          <div className="w-24 h-1 brand-yellow mx-auto mb-8"></div>
          <p className="text-xl text-gray-600">Have a question or want to place a catering order? Send us a note and we'll get back to you.</p>
        </div>
        
        <div className="rounded-xl overflow-hidden shadow-2xl bg-white max-w-3xl mx-auto border-4 border-yellow-400 relative">
          <div 
            className="absolute top-0 left-0 right-0 bg-white z-10"
            style={{ height: '120px' }}
          ></div>
          <iframe
            ref={iframeRef}
            src="https://docs.google.com/forms/d/e/1FAIpQLSdIGGGL_PUT-v21krsp44ORT6ir5EZieb2LYYlM1RuKE96p9Q/viewform?embedded=true&hl=en"
            width="100%"
            height="1100"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            loading="lazy"
            data-testid="form-contact-smoothie"
            style={{ border: 'none', marginTop: '-120px' }}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}
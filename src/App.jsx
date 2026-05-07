import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { Services } from "./components/sections/Services";
import { HowItWorks } from "./components/sections/HowItWorks";

import { WhyUs } from "./components/sections/WhyUs";
import { TechStack } from "./components/sections/TechStack";
import { Portfolio } from "./components/sections/Portfolio";
import { Blog } from "./components/sections/Blog";
import { Testimonials } from "./components/sections/Testimonials";
import { About } from "./components/sections/About";
import { FAQ } from "./components/sections/FAQ";

import { MessageCircle } from "lucide-react";
import { useEffect } from "react";
import { CTABanner } from "./components/sections/Ctabanner";

function App() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = function (e) {
      const href = this.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-blue text-brand-white selection:bg-brand-orange/30">
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <WhyUs />
        <Services />
        <TechStack />

        <Portfolio />
        <Blog />
        <Testimonials />

        <FAQ />
      </main>
      <CTABanner />
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348102877413"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110 transition-transform focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <style>{`
          @keyframes pulse-ring {
            0% { transform: scale(1); opacity: 0.8; }
            100% { transform: scale(1.5); opacity: 0; }
          }
          .animate-pulse-ring {
            animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          }
        `}</style>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring"></div>
        <MessageCircle size={28} className="relative z-10" />
      </a>
    </div>
  );
}

export default App;

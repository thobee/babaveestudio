import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { WhyUs } from "./components/sections/WhyUs";
import { TechStack } from "./components/sections/TechStack";
import { Portfolio } from "./components/sections/Portfolio";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { CTABanner } from "./components/sections/Ctabanner";
import Lenis from "lenis";

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // ── Initialise Lenis smooth scroll ──
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false, // native on mobile
    });

    lenisRef.current = lenis;

    // RAF loop — drive Lenis every frame
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Intercept anchor clicks so they scroll through Lenis
    function handleAnchorClick(e) {
      const href = this.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) lenis.scrollTo(target, { offset: 0 });
      }
    }

    document.querySelectorAll('a[href^="#"]').forEach((a) =>
      a.addEventListener("click", handleAnchorClick)
    );

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.querySelectorAll('a[href^="#"]').forEach((a) =>
        a.removeEventListener("click", handleAnchorClick)
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-blue text-brand-white selection:bg-brand-orange/30">
      <Navbar />

      <main>
        <Hero />
        <WhyUs />
      
        <Services />
        <TechStack />

        <Portfolio />

        <Testimonials />


        <FAQ />

        <Contact />
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

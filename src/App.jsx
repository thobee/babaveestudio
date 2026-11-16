import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppIcon } from "./components/ui";
import { WHATSAPP } from "./data/site";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-orange focus:px-5 focus:py-3 focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />

      <main id="main">
        <Hero />
        <Work />
        <Services />
        <About />
        <TechStack />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BabaVee Studio on WhatsApp"
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-ink shadow-[0_1px_2px_rgb(0_0_0/0.3),0_10px_24px_-6px_rgb(37_211_102/0.5)] transition-[scale,box-shadow] duration-200 hover:scale-105 active:scale-[0.96]"
      >
        <WhatsAppIcon size={28} />
      </a>
    </MotionConfig>
  );
}

export default App;

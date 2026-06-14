import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const navLinks = [
    { name: "About",    href: "#whyus"    },
    { name: "Services", href: "#services" },
    { name: "Work",     href: "#work"     },
    { name: "FAQ",      href: "#faq"      },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed w-full z-50 top-0"
      >
        <div
          className={`w-full max-w-[1280px] mx-auto transition-all duration-500 ${
            isScrolled ? "mt-3 px-3 sm:px-4" : "mt-0 px-4 sm:px-6 md:px-10"
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled
                ? "bg-[#0a0a0a]/85 backdrop-blur-2xl border border-white/[0.08] rounded-2xl px-4 sm:px-6 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
                : "bg-transparent py-5 sm:py-6"
            }`}
          >
            {/* LOGO */}
            <a
              href="#"
              className="flex items-baseline gap-1.5 font-syne font-extrabold text-[1.2rem] sm:text-xl lg:text-2xl text-white tracking-[-0.04em] group z-40 relative shrink-0"
            >
              <span>BabaVee</span>
              <span className="text-[#ff6b35] leading-none drop-shadow-[0_0_10px_rgba(255,107,43,0.5)] group-hover:drop-shadow-[0_0_22px_rgba(255,107,43,0.8)] transition-all duration-300">.</span>
              <span className="hidden sm:block font-sans text-xs sm:text-sm font-bold text-white/55 tracking-normal leading-none ml-0.5">Studio</span>
            </a>

            {/* DESKTOP CENTER PILL */}
            <div className="hidden md:flex items-center gap-0.5 bg-white/[0.05] border border-white/[0.08] rounded-full px-2 py-1.5 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1.5 text-[13px] font-medium text-white/60 hover:text-white hover:bg-white/[0.07] rounded-full transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <a href="#contact" className="hidden md:block">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center gap-2 font-sans font-semibold text-[13px] bg-[#ff6b35] text-white px-5 h-9 rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,107,43,0.35)] hover:shadow-[0_0_35px_rgba(255,107,43,0.55)] transition-all duration-300"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <ArrowUpRight size={13} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </motion.button>
              </a>

              {/* Mobile CTA */}
              <a
                href="#contact"
                className="md:hidden inline-flex items-center gap-1.5 font-sans font-semibold text-[12px] bg-[#ff6b35] text-white px-4 py-2 rounded-full shadow-[0_0_16px_rgba(255,107,43,0.4)] transition-all duration-300"
              >
                Hire Us
              </a>

              {/* Hamburger */}
              <button
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/[0.08] hover:bg-white/10 active:scale-95 transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3, ease: "backOut" }}>
                  {isOpen ? <X size={18} className="text-white" /> : <Menu size={18} className="text-white" />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── SIMPLE PROFESSIONAL MOBILE DROPDOWN ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden fixed top-[78px] left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/[0.08] shadow-xl overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center justify-between px-5 py-4 text-lg font-medium text-white/80 hover:text-white hover:bg-white/[0.06] rounded-2xl transition-all active:bg-white/[0.1]"
                >
                  {link.name}
                  <ArrowUpRight size={18} className="text-white/40" />
                </motion.a>
              ))}

              {/* Mobile CTA inside dropdown */}
              <div className="mt-6 pt-6 border-t border-white/[0.08]">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-[#ff6b35] text-white font-semibold text-center py-4 rounded-2xl text-lg hover:bg-[#ff8a4d] transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
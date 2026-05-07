import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'top-4 px-4 sm:px-6' : 'top-0 px-0'}`}
    >
      <div
        className={`w-full max-w-[1280px] mx-auto relative transition-all duration-500 overflow-visible ${
          isScrolled
            ? 'bg-brand-blue/85 backdrop-blur-2xl border border-white/10 rounded-full py-2.5 px-6 md:px-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-6 px-6 md:px-10 border-transparent'
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo left */}
          <a href="#" className="flex items-center gap-2 font-syne font-extrabold text-xl lg:text-2xl text-white tracking-tighter z-40 group relative min-w-[120px]">
            BabaVee
            <span className="text-brand-orange leading-none drop-shadow-[0_0_10px_rgba(255,107,43,0.5)]">.</span>
            <span className="ml-2 font-mono text-[9px] lg:text-[10px] text-brand-orange font-normal tracking-widest uppercase hidden sm:block border border-brand-orange/30 px-2 py-0.5 rounded-full group-hover:bg-brand-orange/10 transition-colors">
              Studio
            </span>
          </a>

          {/* Centered nav links */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-1 lg:gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-300 relative group"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact button right */}
          <div className="hidden md:flex items-center min-w-[140px] justify-end">
            <a href="#contact" className="z-30">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="font-sans font-semibold text-sm bg-brand-orange text-white px-6 h-10 rounded-full lg:h-11 lg:px-8 hover:bg-[#e0601f] transition-colors shadow-[0_0_20px_rgba(255,107,43,0.25)] hover:shadow-[0_0_30px_rgba(255,107,43,0.4)] relative overflow-hidden group"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 w-full h-full transform translate-x-[-100%] group-hover:translate-x-[0%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-out skew-x-12 z-0" />
              </motion.button>
            </a>
          </div>

          {/* Mobile toggle right */}
          <button
            className="md:hidden text-white z-40 cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors relative overflow-hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0px at calc(100% - 3.5rem) 3.5rem)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 3.5rem) 3.5rem)' }}
            exit={{ opacity: 0, clipPath: 'circle(0px at calc(100% - 3.5rem) 3.5rem)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 z-30 bg-brand-blue/98 backdrop-blur-3xl flex flex-col justify-center"
          >
            {/* Decorative blurs */}
            <div className="absolute top-[-10%] right-[-10%] w-[40vh] h-[40vh] bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40vh] h-[40vh] bg-[#0A1628]/80 rounded-full blur-[100px] pointer-events-none" />

            <div className="px-8 flex flex-col gap-8 relative z-10 h-full justify-center pt-20">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <div key={link.name} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%", rotate: 5 }}
                      animate={{ y: 0, rotate: 0 }}
                      exit={{ y: "100%", opacity: 0 }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-6 font-syne font-extrabold text-4xl sm:text-5xl text-white hover:text-brand-orange transition-colors"
                      >
                        <span className="text-xl sm:text-2xl text-white/20 font-mono font-normal">0{i + 1}</span>
                        {link.name}
                      </a>
                    </motion.div>
                  </div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  <button className="font-sans font-semibold bg-brand-orange text-white w-full py-4 rounded-full text-lg shadow-[0_0_30px_rgba(255,107,43,0.3)] hover:scale-[1.02] active:scale-95 transition-all">
                    Contact Us
                  </button>
                </a>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-auto pb-12 flex justify-between items-center text-sm font-mono text-gray-500 uppercase tracking-widest"
              >
                <span>Follow Us</span>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-brand-orange transition-colors">IG</a>
                  <a href="#" className="hover:text-brand-orange transition-colors">X</a>
                  <a href="#" className="hover:text-brand-orange transition-colors">IN</a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

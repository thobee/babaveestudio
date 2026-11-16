import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS } from "../data/site";

export const Logo = ({ className = "" }) => (
  <a href="#top" className={`inline-flex min-h-[44px] items-center gap-2.5 ${className}`} aria-label="BabaVee Studio, back to top">
    <img src="/images/logo-mark-64.webp" alt="" width="20" height="26" className="no-outline h-[26px] w-auto" />
    <span className="text-[17px] font-bold tracking-tight text-white">
      BabaVee<span className="text-orange">.</span>
      <span className="ml-1 font-medium text-mute">Studio</span>
    </span>
  </a>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const buttonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the section currently in view
  useEffect(() => {
    // "top" (the hero) clears the highlight when scrolled back up
    const ids = ["top", ...NAV_LINKS.map((l) => l.href.slice(1)), "contact"];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // lock scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        solid ? "bg-ink/85 shadow-[0_1px_0_rgb(255_255_255/0.06)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between lg:h-[72px]" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href.slice(1) ? "true" : undefined}
                className="link-underline inline-flex min-h-[44px] items-center px-3 text-[15px] font-medium text-stone-300 transition-colors duration-200 hover:text-white aria-[current=true]:text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary hidden !min-h-[44px] !px-5 !text-sm md:inline-flex">
            Start a project
            <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden="true" />
          </a>
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative grid size-11 place-items-center rounded-full text-white transition-[background-color,scale] duration-200 hover:bg-white/10 active:scale-[0.96] md:hidden"
          >
            <AnimatePresence initial={false} mode="popLayout">
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                className="grid place-items-center"
              >
                {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="h-[calc(100dvh-4rem)] overflow-y-auto bg-ink md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 pt-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[56px] items-center border-b border-white/[0.06] text-2xl font-semibold text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="container-page pt-8">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                Start a project
                <ArrowUpRight size={18} strokeWidth={2.25} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

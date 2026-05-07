import { motion } from "framer-motion";
import { Accordion } from "../ui/Accordion";
import { faqs } from "../../data/faq";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const FAQ = () => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="faq"
      className="py-20 relative z-10 bg-white border-t border-gray-100"
    >
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-orange mb-3 font-semibold">
            FAQ'S
          </span>
          <h2
            className="font-syne font-extrabold text-gray-900 tracking-tight mb-3"
            style={{ fontSize: "clamp(1.7rem, 4vw, 2.5rem)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto font-sans">
            Answers to common questions about our services and process.
          </p>
        </div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-brand-blue rounded-xl shadow-sm border border-blue/5 p-0 md:p-2">
            <Accordion items={faqs} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
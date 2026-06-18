import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../../data/faq";

// Build JSON-LD schema from the same data array
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const FAQ = () => {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section
      id="faq"
      className="py-24 relative z-10 bg-[#FAFAFA] border-t border-gray-100 overflow-hidden"
    >
      {/* JSON-LD FAQ Schema for Google rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-orange/[0.03] rounded-full blur-[120px] pointer-events-none"
        style={{
          WebkitBackfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      />

      <div className="max-w-[1100px] mx-auto px-5 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-orange font-semibold mb-4 block">
              FAQ
            </span>
            <h2
              className="font-syne font-extrabold text-[#0A1628] tracking-tight"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                lineHeight: 1.1,
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <p className="font-sans text-gray-400 text-[14px] max-w-[260px] md:text-right leading-relaxed">
            Everything you need to know before we start working together.
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-brand-orange/30 shadow-[0_4px_20px_rgba(249,115,22,0.08)]"
                    : "border-gray-100 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white"
                >
                  <span
                    className={`font-syne font-bold text-[15px] leading-snug transition-colors duration-300 ${isOpen ? "text-brand-orange" : "text-[#0A1628]"}`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-orange text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6 bg-white">
                        <div className="w-full h-px bg-gray-100 mb-4" />
                        <p className="font-sans text-gray-500 text-[14px] leading-[1.85]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center font-sans text-[13px] text-gray-400 mt-12"
        >
          Still have questions?{" "}
          <a
            href="#contact"
            className="text-brand-orange font-semibold hover:underline underline-offset-2 transition-all"
          >
            Let's talk →
          </a>
        </motion.p>
      </div>
    </section>
  );
};

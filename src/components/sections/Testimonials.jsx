import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const Testimonials = () => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.15 });

  return (
    <section className="py-24 relative z-10 bg-brand-blue overflow-hidden border-t border-white/5">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-orange/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-orange font-semibold">
            Testimonials
          </span>
          <h2
            className="font-syne font-extrabold text-white tracking-tight mt-3"
            style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", lineHeight: 1.1 }}
          >
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col gap-5 border border-white/10 rounded-2xl p-7 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={13} fill="#F97316" className="text-brand-orange" />
                ))}
              </div>

              {/* Review */}
              <p className="font-sans text-white/65 text-[14px] leading-[1.8] flex-grow">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.08]">
                <div className="w-10 h-10 rounded-full bg-brand-orange/15 border border-brand-orange/20 flex items-center justify-center shrink-0 overflow-hidden">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-syne font-bold text-[15px] text-brand-orange">
                      {t.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-syne font-bold text-white text-[13.5px] leading-tight">
                    {t.name}
                  </h4>
                  <p className="font-sans text-white/35 text-[12px] mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
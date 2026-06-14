import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const Testimonials = () => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-28 relative z-10 bg-white overflow-hidden border-t border-black/[0.06]">

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,107,43,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-brand-orange rounded-full" />
              <span className="font-syne text-[11px] uppercase tracking-[0.25em] text-brand-orange font-semibold">
                Testimonials
              </span>
            </div>
            <h2
              className="font-syne font-extrabold text-gray-900 tracking-tight"
              style={{ fontSize: "clamp(1.9rem, 4vw, 2.8rem)", lineHeight: 1.1 }}
            >
              What Our Clients Say
            </h2>
            <p className="font-sans text-gray-400 text-[14px] mt-3 max-w-[420px] leading-relaxed">
              Don't take our word for it — hear directly from the people we've worked with.
            </p>
          </div>

          {/* Star summary pill */}
          <div
            className="shrink-0 inline-flex items-center gap-3 px-5 py-3 rounded-full"
            style={{
              background: "rgba(255,107,43,0.06)",
              border: "1px solid rgba(255,107,43,0.15)",
            }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} fill="#FF6B2B" className="text-brand-orange" />
              ))}
            </div>
            <span className="font-syne font-bold text-gray-800 text-[13px]">5.0</span>
            <span className="font-sans text-gray-400 text-[12px]">
              from {testimonials.length}+ reviews
            </span>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 cursor-default"
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
                padding: "28px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.1)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(255,107,43,0.22)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 1px 6px rgba(0,0,0,0.05)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
              }}
            >
              {/* Top row: stars + quote icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={12} fill="#FF6B2B" className="text-brand-orange" />
                  ))}
                </div>
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: "32px",
                    height: "32px",
                    background: "rgba(255,107,43,0.07)",
                  }}
                >
                  <Quote size={14} className="text-brand-orange" />
                </div>
              </div>

              {/* Review text */}
              <p
                className="font-sans text-gray-600 leading-relaxed flex-grow"
                style={{ fontSize: "13.5px", lineHeight: "1.75" }}
              >
                "{t.content}"
              </p>

              {/* Author */}
              <div
                className="flex items-center gap-3 mt-6 pt-5"
                style={{ borderTop: "1px solid #f1f1f1" }}
              >
                <div
                  className="shrink-0 flex items-center justify-center rounded-full overflow-hidden"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "rgba(255,107,43,0.1)",
                    border: "2px solid rgba(255,107,43,0.2)",
                  }}
                >
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-syne font-bold text-brand-orange" style={{ fontSize: "15px" }}>
                      {t.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="font-syne font-bold text-gray-900" style={{ fontSize: "13.5px" }}>
                    {t.name}
                  </h4>
                  <p className="font-sans text-gray-400 mt-0.5" style={{ fontSize: "12px" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
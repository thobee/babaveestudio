import { motion } from "framer-motion";
import { services } from "../../data/services";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

export const Services = () => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="services"
      className="py-28 relative z-10 bg-gradient-to-b from-[#0A1628] to-[#101C36] border-t border-white/5"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Enhanced Split Header Layout */}
        <div className="flex flex-col items-center text-center gap-6 mb-20">
          <span className="font-mono text-[13px] uppercase tracking-[0.25em] text-brand-orange mb-3 block ">
            BENEFITS
          </span>

          <div className="h-1 w-16 bg-brand-orange rounded-full mt-2 mb-1 opacity-80 mx-auto" />
          <p className="font-sans text-gray-300 text-base leading-relaxed mt-2 max-w-xl mx-auto">
            Unlock a world of creative possibilities with a flexible, on-demand
            design team tailored to your business needs.
          </p>
        </div>

        {/* 4-column dense grid with enhanced cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center"
        >
          {services.slice(0, 8).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative bg-[#131F3A]/80 border border-white/10 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 w-full max-w-[370px] flex flex-col items-center text-center"
              >
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors">
                  <Icon
                    size={38}
                    className="text-brand-orange drop-shadow-md"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="font-syne font-bold text-xl text-white mb-3 flex items-center gap-2 justify-center">
                  <span className="text-brand-orange/60 font-mono text-base">
                    {index + 1}.
                  </span>{" "}
                  {service.title}
                </h3>
                <p className="font-sans text-gray-300 text-base leading-relaxed mb-2">
                  {service.description}
                </p>
                {/* Subtle hover effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-brand-orange opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

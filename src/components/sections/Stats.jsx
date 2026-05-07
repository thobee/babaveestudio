import { motion } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Stats = () => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.15 });

  const stats = [
    { label: 'Projects Delivered', value: 50, suffix: '+' },
    { label: 'Happy Clients', value: 30, suffix: '+' },
    { label: 'Years Experience', value: 3, suffix: '+' },
    { label: 'Satisfaction Rate', value: 100, suffix: '%' },
  ];

  return (
    <section className="relative z-10 bg-[#0A1628] py-24 border-t border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[200px] bg-brand-orange/5 blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-brand-card/30 border border-white/10 rounded-3xl p-8 md:p-10 text-center overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500"
            >
              {/* Subtle animated border top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent opacity-50 group-hover:opacity-100 group-hover:scale-x-110 transition-all duration-500 origin-left" />

              {/* Number Container */}
              <div className="relative z-10 mb-2">
                <span className="font-syne font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-sm tracking-tight"
                  style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: '1.1' }}>
                  <AnimatedCounter to={stat.value} duration={2.5} />
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <div className="relative z-10 font-mono text-[11px] sm:text-xs text-brand-orange uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </div>

              {/* Hover Glow Behind Text */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/0 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

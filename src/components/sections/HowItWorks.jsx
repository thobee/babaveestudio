import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const HowItWorks = () => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.15 });

  const steps = [
    { number: '01', title: 'Discovery', description: 'We deep-dive into your goals, audience, and requirements to define the perfect path forward.' },
    { number: '02', title: 'Design', description: 'We prototype and design high-fidelity interfaces that are intuitive, beautiful, and brand-aligned.' },
    { number: '03', title: 'Build', description: 'Our engineers build your product with modern, scalable tech — clean code, no shortcuts.' },
    { number: '04', title: 'Launch', description: 'Rigorous QA and a seamless go-live. We monitor, iterate, and support beyond launch day.' },
  ];

  return (
    <section className="py-32 relative z-10 bg-white border-t border-gray-100 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[100px] bg-brand-orange/[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-600 font-semibold">
              Our Process
            </span>
          </div>
          
          <h2 className="font-sans font-bold text-[#0A1628] tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: '1.1' }}>
            How We Work
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative group flex flex-col items-start text-left border-t border-gray-200 pt-8 hover:border-brand-orange transition-colors duration-500"
            >
              {/* Ultra Minimal Step Number */}
              <span className="font-mono font-medium text-brand-orange text-[13px] mb-4 tracking-[0.2em] uppercase">
                Phase {step.number}
              </span>

              <h3 className="font-sans font-bold text-[#0A1628] text-xl md:text-2xl mb-4 group-hover:text-brand-orange transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="font-sans text-gray-500 text-[15px] leading-relaxed pr-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

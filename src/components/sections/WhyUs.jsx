import { motion } from 'framer-motion';
import { Rocket, Diamond, RefreshCcw, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const WhyUs = () => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.15 });

  const reasons = [
    {
      icon: Rocket,
      title: 'Takes a few days to start',
      description: 'Sign up and get access to our portal. Submit your project requirements to start.',
      step: '01',
    },
    {
      icon: Diamond,
      title: 'Dedicated team on time',
      description: 'Get your own dedicated development team, tailored to your specific needs.',
      step: '02',
    },
    {
      icon: RefreshCcw,
      title: 'Revisions made simple',
      description: 'Submit feedback and we will iterate until you are 100% satisfied with the result.',
      step: '03',
    },
  ];

  return (
    <section className="py-32 relative z-10 bg-brand-blue border-b border-white/5 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-orange">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-sans font-bold text-white tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', lineHeight: '1.05' }}>
              Get a dedicated development team at a fraction of the cost.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md lg:pb-2 flex flex-col items-start lg:items-end text-left lg:text-right"
          >
            <p className="font-sans text-gray-400 text-[15px] leading-relaxed mb-8">
              Grow your business with a specific team for a flat monthly fee. Work with senior developers. Subscribe and build as many requests as you need. No limits.
            </p>
            <button className="group relative inline-flex items-center gap-2 bg-brand-orange text-white font-sans font-medium px-8 py-4 rounded-full text-sm overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,107,43,0.4)]">
              <span className="relative z-10">See Pricing</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
          </motion.div>
        </div>

        {/* 3 Steps layout */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-8 lg:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-orange/30 transition-all duration-500 overflow-hidden flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
              >
                {/* Background Number */}
                <div className="absolute -top-6 -right-6 text-[120px] font-bold font-sans text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-500 pointer-events-none leading-none">
                  {r.step}
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-500">
                    <Icon size={24} className="text-brand-orange group-hover:text-white transition-colors duration-500" />
                  </div>

                  <h3 className="font-sans font-semibold text-white text-2xl mb-4 tracking-tight group-hover:text-brand-orange transition-colors duration-300">{r.title}</h3>
                  <p className="font-sans text-gray-400 text-[15px] leading-relaxed">
                    {r.description}
                  </p>
                </div>
                
                {/* Bottom line indicator */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-orange group-hover:w-full transition-all duration-700 ease-out" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


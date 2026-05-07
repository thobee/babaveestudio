import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const Pricing = () => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.1 });

  const plans = [
    {
      name: 'Standard',
      tag: 'Most Popular',
      price: '$2,995/m',
      period: 'Pause or cancel anytime',
      desc: 'One request at a time. Suitable for most companies.',
      features: [
        'One active task at a time',
        'Unlimited revisions',
        'Dedicated project manager',
        'Daily comms (Slack/Email)',
        'Work with senior designers',
        '3-5 days turnaround time',
        'Pause or cancel'
      ],
      highlighted: false
    },
    {
      name: 'Growth',
      tag: 'Save 20%',
      price: '$4,795/m',
      period: 'Pause or cancel anytime',
      desc: 'Two requests at a time. Ideal for fast growing companies.',
      features: [
        'Two active tasks at a time',
        'Unlimited revisions',
        'Dedicated project manager',
        'Daily comms (Slack/Email)',
        'Work with senior designers',
        '3-5 days turnaround time',
        'Pause or cancel'
      ],
      highlighted: true
    },
    {
      name: 'Pro + Weekly',
      price: '$890/w',
      period: 'Pause or cancel anytime',
      desc: 'Weekly pricing for those who only need short term help.',
      features: [
        'One active task at a time',
        'Unlimited revisions',
        'Dedicated project manager',
        'Daily comms (Slack/Email)',
        'Work with senior designers',
        '3-5 days turnaround time',
        'Pause or cancel'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-28 relative z-10 bg-brand-blue border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-orange mb-4">
            CLEAR, SIMPLE PRICING
          </span>
          <h2 className="font-syne font-extrabold text-white tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Simple pricing to level up your brand.
          </h2>
          <p className="font-sans text-gray-400 text-sm max-w-xl">
            Choose a plan that works best for you and your team.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-3xl p-8 lg:p-10 border ${
                plan.highlighted 
                  ? 'bg-brand-card/80 border-brand-orange shadow-[0_0_40px_rgba(255,107,43,0.15)] md:-translate-y-4' 
                  : 'bg-[#0f1d35] border-white/10'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-syne font-bold text-white text-2xl">{plan.name}</h3>
                {plan.tag && (
                  <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-semibold rounded-full uppercase tracking-wider font-mono">
                    {plan.tag}
                  </span>
                )}
              </div>
              
              <p className="font-sans text-gray-400 text-sm mb-6 h-10">
                {plan.desc}
              </p>
              
              <div className="mb-8">
                <span className="font-syne font-extrabold text-white text-4xl">{plan.price}</span>
                <p className="text-gray-500 font-sans text-xs mt-2">{plan.period}</p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={18} className="text-brand-orange shrink-0 mt-0.5" />
                    <span className="font-sans text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-full font-sans font-semibold text-sm transition-all ${
                plan.highlighted
                  ? 'bg-brand-orange text-white hover:scale-105 shadow-lg shadow-brand-orange/20'
                  : 'bg-transparent border border-white/20 text-white hover:border-brand-orange hover:text-brand-orange'
              }`}>
                {plan.highlighted ? 'Choose Plan' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

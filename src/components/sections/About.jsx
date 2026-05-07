import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const About = () => {
  const [ref, inView] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 relative z-10 bg-brand-blue">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div ref={ref} className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <SectionTitle 
              title="Who We Are" 
              badge="About Us"
              alignment="start"
            />
            <div className="space-y-6 text-gray-400 font-sans text-lg leading-relaxed">
              <p>
                BabaVee Studio is a web development agency built for ambitious brands. We combine clean code, smart design, and strategic thinking to create digital experiences that convert visitors into customers.
              </p>
              <p>
                We believe that a website should be more than just an online brochure. It should be a powerful tool that drives business growth. That's why every project we take on is built with performance, accessibility, and scalability in mind.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="border-l-2 border-brand-orange pl-4 bg-brand-card/20 p-4 rounded-r-xl border-t border-b border-r border-white/5">
                <h4 className="font-syne font-bold text-white text-xl mb-2">Our Mission</h4>
                <p className="text-sm text-gray-400">To build digital products that actually work and drive tangible results.</p>
              </div>
              <div className="border-l-2 border-brand-orange pl-4 bg-brand-card/20 p-4 rounded-r-xl border-t border-b border-r border-white/5">
                <h4 className="font-syne font-bold text-white text-xl mb-2">Our Vision</h4>
                <p className="text-sm text-gray-400">To be the trusted technical partner for forward-thinking businesses.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square border border-white/10 glass-card">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-blue mix-blend-overlay z-10"></div>
              <img 
                src="https://placehold.co/800x800/1A2B45/FFFFFF.png?text=Agency+Team" 
                alt="BabaVee Studio Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const techs = ['React.js','Node.js','Next.js','MongoDB','Tailwind CSS','TypeScript','Express','Firebase','Figma', 'Webflow'];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-blue pt-20">

    {/* Premium Background Effects */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Primary Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-[100%] bg-brand-orange/5 blur-[120px]" />
      <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-orange/5 blur-[150px]" />
      
      {/* Architectural Grid */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 100% 100% at 50% 30%, black 10%, transparent 80%)'
        }} />
    </div>

    <motion.div
      variants={container} initial="hidden" animate="visible"
      className="relative z-10 flex flex-col items-center text-center px-4 md:px-8 max-w-6xl mx-auto w-full mt-10"
    >
      {/* Premium Badge */}
      <motion.div variants={item}>
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 backdrop-blur-md mb-8 lg:mb-10 hover:bg-brand-orange/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
          </span>
          <span className="font-mono text-[10px] sm:text-xs text-brand-orange/90 uppercase tracking-[0.2em] font-medium">
            Full-Stack Web Development Agency
          </span>
        </div>
      </motion.div>

      {/* Hero Headline */}
      <motion.h1 variants={item}
        className="font-hero font-extrabold text-white leading-[1.05] tracking-tight mb-8"
        style={{ fontSize: 'clamp(3.2rem, 8vw, 7rem)', letterSpacing: '-0.02em' }}
      >
        Bringing Your <br className="hidden sm:block" /> Dream Into{' '}
        <span className="relative inline-block">
          <span className="absolute -inset-2 bg-brand-orange/20 blur-2xl rounded-full" />
          <span
            className="relative text-transparent bg-clip-text italic pr-2 sm:pr-4 drop-shadow-[0_0_15px_rgba(255,107,43,0.5)]"
            style={{ backgroundImage: 'linear-gradient(to right, #FF6B2B, #FFB060, #FF6B2B)', backgroundSize: '200% auto', animation: 'shine 4s linear infinite' }}
          >
            Reality
          </span>
          <span className="text-brand-orange absolute -top-4 -right-6 sm:-top-8 sm:-right-10 text-3xl sm:text-5xl animate-pulse">✨</span>
        </span>
      </motion.h1>

      <style>{`
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>

      {/* Subheadline */}
      <motion.p variants={item} className="font-sans text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed mb-10">
        Fast, scalable websites and apps built for businesses that mean business. <br className="hidden md:block"/> Clean code. Stunning design. Real results.
      </motion.p>

      {/* CTAs */}
      <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-20 w-full sm:w-auto">
        <a href="#contact" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-brand-orange text-white font-sans font-bold text-sm sm:text-base px-8 h-14 rounded-full shadow-[0_0_30px_rgba(255,107,43,0.4)] hover:shadow-[0_0_50px_rgba(255,107,43,0.6)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">Start a Project</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            {/* Button sweep effect */}
            <div className="absolute inset-0 h-full w-0 bg-white/20 group-hover:w-full transition-all duration-300 ease-out z-0 skew-x-12 -ml-4" />
          </button>
        </a>
        <a href="#work" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-transparent text-white font-sans font-semibold text-sm sm:text-base px-8 h-14 rounded-full border border-white/20 hover:bg-white/5 hover:border-white/40 hover:-translate-y-1 transition-all duration-300">
            View Our Work <ArrowUpRight size={16} />
          </button>
        </a>
      </motion.div>
    </motion.div>

    {/* Premium Marquee */}
    <div className="w-full overflow-hidden border-t border-b border-white/5 py-5 bg-brand-blue/50 backdrop-blur-md relative z-10 mt-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-transparent to-brand-blue z-20 pointer-events-none" />
      <div className="flex w-max animate-[scroll_30s_linear_infinite] gap-8 sm:gap-12 px-6">
        {[...techs,...techs, ...techs].map((t,i) => (
          <span key={i} className="inline-flex items-center gap-3 font-syne font-bold text-lg sm:text-xl text-white/30 whitespace-nowrap hover:text-brand-orange transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-brand-orange/40" />
            {t}
          </span>
        ))}
      </div>
    </div>
  </section>
);
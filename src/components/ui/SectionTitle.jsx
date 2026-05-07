import { motion } from 'framer-motion';
import { Badge } from './Badge';

export const SectionTitle = ({ title, subtitle, badge, alignment = 'none' }) => {
  const containerClass = alignment === 'center' ? 'text-center mx-auto' : 'text-left';
  const subtitleClass = alignment === 'center' ? 'mx-auto' : '';

  return (
    <div className={`mb-16 ${containerClass}`}>
      {badge && <Badge className="mb-4">{badge}</Badge>}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold mb-6 text-white tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ delay: 0.1 }}
          className={`text-gray-400 text-lg md:text-xl max-w-2xl font-sans ${subtitleClass}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

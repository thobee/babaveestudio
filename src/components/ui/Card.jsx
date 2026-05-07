import { motion } from 'framer-motion';

export const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      className={`glass-card p-8 rounded-2xl transition-all duration-300 ${hover ? 'hover:-translate-y-2 hover:border-brand-orange/50' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

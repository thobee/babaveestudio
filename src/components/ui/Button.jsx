import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center font-sans font-medium rounded-full transition-all duration-300 px-6 py-3 cursor-pointer";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-[#e05e26] shadow-lg shadow-brand-orange/20",
    outline: "border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white",
    ghost: "text-white hover:text-brand-orange bg-transparent"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

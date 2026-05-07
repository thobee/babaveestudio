export const Badge = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-orange/10 text-brand-orange border border-brand-orange/20 ${className}`}>
      {children}
    </span>
  );
};

export const Marquee = ({ children }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap flex group relative h-20 items-center">
      <div className="absolute top-0 left-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-brand-blue to-transparent"></div>
      <div className="absolute top-0 right-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-brand-blue to-transparent"></div>
      
      <style>{`
        @keyframes scrollX {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scrollX 20s linear infinite;
        }
      `}</style>
      
      <div className="animate-marquee flex gap-12 pr-12 items-center flex-nowrap w-[200%] sm:gap-24 sm:pr-24">
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};

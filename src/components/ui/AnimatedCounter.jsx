import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const AnimatedCounter = ({ from = 0, to, duration = 2 }) => {
  const [ref, inView] = useScrollAnimation({ triggerOnce: true, threshold: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView && !hasAnimated) {
      const animation = animate(count, to, { duration: duration });
      setHasAnimated(true);
      return animation.stop;
    }
  }, [inView, count, to, duration, hasAnimated]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

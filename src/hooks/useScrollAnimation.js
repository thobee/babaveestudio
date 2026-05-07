import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (options = { threshold: 0.2, triggerOnce: true }) => {
  const { ref, inView } = useInView(options);
  return [ref, inView];
};

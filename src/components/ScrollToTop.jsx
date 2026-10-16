import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isVisible && (
          <m.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.25 }}
            aria-label="Scroll to top of page"
            title="Scroll to top"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full
              bg-white/80 dark:bg-gray-800/80 backdrop-blur-md
              border border-slate-200 dark:border-gray-700
              hover:border-cyan-500/60 dark:hover:border-cyan-400/60
              text-slate-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400
              shadow-lg shadow-slate-300/40 dark:shadow-black/50
              hover:shadow-cyan-500/20
              transition-colors duration-200 group"
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </m.button>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};

export default ScrollToTop;


import { motion, AnimatePresence } from 'framer-motion';

export default function PageTransitionWrapper({ children }) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={window.location.pathname}
        initial={{ x: '100vw', zIndex: 0}}
        animate={{ x: '0', zIndex: 1}}
        exit={{ x: '-100vw', zIndex: 0}}
        transition={{ type: 'spring', stiffness: 400, damping: 30}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

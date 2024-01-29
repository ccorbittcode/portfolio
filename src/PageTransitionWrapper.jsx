import { motion } from 'framer-motion';

export default function PageTransitionWrapper({ children, location }) {
  return (
      <motion.div
        key={location}
        initial={{ x: '-100vw' }}
        animate={{ x: '0' }}
        exit={{ x: '-100vw' }}
        transition={{ type: 'spring', stiffness: 400, damping: 45 }}
      >
        {children}
      </motion.div>
  );
}

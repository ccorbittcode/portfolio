import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Cover() {
  const [isVisible, setIsVisible] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setIsContentVisible(true);
    }, 500); // Change this to control the delay before the content fades in

    const coverTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // Change this to control the delay before the cover slides off

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(coverTimer); // Clean up the timers
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 1 }} // Change this to control the speed of the slide off animation
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'black', zIndex: 100 }}
    >
      <motion.img
        src="/portfolio/kirbyclout.png"
        className="covericon"
        initial={{ opacity: 0 }}
        animate={{ opacity: isContentVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }} // Change this to control the speed of the fade in animation
      />
    </motion.div>
  );
}

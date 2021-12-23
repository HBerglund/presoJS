import classNames from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

interface BlurBlobProps {
  position: 1 | 2 | 3 | 4;
  color: 'primary' | 'secondary' | 'tertiary';
  size: 'large' | 'small';
}

const BlurBlob = ({ position, color, size }: BlurBlobProps) => {
  const getPosition = () => {
    switch (position) {
      case 1:
        return 'top-[-20%] left-[-25%]';
      case 2:
        return 'top-[-20%] right-[-25%]';
      case 3:
        return 'bottom-[-20%] right-[-25%]';
      case 4:
        return 'bottom-[-20%] left-[-25%]';
    }
  };
  const getColor = () => {
    switch (color) {
      case 'primary':
        return 'from-primary';
      case 'secondary':
        return 'from-secondary';
      case 'tertiary':
        return 'from-tertiary';
    }
  };

  const getSize = () => {
    switch (size) {
      case 'large':
        return 'w-[60vw] h-[60vw]';
      case 'small':
        return 'w-[40vw] h-[40vw]';
    }
  };

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
    >
      <motion.div
        initial={{ opacity: 0.5, scale: 1, y: '-10%', x: '-10%' }}
        animate={{ opacity: 0.3, scale: 0.8, y: '20%', x: '10%' }}
        transition={{
          duration: 7,
          delay: 3,
          repeatType: 'mirror',
          repeat: Infinity,
        }}
        className={classNames(
          getSize(),
          getPosition(),
          getColor(),
          'fixed bg-gradient-radial z-0 blur-4xl rounded-full skew-y-12'
        )}
      ></motion.div>
    </motion.div>
  );
};

export default BlurBlob;

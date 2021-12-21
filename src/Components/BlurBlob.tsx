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
        return 'bottom-[-20%] right-[-25%]';
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
  console.log('hej');

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
      className={classNames(
        getSize(),
        getPosition(),
        getColor(),
        'fixed bg-gradient-radial z-0 blur-3xl rounded-full skew-y-12'
      )}
    ></motion.div>
  );
};

export default BlurBlob;

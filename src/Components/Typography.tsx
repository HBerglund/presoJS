import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface TypographyProps {
  children: React.ReactNode;
  size: 'sm' | 'md' | 'lg' | 'xl';
  splitOn?: 'words' | 'chars';
  overflowHidden?: true;
  animateFrom?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-left'
    | 'top-right';
}

const Typography: React.FC<TypographyProps> = ({
  children,
  size,
  splitOn,
  overflowHidden,
  animateFrom,
}) => {
  const getElements = () => {
    if (splitOn === 'words') {
      return children?.toString().split('((?<=\\s+)|(?=\\s+))');
    }
    if (splitOn === 'chars') {
      return children?.toString().split(/(?!$)/u);
    }
    return ['Victor'];
  };

  const stringArr = getElements();

  const getOverflow = () => {
    if (overflowHidden) {
      return 'overflow-hidden';
    }
    return '';
  };

  const getSize = () => {
    switch (size) {
      case 'sm':
        return 'text-sm';
      case 'md':
        return 'text-md';
      case 'lg':
        return 'text-lg';
      case 'xl':
        return 'text-xl';
    }
  };

  // NEED DEFAULT
  const getAnimation = () => {
    switch (animateFrom) {
      case 'top':
        return { y: 50 };
      case 'bottom':
        return { y: -50 };
      case 'left':
        return { x: 50 };
      case 'right':
        return { x: -50 };
      case 'top-left':
        return { x: 50, y: 50 };
      case 'top-right':
        return { x: -50, y: 50 };
      case 'bottom-left':
        return { x: 50, y: -50 };
      case 'bottom-right':
        return { x: -50, y: -50 };
    }
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: {x: 100, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  if (stringArr?.length) {
    return (
      <motion.div
        variants={container}
        initial='hidden'
        animate={stringArr.length > 0 && 'visible'}
      >
        {stringArr.map((el, i) => (
          <motion.span
            key={i}
            variants={item}
            className={classNames('text-textPrimary', getSize())}
          >
            {el}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  console.log('got here');

  return (
    <motion.span
      initial={{ x: -100 }}
      animate={{ x: 0, y: 0 }}
      transition={{ duration: 2 }}
      className={classNames('text-textPrimary', getSize())}
    >
      {children}
    </motion.span>
  );
};

export default Typography;

import React from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  children: React.ReactNode;
  splitOn?: 'words' | 'chars';
  delay?: number;
  staggerChildren?: true;
  disableAnimations?: boolean;
  className?: string;
  animation?: 'top' | 'bottom' | 'opacity-left' | 'opacity-right';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  splitOn,
  delay,
  staggerChildren,
  className,
  animation,
  disableAnimations,
}) => {
  const getElements = () => {
    if (splitOn === 'words') {
      return children?.toString().split(/(\s+)/);
    }
    if (splitOn === 'chars') {
      return children?.toString().split(/(?!$)/u);
    }
    return children?.toString();
  };

  const elements = getElements();

  // NEED DEFAULT
  const getAnimation = () => {
    switch (animation) {
      case 'top':
        return { x: 0, y: '-105%' };
      case 'bottom':
        return { x: 0, y: '105%' };
      case 'opacity-left':
        return { x: '-15%', y: '50%', opacity: 0 };
      case 'opacity-right':
        return { x: '15%', y: '50%', opacity: 0 };
      default:
        return '';
    }
  };

  const parentAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: delay || 0,
        when: 'beforeChildren',
        staggerChildren: staggerChildren ? 0.015 : 0.005,
      },
    },
  };

  const childAnimation = {
    hidden: getAnimation() || {},
    visible: (i: number) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: i < 10 ? 0.7 + i * 0.01 : 1,
        ease:
          animation === 'top' || animation === 'bottom'
            ? [0.2, 0.9, 0.6, 1]
            : [0.7, 0.4, 0.3, 0.8],
      },
    }),
  };

  if (disableAnimations || !Array.isArray(elements)) {
    return <span className={classNames(className)}>{elements}</span>;
  }

  return (
    <motion.div
      variants={parentAnimation}
      initial='hidden'
      animate='visible'
      className='flex flex-wrap'
    >
      {elements.map((el, i) => (
        <div
          style={
            animation === 'top' || animation === 'bottom'
              ? { overflow: 'hidden' }
              : {}
          }
          className='pt-1'
        >
          <motion.span
            key={i}
            variants={childAnimation}
            custom={i}
            className={classNames(className, 'keepSpanWrap')}
          >
            {el}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
};

export default AnimatedText;

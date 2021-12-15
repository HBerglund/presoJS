import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import SlideParent from '../Components/SlideParent';
import { motion } from 'framer-motion';
import { DirectionContext } from '../Context/DirectionContext';

interface TextSlideProps {
  alignYX?: 'topLeft' | 'topCenter' | 'centerCenter';
  title?: string;
  subTitle?: string;
  paragraph?: string;
}

const TextSlide = ({ alignYX, title, subTitle, paragraph }: TextSlideProps) => {
  const directionContext = useContext(DirectionContext);
  console.log(directionContext.direction);

  const getAlignment = () => {
    switch (alignYX) {
      case 'topCenter':
        return 'items-center';
      case 'centerCenter':
        return 'items-center justify-center';
      default:
        return '';
    }
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      exit={{ x: '-100%' }}
      transition={{ duration: 1 }}
    >
      <SlideParent>
        <div className={classNames('h-full flex flex-col', getAlignment())}>
          {title && <span className='text-textPrimary text-xl'>{title}</span>}
          {subTitle && (
            <span className='text-textPrimary text-lg mb-8'>{subTitle}</span>
          )}
          {paragraph && (
            <span className='text-textPrimary text-body'>{paragraph}</span>
          )}
        </div>
      </SlideParent>
    </motion.div>
  );
};

export default TextSlide;

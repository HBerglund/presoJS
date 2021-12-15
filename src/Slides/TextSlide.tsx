import React, { useContext } from 'react';
import classNames from 'classnames';
import SlideParent from '../Components/SlideParent';
import { motion } from 'framer-motion';
import { DirectionContext } from '../Context/DirectionContext';
import { v4 as uuidv4 } from 'uuid';

interface TextSlideProps {
  alignYX?: 'topLeft' | 'topCenter' | 'centerCenter';
  title?: string;
  subTitle?: string;
  paragraph?: string;
}

const TextSlide = ({ alignYX, title, subTitle, paragraph }: TextSlideProps) => {
  const id = uuidv4();
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
      key={id}
      initial={{
        x: directionContext.direction === 'forward' ? '100%' : '-100%',
      }}
      animate={{ x: '0%' }}
      exit={{
        x: directionContext.direction === 'forward' ? '-100%' : '100%',
      }}
      transition={{ duration: 0.5 }}
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

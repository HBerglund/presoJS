import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { DirectionContext } from '../Context/DirectionContext';
import Image from './Image';

type CarouselSlideProps = {
  content?: string;
  name?: string;
  imageUrl?: string;
};

const CarouselSlideCard: FC<CarouselSlideProps> = ({
  content,
  name,
  imageUrl,
}: CarouselSlideProps) => {
  const directionContext = useContext(DirectionContext);
  return (
    <div className='flex items-center bg-primary p-20 rounded-3xl border-2'>
      <div className={classNames('flex flex-col')}>
        {content && (
          <motion.span
            className={classNames('text-textPrimary text-body')}
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 1, scale: 0.5, rotate: 180 }}
            transition={{ duration: 1 }}
          >
            {content}
          </motion.span>
        )}
        {name && (
          <motion.span
            className={classNames(
              'text-textSecondary text-body text-right mt-4'
            )}
            initial={{
              opacity: 0,
              x: '-50%',
              scale: 0.5,
            }}
            animate={{ opacity: 1, x: '0%', scale: 1 }}
            exit={{
              opacity: 0,
              x: '100%',
              scale: 0.5,
            }}
            transition={{ duration: 1 }}
          >
            {name}
          </motion.span>
        )}
      </div>
      {imageUrl && (
        <motion.div
          className={classNames('absolute top-2/3 right-3/4')}
          initial={{
            opacity: 0,
            y: directionContext.direction === 'forward' ? '-400%' : '400%',
            scale: 0.5,
            rotate: directionContext.direction === 'forward' ? 180 : -180,
          }}
          animate={{ opacity: 1, y: '0%', x: '100', scale: 1, rotate: 0 }}
          exit={{
            opacity: 0,
            y: '0%',
          }}
          transition={{ duration: 1 }}
        >
          <div className={classNames('border-2 rounded-full')}>
            <Image border size='sm' imageUrl={imageUrl} />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CarouselSlideCard;

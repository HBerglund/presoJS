import React, { FC } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import Image from './Image';

type CarouselSlideProps = {
  content?: string;
  name?: string;
  role?: string;
  imageUrl?: string;
  disableAnimations?: boolean;
};

const CarouselSlideCard: FC<CarouselSlideProps> = ({
  content,
  name,
  role,
  imageUrl,
  disableAnimations,
}: CarouselSlideProps) => {
  const cardTextAnimation = {
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
    hidden: { opacity: 0 },
  };
  const cardImageAnimation = {
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0 },
  };

  return (
    <div className='bg-gradient-to-r from-black to-transparent p-12 rounded-3xl border-2'>
      <motion.div
        className={classNames('flex flex-col')}
        variants={cardTextAnimation}
        initial='hidden'
        animate='visible'
      >
        {content && (
          <AnimatedText
            disableAnimations={disableAnimations}
            className='text-textPrimary sansBody text-xs'
            splitOn='words'
            staggerChildren
            animation='bottom'
          >
            {content}
          </AnimatedText>
        )}
        {name && (
          <span
            className={classNames(
              'gradientMask from-primary to-secondary sansHeading text-xs mt-8'
            )}
          >
            {name}
          </span>
        )}
        {role && (
          <span
            className={classNames(
              'text-textSecondary sansHeading text-xs mt-2'
            )}
          >
            {role}
          </span>
        )}
      </motion.div>
      {imageUrl && (
        <div className={classNames('fixed')}>
          <motion.div
            className={classNames('absolute -top-24 left-144')}
            key={imageUrl}
            variants={cardImageAnimation}
            initial='hidden'
            animate='visible'
          >
            <div className={classNames('border-2 rounded-full')}>
              <Image border size='sm' imageUrl={imageUrl} />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CarouselSlideCard;

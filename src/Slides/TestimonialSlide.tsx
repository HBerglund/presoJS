import React, { FC } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import SlideParent from '../Components/SlideParent';
import Image from '../Components/Image';

type TestimonialSlideProps = {
  preHeading: string;
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
};

const TestimonialSlide: FC<TestimonialSlideProps> = ({
  preHeading,
  quote,
  name,
  role,
  imageUrl,
}: TestimonialSlideProps) => {
  const testimonialAnimation = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: { opacity: 0 },
  };

  return (
    <SlideParent>
      <motion.div
        className='h-full flex justify-center items-center p-16'
        key={quote}
        variants={testimonialAnimation}
        initial='hidden'
        animate='visible'
      >
        <div className={classNames('flex flex-col p-8')}>
          {preHeading && (
            <div
              className={classNames(
                'text-textPrimary serifHeading text-xs mb-4'
              )}
            >
              {preHeading}
            </div>
          )}
          {quote && (
            <div className={classNames('text-textPrimary sansBody text-sm')}>
              {quote}
            </div>
          )}
          {name && (
            <div
              className={classNames(
                'gradientMask from-primary to-secondary sansHeading text-xs mt-8'
              )}
            >
              {name}
            </div>
          )}
          {role && (
            <div
              className={classNames(
                'text-textSecondary sansHeading text-xs mt-2'
              )}
            >
              {role}
            </div>
          )}
        </div>
        {imageUrl && (
          <div className={classNames('')}>
            <div className={classNames('p-8')}>
              <Image border size='lg' imageUrl={imageUrl} />
            </div>
          </div>
        )}
      </motion.div>
    </SlideParent>
  );
};

export default TestimonialSlide;

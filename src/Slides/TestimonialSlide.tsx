import React, { FC } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import AnimatedText from '../Components/AnimatedText';
import BlurBlob from '../Components/BlurBlob';
import SlideParent from '../Components/SlideParent';
import Image from '../Components/Image';

type TestimonialSlideProps = {
  preHeading: string;
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
  disableAnimations?: boolean;
};

/**
 * @property {string} preHeading - Pre heading displayed text-xs and text-textPrimary color.
 * @property {string} quote - Quote displayed text-sm and text-textPrimary color.
 * @property {string} name - Author of the quote displayed text-xs and gradient color.
 * @property {string} role - Role of the author displayed text-xs and text-textSecondary color.
 * @property {string} imageUrl - Url address for the image.
 * @property {string} disableAnimations - If true, no text animations are shown for text.
 */
const TestimonialSlide: FC<TestimonialSlideProps> = ({
  preHeading,
  quote,
  name,
  role,
  imageUrl,
  disableAnimations,
}: TestimonialSlideProps) => {
  const testimonialTextAnimation = {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: { opacity: 0 },
  };
  const testimonialImageAnimation = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: { opacity: 0.25, scale: 0.75 },
  };

  return (
    <div>
      <SlideParent>
        <div className='h-full flex justify-center items-center p-16 cursor-default'>
          <motion.div
            className={classNames('flex flex-col p-8')}
            key={quote}
            variants={testimonialTextAnimation}
            initial='hidden'
            animate='visible'
          >
            {preHeading && (
              <AnimatedText
                disableAnimations={disableAnimations}
                className='text-textPrimary serifHeading text-xs mb-4'
                splitOn='chars'
                staggerChildren
                animation='opacity-right'
              >
                {preHeading}
              </AnimatedText>
            )}
            {quote && (
              <AnimatedText
                disableAnimations={disableAnimations}
                className='text-textPrimary sansBody text-sm'
                splitOn='words'
                staggerChildren
                animation='bottom'
              >
                {quote}
              </AnimatedText>
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
          </motion.div>
          <motion.div
            key={imageUrl}
            variants={testimonialImageAnimation}
            initial='hidden'
            animate='visible'
          >
            {imageUrl && (
              <div className={classNames('p-8')}>
                <Image border size='lg' imageUrl={imageUrl} />
              </div>
            )}
          </motion.div>
        </div>
      </SlideParent>
      <BlurBlob position={1} size='large' color='tertiary' />
    </div>
  );
};

export default TestimonialSlide;

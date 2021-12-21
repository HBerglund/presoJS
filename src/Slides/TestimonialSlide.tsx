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
  return (
    <SlideParent>
      <div className='h-full flex justify-center items-center p-16'>
        <div className={classNames('flex flex-col p-8')}>
          {preHeading && (
            <div className={classNames('text-primary text-body mb-4')}>
              {preHeading}
            </div>
          )}
          {quote && (
            <motion.div
              className={classNames('text-textPrimary text-md')}
              key={quote}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {quote}
            </motion.div>
          )}
          {name && (
            <motion.div
              className={classNames('text-textSecondary text-body mt-4')}
              key={name}
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.75 }}
              transition={{ duration: 0.5 }}
            >
              {name}
            </motion.div>
          )}
          {role && (
            <div className={classNames('text-tertiary text-body opacity-60')}>
              {role}
            </div>
          )}
        </div>
        {imageUrl && (
          <motion.div
            className={classNames('')}
            key={imageUrl}
            initial={{
              opacity: 0.25,
            }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: '0%',
            }}
            transition={{ duration: 0.5 }}
          >
            <div className={classNames('p-8')}>
              <Image border size='lg' imageUrl={imageUrl} />
            </div>
          </motion.div>
        )}
      </div>
    </SlideParent>
  );
};

export default TestimonialSlide;

import React, { FC, useContext } from 'react';
import { PresentationContext } from '../Context/PresentationContext';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import SlideParent from '../Components/SlideParent';
import Image from '../Components/Image';

type ChapterSlideProps = {
  alignXY: 'left' | 'center';
  chapter: number;
  title: string;
  subTitle: string;
  image: string;
};

const ChapterSlide: FC<ChapterSlideProps> = ({
  alignXY,
  chapter,
  title,
  subTitle,
  image,
}: ChapterSlideProps) => {
  const presentationContext = useContext(PresentationContext);
  return (
    <SlideParent>
      <div
        className={classNames(
          `w-full flex ${
            alignXY !== 'left' ? 'justify-center' : 'justify-between'
          }`
        )}
      >
        <div
          className={classNames(
            `flex flex-col items-${alignXY} hover:cursor-default`
          )}
        >
          <div className={classNames('my-8')}>
            {chapter && (
              <div className={classNames('flex flex-row items-center')}>
                <motion.span
                  className={classNames(
                    'text-textPrimary bodySans text-xs mr-4'
                  )}
                  key={chapter}
                  initial={{
                    opacity: 0,
                    x:
                      presentationContext.direction === 'forward'
                        ? '1200'
                        : '-600',
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    opacity: {
                      duration:
                        presentationContext.direction === 'forward'
                          ? '0.8'
                          : '1',
                    },
                  }}
                >
                  Chapter
                </motion.span>
                <motion.div
                  className={classNames(
                    'w-11 h-11 flex justify-center items-center bg-gradient-to-l from-primary to-secondary rounded-full'
                  )}
                  key={chapter}
                  initial={{
                    opacity: 0,
                    x:
                      presentationContext.direction === 'forward'
                        ? '1600'
                        : '-800',
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    opacity: {
                      duration:
                        presentationContext.direction === 'forward'
                          ? '1'
                          : '0.8',
                    },
                  }}
                >
                  <div
                    className={classNames(
                      'w-10 h-10 flex justify-center items-center bg-black rounded-full'
                    )}
                  >
                    <div
                      className={classNames(
                        'text-textPrimary serifHeading text-xs text-center'
                      )}
                    >
                      {chapter}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
          {title && (
            <motion.span
              className={classNames('text-textPrimary text-lg serifHeading')}
              key={title}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, opacity: { duration: 1 } }}
            >
              {title}
            </motion.span>
          )}
          {subTitle && (
            <motion.span
              className={classNames('text-textPrimary text-lg sansHeading')}
              key={title}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                opacity: { duration: 1, delay: 0.25 },
              }}
            >
              {subTitle}
            </motion.span>
          )}
        </div>
        {alignXY === 'left' && (
          <motion.div
            className={classNames('mr-16')}
            key={image}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, opacity: { duration: 1 } }}
          >
            <Image imageUrl={image} border size='lg' />
          </motion.div>
        )}
      </div>
    </SlideParent>
  );
};

export default ChapterSlide;

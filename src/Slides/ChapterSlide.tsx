import React, { FC, useContext } from 'react';
import { PresentationContext } from '../Context/PresentationContext';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import SlideParent from '../Components/SlideParent';

type ChapterSlideProps = {
  alignXY: 'left' | 'center';
  chapter: number;
  title: string;
  subTitle: string;
};

const ChapterSlide: FC<ChapterSlideProps> = ({
  alignXY,
  chapter,
  title,
  subTitle,
}: ChapterSlideProps) => {
  const presentationContext = useContext(PresentationContext);
  return (
    <SlideParent>
      <div
        className={classNames(`w-full flex justify-${alignXY} items-center`)}
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
                    'text-tertiary text-body tracking-heading uppercase mr-4'
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
                  transition={{ duration: 0.8, opacity: { duration: 0.8 } }}
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
                  transition={{ duration: 0.8, opacity: { duration: 1 } }}
                >
                  <div
                    className={classNames(
                      'w-10 h-10 fixed flex justify-center bg-black rounded-full'
                    )}
                  >
                    <div
                      className={classNames(
                        'absolute -top-1 text-textPrimary text-body font-light font-serif'
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
              className={classNames(
                'text-textPrimary text-lg tracking-heading font-extralight font-serif uppercase'
              )}
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
              className={classNames(
                'text-textPrimary text-lg tracking-heading font-semibold uppercase'
              )}
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
      </div>
    </SlideParent>
  );
};

export default ChapterSlide;

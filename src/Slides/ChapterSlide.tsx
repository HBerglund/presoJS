import React, { FC } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import SlideParent from '../Components/SlideParent';

type ChapterSlideProps = {
  chapter: number;
  title: string;
  subTitle: string;
};

const ChapterSlide: FC<ChapterSlideProps> = ({
  chapter,
  title,
  subTitle,
}: ChapterSlideProps) => {
  return (
    <SlideParent>
      <div className='flex items-center'>
        <div className={classNames('flex flex-col hover:cursor-default')}>
          <div className={classNames('my-4')}>
            {chapter && (
              <div className={classNames('flex flex-row items-center')}>
                <motion.span
                  className={classNames(
                    'text-tertiary text-body font-semibold uppercase mr-4'
                  )}
                  key={chapter}
                  initial={{ opacity: 0, x: 1200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, opacity: { duration: 1 } }}
                >
                  Chapter
                </motion.span>
                <motion.div
                  className={classNames(
                    'w-12 h-12 flex justify-center border-2 bg-transparent rounded-full'
                  )}
                  key={chapter}
                  initial={{ opacity: 0, x: 1600 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, opacity: { duration: 1.5 } }}
                >
                  <span
                    className={classNames(
                      'flex items-center text-primary text-body'
                    )}
                  >
                    {chapter}
                  </span>
                </motion.div>
              </div>
            )}
          </div>
          {title && (
            <span
              className={classNames(
                'text-textPrimary text-lg tracking-heading font-bold uppercase'
              )}
            >
              {title}
            </span>
          )}
          {subTitle && (
            <span className={classNames('text-textSecondary text-body')}>
              {subTitle}
            </span>
          )}
        </div>
      </div>
    </SlideParent>
  );
};

export default ChapterSlide;

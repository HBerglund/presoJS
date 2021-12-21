import classNames from 'classnames';
import React, { FC } from 'react';
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
      <div className='flex items-center p-20'>
        <div className={classNames('flex flex-col hover:cursor-default')}>
          <div className={classNames('mb-2')}>
            <div className={classNames('flex flex-row items-center')}>
              <span
                className={classNames(
                  'text-tertiary text-body font-semibold uppercase mr-4'
                )}
              >
                {chapter && 'Chapter'}
              </span>
              <div
                className={classNames(
                  'w-12 h-12 border-2 bg-transparent rounded-full'
                )}
              >
                {chapter && (
                  <span
                    className={classNames(
                      'h-full w-full flex justify-center items-center text-primary text-body font-semibold'
                    )}
                  >
                    {chapter}
                  </span>
                )}
              </div>
            </div>
          </div>
          {title && (
            <span className={classNames('text-textSecondary text-body')}>
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

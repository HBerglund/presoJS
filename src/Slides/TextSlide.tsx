import React from 'react';
import classNames from 'classnames';
import SlideParent from '../Components/SlideParent';

interface TextSlideProps {
  alignYX?: 'topLeft' | 'topCenter' | 'centerCenter';
  title?: string;
  subTitle?: string;
  preTitle?: string;
  paragraph?: string;
}

const TextSlide = ({
  alignYX,
  title,
  subTitle,
  preTitle,
  paragraph,
}: TextSlideProps) => {
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
    <SlideParent>
      <div className={classNames('h-full flex flex-col', getAlignment())}>
        {preTitle && (
          <span className='text-textPrimary text-xs serifHeading'>
            {preTitle}
          </span>
        )}
        {title && (
          <span className='text-textPrimary text-xl sansHeading'>{title}</span>
        )}
        {subTitle && (
          <span className='text-primary text-sm sansHeading mb-12'>
            {subTitle}
          </span>
        )}
        {paragraph && (
          <span className='text-textPrimary sansBody text-xs'>{paragraph}</span>
        )}
      </div>
    </SlideParent>
  );
};

export default TextSlide;

import React from 'react';
import classNames from 'classnames';
import SlideParent from '../Components/SlideParent';

interface TextSlideProps {
  alignYX?: 'topLeft' | 'topCenter' | 'centerCenter';
  title?: string;
  subTitle?: string;
  paragraph?: string;
}

const TextSlide = ({ alignYX, title, subTitle, paragraph }: TextSlideProps) => {
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
        {title && <span className='text-textPrimary text-xl'>{title}</span>}
        {subTitle && (
          <span className='text-textPrimary text-lg mb-8'>{subTitle}</span>
        )}
        {paragraph && (
          <span className='text-textPrimary text-body'>{paragraph}</span>
        )}
      </div>
    </SlideParent>
  );
};

export default TextSlide;

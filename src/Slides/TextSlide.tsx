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
        {title && <span className='text-textPrimary'>{title}</span>}
        {subTitle && <span className='text-textPrimary mb-8'>{subTitle}</span>}
        {paragraph && <span className='text-textPrimary'>{paragraph}</span>}
      </div>
    </SlideParent>
  );
};

export default TextSlide;

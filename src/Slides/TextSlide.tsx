import React from 'react';
import classNames from 'classnames';
import SlideParent from '../Components/SlideParent';
import AnimatedText from '../Components/AnimatedText';

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
        {title && (
          <AnimatedText
            size='md'
            variant='sansHeading'
            splitOn='chars'
            animateFrom='bottom'
            overflowHidden
          >
            {title}
          </AnimatedText>
        )}
        <AnimatedText
          size='lg'
          variant='sansHeading'
          splitOn='chars'
          overflowHidden
          delay={1}
          animateFrom='bottom'
        >
          {subTitle}
        </AnimatedText>
        <AnimatedText
          size='md'
          variant='sansHeading'
          overflowHidden
          delay={2}
          animateFrom='bottom'
        >
          {paragraph}
        </AnimatedText>
      </div>
    </SlideParent>
  );
};

export default TextSlide;

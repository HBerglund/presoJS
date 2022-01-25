import React from 'react';
import classNames from 'classnames';
import SlideParent from '../Components/SlideParent';
import AnimatedText from '../Components/AnimatedText';
import BlurBlob from '../Components/BlurBlob';

interface TextSlideProps {
  alignYX?: 'topLeft' | 'topCenter' | 'centerCenter';
  title?: string;
  subTitle?: string;
  preTitle?: string;
  paragraph?: string;
  disableAnimations?: boolean;
}

/**
 * @property {string} alignYX - Position of content ('topLeft' | 'topCenter' | 'centerCenter')
 * @property {string} title - Title displayed with text-xl and text-textPrimary color.
 * @property {string} subTitle - Sub title displayed with text-sm and text-primary color.
 * @property {string} preTitle - Pre title displayed with text-xs and text-textPrimary color.
 * @property {string} paragraph - Paragraph displayed with text-sm and text-textPrimary color.
 * @property {string} disableAnimations - If true, no text animations are shown for text.
 */
const TextSlide = ({
  alignYX,
  title,
  subTitle,
  preTitle,
  paragraph,
  disableAnimations,
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
    <div>
      <SlideParent>
        <div
          className={classNames('h-full w-full flex flex-col', getAlignment())}
        >
          {preTitle && (
            <AnimatedText
              disableAnimations={disableAnimations}
              className='serifHeading text-xs text-textPrimary'
              splitOn='chars'
              staggerChildren
              animation='bottom'
            >
              {preTitle}
            </AnimatedText>
          )}
          {title && (
            <AnimatedText
              disableAnimations={disableAnimations}
              className='sansHeading text-xl text-textPrimary'
              splitOn='chars'
              staggerChildren
              animation='bottom'
              delay={0.25}
            >
              {title}
            </AnimatedText>
          )}
          <div className='mb-8'>
            <AnimatedText
              disableAnimations={disableAnimations}
              className='sansHeading text-sm text-primary'
              splitOn='chars'
              staggerChildren
              delay={0.5}
              animation='bottom'
            >
              {subTitle}
            </AnimatedText>
          </div>
          <AnimatedText
            disableAnimations={disableAnimations}
            className='sansBody text-sm text-textPrimary'
            splitOn='words'
            delay={1.5}
            animation='bottom'
          >
            {paragraph}
          </AnimatedText>
        </div>
      </SlideParent>
      <BlurBlob position={2} size='large' color='secondary' />
      <BlurBlob position={4} size='small' color='primary' />
    </div>
  );
};

export default TextSlide;

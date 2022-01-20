import React, { FC, useEffect } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import SlideParent from '../Components/SlideParent';

type Props = {
  alignXY?: 'left' | 'center';
  title?: string;
  subTitle?: string;
  url: string;
  size?: 'full' | 'large' | 'small';
};

const VideoSlide: FC<Props> = ({ alignXY, title, subTitle, url, size }) => {
  useEffect(() => {
    getAlignment();
    getWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAlignment = () => {
    switch (alignXY) {
      case 'left':
        return 'justify-start';
      case 'center':
        return 'justify-center';
      default:
        return 'justify-start';
    }
  };
  const getWidth = () => {
    switch (size) {
      case 'full':
        return '100%';
      case 'large':
        return '80%';
      case 'small':
        return '60%';
      default:
        return '60%';
    }
  };

  return (
    <SlideParent>
      {subTitle && (
        <span
          className={classNames(
            'text-textPrimary serifHeading text-xs text-center w-full'
          )}
        >
          {subTitle}
        </span>
      )}
      {title && (
        <span
          className={classNames(
            'text-center sansHeading text-textPrimary text-lg w-full'
          )}
        >
          {title}
        </span>
      )}
      <motion.div
        className={classNames('w-full h-full flex justify-center mt-8')}
        key={url}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <iframe
          className={classNames(
            'rounded p-2 bg-gradient-to-l from-primary to-secondary'
          )}
          title={title ? title : 'video'}
          src={url}
          width={getWidth()}
          height={'100%'}
          allowFullScreen
        ></iframe>
      </motion.div>
    </SlideParent>
  );
};

export default VideoSlide;

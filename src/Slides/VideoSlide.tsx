import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import SlideParent from '../Components/SlideParent';

type Props = {
  title?: string;
  subTitle?: string;
  url: string;
  size?: 'lg' | 'sm';
};

const VideoSlide: FC<Props> = ({ title, subTitle, url, size }) => {
  const [width, setWidth] = useState<string>('80%');

  useEffect(() => {
    getWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWidth = () => {
    switch (size) {
      case 'lg':
        setWidth('80%');
        break;
      case 'sm':
        setWidth('60%');
        break;
      default:
        setWidth('80%');
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
          width={width}
          height={'100%'}
          allowFullScreen
        ></iframe>
      </motion.div>
    </SlideParent>
  );
};

export default VideoSlide;

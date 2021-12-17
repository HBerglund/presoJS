import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import SlideParent from '../Components/SlideParent';
import { motion } from 'framer-motion';
import { PresentationContext } from '../Context/PresentationContext';

type Props = {
  title?: string;
  subTitle?: string;
  url: string;
  size?: 'xl' | 'lg' | 'md' | 'sm';
};

const VideoSlide: FC<Props> = ({ title, subTitle, url, size }) => {
  const presentationContext = useContext(PresentationContext);

  const getSize = () => {
    switch (size) {
      case 'xl':
        return '100%';
      case 'lg':
        return '80%';
      case 'md':
        return '60%';
      case 'sm':
        return '40%';
      default:
        return '60%';
    }
  };

  return (
    <SlideParent>
      {title && (
        <motion.span
          className={classNames(
            'text-textPrimary text-lg tracking-heading text-center w-full uppercase'
          )}
          key={title}
          initial={{
            opacity: 0,
            x: presentationContext.direction === 'forward' ? '100%' : '-100%',
          }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '0%' }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.span>
      )}
      {subTitle && (
        <motion.span
          className={classNames(
            'text-textSecondary text-md tracking-heading text-center w-full'
          )}
          key={subTitle}
          initial={{
            opacity: 0,
            x: presentationContext.direction === 'forward' ? '100%' : '-100%',
          }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '0' }}
          transition={{ duration: 0.7 }}
        >
          {subTitle}
        </motion.span>
      )}
      <motion.div
        className={classNames('w-full h-full')}
        key={url}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={classNames('h-full flex justify-center items-center')}>
          <iframe
            title='video'
            src={url}
            width={getSize()}
            height='100%'
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </SlideParent>
  );
};

export default VideoSlide;

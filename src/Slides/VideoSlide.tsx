import React, { FC, useContext, useEffect, useState } from 'react';
import { PresentationContext } from '../Context/PresentationContext';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import SlideParent from '../Components/SlideParent';

type Props = {
  title?: string;
  subTitle?: string;
  url: string;
  size?: 'lg' | 'md' | 'sm';
};

const VideoSlide: FC<Props> = ({ title, subTitle, url, size }) => {
  const presentationContext = useContext(PresentationContext);
  const [width, setWidth] = useState<string>('80%');

  useEffect(() => {
    getWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWidth = () => {
    switch (size) {
      case 'lg':
        setWidth('100%');
        break;
      case 'md':
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
      {title && (
        <motion.span
          className={classNames(
            ' w-full text-center text-textPrimary text-lg font-semibold tracking-heading uppercase'
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
        className={classNames('w-full h-full flex justify-center mt-8')}
        key={url}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
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

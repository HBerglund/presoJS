import React, { FC } from 'react';
import classNames from 'classnames';
import SlideParent from '../Components/SlideParent';

type Props = {
  title?: string;
  subTitle?: string;
  url: string;
  size?: 'xl' | 'lg' | 'md' | 'sm';
};

const VideoSlide: FC<Props> = ({ title, subTitle, url, size }) => {
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
      <div className='w-full h-full flex flex-col'>
        {title && (
          <span
            className={classNames(
              'text-textPrimary text-lg tracking-heading text-center w-full uppercase'
            )}
          >
            {title}
          </span>
        )}
        {subTitle && (
          <span
            className={classNames(
              'text-textSecondary text-md tracking-heading text-center w-full'
            )}
          >
            {subTitle}
          </span>
        )}
        <div className={classNames('h-full flex justify-center items-center')}>
          <iframe
            title='video'
            src={url}
            width={getSize()}
            height='100%'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </SlideParent>
  );
};

export default VideoSlide;

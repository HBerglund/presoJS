import React, { FC } from 'react';
import classNames from 'classnames';
import SlideParent from '../Components/SlideParent';

type Props = {
  title?: string;
  subTitle?: string;
  url: string;
};

const VideoSlide: FC<Props> = ({ title, subTitle, url }) => {
  return (
    <SlideParent>
      <div className='h-full flex flex-col'>
        {title && (
          <span className={classNames('text-textPrimary text-lg')}>
            {title}
          </span>
        )}
        {subTitle && (
          <span className={classNames('text-textSecondary text-md mb-8')}>
            {subTitle}
          </span>
        )}
        <video controls src={url}></video>
      </div>
    </SlideParent>
  );
};

export default VideoSlide;

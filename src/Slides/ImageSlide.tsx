import React, { FC } from 'react';
import classNames from 'classnames';
import SlideParent from '../Components/SlideParent';

type ImageSlideProps = {
  title: string;
  subTitle: string;
  imageUrls: string[];
};

const ImageSlide: FC<ImageSlideProps> = ({
  title,
  subTitle,
  imageUrls,
}: ImageSlideProps) => {
  const setImageWidth = () => {
    switch (imageUrls.length) {
      case 1:
        return 'w-full';
      case 2:
        return 'w-1/2';
      case 3:
        return 'w-1/3';
      case 4:
        return 'w-1/4';
    }
  };

  return (
    <SlideParent>
      <div className={classNames('w-full flex flex-col')}>
        <div className={classNames('flex flex-col')}>
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
        </div>
        <div className={classNames('flex flex-row')}>
          {imageUrls.map((url: string) => (
            <img
              className={classNames('h-96 object-cover my-4', setImageWidth())}
              src={url}
              alt=''
            />
          ))}
        </div>
      </div>
    </SlideParent>
  );
};

export default ImageSlide;

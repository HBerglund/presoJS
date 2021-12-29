import React, { FC, Fragment, useContext } from 'react';
import { PresentationContext } from '../Context/PresentationContext';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import SlideParent from '../Components/SlideParent';
import BlurBlob from '../Components/BlurBlob';

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
  const presentationContext = useContext(PresentationContext);

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

  const imagesAnimation = {
    visible: {
      opacity: 1,
      x: '0',
      transition: {
        duration: 0.8,
      },
    },
    hidden: {
      opacity: 0,
      x: presentationContext.direction === 'forward' ? '100%' : '-100%',
    },
  };

  return (
    <Fragment>
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
            {imageUrls.map((url: string, id: number) => (
              <motion.img
                className={classNames(
                  'h-96 object-cover my-4',
                  setImageWidth()
                )}
                src={url}
                alt=''
                key={id}
                variants={imagesAnimation}
                initial='hidden'
                animate='visible'
              ></motion.img>
            ))}
          </div>
        </div>
      </SlideParent>
      <BlurBlob position={2} color='tertiary' size='small' />
      <BlurBlob position={1} color='tertiary' size='large' />
    </Fragment>
  );
};

export default ImageSlide;

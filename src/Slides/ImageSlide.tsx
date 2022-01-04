import React, { FC, Fragment, useContext } from 'react';
import { PresentationContext } from '../Context/PresentationContext';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import SlideParent from '../Components/SlideParent';
import BlurBlob from '../Components/BlurBlob';

type ImageSlideProps = {
  title?: string;
  subTitle?: string;
  imageUrls: string[];
};

const ImageSlide: FC<ImageSlideProps> = ({
  title,
  subTitle,
  imageUrls,
}: ImageSlideProps) => {
  const presentationContext = useContext(PresentationContext);
  console.log(imageUrls.length);

  const setImageWidth = () => {
    switch (imageUrls.length) {
      case 1:
        return 'w-full h-2/5';
      case 2:
        return 'w-1/2 h-3/4';
      case 3:
        return 'w-1/3 h-2/3';
      case 4:
        return 'w-1/4 h-3/4';
      default:
        return 'hidden';
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
        <div
          className={classNames('w-full h-full flex flex-col justify-between')}
        >
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
            {imageUrls.length <= 4 ? (
              imageUrls.map((url: string, id: number) => (
                <motion.img
                  className={classNames('object-cover my-4', setImageWidth())}
                  src={url}
                  alt=''
                  key={id}
                  variants={imagesAnimation}
                  initial='hidden'
                  animate='visible'
                ></motion.img>
              ))
            ) : (
              <img
                className={classNames('object-cover my-4 w-full h-2/5')}
                src={
                  'https://media.istockphoto.com/photos/concept-of-error-in-program-code-picture-id1308685498?s=2048x2048'
                }
                alt='Error'
              ></img>
            )}
          </div>
        </div>
      </SlideParent>
      <BlurBlob position={2} color='tertiary' size='small' />
      <BlurBlob position={1} color='tertiary' size='large' />
    </Fragment>
  );
};

export default ImageSlide;

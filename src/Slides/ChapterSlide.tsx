import React, { FC, Fragment, useContext } from 'react';
import { PresentationContext } from '../Context/PresentationContext';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import SlideParent from '../Components/SlideParent';
import Image from '../Components/Image';
import AnimatedText from '../Components/AnimatedText';
import BlurBlob from '../Components/BlurBlob';

type ChapterSlideProps = {
  alignXY: 'left' | 'center';
  chapter: number;
  title: string;
  subTitle: string;
  image: string;
  disableAnimations?: boolean;
};

const ChapterSlide: FC<ChapterSlideProps> = ({
  alignXY,
  chapter,
  title,
  subTitle,
  image,
  disableAnimations,
}: ChapterSlideProps) => {
  const presentationContext = useContext(PresentationContext);
  const chapterAnimation = {
    visible: {
      opacity: 1,
      x: presentationContext.direction === 'forward' ? '1200' : '-600',
      transition: {
        duration: presentationContext.direction === 'forward' ? '0.8' : '1',
      },
    },
    hidden: { opacity: 0, x: 0 },
  };
  const chapterImageAnimation = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 0.25 },
    },
    hidden: { opacity: 0, scale: 0.6 },
  };

  return (
    <Fragment>
      <SlideParent>
        <div
          className={classNames(
            `w-full flex ${
              alignXY !== 'left' ? 'justify-center' : 'justify-between'
            }`
          )}
        >
          <div
            className={classNames(
              `flex flex-col items-${alignXY} hover:cursor-default`
            )}
          >
            <div className={classNames('my-8')}>
              <motion.div
                className={classNames('flex flex-row items-center')}
                key={chapter}
                variants={chapterAnimation}
                initial='hidden'
                animate='visible'
              >
                {chapter && (
                  <Fragment>
                    <span
                      className={classNames(
                        'text-textPrimary bodySans text-xs mr-4'
                      )}
                    >
                      Chapter
                    </span>
                    <div
                      className={classNames(
                        'w-11 h-11 p-0.5 flex justify-center items-center bg-gradient-to-l from-primary to-secondary rounded-full'
                      )}
                    >
                      <div
                        className={classNames(
                          'w-full h-full flex justify-center items-center bg-black rounded-full'
                        )}
                      >
                        <span
                          className={classNames(
                            'text-textPrimary serifHeading text-center text-xs leading-none mt-1 mb-[10px] mr-[1px]'
                          )}
                        >
                          {chapter}
                        </span>
                      </div>
                    </div>
                  </Fragment>
                )}
              </motion.div>
            </div>
            {title && (
              <AnimatedText
                disableAnimations={disableAnimations}
                className='text-textPrimary text-lg serifHeading'
                splitOn='words'
                staggerChildren
                animation='bottom'
                delay={0.5}
              >
                {title}
              </AnimatedText>
            )}
            {subTitle && (
              <AnimatedText
                disableAnimations={disableAnimations}
                className='text-textPrimary text-lg sansHeading'
                splitOn='chars'
                staggerChildren
                animation='bottom'
                delay={0.75}
              >
                {subTitle}
              </AnimatedText>
            )}
          </div>
          {alignXY === 'left' && (
            <motion.div
              key={image}
              variants={chapterImageAnimation}
              initial='hidden'
              animate='visible'
            >
              <Image imageUrl={image} border size='lg' />
            </motion.div>
          )}
        </div>
      </SlideParent>
      <BlurBlob position={1} size='large' color='tertiary' />
      <BlurBlob position={3} size='small' color='primary' />
    </Fragment>
  );
};

export default ChapterSlide;

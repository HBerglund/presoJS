import React, { FC, Fragment, useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { CarouselSlideType } from '../data';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg';
import SlideParent from '../Components/SlideParent';
import BlurBlob from '../Components/BlurBlob';
import AnimatedText from '../Components/AnimatedText';

interface CarouselSlideProps {
  carouselCards: CarouselSlideType[];
  title?: string;
}

/**
 * @property {array} carouselCards - Array of CarouselSlideCard.
 */
const CarouselSlide: FC<CarouselSlideProps> = ({
  carouselCards,
  title,
}: CarouselSlideProps) => {
  const [current, setCurrent] = useState<number>(0);

  const cardContentAnimation = useAnimation();

  const keyPress = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case 'd':
        moveForward();
        break;
      case 'a':
        moveBackward();
        break;
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('keyup', keyPress);
    return () => window.removeEventListener('keyup', keyPress);
  }, [keyPress]);

  const moveForward = () => {
    cardContentAnimation.start({
      x: '-100%',
      transition: {
        duration: 1,
      },
    });
    setCurrent((prev) => {
      if (prev !== carouselCards.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const moveBackward = () => {
    cardContentAnimation.start({
      x: '100%',
      transition: {
        duration: 1,
      },
    });
    setCurrent((prev) => {
      if (prev !== 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  const fillIfActive = (card: CarouselSlideType) => {
    if (carouselCards[current].id === card.id) {
      return 'bg-white';
    }
    return 'bg-transparent';
  };

  const carouselCardAnimation = {
    visible: { transition: { duration: 0.5 } },
    hidden: { transition: { duration: 0.5 } },
  };

  return (
    <Fragment>
      <SlideParent>
        <div
          className={classNames(
            'w-full h-full flex justify-center flex-col items-center'
          )}
        >
          {title && (
            <AnimatedText
              splitOn='words'
              className='sansHeading text-md text-textPrimary text-center w-full mt-[-64px] mb-16'
            >
              {title}
            </AnimatedText>
          )}
          <div>
            <div className={classNames('flex justify-center items-center')}>
              <motion.div
                className={classNames(
                  current === 0
                    ? 'w-16 h-16'
                    : 'w-16 h-16 flex justify-center border rounded-full'
                )}
              >
                <button
                  onClick={moveBackward}
                  className={classNames(
                    'flex items-center',
                    current === 0 ? 'invisible' : 'visible'
                  )}
                >
                  <ArrowLeft />
                </button>
              </motion.div>
              <motion.div
                className={classNames('w-full h-full mx-20')}
                style={{ width: '800px', height: '400px' }}
                key={carouselCards[current].id}
                variants={carouselCardAnimation}
                initial='hidden'
                animate={cardContentAnimation}
              >
                {carouselCards[current].component}
              </motion.div>
              <motion.div
                className={classNames(
                  current === carouselCards.length - 1
                    ? 'w-16 h-16'
                    : 'w-16 h-16 flex justify-center border rounded-full'
                )}
              >
                <button
                  onClick={moveForward}
                  className={classNames(
                    current === carouselCards.length - 1
                      ? 'invisible'
                      : 'visible'
                  )}
                >
                  <ArrowRight />
                </button>
              </motion.div>
            </div>
            <div
              className={classNames('text-primary flex justify-center mt-12')}
            >
              {carouselCards.map((card) => (
                <div
                  className={classNames(
                    fillIfActive(card),
                    'w-3 h-3 border rounded-full mx-2'
                  )}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </SlideParent>
      <BlurBlob position={2} size='small' color='tertiary' />
      <BlurBlob position={4} size='large' color='primary' />
    </Fragment>
  );
};

export default CarouselSlide;

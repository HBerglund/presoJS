import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { CarouselSlideType } from '../data';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg';
import SlideParent from '../Components/SlideParent';

type CarouselSliderProps = {
  carouselCards: CarouselSlideType[];
};

const CarouselSlide: FC<CarouselSliderProps> = ({
  carouselCards,
}: CarouselSliderProps) => {
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [current, setCurrent] = useState<number>(0);

  const moveForward = () => {
    setDirection('forward');
    setCurrent((prev) => {
      if (prev !== carouselCards.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const moveBackward = () => {
    setDirection('backward');
    setCurrent((prev) => {
      if (prev !== 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <SlideParent>
      <div
        className={classNames('w-full h-full flex justify-center items-center')}
      >
        <div
          className={classNames(
            current === 0
              ? 'w-12 h-12'
              : 'w-12 h-12 flex justify-center border rounded-full hover:border-2 hover:border-primary'
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
        </div>
        <motion.div
          className={classNames('w-full h-full mx-20')}
          style={{ width: '60%', height: '80%' }}
          key={carouselCards[current].id}
          initial={{
            x: direction === 'forward' ? '200%' : '-200%',
          }}
          animate={{
            x: direction === 'forward' ? '0%' : '0%',
          }}
          exit={{
            x: direction === 'forward' ? '-200%' : '200%',
          }}
          transition={{ duration: 0.5 }}
        >
          {carouselCards[current].component}
        </motion.div>
        <div
          className={classNames(
            current === carouselCards.length - 1
              ? 'w-12 h-12'
              : 'w-12 h-12 flex justify-center border rounded-full hover:border-2 hover:border-primary'
          )}
        >
          <button
            onClick={moveForward}
            className={classNames(
              current === carouselCards.length - 1 ? 'invisible' : 'visible'
            )}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </SlideParent>
  );
};

export default CarouselSlide;

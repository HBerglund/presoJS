import React, { FC, useContext, useState } from 'react';
import { PresentationContext } from '../Context/PresentationContext';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { CarouselSlideType } from '../data';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg';
import SlideParent from '../Components/SlideParent';

type CarouselSliderProps = {
  title?: string;
  carouselCards: CarouselSlideType[];
};

const CarouselSlide: FC<CarouselSliderProps> = ({
  title,
  carouselCards,
}: CarouselSliderProps) => {
  const presentationContext = useContext(PresentationContext);
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
      {title && (
        <motion.span
          className={classNames('text-lg text-textPrimary')}
          key={title}
          initial={{
            opacity: 0,
            x: presentationContext.direction === 'forward' ? '100%' : '-100%',
          }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '0%' }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.span>
      )}
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
          className={classNames('w-full flex justify-center mx-20')}
          style={{ height: 400, width: 800 }}
          key={carouselCards[current].id}
          initial={{
            opacity: 0.5,
            x: direction === 'forward' ? '200%' : '-200%',
          }}
          animate={{
            opacity: 1,
            x: direction === 'forward' ? '0%' : '0%',
          }}
          exit={{
            opacity: 0,
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

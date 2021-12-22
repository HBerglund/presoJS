import React, { FC, useContext, useState } from 'react';
import { PresentationContext } from '../Context/PresentationContext';
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

  const fillIfActive = (card: CarouselSlideType) => {
    if (carouselCards[current].id === card.id) {
      return 'bg-white';
    }
    return 'bg-transparent';
  };

  return (
    <SlideParent>
      <motion.div
        className={classNames('w-full h-full flex justify-center items-center')}
        key={200}
        initial={{
          x: presentationContext.direction === 'forward' ? '200%' : '-200%',
        }}
        animate={{
          x: presentationContext.direction === 'forward' ? '0%' : '0%',
        }}
        exit={{
          x: presentationContext.direction === 'forward' ? '-200%' : '200%',
        }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className={classNames('flex justify-center items-center')}>
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
          <div className={classNames('text-primary flex justify-center mt-4')}>
            {carouselCards.map((card) => (
              <div
                className={classNames(
                  fillIfActive(card),
                  'w-3 h-3 border rounded-full mx-1'
                )}
              ></div>
            ))}
          </div>
        </div>
      </motion.div>
    </SlideParent>
  );
};

export default CarouselSlide;

import React, { FC, useState } from 'react';
import classNames from 'classnames';
import SlideParent from '../Components/SlideParent';
import { SlideType } from '../data';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg';
type CarouselSliderProps = {
  title?: string;
  carouselCards: SlideType[];
};

const CarouselSlide: FC<CarouselSliderProps> = ({
  title,
  carouselCards,
}: CarouselSliderProps) => {
  const [current, setCurrent] = useState<number>(0);

  const goForward = () => {
    setCurrent((prev) => {
      if (prev !== carouselCards.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const goBackward = () => {
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
        <span className={classNames('text-lg text-textPrimary')}>{title}</span>
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
            onClick={goBackward}
            className={classNames(
              'flex items-center',
              current === 0 ? 'invisible' : 'visible'
            )}
          >
            <ArrowLeft />
          </button>
        </div>
        <div
          style={{ height: 400, width: 800 }}
          className={classNames('flex justify-center mx-20')}
        >
          {carouselCards[current].component}
        </div>
        <div
          className={classNames(
            current === carouselCards.length - 1
              ? 'w-12 h-12'
              : 'w-12 h-12 flex justify-center border rounded-full hover:border-2 hover:border-primary'
          )}
        >
          <button
            onClick={goForward}
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

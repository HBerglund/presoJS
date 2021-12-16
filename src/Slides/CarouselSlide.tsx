import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import SlideParent from '../Components/SlideParent';
import { carouselCards, SlideType } from '../data';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../assets/arrow-right.svg';
type CarouselSliderProps = {
  title?: string;
};

const CarouselSlide: FC<CarouselSliderProps> = ({
  title,
}: CarouselSliderProps) => {
  const [current, setCurrent] = useState<number>(0);
  const [totalCards, setTotalCards] = useState<SlideType[]>(carouselCards);

  useEffect(() => {
    setTotalCards(carouselCards);
  }, []);

  const goForward = () => {
    setCurrent((prev) => {
      if (prev !== totalCards.length - 1) {
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
          {totalCards[current]}
        </div>
        <div
          className={classNames(
            current === totalCards.length - 1
              ? 'w-12 h-12'
              : 'w-12 h-12 flex justify-center border rounded-full hover:border-2 hover:border-primary'
          )}
        >
          <button
            onClick={goForward}
            className={classNames(
              current === totalCards.length - 1 ? 'invisible' : 'visible'
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

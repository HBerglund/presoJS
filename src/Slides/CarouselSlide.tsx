import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import SlideParent from '../Components/SlideParent';
import { carouselCards, SlideType } from '../data';
import { ReactComponent as ChevronLeft } from '../assets/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../assets/chevron-right.svg';
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
        <span className={classNames('text-md text-textPrimary')}>{title}</span>
      )}
      <div
        className={classNames('w-full h-full flex justify-center items-center')}
      >
        <button
          onClick={goBackward}
          className={classNames(current === 0 ? 'invisible' : 'visible')}
        >
          <ChevronLeft />
        </button>
        <div
          style={{ height: 400, width: 800 }}
          className={classNames('flex justify-center mx-20')}
        >
          {totalCards[current]}
        </div>
        <button
          onClick={goForward}
          className={classNames(
            current === totalCards.length - 1 ? 'invisible' : 'visible'
          )}
        >
          <ChevronRight />
        </button>
      </div>
    </SlideParent>
  );
};

export default CarouselSlide;

import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import SlideParent from '../Components/SlideParent';
import { carouselCards, SlideType } from '../data';

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
      <div className={classNames('flex')}>
        <button onClick={goBackward}>{'<'}</button>
        <div className={classNames('w-full flex justify-center mx-40')}>
          {totalCards[current]}
        </div>
        <button onClick={goForward}>{'>'}</button>
      </div>
    </SlideParent>
  );
};

export default CarouselSlide;

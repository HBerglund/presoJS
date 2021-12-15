import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { slides, SlideType } from './data';
import { DirectionContext } from './Context/DirectionContext';
import { AnimatePresence } from 'framer-motion';

const Presentation = () => {
  const directionContext = useContext(DirectionContext);
  const [current, setCurrent] = useState<number>(0);
  const [totalSlides, setTotalSlides] = useState<SlideType[]>(slides);

  useEffect(() => {
    setTotalSlides(slides);
    window.addEventListener('keyup', (e: any) => {
      switch (e.key) {
        case 'ArrowRight':
          goForward();
          break;
        case 'ArrowLeft':
          goBackward();
          break;
        case 'ArrowUp':
          break;
        case 'ArrowDown':
          break;
        case 'Enter':
          break;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goForward = () => {
    directionContext.updateDirection('forward');
    setCurrent((prev) => {
      if (prev !== totalSlides.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const goBackward = () => {
    directionContext.updateDirection('backward');
    setCurrent((prev) => {
      if (prev !== 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <AnimatePresence>
      <div>
        <div>
          <div className={classNames('flex')}>
            <button
              className={classNames('bg-black text-white p-4')}
              onClick={goBackward}
            >
              Backward
            </button>
            <button
              className={classNames('bg-black text-white p-4')}
              onClick={goForward}
            >
              Forward
            </button>
          </div>
        </div>
        {totalSlides[current]}
      </div>
    </AnimatePresence>
  );
};

export default Presentation;

import React, { useContext, useEffect, useState } from 'react';
import { slides, SlideType } from './data';
import { PresentationContext } from './Context/DirectionContext';
import { AnimatePresence } from 'framer-motion';

const Presentation = () => {
  const directionContext = useContext(PresentationContext);
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
    <AnimatePresence exitBeforeEnter initial={false}>
      <div key={totalSlides[current].id}>{totalSlides[current].component}</div>
    </AnimatePresence>
  );
};

export default Presentation;

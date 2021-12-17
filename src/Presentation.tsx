import React, { useCallback, useContext, useEffect } from 'react';
import { PresentationContext } from './Context/PresentationContext';
import { AnimatePresence } from 'framer-motion';

const Presentation = () => {
  const presentationContext = useContext(PresentationContext);

  useEffect(() => {
    window.addEventListener('keyup', (e: any) => {
      switch (e.key) {
        case 'ArrowRight':
          presentationContext.moveForward();
          break;
        case 'ArrowLeft':
          presentationContext.moveBackward();
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

  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          presentationContext.moveForward();
          break;
        case 'ArrowLeft':
          presentationContext.moveBackward();
          break;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nextBullet]
  );

  useEffect(() => {
    window.addEventListener('keyup', keyPress);
    return () => window.removeEventListener('keyup', keyPress);
  }, [keyPress]);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <div
        key={
          presentationContext.presentationDeck[presentationContext.currentSlide]
            .id
        }
      >
        {
          presentationContext.presentationDeck[presentationContext.currentSlide]
            .component
        }
      </div>
    </AnimatePresence>
  );
};

export default Presentation;

import React, { useCallback, useContext, useEffect } from 'react';
import { PresentationContext } from './Context/PresentationContext';
import { AnimatePresence } from 'framer-motion';

const Presentation = () => {
  const presentationContext = useContext(PresentationContext);

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
      return;
    },
    [presentationContext]
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

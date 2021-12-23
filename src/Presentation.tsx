import React, { useCallback, useContext, useEffect } from 'react';
import { PresentationContext } from './Context/PresentationContext';
import { AnimatePresence } from 'framer-motion';
import grain from './assets/bg-grain.png';
import BlurBlob from './Components/BlurBlob';

const Presentation = () => {
  const presentationContext = useContext(PresentationContext);
  const { currentSlide, presentationDeck } = presentationContext;

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
    <div>
      <AnimatePresence exitBeforeEnter initial={false}>
        <div key={presentationDeck[currentSlide].id}>
          {presentationDeck[currentSlide].component}
          <div className={'fixed inset-0'}>
            <img
              className={'w-full h-full'}
              src={grain}
              alt='background grain'
            />
          </div>
        </div>
      </AnimatePresence>
      {/* <BlurBlob position={1} size='small' color='primary' />
      <BlurBlob position={3} size='large' color='secondary' /> */}
    </div>
  );
};

export default Presentation;

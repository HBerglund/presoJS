import React, { useContext, useEffect } from 'react';
import { PresentationContext } from './Context/PresentationContext';
import { AnimatePresence } from 'framer-motion';
import grain from './assets/bg-grain.png';

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

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <div
        className='relative overflow-hidden'
        key={
          presentationContext.presentationDeck[presentationContext.currentSlide]
            .id
        }
      >
        {
          presentationContext.presentationDeck[presentationContext.currentSlide]
            .component
        }
        <div className={'fixed inset-0'}>
          <img className={'w-full h-full'} src={grain} alt='background grain' />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Presentation;

import { createContext, FC, useState } from 'react';
import { SlideType, slides } from '../data';

interface PresentationValue {
  direction: 'forward' | 'backward';
  currentSlide: number;
  presentationDeck: SlideType[];
  moveForward: () => void;
  moveBackward: () => void;
}

export const PresentationContext = createContext<PresentationValue>({
  direction: 'forward',
  currentSlide: 0,
  presentationDeck: [],
  moveForward: () => {},
  moveBackward: () => {},
});

const PresentationProvider: FC<{}> = ({ children }) => {
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const presentationDeck = slides;

  const updateDirection = (newValue: 'forward' | 'backward') => {
    setDirection(newValue);
  };

  const moveForward = () => {
    setDirection('forward');
    setCurrentSlide((prev) => {
      if (prev !== presentationDeck.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const moveBackward = () => {
    setDirection('backward');
    setCurrentSlide((prev) => {
      if (prev !== 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  return (
    <PresentationContext.Provider
      value={{
        direction,
        currentSlide,
        presentationDeck,
        moveForward,
        moveBackward,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
};

export default PresentationProvider;

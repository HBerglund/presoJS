import { createContext, FC, useState } from 'react';

interface DirectionValue {
  direction: 'forward' | 'backward';
  updateDirection: (direction: 'forward' | 'backward') => void;
}

export const PresentationContext = createContext<DirectionValue>({
  direction: 'forward',
  updateDirection: () => {},
});

const PresentationProvider: FC<{}> = ({ children }) => {
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const updateDirection = (newValue: 'forward' | 'backward') => {
    setDirection(newValue);
  };

  return (
    <PresentationContext.Provider
      value={{
        direction,
        updateDirection,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
};

export default PresentationProvider;

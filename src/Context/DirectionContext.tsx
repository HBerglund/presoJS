import { createContext, FC, useState } from 'react';

interface DirectionValue {
  direction: 'forward' | 'backward';
  updateDirection: (direction: 'forward' | 'backward') => void;
}

export const DirectionContext = createContext<DirectionValue>({
  direction: 'forward',
  updateDirection: () => {},
});

const DirectionProvider: FC<{}> = ({ children }) => {
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const updateDirection = (newValue: 'forward' | 'backward') => {
    setDirection(newValue);
  };

  return (
    <DirectionContext.Provider
      value={{
        direction,
        updateDirection,
      }}
    >
      {children}
    </DirectionContext.Provider>
  );
};

export default DirectionProvider;

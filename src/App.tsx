import React from 'react';
import DirectionProvider from './Context/DirectionContext';
import Presentation from './Presentation';

function App() {
  return (
    <DirectionProvider>
      <Presentation />
    </DirectionProvider>
  );
}

export default App;

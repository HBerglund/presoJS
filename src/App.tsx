import React from 'react';
import PresentationProvider from './Context/DirectionContext';
import Presentation from './Presentation';

function App() {
  return (
    <PresentationProvider>
      <Presentation />
    </PresentationProvider>
  );
}

export default App;

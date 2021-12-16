import React from 'react';
import PresentationProvider from './Context/PresentationContext';
import Presentation from './Presentation';

function App() {
  return (
    <PresentationProvider>
      <Presentation />
    </PresentationProvider>
  );
}

export default App;

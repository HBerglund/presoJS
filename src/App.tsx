import React from 'react';
import ProgressBar from './Components/ProgressBar';
import PresentationProvider from './Context/PresentationContext';
import Presentation from './Presentation';

function App() {
  return (
    <PresentationProvider>
      <ProgressBar />
      <Presentation />
    </PresentationProvider>
  );
}

export default App;

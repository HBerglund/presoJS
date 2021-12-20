import classNames from 'classnames';
import React from 'react';
import ProgressBar from './Components/ProgressBar';
import PresentationProvider from './Context/PresentationContext';
import Presentation from './Presentation';

function App() {
  return (
    <PresentationProvider>
      <div className={classNames('fixed bottom-0 right-0 left-0 z-50')}>
        <ProgressBar />
      </div>
      <Presentation />
    </PresentationProvider>
  );
}

export default App;

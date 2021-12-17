import classNames from 'classnames';
import React, { useContext } from 'react';
import { PresentationContext } from '../Context/PresentationContext';

const ProgressBar = () => {
  const presentationContext = useContext(PresentationContext);

  return (
    <div className={classNames('flex justify-center')}>
      {presentationContext.presentationDeck.map((slide, index) => {
        if (index === presentationContext.currentSlide) {
          return (
            <p key={index} className={classNames('px-10 text-primary')}>
              {slide.id}
            </p>
          );
        }
        return (
          <p key={index} className={classNames('px-10 text-black')}>
            {slide.id}
          </p>
        );
      })}
    </div>
  );
};

export default ProgressBar;

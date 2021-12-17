import classNames from 'classnames';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { PresentationContext } from '../Context/PresentationContext';

const ProgressBar = () => {
  const presentationContext = useContext(PresentationContext);
  const { currentSlide, presentationDeck } = presentationContext;

  //hur många sldies jag har kvar
  const slidesLeft = presentationDeck.length - (currentSlide + 1);
  console.log(`Jag har ${slidesLeft} slides kvar`);

  //Hur mycket kvar i decimaltal
  const decimalOfSlidesLeft = slidesLeft / presentationDeck.length;
  console.log(`Jag har ${decimalOfSlidesLeft} decimaler kvar`);

  //Hur mycket kvar i procent
  const slidesLeftInPercent = decimalOfSlidesLeft * 100;
  console.log(`Jag har ${slidesLeftInPercent} % kvar`);

  //Hur långt jag kommit i procent
  const progressInPercent = 100 - slidesLeftInPercent;

  // percent converted to pixels
  const progressInPixels = slidesLeftInPercent * 10;

  return (
    <div className={classNames('flex justify-center items-center mt-4')}>
      <div className={classNames('relative flex')}>
        <div
          className={classNames(
            'w-1000px h-2 bg-gradient-to-l from-primary to-secondary'
          )}
        />
        <div
          style={{
            width: `${progressInPixels.toLocaleString()}px`,
          }}
          className={classNames('absolute right-0 h-2 bg-black')}
        />
      </div>
      <span
        style={{
          fontSize: '14px',
        }}
        className={classNames('text-tertiary mx-2')}
      >
        {progressInPercent.toFixed(0).toLocaleString()}%
      </span>
      {/* {presentationContext.presentationDeck.map((slide, index) => {
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
      })} */}
    </div>
  );
};

export default ProgressBar;

import classNames from 'classnames';
import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { PresentationContext } from '../Context/PresentationContext';

const ProgressBar = () => {
  const presentationContext = useContext(PresentationContext);
  const { currentSlide, presentationDeck } = presentationContext;

  const progressInPercent =
    100 -
    ((presentationDeck.length - (currentSlide + 1)) / presentationDeck.length) *
      100;
  const progressInPixels =
    ((presentationDeck.length - (currentSlide + 1)) / presentationDeck.length) *
    100 *
    10;

  return (
    <div className={classNames('flex justify-center items-center mt-4')}>
      <div className={classNames('relative flex')}>
        <div
          className={classNames(
            'w-1000px h-2 bg-gradient-to-l from-primary to-secondary'
          )}
        />
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: `${progressInPixels.toLocaleString()}px` }}
          transition={{ duration: 0.3 }}
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

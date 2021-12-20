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
    1000;

  return (
    <div className={classNames('flex justify-center items-center m-10')}>
      <div
        className={classNames(
          'relative flex outline outline-1 outline-gray-100 rounded'
        )}
      >
        <div
          className={classNames(
            'w-1000px h-2 bg-gradient-to-l from-primary to-secondary rounded'
          )}
        />
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: `${progressInPixels.toLocaleString()}px` }}
          transition={{ duration: 0.3 }}
          className={classNames('absolute right-0 h-2 bg-black rounded-r')}
        >
          <div
            className={classNames(
              'absolute flex justify-center w-40 left-[-5rem] mt-4'
            )}
          >
            <span
              className={classNames('text-white text-center font-bold z-50')}
            >
              {presentationDeck[currentSlide].chapter}
            </span>
          </div>
        </motion.div>
      </div>
      <span
        style={{
          fontSize: '14px',
        }}
        className={classNames('text-white mx-2 font-bold')}
      >
        {progressInPercent.toFixed(0).toLocaleString()}%
      </span>
    </div>
  );
};

export default ProgressBar;

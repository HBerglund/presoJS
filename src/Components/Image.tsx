import classNames from 'classnames';
import React from 'react';

interface ImageProps {
  imageUrl: string;
  border?: true;
  size: 'lg' | 'md' | 'sm';
}

const Image = ({ imageUrl, border, size }: ImageProps) => {
  const getImageSize = () => {
    switch (size) {
      case 'lg':
        return 'largeImage';
      case 'md':
        return 'w-72 h-72';
      case 'sm':
        return 'w-56 h-56';
    }
  };

  return (
    <div
      className={classNames(
        border ? 'p-2 bg-gradient-to-l from-primary to-secondary' : '',
        getImageSize(),
        'rounded-full overflow-hidden relative'
      )}
    >
      <img
        className='w-full h-full object-cover rounded-full'
        src={imageUrl}
        alt=''
      />
      <div className='absolute inset-0 bg-gradient-to-r from-secondary to-tertiary opacity-10'></div>
    </div>
  );
};

export default Image;

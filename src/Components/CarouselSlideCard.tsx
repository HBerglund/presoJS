import React, { FC } from 'react';
import classNames from 'classnames';
import Image from './Image';

type CarouselSlideProps = {
  content?: string;
  name?: string;
  imageUrl?: string;
};

const CarouselSlideCard: FC<CarouselSlideProps> = ({
  content,
  name,
  imageUrl,
}: CarouselSlideProps) => {
  return (
    <div className='flex items-center bg-primary p-20 rounded-3xl border-2'>
      <div className={classNames('flex flex-col')}>
        {content && (
          <span className={classNames('text-textPrimary text-body')}>
            {content}
          </span>
        )}
        {name && (
          <span
            className={classNames(
              'text-textSecondary text-body text-left mt-4'
            )}
          >
            {name}
          </span>
        )}
      </div>
      {imageUrl && (
        <div className={classNames('absolute top-2/3 left-1/4')}>
          <Image border size='sm' imageUrl={imageUrl} />
        </div>
      )}
    </div>
  );
};

export default CarouselSlideCard;

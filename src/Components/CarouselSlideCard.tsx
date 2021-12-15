import React, { FC } from 'react';
import classNames from 'classnames';

type CarouselSlideProps = {
  content?: string;
  name?: string;
};

const CarouselSlideCard: FC<CarouselSlideProps> = ({
  content,
  name,
}: CarouselSlideProps) => {
  return (
    <div
      style={{ height: 400 }}
      className='w-3/4 flex items-center bg-primary p-20 rounded-3xl border-2'
    >
      <div className={classNames('flex flex-col')}>
        <span className={classNames('text-textPrimary text-body')}>
          {content}
        </span>
        <span
          className={classNames('text-textSecondary text-body text-left mt-4')}
        >
          {name}
        </span>
      </div>
    </div>
  );
};

export default CarouselSlideCard;

import React from 'react';
import Bullet from '../Components/Bullet';
import SlideParent from '../Components/SlideParent';

interface Props {
  title?: string;
  subTitle?: string;
  bullets: string[];
}

const BulletSlide = (props: Props) => {
  return (
    <SlideParent>
      <div className='flex flex-col items-start'>
        {props.title ? (
          <span className='text-lg text-textPrimary'>{props.title}</span>
        ) : null}
        {props.subTitle ? (
          <span className='text-md text-textPrimary mt-4'>
            {props.subTitle}
          </span>
        ) : null}
        <div className='flex grow flex-col flex-wrap mt-12'>
          {props.bullets.map((bulletContent) => (
            <Bullet content={bulletContent} />
          ))}
        </div>
      </div>
    </SlideParent>
  );
};

export default BulletSlide;
